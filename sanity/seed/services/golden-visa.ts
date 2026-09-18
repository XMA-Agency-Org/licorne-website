import type { ServiceSeed, ServiceSeoSeed } from "../types";

export const service: ServiceSeed = {
  slug: "golden-visa",
  category: "visa-immigration",
  order: 4,
  hero: {
    title: "UAE Golden Visa Services",
    description:
      "Secure your 10-year residency in the UAE. We handle the entire Golden Visa application process — from eligibility assessment to final approval — for investors, entrepreneurs, specialists, and exceptional talents.",
    image: "golden-visa.jpg",
    imageAlt: "UAE Golden Visa services Dubai",
  },
  overview: {
    eyebrow: "About the Golden Visa",
    title: "Long-term residency for those who contribute to the UAE",
    description:
      "The UAE Golden Visa grants 5 or 10-year renewable residency to investors, entrepreneurs, scientists, outstanding students, and humanitarian pioneers. Unlike standard visas tied to employment, the Golden Visa provides stability — you can live, work, and sponsor family members without a national sponsor, and your visa remains valid even during extended stays abroad. For business owners, this means freedom to operate across emirates, sponsor unlimited employees, and build long-term plans without visa renewal uncertainty. For investors, it signals commitment and opens doors that short-term visas cannot. The eligibility criteria have expanded significantly since the program launched, with multiple pathways now available for real estate investors, company owners, freelancers with specialized skills, and exceptional talents in various fields. We assess your profile against all available categories and identify the strongest application pathway. Our team handles document preparation, authority submissions, and follow-ups — you receive your Golden Visa without navigating the bureaucratic complexity yourself.",
    highlights: [
      "10-year renewable residency visa",
      "No national sponsor required",
      "Sponsor family members including parents",
      "100% business ownership in mainland",
      "Stay abroad without losing residency",
      "Multiple eligibility pathways available",
    ],
    expectationTitle: "Who qualifies for the Golden Visa",
    expectationDescription:
      "Investors, entrepreneurs, specialized talents, researchers, outstanding students, and humanitarian pioneers. We assess your profile to find the best pathway.",
  },
  stats: [
    { value: "10yr", label: "Visa duration" },
    { value: "95%", label: "Application success rate" },
    { value: "4-8", label: "Weeks typical processing" },
    { value: "300+", label: "Golden Visas processed" },
  ],
  deliverables: {
    eyebrow: "What's Included",
    title: "Complete Golden Visa application support",
    items: [
      {
        title: "Eligibility Assessment",
        description:
          "Comprehensive review of your profile against all Golden Visa categories — investor, entrepreneur, specialized talent, scientist, outstanding student, or humanitarian pioneer — to identify your strongest pathway.",
      },
      {
        title: "Document Preparation",
        description:
          "Compilation and verification of all required documents including investment proofs, company valuations, professional credentials, recommendation letters, and supporting evidence specific to your category.",
      },
      {
        title: "Application Submission",
        description:
          "Proper submission through ICP (Federal Authority for Identity and Citizenship) with correct category selection, complete documentation, and professional presentation of your case.",
      },
      {
        title: "Authority Liaison",
        description:
          "Direct communication with immigration authorities, handling queries, providing additional documentation when requested, and tracking application progress through all stages.",
      },
      {
        title: "Family Sponsorship",
        description:
          "Processing of dependent visas for spouse, children, and parents under your Golden Visa — a unique benefit not available with standard residence visas.",
      },
      {
        title: "Emirates ID & Medical",
        description:
          "Coordination of medical fitness tests and Emirates ID applications for you and all family members, completing your UAE identity documentation.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "From assessment to 10-year residency",
    items: [
      {
        step: "01",
        title: "Eligibility Review",
        description:
          "We review your investment portfolio, business ownership, professional credentials, or other qualifications to determine the best Golden Visa category for your application.",
      },
      {
        step: "02",
        title: "Document Collection",
        description:
          "Based on your category, we provide a detailed document checklist and assist with obtaining valuations, attestations, and any supporting evidence required.",
      },
      {
        step: "03",
        title: "Application & Approval",
        description:
          "We submit your application, respond to any authority queries, and secure your Golden Visa approval. Timeline varies by category: 4-8 weeks typical.",
      },
      {
        step: "04",
        title: "Visa Stamping & ID",
        description:
          "Upon approval, we process your residence visa stamping, medical tests, and Emirates ID. Your 10-year Golden Visa is now active.",
      },
    ],
  },
  faqs: {
    eyebrow: "Common Questions",
    title: "Frequently asked questions about UAE Golden Visa",
    items: [
      {
        question: "What are the main Golden Visa categories?",
        answer:
          "The main categories are: Investors (AED 2M+ in property, public investments, or company capital), Entrepreneurs (startup founders with prior exit or incubator backing), Specialized Talents (doctors, scientists, engineers, artists with exceptional achievements), Outstanding Students (top performers from UAE or global universities), and Humanitarian Pioneers (recognized for charitable work). Each category has specific requirements we help you navigate.",
      },
      {
        question: "How much investment is required for the investor category?",
        answer:
          "For real estate: minimum AED 2 million property value (can be mortgaged up to 50% for properties over AED 4M). For company investors: AED 2 million in company capital or ownership of a company with AED 2M+ revenue. For public investments: AED 2 million in approved investment funds or deposits. Multiple smaller investments can sometimes be combined.",
      },
      {
        question: "Can I apply if I don't live in the UAE yet?",
        answer:
          "Yes. You can apply for a Golden Visa from outside the UAE if you meet eligibility criteria (e.g., property ownership, company shareholding). You'll need to enter the UAE to complete biometrics and medical tests, but the initial application and approval can be processed remotely.",
      },
      {
        question: "What's the difference between 5-year and 10-year Golden Visa?",
        answer:
          "The 10-year Golden Visa is available for investors and specialized talents with higher thresholds. The 5-year Golden Visa covers entrepreneurs, exceptional students, and some talent categories. Both are renewable and provide similar benefits — the main difference is duration and specific eligibility requirements for each tier.",
      },
      {
        question: "Can I sponsor my parents with the Golden Visa?",
        answer:
          "Yes — this is a unique benefit of the Golden Visa. Standard residence visas only allow sponsoring spouse and children. Golden Visa holders can also sponsor parents, providing them with renewable residence visas without the usual age or financial guarantee requirements.",
      },
      {
        question: "What happens if my investment value drops below the threshold?",
        answer:
          "For property investments, the AED 2M threshold is assessed at the time of visa application/renewal, not continuously. However, selling the property that qualified you would affect renewal eligibility. We advise on maintaining qualification throughout your visa period.",
      },
    ],
  },
  cta: {
    title: "Ready to secure your 10-year UAE residency?",
    description:
      "The Golden Visa provides stability and opportunities that standard visas cannot. Book a consultation to assess your eligibility and start your application.",
    primaryLabel: "Book Free Consultation",
    primaryHref: "/contact",
    secondaryLabel: "Explore Other Services",
    secondaryHref: "/services",
  },
};

export const seo: ServiceSeoSeed = {
  title: "UAE Golden Visa Services Dubai | 10 Year Visa | Licorne",
  description:
    "Get your UAE Golden Visa with expert guidance. 10-year residency for investors, entrepreneurs, and talents. 95% success rate. We handle the entire application process.",
  keywords: [
    "golden visa dubai",
    "uae golden visa",
    "10 year visa uae",
    "golden visa requirements",
    "investor visa dubai",
    "dubai long term visa",
  ],
};
