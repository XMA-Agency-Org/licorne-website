import type { ServiceBySlugQueryResult } from "@/sanity/types.generated";
import type { ServicePageProps } from "@/app/(site)/services/components/ServicePage";
import { urlFor } from "@/sanity/lib/image";

type ServiceDocument = Omit<NonNullable<ServiceBySlugQueryResult>, "category"> & {
  category: string | null;
};

const text = (value: string | null | undefined, fallback = "") => value ?? fallback;

export function toServicePageProps(service: ServiceDocument): ServicePageProps {
  const heroImage = service.hero?.image?.asset
    ? urlFor(service.hero.image).width(1920).height(1080).url()
    : "/images/heroes/services.jpg";

  return {
    hero: {
      title: text(service.hero?.title, text(service.title)),
      description: text(service.hero?.description),
      image: heroImage,
      imageAlt: text(service.hero?.imageAlt, text(service.title)),
    },
    overview: {
      eyebrow: text(service.overview?.eyebrow, "Overview"),
      title: text(service.overview?.title),
      description: text(service.overview?.description),
      highlights: service.overview?.highlights ?? [],
      expectationTitle: service.overview?.expectationTitle ?? undefined,
      expectationDescription: service.overview?.expectationDescription ?? undefined,
    },
    stats: (service.stats ?? []).map(({ value, label }) => ({
      value: text(value),
      label: text(label),
    })),
    deliverables: {
      eyebrow: text(service.deliverables?.eyebrow, "What's Included"),
      title: text(service.deliverables?.title),
      items: (service.deliverables?.items ?? []).map(({ anchor, title, description }) => ({
        id: anchor ?? undefined,
        title: text(title),
        description: text(description),
      })),
    },
    process: {
      eyebrow: text(service.process?.eyebrow, "How It Works"),
      title: text(service.process?.title),
      items: (service.process?.items ?? []).map(({ step, title, description }) => ({
        step: text(step),
        title: text(title),
        description: text(description),
      })),
    },
    faqs: {
      eyebrow: text(service.faqs?.eyebrow, "Common Questions"),
      title: text(service.faqs?.title),
      items: (service.faqs?.items ?? []).map(({ question, answer }) => ({
        question: text(question),
        answer: text(answer),
      })),
    },
    cta: {
      title: text(service.cta?.title, "Ready to get started?"),
      description: text(service.cta?.description),
      primaryLabel: text(service.cta?.primaryLabel, "Book Free Consultation"),
      primaryHref: text(service.cta?.primaryHref, "/contact"),
      secondaryLabel: service.cta?.secondaryLabel ?? undefined,
      secondaryHref: service.cta?.secondaryHref ?? undefined,
    },
  };
}
