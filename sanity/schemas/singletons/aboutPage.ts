import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
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
      name: "story",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({
          name: "paragraphs",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [defineField({ name: "text", type: "text" })],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "whyClients",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "description", type: "text" }),
        defineField({
          name: "items",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
      ],
    }),
    defineField({
      name: "stats",
      type: "array",
      of: [defineArrayMember({ type: "stat" })],
    }),
    defineField({
      name: "journey",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({
          name: "milestones",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "year", type: "string" }),
                defineField({ name: "title", type: "string" }),
                defineField({ name: "description", type: "text" }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "values",
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
      name: "commitment",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({
          name: "paragraphs",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [defineField({ name: "text", type: "text" })],
            }),
          ],
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
