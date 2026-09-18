import HeroImage from "@/public/images/heroes/company-liquidation.jpg";
import { ServicePage } from "@/app/(site)/services/components/ServicePage";
import { Metadata } from "next";

const serviceData = {
  hero: {
    title: "Company Liquidation & Closure Dubai",
    description:
      "Close your UAE business properly and completely. We handle license cancellation, visa terminations, bank closures, and final deregistrations — ensuring clean exit without lingering liabilities.",
    image: HeroImage,
    imageAlt: "Company liquidation services Dubai",
  },
  overview: {
    eyebrow: "About Company Liquidation",
    title: "Professional exit when it's time to close",
    description:
      "Closing a UAE business requires more than just stopping operations. Licenses must be formally cancelled, employee visas terminated, bank accounts closed, VAT deregistered, and various authorities notified in the correct sequence. Skip a step, and you face ongoing renewal fees, visa complications, or legal exposure. Many business owners discover closure is more complex than setup. The process varies significantly between mainland and free zone companies, with different timelines, document requirements, and approval processes. Free zones may require audited accounts and published notices; mainland requires immigration clearance and DED procedures. We manage the entire liquidation process — from initial assessment of obligations through to final cancellation certificates. Our approach ensures shareholders are protected from future claims, employees are properly offboarded, and there are no loose ends that resurface months later. Whether you're closing due to business completion, restructuring, or simply moving on, we make the exit as clean as your entry.",
    highlights: [
      "Full liquidation planning and execution",
      "Trade license cancellation",
      "Employee visa terminations",
      "Bank account closure coordination",
      "VAT and corporate tax deregistration",
      "Final clearance certificates",
    ],
    expectationTitle: "Clean exit, complete closure",
    expectationDescription:
      "Every obligation settled, every registration cancelled, every document obtained. We don't consider it done until your exit is complete and documented.",
  },
  stats: [
    { value: "200+", label: "Companies closed" },
    { value: "100%", label: "Clean closure rate" },
    { value: "8-16", label: "Weeks typical timeline" },
    { value: "Zero", label: "Post-closure liabilities" },
  ],
  deliverables: {
    eyebrow: "Our Services",
    title: "Complete company closure support",
    items: [
      {
        title: "Liquidation Planning",
        description:
          "Assessment of your company structure, outstanding obligations, and closure requirements. We create a step-by-step plan with timeline, dependencies, and cost estimates.",
      },
      {
        title: "Employee Offboarding",
        description:
          "Proper termination of employee visas, final settlement calculations, gratuity payments, and labour ban clearances. We ensure employees can transfer to new sponsors without issues.",
      },
      {
        title: "License Cancellation",
        description:
          "Formal application and processing of trade license cancellation with DED or free zone authority, including required approvals, document submissions, and final certificates.",
      },
      {
        title: "Shareholder Visa Termination",
        description:
          "Cancellation of investor and partner visas, including exit procedures, Emirates ID cancellation, and immigration file closure for shareholders remaining outside UAE.",
      },
      {
        title: "Financial Closure",
        description:
          "Bank account closure coordination, settlement of outstanding payables, collection of receivables, VAT deregistration, and final tax clearances with FTA.",
      },
      {
        title: "Final Documentation",
        description:
          "Collection and organization of all closure certificates, deregistration confirmations, and clearance letters. Complete documentation proving clean exit for your records.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "Structured closure from start to finish",
    items: [
      {
        step: "01",
        title: "Obligation Assessment",
        description:
          "We review your company situation: active visas, outstanding payments, contracts, bank balances, VAT status, and any compliance gaps that need resolution before closure begins.",
      },
      {
        step: "02",
        title: "Stakeholder Settlement",
        description:
          "Employee terminations, supplier settlements, and customer notifications. We ensure all third-party obligations are properly concluded.",
      },
      {
        step: "03",
        title: "Authority Cancellations",
        description:
          "Sequential cancellation across immigration, licensing authority, tax authority, and other relevant departments. Order matters — we process in correct sequence.",
      },
      {
        step: "04",
        title: "Final Clearance",
        description:
          "Collection of all cancellation certificates, bank closure confirmation, and final documentation. Your exit is complete and documented.",
      },
    ],
  },
  faqs: {
    eyebrow: "Common Questions",
    title: "Frequently asked questions about company liquidation",
    items: [
      {
        question: "How long does company closure take in Dubai?",
        answer:
          "Typical timelines: 8-12 weeks for straightforward closures, 12-16 weeks for companies with multiple visas or complex situations. Free zones sometimes process faster than mainland. Delays usually come from outstanding obligations (unpaid fees, active visas, pending VAT) rather than processing time.",
      },
      {
        question: "Can I close my company if I have outstanding debts?",
        answer:
          "Debts must be settled before formal liquidation. This includes supplier payments, employee settlements, government fees, and bank facilities. We help assess total obligations and can negotiate payment plans if needed. Attempting closure with outstanding debts creates legal exposure.",
      },
      {
        question: "What happens to employees when I close?",
        answer:
          "Employees must be properly terminated with notice period (or payment in lieu), final settlement including gratuity, and visa cancellation allowing them to transfer to new employers. We handle the paperwork and ensure compliance with UAE labour law requirements.",
      },
      {
        question: "Do I need to be in the UAE to close my company?",
        answer:
          "Most closure steps can be handled with Power of Attorney if you're outside UAE. However, some stages (particularly shareholder visa cancellation if you hold one) may require brief presence. We advise on timing to minimize trips if you've already relocated.",
      },
      {
        question: "What if my trade license already expired?",
        answer:
          "Expired licenses require renewal and payment of accumulated fines before cancellation can proceed. While frustrating, this is unavoidable — you cannot cancel an expired license without settling renewal fees first. We calculate total costs upfront so there are no surprises.",
      },
      {
        question: "Can I reopen a business after liquidation?",
        answer:
          "Yes. Company liquidation doesn't prevent you from starting a new business in UAE. However, you cannot simply reactivate a cancelled license — you would need to go through new company formation. Any debts or issues from the closed company must be fully resolved first.",
      },
    ],
  },
  cta: {
    title: "Need to close your UAE business?",
    description:
      "Exit properly with complete closure support. Book a consultation to assess your situation and understand the process, timeline, and costs involved.",
    primaryLabel: "Book Free Consultation",
    primaryHref: "/contact",
    secondaryLabel: "Explore Other Services",
    secondaryHref: "/services",
  },
};

export const metadata: Metadata = {
  title: "Company Liquidation Dubai | Business Closure UAE | Licorne",
  description:
    "Professional company liquidation services in Dubai. License cancellation, visa termination, bank closure, and complete business wind-up. Clean exit guaranteed.",
  keywords: [
    "company liquidation dubai",
    "close company uae",
    "business closure dubai",
    "license cancellation dubai",
    "wind up company uae",
    "deregister company dubai",
  ],
  openGraph: {
    title: "Company Liquidation Dubai | Licorne Business Setup",
    description:
      "Complete company closure support. License cancellation, visa termination, and clean exit documentation.",
    type: "website",
  },
};

export default function CompanyLiquidationPage() {
  return <ServicePage {...serviceData} />;
}
