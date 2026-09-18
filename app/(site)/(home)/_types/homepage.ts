import type { HomepageQueryResult } from "@/sanity/types.generated";

export type HomepageData = NonNullable<HomepageQueryResult>;
export type HomepageHero = HomepageData["hero"];
export type HomepageAbout = HomepageData["about"];
export type HomepageServices = HomepageData["services"];
export type HomepageTestimonials = HomepageData["testimonials"];
export type HomepageTeam = HomepageData["team"];
export type HomepageFaq = HomepageData["faq"];
