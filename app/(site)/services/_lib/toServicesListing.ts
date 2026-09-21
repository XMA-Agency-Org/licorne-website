import type { StaticImageData } from "next/image";
import type { ServicesListingQueryResult } from "@/sanity/types.generated";
import { urlFor } from "@/sanity/lib/image";
import { COMPANY_SETUP, DEFAULT_NAVIGATION, type NavCategory } from "@/lib/navigation";
import FallbackCardImage from "@/public/images/heroes/services.jpg";

export type FeaturedServiceCard = {
  title: string;
  description: string;
  href: string;
  image: StaticImageData | string;
  badge?: string;
};

export type ServiceCard = { title: string; description: string; href: string };

export type ServiceCategoryListing = {
  id: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  services: ServiceCard[];
};

export type ServicesListing = {
  companySetup: { eyebrow: string; title: string; titleAccent?: string; services: FeaturedServiceCard[] };
  categories: ServiceCategoryListing[];
};

type ListingData = NonNullable<ServicesListingQueryResult>;
type CmsCard = NonNullable<NonNullable<NonNullable<ListingData["serviceCategories"]>[number]["items"]>[number]>;

export const anchorIdFor = (title: string) =>
  title
    .toLowerCase()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const hasLabelAndHref = (card: CmsCard): card is CmsCard & { label: string; href: string } =>
  Boolean(card.label && card.href);

const toServiceCard = (card: CmsCard & { label: string; href: string }): ServiceCard => ({
  title: card.label,
  description: card.summary ?? "",
  href: card.href,
});

const toFeaturedCard = (card: CmsCard & { label: string; href: string }): FeaturedServiceCard => ({
  ...toServiceCard(card),
  image: card.image?.asset ? urlFor(card.image).width(900).height(1200).url() : FallbackCardImage,
  badge: card.badge ?? undefined,
});

const categoryListingFromDefaults = (category: NavCategory): ServiceCategoryListing => ({
  id: anchorIdFor(category.title),
  eyebrow: category.title,
  title: category.listingTitle ?? category.title,
  titleAccent: category.listingTitleAccent ?? undefined,
  services: category.items.map((item) => ({
    title: item.label,
    description: item.description ?? "",
    href: item.href,
  })),
});

const DEFAULT_LISTING: ServicesListing = {
  companySetup: {
    eyebrow: COMPANY_SETUP.title,
    title: COMPANY_SETUP.listingTitle ?? COMPANY_SETUP.title,
    titleAccent: COMPANY_SETUP.listingTitleAccent ?? undefined,
    services: COMPANY_SETUP.items.map((item) => ({
      title: item.label,
      description: item.description ?? "",
      href: item.href,
      image: FallbackCardImage,
    })),
  },
  categories: DEFAULT_NAVIGATION.serviceCategories.map(categoryListingFromDefaults),
};

export function toServicesListing(data: ServicesListingQueryResult | null): ServicesListing {
  if (!data) return DEFAULT_LISTING;

  const companySetupCards = (data.companySetup?.items ?? []).filter(hasLabelAndHref).map(toFeaturedCard);
  const categories = (data.serviceCategories ?? [])
    .filter((category) => category.title)
    .map((category) => ({
      id: anchorIdFor(category.title as string),
      eyebrow: category.title as string,
      title: category.listingTitle ?? (category.title as string),
      titleAccent: category.listingTitleAccent ?? undefined,
      services: (category.items ?? []).filter(hasLabelAndHref).map(toServiceCard),
    }))
    .filter((category) => category.services.length);

  return {
    companySetup: {
      eyebrow: data.companySetup?.title ?? DEFAULT_LISTING.companySetup.eyebrow,
      title: data.companySetup?.listingTitle ?? DEFAULT_LISTING.companySetup.title,
      titleAccent: data.companySetup?.listingTitleAccent ?? DEFAULT_LISTING.companySetup.titleAccent,
      services: companySetupCards.length ? companySetupCards : DEFAULT_LISTING.companySetup.services,
    },
    categories: categories.length ? categories : DEFAULT_LISTING.categories,
  };
}
