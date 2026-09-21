import type { ServiceSeed, ServiceSeoSeed } from "../types";

export const service: ServiceSeed = {
  slug: "free-zone-company-setup",
  category: "company-setup",
  order: 2,
  listing: {
    summary:
      "100% foreign ownership, tax advantages, and simplified regulations. We help you choose the right free zone and manage the entire registration process.",
    badge: "100% Ownership",
  },
  hero: {
    title: "Dubai Free Zone Company Setup",
    description:
      "100% foreign ownership, tax advantages, and streamlined regulations. We help you choose the right free zone for your industry and manage the entire registration process from application to license.",
    image: "free-zone-company-setup.jpg",
    imageAlt: "Dubai free zone business setup",
  },
  overview: {
    eyebrow: "About Free Zone Companies",
    title: "Full ownership and simplified setup in UAE free zones",
    description:
      "Dubai's 30+ free zones offer distinct advantages: complete foreign ownership without a local sponsor, corporate tax exemptions (0% for qualifying income), 100% repatriation of profits, and simplified import/export procedures. Each free zone caters to specific industries — from DMCC for commodities trading to Dubai Internet City for tech companies, Dubai Healthcare City for medical practices, and JAFZA for logistics. The key is matching your business to the right zone. We've helped many entrepreneurs navigate this choice, avoiding costly mistakes like registering in zones that don't support their activities or overpaying for packages they don't need. Free zones are ideal for businesses focused on international trade, remote services, or industries with dedicated zones.",
    highlights: [
      "100% foreign ownership — no local sponsor required",
      "0% corporate tax on qualifying income",
      "Full repatriation of capital and profits",
      "Streamlined visa packages (typically 3-6 included)",
      "Flexible office options from virtual to physical",
      "Simplified customs and import/export procedures",
    ],
    expectationTitle: "Our free zone expertise",
    expectationDescription:
      "We work with 10+ free zones across the UAE and match you to the one that fits your business model, budget, and long-term plans.",
  },
  stats: [
    { value: "10+", label: "Free zones covered" },
    { value: "3-5", label: "Days average setup time" },
    { value: "0%", label: "Corporate tax for qualifying FZ income" },
    { value: "100%", label: "Foreign ownership" },
  ],
  deliverables: {
    eyebrow: "What's Included",
    title: "Complete free zone company formation package",
    items: [
      {
        title: "Free Zone Selection Advisory",
        description:
          "Analysis of your business activities against free zone options, comparing costs, visa allowances, office requirements, and activity restrictions to find your optimal match.",
      },
      {
        title: "License Application & Processing",
        description:
          "Complete handling of your free zone application, from name reservation through activity selection to final license issuance, including all government submissions.",
      },
      {
        title: "Share Capital & Documentation",
        description:
          "Guidance on share capital requirements (varies by free zone), preparation of MOA, shareholder resolutions, and all incorporation documents.",
      },
      {
        title: "Visa Package Allocation",
        description:
          "Securing your visa quota as part of the license package, with assistance processing investor visas for owners and employment visas for staff.",
      },
      {
        title: "Office Solution Setup",
        description:
          "Whether you need a flexi-desk for license purposes, a hot desk for occasional use, or a dedicated office, we arrange the right solution within your chosen free zone.",
      },
      {
        title: "Bank Account Introduction",
        description:
          "Connection to banks experienced with free zone companies, with documentation prepared to meet their specific compliance requirements.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "From free zone selection to operating company",
    items: [
      {
        step: "01",
        title: "Free Zone Matching",
        description:
          "We analyze your business model, target market, and budget to recommend 2-3 free zones that best fit your needs with clear pros and cons.",
      },
      {
        step: "02",
        title: "Application Submission",
        description:
          "Once you choose, we handle name reservation, activity selection, and submit your complete application package to the free zone authority.",
      },
      {
        step: "03",
        title: "License Issuance",
        description:
          "Upon approval (typically 3-5 days), we collect your trade license, immigration card, and establishment documents.",
      },
      {
        step: "04",
        title: "Operational Setup",
        description:
          "We process owner visas, assist with bank account opening, and ensure you have everything needed to start operations.",
      },
    ],
  },
  faqs: {
    eyebrow: "Common Questions",
    title: "Frequently asked questions about free zone setup",
    items: [
      {
        question: "Which free zone is best for my business?",
        answer:
          "It depends on your industry, target market, budget, and visa needs. Tech companies often choose DIFC or Dubai Internet City. Trading businesses prefer DMCC or JAFZA. E-commerce works well in Dubai CommerCity. We analyze your specific case to recommend the best fit — avoiding zones that seem cheap but restrict your activities.",
      },
      {
        question: "Can a free zone company work with UAE clients?",
        answer:
          "Yes, but with limitations. Free zone companies can invoice UAE mainland clients for services, but selling physical goods in the UAE requires going through a mainland distributor or customs clearance procedures. For businesses primarily targeting UAE customers, mainland may be more suitable.",
      },
      {
        question: "What's the cost difference between free zones?",
        answer:
          "Significant. A basic package in RAK Free Trade Zone starts around AED 12,000, while DIFC (Dubai's financial center) starts at AED 50,000+. The cheapest option isn't always best — we help you understand what's included, what's extra, and total cost of ownership.",
      },
      {
        question: "How many visas do I get with a free zone license?",
        answer:
          "Most free zone packages include 3-6 visa allocations. Additional visas can be purchased, typically AED 5,000-8,000 per visa. Some zones like IFZA are known for generous visa packages at competitive rates.",
      },
      {
        question: "Do I need a physical office in the free zone?",
        answer:
          "Most free zones offer flexi-desk (virtual office) options sufficient for license issuance. However, some activities require a physical presence. We advise on the minimum requirements for your specific activity and whether upgrading makes sense for your operations.",
      },
      {
        question: "Can I convert a free zone company to mainland?",
        answer:
          "Not directly — you'd need to establish a separate mainland entity. However, a free zone company can open a mainland branch for local UAE trading. We help structure this correctly from the start to avoid costly restructuring later.",
      },
    ],
  },
  cta: {
    title: "Find your ideal free zone",
    description:
      "Book a consultation to compare free zone options for your business, understand true costs, and get a clear setup timeline.",
    primaryLabel: "Book Free Consultation",
    primaryHref: "/contact",
    secondaryLabel: "Explore Other Services",
    secondaryHref: "/services",
  },
};

export const seo: ServiceSeoSeed = {
  title: "Dubai Free Zone Company Setup | 100% Ownership | Licorne",
  description:
    "Set up your free zone company in Dubai with 100% foreign ownership. Compare 10+ free zones, 0% corporate tax, 3-5 day setup. Expert guidance on DMCC, DIFC, JAFZA, and more.",
  keywords: [
    "dubai free zone company",
    "free zone business setup dubai",
    "dmcc company formation",
    "100% foreign ownership dubai",
    "freezone license uae",
    "dubai free zone comparison",
  ],
};
