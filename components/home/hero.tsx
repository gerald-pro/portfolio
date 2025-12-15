// components/home/hero.tsx
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArcReactor } from "./arc-reactor";

export function Hero() {
    return (
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center py-8 md:py-12">
            {/* Columna izquierda: texto */}
            <div className="space-y-8">

                <div className="flex justify-start flex-wrap gap-2 opacity-80">
                    {[
                        "Laravel",
                        "Codeigniter",
                        "Next.js",
                        "Vue",
                        "Flutter",
                        "Spring Boot",
                    ].map((item) => (
                        <Badge
                            key={item}
                            variant="outline"
                            className="bg-black/50 backdrop-blur-sm text-cyber-cyan"
                        >
                            {item}
                        </Badge>
                    ))}
                </div>
                {/* Título principal */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-cyber-cyan sm:text-5xl md:text-6xl neon-glow-cyan">
                        GERALD AVALOS
                        <span className="block text-2xl font-normal text-slate-300 sm:text-3xl mt-2 font-sans">
                            Full-Stack Developer
                        </span>
                    </h1>
                    <p className="text-lg leading-relaxed text-slate-300 max-w-xl">
                        Construyo aplicaciones web y móviles escalables. Especializado en{" "}
                        <span className="font-medium text-cyber-orange neon-glow-orange">
                            PHP (Laravel), JavaScript (React/Vue) y Flutter
                        </span>
                        , con un enfoque en arquitectura limpia y experiencia de usuario.
                    </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                    <Button asChild size="lg">
                        <Link href="/projects">Ver proyectos</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/contact">Contactar</Link>
                    </Button>
                </div>
            </div>

            {/* Columna derecha: Arc Reactor */}
            <div className="relative flex justify-center items-center p-4">
                <div className="absolute inset-0 bg-cyber-cyan/5 blur-3xl rounded-full" />
                <div className="relative z-10 w-full max-w-md">
                    <ArcReactor />
                </div>
            </div>

        </section>
    );
}
