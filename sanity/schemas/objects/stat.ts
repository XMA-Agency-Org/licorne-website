import { defineField, defineType } from "sanity";

export default defineType({
  name: "stat",
  type: "object",
  fields: [
    defineField({
      name: "value",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
