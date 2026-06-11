import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import HeroImage from "@/public/images/heroes/home.jpg";

export const metadata = {
  title: "Contact Us | Licorne",
  description: "Get in touch with Licorne for legal consultation and support.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Lets start a conversation"
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
                Ready to discuss your legal needs
              </h2>
              <p className="text-lg leading-relaxed text-text-secondary mb-10">
                Share a brief summary of your request and we will connect you
                with the right legal expert.
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
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="w-full border border-primary/20 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className="w-full border border-primary/20 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+971"
                    className="w-full border border-primary/20 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Service of interest
                  </label>
                  <select
                    name="service"
                    className="w-full border border-primary/20 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  >
                    <option>Business Legal Consultation</option>
                    <option>Dispute Resolution</option>
                    <option>Licensing and Contracts</option>
                    <option>Intellectual Property Protection</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your request"
                    className="w-full border border-primary/20 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary text-white font-medium rounded-sm hover:bg-secondary transition-colors"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
