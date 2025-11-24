import { Project } from "@/types";

export const moc: Project = {
    slug: "moc-logistica",
    isFeatured: true,
    title: "MOC (Monitoreo y Operación de Camiones)",
    description:
        "Sistema de gestión logística para el seguimiento y monitoreo en tiempo real de flotas de transporte.",
    content:
        "MOC (Monitoreo y Operación de Camiones) es un sistema de gestión logística desarrollado con CodeIgniter 4 que permite el seguimiento y monitoreo en tiempo real de flotas de transporte de mercancias. El sistema está diseñado para optimizar la operación de transporte de carga, facilitando la gestión de órdenes, seguimiento de vehículos y comunicación con operadores.",
    role: "Full-Stack Developer",
    date: "2024",
    techStack: {
        backend: ["PHP", "CodeIgniter 4", "MySQL (Google Cloud)", "RESTful API"],
        frontend: ["HTML", "CSS", "JavaScript", "Vue.js"],
        services: ["Google Maps API", "Expo Push Notifications"],
    },
    features: [
        {
            title: "Gestión de Órdenes",
            items: [
                "Creación y seguimiento de órdenes de transporte",
                "Asignación de unidades y operadores a rutas",
                "Monitoreo en tiempo real de entregas",
            ],
        },
        {
            title: "Seguimiento y Monitoreo",
            items: [
                "Geolocalización en tiempo real de vehículos",
                "Monitoreo de paradas y tiempos de carga/descarga",
                "Alertas automáticas por demoras o incidencias",
                "Mapas de ruta y minimapas",
            ],
        },
        {
            title: "Gestión de Flota y Comunicación",
            items: [
                "Administración de vehículos y operadores",
                "Seguimiento de mantenimiento",
                "Notificaciones push y alertas por WhatsApp",
                "Comunicación en tiempo real con operadores",
            ],
        },
        {
            title: "Análisis",
            items: [
                "Métricas de rendimiento y eficiencia operativa",
                "Reportes de tiempos de tránsito y cumplimiento",
            ],
        },
    ],
    links: {
        demo: "https://moc.mx/",
    },
    images: {
        cover: "/projects/moc/moc_real_time.png", // Placeholder
        gallery: [
            "/projects/moc/moc_real_time.png",
            "/projects/moc/moc_request_a_truck.png",
            "/projects/moc/moc_operaciones.png",
        ],
    },
};
