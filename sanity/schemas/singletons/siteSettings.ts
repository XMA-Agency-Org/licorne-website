import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "companyName", type: "string" }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "logo", type: "image" }),
    defineField({
      name: "contact",
      type: "object",
      fields: [
        defineField({ name: "email", type: "string" }),
        defineField({ name: "phone", type: "string" }),
        defineField({ name: "address", type: "text" }),
      ],
    }),
    defineField({
      name: "social",
      type: "object",
      fields: [
        defineField({ name: "linkedin", type: "url" }),
        defineField({ name: "instagram", type: "url" }),
        defineField({ name: "twitter", type: "url" }),
        defineField({ name: "facebook", type: "url" }),
      ],
    }),
    defineField({
      name: "defaultSeo",
      type: "seo",
    }),
  ],
});
