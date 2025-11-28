import { Project } from "@/types";

export const zencilloFidelizacion: Project = {
    slug: "zencillo-fidelizacion",
    title: "Zencillo Fidelización",
    description:
        "Sistema integral de fidelización y CRM para gestión de programas de lealtad, marketing y automatización.",
    content:
        "Este proyecto es un sistema integral de fidelización y gestión de relaciones con clientes (CRM) desarrollado en Flutter para la empresa Zencillo. Diseñado como una plataforma empresarial modular y escalable, permite a las compañías administrar programas de lealtad, campañas de marketing, seguimiento de clientes y análisis de datos. La aplicación sigue patrones de diseño robustos como BLoC, inyección de dependencias y cuenta con un diseñador de flujos de trabajo visual para la automatización de procesos.",
    role: "Flutter Developer",
    date: "2024",
    techStack: {
        frontend: [
            "Flutter",
            "Dart 3.6+",
        ],
        stateManagement: [
            "flutter_bloc 9.1+",
            "bloc 9.0+",
        ],
        architecture: [
            "Clean Architecture",
            "Dependency Injection (GetIt)",
            "Functional Programming (Dartz)",
        ],
        services: [
            "Firebase",
            "Dio (HTTP)",
            "GoRouter",
        ],
    },
    features: [
        {
            title: "Gestión CRM y Fidelización",
            items: [
                "Gestión de clientes, prospectos y contactos con perfiles detallados",
                "Programas de lealtad con reglas configurables de acumulación y canje",
                "Gestión de recompensas, rifas y sorteos",
            ],
        },
        {
            title: "Marketing y Automatización",
            items: [
                "Diseñador visual de workflows para automatización de procesos",
                "Campañas multicanal (Email, Push, WhatsApp)",
                "Segmentación avanzada de clientes",
            ],
        },
        {
            title: "Análisis y Reportes",
            items: [
                "Dashboard analítico con métricas de conversión y retención",
                "Gráficos de acumulación vs. redención",
                "Exportación de reportes en PDF y Excel",
            ],
        },
    ],
    links: {},
    images: {
        cover: "/projects/fidelizacion/fidelizacion_dashboard.png",
        gallery: [
            "/projects/fidelizacion/fidelizacion_clients.png",
            "/projects/fidelizacion/fidelizacion_dashboard.png",
            "/projects/fidelizacion/fidelizacion_forms.png",
            "/projects/fidelizacion/fidelizacion_chats.png",
            "/projects/fidelizacion/fidelizacion_rewards.png",
            "/projects/fidelizacion/fidelizacion_report.png",
        ],
    },
};
