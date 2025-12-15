import Image from "next/image";
import { aboutData } from "@/data/about";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Section,
  SectionHeader,
  SectionTitle,
} from "@/components/ui/section";

export default function AboutPage() {
  return (
    <Section>
      <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
        {/* ===== Left: Bio ===== */}
        <div className="space-y-8">
          <SectionHeader>
            <SectionTitle>Sobre mí</SectionTitle>
          </SectionHeader>

          <div className="prose prose-invert max-w-none text-slate-300">
            {aboutData.bio.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-200">
              Educación y Certificaciones
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutData.education.map((item) => (
                <Card key={item.title}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-400">
                    {item.institution} ({item.period})
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Right: Profile + Skills ===== */}
        <div className="space-y-6">
          {/* Profile Image */}
          <Card className="overflow-hidden">
            <div className="relative aspect-square bg-surface-800">
              <Image
                src={aboutData.profileImage.src}
                alt={aboutData.profileImage.alt}
                fill
                priority
                className="object-cover"
              />
            </div>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Habilidades Técnicas
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              {aboutData.skills.map((group) => (
                <SkillGroup
                  key={group.title}
                  title={group.title}
                  skills={group.skills}
                />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}

/* ===== Helper Component ===== */
function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-semibold text-primary-400">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
