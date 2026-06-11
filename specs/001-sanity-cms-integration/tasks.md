# Tasks — Sanity CMS Integration

Feature: `001-sanity-cms-integration`
Generated from: `plan.md`

---

## Phase 1: Foundation Setup

### T001 — Install Sanity dependencies
**Files:** `package.json`
**Action:** Run:
```bash
bun add next-sanity @sanity/image-url @sanity/vision sanity axios groq
bun add -d @sanity/types
```
Verify all packages installed in `package.json`.

---

### T002 — Initialize Sanity project and configure environment
**Depends on:** T001
**Files:** `.env.local`, `.gitignore`
**Action:**
1. Run `bun x sanity@latest init --create-project "Licorne Website" --dataset production`
2. Extract the project ID from the output
3. Create `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=<id>
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-29
SANITY_API_TOKEN=<token>
SANITY_REVALIDATE_SECRET=<generate-random-string>
```
4. Ensure `.env.local` is in `.gitignore`

---

### T003 — Create Sanity directory structure
**Depends on:** T002
**Files (all new):**
```
sanity/
├── lib/
│   ├── client.ts
│   ├── image.ts
│   └── queries.ts
├── schemas/
│   ├── index.ts
│   ├── documents/
│   ├── singletons/
│   └── objects/
└── structure.ts
```
**Action:** Create the empty directory structure with placeholder `index.ts` files. The Sanity client, image helper, and queries will be implemented in later tasks.

---

### T004 — Update next.config.ts for Sanity image CDN
**Depends on:** T001
**Files:** `next.config.ts`
**Action:** Add `cdn.sanity.io` to the `images.remotePatterns` array:
```ts
{
  protocol: "https",
  hostname: "cdn.sanity.io",
  port: "",
  pathname: "/**",
}
```

---

## Phase 2: Schema Design — Object Types [P]

All object type tasks are independent of each other and can run in parallel.

### T005 — Create `stat` object schema [P]
**Depends on:** T003
**File (new):** `sanity/schemas/objects/stat.ts`
**Action:** Define a Sanity object type `stat` with:
- `value` (string, required) — e.g. "500+", "72h"
- `label` (string, required) — e.g. "Companies Formed"

---

### T006 — Create `faqItem` object schema [P]
**Depends on:** T003
**File (new):** `sanity/schemas/objects/faqItem.ts`
**Action:** Define a Sanity object type `faqItem` with:
- `question` (string, required)
- `answer` (text, required)

---

### T007 — Create `cta` object schema [P]
**Depends on:** T003
**File (new):** `sanity/schemas/objects/cta.ts`
**Action:** Define a Sanity object type `cta` with:
- `title` (string, required)
- `description` (text, required)
- `primaryLabel` (string, required)
- `primaryHref` (string, required)
- `secondaryLabel` (string, optional)
- `secondaryHref` (string, optional)

---

### T008 — Create `processStep` object schema [P]
**Depends on:** T003
**File (new):** `sanity/schemas/objects/processStep.ts`
**Action:** Define a Sanity object type `processStep` with:
- `step` (string, required) — e.g. "01"
- `title` (string, required)
- `description` (text, required)

---

### T009 — Create `deliverable` object schema [P]
**Depends on:** T003
**File (new):** `sanity/schemas/objects/deliverable.ts`
**Action:** Define a Sanity object type `deliverable` with:
- `title` (string, required)
- `description` (text, required)

---

### T010 — Create `seo` object schema [P]
**Depends on:** T003
**File (new):** `sanity/schemas/objects/seo.ts`
**Action:** Define a Sanity object type `seo` with:
- `title` (string, optional)
- `description` (text, optional)
- `keywords` (array of string, optional)
- `ogImage` (image, optional)

---

## Phase 2: Schema Design — Document Types [P]

Document types depend on object types being complete. All document types are independent of each other.

### T011 — Create `service` document schema [P]
**Depends on:** T005, T006, T007, T008, T009, T010
**File (new):** `sanity/schemas/documents/service.ts`
**Action:** Define document type `service` with:
- `title` (string, required)
- `slug` (slug, source: title, required)
- `hero` object: `title` (string), `description` (text), `image` (image, required), `imageAlt` (string)
- `overview` object: `eyebrow` (string), `title` (string), `description` (text), `highlights` (array of string), `expectationTitle` (string, optional), `expectationDescription` (text, optional)
- `stats` (array of `stat`)
- `deliverables` object: `eyebrow` (string), `title` (string), `items` (array of `deliverable`)
- `process` object: `eyebrow` (string), `title` (string), `items` (array of `processStep`)
- `faqs` object: `eyebrow` (string), `title` (string), `items` (array of `faqItem`)
- `cta` (cta object)
- `seo` (seo object)

Reference existing `ServicePageProps` interface in `app/services/components/ServicePage.tsx` for exact field structure.

---

### T012 — Create `testimonial` document schema [P]
**Depends on:** T005, T010
**File (new):** `sanity/schemas/documents/testimonial.ts`
**Action:** Define document type `testimonial` with:
- `author` (string, required)
- `role` (string)
- `location` (string)
- `text` (text, required)
- `avatar` (image, optional)
- `featured` (boolean, default: false)

---

### T013 — Create `teamMember` document schema [P]
**Depends on:** T003
**File (new):** `sanity/schemas/documents/teamMember.ts`
**Action:** Define document type `teamMember` with:
- `name` (string, required)
- `role` (string, required)
- `image` (image)
- `bio` (text)
- `order` (number) — for sorting

---

### T014 — Create `faqCategory` document schema [P]
**Depends on:** T006
**File (new):** `sanity/schemas/documents/faqCategory.ts`
**Action:** Define document type `faqCategory` with:
- `category` (string, required) — e.g. "Company Formation"
- `slug` (slug, source: category)
- `questions` (array of `faqItem`)
- `order` (number) — for sorting

---

## Phase 2: Schema Design — Singleton Documents [P]

### T015 — Create `homepage` singleton schema [P]
**Depends on:** T005, T006, T007, T010
**File (new):** `sanity/schemas/singletons/homepage.ts`
**Action:** Define singleton document type `homepage` with sections matching existing homepage components:
- `hero` object: `headline` (string), `subheadline` (text), `primaryCtaLabel` (string), `primaryCtaHref` (string), `secondaryCtaLabel` (string), `secondaryCtaHref` (string), `bgImage` (image)
- `about` object: `eyebrow` (string), `title` (string), `titleSpan` (string), `description` (text), `buttonText` (string), `buttonHref` (string), `image` (image), `stats` (array of `stat`)
- `services` object: `eyebrow` (string), `title` (string), `items` (array of object: `number` string, `title` string, `description` text, `href` string)
- `whyChooseUs` object: `eyebrow` (string), `title` (string), `items` (array of object: `title` string, `description` text)
- `testimonials`: array of references to `testimonial`
- `team` object: `eyebrow` (string), `title` (string), `members` (array of references to `teamMember`)
- `faq` object: `eyebrow` (string), `title` (string), `items` (array of `faqItem`)
- `cta` (cta object)
- `seo` (seo object)

Reference `app/(home)/components/*.tsx` for exact field names and content.

---

### T016 — Create `aboutPage` singleton schema [P]
**Depends on:** T005, T007, T010
**File (new):** `sanity/schemas/singletons/aboutPage.ts`
**Action:** Define singleton `aboutPage` with sections matching `app/about/page.tsx`:
- `hero` object: `eyebrow`, `title`, `description`, `image`, `imageAlt`
- `story` object: `eyebrow`, `title`, `paragraphs` (array of text)
- `whyClients` object: `title`, `description`, `items` (array of string)
- `stats` (array of `stat`)
- `journey` object: `eyebrow`, `title`, `milestones` (array of object: `year`, `title`, `description`)
- `values` object: `eyebrow`, `title`, `items` (array of object: `title`, `description`)
- `commitment` object: `eyebrow`, `title`, `paragraphs` (array of text)
- `cta` (cta object)
- `seo` (seo object)

---

### T017 — Create `contactPage` singleton schema [P]
**Depends on:** T010
**File (new):** `sanity/schemas/singletons/contactPage.ts`
**Action:** Define singleton `contactPage` with:
- `hero` object: `eyebrow`, `title`, `description`, `image`, `imageAlt`
- `contactMethods` object: `email` (string), `phone` (string), `address` (text)
- `serviceOptions` (array of string) — for the form dropdown
- `seo` (seo object)

Reference `app/contact/page.tsx` for exact content.

---

### T018 — Create `howItWorksPage` singleton schema [P]
**Depends on:** T006, T008, T010
**File (new):** `sanity/schemas/singletons/howItWorksPage.ts`
**Action:** Define singleton `howItWorksPage` with sections matching `app/how-it-works/page.tsx`:
- `hero` object: `eyebrow`, `title`, `description`, `image`, `imageAlt`
- `processSteps` (array of `processStep`)
- `faqs` (array of `faqItem`)
- `seo` (seo object)

Reference `app/how-it-works/page.tsx` for exact content.

---

### T019 — Create `siteSettings` singleton schema [P]
**Depends on:** T010
**File (new):** `sanity/schemas/singletons/siteSettings.ts`
**Action:** Define singleton `siteSettings` with:
- `companyName` (string)
- `tagline` (string)
- `description` (text)
- `logo` (image)
- `contact` object: `email`, `phone`, `address`
- `social` object: `linkedin`, `instagram`, `twitter`, `facebook` (all string/url)
- `defaultSeo` (seo object)

---

### T020 — Create `navigation` singleton schema [P]
**Depends on:** T003
**File (new):** `sanity/schemas/singletons/navigation.ts`
**Action:** Define singleton `navigation` with:
- `header` object:
  - `serviceCategories` (array of object: `categoryName` string, `items` array of object: `label` string, `href` string, `iconName` string)
  - `resourceLinks` (array of object: `label` string, `href` string)
- `footer` object:
  - `description` (text)
  - `linkGroups` (array of object: `title` string, `links` array of object: `label` string, `href` string)
  - `legalLinks` (array of object: `label` string, `href` string)

Reference `lib/navigation.ts` and `components/layout/Footer.tsx` for exact data structure.

---

### T021 — Create schema registry and desk structure
**Depends on:** T005–T020
**Files:**
- `sanity/schemas/index.ts`
- `sanity/structure.ts`
**Action:**
1. In `sanity/schemas/index.ts`: Import and export all schema types (objects, documents, singletons) as a flat array.
2. In `sanity/structure.ts`: Create custom desk structure using `structureTool` that:
   - Pins singletons at the top level (Homepage, About Page, Contact Page, How It Works, Site Settings, Navigation)
   - Lists document types below (Services, Testimonials, Team Members, FAQ Categories)
   - Each singleton opens directly to its edit form (no list view)

---

## Phase 3: Client & Utilities

### T022 — Create Sanity client
**Depends on:** T002
**File:** `sanity/lib/client.ts`
**Action:** Create a Sanity client using `createClient` from `next-sanity`:
```ts
import { createClient } from "next-sanity"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: process.env.NODE_ENV === "production",
})
```

---

### T023 — Create image URL builder
**Depends on:** T022
**File:** `sanity/lib/image.ts`
**Action:** Create `urlFor()` helper using `@sanity/image-url`:
```ts
import imageUrlBuilder from "@sanity/image-url"
import { client } from "./client"

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
```

---

### T024 — Create GROQ queries
**Depends on:** T011–T020 (needs to know all schema fields)
**File:** `sanity/lib/queries.ts`
**Action:** Define all GROQ queries as exported constants:
- `homepageQuery` — fetch homepage singleton with dereferenced testimonial and teamMember references
- `serviceBySlugQuery` — fetch single service by slug
- `allServicesQuery` — fetch all services (title, slug, description for listing)
- `navigationQuery` — fetch navigation singleton
- `siteSettingsQuery` — fetch siteSettings singleton
- `aboutPageQuery` — fetch aboutPage singleton
- `contactPageQuery` — fetch contactPage singleton
- `howItWorksPageQuery` — fetch howItWorksPage singleton
- `faqPageQuery` — fetch all faqCategories ordered by `order`
- `allTestimonialsQuery` — fetch all testimonials
- `allTeamMembersQuery` — fetch all team members ordered by `order`

Each query should project only the fields needed by the corresponding page component.

---

## Phase 4: Studio Route

### T025 — Create Sanity config files [P]
**Depends on:** T021
**Files (new):**
- `sanity.config.ts` (project root)
- `sanity.cli.ts` (project root)
**Action:**
1. `sanity.config.ts`:
```ts
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./sanity/schemas"
import { structure } from "./sanity/structure"

export default defineConfig({
  name: "licorne-website",
  title: "Licorne Website",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: "/studio",
  plugins: [structureTool({ structure }), visionTool()],
  schema: { types: schemaTypes },
})
```
2. `sanity.cli.ts`:
```ts
import { defineCliConfig } from "sanity/cli"

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  },
})
```

---

### T026 — Create Studio route in Next.js [P]
**Depends on:** T025
**Files (new):**
- `app/studio/[[...tool]]/page.tsx`
- `app/studio/[[...tool]]/layout.tsx`
**Action:**
1. `page.tsx`:
```tsx
"use client"
import { NextStudio } from "next-sanity/studio"
import config from "@/sanity.config"

export default function StudioPage() {
  return <NextStudio config={config} />
}
```
2. `layout.tsx` — Minimal layout without Header/Footer:
```tsx
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
```
3. Ensure the root `app/layout.tsx` does NOT apply Header/Footer to `/studio` routes. Either use a route group or conditionally render in layout.

---

## Phase 5: Page Migration — Service Pages

### T027 — Modify ServicePage component for Sanity images
**Depends on:** T023
**File:** `app/services/components/ServicePage.tsx`
**Action:**
1. Change `hero.image` type from `StaticImageData` to `string` in the `ServicePageProps` interface
2. Update the `<Image>` component in the hero section to use `fill` prop instead of `src={hero.image}` with StaticImageData:
```tsx
<Image
  src={hero.image}
  alt={hero.imageAlt}
  fill
  className="absolute inset-0 w-full h-full object-cover object-center"
  priority
/>
```
3. Ensure the parent div has `relative` positioning (it already does via `absolute inset-0`)

---

### T028 — Create dynamic service route
**Depends on:** T024, T027
**File (new):** `app/services/[slug]/page.tsx`
**Action:**
1. Create a dynamic route that:
   - Fetches service data from Sanity by slug using `serviceBySlugQuery`
   - Converts Sanity image references to URLs using `urlFor()`
   - Passes data to `<ServicePage />` component
2. Add `generateStaticParams` that fetches all service slugs
3. Add `generateMetadata` that builds metadata from service SEO fields
4. Handle 404 with `notFound()` if slug doesn't match

---

### T029 — Delete individual service page directories
**Depends on:** T028 (verify dynamic route works first)
**Files (delete):**
- `app/services/mainland-company-setup/page.tsx`
- `app/services/free-zone-company-setup/page.tsx`
- `app/services/trade-license/page.tsx`
- `app/services/visa-immigration/page.tsx`
- `app/services/golden-visa/page.tsx`
- `app/services/pro-government-services/page.tsx`
- `app/services/bank-account-opening/page.tsx`
- `app/services/office-solutions/page.tsx`
- `app/services/accounting-vat/page.tsx`
- `app/services/company-liquidation/page.tsx`
**Action:** Delete all 10 individual service page directories. The dynamic `[slug]` route replaces them.

---

## Phase 5: Page Migration — Homepage

### T030 — Update homepage to fetch Sanity data
**Depends on:** T024
**File:** `app/page.tsx`
**Action:**
1. Make the page an async server component
2. Fetch homepage data from Sanity using `homepageQuery`
3. Pass sectioned data as props to each section component:
```tsx
export default async function LicornePage() {
  const homepage = await client.fetch(homepageQuery)
  return (
    <>
      <HeroSection data={homepage.hero} />
      <AboutSection data={homepage.about} />
      <ServicesSection data={homepage.services} />
      ...
    </>
  )
}
```

---

### T031 — Update HeroSection to accept data props [P]
**Depends on:** T030
**File:** `app/(home)/components/HeroSection.tsx`
**Action:**
1. Define a `HeroSectionProps` interface matching the homepage hero schema fields
2. Accept `data` prop instead of using hardcoded content
3. Use `urlFor()` for the background image from Sanity
4. Map CTA labels and hrefs from data

Current hardcoded content to replace:
- Headline: "Your Business in Dubai, Simplified"
- Subheadline: "From company formation to visas and beyond..."
- CTA labels: "Start Your Setup", "Explore Services"

---

### T032 — Update AboutSection to accept data props [P]
**Depends on:** T030
**File:** `app/(home)/components/AboutSection.tsx`
**Action:**
1. Define props interface matching homepage `about` schema
2. Accept `data` prop, remove `ABOUT_CONFIG` and `STATS` constants
3. Use `urlFor()` for the about image
4. Map stats from data

---

### T033 — Update ServicesSection to accept data props [P]
**Depends on:** T030
**File:** `app/(home)/components/ServicesSection.tsx`
**Action:**
1. Define props interface matching homepage `services` schema
2. Accept `data` prop, remove hardcoded `services` array
3. Map service items from data

---

### T034 — Update WhyChooseUsSection to accept data props [P]
**Depends on:** T030
**File:** `app/(home)/components/WhyChooseUsSection.tsx`
**Action:**
1. Define props interface matching homepage `whyChooseUs` schema
2. Accept `data` prop, remove hardcoded content

---

### T035 — Update TestimonialsSliderSection to accept data props [P]
**Depends on:** T030
**File:** `app/(home)/components/TestimonialsSliderSection.tsx`
**Action:**
1. Define props interface for testimonial data (author, role, text, avatar)
2. Accept `data` prop (array of testimonials from Sanity with dereferenced data)
3. Use `urlFor()` for avatar images

---

### T036 — Update TeamSection to accept data props [P]
**Depends on:** T030
**File:** `app/(home)/components/TeamSection.tsx`
**Action:**
1. Define props interface for team section (eyebrow, title, members)
2. Accept `data` prop with dereferenced team member data
3. Use `urlFor()` for member images

---

### T037 — Update FAQSection to accept data props [P]
**Depends on:** T030
**File:** `app/(home)/components/FAQSection.tsx`
**Action:**
1. Define props interface matching homepage `faq` schema
2. Accept `data` prop, remove hardcoded FAQ items

---

### T038 — Update CTASection to accept data props [P]
**Depends on:** T030
**File:** `app/(home)/components/CTASection.tsx`
**Action:**
1. Define props interface matching homepage `cta` schema
2. Accept `data` prop, remove hardcoded CTA content
3. Keep the form structure but populate service dropdown from data if available

---

## Phase 5: Page Migration — Header & Footer

### T039 — Split Header into server wrapper + client component
**Depends on:** T024
**Files:**
- `components/layout/Header.tsx` (modify)
- `components/layout/HeaderClient.tsx` (new)
**Action:**
1. Move existing `Header` component (which is `"use client"`) to `HeaderClient.tsx`, rename to `HeaderClient`
2. Add props interface for `HeaderClient` that accepts navigation data:
   - `serviceCategories: Array<{ categoryName: string, items: Array<{ label: string, href: string, iconName: string }> }>`
   - `resourceLinks: Array<{ label: string, href: string }>`
3. Replace `import { SERVICES, RESOURCES } from "@/lib/navigation"` with props usage
4. Create new `Header` in `Header.tsx` as an async server component that:
   - Fetches navigation data from Sanity
   - Passes it to `<HeaderClient />`

---

### T040 — Split Footer into server wrapper + client component
**Depends on:** T024
**Files:**
- `components/layout/Footer.tsx` (modify)
- `components/layout/FooterClient.tsx` (new)
**Action:**
1. Create `FooterClient.tsx` with existing Footer markup but accepting data via props:
   - `navigation` (footer link groups, legal links)
   - `siteSettings` (company description)
2. Remove hardcoded `FOOTER_SERVICES`, `FOOTER_RESOURCES`, `FOOTER_COMPANY` constants
3. Create new `Footer` in `Footer.tsx` as async server component that fetches data and passes to `FooterClient`

---

### T041 — Update root layout for async data fetching
**Depends on:** T039, T040
**File:** `app/layout.tsx`
**Action:**
1. Make `RootLayout` async
2. Header and Footer are now async server components internally — no changes needed in layout unless they need shared data passed down
3. Ensure `/studio` route does not render Header/Footer (the studio layout.tsx from T026 handles this)

---

## Phase 5: Page Migration — Other Pages [P]

### T042 — Migrate About page to Sanity [P]
**Depends on:** T024
**File:** `app/about/page.tsx`
**Action:**
1. Make page async
2. Fetch `aboutPage` singleton from Sanity
3. Replace hardcoded `values`, `stats`, `milestones` arrays and inline content with Sanity data
4. Use `urlFor()` for hero image
5. Update `generateMetadata` to use SEO fields from Sanity

---

### T043 — Migrate Contact page to Sanity [P]
**Depends on:** T024
**File:** `app/contact/page.tsx`
**Action:**
1. Make page async
2. Fetch `contactPage` singleton + `siteSettings` for contact info
3. Replace hardcoded content with Sanity data
4. Populate service dropdown from `contactPage.serviceOptions`

---

### T044 — Migrate FAQ page to Sanity [P]
**Depends on:** T024
**File:** `app/faq/page.tsx`
**Action:**
1. Make page async
2. Fetch all `faqCategory` documents ordered by `order`
3. Replace hardcoded FAQ categories/questions with Sanity data

---

### T045 — Migrate How It Works page to Sanity [P]
**Depends on:** T024
**File:** `app/how-it-works/page.tsx`
**Action:**
1. Make page async
2. Fetch `howItWorksPage` singleton from Sanity
3. Replace hardcoded process steps and FAQs with Sanity data

---

### T046 — Delete lib/navigation.ts
**Depends on:** T039, T040 (after Header/Footer no longer import from it)
**File (delete):** `lib/navigation.ts`
**Action:** Delete the file. All navigation data now comes from Sanity.

---

## Phase 6: Migration Script

### T047 — Create content migration script
**Depends on:** T011–T020 (all schemas must be defined), T022, T023
**File (new):** `scripts/migrate-to-sanity.ts`
**Action:** Create a script that programmatically:
1. Reads all hardcoded content from existing page files
2. Uploads images to Sanity asset pipeline (hero images from `public/images/heroes/`, external URLs)
3. Creates all documents:
   - 10 service documents (extract data from each `app/services/*/page.tsx`)
   - Testimonial documents (extract from `TestimonialsSliderSection.tsx`)
   - Team member documents (extract from `TeamSection.tsx`)
   - FAQ category documents (extract from `FAQSection.tsx` and `app/faq/page.tsx`)
   - 1 homepage singleton
   - 1 aboutPage singleton
   - 1 contactPage singleton
   - 1 howItWorksPage singleton
   - 1 siteSettings singleton
   - 1 navigation singleton

Use `@sanity/client` mutations API for document creation.
Run with: `bun run scripts/migrate-to-sanity.ts`

The script should be idempotent — use deterministic document IDs so re-running updates rather than duplicates.

---

## Phase 7: Revalidation

### T048 — Add ISR revalidation to pages [P]
**Depends on:** T030, T028, T042–T045
**Files:** All page files that fetch from Sanity
**Action:** Add `export const revalidate = 3600` to each page that fetches Sanity data:
- `app/page.tsx`
- `app/services/[slug]/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/faq/page.tsx`
- `app/how-it-works/page.tsx`

---

### T049 — Create on-demand revalidation API route
**Depends on:** T022
**File (new):** `app/api/revalidate/route.ts`
**Action:** Create a POST route handler that:
1. Validates the request using `SANITY_REVALIDATE_SECRET`
2. Parses the Sanity webhook payload to determine which document changed
3. Calls `revalidatePath()` or `revalidateTag()` for the affected pages
4. Returns appropriate status

---

## Phase 8: Documentation

### T050 — Update documentation
**Depends on:** All previous tasks
**Files:**
- `docs/cms-integration.md` (new)
- `CLAUDE.md` (update)
**Action:**
1. Create `docs/cms-integration.md` with:
   - How Sanity Studio works (`/studio`)
   - Schema overview and document types
   - How to add new content types
   - How revalidation works
   - Environment variables needed
2. Update `CLAUDE.md` with:
   - Sanity-related commands (`bun x sanity ...`)
   - New directory structure (`sanity/`)
   - Data fetching patterns

---

## Parallel Execution Guide

### Group 1 — Object schemas (after T003)
Run T005, T006, T007, T008, T009, T010 in parallel:
```
Task agents: T005, T006, T007, T008, T009, T010 — all target different files in sanity/schemas/objects/
```

### Group 2 — Document + singleton schemas (after Group 1)
Run T011, T012, T013, T014, T015, T016, T017, T018, T019, T020 in parallel:
```
Task agents: T011–T020 — all target different files in sanity/schemas/documents/ and sanity/schemas/singletons/
```

### Group 3 — Studio setup (after T021)
Run T025, T026 in parallel:
```
Task agents: T025 (config files), T026 (studio route) — different directories
```

### Group 4 — Homepage sections (after T030)
Run T031, T032, T033, T034, T035, T036, T037, T038 in parallel:
```
Task agents: T031–T038 — each modifies a different component file in app/(home)/components/
```

### Group 5 — Other page migrations (after T024)
Run T042, T043, T044, T045 in parallel:
```
Task agents: T042 (about), T043 (contact), T044 (faq), T045 (how-it-works) — different page files
```

### Group 6 — Header/Footer (after T024)
Run T039, T040 in parallel:
```
Task agents: T039 (Header), T040 (Footer) — different component files
```

---

## Dependency Graph Summary

```
T001 → T002 → T003 → [T005–T010 parallel] → [T011–T020 parallel] → T021
T002 → T022 → T023
T021 → T025, T026 (parallel)
T011–T020, T022 → T024
T023, T024 → T027 → T028 → T029
T024 → T030 → [T031–T038 parallel]
T024 → [T039, T040 parallel] → T041
T039, T040 → T046
T024 → [T042–T045 parallel]
T024, T011–T020 → T047
T028, T030, T042–T045 → T048
T022 → T049
All → T050
```
