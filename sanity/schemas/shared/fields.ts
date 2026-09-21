import { defineField } from "sanity";

type ParentWithImage = { image?: unknown } | undefined;

export const eyebrowField = () =>
  defineField({
    name: "eyebrow",
    title: "Eyebrow",
    description: "Small uppercase label shown above the heading",
    type: "string",
  });

export const accentWordField = (name: string, placement = "heading") =>
  defineField({
    name,
    title: "Accent word",
    description: `Highlighted word shown after the ${placement}, e.g. "Simplified"`,
    type: "string",
  });

export const hideSectionField = () =>
  defineField({
    name: "hidden",
    title: "Hide this section",
    description: "Hides the section on the website without deleting its content",
    type: "boolean",
    initialValue: false,
  });

export const imageAltField = (name = "imageAlt") =>
  defineField({
    name,
    title: "Image description (alt text)",
    description: "Describe the image for visually impaired visitors and Google, e.g. 'Dubai skyline at dusk'",
    type: "string",
    validation: (rule) =>
      rule
        .custom((alt, context) =>
          (context.parent as ParentWithImage)?.image && !alt ? "Add a short description of the image" : true,
        )
        .warning(),
  });

export const LINK_PATH_HINT = "A page on this site such as /contact, or a full URL starting with https://";

export const buttonFieldset = (name: string, title: string) => ({
  name,
  title,
  description: `Link: ${LINK_PATH_HINT.charAt(0).toLowerCase()}${LINK_PATH_HINT.slice(1)}`,
  options: { columns: 2 },
});

export const linkPathField = (name: string, title: string, showHint = true) =>
  defineField({
    name,
    title,
    description: showHint ? LINK_PATH_HINT : undefined,
    type: "string",
    validation: (rule) =>
      rule.custom((value) =>
        !value || value.startsWith("/") || value.startsWith("#") || /^(https?:|mailto:|tel:)/.test(value)
          ? true
          : "Start with / for a page on this site, or https:// for another website",
      ),
  });

export const sortOrderField = (description = "Lower numbers appear first") =>
  defineField({
    name: "order",
    title: "Sort order",
    description,
    type: "number",
  });
