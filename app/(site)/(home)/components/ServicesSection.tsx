import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { COMPANY_SETUP, SERVICES } from "@/lib/navigation";
import type { HomepageServices } from "../_types/homepage";

type ServiceRow = {
  number: string;
  title: string;
  description: string;
  href: string;
  subItems: Array<{ label: string; href: string }>;
};

const DEFAULT_SERVICES: ServiceRow[] = [
  {
    number: "One",
    title: "Company Setup",
    description:
      "Mainland, free zone or offshore. We recommend the right jurisdiction for your business model, then handle licensing, approvals and registration so you can start trading.",
    href: "/services#company-setup",
    subItems: COMPANY_SETUP.items,
  },
  {
    number: "Two",
    title: "License Services",
    description:
      "Renewal, modification, cancellation and freezing of your trade license. One team tracks your dates, processes amendments and keeps you compliant year after year.",
    href: SERVICES["License Services"].href,
    subItems: SERVICES["License Services"].items,
  },
  {
    number: "Three",
    title: "Visa & Immigration",
    description:
      "Residence, dependent, remote work, golden and freelance visas for you, your family and your team. From entry permit to Emirates ID, we manage every step.",
    href: SERVICES["Visa & Immigration"].href,
    subItems: SERVICES["Visa & Immigration"].items,
  },
  {
    number: "Four",
    title: "Finance & Banking",
    description:
      "Corporate bank account opening, corporate tax registration and ongoing bookkeeping and VAT. Your finances set up correctly from day one and kept compliant.",
    href: SERVICES["Finance & Banking"].href,
    subItems: SERVICES["Finance & Banking"].items,
  },
  {
    number: "Five",
    title: "PRO & Government Services",
    description:
      "Document attestation, Emirates ID, medical tests, office solutions and government liaison. The ongoing paperwork that keeps your business running, handled.",
    href: SERVICES["PRO & Government Services"].href,
    subItems: SERVICES["PRO & Government Services"].items,
  },
  {
    number: "Six",
    title: "Notary Services",
    description:
      "Power of attorney, will registration, MOA drafting and amendments, and share transfer agreements. Drafted, translated and notarised correctly the first time.",
    href: SERVICES["Notary Services"].href,
    subItems: SERVICES["Notary Services"].items,
  },
];

function toRows(services: HomepageServices): ServiceRow[] {
  const rows = (services?.items ?? [])
    .filter((item) => item.title && item.href)
    .map((item, index) => ({
      number: item.number ?? String(index + 1),
      title: item.title as string,
      description: item.description ?? "",
      href: item.href as string,
      subItems: (item.subItems ?? []).filter(
        (link): link is { label: string; href: string; description: string | null } =>
          Boolean(link.label && link.href),
      ),
    }));
  return rows.length ? rows : DEFAULT_SERVICES;
}

export function ServicesSection({ services }: { services: HomepageServices }) {
  const rows = toRows(services);
  const eyebrow = services?.eyebrow ?? "Our Services";
  const title = services?.title ?? "Everything You Need to Launch in Dubai";

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
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
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-4xl lg:text-5xl text-secondary mt-3 max-w-3xl mx-auto leading-tight">
            {title}
          </h2>
        </div>

        <div className="grid gap-6">
          {rows.map((service) => (
            <div
              key={service.title}
              className="group pb-8 px-4 border-b border-primary transition-all duration-300 hover:shadow-2xl hover:border-transparent relative overflow-hidden"
            >
              <div className="flex gap-6 lg:gap-8">
                <span className="text-base-950 text-lg my-auto tracking-wider shrink-0 w-12">
                  {service.number}
                </span>
                <div className="flex-1 min-w-0">
                  <Link href={service.href} className="block">
                    <h3 className="text-3xl lg:text-4xl text-secondary mt-2 mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </Link>
                  <p className="text-text-secondary mb-5 leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {service.subItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="inline-block rounded-sm border border-base-200 bg-white px-3 py-1.5 text-sm text-secondary transition-colors hover:border-primary hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={service.href}
                  aria-label={`Learn more about ${service.title}`}
                  className="hidden sm:inline-flex items-center self-center text-primary hover:text-secondary transition-colors"
                >
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 font-medium transition-all duration-300 rounded-sm bg-primary text-white hover:bg-secondary"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
