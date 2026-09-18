import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { homepageQuery } from "@/sanity/lib/queries";
import { HeroSection } from "./(home)/components/HeroSection";
import { AboutSection } from "./(home)/components/AboutSection";
import { ServicesSection } from "./(home)/components/ServicesSection";
import { WhyChooseUsSection } from "./(home)/components/WhyChooseUsSection";
import { TestimonialsSliderSection } from "./(home)/components/TestimonialsSliderSection";
import { TeamSection } from "./(home)/components/TeamSection";
import { FAQSection } from "./(home)/components/FAQSection";
import { CTASection } from "./(home)/components/CTASection";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await sanityFetch({ query: homepageQuery, stega: false });
  if (!data?.seo) return {};
  return {
    title: data.seo.title ?? undefined,
    description: data.seo.description ?? undefined,
  };
}

export default async function LicornePage() {
  const { data } = await sanityFetch({ query: homepageQuery });

  return (
    <>
      <HeroSection hero={data?.hero ?? null} />
      <AboutSection about={data?.about ?? null} />
      <ServicesSection services={data?.services ?? null} />
      <WhyChooseUsSection />
      <TestimonialsSliderSection testimonials={data?.testimonials ?? null} />
      <TeamSection team={data?.team ?? null} />
      <FAQSection faq={data?.faq ?? null} />
      <CTASection />
    </>
  );
}
