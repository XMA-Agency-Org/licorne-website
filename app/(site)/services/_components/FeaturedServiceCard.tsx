"use client";

import { motion, Variants } from "motion/react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

interface FeaturedServiceCardProps {
  title: string;
  description: string;
  href: string;
  image: StaticImageData | string;
  badge?: string;
  index?: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

function FeaturedServiceCard({
  title,
  description,
  href,
  image,
  badge,
  index = 0,
}: FeaturedServiceCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15 }}
    >
      <Link href={href} className="group block relative h-full">
        <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-sm">
          <Image
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

          {badge && (
            <div className="absolute top-6 left-6">
              <span className="font-secondary px-4 py-2 bg-primary text-white text-sm font-medium rounded-sm">
                {badge}
              </span>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
            <h3 className="text-3xl lg:text-4xl text-white mb-4 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="font-secondary text-white/80 leading-relaxed mb-6 line-clamp-3">
              {description}
            </p>
            <span className="font-secondary inline-flex items-center text-primary font-medium group-hover:text-white transition-colors duration-300">
              Learn more
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

interface FeaturedServicesSectionProps {
  services: Array<{
    title: string;
    description: string;
    href: string;
    image: StaticImageData | string;
    badge?: string;
  }>;
}

export function FeaturedServicesSection({
  services,
}: FeaturedServicesSectionProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <FeaturedServiceCard
          key={service.title}
          {...service}
          index={index}
        />
      ))}
    </div>
  );
}
