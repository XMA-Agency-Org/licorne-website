import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Eyebrow } from "@/components/ui/Eyebrow";

const ABOUT_CONFIG = {
  tag: "About Licorne",
  title: "We Make Dubai ",
  titleSpan: "Accessible",
  description: "Setting up a business in Dubai shouldn't feel like navigating a maze. Licorne streamlines every step — from choosing the right structure to securing your visas and opening your bank account. We've guided hundreds of entrepreneurs through the process, turning what seems complex into something remarkably simple.",
  button: {
    text: "Get Started",
    href: "/contact"
  },
  image: {
    src: "https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67aeed40002c626c25144224_image-1.png",
    alt: "Dubai business district",
    width: 940,
    height: 626
  }
};

const STATS = [
  { value: "500+", label: "Companies Formed" },
  { value: "40+", label: "Free Zones Covered" },
  { value: "98%", label: "First-Time Approvals" },
  { value: "72h", label: "Average Setup Time" }
];

export function AboutSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content Wrapper */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            {/* Header Section */}
            <div className="mb-8">
              <Eyebrow className="mb-6">{ABOUT_CONFIG.tag}</Eyebrow>
              <h2 className="text-4xl lg:text-5xl mt-3 mb-6 leading-tight text-secondary">
                {ABOUT_CONFIG.title}
                <span className="text-primary">
                  {ABOUT_CONFIG.titleSpan}
                </span>
              </h2>
            </div>

            {/* Bottom Content */}
            <div>
              <p className="mb-8 text-lg leading-relaxed text-text-secondary">
                {ABOUT_CONFIG.description}
              </p>

              <Link
                href={ABOUT_CONFIG.button.href}
                className="inline-flex items-center px-8 py-4 font-medium transition-all duration-300 rounded-sm bg-primary text-white hover:bg-secondary"
              >
                {ABOUT_CONFIG.button.text}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src={ABOUT_CONFIG.image.src}
              alt={ABOUT_CONFIG.image.alt}
              width={ABOUT_CONFIG.image.width}
              height={ABOUT_CONFIG.image.height}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-start items-center w-full">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-start flex-1 gap-4 border-l border-primary pl-5"
            >
              <div className="text-4xl lg:text-8xl text-text font-primary font-extralight">
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
