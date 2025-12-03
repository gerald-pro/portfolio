// components/home/featured-project.tsx
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";

interface FeaturedProjectProps {
    project: Project;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
    // Helper to strip versions (e.g. "Laravel 11.x" -> "Laravel")
    const stripVersion = (tech: string) => tech.replace(/\s\d+(\.\d+)*.*$/, '');

    return (
        <section className="space-y-6 py-8">
            <div className="flex items-end justify-between gap-4">
                <div className="space-y-1">
                    <Badge variant="secondary" className="uppercase">
                        Proyecto destacado
                    </Badge>
                    <h2 className="text-2xl font-bold tracking-tight text-cyber-cyan neon-glow-cyan">
                        {project.title}
                    </h2>
                </div>
                {project.links?.demo && (
                    <Button variant="link" className="hidden md:inline-flex h-auto p-0" asChild>
                        <Link href={project.links.demo} target="_blank" rel="noreferrer">
                            VER EN PRODUCCIÓN <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                    </Button>
                )}
            </div>

            <Card className="overflow-hidden scan-line-effect">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Content Side */}
                    <div className="p-6 md:p-8 flex flex-col justify-center space-y-6">
                        <div className="space-y-4">
                            <p className="text-lg font-medium text-slate-200">
                                {project.description}
                            </p>

                            {/* Tech Stack - Simplified */}
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.backend?.slice(0, 3).map((tech) => (
                                    <Badge key={tech} variant="default">
                                        {stripVersion(tech)}
                                    </Badge>
                                ))}
                                {project.techStack.frontend?.slice(0, 2).map((tech) => (
                                    <Badge key={tech} variant="default">
                                        {stripVersion(tech)}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="pt-2">
                            <Button asChild>
                                <Link href={`/projects/${project.slug}`}>
                                    Ver caso completo <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative h-64 md:h-auto min-h-[300px] bg-brand-950 border-l-2 neon-border-cyan">
                        {project.images?.cover && (
                            <Image
                                src={project.images.cover}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        )}
                    </div>
                </div>
            </Card>
        </section>
    );
}
