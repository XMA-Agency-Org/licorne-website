import { BookIcon } from "@sanity/icons/Book";
import { HeartIcon } from "@sanity/icons/Heart";
import { ImageIcon } from "@sanity/icons/Image";
import { InfoOutlineIcon } from "@sanity/icons/InfoOutline";
import { LaunchIcon } from "@sanity/icons/Launch";
import { SearchIcon } from "@sanity/icons/Search";
import { StarIcon } from "@sanity/icons/Star";
import { TimelineIcon } from "@sanity/icons/Timeline";
import { defineArrayMember, defineField, defineType } from "sanity";
import { eyebrowField, imageAltField } from "../shared/fields";

const paragraphsField = () =>
  defineField({
    name: "paragraphs",
    title: "Paragraphs",
    type: "array",
    of: [
      defineArrayMember({
        type: "object",
        title: "Paragraph",
        fields: [defineField({ name: "text", title: "Text", type: "text", rows: 4 })],
        preview: { select: { title: "text" } },
      }),
    ],
  });

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: InfoOutlineIcon,
  groups: [
    { name: "hero", title: "Hero", icon: ImageIcon, default: true },
    { name: "story", title: "Our story", icon: BookIcon },
    { name: "whyUs", title: "Why us", icon: StarIcon },
    { name: "journey", title: "Journey", icon: TimelineIcon },
    { name: "values", title: "Values", icon: HeartIcon },
    { name: "closing", title: "Commitment & CTA", icon: LaunchIcon },
    { name: "seo", title: "SEO", icon: SearchIcon },
  ],
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      fields: [
        eyebrowField(),
        defineField({ name: "title", title: "Heading", type: "string" }),
        defineField({ name: "description", title: "Intro text", type: "text", rows: 3 }),
        defineField({
          name: "image",
          title: "Background image",
          type: "image",
          options: { hotspot: true },
        }),
        imageAltField(),
      ],
    }),
    defineField({
      name: "story",
      title: "Our story",
      type: "object",
      group: "story",
      fields: [
        eyebrowField(),
        defineField({ name: "title", title: "Heading", type: "string" }),
        paragraphsField(),
      ],
    }),
    defineField({
      name: "whyClients",
      title: "Why clients choose us",
      type: "object",
      group: "whyUs",
      fields: [
        defineField({ name: "title", title: "Heading", type: "string" }),
        defineField({ name: "description", title: "Text", type: "text", rows: 3 }),
        defineField({
          name: "items",
          title: "Reasons",
          description: "Short bullet points",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
      ],
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      group: "whyUs",
      of: [defineArrayMember({ type: "stat" })],
    }),
    defineField({
      name: "journey",
      title: "Our journey",
      type: "object",
      group: "journey",
      fields: [
        eyebrowField(),
        defineField({ name: "title", title: "Heading", type: "string" }),
        defineField({
          name: "milestones",
          title: "Milestones",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              title: "Milestone",
              icon: TimelineIcon,
              fields: [
                defineField({ name: "year", title: "Year", type: "string" }),
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "description", title: "Text", type: "text", rows: 3 }),
              ],
              preview: {
                select: { year: "year", title: "title" },
                prepare: ({ year, title }) => ({ title: [year, title].filter(Boolean).join(" · ") }),
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "values",
      title: "Our values",
      type: "object",
      group: "values",
      fields: [
        eyebrowField(),
        defineField({ name: "title", title: "Heading", type: "string" }),
        defineField({
          name: "items",
          title: "Values",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              title: "Value",
              icon: HeartIcon,
              fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "description", title: "Text", type: "text", rows: 3 }),
              ],
              preview: { select: { title: "title", subtitle: "description" } },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "commitment",
      title: "Our commitment",
      type: "object",
      group: "closing",
      fields: [
        eyebrowField(),
        defineField({ name: "title", title: "Heading", type: "string" }),
        paragraphsField(),
      ],
    }),
    defineField({
      name: "cta",
      title: "Call to action",
      type: "cta",
      group: "closing",
    }),
    defineField({
      name: "seo",
      title: "SEO & social sharing",
      type: "seo",
      group: "seo",
    }),
  ],
  preview: {
    prepare: () => ({ title: "About Page" }),
  },
});
