import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      type: "object",
      fields: [
        defineField({ name: "headline", type: "string" }),
        defineField({
          name: "headlineAccent",
          title: "Headline accent word",
          description: "Rendered in the serif accent style after the headline",
          type: "string",
        }),
        defineField({ name: "subheadline", type: "text", rows: 3 }),
        defineField({ name: "primaryCtaLabel", type: "string" }),
        defineField({ name: "primaryCtaHref", type: "string" }),
        defineField({ name: "secondaryCtaLabel", type: "string" }),
        defineField({ name: "secondaryCtaHref", type: "string" }),
        defineField({
          name: "bgImage",
          title: "Background image",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "about",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({ name: "titleSpan", title: "Title accent word", type: "string" }),
        defineField({ name: "description", type: "text", rows: 5 }),
        defineField({ name: "buttonText", type: "string" }),
        defineField({ name: "buttonHref", type: "string" }),
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "stats",
          type: "array",
          of: [defineArrayMember({ type: "stat" })],
          validation: (rule) => rule.max(4),
        }),
      ],
    }),
    defineField({
      name: "services",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({
          name: "items",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              name: "serviceRow",
              fields: [
                defineField({ name: "number", type: "string" }),
                defineField({ name: "title", type: "string" }),
                defineField({ name: "description", type: "text", rows: 3 }),
                defineField({ name: "href", title: "Overview URL", type: "string" }),
                defineField({
                  name: "subItems",
                  title: "Sub-service links",
                  type: "array",
                  of: [defineArrayMember({ type: "link" })],
                }),
              ],
              preview: { select: { title: "title", subtitle: "number" } },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "testimonials",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "testimonial" }] })],
    }),
    defineField({
      name: "team",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({
          name: "members",
          type: "array",
          of: [defineArrayMember({ type: "reference", to: [{ type: "teamMember" }] })],
        }),
      ],
    }),
    defineField({
      name: "faq",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({
          name: "items",
          type: "array",
          of: [defineArrayMember({ type: "faqItem" })],
        }),
      ],
    }),
    defineField({
      name: "seo",
      type: "seo",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Homepage" }),
  },
});
