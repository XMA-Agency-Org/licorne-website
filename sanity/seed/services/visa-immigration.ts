import type { ServiceSeed, ServiceSeoSeed } from "../types";

export const service: ServiceSeed = {
  slug: "visa-immigration",
  category: "visa-immigration",
  order: 0,
  hero: {
    title: "UAE Visa & Immigration Services",
    description:
      "Investor visas, employment visas, family sponsorship, and Golden Visas. We navigate the UAE immigration system so your people can live and work in Dubai without delays or complications.",
    image: "visa-immigration.jpg",
    imageAlt: "Dubai visa and immigration services",
  },
  overview: {
    eyebrow: "About UAE Visas",
    title: "Residence visas for you, your team, and your family",
    description:
      "The UAE offers multiple pathways to residency, from standard employment visas (2-3 year validity) to the prestigious Golden Visa (5-10 years). As a business owner, you can sponsor your own investor visa through your company, bring employees on employment visas, and sponsor family members for dependent visas. The process involves multiple government departments — immigration, labor, medical, and Emirates ID — each with specific requirements and timelines. We coordinate the entire journey, from entry permit issuance to Emirates ID collection, ensuring nothing falls through the cracks. Whether you're relocating a team of 50 or just need your own residence sorted, we make the process predictable.",
    highlights: [
      "Investor/Partner visas for business owners",
      "Employment visas for staff and executives",
      "Family visas for spouses and dependents",
      "Golden Visa applications (5 and 10 year)",
      "Visa renewals and status changes",
      "Medical fitness and Emirates ID coordination",
    ],
    expectationTitle: "Our immigration approach",
    expectationDescription:
      "We handle the paperwork, coordinate appointments, and keep you informed at every stage. You focus on business while we manage the bureaucracy.",
  },
  stats: [
    { value: "2,000+", label: "Visas processed annually" },
    { value: "98%", label: "First-time approval rate" },
    { value: "5-10", label: "Days standard processing" },
    { value: "24hr", label: "Status update turnaround" },
  ],
  deliverables: {
    eyebrow: "Visa Services",
    title: "Complete immigration support for every visa type",
    items: [
      {
        title: "Investor & Partner Visas",
        description:
          "Residence visas for company shareholders and partners, processed through your business license. Includes entry permit, status change, medical, and Emirates ID.",
      },
      {
        title: "Employment Visas",
        description:
          "Work permits and residence visas for your employees, from labor card applications through MOHRE to final Emirates ID issuance. We handle quota management and contract attestation.",
      },
      {
        title: "Family & Dependent Visas",
        description:
          "Sponsorship for spouses, children, and parents. We manage the entire process from entry permit to residence stamp, including medical tests and ID registration.",
      },
      {
        title: "Golden Visa Applications",
        description:
          "Long-term residence (5 or 10 years) for investors, entrepreneurs, executives, and specialized talents. We assess eligibility and prepare complete application packages.",
      },
      {
        title: "Visa Renewals & Amendments",
        description:
          "Timely renewals before expiry, status changes (tourist to residence, employment to investor), and sponsor transfers when changing companies.",
      },
      {
        title: "Medical & Emirates ID",
        description:
          "Coordination of medical fitness tests at approved centers, Emirates ID application and biometrics appointment scheduling, and document collection.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "Your visa journey from application to Emirates ID",
    items: [
      {
        step: "01",
        title: "Eligibility Assessment",
        description:
          "We review your situation, confirm visa type eligibility, and outline required documents along with realistic timelines and costs.",
      },
      {
        step: "02",
        title: "Entry Permit",
        description:
          "We apply for your entry permit (if outside UAE) or change of status (if inside UAE on visit visa), typically approved within 2-3 days.",
      },
      {
        step: "03",
        title: "Medical & Biometrics",
        description:
          "We schedule your medical fitness test and Emirates ID biometrics, often on the same day to minimize your time commitment.",
      },
      {
        step: "04",
        title: "Visa Stamping & ID",
        description:
          "We submit for residence visa stamping and collect your Emirates ID once ready, delivering a complete package.",
      },
    ],
  },
  faqs: {
    eyebrow: "Common Questions",
    title: "Frequently asked questions about UAE visas",
    items: [
      {
        question: "How long does a standard visa process take?",
        answer:
          "From document submission to Emirates ID collection, typically 5-10 working days for employment and investor visas. Golden Visa applications take 2-4 weeks due to additional verification. Timeline assumes all documents are correct and complete.",
      },
      {
        question: "Do I need to be in the UAE to apply for a visa?",
        answer:
          "For initial applications, you can receive an entry permit while abroad and enter UAE to complete the process (medical, biometrics, stamping). For renewals and most changes, you need to be in the UAE. We coordinate timing to minimize your trips.",
      },
      {
        question: "What's the difference between investor and employment visa?",
        answer:
          "An investor visa is sponsored by your own company (you're both sponsor and sponsored). An employment visa is sponsored by another company as their employee. Investor visas are tied to your business license; employment visas are tied to your employer.",
      },
      {
        question: "How do I qualify for Golden Visa?",
        answer:
          "Key pathways include: investors with AED 2M+ in property or business, entrepreneurs with approved projects, executives earning AED 30,000+ monthly, and specialized talents in science, medicine, or arts. We assess your eligibility and recommend the strongest application route.",
      },
      {
        question: "Can I sponsor my family with an investor visa?",
        answer:
          "Yes. With a valid UAE residence visa and minimum salary/income requirements (typically AED 4,000+ or AED 3,000+ with accommodation), you can sponsor your spouse and children. Parents may also be sponsored under certain conditions.",
      },
      {
        question: "What happens if my visa is rejected?",
        answer:
          "Rejections are rare with proper preparation (our first-time approval rate is 98%). If issues arise, we identify the cause, address it, and resubmit. Common issues include document discrepancies, medical findings, or security checks — all manageable with the right approach.",
      },
    ],
  },
  cta: {
    title: "Ready to secure your UAE residence?",
    description:
      "Whether it's your first visa or your tenth renewal, we make the process smooth. Book a consultation to discuss your specific situation.",
    primaryLabel: "Book Free Consultation",
    primaryHref: "/contact",
    secondaryLabel: "Explore Other Services",
    secondaryHref: "/services",
  },
};

export const seo: ServiceSeoSeed = {
  title: "UAE Visa & Immigration Services | Golden Visa Dubai | Licorne",
  description:
    "Investor visas, employment visas, family visas, and Golden Visa applications in Dubai. 98% first-time approval rate. Complete immigration support from entry permit to Emirates ID.",
  keywords: [
    "dubai investor visa",
    "uae residence visa",
    "golden visa dubai",
    "employment visa dubai",
    "family visa uae",
    "emirates id application",
  ],
};
