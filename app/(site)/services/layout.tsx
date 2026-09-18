import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Setup Services Dubai | Licorne",
  description:
    "Complete business setup services in Dubai. Mainland and free zone company formation, visa services, PRO support, and corporate banking assistance.",
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
