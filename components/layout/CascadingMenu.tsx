"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/navigation"
import { cn } from "@/lib/utils"

export function CascadingMenu() {
  const [activeCategory, setActiveCategory] = useState(SERVICE_CATEGORIES[0])
  const activeGroup = SERVICES[activeCategory]

  return (
    <div className="flex min-h-[300px] w-[640px] bg-white">
      <div className="w-[220px] border-r border-base-200 py-2">
        {SERVICE_CATEGORIES.map((category) => (
          <button
            key={category}
            onMouseEnter={() => setActiveCategory(category)}
            className={cn(
              "flex w-full items-center justify-between px-4 py-3 text-sm font-medium transition-colors",
              activeCategory === category
                ? "border-l-2 border-primary bg-base-50 text-primary"
                : "border-l-2 border-transparent text-secondary hover:bg-base-50 hover:text-primary"
            )}
          >
            {category}
            <ChevronRight
              className={cn(
                "size-4 transition-colors",
                activeCategory === category ? "text-primary" : "text-base-400"
              )}
            />
          </button>
        ))}
      </div>

      <div className="w-[420px] p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="space-y-1"
          >
            <NavigationMenuLink asChild>
              <Link
                href={activeGroup.href}
                className="group mb-2 block rounded-sm px-3 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-base-50"
              >
                <span className="flex items-center gap-2">
                  All {activeCategory}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
                <span className="mt-1 block font-normal text-xs leading-relaxed text-text-secondary">
                  {activeGroup.description}
                </span>
              </Link>
            </NavigationMenuLink>
            {activeGroup.items.map((service) => (
              <NavigationMenuLink key={service.href} asChild>
                <Link
                  href={service.href}
                  className="block rounded-sm px-3 py-2.5 text-sm font-medium text-secondary transition-colors hover:text-primary"
                >
                  {service.label}
                </Link>
              </NavigationMenuLink>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
