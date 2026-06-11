import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({ name: "description", type: "text" }),
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({ name: "imageAlt", type: "string" }),
      ],
    }),
    defineField({
      name: "contactMethods",
      type: "object",
      fields: [
        defineField({ name: "email", type: "string" }),
        defineField({ name: "phone", type: "string" }),
        defineField({ name: "address", type: "text" }),
      ],
    }),
    defineField({
      name: "serviceOptions",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "seo",
      type: "seo",
    }),
  ],
});
