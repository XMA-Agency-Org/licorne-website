import HeroImage from "@/public/images/heroes/visa-immigration.jpg";
import { ServicePage } from "@/app/(site)/services/components/ServicePage";
import { Metadata } from "next";

const serviceData = {
  hero: {
    title: "UAE Remote Work Visa",
    description:
      "Live in Dubai while working for an employer or business based abroad. A one-year renewable residence visa for remote employees and business owners, with no UAE company required.",
    image: HeroImage,
    imageAlt: "Remote work visa for Dubai",
  },
  overview: {
    eyebrow: "About the Remote Work Visa",
    title: "Relocate to Dubai without changing your job",
    description:
      "The UAE Virtual Working Programme, commonly called the remote work visa, lets employees and business owners based outside the UAE live in Dubai for a year at a time while continuing to work for their overseas employer or company. You keep your existing job and income, gain UAE residency and an Emirates ID, and can rent property, open a bank account and enrol children in school. The main requirements are proof of employment or business ownership abroad, a minimum monthly income of USD 3,500, and valid health insurance. Because the visa is issued on your own sponsorship rather than a UAE company, the application looks different from a standard employment visa and is often refused for avoidable documentation reasons. We prepare the file correctly the first time and manage the process through to Emirates ID.",
    highlights: [
      "One-year residence visa, renewable",
      "No UAE employer or company required",
      "Eligible for employees and business owners abroad",
      "Rent property, open bank accounts and sponsor family",
      "Emirates ID and health insurance included in setup",
      "Guidance on the USD 3,500 income requirement",
    ],
    expectationTitle: "A correctly prepared application",
    expectationDescription:
      "We review your employment contract, payslips and bank statements against the exact criteria before submission, so the application is approved without back-and-forth.",
  },
  stats: [
    { value: "1", label: "Year validity, renewable" },
    { value: "$3,500", label: "Minimum monthly income" },
    { value: "2-4", label: "Weeks typical processing" },
    { value: "0", label: "UAE company needed" },
  ],
  deliverables: {
    eyebrow: "What's Included",
    title: "Complete remote work visa support",
    items: [
      {
        title: "Eligibility Review",
        description:
          "We check your employment or ownership evidence, income history and passport validity against the programme criteria before you commit to the application.",
      },
      {
        title: "Application File Preparation",
        description:
          "Employment contract or proof of ownership, three months of payslips and bank statements, health insurance and photographs assembled and formatted for submission.",
      },
      {
        title: "Submission & Follow-up",
        description:
          "Application lodged with the relevant immigration authority, tracked through approval, and any additional information requests handled on your behalf.",
      },
      {
        title: "Health Insurance",
        description:
          "Arrangement of UAE-compliant health insurance that meets the programme requirement, with options for family members if they will join you.",
      },
      {
        title: "Medical & Emirates ID",
        description:
          "Medical fitness test and Emirates ID biometrics booked and coordinated once the entry permit is issued.",
      },
      {
        title: "Family & Renewal",
        description:
          "Dependent visas for spouse and children under your remote work visa, and renewal management each year so your residency continues without a gap.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "Your remote work visa in four steps",
    items: [
      {
        step: "01",
        title: "Eligibility Check",
        description:
          "A short call to confirm your employment situation and income meet the criteria, followed by a tailored document list.",
      },
      {
        step: "02",
        title: "File Preparation",
        description:
          "We collect and review your documents, arrange health insurance and prepare the application for submission.",
      },
      {
        step: "03",
        title: "Approval & Entry Permit",
        description:
          "Application submitted and approved, and your entry permit issued so you can travel to the UAE or change status if already here.",
      },
      {
        step: "04",
        title: "Residency & Emirates ID",
        description:
          "Medical test, biometrics and visa stamping completed, and your Emirates ID delivered.",
      },
    ],
  },
  faqs: {
    eyebrow: "Common Questions",
    title: "Frequently asked questions about the remote work visa",
    items: [
      {
        question: "Who is eligible for the remote work visa?",
        answer:
          "Employees with a contract of at least one year with an employer outside the UAE, and owners of a company registered outside the UAE for at least one year. In both cases you need a minimum income of USD 3,500 per month evidenced by payslips and bank statements.",
      },
      {
        question: "Can I work for a UAE company on this visa?",
        answer:
          "No. The visa is specifically for work performed for entities outside the UAE. If you plan to take on UAE clients or employment you will need a freelance permit or an employment visa, and we can advise on the switch.",
      },
      {
        question: "Can I bring my family?",
        answer:
          "Yes. Once your remote work visa is issued you can sponsor your spouse and children as dependents, subject to the usual accommodation and insurance requirements.",
      },
      {
        question: "Do I pay tax in the UAE?",
        answer:
          "The UAE has no personal income tax. Your tax position in your home country depends on its residency rules and any double taxation agreement with the UAE, so we recommend confirming this with a tax adviser before you relocate.",
      },
      {
        question: "How long does the visa take?",
        answer:
          "Typically two to four weeks from submission to visa stamping, depending on how quickly your documents are ready and immigration processing times.",
      },
    ],
  },
  cta: {
    title: "Ready to work from Dubai?",
    description:
      "Book a free consultation and we will confirm your eligibility and start your application.",
    primaryLabel: "Book Free Consultation",
    primaryHref: "/contact",
    secondaryLabel: "All Visa Services",
    secondaryHref: "/services/visa-immigration",
  },
};

export const metadata: Metadata = {
  title: "UAE Remote Work Visa | Virtual Working Programme Dubai | Licorne",
  description:
    "One-year renewable Dubai residence visa for remote employees and business owners working for companies abroad. Eligibility check, application and Emirates ID handled.",
  keywords: [
    "remote work visa uae",
    "virtual working programme dubai",
    "dubai remote work visa",
    "digital nomad visa uae",
    "work remotely from dubai",
  ],
  openGraph: {
    title: "UAE Remote Work Visa | Licorne Corporate Services",
    description:
      "Live in Dubai while working for an employer or company abroad. Application prepared and processed end to end.",
    type: "website",
  },
};

export default function RemoteWorkVisaPage() {
  return <ServicePage {...serviceData} />;
}
