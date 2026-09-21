"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { CascadingMenu } from "@/components/layout/CascadingMenu"
import type { SiteNavigation } from "@/lib/navigation"
import { cn } from "@/lib/utils"
import LicorneLogo from "@/public/Licorne Logo-bg-removed.jpeg"

function MobileNavItem({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        className={cn(
          "block py-2 text-secondary hover:text-primary transition-colors",
          className
        )}
      >
        {children}
      </Link>
    </SheetClose>
  )
}

function MobileAccordion({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-base-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 text-secondary font-medium"
      >
        {title}
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-[1400px] pb-3" : "max-h-0"
        )}
      >
        {children}
      </div>
    </div>
  )
}

export function Header({ navigation }: { navigation: SiteNavigation }) {
  const { header, companySetup, serviceCategories, resourceLinks } = navigation
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinkStyles = cn(
    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
    isScrolled
      ? "text-secondary hover:text-primary"
      : "text-white hover:text-primary"
  )

  const triggerStyles = cn(
    "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent",
    isScrolled
      ? "text-secondary hover:text-primary data-[state=open]:text-primary"
      : "text-white hover:text-primary data-[state=open]:text-primary"
  )

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="h-12 relative">
              <Image
                src={LicorneLogo}
                alt="Licorne Logo"
                height={48}
                className="h-full w-auto object-contain"
                style={{
                  filter: isScrolled ? "none" : "brightness(0) invert(1)",
                }}
              />
            </div>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={navLinkStyles}>
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerStyles}>
                  {companySetup.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[360px] p-3 bg-white space-y-1">
                    {companySetup.items.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="group block rounded-sm px-3 py-2.5 transition-colors hover:bg-base-50"
                          >
                            <span className="block text-sm font-medium text-secondary group-hover:text-primary">
                              {item.label}
                            </span>
                            {item.description && (
                              <span className="block text-xs text-text-secondary">
                                {item.description}
                              </span>
                            )}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerStyles}>
                  <Link href={header.servicesHref} className="hover:text-primary">
                    {header.servicesLabel}
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <CascadingMenu categories={serviceCategories} />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerStyles}>
                  {header.resourcesLabel}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[300px] p-3 bg-white space-y-1">
                    {resourceLinks.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block rounded-sm px-3 py-2.5 text-sm font-medium text-secondary transition-colors hover:text-primary"
                          >
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {header.links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild>
                    <Link href={link.href} className={navLinkStyles}>
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:block">
            <Link
              href={header.ctaButton.href}
              className="px-5 py-2.5 transition-colors text-sm font-medium rounded-sm bg-primary text-white hover:bg-primary-hover"
            >
              {header.ctaButton.label}
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "lg:hidden p-2 transition-colors",
                  isScrolled
                    ? "text-secondary hover:text-primary"
                    : "text-white hover:text-primary"
                )}
                aria-label="Open menu"
              >
                <Menu className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md">
              <SheetHeader className="border-b border-base-200 pb-4">
                <SheetTitle className="text-left">
                  <span className="text-xl text-secondary">Licorne</span>
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-6 space-y-1">
                <MobileNavItem href="/" className="font-medium">
                  Home
                </MobileNavItem>

                <MobileAccordion title={companySetup.title}>
                  <div className="pl-4 space-y-1">
                    {companySetup.items.map((item) => (
                      <MobileNavItem
                        key={item.href}
                        href={item.href}
                        className="text-sm py-1.5"
                      >
                        {item.label}
                      </MobileNavItem>
                    ))}
                  </div>
                </MobileAccordion>

                <MobileAccordion title={header.servicesLabel}>
                  <div className="space-y-4 pl-4">
                    {serviceCategories.map(({ title, href, items }) => (
                      <div key={title}>
                        <MobileNavItem
                          href={href}
                          className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 py-0"
                        >
                          {title}
                        </MobileNavItem>
                        <div className="space-y-1">
                          {items.map((item) => (
                            <MobileNavItem
                              key={item.href}
                              href={item.href}
                              className="text-sm py-1.5"
                            >
                              {item.label}
                            </MobileNavItem>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </MobileAccordion>

                <MobileAccordion title={header.resourcesLabel}>
                  <div className="pl-4 space-y-1">
                    {resourceLinks.map((item) => (
                      <MobileNavItem
                        key={item.href}
                        href={item.href}
                        className="text-sm py-1.5"
                      >
                        {item.label}
                      </MobileNavItem>
                    ))}
                  </div>
                </MobileAccordion>

                {header.links.map((link) => (
                  <MobileNavItem key={link.href} href={link.href} className="font-medium">
                    {link.label}
                  </MobileNavItem>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-base-200">
                <SheetClose asChild>
                  <Link
                    href={header.ctaButton.href}
                    className="block w-full px-5 py-3 bg-secondary text-white hover:bg-primary transition-colors text-sm font-medium rounded-sm text-center"
                  >
                    {header.ctaButton.label}
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
