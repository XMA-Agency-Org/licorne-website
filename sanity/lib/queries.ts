import { defineQuery } from "next-sanity";

const imageProjection = `{ ..., asset->{ _id, url, metadata { lqip, dimensions } } }`;
const resolvedHref = `select(
  linkType == "page" && defined(page) => "/services/" + page->slug.current + select(defined(section) && section != "" => "#" + section, ""),
  href
)`;
const linkProjection = `{ "label": coalesce(label, page->title), "href": ${resolvedHref}, description }`;
const serviceCardProjection = `{
  "label": coalesce(label, page->title),
  "href": ${resolvedHref},
  "summary": coalesce(
    description,
    page->deliverables.items[anchor == ^.section][0].description,
    page->listing.summary,
    page->hero.description
  ),
  "badge": page->listing.badge,
  "image": page->hero.image${imageProjection}
}`;

const featuredServiceCardProjection = `{
  "label": coalesce(label, page->title),
  "href": ${resolvedHref},
  "summary": coalesce(page->listing.summary, page->hero.description, description),
  "badge": page->listing.badge,
  "image": page->hero.image${imageProjection}
}`;

export const navigationQuery = defineQuery(`*[_type == "navigation"][0]{
  header{ servicesLabel, servicesHref, resourcesLabel, links[]${linkProjection}, ctaButton${linkProjection} },
  companySetup{ title, href, description, items[]${linkProjection} },
  serviceCategories[]{ title, href, description, showInFooter, items[]${linkProjection} },
  resourceLinks[]${linkProjection},
  footer{ description, companyLinks[]${linkProjection} }
}`);

export const servicesListingQuery = defineQuery(`*[_type == "navigation"][0]{
  companySetup{ title, listingTitle, listingTitleAccent, items[]${featuredServiceCardProjection} },
  serviceCategories[]{ title, href, listingTitle, listingTitleAccent, items[]${serviceCardProjection} }
}`);

export const homepageQuery = defineQuery(`*[_type == "homepage"][0]{
  hero{ ..., bgImage${imageProjection} },
  about{ ..., image${imageProjection} },
  services{ eyebrow, title, items[]{ number, title, description, href, subItems[]${linkProjection} } },
  testimonialsSection{ hidden, eyebrow, title, titleAccent, rows, speed, ctaLabel, ctaHref },
  testimonials[]->{ _id, author, position, text },
  team{ hidden, eyebrow, title, members[]->{ _id, name, role, image${imageProjection} } },
  faq{ hidden, eyebrow, title, items[]{ question, answer } },
  seo
}`);

export const sitemapServicesQuery = defineQuery(`*[_type == "service" && defined(slug.current)]{
  "slug": slug.current,
  _updatedAt
}`);

export const serviceSlugsQuery = defineQuery(`*[_type == "service" && defined(slug.current)]{
  "slug": slug.current
}`);

export const serviceBySlugQuery = defineQuery(`*[_type == "service" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  category,
  hero{ title, description, imageAlt, image${imageProjection} },
  overview{ eyebrow, title, description, highlights, expectationTitle, expectationDescription },
  stats[]{ value, label },
  deliverables{ eyebrow, title, items[]{ anchor, title, description } },
  process{ eyebrow, title, items[]{ step, title, description } },
  faqs{ eyebrow, title, items[]{ question, answer } },
  cta{ title, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref },
  seo{ title, description, keywords, ogImage${imageProjection} }
}`);

export const aboutPageQuery = defineQuery(`*[_type == "aboutPage"][0]{
  hero{ eyebrow, title, description, imageAlt, image${imageProjection} },
  story{ eyebrow, title, paragraphs[]{ text } },
  whyClients{ title, description, items },
  stats[]{ value, label },
  journey{ eyebrow, title, milestones[]{ year, title, description } },
  values{ eyebrow, title, items[]{ title, description } },
  commitment{ eyebrow, title, paragraphs[]{ text } },
  cta{ title, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref },
  seo{ title, description }
}`);
