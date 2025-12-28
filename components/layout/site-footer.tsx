// components/layout/site-footer.tsx
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t-2 neon-border-cyan bg-brand-950/95 backdrop-blur-lg">
      <div className="container flex flex-col gap-3 py-6 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} {siteConfig.name}. ALL RIGHTS RESERVED.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {siteConfig.links.github && (
            <Link
              href={siteConfig.links.github}
              className="transition-all hover:text-cyber-cyan hover:neon-glow-cyan text-xs uppercase tracking-wide font-mono"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          )}
          {siteConfig.links.linkedin && (
            <Link
              href={siteConfig.links.linkedin}
              className="transition-all hover:text-cyber-cyan hover:neon-glow-cyan text-xs uppercase tracking-wide font-mono"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
          )}
          {/* <Link
            href="/cv_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border-2 neon-border-orange px-3 py-1 text-xs font-medium text-cyber-orange transition-all hover:bg-cyber-orange hover:text-white hover:neon-glow-orange uppercase tracking-wide font-mono"
          >
            Download CV
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
