import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import HeroImage from "@/public/images/heroes/faq.jpg";
import { Metadata } from "next";

const faqCategories = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What's the difference between mainland and free zone companies?",
        answer:
          "Mainland companies (DED license) can trade freely throughout the UAE and work directly with government entities. They require a local service agent for most activities. Free zone companies offer 100% foreign ownership and tax benefits but face restrictions selling directly to the UAE mainland market (typically requiring a distributor). Choice depends on your customers: UAE-based = consider mainland; international/export = free zone works well.",
      },
      {
        question: "How long does it take to set up a company in Dubai?",
        answer:
          "License issuance: 3-10 days depending on jurisdiction. Full setup including visa and bank account: 4-6 weeks standard, 2-3 weeks express. The bank account is usually the longest part. We provide realistic timelines based on your specific situation during consultation.",
      },
      {
        question: "Can I set up a company remotely without visiting Dubai?",
        answer:
          "Company registration and license issuance: Yes, via Power of Attorney. Visa processing: No, requires physical presence for biometrics and medical tests. Bank account: Usually requires in-person meeting. Many founders do initial setup remotely, then visit for 3-5 days to complete visa and banking.",
      },
      {
        question: "What documents do I need to start?",
        answer:
          "Minimum requirements: valid passport (6+ months validity), passport-size photo, proof of address. Some activities require additional documents: educational certificates for professional licenses, NOC from current sponsor if changing visa status, professional credentials for regulated activities. We provide a complete checklist based on your setup.",
      },
      {
        question: "Do I need to be in Dubai to run my business?",
        answer:
          "No. Many business owners manage UAE companies remotely. Your visa allows you to stay outside the UAE for up to 6 months at a time (standard visa) or longer with Golden Visa. You'll need someone to handle local requirements — either an employee or our PRO services.",
      },
    ],
  },
  {
    category: "Costs & Fees",
    questions: [
      {
        question: "How much does it cost to start a business in Dubai?",
        answer:
          "First-year total: AED 15,000-60,000 for most setups. This includes license, office, visa(s), and our service fees. Budget setups (basic free zone, virtual office, 1 visa) start around AED 15,000. Standard setups with 2-3 visas run AED 30,000-45,000. Premium setups (DIFC, physical office) can exceed AED 100,000. See our detailed cost guide for breakdowns.",
      },
      {
        question: "What are the ongoing annual costs?",
        answer:
          "License renewal: AED 10,000-30,000 depending on jurisdiction. Office rent: AED 5,000-50,000 depending on type. Visa renewals: AED 2,000-4,000 per visa every 2-3 years. Accounting/VAT: AED 3,000-15,000 if outsourced. PRO services: AED 500-2,000/month if needed. Total ongoing: typically 60-80% of first-year cost.",
      },
      {
        question: "Are there any hidden fees I should know about?",
        answer:
          "We provide all-inclusive quotes. Government fees that catch people off-guard: establishment card (~AED 2,000), e-channel fees (~AED 1,500), Emirates ID (~AED 370 per person), and medical tests (~AED 500 per person). These are standard — we include them in our estimates. Ask about our fee guarantee.",
      },
      {
        question: "Can I start with minimal investment and scale up?",
        answer:
          "Yes. Start with basic license and virtual office, add visas as you hire, upgrade office as you grow. Most free zones allow adding activities and visas to existing licenses. We help clients scale from solo setups to full teams without starting over.",
      },
    ],
  },
  {
    category: "Free Zones",
    questions: [
      {
        question: "Which free zone should I choose?",
        answer:
          "Depends on your business type, budget, and needs. DMCC: Best for trading and commodities, premium positioning. IFZA/Meydan: Budget-friendly, good for consultancies. DIFC: Financial services, requires larger investment. Dubai Silicon Oasis: Tech companies. JAFZA: Logistics and trading with warehouse needs. We recommend based on your specific situation.",
      },
      {
        question: "What activities can I do in a free zone?",
        answer:
          "Most commercial activities are available across general free zones (DMCC, IFZA, Meydan). Some free zones are industry-specific: Media City for media, Internet City for tech, Healthcare City for medical. Regulated activities (finance, healthcare) have specific requirements. We help match activities to appropriate free zones.",
      },
      {
        question: "Can a free zone company sell to customers in UAE?",
        answer:
          "Directly to UAE mainland customers: Limited. You typically need a local distributor or pay 5% customs duty on goods. Services are more flexible. Selling to other free zone companies: Yes. Exporting internationally: Yes, with full benefits. If your primary market is UAE consumers or businesses, mainland license may be better.",
      },
      {
        question: "What's the 0% tax benefit? Is it really zero?",
        answer:
          "Corporate tax: Qualifying free zone businesses pay 0% on qualifying income (vs 9% standard UAE corporate tax). VAT: Still applies at 5% on taxable supplies. Personal income tax: 0% (UAE-wide, not just free zones). The tax benefit is real and significant, but requires maintaining qualifying status — we advise on compliance.",
      },
    ],
  },
  {
    category: "Visas & Immigration",
    questions: [
      {
        question: "How many visas can I get with my company?",
        answer:
          "Depends on office space and free zone rules. Virtual office: typically 1-3 visas. Flexi desk: 3-6 visas. Physical office: based on square footage, often unlimited for practical purposes. Mainland varies by Ejari. We help structure setups to match your visa needs.",
      },
      {
        question: "What types of visas are available?",
        answer:
          "Investor/Partner visa: For company shareholders. Employment visa: For employees you hire. Golden Visa: 10-year visa for qualifying investors/talents. Family visa: Sponsor spouse, children, parents (Golden Visa). Freelance visa: For individual service providers. Each has different requirements and benefits.",
      },
      {
        question: "Can I sponsor my family?",
        answer:
          "Standard visa: Sponsor spouse and children under 18 (sons) or 21 (daughters, if unmarried). Golden Visa: Also sponsor parents, plus extended family benefits. Requirements: minimum salary threshold (typically AED 4,000/month), adequate housing. We process family visas as part of your setup.",
      },
      {
        question: "What is the Golden Visa and how do I qualify?",
        answer:
          "10-year renewable residence visa with premium benefits: no sponsor required, sponsor parents, stay abroad longer. Qualification routes: AED 2M+ property investment, AED 2M+ company capital, specialized talent (doctors, scientists, artists), entrepreneurs with successful exits, outstanding students. We assess eligibility during consultation.",
      },
      {
        question: "How long does visa processing take?",
        answer:
          "Entry permit: 3-5 days. Status change (if in UAE): 1-2 days. Medical test: Same day, results in 2-3 days. Emirates ID: 5-7 days. Visa stamping: 2-3 days. Total from start to stamped visa: 10-14 days if in UAE, potentially longer if entering on new entry permit.",
      },
    ],
  },
  {
    category: "Banking",
    questions: [
      {
        question: "Why is opening a bank account difficult in UAE?",
        answer:
          "Enhanced compliance requirements (anti-money laundering, counter-terrorism financing). Banks scrutinize: business model clarity, source of funds, expected transactions, beneficial ownership. New companies without UAE track record are higher risk. Rejection rate: 40%+ for unprepared applications. We prepare documentation and make introductions to improve approval odds significantly.",
      },
      {
        question: "Which banks do you work with?",
        answer:
          "We have relationships with Emirates NBD, ADCB, Mashreq, RAK Bank, CBD, FAB, and others including international banks. Bank selection depends on your business type — some banks are better for trading, others for services or tech. We match you with banks most likely to approve your profile.",
      },
      {
        question: "How long does account opening take?",
        answer:
          "Application to active account: 2-4 weeks typical. Fastest: 1-2 weeks with priority banks. Slowest: 6-8 weeks with complex cases or additional documentation requests. We follow up actively to minimize delays.",
      },
      {
        question: "What if my bank application is rejected?",
        answer:
          "We analyze the rejection reason, address issues, and either reapply to the same bank or recommend a better-suited alternative. Our pre-screening reduces rejection risk, but if it happens, we don't charge for the follow-up application. Most rejections are recoverable with proper preparation.",
      },
    ],
  },
  {
    category: "Operations & Compliance",
    questions: [
      {
        question: "Do I need to register for VAT?",
        answer:
          "Mandatory if taxable supplies exceed AED 375,000 in 12 months. Voluntary registration available above AED 187,500. Most active businesses will eventually need VAT registration. We handle registration and ongoing filing. Non-compliance penalties are significant — don't ignore this.",
      },
      {
        question: "What about corporate tax?",
        answer:
          "UAE corporate tax (9%) applies to profits above AED 375,000 for financial years starting June 2023. Qualifying free zone businesses can maintain 0% rate on qualifying income. Registration required regardless of whether you owe tax. We provide corporate tax registration and compliance support.",
      },
      {
        question: "What ongoing paperwork does my company need?",
        answer:
          "Annual: license renewal, office rent renewal. Periodic: visa renewals (every 2-3 years), VAT returns (quarterly), corporate tax return (annual). As needed: activity amendments, shareholder changes, document attestations. Our PRO services handle all ongoing compliance.",
      },
      {
        question: "Can I change my company structure later?",
        answer:
          "Yes. Common changes: add/remove activities, change shareholders, update trade name, switch office type, convert mainland to free zone (or vice versa). Some changes are amendments (straightforward), others require new company formation. We advise on the best approach for your situation.",
      },
    ],
  },
  {
    category: "Working with Licorne",
    questions: [
      {
        question: "What's included in your service fees?",
        answer:
          "Full setup management: consultation, document preparation, government submissions, visa processing, bank introduction, and issue resolution. Government fees are additional (we provide exact amounts upfront). Our fee covers the complexity — if applications need resubmission or additional documents, we handle it without extra charges.",
      },
      {
        question: "How do I get started?",
        answer:
          "Book a free consultation (30 minutes). We discuss your business, recommend structure, and provide cost/timeline estimate. If you proceed, we send an engagement letter and document checklist. Most clients go from first call to started paperwork within a week.",
      },
      {
        question: "Do you provide ongoing support after setup?",
        answer:
          "Yes. Most clients stay with us for ongoing PRO services, license renewals, visa additions, and compliance support. We offer monthly packages or pay-per-service. You're not obligated to continue — but most find it easier than managing government relations themselves.",
      },
      {
        question: "What if something goes wrong during setup?",
        answer:
          "We've done 500+ setups — most issues are predictable and manageable. Rejected applications, additional document requests, authority delays — these happen and we handle them. Our fees include resolution of normal complications. Truly exceptional situations are discussed case-by-case, but we don't leave clients stuck.",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Dubai Business Setup FAQ | Common Questions Answered | Licorne",
  description:
    "Comprehensive FAQ about starting a business in Dubai. Questions about company formation, visas, costs, free zones, banking, and compliance answered by experts.",
  keywords: [
    "dubai business setup faq",
    "company formation questions dubai",
    "free zone faq",
    "dubai visa questions",
    "start business dubai questions",
    "uae company setup help",
  ],
  openGraph: {
    title: "Dubai Business Setup FAQ | Licorne Business Setup",
    description:
      "All your questions about starting a business in Dubai answered. Company formation, visas, costs, free zones, banking, and more.",
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about starting and running a business in Dubai. Can't find your answer? Book a free consultation."
        image={HeroImage}
        imageAlt="Dubai business setup FAQ"
        height="small"
      />

      <section className="py-16 bg-accent-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {faqCategories.map((cat) => (
              <a
                key={cat.category}
                href={`#${cat.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 bg-white border border-primary/20 rounded-sm text-secondary hover:bg-primary hover:text-white transition-colors text-sm font-medium"
              >
                {cat.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {faqCategories.map((cat) => (
        <section
          key={cat.category}
          id={cat.category.toLowerCase().replace(/\s+/g, "-")}
          className="py-16 lg:py-24 border-b border-primary/10 last:border-0"
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl text-secondary mb-8">{cat.category}</h2>
            <div className="space-y-6">
              {cat.questions.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-primary/20 rounded-sm p-6"
                >
                  <h3 className="text-2xl text-secondary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl text-white mb-6">
            Still have questions?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Book a free 30-minute consultation. We'll answer your specific questions
            and provide a clear recommendation for your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white font-medium rounded-sm hover:bg-white hover:text-secondary transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/how-it-works"
              className="inline-block px-8 py-4 bg-transparent border border-white text-white font-medium rounded-sm hover:bg-white hover:text-secondary transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
