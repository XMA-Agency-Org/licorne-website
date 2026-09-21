import { EnvelopeIcon } from "@sanity/icons/Envelope";
import { defineField, defineType } from "sanity";

export const SUBMISSION_STATUSES = [
  { title: "New", value: "new" },
  { title: "Contacted", value: "contacted" },
  { title: "Closed", value: "closed" },
];

const STATUS_MARKERS: Record<string, string> = { new: "🟢", contacted: "🟡", closed: "⚪" };

export default defineType({
  name: "formSubmission",
  title: "Form Submission",
  type: "document",
  icon: EnvelopeIcon,
  fieldsets: [{ name: "details", title: "Submission details", options: { columns: 2 } }],
  fields: [
    defineField({
      name: "status",
      title: "Status",
      description: "Move a lead to Contacted once someone has replied, and to Closed when it's done",
      type: "string",
      options: { list: SUBMISSION_STATUSES, layout: "radio", direction: "horizontal" },
      initialValue: "new",
    }),
    defineField({ name: "name", title: "Name", type: "string", readOnly: true }),
    defineField({ name: "email", title: "Email", type: "string", readOnly: true }),
    defineField({ name: "phone", title: "Phone", type: "string", readOnly: true }),
    defineField({ name: "service", title: "Service of interest", type: "string", readOnly: true }),
    defineField({ name: "message", title: "Message", type: "text", rows: 5, readOnly: true }),
    defineField({
      name: "sourcePage",
      title: "Submitted from",
      type: "string",
      fieldset: "details",
      readOnly: true,
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted at",
      type: "datetime",
      fieldset: "details",
      readOnly: true,
    }),
    defineField({
      name: "emailNotified",
      title: "Email notification sent",
      type: "boolean",
      fieldset: "details",
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
      title: `${STATUS_MARKERS[status] ?? ""} ${name ?? "Unknown"}`.trim(),
      subtitle: [service, submittedAt && new Date(submittedAt).toLocaleString("en-GB")]
        .filter(Boolean)
        .join(" · "),
    }),
  },
});
