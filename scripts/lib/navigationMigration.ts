import type { SanityClient } from "@sanity/client";
import { navigation as seedNavigation } from "../../sanity/seed/site";

type SanityLink = {
  _key?: string;
  _type?: string;
  label?: string;
  href?: string;
  description?: string;
  linkType?: "page" | "custom";
  page?: { _type: "reference"; _ref: string };
  section?: string;
};

type Category = { title?: string; items?: SanityLink[]; [field: string]: unknown };
type NavigationDocument = {
  _id: string;
  _rev?: string;
  _type?: string;
  _createdAt?: string;
  _updatedAt?: string;
  header?: Record<string, unknown>;
  companySetup?: Category;
  serviceCategories?: Category[];
  [field: string]: unknown;
};

const SERVICE_PATH = /^\/services\/([a-z0-9-]+)(?:#([a-z0-9-]+))?$/;

function toReferencedLink(link: SanityLink, serviceIdsBySlug: Map<string, string>): SanityLink {
  if (link.linkType === "page" && link.page) return { ...link, _type: "link" };
  if (!link.href) return { ...link, _type: "link" };

  const match = link.href?.match(SERVICE_PATH);
  const serviceId = match ? serviceIdsBySlug.get(match[1]) : undefined;
  if (!match || !serviceId) return { ...link, _type: "link", linkType: "custom" };

  return {
    ...link,
    _type: "link",
    linkType: "page",
    page: { _type: "reference", _ref: serviceId },
    ...(match[2] ? { section: match[2] } : {}),
  };
}

function referenceServicePages(navigation: NavigationDocument, serviceIdsBySlug: Map<string, string>): NavigationDocument {
  const convert = (link: SanityLink) => toReferencedLink(link, serviceIdsBySlug);
  const convertAll = (links: SanityLink[] | undefined) => links?.map(convert);
  const header = navigation.header as { links?: SanityLink[]; ctaButton?: SanityLink } | undefined;
  const footer = navigation.footer as { companyLinks?: SanityLink[] } | undefined;
  const { linkType: _companySetupLinkType, _type: _companySetupType, ...companySetup } =
    (navigation.companySetup ?? {}) as Category & { linkType?: string; _type?: string };

  return {
    ...navigation,
    header: header && {
      ...header,
      links: convertAll(header.links),
      ctaButton: header.ctaButton && convert(header.ctaButton),
    },
    companySetup: { ...companySetup, items: convertAll(companySetup.items) },
    serviceCategories: navigation.serviceCategories?.map(({ linkType: _categoryLinkType, ...category }) => ({
      ...category,
      _type: "serviceCategory",
      items: convertAll(category.items),
    })),
    resourceLinks: convertAll(navigation.resourceLinks as SanityLink[] | undefined),
    footer: footer && { ...footer, companyLinks: convertAll(footer.companyLinks) },
  };
}

const withMissingFields = <T extends Record<string, unknown>>(current: T | undefined, defaults: Record<string, unknown>) => {
  const merged: Record<string, unknown> = { ...(current ?? {}) };
  for (const [field, defaultValue] of Object.entries(defaults)) {
    if (merged[field] === undefined || merged[field] === null) merged[field] = defaultValue;
  }
  return merged as T;
};

const seedDescriptionsByHref = new Map(
  [...seedNavigation.serviceCategories.flatMap((category) => category.items), ...seedNavigation.companySetup.items]
    .filter((item) => item.description)
    .map((item) => [item.href, item.description as string]),
);

function fillMissingNavigationFields(navigation: NavigationDocument): NavigationDocument {
  const { items: _seedSetupItems, ...companySetupDefaults } = seedNavigation.companySetup;
  const categoryDefaultsByTitle = new Map(
    seedNavigation.serviceCategories.map(({ items: _items, ...category }) => [category.title, category]),
  );

  return {
    ...navigation,
    header: withMissingFields(navigation.header, seedNavigation.header),
    companySetup: withMissingFields(navigation.companySetup, companySetupDefaults),
    serviceCategories: (navigation.serviceCategories ?? []).map((category) => ({
      ...withMissingFields(category, categoryDefaultsByTitle.get(category.title ?? "") ?? {}),
      items: (category.items ?? []).map((item) =>
        item.description || !item.href ? item : { ...item, description: seedDescriptionsByHref.get(item.href) },
      ),
    })),
  };
}

export async function upgradeNavigation(client: SanityClient) {
  const [navigation, services] = await Promise.all([
    client.getDocument<NavigationDocument>("navigation"),
    client.fetch<{ _id: string; slug: string }[]>(
      `*[_type == "service" && defined(slug.current) && !(_id in path("drafts.**"))]{ _id, "slug": slug.current }`,
    ),
  ]);
  if (!navigation) throw new Error("No navigation document found");

  const serviceIdsBySlug = new Map(services.map((service) => [service.slug, service._id]));
  const upgraded = referenceServicePages(fillMissingNavigationFields(navigation), serviceIdsBySlug);
  const { _id, _rev, _type, _createdAt, _updatedAt, ...fields } = upgraded;

  await client.patch(_id).ifRevisionId(_rev as string).set(fields).commit();
}
