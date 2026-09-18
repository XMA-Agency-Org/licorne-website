"use client";

import { motion, Variants } from "motion/react";
import { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedHeadingProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function AnimatedHeading({
  eyebrow,
  title,
  titleAccent,
  description,
  centered = true,
  light = false,
}: AnimatedHeadingProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className={centered ? "text-center" : ""}
    >
      {eyebrow && (
        <motion.div variants={itemVariants} className={centered ? "flex justify-center mb-4" : "mb-4"}>
          <Eyebrow variant={light ? "light" : "section"}>{eyebrow}</Eyebrow>
        </motion.div>
      )}
      <motion.h2
        variants={itemVariants}
        className={`text-4xl lg:text-5xl leading-tight ${
          light ? "text-white" : "text-secondary"
        } ${centered ? "max-w-4xl mx-auto" : ""}`}
      >
        {title}
        {titleAccent && (
          <span className="text-primary"> {titleAccent}</span>
        )}
      </motion.h2>
      {description && (
        <motion.p
          variants={itemVariants}
          className={`font-secondary text-lg mt-6 leading-relaxed ${
            light ? "text-white/80" : "text-text-secondary"
          } ${centered ? "max-w-2xl mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

interface AnimatedGridProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function AnimatedGrid({
  children,
  className = "",
  staggerDelay = 0.1,
}: AnimatedGridProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedGridItemProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedGridItem({
  children,
  className = "",
}: AnimatedGridItemProps) {
  const itemVariants: Variants = {
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

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
