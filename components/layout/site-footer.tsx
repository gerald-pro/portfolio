// components/layout/site-footer.tsx
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-100/80 bg-white/80 backdrop-blur dark:border-brand-800/50 dark:bg-slate-950/80">
      <div className="container flex flex-col gap-3 py-6 px-6 text-sm text-slate-500 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
          reservados.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {siteConfig.links.github && (
            <Link
              href={siteConfig.links.github}
              className="transition hover:text-brand-900 dark:hover:text-brand-100"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          )}
          {siteConfig.links.linkedin && (
            <Link
              href={siteConfig.links.linkedin}
              className="transition hover:text-brand-900 dark:hover:text-brand-100"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
          )}
          <Link
            href="/cv_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-brand-500/60 px-3 py-1 text-xs font-medium text-brand-900 transition hover:bg-brand-500 hover:text-white dark:border-brand-400/60 dark:text-brand-100 dark:hover:bg-brand-500 dark:hover:text-white"
          >
            Descargar CV
          </Link>
        </div>
      </div>
    </footer>
  );
}
