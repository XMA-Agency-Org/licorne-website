import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import HeroImage from "@/public/images/heroes/business-activities.jpg";
import { Metadata } from "next";

const activityCategories = [
  {
    category: "Consulting & Professional Services",
    description: "Advisory, consulting, and professional service activities",
    activities: [
      "Management Consulting",
      "Business Consultancy",
      "Marketing Consultancy",
      "IT Consultancy",
      "HR Consultancy",
      "Financial Consultancy",
      "Legal Consultancy",
      "Engineering Consultancy",
      "Educational Consultancy",
      "Environmental Consultancy",
    ],
    notes: "Professional licenses typically require relevant qualifications or experience. Some activities may require professional attestations.",
  },
  {
    category: "Trading & Commerce",
    description: "Buying and selling goods, import/export activities",
    activities: [
      "General Trading",
      "Electronics Trading",
      "Textile Trading",
      "Food & Beverage Trading",
      "Building Materials Trading",
      "Auto Parts Trading",
      "Medical Equipment Trading",
      "Cosmetics Trading",
      "Furniture Trading",
      "Jewelry Trading",
    ],
    notes: "Commercial licenses required. Some products (food, medical, cosmetics) need additional approvals from relevant authorities.",
  },
  {
    category: "Technology & Digital",
    description: "IT, software, and digital service activities",
    activities: [
      "Software Development",
      "Mobile App Development",
      "Web Design & Development",
      "IT Support Services",
      "Data Processing",
      "Cloud Services",
      "Cybersecurity Services",
      "E-commerce",
      "Digital Marketing",
      "IT Infrastructure",
    ],
    notes: "Tech activities are available in most free zones. Some sensitive activities (telecom, data centers) require TRA approval.",
  },
  {
    category: "Media & Creative",
    description: "Content creation, media production, and creative services",
    activities: [
      "Advertising Services",
      "Public Relations",
      "Media Production",
      "Video Production",
      "Photography Services",
      "Graphic Design",
      "Event Management",
      "Publishing",
      "Content Creation",
      "Animation & VFX",
    ],
    notes: "Media activities often best suited for Dubai Media City. Some activities require media credentials or portfolios.",
  },
  {
    category: "Real Estate & Property",
    description: "Property-related services and brokerage",
    activities: [
      "Real Estate Brokerage",
      "Property Management",
      "Real Estate Consultancy",
      "Facility Management",
      "Interior Design",
      "Architecture Services",
      "Project Management",
      "Building Maintenance",
      "Property Valuation",
      "Real Estate Development",
    ],
    notes: "Real estate brokerage requires RERA certification. Development activities need DLD approval and specific licensing.",
  },
  {
    category: "Healthcare & Wellness",
    description: "Medical, health, and wellness services",
    activities: [
      "Medical Clinic",
      "Dental Services",
      "Physiotherapy",
      "Alternative Medicine",
      "Health Consultancy",
      "Medical Equipment Supply",
      "Pharmaceutical Trading",
      "Spa & Wellness Center",
      "Fitness Training",
      "Nutrition Consultancy",
    ],
    notes: "Healthcare activities require DHA (Dubai Health Authority) approval. Practitioners need license verification and registration.",
  },
  {
    category: "Education & Training",
    description: "Educational services and professional training",
    activities: [
      "Training Center",
      "Corporate Training",
      "Language Training",
      "Professional Development",
      "E-Learning Services",
      "Educational Consultancy",
      "Tutoring Services",
      "Vocational Training",
      "Soft Skills Training",
      "Technical Training",
    ],
    notes: "Training activities require KHDA approval in Dubai. Curriculum and trainer qualifications are reviewed.",
  },
  {
    category: "Manufacturing & Industrial",
    description: "Production and manufacturing activities",
    activities: [
      "Food Manufacturing",
      "Textile Manufacturing",
      "Furniture Manufacturing",
      "Plastic Products",
      "Metal Fabrication",
      "Packaging Manufacturing",
      "Cosmetics Manufacturing",
      "Chemical Manufacturing",
      "Electronics Assembly",
      "Printing Services",
    ],
    notes: "Industrial licenses require appropriate facilities (warehouses/factories). Location restricted to industrial areas or specific free zones.",
  },
  {
    category: "Logistics & Transportation",
    description: "Freight, shipping, and logistics services",
    activities: [
      "Freight Forwarding",
      "Shipping Agency",
      "Customs Clearance",
      "Warehousing",
      "Distribution Services",
      "Supply Chain Management",
      "Courier Services",
      "Transportation",
      "Moving & Relocation",
      "Cold Storage",
    ],
    notes: "Logistics activities benefit from JAFZA location (port access). Some activities require security clearances.",
  },
  {
    category: "Financial Services",
    description: "Finance, investment, and related services",
    activities: [
      "Investment Advisory",
      "Fund Management",
      "Insurance Brokerage",
      "Financial Services",
      "Accounting Services",
      "Audit Services",
      "Tax Consultancy",
      "Bookkeeping",
      "Credit Services",
      "Money Exchange",
    ],
    notes: "Regulated financial activities require DIFC or ADGM licensing. Unregulated activities (consulting) available elsewhere.",
  },
];

const popularCombinations = [
  {
    title: "Digital Agency",
    activities: ["Digital Marketing", "Web Design & Development", "Graphic Design", "Content Creation"],
    notes: "Common combination for marketing and creative agencies serving multiple client needs.",
  },
  {
    title: "IT Company",
    activities: ["Software Development", "IT Consultancy", "IT Support Services", "Cloud Services"],
    notes: "Covers development, advisory, and managed services for comprehensive IT offerings.",
  },
  {
    title: "General Trading",
    activities: ["General Trading", "Import/Export", "Distribution Services", "E-commerce"],
    notes: "Broad coverage for trading companies handling various product categories.",
  },
  {
    title: "Business Consultancy",
    activities: ["Management Consulting", "Business Consultancy", "HR Consultancy", "Financial Consultancy"],
    notes: "Professional services firm covering major consulting disciplines.",
  },
];

export const metadata: Metadata = {
  title: "Dubai Business Activities List | License Activity Guide | Licorne",
  description:
    "Complete guide to business activities for Dubai trade licenses. Activity categories, popular combinations, and requirements for mainland and free zone licenses.",
  keywords: [
    "dubai business activities",
    "trade license activities dubai",
    "ded activity list",
    "free zone activities",
    "dubai license activities",
    "business activity codes dubai",
  ],
  openGraph: {
    title: "Dubai Business Activities Guide | Licorne Business Setup",
    description:
      "Comprehensive list of business activities available for Dubai trade licenses. Categories, combinations, and requirements explained.",
    type: "website",
  },
};

export default function BusinessActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Activity Guide"
        title="Dubai Business Activities Guide"
        description="Your trade license defines what business activities you can legally perform. This guide covers common activities, categories, and how to choose the right ones for your business."
        image={HeroImage}
        imageAlt="Dubai business activities guide"
        height="medium"
      />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <Eyebrow>Understanding Activities</Eyebrow>
            <h2 className="text-3xl lg:text-4xl text-secondary mt-3 leading-tight">
              What are business activities?
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Every UAE trade license lists specific "activities" that define what your
                company can legally do. Activities are standardized codes maintained by
                DED (for mainland) or individual free zone authorities.
              </p>
              <p>
                Choosing the right activities matters: too narrow and you can't serve all
                your customers; too broad and you might face higher fees or unnecessary
                approvals. Most businesses need 3-6 well-chosen activities.
              </p>
              <p>
                Some activities require special approvals (healthcare needs DHA, food needs
                municipality, education needs KHDA). Others are restricted to certain license
                types or jurisdictions. We help you navigate these requirements.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white border border-primary/20 rounded-sm p-6">
              <div className="text-4xl text-primary">2,000+</div>
              <div className="text-secondary mt-1">Activity codes available</div>
              <p className="text-gray-600 text-sm mt-2">
                DED maintains extensive activity lists for mainland licenses
              </p>
            </div>
            <div className="bg-white border border-primary/20 rounded-sm p-6">
              <div className="text-4xl text-primary">3-6</div>
              <div className="text-secondary mt-1">Activities per license (typical)</div>
              <p className="text-gray-600 text-sm mt-2">
                Most businesses need multiple activities to cover their services
              </p>
            </div>
            <div className="bg-white border border-primary/20 rounded-sm p-6">
              <div className="text-4xl text-primary">AED 1-2K</div>
              <div className="text-secondary mt-1">Per additional activity</div>
              <p className="text-gray-600 text-sm mt-2">
                Adding activities to existing licenses is straightforward
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-accent-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Eyebrow>Activity Categories</Eyebrow>
            <h2 className="text-3xl lg:text-4xl text-secondary mt-3">
              Common Business Activities by Category
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Browse activities organized by industry. These are representative examples —
              the full DED list contains thousands of specific activity codes.
            </p>
          </div>

          <div className="space-y-8">
            {activityCategories.map((cat) => (
              <div
                key={cat.category}
                className="bg-white border border-primary/20 rounded-sm overflow-hidden"
              >
                <div className="bg-secondary px-6 py-4">
                  <h3 className="text-xl text-white">{cat.category}</h3>
                  <p className="text-white/70 text-sm mt-1">{cat.description}</p>
                </div>
                <div className="p-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-2 mb-4">
                    {cat.activities.map((activity) => (
                      <div
                        key={activity}
                        className="bg-accent-50 px-3 py-2 text-sm text-secondary rounded-sm"
                      >
                        {activity}
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm border-t border-primary/10 pt-4">
                    <span className="font-medium text-primary">Note:</span> {cat.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Eyebrow>Smart Combinations</Eyebrow>
            <h2 className="text-3xl lg:text-4xl text-secondary mt-3">
              Popular Activity Combinations
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Most businesses combine multiple activities. Here are common combinations
              that cover typical business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {popularCombinations.map((combo) => (
              <div
                key={combo.title}
                className="border border-primary/20 rounded-sm p-8 bg-white"
              >
                <h3 className="text-2xl text-secondary mb-4">{combo.title}</h3>
                <div className="space-y-2 mb-4">
                  {combo.activities.map((activity) => (
                    <div key={activity} className="flex items-center text-gray-600">
                      <span className="text-primary mr-2">•</span>
                      {activity}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 border-t border-primary/10 pt-4">
                  {combo.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-accent-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Eyebrow>Choosing Activities</Eyebrow>
            <h2 className="text-3xl lg:text-4xl text-secondary mt-3 leading-tight">
              How to Select Your Activities
            </h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl text-secondary">1. List your actual services</h3>
                <p className="text-gray-600 mt-2">
                  Start with what you actually do (or plan to do). What do you sell?
                  What services do you provide? Who are your customers?
                </p>
              </div>
              <div>
                <h3 className="text-xl text-secondary">2. Consider future plans</h3>
                <p className="text-gray-600 mt-2">
                  Think 2-3 years ahead. Adding activities later is possible but involves
                  fees and processing time. Better to include likely future activities now.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-secondary">3. Match to official codes</h3>
                <p className="text-gray-600 mt-2">
                  Your description needs to map to official DED or free zone activity codes.
                  "Digital marketing" might map to multiple activities; we help find the right fit.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-secondary">4. Check approval requirements</h3>
                <p className="text-gray-600 mt-2">
                  Some activities require ministry approvals that add time and documentation.
                  Know this before finalizing your application.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-secondary">5. Consider your jurisdiction</h3>
                <p className="text-gray-600 mt-2">
                  Not all activities are available in all free zones. Some are mainland-only.
                  Activity selection and jurisdiction choice are connected decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl text-white mb-6">
            Not sure which activities you need?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Describe your business and we'll recommend the right activities, check
            approval requirements, and ensure your license covers everything you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white font-medium rounded-sm hover:bg-white hover:text-secondary transition-colors"
            >
              Get Activity Recommendation
            </Link>
            <Link
              href="/services/trade-license"
              className="inline-block px-8 py-4 bg-transparent border border-white text-white font-medium rounded-sm hover:bg-white hover:text-secondary transition-colors"
            >
              Trade License Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
