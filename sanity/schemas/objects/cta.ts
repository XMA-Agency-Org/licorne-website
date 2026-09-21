import { LaunchIcon } from "@sanity/icons/Launch";
import { defineField, defineType } from "sanity";
import { buttonFieldset, linkPathField } from "../shared/fields";

export default defineType({
  name: "cta",
  title: "Call to action",
  type: "object",
  icon: LaunchIcon,
  fieldsets: [
    buttonFieldset("primaryButton", "Main button"),
    buttonFieldset("secondaryButton", "Second button (optional)"),
  ],
  fields: [
    defineField({
      name: "title",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Text",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "primaryLabel",
      title: "Label",
      type: "string",
      fieldset: "primaryButton",
      validation: (rule) => rule.required(),
    }),
    defineField({
      ...linkPathField("primaryHref", "Link", false),
      fieldset: "primaryButton",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "secondaryLabel",
      title: "Label",
      type: "string",
      fieldset: "secondaryButton",
    }),
    defineField({ ...linkPathField("secondaryHref", "Link", false), fieldset: "secondaryButton" }),
  ],
  preview: {
    select: { title: "title", subtitle: "primaryLabel" },
  },
});
