import { defineField, defineType } from "sanity";

export const SUBMISSION_STATUSES = [
  { title: "New", value: "new" },
  { title: "Contacted", value: "contacted" },
  { title: "Closed", value: "closed" },
];

export default defineType({
  name: "formSubmission",
  title: "Form Submission",
  type: "document",
  fields: [
    defineField({
      name: "status",
      type: "string",
      options: { list: SUBMISSION_STATUSES, layout: "radio", direction: "horizontal" },
      initialValue: "new",
    }),
    defineField({ name: "name", type: "string", readOnly: true }),
    defineField({ name: "email", type: "string", readOnly: true }),
    defineField({ name: "phone", type: "string", readOnly: true }),
    defineField({ name: "service", title: "Service of interest", type: "string", readOnly: true }),
    defineField({ name: "message", type: "text", rows: 5, readOnly: true }),
    defineField({
      name: "sourcePage",
      title: "Submitted from",
      type: "string",
      readOnly: true,
    }),
    defineField({ name: "submittedAt", type: "datetime", readOnly: true }),
    defineField({
      name: "emailNotified",
      title: "Email notification sent",
      type: "boolean",
      readOnly: true,
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { name: "name", service: "service", submittedAt: "submittedAt", status: "status" },
    prepare: ({ name, service, submittedAt, status }) => ({
      title: `${status === "new" ? "● " : ""}${name ?? "Unknown"}`,
      subtitle: [service, submittedAt && new Date(submittedAt).toLocaleString("en-GB")]
        .filter(Boolean)
        .join(" · "),
    }),
  },
});
