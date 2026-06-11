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
        defineField({ name: "subheadline", type: "text" }),
        defineField({ name: "primaryCtaLabel", type: "string" }),
        defineField({ name: "primaryCtaHref", type: "string" }),
        defineField({ name: "secondaryCtaLabel", type: "string" }),
        defineField({ name: "secondaryCtaHref", type: "string" }),
        defineField({
          name: "bgImage",
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
        defineField({ name: "titleSpan", type: "string" }),
        defineField({ name: "description", type: "text" }),
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
              fields: [
                defineField({ name: "number", type: "string" }),
                defineField({ name: "title", type: "string" }),
                defineField({ name: "description", type: "text" }),
                defineField({ name: "href", type: "string" }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "whyChooseUs",
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
              fields: [
                defineField({ name: "title", type: "string" }),
                defineField({ name: "description", type: "text" }),
              ],
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
      name: "cta",
      type: "cta",
    }),
    defineField({
      name: "seo",
      type: "seo",
    }),
  ],
});
