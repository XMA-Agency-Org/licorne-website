# Services Page Documentation

## Overview

The services section consists of two main page types:
1. **Services Index Page** (`/services`) - Static overview of all services with category grouping
2. **Individual Service Pages** (`/services/[slug]`) - Rendered from Sanity `service` documents (see `docs/cms.md`)

## Architecture

### File Structure

```
app/(site)/services/
├── _components/           # Private components (not routes)
│   ├── AnimatedSection.tsx
│   ├── AnimatedCounter.tsx
│   ├── FAQAccordion.tsx
│   ├── FeaturedServiceCard.tsx
│   ├── ProcessTimeline.tsx
│   ├── ServiceCardEnhanced.tsx
│   ├── ServiceCategorySection.tsx
│   └── index.ts
├── components/            # Shared service components
│   ├── ServicePage.tsx    # Template for individual services
│   └── ServiceCta.tsx     # CTA section component
├── [slug]/                # CMS-driven service page
│   ├── page.tsx
│   └── _lib/toServicePageProps.ts
├── layout.tsx             # Services layout with metadata
└── page.tsx               # Services index page
```

## Components

### Animation Components

#### AnimatedSection
Wrapper component that animates children on scroll.

```tsx
<AnimatedSection delay={0.2}>
  <div>Content fades in when scrolled into view</div>
</AnimatedSection>
```

#### AnimatedHeading
Animated section header with eyebrow, title, and optional accent.

```tsx
<AnimatedHeading
  eyebrow="Our Services"
  title="Start Your Business in"
  titleAccent="Dubai"
  centered={false}
  light={false}
/>
```

#### AnimatedCounter
Number counter animation for statistics.

```tsx
<AnimatedCounter
  value="500+"
  label="Companies Formed"
  valueClassName="text-4xl font-serif"
  labelClassName="text-sm text-text-secondary"
/>
```

#### StatsRow
Row of animated statistics.

```tsx
<StatsRow
  stats={[
    { value: "500+", label: "Companies Formed" },
    { value: "40+", label: "Free Zones" },
  ]}
  variant="light" // or "dark"
  layout="horizontal" // or "grid"
/>
```

### Service Cards

#### FeaturedServiceCard
Large hero-style card with background image for primary services.

```tsx
<FeaturedServiceCard
  title="Mainland Company Setup"
  description="Full description..."
  href="/services/mainland-company-setup"
  image={HeroImage}
  badge="Most Popular"
/>
```

#### ServiceCardEnhanced
Standard service card with hover effects.

```tsx
<ServiceCardEnhanced
  title="Visa & Immigration"
  description="Description..."
  href="/services/visa-immigration"
  index={0} // For stagger animation
/>
```

### Section Components

#### ServiceCategorySection
Groups services by category with alternating backgrounds.

```tsx
<ServiceCategorySection
  eyebrow="Business Operations"
  title="Keep Your Business"
  titleAccent="Running"
  services={[...]}
  variant="dark" // or "light"
  columns={2}
/>
```

#### FAQAccordion
Interactive accordion with smooth animations.

```tsx
<FAQAccordion
  eyebrow="Common Questions"
  title="Frequently Asked Questions"
  items={[
    { question: "...", answer: "..." }
  ]}
/>
```

#### ProcessTimeline
Visual timeline showing process steps.
- Horizontal on desktop
- Vertical on mobile

```tsx
<ProcessTimeline
  eyebrow="How It Works"
  title="Your Path to Success"
  items={[
    { step: "01", title: "Consultation", description: "..." }
  ]}
/>
```

## Service Categories

The single source of truth for the service taxonomy is `lib/navigation.ts`. The header (`Header.tsx`, `CascadingMenu.tsx`), footer, and the homepage `ServicesSection` all read from it — add or move a service there, not in each component.

`COMPANY_SETUP` is a top-level header dropdown, separate from Services:

- Mainland Company Setup — `/services/mainland-company-setup`
- Free Zone Company Setup — `/services/free-zone-company-setup`
- Offshore Company Setup — `/services/offshore-company-setup`

`SERVICES` categories (each has an overview `href` plus `items`):

1. **License Services** — one page, `/services/license-services`, with anchored sections `#renewal`, `#modification`, `#cancellation`, `#freezing`
2. **Visa & Immigration** — overview at `/services/visa-immigration`; separate pages for Residence, Dependent, Remote Work, Golden and Freelance visas
3. **Finance & Banking** — Bank Account Opening, Corporate Tax Registration, Bookkeeping & VAT (`/services/accounting-vat`)
4. **PRO & Government Services** — PRO & Government Services, Office Solutions, Company Liquidation
5. **Notary Services** — one page, `/services/notary-services`, with anchored sections `#power-of-attorney`, `#will-registration`, `#memorandum-of-association`, `#amendment-to-moa`, `#share-transfer-agreement`

Anchored sections are the `deliverables.items[].id` of the `ServicePage` config; the card gets `id` + `scroll-mt-28`. `ServiceCategorySection` accepts an `id` so `/services#finance-banking` style links land on the right block.

`/services/trade-license` permanently redirects to `/services/license-services` (see `next.config.ts`).

## Site-wide Stats

Client-approved numbers (from the Sept 2026 review): **50+** companies formed, **10+** free zones covered, **98%** first-time approvals, **72h** average setup time. Do not reintroduce the earlier 500+/40+ figures or "hundreds of" phrasing.

## Styling Conventions

### Colors
- Primary (Gold): `text-primary`, `bg-primary`
- Secondary (Navy): `text-secondary`, `bg-secondary`
- Text: `text-text-secondary` for body, `text-secondary` for headings

### Typography (Font Tokens)
- `font-primary` (Instrument Serif): Applied globally to h1-h6 headings
- `font-secondary` (Inter): Applied to body, use class for specific text elements
- Accent words in titles: Use `text-primary` for gold color (inherits heading font)
- Body text: `font-secondary text-text-secondary leading-relaxed`

### Animations
- All animations use `motion/react` (Framer Motion)
- Standard easing: `[0.25, 0.1, 0.25, 1]`
- Stagger delay: 0.1s between items
- Viewport trigger: `{ once: true, margin: "-50px" }`

### Section Spacing
- Standard: `py-24 lg:py-32`
- Container: `max-w-7xl mx-auto px-6`

### Background Patterns
- Light sections: Cross pattern SVG at 5% opacity
- Dark sections: Grain texture + overlay image

## Adding New Services

Preferred: create the document in Studio → Service Pages, then add links in Navigation & Menus. Via code: add `sanity/seed/services/<slug>.ts`, register it in `sanity/seed/services/index.ts`, run `bun run seed`, and update `lib/navigation.ts` (static fallback) plus the `/services` index cards.
