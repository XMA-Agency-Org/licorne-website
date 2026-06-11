import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "howItWorksPage",
  title: "How It Works",
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
      name: "processSteps",
      type: "array",
      of: [defineArrayMember({ type: "processStep" })],
    }),
    defineField({
      name: "faqs",
      type: "array",
      of: [defineArrayMember({ type: "faqItem" })],
    }),
    defineField({
      name: "seo",
      type: "seo",
    }),
  ],
});
