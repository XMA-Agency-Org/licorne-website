import HeroImage from "@/public/images/heroes/trade-license.jpg";
import { ServicePage } from "@/app/(site)/services/components/ServicePage";
import { Metadata } from "next";

const serviceData = {
  hero: {
    title: "Trade License Services Dubai",
    description:
      "New licenses, renewals, amendments, and activity changes. We handle every aspect of your Dubai trade license so your business stays compliant and operational without interruption.",
    image: HeroImage,
    imageAlt: "Trade license services Dubai",
  },
  overview: {
    eyebrow: "About Trade License Services",
    title: "Keep your business license current and compliant",
    description:
      "Your trade license is the legal foundation of your UAE business. It defines what activities you can perform, where you can operate, and your compliance obligations. Getting it right from the start — and keeping it current — is essential for smooth operations. Beyond initial licensing, businesses regularly need amendments: adding new activities as you expand, updating shareholder information after ownership changes, changing trade names, or modifying legal structures. Each change requires specific procedures with the Department of Economic Development (DED) or relevant free zone authority. We handle the full spectrum of trade license services. For new businesses, we advise on activity selection and license structure. For existing businesses, we manage renewals well before expiry dates and process amendments efficiently. Our PRO team knows the procedures, timelines, and document requirements for every type of license modification — saving you from rejected applications, delays, and the frustration of navigating government systems without experience.",
    highlights: [
      "New trade license applications",
      "Annual license renewals",
      "Activity additions and removals",
      "Trade name changes and reservations",
      "Shareholder and manager amendments",
      "License upgrades and structure changes",
    ],
    expectationTitle: "Your license, always compliant",
    expectationDescription:
      "Proactive renewal tracking, same-day amendment processing, and expert guidance on activity selection. Never worry about license compliance again.",
  },
  stats: [
    { value: "1000+", label: "Licenses managed annually" },
    { value: "Same-day", label: "Amendment processing" },
    { value: "100%", label: "Renewal success rate" },
    { value: "30+", label: "Days advance renewal reminder" },
  ],
  deliverables: {
    eyebrow: "Our Services",
    title: "Complete trade license management",
    items: [
      {
        title: "New License Applications",
        description:
          "End-to-end processing of new trade licenses including trade name reservation, activity selection advisory, initial approval, office documentation, and final license issuance.",
      },
      {
        title: "License Renewals",
        description:
          "Proactive renewal management with 30-day advance reminders, document preparation, fee payment coordination, and license collection — ensuring you never operate with an expired license.",
      },
      {
        title: "Activity Amendments",
        description:
          "Adding new business activities or removing existing ones from your license. We advise on activity codes, handle approvals from relevant authorities, and update your license accordingly.",
      },
      {
        title: "Trade Name Services",
        description:
          "Trade name reservations for new businesses, name change applications for existing companies, and name protection across emirates when needed.",
      },
      {
        title: "Ownership & Structure Changes",
        description:
          "Processing shareholder changes, manager appointments, share transfers, and legal structure modifications (LLC to sole establishment, partnership changes, etc.).",
      },
      {
        title: "License Upgrades",
        description:
          "Upgrading from instant licenses to full commercial licenses, converting between license categories, or transitioning from free zone to mainland (and vice versa).",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "Simple process for any license service",
    items: [
      {
        step: "01",
        title: "Requirement Analysis",
        description:
          "We understand what you need — new license, renewal, or amendment — and confirm the exact documents, approvals, and fees required for your specific situation.",
      },
      {
        step: "02",
        title: "Document Preparation",
        description:
          "We prepare or collect all necessary documents, ensuring everything meets authority requirements before submission to avoid delays or rejections.",
      },
      {
        step: "03",
        title: "Authority Submission",
        description:
          "Our PRO team submits your application to DED, free zone authority, or other relevant departments, tracking progress and handling any queries.",
      },
      {
        step: "04",
        title: "License Delivery",
        description:
          "We collect your updated license and deliver it to your office, along with updated registration documents and any related certificates.",
      },
    ],
  },
  faqs: {
    eyebrow: "Common Questions",
    title: "Frequently asked questions about trade licenses",
    items: [
      {
        question: "When should I start my license renewal process?",
        answer:
          "We recommend starting 30 days before expiry. This provides buffer time for any unexpected issues — document updates, outstanding fees, or approval delays. Operating with an expired license can result in fines and restrictions on visa processing. We send automatic reminders to managed clients.",
      },
      {
        question: "Can I add any business activity to my existing license?",
        answer:
          "Most activities can be added, but some require additional approvals (e.g., food trading needs municipality approval, educational activities need KHDA approval). Some activities are restricted to specific license types or may require a separate license entirely. We advise on the best approach for your expansion plans.",
      },
      {
        question: "How long does a license amendment take?",
        answer:
          "Simple amendments (manager change, address update) typically complete in 1-3 working days. Activity additions may take 3-7 days depending on approval requirements. Shareholder changes involving share transfers take 5-10 days. We provide accurate timelines based on your specific amendment.",
      },
      {
        question: "What's the difference between instant license and commercial license?",
        answer:
          "Instant licenses (available in some free zones and Dubai mainland) allow you to start operating immediately with limited activities and simplified requirements. Commercial licenses provide full operational scope but require office space, approvals, and more documentation. Many businesses start with instant and upgrade later.",
      },
      {
        question: "Can I change my company's trade name?",
        answer:
          "Yes, trade names can be changed subject to availability and naming guidelines. The process involves reserving the new name, updating all company documents, and re-issuing licenses and registrations. Name changes typically take 5-7 working days and require updating bank accounts, visas, and other records.",
      },
      {
        question: "What happens if my license expires?",
        answer:
          "Expired licenses incur late renewal fines (typically 2-4% per month of delay). More importantly, you cannot process visas, open bank accounts, or legally operate until renewed. Extended expiry may lead to license cancellation. If your license has expired, contact us immediately for expedited renewal.",
      },
    ],
  },
  cta: {
    title: "Keep your business license compliant",
    description:
      "Whether you need a new license, upcoming renewal, or amendments to your current license — we handle it efficiently so you can focus on business.",
    primaryLabel: "Book Free Consultation",
    primaryHref: "/contact",
    secondaryLabel: "Explore Other Services",
    secondaryHref: "/services",
  },
};

export const metadata: Metadata = {
  title: "Trade License Services Dubai | License Renewal & Amendments | Licorne",
  description:
    "Complete trade license services in Dubai. New licenses, renewals, activity amendments, and trade name changes. Same-day processing, 100% renewal success rate.",
  keywords: [
    "trade license dubai",
    "dubai license renewal",
    "ded license",
    "commercial license dubai",
    "trade license amendment",
    "dubai business license",
  ],
  openGraph: {
    title: "Trade License Services Dubai | Licorne Business Setup",
    description:
      "Expert trade license services. New applications, renewals, and amendments handled efficiently.",
    type: "website",
  },
};

export default function TradeLicensePage() {
  return <ServicePage {...serviceData} />;
}
