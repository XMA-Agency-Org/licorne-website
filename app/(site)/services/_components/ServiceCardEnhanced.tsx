"use client";

import { motion, Variants } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardEnhancedProps {
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

export function ServiceCardEnhanced({
  title,
  description,
  href,
  index = 0,
}: ServiceCardEnhancedProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={href} className="group block h-full">
        <div className="relative h-full p-8 bg-white border border-primary/10 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl text-secondary group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0 ml-4">
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </div>

          <p className="font-secondary text-text-secondary leading-relaxed">
            {description}
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
    </motion.div>
  );
}

interface ServiceCardCompactProps {
  title: string;
  description: string;
  href: string;
  index?: number;
}

function ServiceCardCompact({
  title,
  description,
  href,
  index = 0,
}: ServiceCardCompactProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08 }}
    >
      <Link href={href} className="group block">
        <div className="p-6 border-b border-primary/10 hover:bg-primary-50/30 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-xl text-secondary group-hover:text-primary transition-colors duration-300 mb-2">
                {title}
              </h3>
              <p className="font-secondary text-text-secondary text-sm leading-relaxed line-clamp-2">
                {description}
              </p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 ml-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
