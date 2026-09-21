import type { ServiceSeed, ServiceSeoSeed } from "../types";

export const service: ServiceSeed = {
  slug: "offshore-company-setup",
  category: "company-setup",
  order: 3,
  listing: {
    summary:
      "Hold assets, own shares and structure international business through a UAE offshore company. No office or residence visa required.",
    badge: "Asset Holding",
  },
  hero: {
    title: "Offshore Company Setup UAE",
    description:
      "Hold assets, own shares and structure international business through a UAE offshore company. Full foreign ownership, no corporate tax on qualifying income, and no requirement for a physical office or residence visa.",
    image: "free-zone-company-setup.jpg",
    imageAlt: "Offshore company formation in the UAE",
  },
  overview: {
    eyebrow: "About Offshore Companies",
    title: "A lean vehicle for holding, investing and international trade",
    description:
      "A UAE offshore company is registered in a dedicated jurisdiction such as JAFZA Offshore, RAK ICC or Ajman Offshore and is designed for activities conducted outside the UAE. It cannot trade in the local market or sponsor visas, but it can own shares in other companies, hold real estate in designated areas, open UAE bank accounts, and act as a holding or asset-protection vehicle. Setup is fast, there is no requirement for office space, and reporting obligations are light. It is the right structure for investors, consultants working with overseas clients, and groups that want a UAE-based holding entity without the cost of an operating license. We advise on which offshore jurisdiction fits your goals and manage registration through to bank account opening.",
    highlights: [
      "100% foreign ownership with no local partner",
      "No physical office or UAE residence required",
      "Own shares, intellectual property and approved real estate",
      "Confidential shareholder and director register",
      "UAE corporate bank account eligibility",
      "JAFZA Offshore, RAK ICC and Ajman Offshore options",
    ],
    expectationTitle: "The right jurisdiction for your purpose",
    expectationDescription:
      "We compare JAFZA, RAK ICC and Ajman against what you actually need, whether property holding, a group holding company or an international trading vehicle, and handle the setup end to end.",
  },
  stats: [
    { value: "3-5", label: "Working days to incorporate" },
    { value: "100%", label: "Foreign ownership" },
    { value: "0%", label: "Corporate tax on qualifying income" },
    { value: "3", label: "Offshore jurisdictions covered" },
  ],
  deliverables: {
    eyebrow: "What's Included",
    title: "Complete offshore incorporation",
    items: [
      {
        title: "Jurisdiction Advisory",
        description:
          "JAFZA Offshore allows Dubai property ownership, RAK ICC is cost-effective for holding structures, Ajman Offshore suits simple international trading. We recommend the one that fits your objectives and budget.",
      },
      {
        title: "Name Reservation & Registration",
        description:
          "Name approval, preparation of the memorandum and articles, registered agent appointment and submission to the offshore registrar through to certificate of incorporation.",
      },
      {
        title: "Registered Agent & Address",
        description:
          "Every offshore company needs a licensed registered agent and a registered address in the jurisdiction. We provide both and manage annual compliance with the registrar.",
      },
      {
        title: "Corporate Documents",
        description:
          "Certificate of incorporation, MOA and AOA, share certificates, register of directors and shareholders, and certificates of incumbency or good standing whenever a bank or counterparty requires them.",
      },
      {
        title: "Bank Account Introduction",
        description:
          "Offshore companies can open UAE bank accounts but banks apply enhanced due diligence. We prepare a compliant application file and introduce you to banks that actively onboard offshore entities.",
      },
      {
        title: "Annual Renewal & Compliance",
        description:
          "Annual registration renewal, economic substance and UBO filings where applicable, and any amendments to shareholders, directors or share capital over the life of the company.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "From consultation to incorporation",
    items: [
      {
        step: "01",
        title: "Structure Consultation",
        description:
          "We understand what the company will hold or do, confirm offshore is the right vehicle rather than a free zone company, and select the jurisdiction.",
      },
      {
        step: "02",
        title: "KYC & Documentation",
        description:
          "Passport copies, proof of address, bank reference and a short business plan for each shareholder and director. We check everything for registrar and bank acceptance.",
      },
      {
        step: "03",
        title: "Registration",
        description:
          "We reserve the name, draft the constitutional documents and submit to the registrar. Most offshore companies incorporate within three to five working days.",
      },
      {
        step: "04",
        title: "Post-Incorporation",
        description:
          "Corporate documents are delivered, the bank account application begins, and we set up the annual renewal calendar so the company stays in good standing.",
      },
    ],
  },
  faqs: {
    eyebrow: "Common Questions",
    title: "Frequently asked questions about offshore companies",
    items: [
      {
        question: "What is the difference between an offshore company and a free zone company?",
        answer:
          "A free zone company holds a trade license, can lease an office, sponsor residence visas and trade within its zone and internationally. An offshore company has no trade license, cannot sponsor visas or trade in the UAE market, and is designed purely for holding assets and conducting business outside the UAE. It is cheaper and simpler, but less flexible.",
      },
      {
        question: "Can an offshore company own property in Dubai?",
        answer:
          "JAFZA Offshore companies can own freehold property in designated areas of Dubai and are the most common vehicle for this. RAK ICC companies can also hold Dubai property subject to Dubai Land Department approval. We advise on the correct structure before you purchase.",
      },
      {
        question: "Do I need to visit the UAE to set up an offshore company?",
        answer:
          "In most cases no. Registration can be completed remotely through us as your registered agent. A visit may be needed for bank account opening depending on the bank's policy.",
      },
      {
        question: "Is a UAE offshore company subject to corporate tax?",
        answer:
          "Offshore companies fall under the UAE corporate tax regime and must register with the Federal Tax Authority. Qualifying income, typically passive holding income and income from outside the UAE, may benefit from a 0% rate, but this depends on the company's activities and substance. We advise on registration and qualifying status as part of setup.",
      },
      {
        question: "Can an offshore company open a bank account in the UAE?",
        answer:
          "Yes, though banks apply stricter due diligence to offshore entities and want to see a clear business rationale, source of funds and beneficial ownership. Our bank account opening service is built around preparing exactly this file.",
      },
    ],
  },
  cta: {
    title: "Ready to structure your holdings in the UAE?",
    description:
      "Book a free consultation and we will confirm whether offshore, free zone or mainland is the right vehicle for your plans.",
    primaryLabel: "Book Free Consultation",
    primaryHref: "/contact",
    secondaryLabel: "Compare with Free Zone",
    secondaryHref: "/services/free-zone-company-setup",
  },
};

export const seo: ServiceSeoSeed = {
  title: "Offshore Company Setup UAE | JAFZA, RAK ICC & Ajman Offshore | Licorne",
  description:
    "Set up a UAE offshore company for asset holding, property ownership and international business. 100% foreign ownership, no office required, incorporation in 3-5 days.",
  keywords: [
    "offshore company uae",
    "offshore company dubai",
    "jafza offshore",
    "rak icc company",
    "ajman offshore",
    "uae holding company",
  ],
};
