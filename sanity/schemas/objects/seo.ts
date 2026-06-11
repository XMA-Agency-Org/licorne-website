import { defineField, defineType } from "sanity";

export default defineType({
  name: "seo",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "ogImage",
      type: "image",
    }),
  ],
});
