import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const services = [
  {
    number: "One",
    title: "Mainland Company Setup",
    description:
      "Establish your LLC in Dubai mainland with full access to the local market. We handle sponsor arrangements, trade license selection, and all government approvals — you just sign.",
    image: "/Licorne Logo.jpeg",
    href: "/services/mainland-company-setup",
  },
  {
    number: "Two",
    title: "Free Zone Company Setup",
    description:
      "100% foreign ownership, tax advantages, and simplified regulations. We help you choose the right free zone for your industry and manage the entire registration process.",
    image: "/Licorne Logo.jpeg",
    href: "/services/free-zone-company-setup",
  },
  {
    number: "Three",
    title: "Visa & Immigration",
    description:
      "Residence visas, investor visas, and work permits for you and your team. We navigate the immigration process so your people can start working without delays.",
    image: "/Licorne Logo.jpeg",
    href: "/services/visa-immigration",
  },
  {
    number: "Four",
    title: "PRO & Government Services",
    description:
      "Document attestation, Emirates ID, medical tests, license renewals — the ongoing paperwork that keeps your business compliant. We handle it all.",
    image: "/Licorne Logo.jpeg",
    href: "/services/pro-government-services",
  },
  {
    number: "Five",
    title: "Bank Account Opening",
    description:
      "The trickiest part of Dubai setup — made manageable. We prepare documentation, connect you with the right banks, and guide you through compliance for successful account opening.",
    image: "/Licorne Logo.jpeg",
    href: "/services/bank-account-opening",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Eyebrow>Our Services</Eyebrow>
          <h2 className="text-4xl lg:text-5xl text-secondary mt-3 max-w-3xl mx-auto leading-tight">
            Everything You Need to Launch in Dubai
          </h2>
        </div>

        <div className="grid gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group pb-8 px-4 hover:shadow-2xl transition-all duration-300 border-b text-primary hover:border-transparent cursor-pointer relative overflow-hidden"
            >
              <div className="flex">
                <span className="text-base-950 text-lg pr-8 my-auto tracking-wider">
                  {service.number}
                </span>
                <div>
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="flex-1">
                      <h3 className="text-4xl text-secondary mt-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-primary ml-auto hover:text-secondary transition-colors font-medium group"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
