import { OlistIcon } from "@sanity/icons/Olist";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "processStep",
  title: "Step",
  type: "object",
  icon: OlistIcon,
  fields: [
    defineField({
      name: "step",
      title: "Step number",
      description: "e.g. 01",
      type: "string",
      validation: (rule) => rule.required(),
    }),
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
  ],
  preview: {
    select: { step: "step", title: "title", subtitle: "description" },
    prepare: ({ step, title, subtitle }) => ({
      title: [step, title].filter(Boolean).join(" · "),
      subtitle,
    }),
  },
});
