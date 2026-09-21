import { defineField, defineType } from "sanity";

type LinkParent = { linkType?: "page" | "custom" } | undefined;

const isPageLink = (parent: LinkParent) => (parent?.linkType ?? "custom") === "page";

export default defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      name: "linkType",
      title: "Links to",
      type: "string",
      options: {
        list: [
          { title: "A service page", value: "page" },
          { title: "Any other URL", value: "custom" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "page",
    }),
    defineField({
      name: "page",
      title: "Service page",
      type: "reference",
      to: [{ type: "service" }],
      hidden: ({ parent }) => !isPageLink(parent),
      validation: (rule) =>
        rule.custom((value, context) =>
          isPageLink(context.parent as LinkParent) && !value ? "Pick a service page" : true,
        ),
    }),
    defineField({
      name: "section",
      title: "Section on the page (optional)",
      description:
        "Jump to a section, e.g. 'renewal' on License Services. Must match the section's anchor on that page.",
      type: "string",
      hidden: ({ parent }) => !isPageLink(parent),
    }),
    defineField({
      name: "href",
      title: "URL",
      description: "Internal path such as /about, or a full URL",
      type: "string",
      hidden: ({ parent }) => isPageLink(parent),
      validation: (rule) =>
        rule.custom((value, context) =>
          !isPageLink(context.parent as LinkParent) && !value ? "Enter a URL" : true,
        ),
    }),
    defineField({
      name: "label",
      description: "Leave empty to use the service page's title",
      type: "string",
      validation: (rule) =>
        rule.custom((value, context) =>
          !isPageLink(context.parent as LinkParent) && !value ? "Enter a label" : true,
        ),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 2,
      description:
        "Short description. Shown in the Company Setup dropdown and on service cards on the /services page",
    }),
  ],
  preview: {
    select: {
      label: "label",
      pageTitle: "page.title",
      pageSlug: "page.slug.current",
      section: "section",
      href: "href",
      linkType: "linkType",
    },
    prepare: ({ label, pageTitle, pageSlug, section, href, linkType }) => {
      const pageLink = linkType === "page";
      return {
        title: label || pageTitle || "Untitled link",
        subtitle: pageLink
          ? `/services/${pageSlug ?? "…"}${section ? `#${section}` : ""}`
          : href,
      };
    },
  },
});
