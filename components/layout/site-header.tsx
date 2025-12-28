"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 neon-border-cyan bg-primary-950/85">
      <div className="container flex h-16 items-center justify-between gap-4 px-6">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="text-sm font-bold tracking-tight transition-all font-heading">
            {siteConfig.name.toUpperCase()}
          </span>
          <span className="hidden text-xs text-slate-400 sm:inline font-mono">
            // {siteConfig.role}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-300">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 rounded-sm transition-all hover:bg-cyber-cyan/10 hover:text-cyber-cyan hover:neon-border-cyan border-2 border-transparent uppercase tracking-wide text-xs font-mono"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 rounded-sm border border-cyber-cyan/30 text-cyber-cyan hover:bg-primary-500 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Nav Overlay */}
        <MobileNav
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
}

