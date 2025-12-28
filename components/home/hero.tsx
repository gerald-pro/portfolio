"use client";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArcReactor } from "./arc-reactor";
import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { LinkedinLogoIcon } from "@phosphor-icons/react";
import { useStaggerAnimation } from "@/hooks/use-stagger-animation";

const techBadges = [
    "Java · Spring Boot",
    "PHP · Laravel · CodeIgniter",
    "REST APIs",
    "Vue · Next.js",
    "Flutter",
];

export function Hero() {
    // 5 badges + 1 title + 1 description + 3 buttons + 1 arc reactor = 11 items
    const visibleItems = useStaggerAnimation({
        totalItems: 11,
        delayPerItem: 80,
        initialDelay: 200,
    });

    return (
        <section className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center py-8 md:py-12">
            {/* Left column: text */}
            <div className="space-y-8">
                <div className="flex justify-start flex-wrap gap-1.5 md:gap-2 opacity-80">
                    {techBadges.map((item, index) => (
                        <Badge
                            key={item}
                            variant="outline"
                            className={`bg-black/50 backdrop-blur-sm text-cyber-cyan stagger-item ${visibleItems[index] ? "visible" : ""
                                }`}
                        >
                            {item}
                        </Badge>
                    ))}
                </div>

                {/* Main heading */}
                <div className="space-y-4">
                    <h1
                        className={`text-4xl font-bold tracking-tight text-cyber-cyan sm:text-5xl md:text-6xl neon-glow-cyan stagger-item ${visibleItems[5] ? "visible" : ""
                            }`}
                    >
                        GERALD AVALOS
                        <span className="block text-2xl font-normal text-slate-300 sm:text-3xl mt-2 font-sans">
                            Software Developer · Full Stack
                        </span>
                    </h1>

                    <p
                        className={`text-lg leading-relaxed text-slate-300 max-w-xl stagger-item ${visibleItems[6] ? "visible" : ""
                            }`}
                    >
                        Development of{" "}
                        <span className="font-medium text-cyber-orange neon-glow-orange">
                            business-oriented systems and applications
                        </span>
                        , with a strong focus on backend development, API design, and
                        service integration. Experience working on web and mobile projects
                        for companies and institutions.
                    </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                    <Button
                        asChild
                        size="lg"
                        className={`stagger-item ${visibleItems[7] ? "visible" : ""}`}
                    >
                        <Link href="/projects">View projects</Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className={`stagger-item ${visibleItems[8] ? "visible" : ""}`}
                    >
                        <a href={`mailto:${siteConfig.links.email}`}>
                            <Mail className="mr-2 h-5 w-5" />
                            Send email
                        </a>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className={`stagger-item ${visibleItems[9] ? "visible" : ""}`}
                    >
                        <a href={siteConfig.links.linkedin}>
                            <LinkedinLogoIcon size={24} className="mr-2" />
                            LinkedIn
                        </a>
                    </Button>
                </div>
            </div>

            {/* Right column: Arc Reactor */}
            <div
                className={`relative flex justify-center items-center stagger-item ${visibleItems[10] ? "visible" : ""
                    }`}
            >
                <div className="absolute inset-0 bg-cyber-cyan/5 blur-3xl rounded-full" />
                <div className="z-10 w-full mx-14">
                    <ArcReactor />
                </div>
            </div>
        </section>
    );
}
