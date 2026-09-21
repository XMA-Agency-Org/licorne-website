# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Licorne Website is a business services website for a Dubai-based company formation and PRO services firm. Built with Next.js 16.3, React 19, Tailwind CSS 4, and Motion (Framer Motion).

## Commands

```bash
bun run dev      # Development server with Turbopack (http://localhost:3000)
bun run build    # Production build with Turbopack
bun run lint     # ESLint
bun run typegen  # Extract Sanity schema + regenerate sanity/types.generated.ts (run after schema/query changes)
bun run seed     # Upsert seed content + images into Sanity (overwrites singletons, including Studio edits!)
bun run seed -- --team-only  # Only upsert team members + relink homepage.team
bun run migrate:navigation   # Convert nav links to service-page references; fill new nav fields (idempotent)
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router, Turbopack enabled
- **Styling**: Tailwind CSS 4 with custom design tokens
- **Animations**: Motion (framer-motion) for page transitions and UI animations
- **UI Components**: Radix UI primitives (Dialog, Navigation Menu) via shadcn-style components
- **Fonts**: Inter (sans) + Instrument_Serif (serif) via next/font

### Directory Structure

```
app/
├── (site)/               # Public site — layout.tsx renders Header/Footer
│   ├── (home)/components/    # Homepage-specific sections (Hero, Services, FAQ, etc.)
│   ├── services/
│   │   ├── _components/      # Private reusable service components (AnimatedSection, ProcessTimeline, FAQAccordion)
│   │   ├── components/       # Shared service components (ServicePage, ServiceCta)
│   │   ├── [slug]/           # CMS-driven service page (Sanity `service` docs) + _lib/toServicePageProps
│   │   └── page.tsx          # Static services index
│   └── [page-name]/          # Static pages (about, contact, faq, etc.)
├── (studio)/studio/[[...tool]]/  # Embedded Sanity Studio at /studio (bare layout, no Header/Footer)
└── layout.tsx            # Root layout: fonts + globals only

sanity/                   # CMS: env.ts, schemas/, structure.ts, lib/ (client, live, image, queries), seed/, types.generated.ts
app/api/revalidate/       # Sanity webhook → revalidatePath("/", "layout")
sanity.config.ts          # Studio config; sanity.cli.ts for the CLI

components/
├── ui/                   # Base UI primitives (Button, Card, Sheet, NavigationMenu)
├── cards/                # Card variants (Feature, Testimonial, Service, ProcessStep)
├── sections/             # Reusable page sections
└── layout/               # Layout components (Header, Footer, Section, SectionHeading)

components/forms/         # LeadForm (shared enquiry form) + service options
components/ui/button.tsx, form-field.tsx  # CVA primitives: Button, Label, Input, Textarea, Select, FieldError

lib/
├── utils.ts              # cn() utility for className merging (clsx + tailwind-merge)
├── siteUrl.ts            # NEXT_PUBLIC_SITE_URL with vercel.app fallback
└── leads/                # submitLead server action, zod schema, Resend notification

app/sitemap.ts, app/robots.ts  # SEO metadata files
```

### Design System

Custom color palette defined in `app/globals.css` using Tailwind 4 `@theme`:
- **Primary**: Gold tones (`gold-*`, `primary-*`)
- **Secondary**: Navy tones (`navy-*`, `secondary-*`)
- **Base**: Stone neutrals (`base-*`)
- **Semantic**: `text`, `text-secondary`, `background`, `border`, etc.

Utility classes: `glass`, `gradient-text`, `bg-dots-pattern`, `card-elevated`, `card-premium`

### Navigation Model

The Sanity `navigation` singleton is the single source of truth for the service taxonomy. The header (labels, links, button), cascading menu, mobile menu, footer columns, the `/services` listing page and the lead form's service options all read it. `lib/navigation.ts` holds the typed static fallback (`COMPANY_SETUP`, `SERVICES`, `DEFAULT_HEADER`) and `resolveNavigation()`. Menu links reference service documents (see "Links" in `docs/cms.md`). Never hardcode service lists or nav labels in components. See `docs/services-page.md` for the category list and anchor conventions, and `docs/homepage.md` for homepage section notes.

### Service Pages Pattern

Service pages are Sanity `service` documents rendered by `app/(site)/services/[slug]/page.tsx` through the `ServicePage` template. The seed source of truth for each page lives in `sanity/seed/services/<slug>.ts` with the same shape:
- `hero`: title, description, image
- `overview`: eyebrow, title, description, highlights
- `stats`: value/label pairs
- `deliverables`: service items
- `process`: step-by-step timeline
- `faqs`: Q&A items
- `cta`: call-to-action config

### Path Aliases

`@/*` maps to project root (configured in `tsconfig.json`). Route-group folders are part of the path: `@/app/(site)/services/components/ServicePage`.

### CMS

Sanity project `mxwn9exj`, Studio embedded at `/studio`. Homepage, About, Navigation, service pages, testimonials and team members are CMS-driven via `sanityFetch` (Live Content API); every section keeps a static fallback. See `docs/cms.md` for the full map, seed and webhook setup. Use `bun`, not npm.

- After changing a schema or GROQ query: `bun run typegen`.
- Content edits belong in Studio (or in `sanity/seed/` + `bun run seed`), not in components.
- `sanity/seed/site.ts` doubles as the runtime fallback for the About page.

### Lead forms

All three forms (homepage CTA, service CTA, /contact) render `components/forms/LeadForm`. `submitLead` saves a `formSubmission` to Sanity and then emails it through Resend. See `docs/forms.md`. The dataset is public-read, so any document holding personal data **must** use a dotted `_id` (`formSubmission.<uuid>`, `settings.formSettings`) to stay private.

## Workflow

- Commit and push straight to `main` (the user's decision, Sep 21 2026). Don't push `staging`.
- Don't run `bun run build` unless asked. Verify with `bun run lint`, `bunx tsc --noEmit` and the dev server.
- Data migration tools must target explicit document paths. A generic "any object with `href`" walk once mistook nav categories for links and corrupted their `_type`. Always back up the doc and verify with a GROQ read after migrating.
- Before running a full `bun run seed`, remember it replaces the homepage/about/navigation singletons and wipes Studio edits. Use targeted patches (`setIfMissing`, `--team-only`) for live content.

## Content Rules

- Approved stats: 50+ companies formed, 10+ free zones, 98% first-time approvals, 72h average setup. Never use the old 500+/40+ or "hundreds of" claims.
- Testimonials: name + position + quote, no photos. The client enters them in Studio; don't replace the placeholders in code.
- Grouped services (license renewal/modification/cancellation/freezing; the five notary documents) live as anchored sections on one page, not separate routes.

## Styling Rules

- **Instrument_Serif font**: Never apply bold/font-weight styles.
- Use semantic color tokens (`text-secondary`, `bg-primary`, `border-base-200`) over raw colors.
- Components use the `cn()` utility from `@/lib/utils` for conditional classes.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
