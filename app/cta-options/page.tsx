"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import HeroImage from "@/public/images/heroes/services.jpg";

const ctaContent = {
  eyebrow: "Ready to start?",
  title: "Your Dubai Business Starts Here",
  titleAccent: "Starts Here",
  description:
    "Book a free consultation and let's discuss the best setup for your business. No commitment, just expert guidance.",
  primaryLabel: "Book Free Consultation",
  primaryHref: "/contact",
  secondaryLabel: "Contact Us",
  secondaryHref: "/contact",
};

const stats = [
  { value: "500+", label: "Companies Formed" },
  { value: "98%", label: "Success Rate" },
  { value: "72h", label: "Average Setup" },
];

function SectionLabel({ number, title }: { number: number; title: string }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 border-b border-base-200">
      <span className="font-secondary text-primary text-sm font-semibold uppercase tracking-wider">
        Option {number}
      </span>
      <h2 className="text-2xl text-secondary mt-1">{title}</h2>
    </div>
  );
}

function CTAOption1() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 min-h-[500px] overflow-hidden rounded-sm">
          <div className="bg-secondary p-12 lg:p-16 flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 w-1 h-32 bg-primary" />
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-secondary text-primary text-sm font-semibold uppercase tracking-wider"
            >
              {ctaContent.eyebrow}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-5xl text-white mt-4 mb-6 leading-tight"
            >
              Your Dubai Business{" "}
              <span className="text-primary">Starts Here</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-secondary text-white/70 text-lg mb-10 max-w-md"
            >
              {ctaContent.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href={ctaContent.primaryHref}
                className="group px-8 py-4 bg-primary text-white hover:bg-white hover:text-secondary transition-all duration-300 inline-flex items-center justify-center font-secondary font-medium rounded-sm"
              >
                {ctaContent.primaryLabel}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={ctaContent.secondaryHref}
                className="px-8 py-4 bg-transparent text-white border border-white/30 hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center font-secondary font-medium rounded-sm"
              >
                {ctaContent.secondaryLabel}
              </Link>
            </motion.div>
          </div>

          <div className="relative hidden lg:block">
            <Image
              src={HeroImage}
              alt="Dubai skyline"
              className="absolute inset-0 w-full h-full object-cover"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTAOption2() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HeroImage}
          alt="Dubai skyline"
          className="absolute inset-0 w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/60" />
      </div>

      <div className="absolute top-8 left-8 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm px-5 py-3">
          <p className="text-3xl text-primary">{stats[0].value}</p>
          <p className="font-secondary text-white/70 text-sm">{stats[0].label}</p>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm px-5 py-3">
          <p className="text-3xl text-primary">{stats[1].value}</p>
          <p className="font-secondary text-white/70 text-sm">{stats[1].label}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-secondary text-primary text-sm font-semibold uppercase tracking-wider"
        >
          {ctaContent.eyebrow}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-7xl text-white mt-4 mb-8 leading-tight max-w-4xl mx-auto"
        >
          Your Dubai Business{" "}
          <span className="text-primary">Starts Here</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-secondary text-white/80 text-xl mb-12 max-w-2xl mx-auto"
        >
          {ctaContent.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href={ctaContent.primaryHref}
            className="group px-10 py-5 bg-white text-secondary hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center font-secondary font-medium rounded-sm text-lg"
          >
            {ctaContent.primaryLabel}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function CTAOption3() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-base-50 border border-base-200 p-12 lg:p-16 rounded-sm"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-sm" />
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="lg:max-w-lg">
              <span className="font-secondary text-primary text-sm font-semibold uppercase tracking-wider">
                {ctaContent.eyebrow}
              </span>
              <h2 className="text-3xl lg:text-4xl text-secondary mt-3 mb-4 leading-tight">
                {ctaContent.title}
              </h2>
              <p className="font-secondary text-text-secondary">
                {ctaContent.description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:flex-shrink-0">
              <Link
                href={ctaContent.primaryHref}
                className="group px-8 py-4 bg-secondary text-white hover:bg-primary transition-all duration-300 inline-flex items-center justify-center font-secondary font-medium rounded-sm"
              >
                {ctaContent.primaryLabel}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTAOption4() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-secondary text-primary text-sm font-semibold uppercase tracking-wider">
              {ctaContent.eyebrow}
            </span>
            <h2 className="text-3xl lg:text-5xl text-white mt-4 mb-6 leading-tight">
              Your Dubai Business{" "}
              <span className="text-primary">Starts Here</span>
            </h2>
            <p className="font-secondary text-white/70 text-lg mb-10">
              {ctaContent.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={ctaContent.primaryHref}
                className="group px-8 py-4 bg-white text-secondary hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center font-secondary font-medium rounded-sm"
              >
                {ctaContent.primaryLabel}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={ctaContent.secondaryHref}
                className="px-8 py-4 bg-transparent text-white border border-white/30 hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center font-secondary font-medium rounded-sm"
              >
                {ctaContent.secondaryLabel}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 border-l border-primary/30 first:border-l-0"
                >
                  <p className="text-5xl lg:text-6xl text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="font-secondary text-white/60 text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTAOption5() {
  return (
    <section className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/20" />
      
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="inline-block font-secondary text-primary text-sm font-semibold uppercase tracking-wider border-b border-primary/30 pb-2">
            {ctaContent.eyebrow}
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-6xl text-white mb-8 leading-tight"
        >
          Your Dubai Business{" "}
          <span className="text-primary">Starts Here</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-secondary text-white/70 text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {ctaContent.description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href={ctaContent.primaryHref}
            className="group inline-flex items-center justify-center px-12 py-5 bg-primary text-white hover:bg-white hover:text-secondary transition-all duration-300 font-secondary font-medium rounded-sm text-lg"
          >
            {ctaContent.primaryLabel}
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/50">
            <a href="tel:+971586595257" className="font-secondary flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +971 58 659 5257
            </a>
            <a href="mailto:info@licorne.ae" className="font-secondary flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              info@licorne.ae
            </a>
            <span className="font-secondary flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Office 622, Fairmont Dubai, Sheikh Zayed Road, Trade Centre 1, Dubai, UAE
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function CTAOptionsPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl lg:text-5xl text-secondary mb-4">
          CTA Design Options
        </h1>
        <p className="font-secondary text-text-secondary text-lg max-w-2xl">
          Review the different CTA layout variations below. All options use the same content
          to make comparison easier. Choose the one that best fits the brand feel.
        </p>
      </div>

      <SectionLabel number={1} title="Split Layout with Image" />
      <CTAOption1 />

      <SectionLabel number={2} title="Full-Width Dramatic" />
      <CTAOption2 />

      <SectionLabel number={3} title="Minimal Card" />
      <CTAOption3 />

      <SectionLabel number={4} title="Two-Column with Stats" />
      <CTAOption4 />

      <SectionLabel number={5} title="Editorial Stack" />
      <CTAOption5 />

      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="font-secondary text-text-secondary">
          End of CTA options. Let me know which one you prefer or if you'd like variations.
        </p>
      </div>
    </div>
  );
}
