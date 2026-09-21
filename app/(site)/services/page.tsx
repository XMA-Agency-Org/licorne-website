import { sanityFetch } from "@/sanity/lib/live";
import { servicesListingQuery } from "@/sanity/lib/queries";
import {
  AnimatedHeading,
  FeaturedServicesSection,
  ServiceCategorySection,
} from "@/app/(site)/services/_components";
import { ServicesHero } from "@/app/(site)/services/_components/ServicesHero";
import { ServiceCta } from "@/app/(site)/services/components/ServiceCta";
import { toServicesListing } from "./_lib/toServicesListing";

const alternatingVariant = (index: number) => (index % 2 === 0 ? "light" : "dark");

export default async function ServicesPage() {
  const { data } = await sanityFetch({ query: servicesListingQuery });
  const { companySetup, categories } = toServicesListing(data);

  return (
    <>
      <ServicesHero />

      <section id="company-setup" className="py-24 lg:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedHeading
            eyebrow={companySetup.eyebrow}
            title={companySetup.title}
            titleAccent={companySetup.titleAccent}
            centered={false}
          />
          <div className="mt-12">
            <FeaturedServicesSection services={companySetup.services} />
          </div>
        </div>
      </section>

      {categories.map((category, index) => (
        <ServiceCategorySection
          key={category.id}
          id={category.id}
          eyebrow={category.eyebrow}
          title={category.title}
          titleAccent={category.titleAccent}
          services={category.services}
          variant={alternatingVariant(index)}
          columns={category.services.length > 4 ? 3 : 2}
        />
      ))}

      <ServiceCta
        title="Not sure where to start?"
        description="Book a free consultation and we'll recommend the best approach for your situation. No commitment, just expert guidance."
        primaryLabel="Book Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
