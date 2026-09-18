"use client";

import { motion, Variants } from "motion/react";
import { AnimatedHeading } from "./AnimatedSection";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  eyebrow: string;
  title: string;
  items: ProcessStep[];
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants: Variants = {
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

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const verticalLineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const circleVariants: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

function TimelineStep({
  step,
  isLast,
}: {
  step: ProcessStep;
  isLast: boolean;
}) {
  return (
    <motion.div variants={stepVariants} className="relative flex-1 min-w-0">
      <div className="flex flex-col items-center">
        <motion.div
          variants={circleVariants}
          className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-secondary font-semibold text-lg z-10 relative"
        >
          {step.step}
        </motion.div>

        {!isLast && (
          <motion.div
            variants={lineVariants}
            className="hidden lg:block absolute top-7 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-0.5 bg-primary/30 origin-left"
          />
        )}

        <div className="mt-6 text-center px-4">
          <h3 className="text-xl lg:text-2xl text-secondary mb-3">
            {step.title}
          </h3>
          <p className="font-secondary text-text-secondary leading-relaxed text-sm lg:text-base">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function MobileTimelineStep({
  step,
  isLast,
  index,
}: {
  step: ProcessStep;
  isLast: boolean;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div variants={stepVariants} className="relative">
      <div className="flex items-start gap-6">
        <div className="flex flex-col items-center">
          <motion.div
            variants={circleVariants}
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-secondary font-semibold text-base z-10 relative flex-shrink-0"
          >
            {step.step}
          </motion.div>

          {!isLast && (
            <motion.div
              variants={verticalLineVariants}
              className="w-0.5 h-24 bg-primary/30 origin-top mt-2"
            />
          )}
        </div>

        <div className="pt-2 pb-8">
          <h3 className="text-xl text-secondary mb-2">{step.title}</h3>
          <p className="font-secondary text-text-secondary leading-relaxed text-sm">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function ProcessTimeline({
  eyebrow,
  title,
  items,
}: ProcessTimelineProps) {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedHeading eyebrow={eyebrow} title={title} centered={true} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="hidden lg:flex justify-between items-start mt-20 relative"
        >
          {items.map((item, index) => (
            <TimelineStep
              key={item.step}
              step={item}
              isLast={index === items.length - 1}
            />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="lg:hidden mt-12"
        >
          {items.map((item, index) => (
            <MobileTimelineStep
              key={item.step}
              step={item}
              isLast={index === items.length - 1}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
