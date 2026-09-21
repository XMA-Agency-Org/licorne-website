import { BlockquoteIcon } from "@sanity/icons/Blockquote";
import { defineField, defineType } from "sanity";
import { sortOrderField } from "../shared/fields";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: BlockquoteIcon,
  fields: [
    defineField({
      name: "author",
      title: "Client name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "position",
      title: "Role and company",
      description: "e.g. Founder, Technology Consultancy",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Quote",
      description: "Without quotation marks. Two to four sentences read best.",
      type: "text",
      rows: 5,
      validation: (rule) => [
        rule.required(),
        rule.max(400).warning("Long quotes get cut off in the scrolling cards"),
      ],
    }),
    sortOrderField(
      "Order in this Studio list only. The homepage order is set under Homepage › Testimonials.",
    ),
  ],
  orderings: [
    { title: "Sort order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
    { title: "Name A–Z", name: "authorAsc", by: [{ field: "author", direction: "asc" }] },
  ],
  preview: {
    select: { title: "author", position: "position", quote: "text" },
    prepare: ({ title, position, quote }) => ({
      title,
      subtitle: position || quote,
    }),
  },
});
