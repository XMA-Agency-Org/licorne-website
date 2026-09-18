import type { ServiceSeed, ServiceSeoSeed } from "../types";

export const service: ServiceSeed = {
  slug: "residence-visa",
  category: "visa-immigration",
  order: 1,
  hero: {
    title: "UAE Residence Visa",
    description:
      "Investor, partner and employment residence visas for business owners and their teams. From entry permit to Emirates ID, we manage every step with immigration, medical and labour authorities.",
    image: "visa-immigration.jpg",
    imageAlt: "UAE residence visa services",
  },
  overview: {
    eyebrow: "About Residence Visas",
    title: "Live and work in the UAE on your own company's sponsorship",
    description:
      "Once your company is licensed, it can sponsor residence visas for you as an investor or partner and for the staff you hire. A residence visa is what allows you to live in the UAE, open personal bank accounts, rent property, obtain a driving licence and sponsor your family. The process moves through several departments: an establishment card and immigration file for the company, an entry permit for the applicant, a medical fitness test, biometrics for Emirates ID, and finally the visa stamp. Each stage has its own documents and timing, and a mistake at one stage delays the next. We coordinate the full sequence for mainland and free zone companies, keep you informed at every step, and manage renewals so your status never lapses.",
    highlights: [
      "Investor and partner visas for company owners",
      "Employment visas for staff and executives",
      "Company immigration file and establishment card",
      "Medical test, biometrics and Emirates ID coordination",
      "Visa renewals, status changes and cancellations",
      "Mainland and free zone visa quotas",
    ],
    expectationTitle: "A predictable path to residency",
    expectationDescription:
      "Clear document checklists, booked appointments and regular status updates. You know where your application is at every stage.",
  },
  stats: [
    { value: "2", label: "Years standard visa validity" },
    { value: "5-10", label: "Working days typical processing" },
    { value: "98%", label: "First-time approval rate" },
    { value: "24h", label: "Status update turnaround" },
  ],
  deliverables: {
    eyebrow: "What's Included",
    title: "End-to-end residence visa processing",
    items: [
      {
        title: "Investor & Partner Visa",
        description:
          "Residence visa issued under your own company, valid for two years and renewable. Available to shareholders of mainland and free zone companies and the foundation for sponsoring your family.",
      },
      {
        title: "Employment Visa",
        description:
          "Work permits and residence visas for employees, including labour contract registration with MOHRE for mainland companies or the free zone authority, and quota management as your team grows.",
      },
      {
        title: "Company Immigration File",
        description:
          "Establishment card and immigration file registration that every company needs before it can sponsor its first visa. We set this up alongside your license.",
      },
      {
        title: "Entry Permit & Status Change",
        description:
          "Issuance of the entry permit and, for applicants already in the UAE, in-country status change so you do not need to exit and re-enter.",
      },
      {
        title: "Medical, Biometrics & Emirates ID",
        description:
          "Booking and accompanying you to the medical fitness test and Emirates ID biometrics, then tracking the ID card through to delivery.",
      },
      {
        title: "Renewals & Cancellations",
        description:
          "Renewal tracking before expiry, and clean cancellation when an employee leaves or you close the company, so no fines or bans are triggered.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "Your residence visa in five steps",
    items: [
      {
        step: "01",
        title: "Eligibility & Documents",
        description:
          "We confirm which visa category applies, check your company's quota and collect passport, photo, attested certificates and any other documents required.",
      },
      {
        step: "02",
        title: "Entry Permit",
        description:
          "We submit the application to immigration and obtain the entry permit, usually within two to five working days.",
      },
      {
        step: "03",
        title: "Medical & Biometrics",
        description:
          "Medical fitness test at an approved centre and Emirates ID biometrics, both booked and coordinated by us.",
      },
      {
        step: "04",
        title: "Visa Stamping & Emirates ID",
        description:
          "Residence visa is issued and linked to your passport and your Emirates ID card is printed and delivered.",
      },
    ],
  },
  faqs: {
    eyebrow: "Common Questions",
    title: "Frequently asked questions about residence visas",
    items: [
      {
        question: "How long does a residence visa take?",
        answer:
          "From entry permit to Emirates ID typically takes five to ten working days once the company's immigration file is active. Timelines vary by jurisdiction and medical centre availability, and we give you a realistic estimate at the start.",
      },
      {
        question: "Do I need to be in the UAE to apply?",
        answer:
          "The entry permit can be issued while you are abroad. You will need to be in the UAE for the medical test and biometrics, and the visa is then stamped in-country. If you are already in the UAE on a visit visa we can process a status change without you leaving.",
      },
      {
        question: "How many visas can my company sponsor?",
        answer:
          "Mainland quotas depend on office size, roughly one visa per nine square metres. Free zones allocate visas by license package, commonly one to six, with more available on request. We factor visa needs into your setup so you are not constrained later.",
      },
      {
        question: "What is the validity of a residence visa?",
        answer:
          "Investor and employment visas are generally issued for two years and renewable. Golden Visas run for ten years and are covered on our dedicated Golden Visa page.",
      },
      {
        question: "Can I sponsor my family once I have a residence visa?",
        answer:
          "Yes. With a valid residence visa and minimum salary or investor status you can sponsor your spouse, children and in some cases parents. See our Dependent Visa service for details.",
      },
    ],
  },
  cta: {
    title: "Ready to secure your UAE residency?",
    description:
      "Book a free consultation and we will map out the fastest route to your residence visa and Emirates ID.",
    primaryLabel: "Book Free Consultation",
    primaryHref: "/contact",
    secondaryLabel: "All Visa Services",
    secondaryHref: "/services/visa-immigration",
  },
};

export const seo: ServiceSeoSeed = {
  title: "UAE Residence Visa | Investor, Partner & Employment Visas | Licorne",
  description:
    "Investor, partner and employment residence visas in Dubai. Entry permit, medical, Emirates ID and visa stamping handled end to end, with renewals tracked.",
  keywords: [
    "uae residence visa",
    "dubai investor visa",
    "partner visa uae",
    "employment visa dubai",
    "emirates id",
    "residence visa dubai",
  ],
};
