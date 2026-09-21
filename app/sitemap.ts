import type { MetadataRoute } from "next"
import { client } from "@/sanity/lib/client"
import { sitemapServicesQuery } from "@/sanity/lib/queries"
import { siteUrl } from "@/lib/siteUrl"

export const revalidate = 3600

const STATIC_ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/free-zones", priority: 0.7 },
  { path: "/cost-guide", priority: 0.7 },
  { path: "/how-it-works", priority: 0.6 },
  { path: "/business-activities", priority: 0.6 },
  { path: "/faq", priority: 0.5 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const services = await client
    .withConfig({ useCdn: false, stega: false })
    .fetch(sitemapServicesQuery)

  const staticEntries = STATIC_ROUTES.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }))

  const serviceEntries = services
    .filter((service) => service.slug)
    .map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: new Date(service._updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))

  return [...staticEntries, ...serviceEntries]
}
