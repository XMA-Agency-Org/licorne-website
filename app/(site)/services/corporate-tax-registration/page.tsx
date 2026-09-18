import HeroImage from "@/public/images/heroes/accounting-vat.jpg";
import { ServicePage } from "@/app/(site)/services/components/ServicePage";
import { Metadata } from "next";

const serviceData = {
  hero: {
    title: "Corporate Tax Registration UAE",
    description:
      "Register your company with the Federal Tax Authority, obtain your Tax Registration Number and file your returns on time. We handle registration, qualifying-status assessment and annual filing so you stay compliant and avoid penalties.",
    image: HeroImage,
    imageAlt: "Corporate tax registration in the UAE",
  },
  overview: {
    eyebrow: "About Corporate Tax",
    title: "Registration is mandatory. Getting it right is optional.",
    description:
      "Since June 2023 every company in the UAE, including free zone and offshore entities, must register for corporate tax with the Federal Tax Authority and file an annual return, regardless of whether any tax is due. Taxable profits above AED 375,000 are taxed at 9%, profits below that at 0%, and qualifying free zone persons may benefit from a 0% rate on qualifying income if they meet substance and reporting conditions. Late registration attracts an AED 10,000 penalty, and late filing adds more. Beyond the registration itself, the questions that matter are whether your free zone company qualifies for 0%, how related-party transactions are documented, and whether small business relief applies. We register your company, assess your position, and set up the filing calendar so nothing is missed.",
    highlights: [
      "FTA registration and Tax Registration Number",
      "Qualifying free zone person assessment",
      "Small business relief eligibility check",
      "Annual corporate tax return preparation and filing",
      "Transfer pricing and related-party documentation",
      "Penalty avoidance and deadline tracking",
    ],
    expectationTitle: "Compliant from day one",
    expectationDescription:
      "Registration completed within the statutory deadline, a clear view of your effective tax rate, and returns filed on time every year.",
  },
  stats: [
    { value: "9%", label: "Rate above AED 375,000" },
    { value: "0%", label: "Rate on qualifying income" },
    { value: "AED 10k", label: "Late registration penalty avoided" },
    { value: "9", label: "Months after year-end to file" },
  ],
  deliverables: {
    eyebrow: "What's Included",
    title: "Registration, assessment and annual filing",
    items: [
      {
        title: "FTA Registration",
        description:
          "Creation of your EmaraTax account, submission of the registration application with license, MOA and ownership details, and issuance of your Tax Registration Number.",
      },
      {
        title: "Tax Position Assessment",
        description:
          "Analysis of your activities, revenue sources and free zone status to determine whether you qualify for the 0% rate, small business relief, or fall under the standard 9% regime.",
      },
      {
        title: "Annual Return Filing",
        description:
          "Preparation and submission of your corporate tax return within nine months of your financial year-end, reconciled to your audited or management accounts.",
      },
      {
        title: "Transfer Pricing Support",
        description:
          "Documentation of related-party transactions and connected-person payments to meet arm's-length requirements and FTA disclosure rules.",
      },
      {
        title: "Group & Multi-Entity Structuring",
        description:
          "Advice on tax groups, qualifying group relief and how holding, operating and offshore entities interact under the corporate tax regime.",
      },
      {
        title: "Deregistration & Amendments",
        description:
          "Updating your registration when ownership or activities change, and deregistering correctly if the company is liquidated.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "Corporate tax registration in four steps",
    items: [
      {
        step: "01",
        title: "Document Collection",
        description:
          "Trade license, MOA, passport and Emirates ID of the authorised signatory, and financial year details gathered and verified.",
      },
      {
        step: "02",
        title: "EmaraTax Registration",
        description:
          "Account created and registration application submitted to the FTA with all supporting documents.",
      },
      {
        step: "03",
        title: "TRN Issuance",
        description:
          "Tax Registration Number issued, typically within 20 working days, and your tax certificate delivered.",
      },
      {
        step: "04",
        title: "Filing Calendar",
        description:
          "Your first tax period and return deadline confirmed, and annual filing scheduled with our bookkeeping team.",
      },
    ],
  },
  faqs: {
    eyebrow: "Common Questions",
    title: "Frequently asked questions about corporate tax",
    items: [
      {
        question: "Does my free zone company need to register for corporate tax?",
        answer:
          "Yes. All UAE companies must register, including free zone and offshore entities. Registration does not mean you will pay tax; qualifying free zone persons can still benefit from 0% on qualifying income, but only if they are registered and file returns.",
      },
      {
        question: "What is the deadline to register?",
        answer:
          "Deadlines depend on the month your license was issued and are set out in the FTA's registration timeline. Missing your deadline attracts an AED 10,000 penalty, so we recommend registering as soon as your license is issued.",
      },
      {
        question: "What is small business relief?",
        answer:
          "Companies with revenue below AED 3 million in the relevant tax period can elect to be treated as having no taxable income, simplifying compliance. The relief is available until the end of 2026 and does not apply to qualifying free zone persons or members of multinational groups.",
      },
      {
        question: "When do I need to file my first return?",
        answer:
          "Within nine months of the end of your first tax period. For a company with a calendar financial year, the first return for 2024 was due by 30 September 2025. We confirm your specific dates at registration.",
      },
      {
        question: "Do I need audited accounts?",
        answer:
          "Audited financial statements are mandatory for qualifying free zone persons and companies with revenue above AED 50 million. Others can file on the basis of management accounts, though many free zones require an audit for license renewal regardless. Our bookkeeping and VAT team can prepare what you need.",
      },
    ],
  },
  cta: {
    title: "Register before the deadline",
    description:
      "Book a free consultation and we will confirm your registration deadline, assess your tax position and get you registered.",
    primaryLabel: "Book Free Consultation",
    primaryHref: "/contact",
    secondaryLabel: "Bookkeeping & VAT",
    secondaryHref: "/services/accounting-vat",
  },
};

export const metadata: Metadata = {
  title: "Corporate Tax Registration UAE | FTA Registration & Filing | Licorne",
  description:
    "Corporate tax registration with the UAE Federal Tax Authority, qualifying free zone assessment and annual return filing. Avoid the AED 10,000 late registration penalty.",
  keywords: [
    "corporate tax registration uae",
    "fta registration dubai",
    "uae corporate tax",
    "tax registration number uae",
    "corporate tax filing dubai",
    "qualifying free zone person",
  ],
  openGraph: {
    title: "Corporate Tax Registration UAE | Licorne Corporate Services",
    description:
      "FTA registration, tax position assessment and annual corporate tax filing for UAE companies.",
    type: "website",
  },
};

export default function CorporateTaxRegistrationPage() {
  return <ServicePage {...serviceData} />;
}
