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
}

export type SiteNavigation = {
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
    items: [
      { label: "License Renewal", href: "/services/license-services#renewal" },
      { label: "License Modification", href: "/services/license-services#modification" },
      { label: "License Cancellation", href: "/services/license-services#cancellation" },
      { label: "License Freezing", href: "/services/license-services#freezing" },
    ],
  },
  "Visa & Immigration": {
    href: "/services/visa-immigration",
    description:
      "Residence, dependent, remote work, golden and freelance visas for you, your family and your team.",
    items: [
      { label: "Residence Visa", href: "/services/residence-visa" },
      { label: "Dependent Visa", href: "/services/dependent-visa" },
      { label: "Remote Work Visa", href: "/services/remote-work-visa" },
      { label: "Golden Visa", href: "/services/golden-visa" },
      { label: "Freelance Visa", href: "/services/freelance-visa" },
    ],
  },
  "Finance & Banking": {
    href: "/services#finance-banking",
    description:
      "Corporate bank accounts, corporate tax registration and ongoing bookkeeping and VAT compliance.",
    items: [
      { label: "Bank Account Opening", href: "/services/bank-account-opening" },
      { label: "Corporate Tax Registration", href: "/services/corporate-tax-registration" },
      { label: "Bookkeeping & VAT", href: "/services/accounting-vat" },
    ],
  },
  "PRO & Government Services": {
    href: "/services/pro-government-services",
    description:
      "Document attestation, Emirates ID, medicals, office solutions and government liaison.",
    items: [
      { label: "PRO & Government Services", href: "/services/pro-government-services" },
      { label: "Office Solutions", href: "/services/office-solutions" },
      { label: "Company Liquidation", href: "/services/company-liquidation" },
    ],
  },
  "Notary Services": {
    href: "/services/notary-services",
    description:
      "Power of attorney, will registration, MOA drafting and amendments, and share transfer agreements.",
    items: [
      { label: "Power of Attorney", href: "/services/notary-services#power-of-attorney" },
      { label: "Will Registration", href: "/services/notary-services#will-registration" },
      { label: "Memorandum of Association", href: "/services/notary-services#memorandum-of-association" },
      { label: "Amendment to MOA", href: "/services/notary-services#amendment-to-moa" },
      { label: "Share Transfer Agreement", href: "/services/notary-services#share-transfer-agreement" },
    ],
  },
}

export const RESOURCES: NavLink[] = [
  { label: "Free Zone Comparison", href: "/free-zones" },
  { label: "Cost Guide", href: "/cost-guide" },
  { label: "Business Activities", href: "/business-activities" },
  { label: "How It Works", href: "/how-it-works" },
]

export const DEFAULT_NAVIGATION: SiteNavigation = {
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

const toLinks = (links: CmsLink[] | null | undefined): NavLink[] =>
  (links ?? [])
    .filter((link): link is CmsLink & { label: string; href: string } =>
      Boolean(link.label && link.href),
    )
    .map(({ label, href, description }) => ({ label, href, description }))

export function resolveNavigation(data: NavigationQueryResult | null): SiteNavigation {
  if (!data) return DEFAULT_NAVIGATION

  const companySetupItems = toLinks(data.companySetup?.items)
  const serviceCategories = (data.serviceCategories ?? [])
    .filter((category) => category.title && category.href)
    .map((category) => ({
      title: category.title as string,
      href: category.href as string,
      description: category.description,
      items: toLinks(category.items),
    }))

  return {
    companySetup: {
      title: COMPANY_SETUP.title,
      href: data.companySetup?.href ?? COMPANY_SETUP.href,
      description: data.companySetup?.description ?? COMPANY_SETUP.description,
      items: companySetupItems.length ? companySetupItems : COMPANY_SETUP.items,
    },
    serviceCategories: serviceCategories.length
      ? serviceCategories
      : DEFAULT_NAVIGATION.serviceCategories,
    resourceLinks: toLinks(data.resourceLinks).length
      ? toLinks(data.resourceLinks)
      : RESOURCES,
    footer: {
      description: data.footer?.description ?? DEFAULT_NAVIGATION.footer.description,
      companyLinks: toLinks(data.footer?.companyLinks).length
        ? toLinks(data.footer?.companyLinks)
        : DEFAULT_NAVIGATION.footer.companyLinks,
    },
  }
}
