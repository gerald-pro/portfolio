// components/layout/site-header.tsx
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 neon-border-cyan bg-brand-950/95 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between gap-4 px-6">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="text-sm font-bold tracking-tight text-cyber-cyan transition-all group-hover:neon-glow-cyan font-heading">
            {siteConfig.name.toUpperCase()}
          </span>
          <span className="hidden text-xs text-slate-400 sm:inline font-mono">
            // {siteConfig.role}
          </span>
        </Link>

        <nav className="flex items-center gap-4 text-sm font-medium text-slate-300">
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
      </div>
    </header>
  );
}
