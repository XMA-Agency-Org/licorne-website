"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import HeroImage from "@/public/images/heroes/services.jpg";
import MainlandImage from "@/public/images/heroes/mainland-company-setup.jpg";
import FreeZoneImage from "@/public/images/heroes/free-zone-company-setup.jpg";
import {
  FeaturedServicesSection,
  ServiceCategorySection,
  AnimatedHeading,
  StatsRow,
} from "@/app/(site)/services/_components";
import { ServiceCta } from "@/app/(site)/services/components/ServiceCta";

const featuredServices = [
  {
    title: "Mainland Company Setup",
    description:
      "Establish your LLC in Dubai mainland with full UAE market access. We handle sponsor arrangements, licensing, and government approvals for seamless market entry.",
    href: "/services/mainland-company-setup",
    image: MainlandImage,
    badge: "Most Popular",
  },
  {
    title: "Free Zone Company Setup",
    description:
      "100% foreign ownership, tax advantages, and simplified regulations. We help you choose from 40+ free zones and manage the entire registration process.",
    href: "/services/free-zone-company-setup",
    image: FreeZoneImage,
    badge: "100% Ownership",
  },
];

const serviceCategories = [
  {
    eyebrow: "Visas & Immigration",
    title: "Secure Your",
    titleAccent: "Residency",
    variant: "light" as const,
    services: [
      {
        title: "Visa & Immigration",
        description:
          "Investor visas, employment visas, family sponsorship, and Golden Visas. Complete immigration support from entry permit to Emirates ID.",
        href: "/services/visa-immigration",
      },
      {
        title: "Golden Visa UAE",
        description:
          "Secure your 10-year residency in the UAE. We handle the entire Golden Visa application process for investors, entrepreneurs, and specialists.",
        href: "/services/golden-visa",
      },
    ],
  },
  {
    eyebrow: "Business Operations",
    title: "Keep Your Business",
    titleAccent: "Running",
    variant: "dark" as const,
    services: [
      {
        title: "PRO & Government Services",
        description:
          "License renewals, document attestation, visa processing, and government liaison. We handle the paperwork that keeps your business compliant.",
        href: "/services/pro-government-services",
      },
      {
        title: "Bank Account Opening",
        description:
          "Corporate bank account setup with expert guidance. We prepare documentation, introduce you to banks, and support until activation.",
        href: "/services/bank-account-opening",
      },
      {
        title: "Office Solutions",
        description:
          "Virtual offices, flexi desks, and serviced offices. Get the business address and workspace you need across prime Dubai locations.",
        href: "/services/office-solutions",
      },
      {
        title: "Accounting & VAT",
        description:
          "VAT registration, bookkeeping, financial reporting, and tax compliance. Keep your numbers accurate and your business compliant.",
        href: "/services/accounting-vat",
      },
    ],
  },
  {
    eyebrow: "Licensing & Changes",
    title: "Manage Your",
    titleAccent: "License",
    variant: "light" as const,
    services: [
      {
        title: "Trade License Services",
        description:
          "New licenses, renewals, amendments, and activity changes. Keep your business license current and compliant without interruption.",
        href: "/services/trade-license",
      },
      {
        title: "Company Liquidation",
        description:
          "Close your UAE business properly and completely. License cancellation, visa terminations, and clean exit documentation.",
        href: "/services/company-liquidation",
      },
    ],
  },
];

const stats = [
  { value: "500+", label: "Companies Formed" },
  { value: "40+", label: "Free Zones" },
  { value: "98%", label: "Approval Rate" },
  { value: "72h", label: "Average Setup" },
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
                href="#services"
                className="px-8 py-4 bg-transparent text-accent-50 border-2 border-accent-50/30 hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedHeading
            eyebrow="Company Formation"
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
          key={category.eyebrow}
          eyebrow={category.eyebrow}
          title={category.title}
          titleAccent={category.titleAccent}
          services={category.services}
          variant={category.variant}
          columns={category.services.length > 2 ? 2 : 2}
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
