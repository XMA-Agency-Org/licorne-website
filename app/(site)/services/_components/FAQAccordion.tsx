"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { AnimatedHeading, AnimatedGrid, AnimatedGridItem } from "./AnimatedSection";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  eyebrow: string;
  title: string;
  items: FAQItem[];
}

const contentVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      opacity: { duration: 0.2 },
    },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      opacity: { duration: 0.3, delay: 0.1 },
    },
  },
};

const iconVariants: Variants = {
  collapsed: { rotate: 0 },
  expanded: { rotate: 180 },
};

function FAQItem({
  item,
  isActive,
  onToggle,
}: {
  item: FAQItem;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border-b border-primary/20 transition-all duration-300 ${
        isActive ? "bg-primary-50/50" : "hover:bg-base-50"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-start justify-between gap-4"
        aria-expanded={isActive}
      >
        <h3 className="text-xl lg:text-2xl text-secondary pr-4 leading-snug">
          {item.question}
        </h3>
        <motion.div
          initial={false}
          animate={isActive ? "expanded" : "collapsed"}
          variants={iconVariants}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"
        >
          {isActive ? (
            <Minus className="w-5 h-5" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={contentVariants}
            className="overflow-hidden"
          >
            <p className="font-secondary px-6 pb-6 text-text-secondary leading-relaxed pr-16">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQAccordion({ eyebrow, title, items }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 bg-background-subtle relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M0 0h40v40H0V0zm20 20v20H0V20h20zm20 0v20H20V20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedHeading
          eyebrow={eyebrow}
          title={title}
          centered={true}
        />

        <AnimatedGrid className="max-w-4xl mx-auto mt-16" staggerDelay={0.05}>
          {items.map((item, index) => (
            <AnimatedGridItem key={index}>
              <FAQItem
                item={item}
                isActive={activeIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </AnimatedGridItem>
          ))}
        </AnimatedGrid>
      </div>
    </section>
  );
}
