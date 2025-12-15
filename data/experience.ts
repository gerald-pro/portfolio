// data/experience.ts
import { Experience } from "@/types/experience";

export const experience: Experience[] = [
    {
        id: "zencillo",
        role: "Software Developer",
        company: "Zencillo Software",
        location: "Miami, USA",
        modality: "Remoto",
        startDate: "Feb 2025",
        endDate: "Presente",
        description:
            "Desarrollo de aplicación web multiplataforma con Flutter orientada a fidelización; mantenimiento de infraestructura en Firebase; integración REST y WebSockets para mensajería en tiempo real.",
        responsibilities: [
            "Desarrollo e integración de API REST.",
            "Implementación de WebSockets en tiempo real.",
            "Gestión de infraestructura y optimización continua.",
        ],
    },
    {
        id: "desarrollamelo",
        role: "Full-Stack Developer",
        company: "Desarrollamelo",
        location: "Bolivia",
        modality: "Remoto",
        startDate: "Jun 2024",
        endDate: "Ene 2025",
        description:
            "Desarrollo de aplicaciones web en Laravel y Vue.js; creación de aplicaciones móviles con Flutter.",
        responsibilities: [
            "Desarrollo de APIs REST y módulos backend.",
            "Mejoras UX y desarrollo front-end en Vue.js.",
            "Aplicaciones móviles multiplataforma con Flutter.",
        ],
    },
    {
        id: "uagrm",
        role: "Full-Stack Developer",
        company: "Departamento de Acreditación, UAGRM",
        startDate: "2023",
        endDate: "6 meses",
        description:
            "Desarrollo de una aplicación de autoevaluación institucional usando Laravel, Informix, Livewire y jQuery.",
        responsibilities: [
            "Desarrollo de funcionalidades para procesos de acreditación.",
            "Integración con bases de datos Informix.",
        ],
    },
    {
        id: "inforfactory",
        role: "Pasante",
        company: "Inforfactory",
        startDate: "2023",
        endDate: "6 meses",
        description:
            "Desarrollo de herramientas para extracción masiva de datos de PDFs y monitorización de recursos AWS.",
        responsibilities: [
            "Automatización de extracción masiva de información desde PDFs.",
            "Monitorización de servicios AWS.",
        ],
    },
];
