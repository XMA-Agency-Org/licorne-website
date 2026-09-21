"use client";

import { motion } from "motion/react";
import { LeadForm } from "@/components/forms/LeadForm";

export function CTASection() {
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

            <span className="font-secondary text-primary-400 text-sm font-semibold uppercase tracking-wider">
              Ready to start?
            </span>

            <h2 className="text-3xl lg:text-5xl text-white mt-4 mb-6 leading-tight">
              Your Dubai Business Starts Here
            </h2>

            <p className="font-secondary text-white/70 text-lg mb-10 max-w-md">
              Book a free consultation and let&apos;s discuss the best setup for
              your business. No commitment, just expert guidance.
            </p>

            <div className="space-y-4 text-white/60">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="font-secondary">
                  Free 30-minute consultation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="font-secondary">
                  Expert guidance on setup options
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="font-secondary">
                  Transparent pricing breakdown
                </span>
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
            <h3 className="text-2xl text-secondary mb-6">Get in touch</h3>
            <LeadForm submitLabel="Book Free Consultation" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
