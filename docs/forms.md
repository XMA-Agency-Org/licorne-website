# Lead forms

Every enquiry form on the site (homepage CTA, service page CTA, `/contact`) is the shared `LeadForm` component. A submission is saved to Sanity first and then emailed through Resend. A failed email never loses the lead.

## Flow

```
LeadForm (client, useActionState)
  └─ submitLead (server action, lib/leads/submitLead.ts)
       ├─ honeypot "company_website" filled → silently return success
       ├─ zod validation (lib/leads/leadSchema.ts) → field errors + submitted values back to the form
       ├─ writeClient.create formSubmission  (_id "formSubmission.<uuid>")
       └─ sendLeadNotification (Resend) → patch emailNotified = true
```

## Files

| Path | Purpose |
| --- | --- |
| `components/forms/LeadForm.tsx` | Shared form. Props: `submitLabel`, `layout` (`compact` for the CTA cards, `contact` for the contact page). `sourcePage` comes from `usePathname()` automatically |
| `components/forms/leadServiceOptions.ts` | "Service of interest" options, derived from `COMPANY_SETUP` + `SERVICES` in `lib/navigation.ts` plus "Other" |
| `components/ui/form-field.tsx` | CVA primitives: `Label`, `Input`, `Textarea`, `Select`, `FieldError` (`invalid` variant) |
| `components/ui/button.tsx` | CVA `Button` / `buttonVariants` (`primary`, `secondary`, `outline`) |
| `lib/leads/leadSchema.ts` | zod schema, `LeadFormState`, honeypot field name |
| `lib/leads/submitLead.ts` | Server action |
| `lib/leads/sendLeadNotification.ts` | Resend call. Recipients come from Studio › Leads & Form Submissions › Email Notification Settings, falling back to `LEAD_NOTIFICATION_EMAIL` |
| `lib/leads/leadNotificationEmail.ts` | Subject, plain-text and HTML body. Includes a link to the submission in Studio |
| `sanity/lib/writeClient.ts` | Server-only client that uses `SANITY_API_TOKEN` |

## Privacy

The `production` dataset is **public-read**. Submissions (`formSubmission.<uuid>`) and form settings (`settings.formSettings`) use dotted IDs. Sanity only returns documents with dotted IDs to authenticated requests, so lead data never shows up in the public API. Keep this rule for any new document type that holds personal data.

## Environment

```
RESEND_API_KEY=
LEAD_NOTIFICATION_EMAIL=     # fallback recipients, comma-separated
RESEND_FROM_EMAIL=           # optional; defaults to "Licorne Website <onboarding@resend.dev>"
NEXT_PUBLIC_SITE_URL=        # used for the Studio link in emails, sitemap and robots
```

`onboarding@resend.dev` only delivers to the Resend account owner's inbox. Once the client's domain (subdomain of licorne.ae) is verified in Resend, set `RESEND_FROM_EMAIL` to an address on that domain.

## Studio

Leads & Form Submissions sits at the top of the Studio sidebar:
- **New leads**, **Contacted**, **Closed**: submissions by status, newest first. Previews show 🟢 new, 🟡 contacted, ⚪ closed
- **All submissions**
- **Email Notification Settings**: the inboxes that receive lead emails

Submission fields are read-only. Only `status` (New / Contacted / Closed) is editable. Submissions can't be created by hand; they only come from the website.
