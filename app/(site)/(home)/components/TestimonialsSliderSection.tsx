"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Quote } from "lucide-react";
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/ScrollVelocity";
import type { HomepageTestimonials, HomepageTestimonialsSection } from "../_types/homepage";

type Testimonial = { author: string; position: string; text: string };

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    text: "Licorne made what I thought would be a months-long ordeal into a two-week process. Clear communication, no surprises, and my company was up and running faster than I expected.",
    author: "Marcus Chen",
    position: "Founder, Technology Consultancy",
  },
  {
    text: "I'd tried to set up on my own and hit wall after wall. Licorne untangled everything in days. Worth every dirham.",
    author: "Sarah Mitchell",
    position: "Director, E-commerce Business",
  },
  {
    text: "The free zone advice alone saved me from making an expensive mistake. They actually listened to my business model before recommending anything.",
    author: "Ahmed Al-Rashid",
    position: "Managing Partner, Consulting Firm",
  },
  {
    text: "Bank account opening is where most people struggle. Licorne got me approved on the first attempt because they knew exactly what documentation the bank wanted.",
    author: "David Okonkwo",
    position: "CEO, Fintech Startup",
  },
];

const DEFAULT_SETTINGS = {
  eyebrow: "Testimonials",
  title: "Trusted by Entrepreneurs",
  titleAccent: "Worldwide",
  rows: 1,
  speed: 3,
  ctaLabel: "Start Your Journey",
  ctaHref: "/contact",
};

function splitIntoRows<T>(items: T[], rowCount: number): T[][] {
  const rows: T[][] = Array.from({ length: rowCount }, () => []);
  items.forEach((item, index) => rows[index % rowCount].push(item));
  return rows.filter((row) => row.length);
}

const StarIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    className="w-4 h-4"
  >
    <path
      d="M8.5 1L10.3 6.3H16L11.85 9.7L13.65 15L8.5 11.6L3.35 15L5.15 9.7L1 6.3H6.7L8.5 1Z"
      className="fill-primary"
    />
  </svg>
);

const TestimonialCard = ({
  testimonial,
  showStars = false,
}: {
  testimonial: Testimonial;
  showStars?: boolean;
}) => (
  <div className="bg-surface-subtle p-6 mx-3 min-w-[400px] max-w-sm shadow-lg border border-border-strong flex-shrink-0">
    {showStars && (
      <div className="flex mb-4 space-x-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
    )}
    <Quote className="w-6 h-6 text-primary mb-4" />
    <div className="text-text-secondary mb-6 leading-relaxed text-wrap">
      {testimonial.text}
    </div>
    <div>
      <div className="font-semibold text-secondary">{testimonial.author}</div>
      <div className="text-sm text-text-muted">{testimonial.position}</div>
    </div>
  </div>
);

export function TestimonialsSliderSection({
  settings,
  testimonials,
}: {
  settings: HomepageTestimonialsSection;
  testimonials: HomepageTestimonials;
}) {
  const cmsTestimonials = (testimonials ?? [])
    .filter((item) => item.author && item.text)
    .map((item) => ({
      author: item.author as string,
      position: item.position ?? "",
      text: item.text as string,
    }));
  const items = cmsTestimonials.length ? cmsTestimonials : DEFAULT_TESTIMONIALS;
  const eyebrow = settings?.eyebrow ?? DEFAULT_SETTINGS.eyebrow;
  const title = settings?.title ?? DEFAULT_SETTINGS.title;
  const titleAccent = settings?.titleAccent ?? DEFAULT_SETTINGS.titleAccent;
  const speed = settings?.speed ?? DEFAULT_SETTINGS.speed;
  const ctaLabel = settings?.ctaLabel ?? DEFAULT_SETTINGS.ctaLabel;
  const ctaHref = settings?.ctaHref ?? DEFAULT_SETTINGS.ctaHref;
  const rows = splitIntoRows(items, settings?.rows ?? DEFAULT_SETTINGS.rows);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">

      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b29f23c5b3038c9ea552cd_grain.png"
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
        <div className="text-center">
          <p className="text-primary border-b w-fit mx-auto p-2 mb-4 font-semibold text-sm uppercase tracking-wider">
            {eyebrow}
          </p>
          <h2 className="text-4xl lg:text-6xl text-secondary mt-3 max-w-3xl mx-auto leading-tight text-balance">
            {title}{" "}
            {titleAccent && <span className="text-primary font-serif">{titleAccent}</span>}
          </h2>
        </div>
      </div>

      {/* Smooth Scroll Velocity Slider */}
      <div className="mb-16 relative">
        <ScrollVelocityContainer className="w-full">
          {rows.map((rowItems, rowIndex) => (
            <ScrollVelocityRow
              key={rowIndex}
              baseVelocity={speed}
              direction={rowIndex % 2 === 0 ? 1 : -1}
              className="py-4"
            >
              {rowItems.map((testimonial) => (
                <TestimonialCard key={testimonial.author} testimonial={testimonial} />
              ))}
            </ScrollVelocityRow>
          ))}
        </ScrollVelocityContainer>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>

      {/* CTA Button */}
      <div className="text-center relative z-10">
        <Link
          href={ctaHref}
          className={buttonVariants({ className: "px-8" })}
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
