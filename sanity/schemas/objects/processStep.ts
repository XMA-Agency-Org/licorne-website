import { defineField, defineType } from "sanity";

export default defineType({
  name: "processStep",
  type: "object",
  fields: [
    defineField({
      name: "step",
      type: "string",
      validation: (rule) => rule.required(),
    }),
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
  ],
});
