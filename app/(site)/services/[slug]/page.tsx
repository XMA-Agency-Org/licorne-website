import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/app/(site)/services/components/ServicePage";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { serviceBySlugQuery, serviceSlugsQuery } from "@/sanity/lib/queries";
import { toServicePageProps } from "./_lib/toServicePageProps";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = await client.withConfig({ useCdn: false }).fetch(serviceSlugsQuery);
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await sanityFetch({ query: serviceBySlugQuery, params: { slug }, stega: false });
  if (!data) return {};

  const title = data.seo?.title ?? data.hero?.title ?? data.title;
  const description = data.seo?.description ?? data.hero?.description ?? undefined;
  const ogImage = data.seo?.ogImage ?? data.hero?.image;

  return {
    title,
    description,
    keywords: data.seo?.keywords ?? undefined,
    openGraph: {
      title: title ?? undefined,
      description,
      type: "website",
      images: ogImage?.asset ? [urlFor(ogImage).width(1200).height(630).url()] : undefined,
    },
  };
}

export default async function ServiceBySlugPage({ params }: { params: Params }) {
  const { slug } = await params;
  const { data } = await sanityFetch({ query: serviceBySlugQuery, params: { slug } });
  if (!data) notFound();

  return <ServicePage {...toServicePageProps(data)} />;
}
