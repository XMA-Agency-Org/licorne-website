import { CheckmarkCircleIcon } from "@sanity/icons/CheckmarkCircle";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "deliverable",
  title: "Deliverable",
  type: "object",
  icon: CheckmarkCircleIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "anchor",
      title: "Anchor ID (advanced)",
      description:
        "Optional. Lets a menu link jump straight to this item, e.g. 'renewal' makes /services/license-services#renewal work. Lowercase letters, numbers and dashes only. Changing it breaks menu links that use it.",
      type: "string",
      validation: (rule) =>
        rule.regex(/^[a-z0-9-]*$/, { name: "lowercase letters, numbers and dashes" }),
    }),
  ],
  preview: {
    select: { title: "title", anchor: "anchor" },
    prepare: ({ title, anchor }) => ({ title, subtitle: anchor ? `#${anchor}` : undefined }),
  },
});
