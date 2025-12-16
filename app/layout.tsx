import type { Metadata } from "next";
import "./globals.css";
import { Orbitron, Rajdhani, Share_Tech_Mono } from "next/font/google";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

import { CyberBackground } from "@/components/ui/cyber-background";

// Cyberpunk Typography
const fontHeading = Orbitron({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const fontSans = Rajdhani({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const fontMono = Share_Tech_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen bg-transparent text-slate-100 antialiased", // Changed bg-surface-950 to bg-transparent because the background component handles the color
          fontHeading.variable,
          fontSans.variable,
          fontMono.variable
        )}
      >
        <CyberBackground />
        <div className="flex min-h-screen flex-col relative z-10">
          <SiteHeader />
          <main className="flex-1">
            <div className="container py-10 px-6 md:py-16">
              {children}
            </div>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
