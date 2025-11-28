// components/home/hero.tsx
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Hero() {
    return (
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center py-8 md:py-12">
            {/* Columna izquierda: texto */}
            <div className="space-y-8">
                {/* Badge superior */}
                <Badge variant="outline" className="gap-2 py-1.5 pl-2 pr-3">
                    <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
                    Disponible para colaboraciones remotas
                </Badge>

                {/* Título principal */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-brand-900 dark:text-brand-50 sm:text-5xl md:text-6xl">
                        Gerald Avalos
                        <span className="block text-2xl font-normal text-slate-600 dark:text-slate-400 sm:text-3xl mt-2">
                            Full-Stack Developer
                        </span>
                    </h1>
                    <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl">
                        Construyo aplicaciones web y móviles escalables. Especializado en{" "}
                        <span className="font-medium text-brand-700 dark:text-brand-400">
                            PHP (Laravel), JavaScript (React/Vue) y Flutter
                        </span>
                        , con un enfoque en arquitectura limpia y experiencia de usuario.
                    </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                    <Button asChild size="lg" className="rounded-full">
                        <Link href="/projects">Ver proyectos</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full">
                        <Link href="/contact">Contactar</Link>
                    </Button>
                </div>
            </div>

            {/* Columna derecha: foto + tech stack */}
            <Card className="relative overflow-hidden p-3 border-brand-100/50 dark:border-brand-800/50 bg-white/60 dark:bg-slate-900/60">
                <div className="overflow-hidden rounded-2xl border border-brand-100/50 dark:border-brand-800/50 bg-brand-50 dark:bg-slate-950">
                    <Image
                        src="/profile.jpg"
                        alt="Gerald Avalos"
                        width={600}
                        height={600}
                        className="h-64 w-full object-cover sm:h-80 transition-transform duration-700 hover:scale-105"
                        priority
                    />
                </div>

                <div className="mt-4 space-y-3 px-1 pb-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Stack Principal
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Laravel",
                            "Next.js",
                            "Vue",
                            "Flutter",
                            "Google Cloud",
                        ].map((item) => (
                            <Badge
                                key={item}
                                variant="secondary"
                                className="bg-brand-50 text-brand-900 hover:bg-brand-100 dark:bg-brand-900/30 dark:text-brand-200 dark:hover:bg-brand-900/50"
                            >
                                {item}
                            </Badge>
                        ))}
                    </div>
                </div>
            </Card>

        </section>
    );
}
