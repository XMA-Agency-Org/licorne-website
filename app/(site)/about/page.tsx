import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ServiceCta } from "@/app/(site)/services/components/ServiceCta";
import HeroImage from "@/public/images/heroes/about.jpg";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { aboutPageQuery } from "@/sanity/lib/queries";
import { aboutPage as DEFAULT_ABOUT } from "@/sanity/seed/site";
import { type ReactNode } from "react";

const valueIcons: ReactNode[] = [
  <svg
    key="clarity"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-5 h-5"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
  </svg>,
  <svg
    key="efficiency"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-5 h-5"
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>,
  <svg
    key="reliability"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-5 h-5"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,
  <svg
    key="partnership"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-5 h-5"
  >
    <path d="M7 11l3.5 3.5L14 11l3 3" />
    <path d="M2 9l4-2 3 2" />
    <path d="M22 9l-4-2-3 2" />
    <path d="M2 9v5l5 4" />
    <path d="M22 9v5l-5 4" />
  </svg>,
];

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await sanityFetch({ query: aboutPageQuery, stega: false });
  return {
    title: data?.seo?.title ?? DEFAULT_ABOUT.seo.title,
    description: data?.seo?.description ?? DEFAULT_ABOUT.seo.description,
  };
}

export default async function AboutPage() {
  const { data } = await sanityFetch({ query: aboutPageQuery });
  const hero = { ...DEFAULT_ABOUT.hero, ...data?.hero };
  const story = data?.story?.paragraphs?.length
    ? data.story
    : DEFAULT_ABOUT.story;
  const whyClients = data?.whyClients?.items?.length
    ? data.whyClients
    : DEFAULT_ABOUT.whyClients;
  const stats = data?.stats?.length ? data.stats : DEFAULT_ABOUT.stats;
  const journey = data?.journey?.milestones?.length
    ? data.journey
    : DEFAULT_ABOUT.journey;
  const values = data?.values?.items?.length
    ? data.values
    : DEFAULT_ABOUT.values;
  const commitment = data?.commitment?.paragraphs?.length
    ? data.commitment
    : DEFAULT_ABOUT.commitment;
  const cta = { ...DEFAULT_ABOUT.cta, ...data?.cta };
  const heroImage = data?.hero?.image?.asset
    ? urlFor(data.hero.image).width(1920).height(1080).url()
    : HeroImage;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow ?? undefined}
        title={hero.title ?? DEFAULT_ABOUT.hero.title}
        description={hero.description ?? DEFAULT_ABOUT.hero.description}
        image={heroImage}
        imageAlt={hero.imageAlt ?? "About Licorne"}
        height="small"
      />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Eyebrow className="mb-6">{story.eyebrow}</Eyebrow>
              <h2 className="text-4xl lg:text-5xl mt-3 mb-6 leading-tight text-secondary">
                {story.title}
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-text-secondary">
                {story.paragraphs?.map((paragraph) => (
                  <p key={paragraph.text}>{paragraph.text}</p>
                ))}
              </div>
            </div>
            <div className="bg-secondary/95 text-accent-50 p-10 rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2) 0%, transparent 55%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)",
                  }}
                ></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
                  {whyClients.title}
                </h3>
                <p className="text-accent-50/80 leading-relaxed mb-6">
                  {whyClients.description}
                </p>
                <div className="space-y-4 text-accent-50/80">
                  {whyClients.items?.map((item) => (
                    <p key={item}>✓ {item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-accent-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl text-primary">
                  {stat.value}
                </div>
                <div className="text-secondary mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Eyebrow>{journey.eyebrow}</Eyebrow>
            <h2 className="text-4xl lg:text-5xl text-secondary mt-3 max-w-3xl mx-auto leading-tight">
              {journey.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {journey.milestones?.map((milestone) => (
              <div key={milestone.year} className="relative">
                <div className="text-primary text-sm uppercase tracking-wider mb-3">
                  {milestone.year}
                </div>
                <h3 className="text-2xl text-secondary mb-3">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Eyebrow variant="light">{values.eyebrow}</Eyebrow>
            <h2 className="text-4xl lg:text-5xl text-white mt-3 max-w-4xl mx-auto leading-tight">
              {values.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {values.items?.map((value, index) => (
              <div
                key={value.title}
                className="group border-l border-white/30 pl-6 py-4 hover:border-primary transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary">
                    {valueIcons[index % valueIcons.length]}
                  </span>
                  <h3 className="text-xl text-white">{value.title}</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Eyebrow>{commitment.eyebrow}</Eyebrow>
            <h2 className="text-4xl lg:text-5xl text-secondary mt-3 mb-6 leading-tight">
              {commitment.title}
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              {commitment.paragraphs?.map((paragraph) => (
                <p key={paragraph.text}>{paragraph.text}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceCta
        title={cta.title ?? DEFAULT_ABOUT.cta.title}
        description={cta.description ?? DEFAULT_ABOUT.cta.description}
        primaryLabel={cta.primaryLabel ?? DEFAULT_ABOUT.cta.primaryLabel}
        primaryHref={cta.primaryHref ?? DEFAULT_ABOUT.cta.primaryHref}
        secondaryLabel={cta.secondaryLabel ?? undefined}
        secondaryHref={cta.secondaryHref ?? undefined}
      />
    </>
  );
}
