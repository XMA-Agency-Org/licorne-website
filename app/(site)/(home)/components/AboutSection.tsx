import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import DefaultAboutImage from "@/public/images/heroes/about.jpg";
import { urlFor } from "@/sanity/lib/image";
import type { HomepageAbout } from "../_types/homepage";

const DEFAULT_ABOUT = {
  eyebrow: "About Licorne",
  title: "We Make Dubai",
  titleSpan: "Accessible",
  description:
    "Setting up a business in Dubai shouldn't feel like navigating a maze. Licorne streamlines every step — from choosing the right structure to securing your visas and opening your bank account. We've guided many entrepreneurs through the process, turning what seems complex into something remarkably simple.",
  buttonText: "Get Started",
  buttonHref: "/contact",
};

const DEFAULT_STATS = [
  { value: "50+", label: "Companies Formed" },
  { value: "10+", label: "Free Zones Covered" },
  { value: "98%", label: "First-Time Approvals" },
  { value: "72h", label: "Average Setup Time" },
];

export function AboutSection({ about }: { about: HomepageAbout }) {
  const content = { ...DEFAULT_ABOUT, ...about };
  const stats = about?.stats?.length ? about.stats : DEFAULT_STATS;
  const image = about?.image?.asset
    ? urlFor(about.image).width(940).height(626).url()
    : DefaultAboutImage;

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="mb-8">
              <Eyebrow className="mb-6">{content.eyebrow}</Eyebrow>
              <h2 className="text-4xl lg:text-5xl mt-3 mb-6 leading-tight text-secondary">
                {content.title} <span className="text-primary">{content.titleSpan}</span>
              </h2>
            </div>

            <div>
              <p className="mb-8 text-lg leading-relaxed text-text-secondary">
                {content.description}
              </p>

              <Link
                href={content.buttonHref}
                className="inline-flex items-center px-8 py-4 font-medium transition-all duration-300 rounded-sm bg-primary text-white hover:bg-secondary"
              >
                {content.buttonText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[3/2]">
            <Image
              src={image}
              alt="Dubai business district"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-sm"
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col justify-start items-start gap-4 border-l border-primary pl-5"
            >
              <div className="text-4xl lg:text-7xl text-text font-primary font-extralight">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
