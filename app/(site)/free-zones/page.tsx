import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import HeroImage from "@/public/images/heroes/free-zones.jpg";
import { Metadata } from "next";

const popularFreeZones = [
  {
    name: "DMCC",
    fullName: "Dubai Multi Commodities Centre",
    location: "JLT, Dubai",
    bestFor: "Trading, commodities, consulting",
    startingCost: "AED 15,000",
    visaQuota: "Up to 6 per desk",
    highlights: [
      "World's #1 free zone (multiple years)",
      "Strong commodities trading infrastructure",
      "Premium JLT location",
      "Large business community",
    ],
  },
  {
    name: "IFZA",
    fullName: "International Free Zone Authority",
    location: "Dubai",
    bestFor: "Cost-effective setup, consultancies",
    startingCost: "AED 11,500",
    visaQuota: "Flexible packages",
    highlights: [
      "Competitive pricing",
      "Fast processing times",
      "Wide activity range",
      "Flexible office solutions",
    ],
  },
  {
    name: "DIFC",
    fullName: "Dubai International Financial Centre",
    location: "Downtown Dubai",
    bestFor: "Financial services, fintech, legal",
    startingCost: "AED 50,000+",
    visaQuota: "Based on office size",
    highlights: [
      "Independent legal jurisdiction (common law)",
      "Prestigious address",
      "Regulated financial activities",
      "Access to DIFC Courts",
    ],
  },
  {
    name: "Dubai Silicon Oasis",
    fullName: "Dubai Silicon Oasis Authority",
    location: "Silicon Oasis, Dubai",
    bestFor: "Tech companies, startups, R&D",
    startingCost: "AED 15,000",
    visaQuota: "Up to 6 per flexi desk",
    highlights: [
      "Tech-focused ecosystem",
      "Startup programs available",
      "Affordable compared to downtown",
      "Good for tech talent visas",
    ],
  },
  {
    name: "JAFZA",
    fullName: "Jebel Ali Free Zone",
    location: "Jebel Ali, Dubai",
    bestFor: "Trading, logistics, manufacturing",
    startingCost: "AED 25,000",
    visaQuota: "Based on facility size",
    highlights: [
      "Direct port access",
      "Warehouse and industrial facilities",
      "Established since 1985",
      "Strong logistics infrastructure",
    ],
  },
  {
    name: "Dubai Media City",
    fullName: "Dubai Media City",
    location: "Al Sufouh, Dubai",
    bestFor: "Media, marketing, creative agencies",
    startingCost: "AED 20,000",
    visaQuota: "Based on office size",
    highlights: [
      "Media industry hub",
      "Creative community",
      "Major agency presence",
      "Event and production facilities",
    ],
  },
  {
    name: "Dubai Internet City",
    fullName: "Dubai Internet City",
    location: "Al Sufouh, Dubai",
    bestFor: "IT, software, technology",
    startingCost: "AED 20,000",
    visaQuota: "Based on office size",
    highlights: [
      "Major tech company presence",
      "IT talent pool",
      "Innovation ecosystem",
      "Adjacent to Media City",
    ],
  },
  {
    name: "Meydan Free Zone",
    fullName: "Meydan Free Zone",
    location: "Meydan, Dubai",
    bestFor: "General trading, e-commerce, consulting",
    startingCost: "AED 12,000",
    visaQuota: "Flexible packages",
    highlights: [
      "Competitive pricing",
      "Quick setup process",
      "Modern facilities",
      "Growing business community",
    ],
  },
];

const comparisonFactors = [
  {
    factor: "Cost",
    description:
      "Total first-year costs vary from AED 11,000 to AED 100,000+ depending on free zone, license type, visa requirements, and office solution. Budget-friendly options exist for every business type.",
  },
  {
    factor: "Location",
    description:
      "Consider where your clients are, where talent lives, and how the address affects perception. JLT and Business Bay offer good value; DIFC and Downtown command premium positioning.",
  },
  {
    factor: "Activities",
    description:
      "Each free zone has approved activity lists. Some are industry-specific (Media City for media, DIFC for finance). General free zones like DMCC and IFZA cover most commercial activities.",
  },
  {
    factor: "Visa Quota",
    description:
      "How many employees can you sponsor? Ranges from 1-3 visas for basic packages to unlimited for physical offices. Consider current team and 2-year growth plans.",
  },
  {
    factor: "Office Requirements",
    description:
      "Some free zones require physical presence; others offer flexi desk or virtual options. This significantly impacts cost and operational flexibility.",
  },
  {
    factor: "Banking",
    description:
      "Some free zones have better banking relationships than others. DMCC and DIFC companies often find account opening easier than lesser-known free zones.",
  },
];

export const metadata: Metadata = {
  title: "Dubai Free Zone Comparison Guide 2024 | Compare 40+ Free Zones | Licorne",
  description:
    "Compare Dubai free zones side by side. DMCC, IFZA, DIFC, JAFZA, and more. Costs, visa quotas, activities, and which free zone is best for your business type.",
  keywords: [
    "dubai free zones",
    "free zone comparison dubai",
    "best free zone dubai",
    "dmcc vs ifza",
    "dubai free zone list",
    "free zone company dubai",
  ],
  openGraph: {
    title: "Dubai Free Zone Comparison Guide | Licorne Business Setup",
    description:
      "Compare 40+ Dubai free zones. Find the best free zone for your business based on cost, activities, and visa requirements.",
    type: "website",
  },
};

export default function FreeZonesPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Zone Guide"
        title="Dubai Free Zone Comparison Guide"
        description="40+ free zones, each with different costs, activities, and benefits. This guide helps you understand the options and find the right fit for your business."
        image={HeroImage}
        imageAlt="Dubai free zones guide"
        height="medium"
      />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <Eyebrow>Understanding Free Zones</Eyebrow>
            <h2 className="text-3xl lg:text-4xl text-secondary mt-3 leading-tight">
              What is a Dubai Free Zone?
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Free zones are designated economic areas in the UAE that offer special
                incentives for foreign businesses. The key benefits include 100% foreign
                ownership (no local sponsor required), 0% corporate and personal income tax,
                100% repatriation of profits, and simplified import/export procedures.
              </p>
              <p>
                Dubai alone has over 40 free zones, each designed for specific industries
                or offering general commercial licenses. Choosing the right free zone
                affects your setup cost, visa capacity, banking ease, and business perception.
              </p>
              <p>
                The trade-off: free zone companies face restrictions when selling directly
                to the UAE mainland market (typically requiring a local distributor or paying
                5% customs duty). If your primary customers are UAE-based consumers or
                businesses, a mainland license may be more suitable.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white border border-primary/20 rounded-sm p-6">
              <div className="text-4xl text-primary font-primary">40+</div>
              <div className="text-secondary mt-1">Free zones in Dubai</div>
              <p className="text-gray-600 text-sm mt-2">
                Each with unique benefits, costs, and target industries
              </p>
            </div>
            <div className="bg-white border border-primary/20 rounded-sm p-6">
              <div className="text-4xl text-primary font-primary">0%</div>
              <div className="text-secondary mt-1">Corporate tax (most activities)</div>
              <p className="text-gray-600 text-sm mt-2">
                Qualifying free zone income exempt from 9% UAE corporate tax
              </p>
            </div>
            <div className="bg-white border border-primary/20 rounded-sm p-6">
              <div className="text-4xl text-primary font-primary">100%</div>
              <div className="text-secondary mt-1">Foreign ownership</div>
              <p className="text-gray-600 text-sm mt-2">
                No local partner or sponsor required for free zone companies
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-accent-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Eyebrow>Popular Options</Eyebrow>
            <h2 className="text-3xl lg:text-4xl text-secondary mt-3">
              Most Popular Dubai Free Zones
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              These free zones handle the majority of new company formations. Each has
              distinct advantages depending on your business type and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {popularFreeZones.map((zone) => (
              <div
                key={zone.name}
                className="bg-white border border-primary/20 rounded-sm p-8"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl text-secondary">{zone.name}</h3>
                    <p className="text-sm text-gray-500">{zone.fullName}</p>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-sm">
                    {zone.location}
                  </span>
                </div>
                <p className="text-primary font-medium mb-4">
                  Best for: {zone.bestFor}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Starting cost:</span>
                    <div className="text-secondary font-medium">{zone.startingCost}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Visa quota:</span>
                    <div className="text-secondary font-medium">{zone.visaQuota}</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {zone.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                      <span className="text-primary mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Eyebrow>How to Choose</Eyebrow>
            <h2 className="text-3xl lg:text-4xl text-secondary mt-3">
              Key Factors in Free Zone Selection
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisonFactors.map((item) => (
              <div
                key={item.factor}
                className="border border-primary/20 rounded-sm p-6"
              >
                <h3 className="text-xl text-secondary mb-3">{item.factor}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-accent-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <Eyebrow>Decision Framework</Eyebrow>
            <h2 className="text-3xl lg:text-4xl text-secondary mt-3 leading-tight">
              Which Free Zone Should You Choose?
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-primary/20 rounded-sm p-8">
              <h3 className="text-xl text-secondary mb-4">
                For consultancies and professional services
              </h3>
              <p className="text-gray-600 mb-4">
                If you're a consultant, freelancer, or service business without physical
                product needs, prioritize cost-effectiveness and visa flexibility.
              </p>
              <p className="text-primary font-medium">
                Recommended: IFZA, Meydan, or DMCC (for premium positioning)
              </p>
            </div>

            <div className="bg-white border border-primary/20 rounded-sm p-8">
              <h3 className="text-xl text-secondary mb-4">
                For trading and e-commerce
              </h3>
              <p className="text-gray-600 mb-4">
                Trading companies need appropriate activity licenses and may benefit from
                customs advantages. Consider warehouse access if holding inventory.
              </p>
              <p className="text-primary font-medium">
                Recommended: DMCC, JAFZA (if warehousing needed), or IFZA
              </p>
            </div>

            <div className="bg-white border border-primary/20 rounded-sm p-8">
              <h3 className="text-xl text-secondary mb-4">
                For tech and startups
              </h3>
              <p className="text-gray-600 mb-4">
                Tech companies benefit from ecosystems with similar businesses, startup
                programs, and talent visa provisions.
              </p>
              <p className="text-primary font-medium">
                Recommended: Dubai Silicon Oasis, Dubai Internet City, or DMCC
              </p>
            </div>

            <div className="bg-white border border-primary/20 rounded-sm p-8">
              <h3 className="text-xl text-secondary mb-4">
                For financial services
              </h3>
              <p className="text-gray-600 mb-4">
                Regulated financial activities require DIFC or ADGM. The common law
                jurisdiction and independent courts are significant advantages for finance.
              </p>
              <p className="text-primary font-medium">
                Recommended: DIFC (Dubai) or ADGM (Abu Dhabi)
              </p>
            </div>

            <div className="bg-white border border-primary/20 rounded-sm p-8">
              <h3 className="text-xl text-secondary mb-4">
                For media and creative
              </h3>
              <p className="text-gray-600 mb-4">
                Media, marketing, and creative agencies benefit from the ecosystem and
                networking opportunities in dedicated creative free zones.
              </p>
              <p className="text-primary font-medium">
                Recommended: Dubai Media City or Dubai Studio City
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl text-white mb-6">
            Not sure which free zone is right for you?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            We've helped 500+ businesses choose the optimal free zone. Book a free
            consultation and we'll recommend the best option based on your specific
            situation — business type, budget, visa needs, and growth plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white font-medium rounded-sm hover:bg-white hover:text-secondary transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/services/free-zone-company-setup"
              className="inline-block px-8 py-4 bg-transparent border border-white text-white font-medium rounded-sm hover:bg-white hover:text-secondary transition-colors"
            >
              Free Zone Setup Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
