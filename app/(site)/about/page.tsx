import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ServiceCta } from "@/app/(site)/services/components/ServiceCta";
import HeroImage from "@/public/images/heroes/about.jpg";
import { type ReactNode } from "react";

type Value = {
  title: string;
  description: string;
  icon: ReactNode;
};

const values: Value[] = [
  {
    title: "Clarity",
    description:
      "We explain everything in plain language. No jargon, no surprises, no hidden fees. You always know what's happening and why.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Efficiency",
    description:
      "Time matters when you're building a business. We move fast, track every application, and push for the quickest possible completion.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description:
      "When we say we'll handle something, it gets handled. Deadlines are met, documents are correct, and complications are resolved.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Partnership",
    description:
      "We're not just a service provider — we're invested in your success. Many clients stay with us for years as their business grows.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M7 11l3.5 3.5L14 11l3 3" />
        <path d="M2 9l4-2 3 2" />
        <path d="M22 9l-4-2-3 2" />
        <path d="M2 9v5l5 4" />
        <path d="M22 9v5l-5 4" />
      </svg>
    ),
  },
];

const stats = [
  { value: "50+", label: "Companies formed" },
  { value: "10+", label: "Free zones covered" },
  { value: "98%", label: "First-time approval rate" },
  { value: "72h", label: "Average license turnaround" },
];

const milestones = [
  {
    year: "Founded",
    title: "Started with a simple idea",
    description:
      "Help entrepreneurs navigate Dubai's business setup process without the confusion, delays, and overcharging that was common in the industry.",
  },
  {
    year: "Growth",
    title: "Built relationships that matter",
    description:
      "Developed direct relationships with free zone authorities, government departments, and banking partners that allow us to serve clients better.",
  },
  {
    year: "Today",
    title: "Trusted by a growing client base",
    description:
      "From solo founders to multinational expansions, we've helped businesses of all sizes establish and operate in Dubai successfully.",
  },
];

export const metadata = {
  title: "About Us | Licorne Business Setup Dubai",
  description:
    "Learn about Licorne — Dubai's trusted business setup partner. 50+ companies formed, 10+ free zones covered. We make starting a business in Dubai simple.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Making Dubai business setup simple since day one"
        description="We help entrepreneurs and companies establish their presence in Dubai without the complexity, confusion, and wasted time that typically comes with the process."
        image={HeroImage}
        imageAlt="About Licorne"
        height="small"
      />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Eyebrow className="mb-6">Our story</Eyebrow>
              <h2 className="text-4xl lg:text-5xl mt-3 mb-6 leading-tight text-secondary">
                We believe starting a business should be exciting, not exhausting
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-text-secondary">
                <p>
                  Dubai offers incredible opportunities for entrepreneurs — 0% personal
                  income tax, strategic location, world-class infrastructure, and access
                  to regional markets. But the setup process? That's where many get stuck.
                </p>
                <p>
                  Multiple authorities, unfamiliar procedures, conflicting information,
                  and service providers who seem more interested in fees than outcomes.
                  We started Licorne because we knew there had to be a better way.
                </p>
                <p>
                  Our approach is simple: understand what you're trying to build, recommend
                  the right structure, handle the paperwork efficiently, and be there when
                  you need support. No unnecessary complexity, no surprises.
                </p>
              </div>
            </div>
            <div className="bg-secondary/95 text-accent-50 p-10 rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 55%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)",
                  }}
                ></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
                  Why clients choose us
                </h3>
                <p className="text-accent-50/80 leading-relaxed mb-6">
                  It's not just about getting a license — it's about starting your
                  Dubai journey with confidence and the right foundation.
                </p>
                <div className="space-y-4 text-accent-50/80">
                  <p>✓ Transparent pricing with no hidden fees</p>
                  <p>✓ Direct communication throughout the process</p>
                  <p>✓ Problems handled before they become your problems</p>
                  <p>✓ Ongoing support as your business grows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-accent-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl text-primary">
                  {stat.value}
                </div>
                <div className="text-secondary mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Eyebrow>Our journey</Eyebrow>
            <h2 className="text-4xl lg:text-5xl text-secondary mt-3 max-w-3xl mx-auto leading-tight">
              Building something that matters
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative">
                <div className="text-primary text-sm uppercase tracking-wider mb-3">
                  {milestone.year}
                </div>
                <h3 className="text-2xl text-secondary mb-3">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Eyebrow variant="light">Our values</Eyebrow>
            <h2 className="text-4xl lg:text-5xl text-white mt-3 max-w-4xl mx-auto leading-tight">
              What guides how we work
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group border-l border-white/30 pl-6 py-4 hover:border-primary transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary">{value.icon}</span>
                  <h3 className="text-xl text-white">{value.title}</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Eyebrow>Our commitment</Eyebrow>
            <h2 className="text-4xl lg:text-5xl text-secondary mt-3 mb-6 leading-tight">
              More than just company formation
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Yes, we help you get your trade license. But that's just the beginning.
                We help you choose the right structure for your goals, navigate the
                visa process for you and your team, open a bank account (the hardest
                part for many), and stay compliant as you operate.
              </p>
              <p>
                Most of our clients stay with us long after setup. When they need to
                add activities, hire employees, renew licenses, or handle government
                requirements — we're there. When they have questions at 9pm before a
                big meeting — we answer.
              </p>
              <p>
                This is what we mean by partnership. Your success is our success, and
                we're in it for the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceCta
        title="Ready to start your Dubai journey?"
        description="Book a free consultation. We'll learn about your business, answer your questions, and show you exactly how we can help."
        primaryLabel="Book Free Consultation"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
