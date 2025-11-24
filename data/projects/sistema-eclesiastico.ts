import { Project } from "@/types";

export const sistemaEclesiastico: Project = {
    slug: "sistema-gestion-eclesiastica",
    title: "Sistema de Gestión Eclesiástica",
    description:
        "Sistema educativo para la gestión de ministerios y miembros, demostrando patrones de diseño en Node.js.",
    content:
        "Proyecto educativo diseñado específicamente para implementar y demostrar el uso de patrones de diseño en el desarrollo de software, utilizando como caso de estudio un sistema de gestión eclesiástica. El objetivo principal es ejemplificar la aplicación práctica de patrones de diseño como MVC, Proxy y Strategy en un contexto realista de gestión de ministerios, personas y parentescos.",
    role: "Backend Developer",
    date: "2024",
    techStack: {
        backend: [
            "Node.js",
            "TypeScript",
            "MVC Pattern",
            "Design Patterns (Proxy, Strategy)",
        ],
        frontend: ["HTML5", "CSS3", "JavaScript"],
        database: ["Relacional (Configurable)"],
    },
    features: [
        {
            title: "Gestión de Ministerios",
            items: [
                "CRUD de ministerios",
                "Asignación de cargos dentro de cada ministerio",
            ],
        },
        {
            title: "Gestión de Personas",
            items: [
                "Registro de miembros y visitantes",
                "Gestión de datos personales",
                "Control de estado (miembro/visitante)",
                "Asignación de cargos ministeriales",
            ],
        },
        {
            title: "Gestión de Parentescos",
            items: [
                "Definición de tipos de parentesco",
                "Establecimiento y visualización de relaciones familiares",
            ],
        },
        {
            title: "Patrones de Diseño Implementados",
            items: [
                "MVC: Arquitectura principal",
                "Proxy: Gestión segura de datos de personas",
                "Strategy: Generación flexible de reportes",
            ],
        },
    ],
    links: {},
    images: {
        cover: "/projects/iglesia/iglesia_strategy_diagram.png", // Placeholder
        gallery: [
            "/projects/iglesia/iglesia_persona.png",
            "/projects/iglesia/iglesia_strategy_diagram.png",
            "/projects/iglesia/iglesia_proxy_diagram.png",
            "/projects/iglesia/iglesia_sacramento.png",
            "/projects/iglesia/iglesia_ministerios.png",
            "/projects/iglesia/iglesia_parentescos.png",
        ],
    },
};
