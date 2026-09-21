"use client"

import { createContext, useContext } from "react"
import { DEFAULT_NAVIGATION, type SiteNavigation } from "@/lib/navigation"

const NavigationContext = createContext<SiteNavigation>(DEFAULT_NAVIGATION)

export function NavigationProvider({
  navigation,
  children,
}: {
  navigation: SiteNavigation
  children: React.ReactNode
}) {
  return <NavigationContext.Provider value={navigation}>{children}</NavigationContext.Provider>
}

export const useSiteNavigation = () => useContext(NavigationContext)
