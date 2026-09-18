"use client";

import { motion, Variants } from "motion/react";
import { ServiceCardEnhanced } from "./ServiceCardEnhanced";
import { AnimatedHeading } from "./AnimatedSection";

interface Service {
  title: string;
  description: string;
  href: string;
}

interface ServiceCategorySectionProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  services: Service[];
  variant?: "light" | "dark";
  columns?: 2 | 3;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function ServiceCategorySection({
  eyebrow,
  title,
  titleAccent,
  services,
  variant = "light",
  columns = 2,
}: ServiceCategorySectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-24 lg:py-32 relative overflow-hidden ${
        isDark ? "bg-secondary" : "bg-background"
      }`}
    >
      {isDark && (
        <>
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b29f23c5b3038c9ea552cd_grain.png")`,
                backgroundSize: "cover",
              }}
            />
          </div>
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67aeed40622e86f203929989_image-overlay.png")`,
                backgroundSize: "cover",
              }}
            />
          </div>
        </>
      )}

      {!isDark && (
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedHeading
          eyebrow={eyebrow}
          title={title}
          titleAccent={titleAccent}
          centered={false}
          light={isDark}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className={`mt-12 grid gap-6 ${
            columns === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"
          }`}
        >
          {services.map((service, index) => (
            isDark ? (
              <DarkServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                href={service.href}
                index={index}
              />
            ) : (
              <ServiceCardEnhanced
                key={service.title}
                title={service.title}
                description={service.description}
                href={service.href}
                index={index}
              />
            )
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface DarkServiceCardProps {
  title: string;
  description: string;
  href: string;
  index?: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function DarkServiceCard({
  title,
  description,
  href,
  index = 0,
}: DarkServiceCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={href} className="group block h-full">
        <div className="h-full p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm transition-all duration-300 hover:bg-white/20">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl text-white group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0 ml-4">
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </div>
          <p className="font-secondary text-white/70 leading-relaxed">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
