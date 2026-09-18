"use client";

import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "motion/react";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ServiceCta } from "@/app/(site)/services/components/ServiceCta";
import {
  AnimatedSection,
  AnimatedHeading,
  AnimatedGrid,
  AnimatedGridItem,
  StatsRow,
  FAQAccordion,
  ProcessTimeline,
} from "@/app/(site)/services/_components";
import Link from "next/link";

interface ServiceItem {
  id?: string;
  title: string;
  description: string;
}

interface ProcessItem {
  step: string;
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface ServicePageProps {
  hero: {
    title: string;
    description: string;
    image: StaticImageData;
    imageAlt: string;
  };
  overview: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: string[];
    expectationTitle?: string;
    expectationDescription?: string;
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
  deliverables: {
    eyebrow: string;
    title: string;
    items: ServiceItem[];
  };
  process: {
    eyebrow: string;
    title: string;
    items: ProcessItem[];
  };
  faqs: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
}

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

const highlightVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function ServicePage({
  hero,
  overview,
  stats,
  deliverables,
  process,
  faqs,
  cta,
}: ServicePageProps) {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            className="absolute inset-0 w-full h-full object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-secondary/60" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroTextVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={heroItemVariants}>
              <Eyebrow variant="hero">Service</Eyebrow>
            </motion.div>
            <motion.h1
              variants={heroItemVariants}
              className="text-4xl lg:text-6xl text-accent-50 mt-4 leading-tight font-serif"
            >
              {hero.title}
            </motion.h1>
            <motion.p
              variants={heroItemVariants}
              className="text-lg lg:text-xl text-accent-50/80 mt-6 leading-relaxed max-w-2xl mx-auto font-secondary"
            >
              {hero.description}
            </motion.p>
            <motion.div
              variants={heroItemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href={cta.primaryHref}
                className="group px-8 py-4 bg-primary text-accent-50 hover:bg-white hover:text-secondary transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
              >
                {cta.primaryLabel}
              </Link>
              <Link
                href="#overview"
                className="px-8 py-4 bg-transparent text-accent-50 border-2 border-accent-50/30 hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
              >
                Explore Details
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="overview" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <Eyebrow className="mb-6">{overview.eyebrow}</Eyebrow>
              <h2 className="text-4xl lg:text-5xl mt-3 mb-6 leading-tight text-secondary">
                {overview.title}
              </h2>
              <p className="font-secondary text-lg leading-relaxed text-text-secondary mb-8">
                {overview.description}
              </p>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="font-secondary space-y-4 text-text-secondary"
              >
                {overview.highlights.map((item) => (
                  <motion.li
                    key={item}
                    variants={highlightVariants}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-secondary text-accent-50 p-10 rounded-sm relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 55%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)",
                    }}
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl mb-4">
                    {overview.expectationTitle ?? "What you can expect"}
                  </h3>
                  <p className="font-secondary text-accent-50/80 leading-relaxed mb-8">
                    {overview.expectationDescription ??
                      "A practical legal partner focused on decision-ready insights, not just documents."}
                  </p>
                  <StatsRow
                    stats={stats}
                    variant="dark"
                    layout="grid"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b29f23c5b3038c9ea552cd_grain.png"
            alt=""
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67aeed40622e86f203929989_image-overlay.png"
            alt=""
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedHeading
            eyebrow={deliverables.eyebrow}
            title={deliverables.title}
            centered={true}
            light={true}
          />

          <AnimatedGrid
            className="grid md:grid-cols-2 gap-6 mt-16"
            staggerDelay={0.1}
          >
            {deliverables.items.map((item) => (
              <AnimatedGridItem key={item.title}>
                <div
                  id={item.id}
                  className="group h-full scroll-mt-28 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm p-8 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-2xl text-white mb-3">{item.title}</h3>
                  <p className="font-secondary text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      <ProcessTimeline
        eyebrow={process.eyebrow}
        title={process.title}
        items={process.items}
      />

      <FAQAccordion
        eyebrow={faqs.eyebrow}
        title={faqs.title}
        items={faqs.items}
      />

      <ServiceCta {...cta} />
    </>
  );
}
