import { defineField, defineType } from "sanity";

export default defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      name: "label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "href",
      title: "URL",
      description: "Internal path such as /services/license-services#renewal, or a full URL",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
      description: "Optional one-line description shown in dropdown menus",
    }),
  ],
  preview: {
    select: { title: "label", subtitle: "href" },
  },
});
