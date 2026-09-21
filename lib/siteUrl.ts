const PRODUCTION_FALLBACK_URL = "https://licorne-website.vercel.app"

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? PRODUCTION_FALLBACK_URL).replace(/\/$/, "")
