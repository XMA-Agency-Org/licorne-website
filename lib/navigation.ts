import type { NavigationQueryResult } from "@/sanity/types.generated"

export type NavLink = {
  label: string
  href: string
  description?: string | null
}

export type NavCategory = {
  title: string
  href: string
  description?: string | null
  items: NavLink[]
  showInFooter?: boolean | null
  listingTitle?: string | null
  listingTitleAccent?: string | null
}

export type HeaderNavigation = {
  servicesLabel: string
  servicesHref: string
  resourcesLabel: string
  links: NavLink[]
  ctaButton: NavLink
}

export type SiteNavigation = {
  header: HeaderNavigation
  companySetup: NavCategory
  serviceCategories: NavCategory[]
  resourceLinks: NavLink[]
  footer: {
    description: string
    companyLinks: NavLink[]
  }
}

export const COMPANY_SETUP: NavCategory = {
  title: "Company Setup",
  href: "/services#company-setup",
  description:
    "Choose the right jurisdiction for your business and let us handle licensing, approvals and registration.",
  listingTitle: "Start Your Business in",
  listingTitleAccent: "Dubai",
  items: [
    {
      label: "Mainland Company Setup",
      href: "/services/mainland-company-setup",
      description: "LLC with full access to the UAE market",
    },
    {
      label: "Free Zone Company Setup",
      href: "/services/free-zone-company-setup",
      description: "100% ownership and tax advantages",
    },
    {
      label: "Offshore Company Setup",
      href: "/services/offshore-company-setup",
      description: "Asset holding and international structuring",
    },
  ],
}

export const SERVICES: Record<string, Omit<NavCategory, "title">> = {
  "License Services": {
    href: "/services/license-services",
    description:
      "Renewal, modification, cancellation and freezing of your UAE trade license.",
    listingTitle: "Keep Your License",
    listingTitleAccent: "Compliant",
    showInFooter: false,
    items: [
      {
        label: "License Renewal",
        href: "/services/license-services#renewal",
        description:
          "Annual renewal tracked and completed before expiry, with 30-day advance reminders so you never operate on a lapsed license.",
      },
      {
        label: "License Modification",
        href: "/services/license-services#modification",
        description:
          "Add activities, change your trade name, appoint managers or transfer shares. Amendments processed with the DET or your free zone.",
      },
      {
        label: "License Cancellation",
        href: "/services/license-services#cancellation",
        description:
          "Close your company properly with visa cancellations, government clearances and a clean deregistration.",
      },
      {
        label: "License Freezing",
        href: "/services/license-services#freezing",
        description:
          "Pause operations for up to three years while keeping your registration alive, then reactivate when you are ready.",
      },
    ],
  },
  "Visa & Immigration": {
    href: "/services/visa-immigration",
    description:
      "Residence, dependent, remote work, golden and freelance visas for you, your family and your team.",
    listingTitle: "Secure Your",
    listingTitleAccent: "Residency",
    showInFooter: true,
    items: [
      {
        label: "Residence Visa",
        href: "/services/residence-visa",
        description:
          "Investor, partner and employment visas under your own company, from entry permit to Emirates ID.",
      },
      {
        label: "Dependent Visa",
        href: "/services/dependent-visa",
        description:
          "Sponsor your spouse, children and parents with attestations, medicals and Emirates ID handled together.",
      },
      {
        label: "Remote Work Visa",
        href: "/services/remote-work-visa",
        description:
          "Live in Dubai while working for an employer or company abroad. One-year renewable residency, no UAE company needed.",
      },
      {
        label: "Golden Visa",
        href: "/services/golden-visa",
        description:
          "Ten-year residency for investors, entrepreneurs and specialists. We manage the full application process.",
      },
      {
        label: "Freelance Visa",
        href: "/services/freelance-visa",
        description:
          "Freelance permit and residence visa in your own name so you can invoice clients legally without a company.",
      },
    ],
  },
  "Finance & Banking": {
    href: "/services#finance-banking",
    description:
      "Corporate bank accounts, corporate tax registration and ongoing bookkeeping and VAT compliance.",
    listingTitle: "Get Your Finances",
    listingTitleAccent: "In Order",
    showInFooter: true,
    items: [
      {
        label: "Bank Account Opening",
        href: "/services/bank-account-opening",
        description:
          "Corporate bank account setup with expert guidance. We prepare documentation, introduce you to banks and support until activation.",
      },
      {
        label: "Corporate Tax Registration",
        href: "/services/corporate-tax-registration",
        description:
          "FTA registration, qualifying free zone assessment and annual return filing so you avoid penalties.",
      },
      {
        label: "Bookkeeping & VAT",
        href: "/services/accounting-vat",
        description:
          "VAT registration, bookkeeping, financial reporting and tax compliance. Keep your numbers accurate and your business compliant.",
      },
    ],
  },
  "PRO & Government Services": {
    href: "/services/pro-government-services",
    description:
      "Document attestation, Emirates ID, medicals, office solutions and government liaison.",
    listingTitle: "Keep Your Business",
    listingTitleAccent: "Running",
    showInFooter: false,
    items: [
      {
        label: "PRO & Government Services",
        href: "/services/pro-government-services",
        description:
          "Document attestation, Emirates ID, medical tests and government liaison. We handle the paperwork that keeps you compliant.",
      },
      {
        label: "Office Solutions",
        href: "/services/office-solutions",
        description:
          "Virtual offices, flexi desks and serviced offices. Get the business address and workspace you need across Dubai.",
      },
      {
        label: "Company Liquidation",
        href: "/services/company-liquidation",
        description:
          "Close your UAE business properly and completely. License cancellation, visa terminations and clean exit documentation.",
      },
    ],
  },
  "Notary Services": {
    href: "/services/notary-services",
    description:
      "Power of attorney, will registration, MOA drafting and amendments, and share transfer agreements.",
    listingTitle: "Documents That",
    listingTitleAccent: "Hold Up",
    showInFooter: false,
    items: [
      {
        label: "Power of Attorney",
        href: "/services/notary-services#power-of-attorney",
        description:
          "General and special POAs drafted bilingually and notarised at Dubai Courts or a private notary.",
      },
      {
        label: "Will Registration",
        href: "/services/notary-services#will-registration",
        description:
          "DIFC and Dubai Courts wills for non-Muslim residents to protect assets and guardianship.",
      },
      {
        label: "Memorandum of Association",
        href: "/services/notary-services#memorandum-of-association",
        description:
          "MOA drafting and notarisation for new mainland companies in the form the DET accepts.",
      },
      {
        label: "Amendment to MOA",
        href: "/services/notary-services#amendment-to-moa",
        description:
          "Addendums recording changes to shareholders, capital, managers or activities, notarised and filed.",
      },
      {
        label: "Share Transfer Agreement",
        href: "/services/notary-services#share-transfer-agreement",
        description:
          "Share sale agreements with resolutions, notarisation and the license update that follows.",
      },
    ],
  },
}

export const RESOURCES: NavLink[] = [
  { label: "Free Zone Comparison", href: "/free-zones" },
  { label: "Cost Guide", href: "/cost-guide" },
  { label: "Business Activities", href: "/business-activities" },
  { label: "How It Works", href: "/how-it-works" },
]

export const DEFAULT_HEADER: HeaderNavigation = {
  servicesLabel: "Services",
  servicesHref: "/services",
  resourcesLabel: "Resources",
  links: [
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  ctaButton: { label: "Free Consultation", href: "/contact" },
}

export const DEFAULT_NAVIGATION: SiteNavigation = {
  header: DEFAULT_HEADER,
  companySetup: COMPANY_SETUP,
  serviceCategories: Object.entries(SERVICES).map(([title, category]) => ({
    title,
    ...category,
  })),
  resourceLinks: RESOURCES,
  footer: {
    description:
      "Dubai's trusted business setup partner. We help entrepreneurs and companies establish and operate in the UAE with clarity, efficiency, and confidence.",
    companyLinks: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "All Services", href: "/services" },
    ],
  },
}

type CmsLink = { label: string | null; href: string | null; description: string | null }

const toLink = (link: CmsLink | null | undefined): NavLink | null =>
  link?.label && link.href
    ? { label: link.label, href: link.href, description: link.description }
    : null

const toLinks = (links: CmsLink[] | null | undefined): NavLink[] =>
  (links ?? []).map(toLink).filter((link): link is NavLink => link !== null)

const linksOrDefault = (links: CmsLink[] | null | undefined, fallback: NavLink[]) => {
  const resolved = toLinks(links)
  return resolved.length ? resolved : fallback
}

function resolveHeader(header: NonNullable<NavigationQueryResult>["header"]): HeaderNavigation {
  return {
    servicesLabel: header?.servicesLabel ?? DEFAULT_HEADER.servicesLabel,
    servicesHref: header?.servicesHref ?? DEFAULT_HEADER.servicesHref,
    resourcesLabel: header?.resourcesLabel ?? DEFAULT_HEADER.resourcesLabel,
    links: linksOrDefault(header?.links, DEFAULT_HEADER.links),
    ctaButton: toLink(header?.ctaButton) ?? DEFAULT_HEADER.ctaButton,
  }
}

export function resolveNavigation(data: NavigationQueryResult | null): SiteNavigation {
  if (!data) return DEFAULT_NAVIGATION

  const serviceCategories = (data.serviceCategories ?? [])
    .filter((category) => category.title && category.href)
    .map((category) => ({
      title: category.title as string,
      href: category.href as string,
      description: category.description,
      showInFooter: category.showInFooter,
      items: toLinks(category.items),
    }))

  return {
    header: resolveHeader(data.header),
    companySetup: {
      title: data.companySetup?.title ?? COMPANY_SETUP.title,
      href: data.companySetup?.href ?? COMPANY_SETUP.href,
      description: data.companySetup?.description ?? COMPANY_SETUP.description,
      items: linksOrDefault(data.companySetup?.items, COMPANY_SETUP.items),
    },
    serviceCategories: serviceCategories.length
      ? serviceCategories
      : DEFAULT_NAVIGATION.serviceCategories,
    resourceLinks: linksOrDefault(data.resourceLinks, RESOURCES),
    footer: {
      description: data.footer?.description ?? DEFAULT_NAVIGATION.footer.description,
      companyLinks: linksOrDefault(data.footer?.companyLinks, DEFAULT_NAVIGATION.footer.companyLinks),
    },
  }
}
