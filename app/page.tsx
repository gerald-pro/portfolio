// app/page.tsx
import { Hero } from "@/components/home/hero";
import { FeaturedProject } from "@/components/home/featured-project";

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <Hero />
      <FeaturedProject />
    </div>
  );
}
