import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Section,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/section";

// Helper to strip versions (e.g. "Laravel 11.x" -> "Laravel")
const stripVersion = (tech: string) =>
  tech.replace(/\s\d+(\.\d+)*.*$/, "");

export default function ProjectsPage() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Proyectos</SectionTitle>
        <SectionSubtitle>
          Una selección de mis trabajos más recientes y relevantes.
        </SectionSubtitle>
      </SectionHeader>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.slug}
            className="flex h-full flex-col transition-all hover:shadow-xl"
          >
            {/* Cover Image */}
            {project.images?.cover && (
              <div className="relative h-48 w-full overflow-hidden bg-surface-800">
                <Image
                  src={project.images.cover}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}

            <CardHeader>
              <CardTitle className="text-xl">
                {project.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 space-y-4">
              <p className="text-sm text-slate-400 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.backend
                  ?.slice(0, 3)
                  .map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {stripVersion(tech)}
                    </Badge>
                  ))}

                {project.techStack.frontend
                  ?.slice(0, 2)
                  .map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {stripVersion(tech)}
                    </Badge>
                  ))}
              </div>
            </CardContent>

            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/projects/${project.slug}`}>
                  Ver detalles
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
