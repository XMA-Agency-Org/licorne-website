import { CogIcon } from "@sanity/icons/Cog";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "formSettings",
  title: "Form Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "notificationRecipients",
      title: "Send new leads to",
      description: "Every form submission is emailed to these addresses. Press Add item for each inbox.",
      type: "array",
      of: [defineArrayMember({ type: "string", validation: (rule) => rule.email() })],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Form Settings" }),
  },
});
