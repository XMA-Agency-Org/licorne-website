import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "header",
      type: "object",
      fields: [
        defineField({
          name: "serviceCategories",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "categoryName", type: "string" }),
                defineField({
                  name: "items",
                  type: "array",
                  of: [
                    defineArrayMember({
                      type: "object",
                      fields: [
                        defineField({ name: "label", type: "string" }),
                        defineField({ name: "href", type: "string" }),
                        defineField({ name: "iconName", type: "string" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: "resourceLinks",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "label", type: "string" }),
                defineField({ name: "href", type: "string" }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "footer",
      type: "object",
      fields: [
        defineField({ name: "description", type: "text" }),
        defineField({
          name: "linkGroups",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "title", type: "string" }),
                defineField({
                  name: "links",
                  type: "array",
                  of: [
                    defineArrayMember({
                      type: "object",
                      fields: [
                        defineField({ name: "label", type: "string" }),
                        defineField({ name: "href", type: "string" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: "legalLinks",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "label", type: "string" }),
                defineField({ name: "href", type: "string" }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
