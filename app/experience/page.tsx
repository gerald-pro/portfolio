import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Section,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/section";

export default function ExperiencePage() {
  return (
    <div className="container">
      <Section>
        <SectionHeader>
          <SectionTitle>Experiencia Profesional</SectionTitle>
          <SectionSubtitle>
            Mi trayectoria en el desarrollo de software y liderazgo técnico.
          </SectionSubtitle>
        </SectionHeader>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent dark:before:via-slate-700">
          {/* Zencillo Software */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-brand-500 text-slate-500 group-[.is-active]:text-brand-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 dark:border-slate-900 dark:bg-slate-700 dark:group-[.is-active]:bg-brand-500">
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
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 border-brand-100 dark:border-brand-800 bg-white dark:bg-slate-950/50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <div className="font-bold text-slate-900 dark:text-slate-100">
                  Software Developer
                </div>
                <time className="font-caveat font-medium text-brand-600 dark:text-brand-400 text-sm">
                  Feb 2025 – Presente
                </time>
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-sm mb-2">
                Zencillo Software (Miami, USA) •{" "}
                <Badge variant="outline" className="text-[10px] px-1 py-0 h-5">
                  Remoto
                </Badge>
              </div>
              <div className="text-slate-600 dark:text-slate-300 text-sm space-y-2">
                <p>
                  Desarrollo de aplicación web multiplataforma con Flutter
                  orientada a fidelización; mantenimiento de infraestructura en
                  Firebase; integración REST y WebSockets para mensajería en
                  tiempo real.
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  <li>
                    Desarrollo e integración de API REST como canal principal de
                    comunicación.
                  </li>
                  <li>
                    Implementación de WebSockets para mensajería y chat en tiempo
                    real.
                  </li>
                  <li>
                    Administración de hosting y servicios en Firebase; soporte
                    continuo y optimizaciones de infraestructura.
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Desarrollamelo */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-brand-500 text-slate-500 group-[.is-active]:text-brand-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 dark:border-slate-900 dark:bg-slate-700 dark:group-[.is-active]:bg-brand-500">
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
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 border-brand-100 dark:border-brand-800 bg-white dark:bg-slate-950/50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <div className="font-bold text-slate-900 dark:text-slate-100">
                  Full-Stack Developer
                </div>
                <time className="font-caveat font-medium text-brand-600 dark:text-brand-400 text-sm">
                  Jun 2024 – Ene 2025
                </time>
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-sm mb-2">
                Desarrollamelo (Bolivia) •{" "}
                <Badge variant="outline" className="text-[10px] px-1 py-0 h-5">
                  Remoto
                </Badge>
              </div>
              <div className="text-slate-600 dark:text-slate-300 text-sm space-y-2">
                <p>
                  Desarrollo de aplicaciones web en PHP Laravel y Vue.js; creación
                  de aplicaciones móviles con Flutter.
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  <li>
                    Implementación de módulos backend en Laravel y APIs REST.
                  </li>
                  <li>Desarrollo front-end con Vue.js y mejora de UX.</li>
                  <li>
                    Construcción de apps móviles multiplataforma con Flutter y
                    optimización cross-device.
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          {/* UAGRM */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-brand-500 text-slate-500 group-[.is-active]:text-brand-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 dark:border-slate-900 dark:bg-slate-700 dark:group-[.is-active]:bg-brand-500">
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
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 border-brand-100 dark:border-brand-800 bg-white dark:bg-slate-950/50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <div className="font-bold text-slate-900 dark:text-slate-100">
                  Full-Stack Developer
                </div>
                <time className="font-caveat font-medium text-brand-600 dark:text-brand-400 text-sm">
                  2023 (6 meses)
                </time>
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-sm mb-2">
                Departamento de Acreditación, UAGRM
              </div>
              <div className="text-slate-600 dark:text-slate-300 text-sm space-y-2">
                <p>
                  Apoyo en el desarrollo de una aplicación de autoevaluación
                  institucional usando Laravel, Informix, Livewire y jQuery.
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  <li>
                    Desarrollo de funcionalidades para procesos de acreditación.
                  </li>
                  <li>
                    Integración con bases de datos Informix y mejoras en
                    formularios y reportes.
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Inforfactory */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-brand-500 text-slate-500 group-[.is-active]:text-brand-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 dark:border-slate-900 dark:bg-slate-700 dark:group-[.is-active]:bg-brand-500">
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
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 border-brand-100 dark:border-brand-800 bg-white dark:bg-slate-950/50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <div className="font-bold text-slate-900 dark:text-slate-100">
                  Pasante
                </div>
                <time className="font-caveat font-medium text-brand-600 dark:text-brand-400 text-sm">
                  2023 (6 meses)
                </time>
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-sm mb-2">
                Inforfactory
              </div>
              <div className="text-slate-600 dark:text-slate-300 text-sm space-y-2">
                <p>
                  Desarrollo de herramientas para extracción masiva de datos de
                  PDFs y monitorización de recursos AWS.
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  <li>
                    Implementación de solución para descarga y extracción
                    automatizada de información desde miles de PDFs (TestCafe +
                    PHP).
                  </li>
                  <li>
                    Creación de panel de monitorización para servicios AWS y setup
                    de despliegues automáticos (TeamCity, Azure DevOps).
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
