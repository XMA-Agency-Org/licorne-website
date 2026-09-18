import type { LucideIcon } from "lucide-react"
import {
  Building2,
  Building,
  Globe,
  FileText,
  Plane,
  Users,
  Laptop,
  Award,
  Pen,
  Briefcase,
  Landmark,
  Receipt,
  Calculator,
  MapPin,
  FileX,
  Stamp,
} from "lucide-react"

export type NavItem = {
  label: string
  href: string
  icon: LucideIcon
  description?: string
}

export type ServiceCategory = {
  href: string
  description: string
  items: NavItem[]
}

export type ResourceItem = {
  label: string
  href: string
}

export const COMPANY_SETUP: ServiceCategory = {
  href: "/services#company-setup",
  description:
    "Choose the right jurisdiction for your business and let us handle licensing, approvals and registration.",
  items: [
    {
      label: "Mainland Company Setup",
      href: "/services/mainland-company-setup",
      icon: Building2,
      description: "LLC with full access to the UAE market",
    },
    {
      label: "Free Zone Company Setup",
      href: "/services/free-zone-company-setup",
      icon: Building,
      description: "100% ownership and tax advantages",
    },
    {
      label: "Offshore Company Setup",
      href: "/services/offshore-company-setup",
      icon: Globe,
      description: "Asset holding and international structuring",
    },
  ],
}

export const SERVICES: Record<string, ServiceCategory> = {
  "License Services": {
    href: "/services/license-services",
    description:
      "Renewal, modification, cancellation and freezing of your UAE trade license.",
    items: [
      {
        label: "License Renewal",
        href: "/services/license-services#renewal",
        icon: FileText,
      },
      {
        label: "License Modification",
        href: "/services/license-services#modification",
        icon: FileText,
      },
      {
        label: "License Cancellation",
        href: "/services/license-services#cancellation",
        icon: FileText,
      },
      {
        label: "License Freezing",
        href: "/services/license-services#freezing",
        icon: FileText,
      },
    ],
  },
  "Visa & Immigration": {
    href: "/services/visa-immigration",
    description:
      "Residence, dependent, remote work, golden and freelance visas for you, your family and your team.",
    items: [
      {
        label: "Residence Visa",
        href: "/services/residence-visa",
        icon: Plane,
      },
      {
        label: "Dependent Visa",
        href: "/services/dependent-visa",
        icon: Users,
      },
      {
        label: "Remote Work Visa",
        href: "/services/remote-work-visa",
        icon: Laptop,
      },
      {
        label: "Golden Visa",
        href: "/services/golden-visa",
        icon: Award,
      },
      {
        label: "Freelance Visa",
        href: "/services/freelance-visa",
        icon: Pen,
      },
    ],
  },
  "Finance & Banking": {
    href: "/services#finance-banking",
    description:
      "Corporate bank accounts, corporate tax registration and ongoing bookkeeping and VAT compliance.",
    items: [
      {
        label: "Bank Account Opening",
        href: "/services/bank-account-opening",
        icon: Landmark,
      },
      {
        label: "Corporate Tax Registration",
        href: "/services/corporate-tax-registration",
        icon: Receipt,
      },
      {
        label: "Bookkeeping & VAT",
        href: "/services/accounting-vat",
        icon: Calculator,
      },
    ],
  },
  "PRO & Government Services": {
    href: "/services/pro-government-services",
    description:
      "Document attestation, Emirates ID, medicals, office solutions and government liaison.",
    items: [
      {
        label: "PRO & Government Services",
        href: "/services/pro-government-services",
        icon: Briefcase,
      },
      {
        label: "Office Solutions",
        href: "/services/office-solutions",
        icon: MapPin,
      },
      {
        label: "Company Liquidation",
        href: "/services/company-liquidation",
        icon: FileX,
      },
    ],
  },
  "Notary Services": {
    href: "/services/notary-services",
    description:
      "Power of attorney, will registration, MOA drafting and amendments, and share transfer agreements.",
    items: [
      {
        label: "Power of Attorney",
        href: "/services/notary-services#power-of-attorney",
        icon: Stamp,
      },
      {
        label: "Will Registration",
        href: "/services/notary-services#will-registration",
        icon: Stamp,
      },
      {
        label: "Memorandum of Association",
        href: "/services/notary-services#memorandum-of-association",
        icon: Stamp,
      },
      {
        label: "Amendment to MOA",
        href: "/services/notary-services#amendment-to-moa",
        icon: Stamp,
      },
      {
        label: "Share Transfer Agreement",
        href: "/services/notary-services#share-transfer-agreement",
        icon: Stamp,
      },
    ],
  },
}

export const RESOURCES: ResourceItem[] = [
  { label: "Free Zone Comparison", href: "/free-zones" },
  { label: "Cost Guide", href: "/cost-guide" },
  { label: "Business Activities", href: "/business-activities" },
  { label: "How It Works", href: "/how-it-works" },
]

export const SERVICE_CATEGORIES = Object.keys(SERVICES)
