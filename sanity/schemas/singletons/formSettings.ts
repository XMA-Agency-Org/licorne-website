import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "formSettings",
  title: "Form Settings",
  type: "document",
  fields: [
    defineField({
      name: "notificationRecipients",
      title: "Send new leads to",
      description: "Every form submission is emailed to these addresses.",
      type: "array",
      of: [defineArrayMember({ type: "string", validation: (rule) => rule.email() })],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Form Settings" }),
  },
});
