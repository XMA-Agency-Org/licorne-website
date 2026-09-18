import { HeroSection } from "./(home)/components/HeroSection";
import { AboutSection } from "./(home)/components/AboutSection";
import { ServicesSection } from "./(home)/components/ServicesSection";
import { WhyChooseUsSection } from "./(home)/components/WhyChooseUsSection";
import { TestimonialsSliderSection } from "./(home)/components/TestimonialsSliderSection";
import { TeamSection } from "./(home)/components/TeamSection";
import { FAQSection } from "./(home)/components/FAQSection";
import { CTASection } from "./(home)/components/CTASection";

export default function LicornePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSliderSection />
      <TeamSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
