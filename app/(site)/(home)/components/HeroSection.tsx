import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import DefaultHeroImage from "@/public/images/heroes/home-skyline.jpg";
import { urlFor } from "@/sanity/lib/image";
import type { HomepageHero } from "../_types/homepage";

const DEFAULT_HERO = {
  headline: "Your Business in Dubai,",
  headlineAccent: "Simplified",
  subheadline:
    "From company formation to visas and beyond — we handle the complexity so you can focus on growth.",
  primaryCtaLabel: "Start Your Setup",
  primaryCtaHref: "/contact",
  secondaryCtaLabel: "Explore Services",
  secondaryCtaHref: "#services",
};

export function HeroSection({ hero }: { hero: HomepageHero }) {
  const content = { ...DEFAULT_HERO, ...hero };
  const backgroundImage = hero?.bgImage?.asset
    ? urlFor(hero.bgImage).width(2400).height(1350).url()
    : DefaultHeroImage;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute h-full w-full">
        <Image
          src={backgroundImage}
          alt="Dubai skyline at golden hour"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-accent-950/50 to-95% to-black/50"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl lg:text-8xl text-accent-50 mb-6 leading-[1.1] tracking-tight text-balance">
            {content.headline}{" "}
            {content.headlineAccent && (
              <span className="font-serif">{content.headlineAccent}</span>
            )}
          </h1>
          <p className="text-lg lg:text-xl text-accent-50/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            {content.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={content.primaryCtaHref}
              className="group px-8 py-4 bg-primary text-accent-50 hover:bg-primary transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
            >
              {content.primaryCtaLabel}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={content.secondaryCtaHref}
              className="px-8 py-4 bg-transparent text-accent-50 backdrop-blur-sm border-2 border-accent-50/20 hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center font-medium rounded-sm"
            >
              {content.secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
