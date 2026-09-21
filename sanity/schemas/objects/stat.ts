import { BarChartIcon } from "@sanity/icons/BarChart";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "stat",
  title: "Stat",
  type: "object",
  icon: BarChartIcon,
  fields: [
    defineField({
      name: "value",
      title: "Number",
      description: "e.g. 50+, 98%, 72h",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "label",
      title: "Label",
      description: "e.g. Companies formed",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { value: "value", label: "label" },
    prepare: ({ value, label }) => ({ title: `${value ?? "—"}  ${label ?? ""}`.trim() }),
  },
});
