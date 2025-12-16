import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
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
            {/* Back */}
            <div className="mb-8">
                <Button
                    asChild
                    variant="ghost"
                    className="pl-0 hover:bg-transparent hover:text-primary-400"
                >
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
                        Back to Projects
                    </Link>
                </Button>
            </div>

            <Section className="py-0">
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
                                        View Demo
                                    </Link>
                                </Button>
                            )}
                            {project.links?.repo && (
                                <Button asChild variant="outline">
                                    <Link href={project.links.repo} target="_blank">
                                        Source Code
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>
                </SectionHeader>

                {/* Cover */}
                {project.images?.cover && (
                    <div className="mb-10 relative h-64 md:h-96 w-full overflow-hidden rounded-xl border border-primary-500/30 bg-surface-800">
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
                    {/* Main */}
                    <div className="space-y-10">
                        {/* Overview */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-primary-400">
                                Overview
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                {project.content}
                            </p>
                        </div>

                        {/* Gallery */}
                        {project.images?.gallery &&
                            project.images.gallery.length > 0 && (
                                <section className="space-y-6">
                                    <h2 className="text-2xl font-bold tracking-tight text-slate-100">
                                        Gallery
                                    </h2>
                                    <ProjectGallery
                                        images={project.images.gallery}
                                        title={project.title}
                                    />
                                </section>
                            )}

                        {/* Features */}
                        {project.features && (
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-primary-400">
                                    Key Features
                                </h3>
                                <div className="grid gap-6 sm:grid-cols-2">
                                    {project.features.map((featureGroup) => (
                                        <Card key={featureGroup.title}>
                                            <CardHeader className="pb-2">
                                                <CardTitle className="text-base">
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

                    {/* Sidebar */}
                    <aside className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">
                                    Technology Stack
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {Object.entries(project.techStack).map(
                                    ([category, techs]) => (
                                        <div key={category} className="space-y-2">
                                            <h4 className="text-sm font-semibold capitalize text-slate-200">
                                                {category}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {techs?.map((tech) => (
                                                    <Badge key={tech} variant="secondary">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                )}
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </Section>
        </div>
    );
}
