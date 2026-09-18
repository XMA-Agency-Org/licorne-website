import type { ServiceSeed, ServiceSeoSeed } from "../types";

export const service: ServiceSeed = {
  slug: "license-services",
  category: "license-services",
  order: 1,
  hero: {
    title: "License Services Dubai",
    description:
      "Renewal, modification, cancellation and freezing of your UAE trade license. One team handles every change to your license so your business stays compliant and never loses a day of operation.",
    image: "license-services.jpg",
    imageAlt: "Trade license services in Dubai",
  },
  overview: {
    eyebrow: "About License Services",
    title: "Every change to your trade license, handled",
    description:
      "Your trade license is the legal foundation of your UAE business. It defines what you can do, where you can operate, and what you owe the authorities each year. Over the life of a company that license needs renewing annually, amending when you add activities or change partners, freezing when you pause operations, and cancelling when it is time to close. Each of these is a separate procedure with the Department of Economy and Tourism or your free zone authority, with its own forms, approvals and fees. We manage all four. Our PRO team tracks your renewal dates, prepares and submits amendments, and guides you through freezing or cancellation so nothing is missed and no fines accumulate.",
    highlights: [
      "Annual license renewal with advance reminders",
      "Activity additions, trade name and shareholder changes",
      "Manager, address and legal structure amendments",
      "Temporary license freezing when you pause operations",
      "Full license cancellation and clearance certificates",
      "Coverage across mainland and all major free zones",
    ],
    expectationTitle: "Your license, always compliant",
    expectationDescription:
      "Proactive renewal tracking, fast amendment processing and clear guidance on what each change requires. You never have to chase a government portal again.",
  },
  stats: [
    { value: "30+", label: "Days advance renewal reminder" },
    { value: "1-3", label: "Days for simple amendments" },
    { value: "98%", label: "First-time approval rate" },
    { value: "0", label: "Late fines for managed clients" },
  ],
  deliverables: {
    eyebrow: "Our License Services",
    title: "Four services, one point of contact",
    items: [
      {
        anchor: "renewal",
        title: "License Renewal",
        description:
          "Every UAE license must be renewed annually. We track your expiry date, confirm your tenancy contract and establishment card are current, settle the fees and collect the renewed license. You get a reminder 30 days out and a renewed license before the old one lapses.",
      },
      {
        anchor: "modification",
        title: "License Modification",
        description:
          "Add or remove business activities, change your trade name, appoint a new manager, update your address, or transfer shares between partners. We advise on which approvals each change needs, prepare the amended MOA where required, and process the update with the authority.",
      },
      {
        anchor: "cancellation",
        title: "License Cancellation",
        description:
          "Closing a company properly means cancelling visas, clearing government dues, publishing the liquidation notice and obtaining clearance from immigration, labour and the licensing authority. We manage the full sequence so you exit cleanly with no outstanding liabilities.",
      },
      {
        anchor: "freezing",
        title: "License Freezing",
        description:
          "If you need to pause operations without closing the company, a license freeze suspends your activities for up to three years while preserving your registration. We handle the application, the required clearances and the eventual reactivation when you are ready to resume.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "A simple process for any license service",
    items: [
      {
        step: "01",
        title: "Requirement Check",
        description:
          "We confirm what you need, whether renewal, amendment, freeze or cancellation, and list the exact documents, approvals and fees for your license type and jurisdiction.",
      },
      {
        step: "02",
        title: "Document Preparation",
        description:
          "We prepare or collect everything required, including amended MOAs, board resolutions and NOCs, and check them against authority requirements before submission.",
      },
      {
        step: "03",
        title: "Authority Submission",
        description:
          "Our PRO team submits the application to the DET, free zone authority or other departments, tracks progress and responds to any queries on your behalf.",
      },
      {
        step: "04",
        title: "Delivery & Records Update",
        description:
          "We collect the updated license or clearance certificate and deliver it with refreshed registration documents, so your bank, immigration file and records all stay aligned.",
      },
    ],
  },
  faqs: {
    eyebrow: "Common Questions",
    title: "Frequently asked questions about license services",
    items: [
      {
        question: "When should I start my license renewal?",
        answer:
          "Start at least 30 days before expiry. That leaves room for an expired tenancy contract, outstanding fines or a required inspection. Operating on an expired license attracts monthly penalties and blocks visa processing, so we send managed clients reminders well in advance.",
      },
      {
        question: "How long does a license modification take?",
        answer:
          "Simple amendments such as a manager change or address update usually complete in one to three working days. Activity additions take three to seven days depending on external approvals. Share transfers and legal-form changes typically take five to ten working days because a new MOA must be notarised.",
      },
      {
        question: "What is the difference between freezing and cancelling a license?",
        answer:
          "Freezing suspends your license temporarily, usually for one to three years, while keeping the company registered so you can reactivate later. Cancellation permanently closes the company and removes it from the register. Freezing is cheaper and faster if you expect to resume; cancellation is the right choice if you are exiting for good.",
      },
      {
        question: "Can I cancel my license if I still have employees on visas?",
        answer:
          "Employee visas must be cancelled first, and end-of-service entitlements settled, before the licensing authority will accept a cancellation. We coordinate the visa cancellations, labour clearances and license cancellation in the correct order.",
      },
      {
        question: "Do you handle free zone licenses as well as mainland?",
        answer:
          "Yes. Each free zone runs its own renewal and amendment process, and we work with all the major zones including DMCC, IFZA, DIFC, JAFZA, RAKEZ and Meydan, as well as Dubai mainland through the DET.",
      },
      {
        question: "What happens if my license has already expired?",
        answer:
          "Late renewal fines accrue monthly and you cannot process visas or bank transactions until it is renewed. Prolonged expiry can lead to automatic cancellation. If your license has lapsed, contact us straight away and we will expedite the renewal and negotiate any penalties where possible.",
      },
    ],
  },
  cta: {
    title: "Keep your license compliant",
    description:
      "Renewal, amendment, freezing or cancellation. Tell us what you need and we will handle the rest.",
    primaryLabel: "Book Free Consultation",
    primaryHref: "/contact",
    secondaryLabel: "Explore Other Services",
    secondaryHref: "/services",
  },
};

export const seo: ServiceSeoSeed = {
  title: "License Services Dubai | Renewal, Modification, Cancellation & Freezing | Licorne",
  description:
    "Trade license renewal, modification, cancellation and freezing in Dubai and UAE free zones. Proactive renewal tracking and fast amendment processing by Licorne's PRO team.",
  keywords: [
    "trade license renewal dubai",
    "license modification dubai",
    "license cancellation dubai",
    "license freezing uae",
    "ded license renewal",
    "dubai business license services",
  ],
};
