"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import type { NavCategory } from "@/lib/navigation"
import { cn } from "@/lib/utils"

export function CascadingMenu({ categories }: { categories: NavCategory[] }) {
  const [activeCategory, setActiveCategory] = useState(categories[0].title)
  const activeGroup =
    categories.find((category) => category.title === activeCategory) ?? categories[0]

  return (
    <div className="flex min-h-[300px] w-[700px] bg-white">
      <div className="w-[280px] shrink-0 border-r border-base-200 py-2">
        {categories.map(({ title }) => (
          <button
            key={title}
            onMouseEnter={() => setActiveCategory(title)}
            className={cn(
              "flex w-full items-center justify-between gap-3 whitespace-nowrap px-4 py-3 text-left text-sm font-medium transition-colors",
              activeCategory === title
                ? "border-l-2 border-primary bg-base-50 text-primary"
                : "border-l-2 border-transparent text-secondary hover:bg-base-50 hover:text-primary"
            )}
          >
            {title}
            <ChevronRight
              className={cn(
                "size-4 shrink-0 transition-colors",
                activeCategory === title ? "text-primary" : "text-base-400"
              )}
            />
          </button>
        ))}
      </div>

      <div className="flex-1 p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup.title}
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
                  All {activeGroup.title}
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
