import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "faqCategory",
  title: "FAQ Category",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "category",
      },
    }),
    defineField({
      name: "questions",
      title: "Questions",
      type: "array",
      of: [defineArrayMember({ type: "faqItem" })],
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "category",
    },
  },
});
