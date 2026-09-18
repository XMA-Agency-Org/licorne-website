# Sanity CMS

Versions: `next` 16.3, `sanity` 6.15, `next-sanity` 13.3, `@sanity/client`, `@sanity/image-url` 2.1. Sanity 6 requires React ≥19.2.2.

**Project:** `mxwn9exj` "Licorne Corporate Website" (XMA Organization) · dataset `production` (public read) · https://www.sanity.io/manage/project/mxwn9exj

## Studio

Embedded at **`/studio`** (`app/(studio)/studio/[[...tool]]/page.tsx`). Local: http://localhost:3000/studio.

Desk structure (`sanity/structure.ts`):

| Item | Type | Drives |
| --- | --- | --- |
| Homepage | `homepage` singleton | Hero, About + stats, Services rows, Testimonials (refs), Team (refs), FAQ, SEO |
| About Page | `aboutPage` singleton | Everything on `/about` |
| Navigation & Menus | `navigation` singleton | Company Setup dropdown, Services cascading menu, Resources, footer columns, homepage service rows' sub-links are separate (see homepage) |
| Service Pages | `service` documents | `/services/[slug]` — one document per page |
| Testimonials | `testimonial` documents | Name, position, quote (no photos by client request) |
| Team Members | `teamMember` documents | Name, role, photo; rendered with initials fallback until a photo is added |

Only wired types are registered in `sanity/schemas/index.ts`. Contact, How It Works, FAQ page, cost guide, free zones, business activities and the `/services` index remain static.

## Files

| Path | Purpose |
| --- | --- |
| `sanity.config.ts` / `sanity.cli.ts` | Studio + CLI config |
| `sanity/env.ts` | project id, dataset, api version, studio base path |
| `sanity/schemas/` | `objects/` (stat, faqItem, cta, processStep, deliverable, seo, link), `documents/` (service, testimonial, teamMember), `singletons/` (homepage, aboutPage, navigation) |
| `sanity/lib/client.ts` | `next-sanity` client (CDN on, stega → `/studio`) |
| `sanity/lib/live.ts` | `defineLive` → `sanityFetch` + `<SanityLive />` (rendered in `app/layout.tsx`) |
| `sanity/lib/queries.ts` | `defineQuery` GROQ: navigation, homepage, service slugs, service by slug, about page |
| `sanity/lib/image.ts` | `urlFor()` builder |
| `sanity/types.generated.ts` | TypeGen output — **regenerate after any schema or query change**: `bun run typegen` |
| `sanity/seed/` | Seed content: `services/*.ts` (one per service page), `site.ts` (navigation, homepage, about, testimonials, team) |
| `scripts/seed-sanity.ts` | `bun run seed` — uploads hero images from `public/images/heroes/` and upserts all seed content (idempotent: services by slug, testimonials by author, team by name, singletons by id) |
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
- Trigger: create, update, delete · Filter: `_type in ["service","homepage","aboutPage","navigation","testimonial","teamMember"]`
- Projection: `{ _type, "slug": slug.current }` · Secret: value of `SANITY_REVALIDATE_SECRET`

## Environment

`.env.local` (also set these on Vercel):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=mxwn9exj
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-29
SANITY_API_TOKEN=        # "nextjs-server" editor token (Manage → API → Tokens); used by live fetch and seed
SANITY_REVALIDATE_SECRET=
```

CORS origins registered: `http://localhost:3000`, `http://localhost:3001`, `https://licorne-website.vercel.app`. Vercel project `licorne-website` (XMA Team) is linked via `.vercel/` and has all five env vars in production, preview and development. Add the production domain when known.

## Adding a service page

1. In Studio → Service Pages → create: title, slug, category, order, hero image, and the section fields.
2. Add the link under the right category in **Navigation & Menus** (and in Homepage → Services → sub-links if it should appear there).
3. Optionally add a card to the static `/services` index (`app/(site)/services/page.tsx`).

If adding via code instead, add a seed file in `sanity/seed/services/`, register it in `index.ts`, run `bun run seed`.
