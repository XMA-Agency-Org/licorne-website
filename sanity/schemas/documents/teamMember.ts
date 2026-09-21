import { UserIcon } from "@sanity/icons/User";
import { defineField, defineType } from "sanity";
import { sortOrderField } from "../shared/fields";

export default defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Full name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Job title",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Photo",
      description: "Portrait photo. Until one is added, the site shows the person's initials.",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      title: "Short bio",
      description: "Not shown on the website yet",
      type: "text",
      rows: 4,
    }),
    sortOrderField(
      "Order in this Studio list only. The homepage order is set under Homepage › Team.",
    ),
  ],
  orderings: [
    { title: "Sort order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
    { title: "Name A–Z", name: "nameAsc", by: [{ field: "name", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "image" },
  },
});
