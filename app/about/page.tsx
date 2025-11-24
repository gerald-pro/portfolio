import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Section,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/section";

export default function AboutPage() {
  return (
    <div className="container">
      <Section>
        <SectionHeader>
          <SectionTitle>Sobre mí</SectionTitle>
          <SectionSubtitle>
            Ingeniero en sistemas especializado en desarrollo web y móvil.
          </SectionSubtitle>
        </SectionHeader>

        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
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
              <h3 className="text-2xl font-semibold tracking-tight text-brand-900 dark:text-brand-100">
                Educación y Certificaciones
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="bg-brand-50/50 dark:bg-slate-900/50 border-brand-100 dark:border-brand-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-bold text-brand-900 dark:text-brand-100">
                      Licenciatura en Ingeniería en Sistemas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-600 dark:text-slate-400">
                    Universidad Autónoma Gabriel René Moreno (2019–2024)
                  </CardContent>
                </Card>
                <Card className="bg-brand-50/50 dark:bg-slate-900/50 border-brand-100 dark:border-brand-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-bold text-brand-900 dark:text-brand-100">
                      Beca a la excelencia
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-600 dark:text-slate-400">
                    2020 y 2021 (UAGRM)
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="h-full border-brand-100 dark:border-brand-800">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-brand-900 dark:text-brand-100">
                  Habilidades Técnicas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["PHP", "CodeIgniter", "Laravel"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-brand-100 text-brand-900 hover:bg-brand-200 dark:bg-brand-900/40 dark:text-brand-100"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Vue.js", "React", "Next.js"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-brand-100 text-brand-900 hover:bg-brand-200 dark:bg-brand-900/40 dark:text-brand-100"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                    Mobile
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Flutter", "Dart"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-brand-100 text-brand-900 hover:bg-brand-200 dark:bg-brand-900/40 dark:text-brand-100"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                    DevOps & Infra
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Linux",
                      "Google Cloud",
                      "AWS",
                      "CI/CD",
                      "WebSockets",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-brand-100 text-brand-900 hover:bg-brand-200 dark:bg-brand-900/40 dark:text-brand-100"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
