export type ServiceSeed = {
  slug: string;
  category: string;
  order: number;
  listing?: { summary?: string; badge?: string };
  hero: { title: string; description: string; image: string; imageAlt: string };
  overview: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: string[];
    expectationTitle?: string;
    expectationDescription?: string;
  };
  stats: Array<{ value: string; label: string }>;
  deliverables: {
    eyebrow: string;
    title: string;
    items: Array<{ anchor?: string; title: string; description: string }>;
  };
  process: {
    eyebrow: string;
    title: string;
    items: Array<{ step: string; title: string; description: string }>;
  };
  faqs: {
    eyebrow: string;
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
};

export type ServiceSeoSeed = {
  title: string;
  description: string;
  keywords?: string[];
};
