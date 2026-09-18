import { defineField, defineType } from "sanity";

export default defineType({
  name: "deliverable",
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
      name: "anchor",
      title: "Anchor ID",
      description:
        "Optional. Lets navigation link straight to this item, e.g. 'renewal' makes /services/license-services#renewal work",
      type: "string",
      validation: (rule) =>
        rule.regex(/^[a-z0-9-]*$/, { name: "kebab-case", invert: false }),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "anchor" },
  },
});
