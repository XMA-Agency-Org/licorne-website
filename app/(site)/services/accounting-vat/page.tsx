import HeroImage from "@/public/images/heroes/accounting-vat.jpg";
import { ServicePage } from "@/app/(site)/services/components/ServicePage";
import { Metadata } from "next";

const serviceData = {
  hero: {
    title: "Bookkeeping & VAT Services Dubai",
    description:
      "VAT registration, bookkeeping, financial reporting, and tax compliance. We keep your numbers accurate and your business compliant with UAE regulations — so you can focus on growth.",
    image: HeroImage,
    imageAlt: "Bookkeeping and VAT services Dubai",
  },
  overview: {
    eyebrow: "About Our Accounting Services",
    title: "Financial clarity and tax compliance for UAE businesses",
    description:
      "The UAE introduced VAT in 2018, and businesses meeting threshold requirements must register, file returns, and maintain compliant records. Beyond VAT, companies need accurate financial records for bank relationships, investor reporting, free zone compliance, and audit requirements. Many businesses struggle with accounting not because they lack capability, but because they lack time. Founders focus on sales and operations while bookkeeping falls behind. Suddenly, VAT filing deadline arrives and there's a scramble to reconstruct months of transactions. Or the bank requests financial statements and there's nothing current to provide. We offer practical accounting support scaled to business size. Startups might need basic bookkeeping and quarterly VAT filing. Growing companies might need monthly management reports and cash flow forecasting. Established businesses might need full-service accounting with CFO-level insights. Our team includes UAE-qualified accountants who understand local requirements — Tally and Zoho Books proficiency, FTA portal navigation, and free zone reporting standards. We integrate with your existing systems rather than forcing software changes, and we communicate in business terms rather than accounting jargon.",
    highlights: [
      "VAT registration and deregistration",
      "Quarterly and monthly VAT filing",
      "Bookkeeping and transaction recording",
      "Financial statements preparation",
      "Management reporting and analysis",
      "Audit preparation and support",
    ],
    expectationTitle: "Numbers you can trust",
    expectationDescription:
      "Accurate books, on-time filings, and financial insights that help you make better decisions. We handle the accounting so you can focus on business.",
  },
  stats: [
    { value: "100%", label: "On-time VAT filing rate" },
    { value: "200+", label: "Businesses served" },
    { value: "Zero", label: "FTA penalties for clients" },
    { value: "Monthly", label: "Reporting available" },
  ],
  deliverables: {
    eyebrow: "Our Services",
    title: "Complete accounting and tax support",
    items: [
      {
        title: "VAT Registration",
        description:
          "Assessment of VAT registration requirements, FTA portal registration, Tax Registration Number (TRN) acquisition, and guidance on VAT obligations for your specific business activities.",
      },
      {
        title: "VAT Return Filing",
        description:
          "Preparation and submission of quarterly VAT returns to the Federal Tax Authority. We review transactions, calculate liability, ensure input tax recovery, and file on time — every time.",
      },
      {
        title: "Bookkeeping Services",
        description:
          "Regular recording of business transactions, bank reconciliation, accounts payable and receivable management, and maintenance of organized financial records in your preferred software.",
      },
      {
        title: "Financial Statements",
        description:
          "Preparation of balance sheets, income statements, and cash flow statements. Monthly, quarterly, or annual — formatted for bank requirements, investor presentations, or free zone compliance.",
      },
      {
        title: "Management Reporting",
        description:
          "Custom reports that matter for your business: profitability by service line, customer analysis, expense trends, cash flow forecasts. Insights that inform decisions, not just compliance documents.",
      },
      {
        title: "Audit Support",
        description:
          "Preparation for external audits, liaison with auditors, provision of schedules and documentation, and resolution of auditor queries. We make audit season smooth rather than stressful.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "From onboarding to ongoing support",
    items: [
      {
        step: "01",
        title: "Assessment & Setup",
        description:
          "We review your current financial situation, VAT status, and accounting needs. Then we set up systems, access, and processes for ongoing service.",
      },
      {
        step: "02",
        title: "Historical Cleanup",
        description:
          "If needed, we bring historical records up to date — catching up on bookkeeping backlog, correcting errors, and establishing clean opening balances.",
      },
      {
        step: "03",
        title: "Regular Processing",
        description:
          "Ongoing bookkeeping on your chosen frequency (weekly, fortnightly, monthly), with VAT returns filed before every deadline and reports delivered as scheduled.",
      },
      {
        step: "04",
        title: "Review & Advisory",
        description:
          "Periodic reviews to discuss financial performance, flag concerns early, and adjust services as your business evolves.",
      },
    ],
  },
  faqs: {
    eyebrow: "Common Questions",
    title: "Frequently asked questions about accounting and VAT",
    items: [
      {
        question: "Does my business need to register for VAT?",
        answer:
          "VAT registration is mandatory if your taxable supplies and imports exceed AED 375,000 over 12 months. Voluntary registration is available above AED 187,500. Some free zone companies have specific VAT considerations. We assess your situation and advise on registration timing and implications.",
      },
      {
        question: "What happens if I miss a VAT filing deadline?",
        answer:
          "Late filing incurs penalties: AED 1,000 for first offense, AED 2,000 for repeat offenses within 24 months. Late payment of VAT due adds further penalties. We've maintained 100% on-time filing for all clients — deadlines are non-negotiable in our service.",
      },
      {
        question: "Can you work with our existing accounting software?",
        answer:
          "Yes. We work with Zoho Books, QuickBooks, Xero, Tally, and Excel-based systems. If you're not yet on software, we can recommend and implement appropriate solutions. We adapt to your systems rather than forcing changes.",
      },
      {
        question: "How often should I update my books?",
        answer:
          "At minimum, monthly — in time for VAT quarters. Many businesses benefit from fortnightly or weekly updates for better visibility. We recommend frequency based on transaction volume and how actively you use financial data for decisions.",
      },
      {
        question: "Do you handle corporate tax as well?",
        answer:
          "Yes. With UAE corporate tax now in effect for financial years starting June 2023, we provide corporate tax registration, compliance advisory, and return preparation. This is especially relevant for businesses exceeding AED 375,000 annual profit threshold.",
      },
      {
        question: "What's the difference between bookkeeping and accounting?",
        answer:
          "Bookkeeping is transaction recording — data entry, categorization, reconciliation. Accounting includes analysis, reporting, and interpretation of that data. We offer both: accurate bookkeeping foundations plus meaningful financial insights.",
      },
    ],
  },
  cta: {
    title: "Get your finances in order",
    description:
      "Clean books, compliant VAT filing, and financial insights that help you grow. Book a consultation to discuss your accounting needs.",
    primaryLabel: "Book Free Consultation",
    primaryHref: "/contact",
    secondaryLabel: "Explore Other Services",
    secondaryHref: "/services",
  },
};

export const metadata: Metadata = {
  title: "Bookkeeping & VAT Services Dubai | Tax Compliance | Licorne",
  description:
    "Professional accounting and VAT services in Dubai. VAT registration, return filing, bookkeeping, and financial reporting. 100% on-time filing rate, zero FTA penalties.",
  keywords: [
    "vat registration dubai",
    "accounting services dubai",
    "vat filing uae",
    "bookkeeping dubai",
    "corporate tax uae",
    "financial reporting dubai",
  ],
  openGraph: {
    title: "Bookkeeping & VAT Services Dubai | Licorne Business Setup",
    description:
      "Expert accounting and VAT compliance services. Registration, filing, bookkeeping, and financial reporting for UAE businesses.",
    type: "website",
  },
};

export default function AccountingVatPage() {
  return <ServicePage {...serviceData} />;
}
