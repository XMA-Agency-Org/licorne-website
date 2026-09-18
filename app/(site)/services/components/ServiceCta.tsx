"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ServiceCtaProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function ServiceCta({
  title,
  description,
  primaryLabel,
}: ServiceCtaProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 min-h-[600px] overflow-hidden rounded-sm">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-secondary p-12 lg:p-16 flex flex-col justify-center relative"
          >
            <div className="absolute top-0 left-0 w-1 h-32 bg-primary" />

            <span className="font-secondary text-primary text-sm font-semibold uppercase tracking-wider">
              Ready to start?
            </span>

            <h2 className="text-3xl lg:text-5xl text-white mt-4 mb-6 leading-tight">
              {title}
            </h2>

            <p className="font-secondary text-white/70 text-lg mb-10 max-w-md">
              {description}
            </p>

            <div className="space-y-4 text-white/60">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="font-secondary">Free 30-minute consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="font-secondary">Expert guidance on setup options</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="font-secondary">Transparent pricing breakdown</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.1,
            }}
            className="bg-white p-8 lg:p-12 flex flex-col justify-center"
          >
            <h3 className="text-2xl text-secondary mb-6">
              Get in touch
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-secondary text-sm font-medium text-text-secondary mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="font-secondary w-full border border-base-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-secondary text-sm font-medium text-text-secondary mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+971"
                    className="font-secondary w-full border border-base-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block font-secondary text-sm font-medium text-text-secondary mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="font-secondary w-full border border-base-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block font-secondary text-sm font-medium text-text-secondary mb-2">
                  Service of interest
                </label>
                <select
                  name="service"
                  className="font-secondary w-full border border-base-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white"
                >
                  <option>Mainland Company Setup</option>
                  <option>Free Zone Company Setup</option>
                  <option>Visa & Immigration</option>
                  <option>PRO & Government Services</option>
                  <option>Bank Account Opening</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block font-secondary text-sm font-medium text-text-secondary mb-2">
                  Message (optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us about your business needs"
                  className="font-secondary w-full border border-base-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="group w-full px-6 py-4 bg-primary text-white font-secondary font-medium rounded-sm hover:bg-secondary transition-colors flex items-center justify-center"
              >
                {primaryLabel}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
