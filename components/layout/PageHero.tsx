import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { cn } from "@/lib/utils"

type HeroHeight = "full" | "large" | "medium" | "small"
type HeroAlignment = "center" | "left"

type CtaButton = {
  label: string
  href: string
  icon?: boolean
}

type PageHeroProps = {
  title: string
  description: string
  image: StaticImageData | string
  imageAlt?: string
  eyebrow?: string
  height?: HeroHeight
  alignment?: HeroAlignment
  primaryCta?: CtaButton
  secondaryCta?: CtaButton
}

const heightClasses: Record<HeroHeight, string> = {
  full: "min-h-screen",
  large: "min-h-[80vh]",
  medium: "min-h-[60vh]",
  small: "min-h-[50vh]",
}

export function PageHero({
  title,
  description,
  image,
  imageAlt = "",
  eyebrow,
  height = "medium",
  alignment = "center",
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-center",
        heightClasses[height]
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        placeholder={typeof image === "string" ? "empty" : "blur"}
      />
      <div className="absolute inset-0 bg-secondary/60" />

      <div className="relative z-10 w-full px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <div
            className={cn(
              "max-w-3xl",
              alignment === "center" ? "mx-auto text-center" : ""
            )}
          >
            {eyebrow && (
              <Eyebrow variant="hero">{eyebrow}</Eyebrow>
            )}

            <h1 className="text-4xl lg:text-6xl text-accent-50 mt-4">
              {title}
            </h1>

            <p
              className={cn(
                "text-lg lg:text-xl text-accent-50/80 mt-6 font-secondary",
                alignment === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
              )}
            >
              {description}
            </p>

            {(primaryCta || secondaryCta) && (
              <div
                className={cn(
                  "flex flex-wrap gap-4 mt-8",
                  alignment === "center" && "justify-center"
                )}
              >
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-accent-50 font-medium rounded-sm hover:bg-white hover:text-secondary transition-colors"
                  >
                    {primaryCta.label}
                    {primaryCta.icon && <ArrowRight className="size-4" />}
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-accent-50 font-medium rounded-sm border-2 border-accent-50/20 hover:bg-white/10 transition-colors"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
