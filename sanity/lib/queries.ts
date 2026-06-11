import groq from "groq";

export const homepageQuery = groq`*[_type == "homepage"][0]{
  hero,
  about{
    ...,
    image{..., asset->}
  },
  services,
  whyChooseUs,
  testimonials[]->{
    _id, author, role, location, text, avatar{asset->}, featured
  },
  team{
    eyebrow,
    title,
    members[]->{
      _id, name, role, image{asset->}, bio, order
    }
  },
  faq,
  cta,
  seo
}`;

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0]{
  title,
  slug,
  hero{
    ...,
    image{..., asset->}
  },
  overview,
  stats,
  deliverables,
  process,
  faqs,
  cta,
  seo
}`;

export const allServicesQuery = groq`*[_type == "service"] | order(title asc){
  _id, title, slug, hero{title, description}
}`;

export const navigationQuery = groq`*[_type == "navigation"][0]{
  header,
  footer
}`;

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  companyName, tagline, description, logo{asset->}, contact, social, defaultSeo
}`;

export const aboutPageQuery = groq`*[_type == "aboutPage"][0]{
  hero{
    ...,
    image{..., asset->}
  },
  story,
  whyClients,
  stats,
  journey,
  values,
  commitment,
  cta,
  seo
}`;

export const contactPageQuery = groq`*[_type == "contactPage"][0]{
  hero{
    ...,
    image{..., asset->}
  },
  contactMethods,
  serviceOptions,
  seo
}`;

export const howItWorksPageQuery = groq`*[_type == "howItWorksPage"][0]{
  hero{
    ...,
    image{..., asset->}
  },
  processSteps,
  faqs,
  seo
}`;

export const faqPageQuery = groq`*[_type == "faqCategory"] | order(order asc){
  _id, category, slug, questions, order
}`;

export const allTestimonialsQuery = groq`*[_type == "testimonial"] | order(_createdAt desc){
  _id, author, role, location, text, avatar{asset->}, featured
}`;

export const allTeamMembersQuery = groq`*[_type == "teamMember"] | order(order asc){
  _id, name, role, image{asset->}, bio, order
}`;
