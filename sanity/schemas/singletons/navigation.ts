import { BookIcon } from "@sanity/icons/Book";
import { CaseIcon } from "@sanity/icons/Case";
import { MenuIcon } from "@sanity/icons/Menu";
import { PanelLeftIcon } from "@sanity/icons/PanelLeft";
import { RocketIcon } from "@sanity/icons/Rocket";
import { ThListIcon } from "@sanity/icons/ThList";
import { defineArrayMember, defineField, defineType } from "sanity";
import { accentWordField, buttonFieldset, linkPathField } from "../shared/fields";

const servicesPageFieldset = {
  name: "servicesPage",
  title: "On the /services page",
  options: { collapsible: true, collapsed: true },
};

const menuLinksField = (name: string, title: string, description?: string) =>
  defineField({
    name,
    title,
    description,
    type: "array",
    of: [defineArrayMember({ type: "link" })],
  });

export default defineType({
  name: "navigation",
  title: "Navigation & Menus",
  type: "document",
  icon: MenuIcon,
  groups: [
    { name: "header", title: "Header", icon: MenuIcon, default: true },
    { name: "companySetup", title: "Company Setup menu", icon: RocketIcon },
    { name: "services", title: "Services menu", icon: CaseIcon },
    { name: "resources", title: "Resources menu", icon: BookIcon },
    { name: "footer", title: "Footer", icon: PanelLeftIcon },
  ],
  fields: [
    defineField({
      name: "header",
      title: "Header",
      description: "The top bar on every page",
      type: "object",
      group: "header",
      fieldsets: [
        buttonFieldset("servicesMenu", "Services menu"),
      ],
      fields: [
        defineField({
          name: "servicesLabel",
          title: "Label",
          type: "string",
          fieldset: "servicesMenu",
          initialValue: "Services",
        }),
        defineField({
          ...linkPathField("servicesHref", "Link when clicked", false),
          fieldset: "servicesMenu",
          initialValue: "/services",
        }),
        defineField({
          name: "resourcesLabel",
          title: "Resources menu label",
          type: "string",
          initialValue: "Resources",
        }),
        menuLinksField("links", "Links after the menus", "Plain links shown after Resources, e.g. About, FAQ, Contact"),
        defineField({
          name: "ctaButton",
          title: "Button",
          description: "The highlighted button on the right of the header",
          type: "link",
        }),
      ],
    }),
    defineField({
      name: "companySetup",
      title: "Company Setup menu",
      description: "The 'Company Setup' dropdown next to Home in the header",
      type: "object",
      group: "companySetup",
      fieldsets: [servicesPageFieldset],
      fields: [
        defineField({
          name: "title",
          title: "Menu label",
          type: "string",
          initialValue: "Company Setup",
        }),
        linkPathField("href", "'View all' link"),
        defineField({
          name: "description",
          title: "Short description",
          type: "text",
          rows: 2,
        }),
        menuLinksField("items", "Links", "Drag to reorder. Each link appears in the dropdown and as a card on /services."),
        defineField({
          name: "listingTitle",
          title: "Heading",
          type: "string",
          fieldset: "servicesPage",
        }),
        defineField({ ...accentWordField("listingTitleAccent"), fieldset: "servicesPage" }),
      ],
    }),
    defineField({
      name: "serviceCategories",
      title: "Services menu categories",
      description:
        "Each category is a column in the Services dropdown and a section on /services. Drag to reorder.",
      type: "array",
      group: "services",
      of: [
        defineArrayMember({
          type: "object",
          name: "serviceCategory",
          title: "Category",
          icon: ThListIcon,
          fieldsets: [servicesPageFieldset],
          fields: [
            defineField({
              name: "title",
              title: "Category name",
              description: "Also sets the /services#section link, so renaming it breaks old links to that section",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              ...linkPathField("href", "'View all' link"),
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Short description",
              type: "text",
              rows: 2,
            }),
            menuLinksField("items", "Links", "Drag to reorder"),
            defineField({
              name: "showInFooter",
              title: "Show its links as a footer column",
              type: "boolean",
              initialValue: false,
            }),
            defineField({
              name: "listingTitle",
              title: "Heading",
              type: "string",
              fieldset: "servicesPage",
            }),
            defineField({ ...accentWordField("listingTitleAccent"), fieldset: "servicesPage" }),
          ],
          preview: {
            select: { title: "title", links: "items", showInFooter: "showInFooter" },
            prepare: ({ title, links, showInFooter }) => ({
              title,
              subtitle: [`${links?.length ?? 0} links`, showInFooter && "in footer"]
                .filter(Boolean)
                .join(" · "),
            }),
          },
        }),
      ],
    }),
    defineField({
      ...menuLinksField("resourceLinks", "Resources menu links", "Drag to reorder"),
      group: "resources",
    }),
    defineField({
      name: "footer",
      title: "Footer",
      description: "Service columns come from categories with 'Show its links as a footer column' switched on",
      type: "object",
      group: "footer",
      fields: [
        defineField({ name: "description", title: "Company blurb", type: "text", rows: 3 }),
        menuLinksField("companyLinks", "Company links"),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Navigation & Menus" }),
  },
});
