import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

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
  title: "Licorne Business Setup Dubai | Company Formation & PRO Services",
  description:
    "Dubai's trusted business setup partner. Mainland & free zone company formation, visa services, PRO services, and bank account opening. 500+ companies formed.",
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
      </body>
    </html>
  );
}
