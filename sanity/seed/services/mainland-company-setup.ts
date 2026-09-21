import type { ServiceSeed, ServiceSeoSeed } from "../types";

export const service: ServiceSeed = {
  slug: "mainland-company-setup",
  category: "company-setup",
  order: 1,
  listing: {
    summary:
      "Establish your LLC in Dubai mainland with full UAE market access. We handle licensing, approvals and registration for seamless market entry.",
    badge: "Most Popular",
  },
  hero: {
    title: "Dubai Mainland Company Setup",
    description:
      "Establish your LLC in Dubai mainland with full access to the local UAE market. We handle sponsor arrangements, trade license selection, and all government approvals — you focus on building your business.",
    image: "mainland-company-setup.jpg",
    imageAlt: "Dubai mainland business setup",
  },
  overview: {
    eyebrow: "About Mainland Companies",
    title: "Full market access with a Dubai mainland license",
    description:
      "A Dubai mainland company (also called DED or onshore company) gives you unrestricted access to trade anywhere in the UAE. Unlike free zone companies, mainland businesses can bid on government contracts, operate retail locations anywhere in Dubai, and work directly with UAE-based clients without intermediaries. The trade-off is the requirement for a local service agent or sponsor for certain license types — but we handle that arrangement entirely, ensuring you maintain full operational control while meeting regulatory requirements. Mainland setup is ideal for businesses targeting the local market, service providers needing a physical presence, and companies planning to scale across the Emirates.",
    highlights: [
      "Trade anywhere in the UAE without geographic restrictions",
      "Eligible for government contracts and tenders",
      "Open retail, restaurant, or service locations in any emirate",
      "100% foreign ownership now available for most activities",
      "No restrictions on number of visas based on office size",
      "Direct invoicing to UAE government entities and local clients",
    ],
    expectationTitle: "What to expect from us",
    expectationDescription:
      "A streamlined setup process with clear timelines, transparent pricing, and dedicated support from consultation through your first year of operation.",
  },
  stats: [
    { value: "50+", label: "Companies formed" },
    { value: "5-10", label: "Days average setup time" },
    { value: "2,000+", label: "Activity types available" },
    { value: "100%", label: "Foreign ownership eligible" },
  ],
  deliverables: {
    eyebrow: "What's Included",
    title: "Everything you need to launch your mainland company",
    items: [
      {
        title: "Trade License Application",
        description:
          "We handle the complete DED application process, from initial approval to final license issuance, selecting the optimal activity codes for your business model.",
      },
      {
        title: "Local Sponsor Arrangement",
        description:
          "For activities requiring a UAE national sponsor, we connect you with vetted, reliable sponsors through legally-binding agreements that protect your interests.",
      },
      {
        title: "MOA & Legal Documentation",
        description:
          "Memorandum of Association, shareholder agreements, and all required legal documents drafted and notarized to UAE standards.",
      },
      {
        title: "Office & Ejari Registration",
        description:
          "Assistance finding suitable office space and completing Ejari registration — a requirement for mainland companies and visa processing.",
      },
      {
        title: "Immigration Card & Establishment",
        description:
          "Company immigration file setup with MOHRE, enabling you to sponsor employee visas and residence permits.",
      },
      {
        title: "Bank Account Introduction",
        description:
          "Warm introductions to relationship managers at major UAE banks, with documentation prepared to their specific requirements.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "Your path from consultation to operating company",
    items: [
      {
        step: "01",
        title: "Initial Consultation",
        description:
          "We assess your business model, recommend the right license type and activities, and provide a detailed cost breakdown with no hidden fees.",
      },
      {
        step: "02",
        title: "Documentation",
        description:
          "You provide passport copies and basic documents. We handle name reservation, MOA drafting, and all government submissions.",
      },
      {
        step: "03",
        title: "License Issuance",
        description:
          "Once approved, we collect your trade license from DED and register your establishment card for visa quota allocation.",
      },
      {
        step: "04",
        title: "Operational Setup",
        description:
          "We assist with bank account opening, visa processing, and any additional permits your business requires to start operating.",
      },
    ],
  },
  faqs: {
    eyebrow: "Common Questions",
    title: "Frequently asked questions about mainland setup",
    items: [
      {
        question: "Do I need a local sponsor for a mainland company?",
        answer:
          "It depends on your activity. Since 2021, over 1,000 commercial activities allow 100% foreign ownership. However, some activities (particularly those involving government contracts or specific regulated sectors) still require a UAE national service agent. We'll advise you on the best structure during consultation.",
      },
      {
        question: "What's the difference between mainland and free zone?",
        answer:
          "Mainland companies can trade directly anywhere in the UAE, open multiple branches, and bid on government contracts. Free zone companies are limited to operating within their zone or internationally. Mainland requires an office lease (Ejari), while free zones offer flexi-desk options. We help you choose based on your business model.",
      },
      {
        question: "How long does mainland company setup take?",
        answer:
          "Typically 5-10 working days from document submission to license issuance. The timeline can extend if you need special approvals (e.g., for regulated activities) or if there are delays in office lease registration.",
      },
      {
        question: "What are the costs involved?",
        answer:
          "Costs vary based on license type, number of activities, office requirements, and visa needs. A basic mainland LLC starts around AED 15,000-25,000 including government fees, but we provide an itemized quote after understanding your specific requirements.",
      },
      {
        question: "Can I convert a free zone company to mainland later?",
        answer:
          "Yes, but it requires establishing a new mainland entity and transferring operations. It's more efficient to choose the right structure from the start — which is why we spend time understanding your long-term plans during consultation.",
      },
      {
        question: "How many visas can I get with a mainland license?",
        answer:
          "Visa quota depends on your office space size, roughly calculated at one visa per 9 square meters. Unlike free zones with fixed visa packages, mainland offers flexibility to scale your team as your office space grows.",
      },
    ],
  },
  cta: {
    title: "Ready to establish your mainland company?",
    description:
      "Book a free consultation to discuss your business model, get a detailed cost breakdown, and understand the timeline for your specific setup.",
    primaryLabel: "Book Free Consultation",
    primaryHref: "/contact",
    secondaryLabel: "Explore Other Services",
    secondaryHref: "/services",
  },
};

export const seo: ServiceSeoSeed = {
  title: "Dubai Mainland Company Setup | LLC Formation | Licorne",
  description:
    "Set up your mainland company in Dubai with full UAE market access. 100% foreign ownership available. Expert guidance on DED licensing, local sponsors, and trade license selection. 5-10 day setup.",
  keywords: [
    "dubai mainland company setup",
    "mainland llc dubai",
    "ded license dubai",
    "dubai company formation",
    "mainland business setup dubai",
    "llc formation uae",
  ],
};
