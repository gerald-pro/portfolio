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

export default function ExperiencePage() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Experiencia Profesional</SectionTitle>
        <SectionSubtitle>
          Mi trayectoria en el desarrollo de software y liderazgo técnico.
        </SectionSubtitle>
      </SectionHeader>

      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary-500/30 before:to-transparent">
        {/* Zencillo Software */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          {/* Timeline node */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary-500 bg-surface-800 text-primary-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fillRule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>

          <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <CardTitle className="text-lg">
                  Software Developer
                </CardTitle>
                <time className="text-sm font-medium text-secondary-400">
                  Feb 2025 – Presente
                </time>
              </div>
              <div className="text-sm text-slate-400">
                Zencillo Software (Miami, USA) •{" "}
                <Badge variant="outline" className="text-[10px] px-1 py-0 h-5">
                  Remoto
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-2 text-sm text-slate-300">
              <p>
                Desarrollo de aplicación web multiplataforma con Flutter
                orientada a fidelización; mantenimiento de infraestructura en
                Firebase; integración REST y WebSockets para mensajería en
                tiempo real.
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li>Desarrollo e integración de API REST.</li>
                <li>Implementación de WebSockets en tiempo real.</li>
                <li>Gestión de infraestructura y optimización continua.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Desarrollamelo */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary-500 bg-surface-800 text-primary-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
              <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
            </svg>
          </div>

          <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <CardTitle className="text-lg">
                  Full-Stack Developer
                </CardTitle>
                <time className="text-sm font-medium text-secondary-400">
                  Jun 2024 – Ene 2025
                </time>
              </div>
              <div className="text-sm text-slate-400">
                Desarrollamelo (Bolivia) •{" "}
                <Badge variant="outline" className="text-[10px] px-1 py-0 h-5">
                  Remoto
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-2 text-sm text-slate-300">
              <p>
                Desarrollo de aplicaciones web en Laravel y Vue.js;
                creación de aplicaciones móviles con Flutter.
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li>Desarrollo de APIs REST y módulos backend.</li>
                <li>Mejoras UX y front-end en Vue.js.</li>
                <li>Apps móviles multiplataforma con Flutter.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* UAGRM */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary-500 bg-surface-800 text-primary-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
              <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
            </svg>
          </div>

          <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <CardTitle className="text-lg">
                  Full-Stack Developer
                </CardTitle>
                <time className="text-sm font-medium text-secondary-400">
                  2023 (6 meses)
                </time>
              </div>
              <div className="text-sm text-slate-400">
                Departamento de Acreditación, UAGRM
              </div>
            </CardHeader>

            <CardContent className="space-y-2 text-sm text-slate-300">
              <p>
                Desarrollo de una aplicación de autoevaluación institucional
                usando Laravel, Informix, Livewire y jQuery.
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li>Funcionalidades para procesos de acreditación.</li>
                <li>Integración con bases de datos Informix.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Inforfactory */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary-500 bg-surface-800 text-primary-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
              <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
            </svg>
          </div>

          <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <CardTitle className="text-lg">
                  Pasante
                </CardTitle>
                <time className="text-sm font-medium text-secondary-400">
                  2023 (6 meses)
                </time>
              </div>
              <div className="text-sm text-slate-400">
                Inforfactory
              </div>
            </CardHeader>

            <CardContent className="space-y-2 text-sm text-slate-300">
              <p>
                Desarrollo de herramientas para extracción masiva de datos
                de PDFs y monitorización de recursos AWS.
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li>Automatización de extracción masiva de PDFs.</li>
                <li>Monitorización de servicios AWS.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
