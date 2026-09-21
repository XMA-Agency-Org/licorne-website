# Sanity CMS

Versions: `next` 16.3, `sanity` 6.15, `next-sanity` 13.3, `@sanity/client`, `@sanity/image-url` 2.1. Sanity 6 requires React ≥19.2.2.

**Project:** `mxwn9exj` "Licorne Corporate Website" (XMA Organization) · dataset `production` (public read) · https://www.sanity.io/manage/project/mxwn9exj

## Studio

Embedded at **`/studio`** (`app/(studio)/studio/[[...tool]]/page.tsx`). Local: http://localhost:3000/studio.

Desk structure (`sanity/structure.ts`):

| Item | Type | Drives |
| --- | --- | --- |
| Form Submissions | `formSubmission` documents + `formSettings` singleton | Lead log from every website form (New leads / All) and the notification inboxes. See `docs/forms.md` |
| Homepage | `homepage` singleton | Hero, About + stats, Services rows, Testimonials section settings (rows, speed, heading, button, hide) + testimonial refs, Team (refs, hide), FAQ (hide), SEO |
| About Page | `aboutPage` singleton | Everything on `/about` |
| Navigation & Menus | `navigation` singleton | **Single source for the service taxonomy**: header labels, links and button; Company Setup dropdown; Services cascading menu (categories + their links); Resources; footer (categories flagged "Show in footer" become columns); the whole `/services` listing page; the contact form's "Service of interest" options. The homepage service rows are separate (Homepage › Services) |
| Service Pages | `service` documents | `/services/[slug]` — one document per page |
| Testimonials | `testimonial` documents | Name, position, quote (no photos by client request) |
| Team Members | `teamMember` documents | Name, optional role, photo; rendered with initials fallback until a photo is added. Currently Muhammad Usman Butt, Umair Butt, Fahd Bouazer, Gicelle Cinco (roles pending from client) |

Only wired types are registered in `sanity/schemas/index.ts`. Contact, How It Works, FAQ page, cost guide, free zones and business activities remain static. On `/services`, only the hero and the bottom CTA are static.

### Links

Every menu link is a `link` object: **A service page** (reference to a `service`, plus an optional section anchor such as `renewal`) or **Any other URL**. Page links resolve in GROQ (`resolvedHref` in `sanity/lib/queries.ts`), so renaming a service's slug updates every menu. An empty label falls back to the service title. The link's description shows in the Company Setup dropdown and as card text on `/services`. If it's empty, cards fall back to the matching section's deliverable text, then the service's "Card on the /services page" summary, then its hero description.

## Files

| Path | Purpose |
| --- | --- |
| `sanity.config.ts` / `sanity.cli.ts` | Studio + CLI config |
| `sanity/env.ts` | project id, dataset, api version, studio base path |
| `sanity/schemas/` | `objects/` (stat, faqItem, cta, processStep, deliverable, seo, link), `documents/` (service, testimonial, teamMember, formSubmission), `singletons/` (homepage, aboutPage, navigation, formSettings) |
| `sanity/lib/client.ts` | `next-sanity` client (CDN on, stega → `/studio`) |
| `sanity/lib/live.ts` | `defineLive` → `sanityFetch` + `<SanityLive />` (rendered in `app/layout.tsx`) |
| `sanity/lib/queries.ts` | `defineQuery` GROQ: navigation, services listing, sitemap, homepage, service slugs, service by slug, about page |
| `sanity/lib/image.ts` | `urlFor()` builder |
| `sanity/lib/writeClient.ts` | Server-only write client (form submissions) |
| `sanity/types.generated.ts` | TypeGen output — **regenerate after any schema or query change**: `bun run typegen` |
| `sanity/seed/` | Seed content: `services/*.ts` (one per service page), `site.ts` (navigation, homepage, about, testimonials, team) |
| `scripts/seed-sanity.ts` | `bun run seed` uploads hero images from `public/images/heroes/` and team photos from `sanity/seed/images/team/`, then upserts all seed content. It's idempotent: services match by slug, testimonials by author, team by name, singletons by id, and team members not in the seed are removed. **A full seed replaces the homepage/about/navigation singletons and so overwrites Studio edits.** `bun run seed -- --team-only` only upserts team members and patches `homepage.team.members` |
| `scripts/migrate-navigation.ts` + `scripts/lib/navigationMigration.ts` | `bun run migrate:navigation` converts nav links that point at `/services/<slug>` into service-page references, fills new nav fields only where empty, and adds the Company Setup card summaries/badges. Safe to re-run. The full seed also runs it |
| `app/api/revalidate/route.ts` | Webhook target; validates `SANITY_REVALIDATE_SECRET` and revalidates the whole site |

## Data flow

- `app/(site)/layout.tsx` fetches `navigationQuery` → `resolveNavigation()` in `lib/navigation.ts` → `Header` / `Footer` props. `lib/navigation.ts` also holds the static default nav used as fallback and as seed source.
- `app/(site)/page.tsx` fetches `homepageQuery` and passes slices to each section; every section keeps a static default so the page renders even if a field is empty.
- `app/(site)/services/[slug]/page.tsx` fetches `serviceBySlugQuery`, maps it with `_lib/toServicePageProps.ts` into the `ServicePage` template. `generateStaticParams` uses `serviceSlugsQuery`. Unknown slug → 404.
- `app/(site)/about/page.tsx` fetches `aboutPageQuery`, falling back to `sanity/seed/site.ts` defaults.
- Deliverable `anchor` fields become card `id`s so links like `/services/license-services#renewal` work.

## Freshness

`sanityFetch` caches with tags; `<SanityLive />` in visitors' browsers invalidates on publish. For edits made while nobody is on the site, add a GROQ webhook in Manage → API → Webhooks:

- URL: `https://<domain>/api/revalidate`
- Trigger: create, update, delete · Filter: `_type in ["service","homepage","aboutPage","navigation","testimonial","teamMember"]` (not `formSubmission`)
- Projection: `{ _type, "slug": slug.current }` · Secret: value of `SANITY_REVALIDATE_SECRET`

## Environment

`.env.local` (also set these on Vercel):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=mxwn9exj
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-29
SANITY_API_TOKEN=        # "nextjs-server" editor token (Manage → API → Tokens); used by live fetch and seed
SANITY_REVALIDATE_SECRET=
RESEND_API_KEY=          # see docs/forms.md
LEAD_NOTIFICATION_EMAIL=
NEXT_PUBLIC_SITE_URL=
```

CORS origins registered: `http://localhost:3000`, `http://localhost:3001`, `https://licorne-website.vercel.app`. Vercel project `licorne-website` (XMA Team) is linked via `.vercel/` and has all five env vars in production, preview and development. Add the production domain when known.

## Homepage controls (from the Sep 18 meeting)

- **Testimonials section**: number of scrolling rows (1 or 2; with 2 rows the testimonials alternate between rows and scroll in opposite directions), scroll speed (1–10), eyebrow/title/accent, button label/link, and a "Hide this section" toggle. Which testimonials appear, and in what order, comes from the `testimonials` reference list.
- **Team / FAQ**: "Hide this section" toggle.
- Hidden sections are skipped in `app/(site)/page.tsx`. Nothing is deleted.

## SEO files

`app/sitemap.ts` lists the static routes plus every `service` slug from Sanity, revalidated hourly. `app/robots.ts` disallows `/studio` and `/api`. Both use `siteUrl` from `lib/siteUrl.ts` (`NEXT_PUBLIC_SITE_URL`, fallback `https://licorne-website.vercel.app`). **Set `NEXT_PUBLIC_SITE_URL` once the production domain is live.**

## Adding a service page (client workflow)

1. Studio › **Service Pages** › create the page: title, slug, category, hero image and sections. For a Company Setup page, also fill **Card on the /services page** (summary and badge).
2. Studio › **Navigation & Menus** › add a link under Company Setup or the right Services category. Choose "A service page" and pick the page. Add a section anchor only to link to part of a grouped page.
3. Publish both. The header dropdown, mobile menu, footer (if the category is flagged), `/services` listing, sitemap and contact form options all update.

New categories are added under Navigation & Menus › Services menu. Each category has "Heading on the /services page" fields and a "Show its links as a footer column" toggle. On `/services` the section id is the slugified title (e.g. `finance-banking`), so `/services#finance-banking` links keep working as long as the title stays the same.

If adding via code instead, add a seed file in `sanity/seed/services/`, register it in `index.ts`, and add the link to `lib/navigation.ts`. Don't run the full `bun run seed` against a dataset the client has edited.
