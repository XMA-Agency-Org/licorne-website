import { SearchIcon } from "@sanity/icons/Search";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "seo",
  title: "SEO & social sharing",
  type: "object",
  icon: SearchIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title in Google",
      description: "Leave empty to use the page heading. Aim for 50–60 characters.",
      type: "string",
      validation: (rule) => rule.max(60).warning("Google usually cuts titles after about 60 characters"),
    }),
    defineField({
      name: "description",
      title: "Description in Google",
      description: "One or two sentences that make people click. Aim for 120–160 characters.",
      type: "text",
      rows: 3,
      validation: (rule) =>
        rule.max(160).warning("Google usually cuts descriptions after about 160 characters"),
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      description: "Press Enter after each keyword",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "ogImage",
      title: "Social share image",
      description: "Shown when the page is shared on WhatsApp, LinkedIn, etc. Best size: 1200 × 630 px.",
      type: "image",
    }),
  ],
});
