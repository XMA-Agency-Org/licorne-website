import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "imageAlt",
          title: "Image Alt",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
        }),
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
        defineField({
          name: "highlights",
          title: "Highlights",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "expectationTitle",
          title: "Expectation Title",
          type: "string",
        }),
        defineField({
          name: "expectationDescription",
          title: "Expectation Description",
          type: "text",
        }),
      ],
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [defineArrayMember({ type: "stat" })],
    }),
    defineField({
      name: "deliverables",
      title: "Deliverables",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
        }),
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "items",
          title: "Items",
          type: "array",
          of: [defineArrayMember({ type: "deliverable" })],
        }),
      ],
    }),
    defineField({
      name: "process",
      title: "Process",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
        }),
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "items",
          title: "Items",
          type: "array",
          of: [defineArrayMember({ type: "processStep" })],
        }),
      ],
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
        }),
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "items",
          title: "Items",
          type: "array",
          of: [defineArrayMember({ type: "faqItem" })],
        }),
      ],
    }),
    defineField({
      name: "cta",
      title: "CTA",
      type: "cta",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "hero.image",
    },
  },
});
