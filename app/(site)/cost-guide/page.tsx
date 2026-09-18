import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import HeroImage from "@/public/images/heroes/cost-guide.jpg";
import { Metadata } from "next";

const mainlandCosts = [
  { item: "Trade license fee", range: "AED 10,000 - 50,000", notes: "Varies by activity type" },
  { item: "Local sponsor/service agent", range: "AED 5,000 - 15,000/year", notes: "Required for most activities" },
  { item: "Initial approval", range: "AED 500 - 1,000", notes: "DED processing" },
  { item: "Trade name reservation", range: "AED 620", notes: "One-time fee" },
  { item: "MOA drafting & notarization", range: "AED 2,000 - 5,000", notes: "Depends on complexity" },
  { item: "Office/Ejari", range: "AED 5,000 - 50,000/year", notes: "Virtual to physical office" },
  { item: "Establishment card", range: "AED 2,000 - 3,000", notes: "Immigration file setup" },
  { item: "Investor visa (each)", range: "AED 5,000 - 7,000", notes: "Including medical & Emirates ID" },
];

const freeZoneCosts = [
  { item: "License fee", range: "AED 10,000 - 50,000", notes: "Varies by free zone" },
  { item: "Registration fee", range: "AED 2,000 - 5,000", notes: "One-time" },
  { item: "Office solution", range: "AED 5,000 - 30,000/year", notes: "Flexi desk to serviced office" },
  { item: "Visa package", range: "AED 3,000 - 8,000/visa", notes: "Includes processing" },
  { item: "Share capital", range: "AED 1,000 - 50,000", notes: "Varies by free zone, often not deposited" },
  { item: "E-channel/portal fees", range: "AED 1,000 - 2,000", notes: "Government system access" },
];

const ongoingCosts = [
  { item: "License renewal", range: "AED 10,000 - 50,000/year", notes: "Similar to initial license" },
  { item: "Office rent", range: "AED 5,000 - 100,000/year", notes: "Depends on type and location" },
  { item: "Visa renewal", range: "AED 2,000 - 4,000/visa", notes: "Every 2-3 years" },
  { item: "Accounting/VAT", range: "AED 3,000 - 15,000/year", notes: "Depends on transaction volume" },
  { item: "PRO services", range: "AED 500 - 2,000/month", notes: "Outsourced government relations" },
  { item: "Bank account maintenance", range: "AED 0 - 5,000/year", notes: "Varies by bank" },
];

const packageExamples = [
  {
    type: "Budget Free Zone Setup",
    description: "Solo consultant, remote work, 1 visa",
    firstYear: "AED 18,000 - 25,000",
    annual: "AED 12,000 - 18,000",
    includes: ["IFZA or Meydan license", "Flexi desk/virtual office", "1 investor visa", "Basic setup support"],
  },
  {
    type: "Standard Free Zone Setup",
    description: "Small team, trading or services, 3-4 visas",
    firstYear: "AED 35,000 - 55,000",
    annual: "AED 25,000 - 40,000",
    includes: ["DMCC or similar license", "Flexi desk package", "3-4 visas", "PRO support included"],
  },
  {
    type: "Mainland LLC Setup",
    description: "UAE market access, 2-3 visas",
    firstYear: "AED 35,000 - 60,000",
    annual: "AED 20,000 - 35,000",
    includes: ["DED commercial license", "Local sponsor arrangement", "Office/Ejari", "2-3 investor visas"],
  },
  {
    type: "Premium DIFC Setup",
    description: "Financial services, prestigious address",
    firstYear: "AED 80,000 - 150,000",
    annual: "AED 60,000 - 100,000",
    includes: ["DIFC license", "Serviced office", "Visa package", "Regulatory compliance support"],
  },
];

export const metadata: Metadata = {
  title: "Dubai Business Setup Costs 2024 | Complete Pricing Guide | Licorne",
  description:
    "Transparent breakdown of Dubai business setup costs. Mainland and free zone company formation pricing, visa fees, office costs, and ongoing expenses explained.",
  keywords: [
    "dubai company setup cost",
    "free zone cost dubai",
    "business setup cost uae",
    "dubai license cost",
    "company formation fees dubai",
    "dubai business startup cost",
  ],
  openGraph: {
    title: "Dubai Business Setup Cost Guide | Licorne Business Setup",
    description:
      "Complete breakdown of Dubai company formation costs. Mainland, free zone, visas, and ongoing expenses.",
    type: "website",
  },
};

export default function CostGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Cost Guide"
        title="How Much Does It Cost to Start a Business in Dubai?"
        description="Transparent pricing breakdown. No surprises, no hidden fees. Understand exactly what you'll pay for company formation, visas, and ongoing operations."
        image={HeroImage}
        imageAlt="Dubai business setup costs"
        height="medium"
      />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <Eyebrow>The Real Numbers</Eyebrow>
            <h2 className="text-3xl lg:text-4xl text-secondary mt-3 leading-tight">
              What affects your setup cost?
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Dubai business setup costs range from AED 15,000 to AED 150,000+ in the
                first year. The wide range reflects real differences in what businesses
                need: a solo consultant with a virtual office pays very differently from
                a trading company with warehouse space and ten employees.
              </p>
              <p>
                The main cost drivers are: <strong>jurisdiction</strong> (mainland vs free zone),
                <strong> license type</strong> (professional vs commercial vs industrial),
                <strong> visa quantity</strong>, and <strong>office solution</strong> (virtual to physical).
              </p>
              <p>
                Below we break down typical costs for each component, plus realistic
                package examples so you can estimate your specific situation.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white border border-primary/20 rounded-sm p-6">
              <div className="text-4xl text-primary">AED 15K</div>
              <div className="text-secondary mt-1">Budget setup starting cost</div>
              <p className="text-gray-600 text-sm mt-2">
                Basic free zone license with virtual office and 1 visa
              </p>
            </div>
            <div className="bg-white border border-primary/20 rounded-sm p-6">
              <div className="text-4xl text-primary">AED 35K</div>
              <div className="text-secondary mt-1">Average first-year cost</div>
              <p className="text-gray-600 text-sm mt-2">
                Standard setup with license, office, and 2-3 visas
              </p>
            </div>
            <div className="bg-white border border-primary/20 rounded-sm p-6">
              <div className="text-4xl text-primary">AED 150K+</div>
              <div className="text-secondary mt-1">Premium DIFC/mainland setup</div>
              <p className="text-gray-600 text-sm mt-2">
                Prestigious jurisdictions with physical offices
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-accent-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Eyebrow>Cost Breakdown</Eyebrow>
            <h2 className="text-3xl lg:text-4xl text-secondary mt-3">
              Mainland Company Costs
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Dubai mainland (DED) license costs. Provides full UAE market access but
              requires local sponsor for most activities.
            </p>
          </div>

          <div className="bg-white rounded-sm border border-primary/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="px-6 py-4 text-left font-medium">Cost Item</th>
                    <th className="px-6 py-4 text-left font-medium">Range</th>
                    <th className="px-6 py-4 text-left font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {mainlandCosts.map((row, index) => (
                    <tr
                      key={row.item}
                      className={index % 2 === 0 ? "bg-white" : "bg-accent-50"}
                    >
                      <td className="px-6 py-4 text-secondary font-medium">{row.item}</td>
                      <td className="px-6 py-4 text-primary font-medium">{row.range}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-gray-600 text-sm mt-6 text-center">
            Typical mainland first-year total: <strong>AED 30,000 - 80,000</strong> depending on
            activity, office type, and visa count.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Eyebrow>Cost Breakdown</Eyebrow>
            <h2 className="text-3xl lg:text-4xl text-secondary mt-3">
              Free Zone Company Costs
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Free zone setup costs. 100% ownership, 0% tax, but limited UAE market access.
              Costs vary significantly between free zones.
            </p>
          </div>

          <div className="bg-white rounded-sm border border-primary/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="px-6 py-4 text-left font-medium">Cost Item</th>
                    <th className="px-6 py-4 text-left font-medium">Range</th>
                    <th className="px-6 py-4 text-left font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {freeZoneCosts.map((row, index) => (
                    <tr
                      key={row.item}
                      className={index % 2 === 0 ? "bg-white" : "bg-accent-50"}
                    >
                      <td className="px-6 py-4 text-secondary font-medium">{row.item}</td>
                      <td className="px-6 py-4 text-primary font-medium">{row.range}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-gray-600 text-sm mt-6 text-center">
            Typical free zone first-year total: <strong>AED 18,000 - 60,000</strong> depending on
            free zone choice, office type, and visa count.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-accent-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Eyebrow>Annual Costs</Eyebrow>
            <h2 className="text-3xl lg:text-4xl text-secondary mt-3">
              Ongoing Operating Expenses
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Beyond setup, businesses have recurring costs for license renewal, office,
              compliance, and visa maintenance.
            </p>
          </div>

          <div className="bg-white rounded-sm border border-primary/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="px-6 py-4 text-left font-medium">Cost Item</th>
                    <th className="px-6 py-4 text-left font-medium">Range</th>
                    <th className="px-6 py-4 text-left font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {ongoingCosts.map((row, index) => (
                    <tr
                      key={row.item}
                      className={index % 2 === 0 ? "bg-white" : "bg-accent-50"}
                    >
                      <td className="px-6 py-4 text-secondary font-medium">{row.item}</td>
                      <td className="px-6 py-4 text-primary font-medium">{row.range}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Eyebrow>Package Examples</Eyebrow>
            <h2 className="text-3xl lg:text-4xl text-secondary mt-3">
              Realistic Setup Scenarios
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Here's what different business types typically pay, including our service fees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {packageExamples.map((pkg) => (
              <div
                key={pkg.type}
                className="border border-primary/20 rounded-sm p-8 bg-white"
              >
                <h3 className="text-2xl text-secondary">{pkg.type}</h3>
                <p className="text-gray-600 mt-1">{pkg.description}</p>
                <div className="grid grid-cols-2 gap-4 mt-6 mb-6">
                  <div>
                    <div className="text-sm text-gray-500">First year total</div>
                    <div className="text-xl text-primary">{pkg.firstYear}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Annual renewal</div>
                    <div className="text-xl text-primary">{pkg.annual}</div>
                  </div>
                </div>
                <div className="border-t border-primary/20 pt-4">
                  <div className="text-sm text-gray-500 mb-2">Typically includes:</div>
                  <ul className="space-y-1">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="text-primary mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-accent-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Eyebrow>Saving Money</Eyebrow>
            <h2 className="text-3xl lg:text-4xl text-secondary mt-3 leading-tight">
              How to Reduce Your Setup Costs
            </h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl text-secondary">Choose the right free zone</h3>
                <p className="text-gray-600 mt-2">
                  IFZA and Meydan cost significantly less than DMCC for the same activities.
                  Unless you specifically need DMCC's trading infrastructure or prestige, a
                  budget-friendly zone may serve you equally well.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-secondary">Start with fewer visas</h3>
                <p className="text-gray-600 mt-2">
                  Don't pay for visa packages you won't use immediately. Most setups allow
                  adding visas later. Start with what you need and expand when your team grows.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-secondary">Use virtual/flexi office</h3>
                <p className="text-gray-600 mt-2">
                  Physical offices are expensive. If you don't need daily presence or client
                  visits, a flexi desk or virtual address saves AED 20,000-50,000 annually.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-secondary">Bundle services</h3>
                <p className="text-gray-600 mt-2">
                  Setup packages that include license, visa, and PRO support are typically
                  cheaper than arranging each component separately. Ask about all-inclusive pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl text-white mb-6">
            Get an exact quote for your business
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Every business is different. Share your requirements and we'll provide a
            detailed, transparent quote with no hidden fees — usually within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white font-medium rounded-sm hover:bg-white hover:text-secondary transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-transparent border border-white text-white font-medium rounded-sm hover:bg-white hover:text-secondary transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
