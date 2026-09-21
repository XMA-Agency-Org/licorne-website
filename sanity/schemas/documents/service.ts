import { CaseIcon } from "@sanity/icons/Case";
import { CogIcon } from "@sanity/icons/Cog";
import { DocumentTextIcon } from "@sanity/icons/DocumentText";
import { ImageIcon } from "@sanity/icons/Image";
import { LaunchIcon } from "@sanity/icons/Launch";
import { SearchIcon } from "@sanity/icons/Search";
import { defineArrayMember, defineField, defineType } from "sanity";
import { eyebrowField, imageAltField } from "../shared/fields";
import { SERVICE_CATEGORIES, serviceCategoryTitle } from "../shared/serviceCategories";

const collapsibleSection = { collapsible: true, collapsed: false };

export default defineType({
  name: "service",
  title: "Service Page",
  type: "document",
  icon: CaseIcon,
  groups: [
    { name: "setup", title: "Page setup", icon: CogIcon, default: true },
    { name: "hero", title: "Hero", icon: ImageIcon },
    { name: "content", title: "Page sections", icon: DocumentTextIcon },
    { name: "cta", title: "Call to action", icon: LaunchIcon },
    { name: "seo", title: "SEO", icon: SearchIcon },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Service name",
      description: "Used in menus, the /services page and Studio lists",
      type: "string",
      group: "setup",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Page address",
      description:
        "The end of the page URL: /services/<address>. Click Generate to create it from the name. Changing it later breaks old links shared outside the site.",
      type: "slug",
      group: "setup",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: "setup",
      options: { list: SERVICE_CATEGORIES, layout: "dropdown" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Sort order in Studio",
      description: "Lower numbers appear first in the Service Pages list. Menu order is set under Navigation & Menus.",
      type: "number",
      group: "setup",
    }),
    defineField({
      name: "listing",
      title: "Card on the /services page",
      description: "Only used by Company Setup pages",
      type: "object",
      group: "setup",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "summary",
          title: "Card text",
          description: "Leave empty to use the hero description",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "badge",
          title: "Badge",
          description: "Small label on the card, e.g. Most Popular",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "hero",
      title: "Hero",
      description: "The top banner of the page",
      type: "object",
      group: "hero",
      fields: [
        defineField({
          name: "title",
          title: "Heading",
          description: "Leave empty to use the service name",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Intro text",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "image",
          title: "Background image",
          description: "Landscape photo, at least 1920 px wide. Drag the hotspot to keep the subject in view.",
          type: "image",
          options: { hotspot: true },
          validation: (rule) => rule.required(),
        }),
        imageAltField(),
      ],
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "object",
      group: "content",
      options: collapsibleSection,
      fields: [
        eyebrowField(),
        defineField({ name: "title", title: "Heading", type: "string" }),
        defineField({ name: "description", title: "Text", type: "text", rows: 4 }),
        defineField({
          name: "highlights",
          title: "Highlights",
          description: "Short bullet points with a checkmark",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "expectationTitle",
          title: "'What to expect' heading",
          type: "string",
        }),
        defineField({
          name: "expectationDescription",
          title: "'What to expect' text",
          type: "text",
          rows: 3,
        }),
      ],
    }),
    defineField({
      name: "stats",
      title: "Stats",
      description: "Numbers shown in a row, e.g. 72h average setup",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "stat" })],
      validation: (rule) => rule.max(4).warning("The stats row fits up to 4 items"),
    }),
    defineField({
      name: "deliverables",
      title: "What's included",
      type: "object",
      group: "content",
      options: collapsibleSection,
      fields: [
        eyebrowField(),
        defineField({ name: "title", title: "Heading", type: "string" }),
        defineField({
          name: "items",
          title: "Items",
          type: "array",
          of: [defineArrayMember({ type: "deliverable" })],
        }),
      ],
    }),
    defineField({
      name: "process",
      title: "Process steps",
      type: "object",
      group: "content",
      options: collapsibleSection,
      fields: [
        eyebrowField(),
        defineField({ name: "title", title: "Heading", type: "string" }),
        defineField({
          name: "items",
          title: "Steps",
          type: "array",
          of: [defineArrayMember({ type: "processStep" })],
        }),
      ],
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "object",
      group: "content",
      options: collapsibleSection,
      fields: [
        eyebrowField(),
        defineField({ name: "title", title: "Heading", type: "string" }),
        defineField({
          name: "items",
          title: "Questions",
          type: "array",
          of: [defineArrayMember({ type: "faqItem" })],
        }),
      ],
    }),
    defineField({
      name: "cta",
      title: "Call to action",
      description: "The banner with the enquiry form at the bottom of the page",
      type: "cta",
      group: "cta",
    }),
    defineField({
      name: "seo",
      title: "SEO & social sharing",
      type: "seo",
      group: "seo",
    }),
  ],
  orderings: [
    {
      title: "Category, then sort order",
      name: "categoryOrder",
      by: [
        { field: "category", direction: "asc" },
        { field: "order", direction: "asc" },
      ],
    },
    {
      title: "Name A–Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      slug: "slug.current",
      media: "hero.image",
    },
    prepare: ({ title, category, slug, media }) => ({
      title,
      subtitle: `${serviceCategoryTitle(category)} · /services/${slug ?? "…"}`,
      media,
    }),
  },
});
