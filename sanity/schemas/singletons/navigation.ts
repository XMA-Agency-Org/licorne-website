import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "header",
      title: "Header",
      type: "object",
      fields: [
        defineField({ name: "servicesLabel", title: "Services menu label", type: "string", initialValue: "Services" }),
        defineField({
          name: "servicesHref",
          title: "Services menu link",
          description: "Where clicking the Services label goes",
          type: "string",
          initialValue: "/services",
        }),
        defineField({ name: "resourcesLabel", title: "Resources menu label", type: "string", initialValue: "Resources" }),
        defineField({
          name: "links",
          title: "Links after the menus",
          description: "Plain links shown after Resources, e.g. About, FAQ, Contact",
          type: "array",
          of: [defineArrayMember({ type: "link" })],
        }),
        defineField({ name: "ctaButton", title: "Button", type: "link" }),
      ],
    }),
    defineField({
      name: "companySetup",
      title: "Company Setup menu",
      description: "The 'Company Setup' dropdown next to Home in the header",
      type: "object",
      fieldsets: [{ name: "servicesPage", title: "On the /services page", options: { collapsible: true } }],
      fields: [
        defineField({
          name: "title",
          title: "Menu label",
          type: "string",
          initialValue: "Company Setup",
        }),
        defineField({
          name: "href",
          title: "Overview URL",
          type: "string",
          initialValue: "/services#company-setup",
        }),
        defineField({
          name: "listingTitle",
          title: "Heading on the /services page",
          type: "string",
          fieldset: "servicesPage",
        }),
        defineField({
          name: "listingTitleAccent",
          title: "Heading accent word",
          type: "string",
          fieldset: "servicesPage",
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
          fieldsets: [{ name: "servicesPage", title: "On the /services page", options: { collapsible: true } }],
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
            defineField({
              name: "showInFooter",
              title: "Show its links as a footer column",
              type: "boolean",
              initialValue: false,
            }),
            defineField({
              name: "listingTitle",
              title: "Heading on the /services page",
              type: "string",
              fieldset: "servicesPage",
            }),
            defineField({
              name: "listingTitleAccent",
              title: "Heading accent word",
              type: "string",
              fieldset: "servicesPage",
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
