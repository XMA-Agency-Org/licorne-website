"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";

interface AnimatedCounterProps {
  value: string;
  label: string;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

function parseValue(value: string): { number: number; suffix: string; prefix: string } {
  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  if (match) {
    return {
      prefix: match[1] || "",
      number: parseInt(match[2], 10),
      suffix: match[3] || "",
    };
  }
  return { prefix: "", number: 0, suffix: value };
}

function AnimatedCounter({
  value,
  label,
  className = "",
  valueClassName = "",
  labelClassName = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { number, suffix, prefix } = parseValue(value);

  const spring = useSpring(0, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const unsubscribe = display.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [display]);

  useEffect(() => {
    if (isInView) {
      spring.set(number);
    }
  }, [isInView, number, spring]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      <div className={valueClassName}>
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <div className={labelClassName}>{label}</div>
    </motion.div>
  );
}

interface StatsRowProps {
  stats: Array<{ value: string; label: string }>;
  variant?: "light" | "dark";
  layout?: "horizontal" | "grid";
}

export function StatsRow({ stats, variant = "light", layout = "horizontal" }: StatsRowProps) {
  const isDark = variant === "dark";

  if (layout === "grid") {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <AnimatedCounter
            key={index}
            value={stat.value}
            label={stat.label}
            className="text-center"
            valueClassName={`text-4xl font-primary lg:text-5xl ${
              isDark ? "text-primary" : "text-secondary"
            }`}
            labelClassName={`text-xs mt-2 ${
              isDark ? "text-white/70" : "text-text-secondary"
            }`}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-start items-center w-full">
      {stats.map((stat, index) => (
        <AnimatedCounter
          key={index}
          value={stat.value}
          label={stat.label}
          className="flex flex-col justify-start items-start flex-1 min-w-[120px] gap-2 border-l border-primary pl-5 py-4"
          valueClassName={`text-3xl lg:text-6xl ${
            isDark ? "text-primary" : "text-text"
          }`}
          labelClassName={`text-sm font-medium ${
            isDark ? "text-white/70" : "text-text-secondary"
          }`}
        />
      ))}
    </div>
  );
}
