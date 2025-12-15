import Image from "next/image";
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
  SectionSubtitle,
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
            <p className="leading-relaxed">
              Soy ingeniero en sistemas especializado en desarrollo web y móvil,
              soporte técnico y administración de servidores. Me apasiona
              transformar procesos operativos complejos en aplicaciones robustas
              y fáciles de usar, priorizando la trazabilidad, la seguridad y la
              entrega incremental.
            </p>
            <p className="leading-relaxed mt-4">
              Trabajo frecuentemente con equipos remotos bajo metodologías
              ágiles para asegurar lanzamientos confiables y soporte
              pos-despliegue.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-200">
              Educación y Certificaciones
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">
                    Licenciatura en Ingeniería en Sistemas
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-400">
                  Universidad Autónoma Gabriel René Moreno (2019–2024)
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">
                    Beca a la excelencia
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-400">
                  2020 y 2021 (UAGRM)
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* ===== Right: Profile + Skills ===== */}
        <div className="space-y-6">
          {/* Profile Image */}
          <Card className="overflow-hidden">
            <div className="relative aspect-square bg-surface-800">
              <Image
                src="/profile.jpg"
                alt="Foto de perfil"
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
              <SkillGroup
                title="Backend"
                skills={[
                  "PHP",
                  "CodeIgniter",
                  "Laravel",
                  "Java",
                  "Spring Boot",
                  "NestJS",
                ]}
              />

              <SkillGroup
                title="Frontend"
                skills={["Vue.js", "React", "Next.js"]}
              />

              <SkillGroup
                title="Mobile"
                skills={["Flutter", "Dart"]}
              />

              <SkillGroup
                title="DevOps & Infra"
                skills={[
                  "Linux",
                  "Google Cloud",
                  "AWS",
                  "CI/CD",
                  "WebSockets",
                ]}
              />
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
