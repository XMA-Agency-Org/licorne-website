import { defineField, defineType } from "sanity";

export default defineType({
  name: "cta",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "primaryLabel",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "primaryHref",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "secondaryLabel",
      type: "string",
    }),
    defineField({
      name: "secondaryHref",
      type: "string",
    }),
  ],
});
