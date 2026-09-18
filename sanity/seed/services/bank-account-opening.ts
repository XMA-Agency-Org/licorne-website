import type { ServiceSeed, ServiceSeoSeed } from "../types";

export const service: ServiceSeed = {
  slug: "bank-account-opening",
  category: "finance-banking",
  order: 1,
  hero: {
    title: "Corporate Bank Account Opening in Dubai",
    description:
      "The trickiest part of Dubai business setup — made manageable. We prepare your documentation, connect you with the right banks, and guide you through compliance requirements for successful account opening.",
    image: "bank-account-opening.jpg",
    imageAlt: "Corporate bank account opening Dubai",
  },
  overview: {
    eyebrow: "About Bank Account Opening",
    title: "Navigate UAE banking with expert guidance",
    description:
      "Opening a corporate bank account in the UAE has become increasingly challenging due to enhanced compliance requirements. Banks scrutinize business models, source of funds, expected transaction volumes, and beneficial ownership structures. Many new businesses face rejection or endless document requests without understanding why. We've built relationships with relationship managers across major UAE banks and understand exactly what each institution requires. More importantly, we know which banks are suitable for different business types — a trading company, a consultancy, and an e-commerce business each need different banking solutions. Our preparation includes anticipating compliance questions, structuring your application correctly, and accompanying you to meetings when needed. The result: higher approval rates and faster account activation.",
    highlights: [
      "Relationship introductions to major UAE banks",
      "Documentation preparation specific to each bank",
      "Business profile and source of funds narratives",
      "Compliance pre-screening before application",
      "Meeting accompaniment when required",
      "Follow-up until account is activated",
    ],
    expectationTitle: "Why banking is difficult — and how we help",
    expectationDescription:
      "Banks reject 40%+ of new company applications. Our preparation and introductions significantly improve your approval odds.",
  },
  stats: [
    { value: "85%", label: "First-application approval rate" },
    { value: "12+", label: "Partner banks in UAE" },
    { value: "2-4", label: "Weeks typical timeline" },
    { value: "50+", label: "Accounts opened" },
  ],
  deliverables: {
    eyebrow: "What's Included",
    title: "Complete bank account opening support",
    items: [
      {
        title: "Bank Selection Advisory",
        description:
          "Analysis of your business type, expected transaction volumes, and banking needs to recommend banks most likely to approve your application and serve your operational requirements.",
      },
      {
        title: "Documentation Package",
        description:
          "Preparation of all required documents including business plan summaries, source of funds explanations, expected transaction projections, and beneficial ownership declarations.",
      },
      {
        title: "Compliance Pre-Screening",
        description:
          "Review of your business model against bank compliance criteria. We identify potential red flags and help you address them before application.",
      },
      {
        title: "Relationship Introduction",
        description:
          "Direct introduction to relationship managers who understand your business type, rather than walking into a branch cold.",
      },
      {
        title: "Application Submission",
        description:
          "Proper submission of your complete application package, ensuring nothing is missing that could delay processing or trigger additional queries.",
      },
      {
        title: "Post-Application Support",
        description:
          "Follow-up with the bank on pending applications, coordination of additional document requests, and support until your account is activated and operational.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "From preparation to activated account",
    items: [
      {
        step: "01",
        title: "Business Assessment",
        description:
          "We understand your business model, expected banking needs, and any factors that might affect bank selection or approval.",
      },
      {
        step: "02",
        title: "Bank Matching",
        description:
          "Based on your profile, we recommend 2-3 banks and explain why each is suitable. You choose your priority order.",
      },
      {
        step: "03",
        title: "Documentation & Submission",
        description:
          "We prepare your package, make introductions, and either submit on your behalf or accompany you to the meeting.",
      },
      {
        step: "04",
        title: "Follow-Up & Activation",
        description:
          "We track progress, handle additional requests, and ensure you receive your account details and online banking credentials.",
      },
    ],
  },
  faqs: {
    eyebrow: "Common Questions",
    title: "Frequently asked questions about UAE banking",
    items: [
      {
        question: "Why is opening a bank account in UAE so difficult?",
        answer:
          "UAE banks operate under strict compliance frameworks (anti-money laundering, counter-terrorism financing). New businesses without UAE track records are considered higher risk. Banks are cautious about business models they don't understand, unclear source of funds, and complex ownership structures. Proper preparation addresses these concerns upfront.",
      },
      {
        question: "Which banks do you work with?",
        answer:
          "We have relationships with Emirates NBD, ADCB, Mashreq, RAK Bank, CBD, FAB, and several others including international banks with UAE presence. Bank selection depends on your business type — some banks are better for trading companies, others for service businesses or tech startups.",
      },
      {
        question: "How long does account opening take?",
        answer:
          "From application to active account: typically 2-4 weeks. This varies by bank, business complexity, and how quickly you provide additional documents if requested. Some banks are faster than others — we factor this into recommendations for time-sensitive situations.",
      },
      {
        question: "What documents are typically required?",
        answer:
          "Standard requirements include: trade license, MOA, passport copies of shareholders, proof of address, CV/background of owners, business plan or company profile, expected transaction details, and source of funds documentation. Specific requirements vary by bank.",
      },
      {
        question: "What if my application is rejected?",
        answer:
          "We analyze the rejection reason (if provided) and either address the issue for reapplication or recommend an alternative bank more suited to your profile. Our pre-screening significantly reduces rejection risk, but if it happens, we don't charge for the follow-up application.",
      },
      {
        question: "Can you help with multi-currency or international accounts?",
        answer:
          "Yes. Many UAE banks offer multi-currency accounts, and we can also facilitate introductions to international banks with UAE presence if your business requires specific capabilities like trade finance, LC facilities, or particular currency corridors.",
      },
    ],
  },
  cta: {
    title: "Don't let banking hold back your business",
    description:
      "Bank account opening is often the final hurdle in business setup. Let us help you clear it. Book a consultation to discuss your banking needs.",
    primaryLabel: "Book Free Consultation",
    primaryHref: "/contact",
    secondaryLabel: "Explore Other Services",
    secondaryHref: "/services",
  },
};

export const seo: ServiceSeoSeed = {
  title: "Corporate Bank Account Opening Dubai | Business Banking UAE | Licorne",
  description:
    "Open a corporate bank account in Dubai with expert guidance. 85% first-application approval rate. We prepare documentation, introduce you to relationship managers, and support until activation.",
  keywords: [
    "corporate bank account dubai",
    "business bank account uae",
    "open bank account dubai company",
    "uae business banking",
    "emirates nbd corporate account",
    "dubai company bank account",
  ],
};
