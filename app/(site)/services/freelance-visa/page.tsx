import HeroImage from "@/public/images/heroes/visa-immigration.jpg";
import { ServicePage } from "@/app/(site)/services/components/ServicePage";
import { Metadata } from "next";

const serviceData = {
  hero: {
    title: "UAE Freelance Visa",
    description:
      "Work independently in Dubai with a freelance permit and residence visa in your own name. Legally invoice clients, sponsor your family and build your practice without setting up a full company.",
    image: HeroImage,
    imageAlt: "Freelance visa and permit in Dubai",
  },
  overview: {
    eyebrow: "About the Freelance Visa",
    title: "Independent professionals, legally set up in Dubai",
    description:
      "A freelance permit lets individuals in fields such as media, technology, education, design, consulting and marketing work for multiple clients in the UAE without an employer or a company license. The permit is issued by a free zone or by the Ministry of Human Resources for mainland, and it is paired with a residence visa so you can live in the UAE, open a bank account and sponsor dependents. Compared to a company setup it is cheaper and faster, with fewer ongoing obligations. The right choice of issuing authority depends on your profession, where your clients are, and whether you want the option to scale into a company later. We assess your situation, recommend the permit that fits, and process the permit and visa together.",
    highlights: [
      "Freelance permit in your own name",
      "Residence visa and Emirates ID included",
      "Legally invoice UAE and international clients",
      "Lower cost than a company license",
      "Sponsor spouse and children",
      "Options across Dubai free zones and mainland",
    ],
    expectationTitle: "The right permit for your profession",
    expectationDescription:
      "We match your activity to the authority that licenses it, compare package costs and visa allocations, and handle the application from permit to Emirates ID.",
  },
  stats: [
    { value: "1-2", label: "Weeks to permit issuance" },
    { value: "2", label: "Years visa validity" },
    { value: "98%", label: "First-time approval rate" },
    { value: "1", label: "Permit, multiple clients" },
  ],
  deliverables: {
    eyebrow: "What's Included",
    title: "Freelance permit and visa, handled together",
    items: [
      {
        title: "Activity & Authority Selection",
        description:
          "Guidance on which free zone or mainland authority licenses your profession, and which package gives you the visa allocation and cost structure you need.",
      },
      {
        title: "Freelance Permit Application",
        description:
          "Preparation of your CV, portfolio, qualifications and no-objection letter where required, and submission to the issuing authority through to permit issuance.",
      },
      {
        title: "Residence Visa Processing",
        description:
          "Entry permit, medical fitness test, biometrics, visa stamping and Emirates ID, coordinated alongside the permit so both are complete together.",
      },
      {
        title: "Bank Account Support",
        description:
          "Guidance on opening a personal or freelancer bank account to receive client payments, with documentation prepared for the bank's requirements.",
      },
      {
        title: "Family Sponsorship",
        description:
          "Dependent visas for your spouse and children under your freelance residence visa, subject to income and accommodation requirements.",
      },
      {
        title: "Renewals & Upgrades",
        description:
          "Annual permit renewal and visa renewal tracking, and a clear path to upgrade to a full company license when your practice grows.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "From application to working legally",
    items: [
      {
        step: "01",
        title: "Consultation",
        description:
          "We understand your profession, client base and plans, then recommend the issuing authority and package that fits.",
      },
      {
        step: "02",
        title: "Permit Application",
        description:
          "Your documents are prepared and submitted, and the freelance permit is typically issued within one to two weeks.",
      },
      {
        step: "03",
        title: "Visa Processing",
        description:
          "Entry permit, medical and biometrics completed, and your residence visa stamped.",
      },
      {
        step: "04",
        title: "Ready to Work",
        description:
          "Emirates ID delivered, bank account guidance provided, and you can begin invoicing clients legally.",
      },
    ],
  },
  faqs: {
    eyebrow: "Common Questions",
    title: "Frequently asked questions about the freelance visa",
    items: [
      {
        question: "Which professions qualify for a freelance permit?",
        answer:
          "Media and creative fields, technology and software, education and training, consulting, marketing and design are all covered, with each authority publishing its own list of activities. We confirm your activity is available before you apply.",
      },
      {
        question: "Do I need a degree or experience?",
        answer:
          "Most authorities ask for a CV and portfolio, and some require a relevant degree or proof of experience for specific activities such as education or technical consulting. We check requirements against your profile up front.",
      },
      {
        question: "Can I work for UAE companies on a freelance permit?",
        answer:
          "Yes. Unlike the remote work visa, a freelance permit allows you to contract with clients inside the UAE as well as abroad. If you are employed in the UAE you will need a no-objection certificate from your employer.",
      },
      {
        question: "Freelance permit or company license, which is better?",
        answer:
          "A freelance permit is cheaper and simpler if you work alone and do not need to hire staff or lease an office. A company license makes sense once you need employees, more visas, or a corporate structure for larger contracts. Many clients start with a permit and upgrade later.",
      },
      {
        question: "How much does a freelance visa cost?",
        answer:
          "Costs vary by authority and whether a visa is included, so we quote after understanding your requirements. Everything is itemised with no hidden fees.",
      },
    ],
  },
  cta: {
    title: "Ready to freelance in Dubai?",
    description:
      "Book a free consultation and we will recommend the right permit and get your application started.",
    primaryLabel: "Book Free Consultation",
    primaryHref: "/contact",
    secondaryLabel: "All Visa Services",
    secondaryHref: "/services/visa-immigration",
  },
};

export const metadata: Metadata = {
  title: "UAE Freelance Visa | Freelance Permit & Residence Visa Dubai | Licorne",
  description:
    "Freelance permit and residence visa in Dubai for independent professionals. Authority selection, permit application, visa and Emirates ID handled end to end.",
  keywords: [
    "freelance visa dubai",
    "freelance permit uae",
    "freelancer visa uae",
    "dubai freelance license",
    "self employed visa dubai",
  ],
  openGraph: {
    title: "UAE Freelance Visa | Licorne Corporate Services",
    description:
      "Work independently in Dubai with a freelance permit and residence visa in your own name.",
    type: "website",
  },
};

export default function FreelanceVisaPage() {
  return <ServicePage {...serviceData} />;
}
