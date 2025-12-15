import { Project } from "@/types";

export const drawseq: Project = {
    slug: "drawseq-diagramas",
    title: "DrawSeq",
    description:
        "Aplicación web para la creación colaborativa de diagramas de secuencia en tiempo real.",
    content:
        "DrawSeq es una aplicación web para la creación colaborativa de diagramas de secuencia. Permite a los usuarios diseñar, editar y compartir diagramas de secuencia en tiempo real, facilitando la visualización de interacciones entre objetos en un sistema. Cuenta con herramientas avanzadas de edición, exportación a múltiples formatos (incluyendo código fuente) y gestión de proyectos colaborativos.",
    role: "Full-Stack Developer",
    date: "2024",
    techStack: {
        backend: [
            "Laravel 10.x",
            "PostgreSQL",
            "WebSockets",
        ],
        frontend: [
            "Vue.js 3",
            "Inertia.js",
            "TailwindCSS",
            "GoJS",
            "SASS",
        ],
        tools: ["Vite", "Git", "SweetAlert2"],
    },
    features: [
        {
            title: "Editor de Diagramas",
            items: [
                "Creación de diagramas de secuencia con drag & drop",
                "Soporte para actores, líneas de vida, mensajes y fragmentos",
                "Herramientas de edición: deshacer/rehacer, zoom, alineación",
            ],
        },
        {
            title: "Colaboración en Tiempo Real",
            items: [
                "Edición colaborativa simultánea",
                "Sincronización de cambios en tiempo real",
                "Indicadores de presencia de usuarios",
            ],
        },
        {
            title: "Gestión de Proyectos",
            items: [
                "Creación y edición de proyectos múltiples",
                "Invitaciones a colaboradores y control de acceso",
                "Historial de cambios",
            ],
        },
        {
            title: "Exportación e Importación",
            items: [
                "Exportación a JPEG, JSON, XMI (Enterprise Architect)",
                "Generación de código fuente (Java, PHP, C#)",
                "Importación de diagramas existentes",
            ],
        },
    ],
    links: {},
    images: {
        cover: "/projects/drawseq/drawseq_editor.png", // Placeholder
        gallery: [
            "/projects/drawseq/drawseq_projects.png",
            "/projects/drawseq/drawseq_create_project.png",
            "/projects/drawseq/drawseq_editor.png",
        ],
    },
};
