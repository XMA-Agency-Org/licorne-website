import Link from "next/link";
import Image from "next/image";
import LicorneLogo from "@/public/Licorne Logo-bg-removed.jpeg";
import type { SiteNavigation } from "@/lib/navigation";

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-white/70 hover:text-primary transition-colors text-sm"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ navigation }: { navigation: SiteNavigation }) {
  const { companySetup, serviceCategories, resourceLinks, footer } = navigation;
  const visaCategory = serviceCategories.find((c) => c.title === "Visa & Immigration");
  const financeCategory = serviceCategories.find((c) => c.title === "Finance & Banking");
  const serviceGroups = [
    { title: companySetup.title, links: companySetup.items },
    {
      title: "Services",
      links: serviceCategories.map(({ title, href }) => ({ label: title, href })),
    },
    ...(visaCategory ? [{ title: visaCategory.title, links: visaCategory.items }] : []),
    ...(financeCategory ? [{ title: financeCategory.title, links: financeCategory.items }] : []),
  ];

  return (
    <footer className="bg-secondary">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 lg:gap-6">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="h-12 relative">
                <Image
                  src={LicorneLogo}
                  alt="Licorne Logo"
                  height={48}
                  className="h-full w-auto object-contain"
                  style={{
                    filter: "brightness(0) invert(1)",
                  }}
                />
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-6">
              {footer.description}
            </p>
            <Link
              href="/contact"
              className="inline-block px-5 py-2.5 bg-primary text-white hover:bg-white hover:text-secondary transition-colors text-sm font-medium rounded-sm"
            >
              Free Consultation
            </Link>
          </div>

          {serviceGroups.map((group) => (
            <FooterLinkGroup key={group.title} title={group.title} links={group.links} />
          ))}

          <div>
            <FooterLinkGroup title="Resources" links={resourceLinks} />
            <div className="mt-8">
              <FooterLinkGroup title="Company" links={footer.companyLinks} />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Licorne. All rights reserved.
            </p>
            <div className="flex gap-6 text-white/50 text-sm">
              <Link href="/contact" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
