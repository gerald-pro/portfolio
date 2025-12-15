import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Section,
    SectionHeader,
    SectionSubtitle,
    SectionTitle,
} from "@/components/ui/section";
import { ProjectGallery } from "@/components/project/project-gallery";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="container py-10">
            <div className="mb-8">
                <Button asChild variant="ghost" className="pl-0 hover:bg-transparent hover:text-brand-600 dark:hover:text-brand-400">
                    <Link href="/projects" className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Volver a Proyectos
                    </Link>
                </Button>
            </div>

            <Section className="py-0 md:py-0 lg:py-0">
                <SectionHeader className="mb-8">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div>
                            <SectionTitle>{project.title}</SectionTitle>
                            <SectionSubtitle className="mt-2 text-lg">
                                {project.description}
                            </SectionSubtitle>
                        </div>
                        <div className="flex gap-2">
                            {project.links?.demo && (
                                <Button asChild>
                                    <Link href={project.links.demo} target="_blank">
                                        Ver Demo
                                    </Link>
                                </Button>
                            )}
                            {project.links?.repo && (
                                <Button asChild variant="outline">
                                    <Link href={project.links.repo} target="_blank">
                                        Código
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>
                </SectionHeader>

                {/* Cover Image */}
                {project.images?.cover && (
                    <div className="mb-10 relative h-64 md:h-96 w-full overflow-hidden rounded-xl border border-brand-100 dark:border-brand-800 bg-slate-100 dark:bg-slate-900">
                        <Image
                            src={project.images.cover}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
                    <div className="space-y-10">
                        {/* Overview */}
                        <div className="prose prose-slate dark:prose-invert max-w-none">
                            <h3 className="text-xl font-semibold text-brand-200">
                                Descripción General
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                {project.content}
                            </p>
                        </div>

                        {/* Gallery */}
                        {project.images?.gallery && project.images.gallery.length > 0 && (
                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                                    Galería
                                </h2>
                                <ProjectGallery images={project.images.gallery} title={project.title} />
                            </section>
                        )}

                        {/* Features */}
                        {project.features && (
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-brand-200">
                                    Funcionalidades Clave
                                </h3>
                                <div className="grid gap-6 sm:grid-cols-2">
                                    {project.features.map((featureGroup) => (
                                        <Card key={featureGroup.title} className="border-brand-800 bg-slate-900/50">
                                            <CardHeader className="pb-2">
                                                <CardTitle className="text-base font-bold text-brand-200">
                                                    {featureGroup.title}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-slate-400">
                                                    {featureGroup.items.map((item) => (
                                                        <li key={item}>{item}</li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar: Tech Stack */}
                    <div className="space-y-6">
                        <Card className="border-brand-100 dark:border-brand-800">
                            <CardHeader>
                                <CardTitle className="text-lg font-bold text-brand-200">
                                    Stack Tecnológico
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {Object.entries(project.techStack).map(([category, techs]) => (
                                    <div key={category} className="space-y-2">
                                        <h4 className="text-sm font-semibold capitalize text-slate-900 dark:text-slate-200">
                                            {category}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {techs?.map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="secondary"

                                                    className="hover:bg-brand-800 bg-brand-900/40 text-brand-400">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Section>
        </div>
    );
}
