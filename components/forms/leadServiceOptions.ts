import { COMPANY_SETUP, SERVICES } from "@/lib/navigation"

export const LEAD_SERVICE_OPTIONS = [
  ...COMPANY_SETUP.items.map((item) => item.label),
  ...Object.keys(SERVICES),
  "Other",
]
