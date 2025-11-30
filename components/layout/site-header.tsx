// components/layout/site-header.tsx
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ModeToggle } from "@/components/mode-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-100/80 bg-white/80 backdrop-blur dark:border-brand-800/50 dark:bg-slate-950/80">
      <div className="container flex h-16 items-center justify-between gap-4 px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-sm font-semibold tracking-tight text-brand-900 dark:text-brand-100">
            {siteConfig.name.toUpperCase()}
          </span>
          <span className="hidden text-xs text-slate-500 dark:text-slate-400 sm:inline">
            {siteConfig.role}
          </span>
        </Link>

        <nav className="flex items-center gap-4 text-sm font-medium text-slate-700 dark:text-slate-300">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 transition hover:bg-brand-100/70 hover:text-brand-900 dark:hover:bg-brand-900/30 dark:hover:text-brand-100"
            >
              {item.label}
            </Link>
          ))}
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
