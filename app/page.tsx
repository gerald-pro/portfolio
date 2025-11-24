// app/page.tsx
import { Hero } from "@/components/home/hero";
import { FeaturedProject } from "@/components/home/featured-project";
import { projects } from "@/data/projects";

export default function HomePage() {
  const featuredProject = projects.find((p) => p.isFeatured);

  return (
    <div className="space-y-12 md:space-y-16">
      <Hero />
      {featuredProject && <FeaturedProject project={featuredProject} />}
    </div>
  );
}
