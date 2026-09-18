import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "companySetup",
      title: "Company Setup menu",
      description: "The 'Company Setup' dropdown next to Home in the header",
      type: "object",
      fields: [
        defineField({
          name: "href",
          title: "Overview URL",
          type: "string",
          initialValue: "/services#company-setup",
        }),
        defineField({
          name: "description",
          type: "text",
          rows: 2,
        }),
        defineField({
          name: "items",
          type: "array",
          of: [defineArrayMember({ type: "link" })],
        }),
      ],
    }),
    defineField({
      name: "serviceCategories",
      title: "Services menu",
      description: "Categories shown in the Services dropdown, footer and homepage services section",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "serviceCategory",
          fields: [
            defineField({
              name: "title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "href",
              title: "Overview URL",
              description: "Where 'All <category>' links to",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              type: "text",
              rows: 2,
            }),
            defineField({
              name: "items",
              type: "array",
              of: [defineArrayMember({ type: "link" })],
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "href" },
          },
        }),
      ],
    }),
    defineField({
      name: "resourceLinks",
      title: "Resources menu",
      type: "array",
      of: [defineArrayMember({ type: "link" })],
    }),
    defineField({
      name: "footer",
      type: "object",
      fields: [
        defineField({ name: "description", type: "text", rows: 3 }),
        defineField({
          name: "companyLinks",
          title: "Company links",
          type: "array",
          of: [defineArrayMember({ type: "link" })],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Navigation" }),
  },
});
