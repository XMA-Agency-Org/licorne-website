import { stegaClean } from "next-sanity"
import type { SiteNavigation } from "@/lib/navigation"

export function leadServiceOptions({ companySetup, serviceCategories }: SiteNavigation) {
  const options = [
    ...companySetup.items.map((item) => item.label),
    ...serviceCategories.map((category) => category.title),
    "Other",
  ].map((option) => stegaClean(option))
  return [...new Set(options)]
}
