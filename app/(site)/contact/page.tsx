import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import HeroImage from "@/public/images/heroes/home.jpg";
import { LeadForm } from "@/components/forms/LeadForm";

export const metadata = {
  title: "Contact Us | Licorne",
  description: "Talk to Licorne about company setup, visas, licensing and banking in Dubai. Free consultation, reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation"
        description="Tell us about your needs and our team will respond with the right guidance."
        image={HeroImage}
        imageAlt="Contact Licorne"
        height="small"
      />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Eyebrow className="mb-6">Get in touch</Eyebrow>
              <h2 className="text-4xl lg:text-5xl mt-3 mb-6 leading-tight text-secondary">
                Ready to start your Dubai business?
              </h2>
              <p className="text-lg leading-relaxed text-text-secondary mb-10">
                Share a brief summary of what you need and one of our business
                setup advisors will get back to you within one business day.
              </p>
              <div className="space-y-6 text-text-secondary">
                <div>
                  <p className="text-sm uppercase tracking-wider text-primary mb-2">
                    Email
                  </p>
                  <Link
                    href="mailto:info@licorne.ae"
                    className="text-lg text-secondary hover:text-primary transition-colors"
                  >
                    info@licorne.ae
                  </Link>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-primary mb-2">
                    Phone
                  </p>
                  <Link
                    href="tel:+971586595257"
                    className="text-lg text-secondary hover:text-primary transition-colors"
                  >
                    +971 58 659 5257
                  </Link>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-primary mb-2">
                    Office
                  </p>
                  <p className="text-lg text-secondary">
                    Office 622, Fairmont Dubai, Sheikh Zayed Road, Trade Centre
                    1, Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-2xl border border-primary/10 rounded-sm p-8 lg:p-10">
              <h3 className="text-2xl text-secondary mb-6">
                Send us a message
              </h3>
              <LeadForm layout="contact" submitLabel="Send message" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
