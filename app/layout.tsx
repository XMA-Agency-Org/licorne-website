import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-secondary",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Licorne Corporate Services | Company Formation & PRO Services Dubai",
  description:
    "Dubai's trusted business setup partner. Mainland, free zone and offshore company formation, license services, visas, banking, tax and notary services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-secondary antialiased`}
      >
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
