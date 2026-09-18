"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import HeroImage from "@/public/images/heroes/services.jpg";
import MainlandImage from "@/public/images/heroes/mainland-company-setup.jpg";
import FreeZoneImage from "@/public/images/heroes/free-zone-company-setup.jpg";
import OffshoreImage from "@/public/images/heroes/free-zone-company-setup.jpg";
import {
  FeaturedServicesSection,
  ServiceCategorySection,
  AnimatedHeading,
} from "@/app/(site)/services/_components";
import { ServiceCta } from "@/app/(site)/services/components/ServiceCta";

const featuredServices = [
  {
    title: "Mainland Company Setup",
    description:
      "Establish your LLC in Dubai mainland with full UAE market access. We handle licensing, approvals and registration for seamless market entry.",
    href: "/services/mainland-company-setup",
    image: MainlandImage,
    badge: "Most Popular",
  },
  {
    title: "Free Zone Company Setup",
    description:
      "100% foreign ownership, tax advantages, and simplified regulations. We help you choose the right free zone and manage the entire registration process.",
    href: "/services/free-zone-company-setup",
    image: FreeZoneImage,
    badge: "100% Ownership",
  },
  {
    title: "Offshore Company Setup",
    description:
      "Hold assets, own shares and structure international business through a UAE offshore company. No office or residence visa required.",
    href: "/services/offshore-company-setup",
    image: OffshoreImage,
    badge: "Asset Holding",
  },
];

const serviceCategories = [
  {
    id: "license-services",
    eyebrow: "License Services",
    title: "Keep Your License",
    titleAccent: "Compliant",
    variant: "light" as const,
    services: [
      {
        title: "License Renewal",
        description:
          "Annual renewal tracked and completed before expiry, with 30-day advance reminders so you never operate on a lapsed license.",
        href: "/services/license-services#renewal",
      },
      {
        title: "License Modification",
        description:
          "Add activities, change your trade name, appoint managers or transfer shares. Amendments processed with the DET or your free zone.",
        href: "/services/license-services#modification",
      },
      {
        title: "License Cancellation",
        description:
          "Close your company properly with visa cancellations, government clearances and a clean deregistration.",
        href: "/services/license-services#cancellation",
      },
      {
        title: "License Freezing",
        description:
          "Pause operations for up to three years while keeping your registration alive, then reactivate when you are ready.",
        href: "/services/license-services#freezing",
      },
    ],
  },
  {
    id: "visa-immigration",
    eyebrow: "Visa & Immigration",
    title: "Secure Your",
    titleAccent: "Residency",
    variant: "dark" as const,
    services: [
      {
        title: "Residence Visa",
        description:
          "Investor, partner and employment visas under your own company, from entry permit to Emirates ID.",
        href: "/services/residence-visa",
      },
      {
        title: "Dependent Visa",
        description:
          "Sponsor your spouse, children and parents with attestations, medicals and Emirates ID handled together.",
        href: "/services/dependent-visa",
      },
      {
        title: "Remote Work Visa",
        description:
          "Live in Dubai while working for an employer or company abroad. One-year renewable residency, no UAE company needed.",
        href: "/services/remote-work-visa",
      },
      {
        title: "Golden Visa",
        description:
          "Ten-year residency for investors, entrepreneurs and specialists. We manage the full application process.",
        href: "/services/golden-visa",
      },
      {
        title: "Freelance Visa",
        description:
          "Freelance permit and residence visa in your own name so you can invoice clients legally without a company.",
        href: "/services/freelance-visa",
      },
      {
        title: "Visa & Immigration Overview",
        description:
          "Not sure which visa fits? Start with the overview and we will point you to the right route.",
        href: "/services/visa-immigration",
      },
    ],
  },
  {
    id: "finance-banking",
    eyebrow: "Finance & Banking",
    title: "Get Your Finances",
    titleAccent: "In Order",
    variant: "light" as const,
    services: [
      {
        title: "Bank Account Opening",
        description:
          "Corporate bank account setup with expert guidance. We prepare documentation, introduce you to banks and support until activation.",
        href: "/services/bank-account-opening",
      },
      {
        title: "Corporate Tax Registration",
        description:
          "FTA registration, qualifying free zone assessment and annual return filing so you avoid penalties.",
        href: "/services/corporate-tax-registration",
      },
      {
        title: "Bookkeeping & VAT",
        description:
          "VAT registration, bookkeeping, financial reporting and tax compliance. Keep your numbers accurate and your business compliant.",
        href: "/services/accounting-vat",
      },
    ],
  },
  {
    id: "pro-government",
    eyebrow: "PRO & Government Services",
    title: "Keep Your Business",
    titleAccent: "Running",
    variant: "dark" as const,
    services: [
      {
        title: "PRO & Government Services",
        description:
          "Document attestation, Emirates ID, medical tests and government liaison. We handle the paperwork that keeps you compliant.",
        href: "/services/pro-government-services",
      },
      {
        title: "Office Solutions",
        description:
          "Virtual offices, flexi desks and serviced offices. Get the business address and workspace you need across Dubai.",
        href: "/services/office-solutions",
      },
      {
        title: "Company Liquidation",
        description:
          "Close your UAE business properly and completely. License cancellation, visa terminations and clean exit documentation.",
        href: "/services/company-liquidation",
      },
    ],
  },
  {
    id: "notary-services",
    eyebrow: "Notary Services",
    title: "Documents That",
    titleAccent: "Hold Up",
    variant: "light" as const,
    services: [
      {
        title: "Power of Attorney",
        description:
          "General and special POAs drafted bilingually and notarised at Dubai Courts or a private notary.",
        href: "/services/notary-services#power-of-attorney",
      },
      {
        title: "Will Registration",
        description:
          "DIFC and Dubai Courts wills for non-Muslim residents to protect assets and guardianship.",
        href: "/services/notary-services#will-registration",
      },
      {
        title: "Memorandum of Association",
        description:
          "MOA drafting and notarisation for new mainland companies in the form the DET accepts.",
        href: "/services/notary-services#memorandum-of-association",
      },
      {
        title: "Amendment to MOA",
        description:
          "Addendums recording changes to shareholders, capital, managers or activities, notarised and filed.",
        href: "/services/notary-services#amendment-to-moa",
      },
      {
        title: "Share Transfer Agreement",
        description:
          "Share sale agreements with resolutions, notarisation and the license update that follows.",
        href: "/services/notary-services#share-transfer-agreement",
      },
    ],
  },
];

const heroTextVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HeroImage}
            alt="Licorne services"
            className="absolute inset-0 w-full h-full object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroTextVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={heroItemVariants}
              className="text-4xl lg:text-7xl text-accent-50 mt-4 leading-tight"
            >
              Everything you need to launch and operate in Dubai
            </motion.h1>
            <motion.p
              variants={heroItemVariants}
              className="font-secondary text-lg lg:text-xl text-accent-50/80 mt-6 leading-relaxed max-w-2xl mx-auto"
            >
              From company formation to visas, banking, and ongoing compliance —
              we handle the complexity so you can focus on building your
              business.
            </motion.p>
            <motion.div
              variants={heroItemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="group px-8 py-4 bg-primary text-accent-50 hover:bg-white hover:text-secondary transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
              >
                Start Your Setup
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#company-setup"
                className="px-8 py-4 bg-transparent text-accent-50 border-2 border-accent-50/30 hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="company-setup" className="py-24 lg:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedHeading
            eyebrow="Company Setup"
            title="Start Your Business in"
            titleAccent="Dubai"
            centered={false}
          />

          <div className="mt-12">
            <FeaturedServicesSection services={featuredServices} />
          </div>
        </div>
      </section>

      {serviceCategories.map((category) => (
        <ServiceCategorySection
          key={category.id}
          id={category.id}
          eyebrow={category.eyebrow}
          title={category.title}
          titleAccent={category.titleAccent}
          services={category.services}
          variant={category.variant}
          columns={category.services.length > 4 ? 3 : 2}
        />
      ))}

      <ServiceCta
        title="Not sure where to start?"
        description="Book a free consultation and we'll recommend the best approach for your situation. No commitment, just expert guidance."
        primaryLabel="Book Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
