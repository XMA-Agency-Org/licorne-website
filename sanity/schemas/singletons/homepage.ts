import { BlockquoteIcon } from "@sanity/icons/Blockquote";
import { CaseIcon } from "@sanity/icons/Case";
import { HelpCircleIcon } from "@sanity/icons/HelpCircle";
import { HomeIcon } from "@sanity/icons/Home";
import { ImageIcon } from "@sanity/icons/Image";
import { InfoOutlineIcon } from "@sanity/icons/InfoOutline";
import { SearchIcon } from "@sanity/icons/Search";
import { UsersIcon } from "@sanity/icons/Users";
import { defineArrayMember, defineField, defineType } from "sanity";
import {
  accentWordField,
  buttonFieldset,
  eyebrowField,
  hideSectionField,
  linkPathField,
} from "../shared/fields";

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  icon: HomeIcon,
  groups: [
    { name: "hero", title: "Hero", icon: ImageIcon, default: true },
    { name: "about", title: "About", icon: InfoOutlineIcon },
    { name: "services", title: "Services", icon: CaseIcon },
    { name: "testimonials", title: "Testimonials", icon: BlockquoteIcon },
    { name: "team", title: "Team", icon: UsersIcon },
    { name: "faq", title: "FAQ", icon: HelpCircleIcon },
    { name: "seo", title: "SEO", icon: SearchIcon },
  ],
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      description: "The full-screen banner at the top of the homepage",
      type: "object",
      group: "hero",
      fieldsets: [
        buttonFieldset("primaryButton", "Main button"),
        buttonFieldset("secondaryButton", "Second button"),
      ],
      fields: [
        defineField({ name: "headline", title: "Headline", type: "string" }),
        accentWordField("headlineAccent", "headline"),
        defineField({ name: "subheadline", title: "Intro text", type: "text", rows: 3 }),
        defineField({ name: "primaryCtaLabel", title: "Label", type: "string", fieldset: "primaryButton" }),
        defineField({ ...linkPathField("primaryCtaHref", "Link", false), fieldset: "primaryButton" }),
        defineField({ name: "secondaryCtaLabel", title: "Label", type: "string", fieldset: "secondaryButton" }),
        defineField({ ...linkPathField("secondaryCtaHref", "Link", false), fieldset: "secondaryButton" }),
        defineField({
          name: "bgImage",
          title: "Background image",
          description: "Landscape photo, at least 1920 px wide",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "about",
      title: "About section",
      type: "object",
      group: "about",
      fieldsets: [buttonFieldset("button", "Button")],
      fields: [
        eyebrowField(),
        defineField({ name: "title", title: "Heading", type: "string" }),
        accentWordField("titleSpan"),
        defineField({ name: "description", title: "Text", type: "text", rows: 5 }),
        defineField({ name: "buttonText", title: "Label", type: "string", fieldset: "button" }),
        defineField({ ...linkPathField("buttonHref", "Link", false), fieldset: "button" }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "stats",
          title: "Stats",
          description: "Up to 4 numbers, e.g. 50+ companies formed",
          type: "array",
          of: [defineArrayMember({ type: "stat" })],
          validation: (rule) => rule.max(4),
        }),
      ],
    }),
    defineField({
      name: "services",
      title: "Services section",
      description:
        "The numbered service rows on the homepage. These are separate from the header menus (Navigation & Menus).",
      type: "object",
      group: "services",
      fields: [
        eyebrowField(),
        defineField({ name: "title", title: "Heading", type: "string" }),
        defineField({
          name: "items",
          title: "Service rows",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              name: "serviceRow",
              title: "Service row",
              icon: CaseIcon,
              fields: [
                defineField({ name: "number", title: "Number", description: "e.g. 01", type: "string" }),
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "description", title: "Text", type: "text", rows: 3 }),
                linkPathField("href", "'View all' link"),
                defineField({
                  name: "subItems",
                  title: "Sub-service links",
                  type: "array",
                  of: [defineArrayMember({ type: "link" })],
                }),
              ],
              preview: {
                select: { number: "number", title: "title", links: "subItems" },
                prepare: ({ number, title, links }) => ({
                  title: [number, title].filter(Boolean).join(" · "),
                  subtitle: `${links?.length ?? 0} links`,
                }),
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "testimonialsSection",
      title: "Testimonials section settings",
      type: "object",
      group: "testimonials",
      fieldsets: [
        { name: "scrolling", title: "Scrolling", options: { columns: 2 } },
        buttonFieldset("button", "Button"),
      ],
      fields: [
        hideSectionField(),
        eyebrowField(),
        defineField({ name: "title", title: "Heading", type: "string" }),
        accentWordField("titleAccent"),
        defineField({
          name: "rows",
          title: "Number of rows",
          description: "1 row for up to ~6 testimonials, 2 rows for more",
          type: "number",
          fieldset: "scrolling",
          options: { list: [1, 2], layout: "radio", direction: "horizontal" },
          initialValue: 1,
        }),
        defineField({
          name: "speed",
          title: "Speed",
          description: "1 is slow, 10 is fast",
          type: "number",
          fieldset: "scrolling",
          initialValue: 3,
          validation: (rule) => rule.min(1).max(10),
        }),
        defineField({ name: "ctaLabel", title: "Label", type: "string", fieldset: "button" }),
        defineField({ ...linkPathField("ctaHref", "Link", false), fieldset: "button" }),
      ],
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials to show",
      description:
        "Pick testimonials and drag to reorder. Edit their wording under Testimonials in the sidebar.",
      type: "array",
      group: "testimonials",
      of: [defineArrayMember({ type: "reference", to: [{ type: "testimonial" }] })],
      validation: (rule) => rule.unique(),
    }),
    defineField({
      name: "team",
      title: "Team section",
      type: "object",
      group: "team",
      fields: [
        hideSectionField(),
        eyebrowField(),
        defineField({ name: "title", title: "Heading", type: "string" }),
        defineField({
          name: "members",
          title: "Team members to show",
          description:
            "Pick people and drag to reorder. Edit names and photos under Team Members in the sidebar.",
          type: "array",
          of: [defineArrayMember({ type: "reference", to: [{ type: "teamMember" }] })],
          validation: (rule) => rule.unique(),
        }),
      ],
    }),
    defineField({
      name: "faq",
      title: "FAQ section",
      type: "object",
      group: "faq",
      fields: [
        hideSectionField(),
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
      name: "seo",
      title: "SEO & social sharing",
      type: "seo",
      group: "seo",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Homepage" }),
  },
});
