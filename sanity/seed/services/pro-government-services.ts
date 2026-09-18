import type { ServiceSeed, ServiceSeoSeed } from "../types";

export const service: ServiceSeed = {
  slug: "pro-government-services",
  category: "pro-government",
  order: 1,
  hero: {
    title: "PRO & Government Services Dubai",
    description:
      "Document attestation, license renewals, visa processing, and government liaison. We handle the ongoing paperwork that keeps your business compliant so you can focus on operations.",
    image: "pro-government-services.jpg",
    imageAlt: "PRO services Dubai",
  },
  overview: {
    eyebrow: "About PRO Services",
    title: "Government relations handled, so you don't have to",
    description:
      "PRO (Public Relations Officer) services cover all interactions between your business and UAE government authorities. This includes everything from routine license renewals and visa processing to document attestation, trade name amendments, and activity changes. In Dubai, navigating government departments requires knowing the right procedures, having the right documents, and often — being physically present during working hours. Our PRO team handles this daily. We know which counter to visit, which documents to bring, and how to resolve issues when they arise. For businesses without a dedicated PRO on staff, we become your government relations department — ensuring deadlines are met, documents are processed, and your business stays compliant without you spending hours in queues.",
    highlights: [
      "Trade license renewals and amendments",
      "Document attestation (MOFA, embassy, notary)",
      "Visa and labor card processing",
      "Emirates ID applications and renewals",
      "Establishment card and immigration services",
      "Special permits and NOC applications",
    ],
    expectationTitle: "Our PRO advantage",
    expectationDescription:
      "Dedicated PRO executives who process your requests same-day. No more missed deadlines, queue waiting, or compliance gaps.",
  },
  stats: [
    { value: "100+", label: "Transactions processed monthly" },
    { value: "Same-day", label: "Standard service turnaround" },
    { value: "99%", label: "On-time renewal rate" },
    { value: "15+", label: "Government departments covered" },
  ],
  deliverables: {
    eyebrow: "Our Services",
    title: "Comprehensive government liaison and document services",
    items: [
      {
        title: "License Renewal Management",
        description:
          "Proactive tracking of renewal dates, document preparation, government submission, and license collection. We remind you before deadlines, not after.",
      },
      {
        title: "Document Attestation",
        description:
          "Ministry of Foreign Affairs (MOFA), embassy, and notary attestation for educational certificates, commercial documents, and personal records required for visas or business purposes.",
      },
      {
        title: "Visa & Labor Services",
        description:
          "Entry permit applications, status changes, medical coordination, Emirates ID processing, labor cards, and residence visa stamping. End-to-end handling.",
      },
      {
        title: "Company Amendments",
        description:
          "Trade name changes, activity additions or removals, shareholder modifications, manager changes, and address updates across all relevant authorities.",
      },
      {
        title: "Establishment Card & Immigration",
        description:
          "Immigration file setup, establishment card issuance and renewal, visa quota management, and MOHRE registrations for your company.",
      },
      {
        title: "Special Permits & NOCs",
        description:
          "Municipal permits, civil defense approvals, health and safety certificates, and No Objection Certificates (NOCs) for various business activities.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "Seamless government relations in four steps",
    items: [
      {
        step: "01",
        title: "Request Submission",
        description:
          "You submit your request via WhatsApp, email, or call. We confirm requirements, timeline, and costs within hours.",
      },
      {
        step: "02",
        title: "Document Collection",
        description:
          "We collect documents from your office or receive them digitally. Our team reviews for completeness before submission.",
      },
      {
        step: "03",
        title: "Government Processing",
        description:
          "Our PRO executives visit relevant authorities, submit applications, follow up on pending items, and resolve any queries.",
      },
      {
        step: "04",
        title: "Delivery & Update",
        description:
          "We deliver completed documents to your office and update your records. You receive confirmation and copies for your files.",
      },
    ],
  },
  faqs: {
    eyebrow: "Common Questions",
    title: "Frequently asked questions about PRO services",
    items: [
      {
        question: "What is a PRO and why do I need one?",
        answer:
          "A PRO (Public Relations Officer) handles all government interactions on behalf of your company. Unless you have staff with UAE government experience and time to visit offices during working hours, outsourcing PRO services ensures your compliance tasks are completed efficiently and on time.",
      },
      {
        question: "How much notice do you need for license renewals?",
        answer:
          "Ideally 2-3 weeks before expiry, though we can handle urgent renewals. We recommend setting up proactive tracking — we'll remind you 30 days before any deadline so you're never caught off-guard.",
      },
      {
        question: "Can you handle document attestation for personal use?",
        answer:
          "Yes. We attest educational certificates (for employment or visa purposes), personal documents (marriage certificates, birth certificates), and commercial documents. Process varies by document type and destination country.",
      },
      {
        question: "What's included in your monthly PRO package?",
        answer:
          "Our packages typically cover routine services like visa renewals, document submissions, and standard government correspondence. Volume-based pricing works for businesses with predictable needs. We also offer pay-per-service for occasional requirements.",
      },
      {
        question: "Do you cover all emirates or just Dubai?",
        answer:
          "We primarily serve Dubai and Abu Dhabi but can coordinate services across all UAE emirates. Government procedures vary by emirate, and our team knows the specific requirements for each.",
      },
      {
        question: "How do I track the status of my requests?",
        answer:
          "You receive updates via WhatsApp or email at each stage. For ongoing relationships, we provide a simple tracking sheet with all pending items, submission dates, and expected completion dates.",
      },
    ],
  },
  cta: {
    title: "Stop spending time in government offices",
    description:
      "Let our PRO team handle your government relations. Book a consultation to discuss your ongoing needs or submit an immediate request.",
    primaryLabel: "Book Free Consultation",
    primaryHref: "/contact",
    secondaryLabel: "Explore Other Services",
    secondaryHref: "/services",
  },
};

export const seo: ServiceSeoSeed = {
  title: "PRO Services Dubai | Government Services | Licorne",
  description:
    "Professional PRO services in Dubai. License renewals, document attestation, visa processing, and government liaison. Same-day service, 99% on-time delivery.",
  keywords: [
    "pro services dubai",
    "government services dubai",
    "document attestation uae",
    "license renewal dubai",
    "mofa attestation",
    "dubai document clearing",
  ],
};
