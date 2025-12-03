import Link from "next/link";
import { Mail, Github, Linkedin, ExternalLink, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Section,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/section";

export default function ContactPage() {
  return (
    <div className="container py-10 md:py-20">
      <Section className="py-0">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left Column: Header & Primary Action */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <SectionTitle className="text-4xl md:text-5xl">
                Contacto
              </SectionTitle>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full px-8 text-base h-12" asChild>
                <a href={`mailto:${siteConfig.links.email}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar correo
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base h-12" asChild>
                <Link href="/cv_resume.pdf" target="_blank">
                  Ver Curriculum
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Profile & Social Links */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Profile Card - Moved from Hero */}
            <Card className="p-3 scan-line-effect border-cyber-cyan/50 bg-brand-950/50 backdrop-blur-sm">
              <div className="overflow-hidden rounded-lg border-2 neon-border-cyan bg-brand-950 relative group">
                <div className="absolute inset-0 bg-cyber-cyan/10 z-10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-[url('/grid.png')] opacity-20 z-20" />
                <img
                  src="/profile.jpg"
                  alt="Gerald Avalos"
                  className="h-64 w-full object-cover sm:h-80 transition-transform duration-700 hover:scale-105 grayscale hover:grayscale-0"
                />

                {/* Technical Overlays */}
                <div className="absolute top-2 left-2 z-30">
                  <Badge variant="outline" className="text-[10px] border-cyber-cyan/50 text-cyber-cyan bg-black/50 backdrop-blur-md">
                    ID: GERALD-01
                  </Badge>
                </div>
                <div className="absolute bottom-2 right-2 z-30">
                  <Badge variant="outline" className="text-[10px] border-cyber-cyan/50 text-cyber-cyan bg-black/50 backdrop-blur-md">
                    STATUS: ACTIVE
                  </Badge>
                </div>
              </div>
            </Card>

            <div className="rounded-lg border-2 neon-border-cyan bg-brand-950/50 p-6 backdrop-blur-sm">
              <div className="grid gap-4">
                {siteConfig.links.github && (
                  <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group"
                  >
                    <Card className="transition-all duration-300 border-cyber-cyan/30 bg-brand-950 hover:neon-border-cyan hover:shadow-[0_0_15px_rgba(2,127,147,0.3)]">
                      <CardContent className="flex items-center p-4">
                        <div className="mr-4 rounded-sm bg-cyber-teal/20 p-3 group-hover:bg-cyber-cyan/20 transition-colors">
                          <Github className="h-6 w-6 text-cyber-cyan group-hover:text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-slate-200 font-mono uppercase">GitHub</p>
                          <p className="text-sm text-slate-400">Explora mi código</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-cyber-cyan transition-transform group-hover:translate-x-1 group-hover:neon-glow-cyan" />
                      </CardContent>
                    </Card>
                  </Link>
                )}

                {siteConfig.links.linkedin && (
                  <Link
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="group"
                  >
                    <Card className="transition-all duration-300 border-cyber-cyan/30 bg-brand-950 hover:neon-border-cyan hover:shadow-[0_0_15px_rgba(2,127,147,0.3)]">
                      <CardContent className="flex items-center p-4">
                        <div className="mr-4 rounded-sm bg-cyber-teal/20 p-3 group-hover:bg-cyber-cyan/20 transition-colors">
                          <Linkedin className="h-6 w-6 text-cyber-cyan group-hover:text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-slate-200 font-mono uppercase">LinkedIn</p>
                          <p className="text-sm text-slate-400">Conecta profesionalmente</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-cyber-cyan transition-transform group-hover:translate-x-1 group-hover:neon-glow-cyan" />
                      </CardContent>
                    </Card>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
