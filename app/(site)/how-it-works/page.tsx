import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import HeroImage from "@/public/images/heroes/how-it-works.jpg";
import { Metadata } from "next";

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    duration: "30 minutes",
    description:
      "We start with a conversation about your business. What do you do? Who are your customers? What's your budget? Where do you want to be based? This helps us recommend the right structure.",
    whatWeDiscuss: [
      "Your business activities and target market",
      "Mainland vs free zone decision",
      "Visa requirements for you and your team",
      "Office needs and budget constraints",
      "Timeline expectations",
    ],
    outcome: "Clear recommendation with cost estimate",
  },
  {
    step: "02",
    title: "Documentation & Preparation",
    duration: "2-5 days",
    description:
      "We prepare your application package. You provide passport copies, photos, and basic information. We handle the rest — trade name reservation, MOA drafting, and authority applications.",
    whatWeHandle: [
      "Trade name reservation and approval",
      "Memorandum of Association (MOA)",
      "Initial approval applications",
      "Office/Ejari documentation",
      "Government fee payments",
    ],
    outcome: "Complete application package ready for submission",
  },
  {
    step: "03",
    title: "License Issuance",
    duration: "3-10 days",
    description:
      "We submit your application and track it through government processing. Free zones often process in 3-5 days; mainland licenses take 5-10 days. You receive your trade license.",
    whatHappens: [
      "Application submission to authorities",
      "Government review and approval",
      "Fee settlement",
      "License issuance",
      "Company registration completion",
    ],
    outcome: "Trade license in hand — your company is officially registered",
  },
  {
    step: "04",
    title: "Visa Processing",
    duration: "7-14 days per visa",
    description:
      "With your license active, we process investor/employee visas. This includes entry permit, status change (if in UAE), medical test, Emirates ID, and residence visa stamping.",
    whatWeHandle: [
      "Entry permit application",
      "Status change (if currently in UAE on visit)",
      "Medical fitness test coordination",
      "Emirates ID application",
      "Residence visa stamping",
    ],
    outcome: "UAE residence visa and Emirates ID — you can legally live and work",
  },
  {
    step: "05",
    title: "Bank Account Opening",
    duration: "2-4 weeks",
    description:
      "The trickiest part of setup. We prepare your documentation, introduce you to appropriate banks, and support through the account opening process until you have an active account.",
    whatWeHandle: [
      "Documentation preparation",
      "Bank selection and introduction",
      "Application support",
      "Follow-up on pending applications",
      "Account activation confirmation",
    ],
    outcome: "Active corporate bank account — you can receive payments and operate",
  },
  {
    step: "06",
    title: "Operational Support",
    duration: "Ongoing",
    description:
      "Your business is running. We remain available for ongoing needs: license renewals, visa additions, PRO services, and any government relations. Most clients stay with us long-term.",
    ongoingServices: [
      "Annual license renewals",
      "Additional visa processing",
      "PRO and government services",
      "Document attestation",
      "Business amendments",
    ],
    outcome: "Continued compliance and operational support",
  },
];

const timelineOptions = [
  {
    type: "Express Setup",
    timeline: "2-3 weeks",
    description: "Fastest possible setup for urgent needs",
    bestFor: "Businesses with time-sensitive opportunities",
    includes: "Priority processing, expedited visa, banking introductions",
  },
  {
    type: "Standard Setup",
    timeline: "4-6 weeks",
    description: "Normal processing with efficient handling",
    bestFor: "Most businesses without urgent deadlines",
    includes: "Full service setup with typical government timelines",
  },
  {
    type: "Budget Setup",
    timeline: "6-8 weeks",
    description: "Cost-optimized with flexible timing",
    bestFor: "Budget-conscious founders with flexible start dates",
    includes: "Same deliverables, optimized for cost over speed",
  },
];

const faqs = [
  {
    question: "Can I complete setup remotely without visiting Dubai?",
    answer:
      "Partially. Company registration and license issuance can be done remotely with Power of Attorney. However, visa processing requires physical presence for biometrics and medical tests. Many founders do initial setup remotely, then visit for 3-5 days to complete visas.",
  },
  {
    question: "What documents do I need to provide?",
    answer:
      "Minimum requirements: passport copy (valid 6+ months), passport-size photo, and proof of address. Some activities require educational certificates or professional credentials. We provide a complete checklist based on your specific setup.",
  },
  {
    question: "What if I want to make changes after setup?",
    answer:
      "Everything is changeable: activities can be added/removed, shareholders can be modified, trade names can be updated, and you can even switch jurisdictions. These are normal amendments that we process regularly.",
  },
  {
    question: "How involved do I need to be during setup?",
    answer:
      "Minimally. After the initial consultation, you provide documents and we handle everything else. You'll sign some paperwork and attend the bank meeting, but we manage the government interactions.",
  },
  {
    question: "What happens if something goes wrong?",
    answer:
      "We've done this 500+ times — most issues are predictable and manageable. If authorities request additional documents or reject initial applications, we handle it. Our fees cover resolution of normal complications.",
  },
];

export const metadata: Metadata = {
  title: "How Dubai Business Setup Works | Step-by-Step Process | Licorne",
  description:
    "Complete guide to the Dubai business setup process. Step-by-step timeline from consultation to operating company. Understand exactly what happens and when.",
  keywords: [
    "dubai business setup process",
    "how to start company dubai",
    "dubai company formation steps",
    "business setup timeline dubai",
    "register company dubai process",
    "start business dubai guide",
  ],
  openGraph: {
    title: "How Dubai Business Setup Works | Licorne Business Setup",
    description:
      "Step-by-step guide to starting a business in Dubai. From consultation to operating company in 4-6 weeks.",
    type: "website",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Process Guide"
        title="How Dubai Business Setup Works"
        description="From first conversation to operational business in 4-6 weeks. Here's exactly what happens at each stage — no surprises, no hidden steps."
        image={HeroImage}
        imageAlt="Dubai business setup process"
        height="medium"
      />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <Eyebrow>The Process</Eyebrow>
            <h2 className="text-3xl lg:text-4xl text-secondary mt-3 leading-tight">
              Six steps from idea to operating business
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Setting up a Dubai company involves multiple authorities, documents, and
              approvals. We've systematized the process so you always know what's
              happening and what comes next.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="border border-primary/20 rounded-sm overflow-hidden bg-white"
              >
                <div className="grid lg:grid-cols-4">
                  <div className="bg-secondary p-8 flex flex-col justify-center">
                    <div className="text-primary text-5xl">{step.step}</div>
                    <h3 className="text-2xl text-white mt-2">{step.title}</h3>
                    <div className="text-white/70 text-sm mt-2">
                      Duration: {step.duration}
                    </div>
                  </div>
                  <div className="lg:col-span-3 p-8">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-secondary text-sm uppercase tracking-wider mb-3">
                          {step.whatWeDiscuss
                            ? "What we discuss"
                            : step.whatWeHandle
                            ? "What we handle"
                            : step.whatHappens
                            ? "What happens"
                            : "Ongoing services"}
                        </h4>
                        <ul className="space-y-2">
                          {(
                            step.whatWeDiscuss ||
                            step.whatWeHandle ||
                            step.whatHappens ||
                            step.ongoingServices
                          )?.map((item, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-600">
                              <span className="text-primary mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-accent-50 p-4 rounded-sm">
                        <h4 className="text-secondary text-sm uppercase tracking-wider mb-2">
                          Outcome
                        </h4>
                        <p className="text-gray-600 text-sm">{step.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-accent-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Eyebrow>Timeline Options</Eyebrow>
            <h2 className="text-3xl lg:text-4xl text-secondary mt-3">
              Choose Your Setup Speed
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Timelines vary based on urgency and budget. We offer different tracks
              to match your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {timelineOptions.map((option) => (
              <div
                key={option.type}
                className="bg-white border border-primary/20 rounded-sm p-8"
              >
                <h3 className="text-2xl text-secondary">{option.type}</h3>
                <div className="text-4xl text-primary mt-2">{option.timeline}</div>
                <p className="text-gray-600 mt-4">{option.description}</p>
                <div className="mt-6 pt-6 border-t border-primary/10">
                  <div className="text-sm text-gray-500 mb-2">Best for:</div>
                  <p className="text-secondary text-sm font-medium">{option.bestFor}</p>
                </div>
                <div className="mt-4">
                  <div className="text-sm text-gray-500 mb-2">Includes:</div>
                  <p className="text-gray-600 text-sm">{option.includes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Eyebrow>Your Role</Eyebrow>
              <h2 className="text-3xl lg:text-4xl text-secondary mt-3 leading-tight">
                What do you need to do?
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-secondary">Provide basic documents</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Passport copy, photo, proof of address. We guide you on exactly what's needed.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-secondary">Sign paperwork</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      MOA, license applications, visa forms. We prepare everything; you review and sign.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-secondary">Complete biometrics</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      For visa processing: medical test, Emirates ID capture. We schedule and accompany.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-secondary">Attend bank meeting</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Banks want to meet account holders. We prepare you and can accompany if helpful.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Eyebrow>Our Role</Eyebrow>
              <h2 className="text-3xl lg:text-4xl text-secondary mt-3 leading-tight">
                What do we handle?
              </h2>
              <div className="mt-8 space-y-4 text-gray-600">
                <p>
                  <strong className="text-secondary">Everything else.</strong> Government
                  applications, fee payments, document preparation, authority visits,
                  follow-ups, issue resolution, and coordination across multiple departments.
                </p>
                <p>
                  You shouldn't need to visit any government office or navigate any portal.
                  Our PRO team handles all physical submissions and tracks all applications.
                </p>
                <p>
                  We keep you informed with regular updates. You'll know what's happening
                  at every stage without having to manage any of it.
                </p>
                <div className="bg-accent-50 p-6 rounded-sm mt-6">
                  <h4 className="text-secondary">Our commitment</h4>
                  <p className="text-sm mt-2">
                    If something gets stuck or rejected, we handle it. Our fees include
                    resolution of normal complications — you don't pay extra because a
                    government clerk requested additional documents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-accent-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Eyebrow>Common Questions</Eyebrow>
            <h2 className="text-3xl lg:text-4xl text-secondary mt-3">
              Process FAQs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-primary/20 rounded-sm p-6"
              >
                <h3 className="text-secondary text-lg">{faq.question}</h3>
                <p className="text-gray-600 mt-3">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl text-white mb-6">
            Ready to start?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Book a free consultation. We'll discuss your business, recommend the
            right structure, and give you a clear timeline and cost estimate.
            No obligations, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white font-medium rounded-sm hover:bg-white hover:text-secondary transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/cost-guide"
              className="inline-block px-8 py-4 bg-transparent border border-white text-white font-medium rounded-sm hover:bg-white hover:text-secondary transition-colors"
            >
              View Cost Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
