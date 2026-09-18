import type { ServiceSeed, ServiceSeoSeed } from "../types";

export const service: ServiceSeed = {
  slug: "dependent-visa",
  category: "visa-immigration",
  order: 2,
  hero: {
    title: "UAE Dependent Visa",
    description:
      "Sponsor your spouse, children and parents to live with you in the UAE. We handle eligibility checks, attestations, medicals and Emirates ID so your family can settle in without delay.",
    image: "visa-immigration.jpg",
    imageAlt: "Family and dependent visa services in the UAE",
  },
  overview: {
    eyebrow: "About Dependent Visas",
    title: "Bring your family to the UAE under your sponsorship",
    description:
      "Once you hold a valid UAE residence visa you can sponsor your immediate family as dependents. Spouses and children are the most common, and parents can be sponsored subject to salary and insurance conditions. The application requires attested marriage and birth certificates, proof of income or investor status, a tenancy contract and health insurance for each dependent, followed by the same entry permit, medical and Emirates ID steps as any residence visa. Document attestation is where most families lose time, because certificates issued abroad must be legalised in the home country and then by the UAE Ministry of Foreign Affairs. We check your eligibility up front, coordinate the attestations, and process each family member's visa in parallel so everyone is settled together.",
    highlights: [
      "Spouse and children sponsorship",
      "Parent sponsorship where eligible",
      "Certificate attestation and legalisation guidance",
      "Health insurance arrangement for dependents",
      "Medical, biometrics and Emirates ID for each family member",
      "Renewals aligned to the sponsor's visa",
    ],
    expectationTitle: "Family visas without the paperwork stress",
    expectationDescription:
      "One checklist for the whole family, attestations coordinated in advance, and applications processed together so nobody is left waiting.",
  },
  stats: [
    { value: "5-10", label: "Working days typical processing" },
    { value: "2", label: "Years validity, renewable" },
    { value: "98%", label: "First-time approval rate" },
    { value: "1", label: "Point of contact for the whole family" },
  ],
  deliverables: {
    eyebrow: "What's Included",
    title: "Complete family sponsorship support",
    items: [
      {
        title: "Eligibility Assessment",
        description:
          "We confirm you meet the salary, accommodation and insurance requirements for each dependent before anything is submitted, so there are no surprises mid-process.",
      },
      {
        title: "Spouse Visa",
        description:
          "Residence visa for your husband or wife, including attested marriage certificate, medical test, biometrics and Emirates ID.",
      },
      {
        title: "Children's Visas",
        description:
          "Visas for sons and daughters, with attested birth certificates and guidance on the age and marital-status rules that apply to older children.",
      },
      {
        title: "Parent Sponsorship",
        description:
          "Sponsorship of parents where you meet the higher salary threshold and can provide the required insurance and accommodation, including the annual deposit where applicable.",
      },
      {
        title: "Attestation Coordination",
        description:
          "Guidance on legalising certificates in your home country and processing the UAE Ministry of Foreign Affairs attestation, the step that most often causes delays.",
      },
      {
        title: "Renewals & Changes",
        description:
          "Dependent visas run with the sponsor's visa. We track renewals, manage sponsor changes when you move companies, and handle cancellations cleanly if needed.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "Sponsoring your family",
    items: [
      {
        step: "01",
        title: "Eligibility & Documents",
        description:
          "We review your visa, salary or investor status and tenancy contract, then issue a document checklist for each family member.",
      },
      {
        step: "02",
        title: "Attestation",
        description:
          "Marriage and birth certificates are legalised at home and attested by the UAE Ministry of Foreign Affairs. We advise on the sequence and handle the UAE side.",
      },
      {
        step: "03",
        title: "Entry Permit & Medical",
        description:
          "Applications submitted to immigration, entry permits issued, and medical tests booked for adult dependents.",
      },
      {
        step: "04",
        title: "Visa & Emirates ID",
        description:
          "Residence visas issued and Emirates ID cards delivered for every family member, with insurance and school-registration documents ready.",
      },
    ],
  },
  faqs: {
    eyebrow: "Common Questions",
    title: "Frequently asked questions about dependent visas",
    items: [
      {
        question: "What salary do I need to sponsor my family?",
        answer:
          "The general threshold is AED 4,000 per month, or AED 3,000 plus accommodation. Investors and partners qualify through their company ownership rather than a salary. Parent sponsorship requires a higher income and additional conditions, which we confirm during the eligibility check.",
      },
      {
        question: "Which documents need attestation?",
        answer:
          "Marriage certificates for spouses and birth certificates for children must be attested in the issuing country and then by the UAE Ministry of Foreign Affairs. Documents in languages other than Arabic or English also need certified translation.",
      },
      {
        question: "Can my dependents work in the UAE?",
        answer:
          "A dependent visa alone does not permit employment. A sponsored spouse or adult child can obtain a work permit from an employer while remaining on your sponsorship, which is often simpler than switching to an employment visa.",
      },
      {
        question: "Until what age can I sponsor my children?",
        answer:
          "Sons can be sponsored up to age 25 and unmarried daughters with no age limit. Sons over 25 and married daughters need their own visa route, and we can advise on the options.",
      },
      {
        question: "How long does the process take?",
        answer:
          "With attested documents in hand, each dependent visa typically takes five to ten working days. Attestation abroad can add one to three weeks, which is why we start it first.",
      },
    ],
  },
  cta: {
    title: "Ready to bring your family to the UAE?",
    description:
      "Book a free consultation and we will confirm eligibility and give you one clear checklist for the whole family.",
    primaryLabel: "Book Free Consultation",
    primaryHref: "/contact",
    secondaryLabel: "All Visa Services",
    secondaryHref: "/services/visa-immigration",
  },
};

export const seo: ServiceSeoSeed = {
  title: "UAE Dependent Visa | Spouse, Children & Parent Sponsorship | Licorne",
  description:
    "Sponsor your spouse, children and parents in Dubai. Eligibility checks, certificate attestation, medicals and Emirates ID handled for the whole family.",
  keywords: [
    "dependent visa uae",
    "family visa dubai",
    "spouse visa uae",
    "sponsor parents uae",
    "children visa dubai",
    "family sponsorship dubai",
  ],
};
