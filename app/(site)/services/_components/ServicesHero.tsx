"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import HeroImage from "@/public/images/heroes/services.jpg";

const heroTextVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function ServicesHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HeroImage}
          alt="Licorne services"
          className="absolute inset-0 w-full h-full object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-black/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroTextVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={heroItemVariants}
            className="text-4xl lg:text-7xl text-accent-50 mt-4 leading-tight"
          >
            Everything you need to launch and operate in Dubai
          </motion.h1>
          <motion.p
            variants={heroItemVariants}
            className="font-secondary text-lg lg:text-xl text-accent-50/80 mt-6 leading-relaxed max-w-2xl mx-auto"
          >
            From company formation to visas, banking, and ongoing compliance —
            we handle the complexity so you can focus on building your
            business.
          </motion.p>
          <motion.div
            variants={heroItemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="group px-8 py-4 bg-primary text-accent-50 hover:bg-white hover:text-secondary transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
            >
              Start Your Setup
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#company-setup"
              className="px-8 py-4 bg-transparent text-accent-50 border-2 border-accent-50/30 hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
