import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Section,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/section";

// Helper to strip versions (e.g. "Laravel 11.x" -> "Laravel")
const stripVersion = (tech: string) => tech.replace(/\s\d+(\.\d+)*.*$/, '');

export default function ProjectsPage() {
  return (
    <div className="container">
      <Section>
        <SectionHeader>
          <SectionTitle>Proyectos</SectionTitle>
          <SectionSubtitle>
            Una selección de mis trabajos más recientes y relevantes.
          </SectionSubtitle>
        </SectionHeader>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.slug} className="flex flex-col h-full border-brand-100 dark:border-brand-800 bg-white dark:bg-slate-950/50 transition-all hover:shadow-md dark:hover:shadow-brand-900/20 overflow-hidden">
              {/* Cover Image */}
              {project.images?.cover && (
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={project.images.cover}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.backend?.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-brand-50 text-brand-900 dark:bg-brand-900/20 dark:text-brand-200"
                    >
                      {stripVersion(tech)}
                    </Badge>
                  ))}
                  {project.techStack.frontend?.slice(0, 2).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-brand-50 text-brand-900 dark:bg-brand-900/20 dark:text-brand-200"
                    >
                      {stripVersion(tech)}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-brand-600 hover:bg-brand-700 text-white dark:bg-brand-600 dark:hover:bg-brand-500">
                  <Link href={`/projects/${project.slug}`}>Ver detalles</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
