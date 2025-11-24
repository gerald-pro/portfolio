import { Project } from "@/types";

export const uboldi: Project = {
    slug: "sistema-gestion-escolar",
    title: "Sistema de Gestión Escolar",
    description:
        "Sistema integral para la administración de procesos académicos y administrativos del colegio Uboldi.",
    content:
        "El proyecto es un Sistema de Gestión Escolar para el colegio Uboldi diseñado para administrar los procesos académicos y administrativos de una institución educativa. El sistema está construido con una arquitectura MVC (Modelo-Vista-Controlador) y utiliza PHP como lenguaje de programación del lado del servidor. Permite la gestión de usuarios, cursos, pagos, apoderados y generación de reportes.",
    role: "Full-Stack Developer",
    date: "2024",
    techStack: {
        backend: ["PHP", "MySQL", "MVC Pattern", "TCPDF"],
        frontend: ["HTML5", "CSS3", "Bootstrap", "jQuery", "FullCalendar"],
        tools: ["Select2", "Datepicker", "DataTables"],
    },
    features: [
        {
            title: "Gestión de Usuarios y Roles",
            items: [
                "Autenticación y control de acceso basado en roles",
                "Perfiles para administradores, profesores, estudiantes y apoderados",
            ],
        },
        {
            title: "Gestión Académica",
            items: [
                "Administración de cursos y paralelos",
                "Asignación de estudiantes a cursos",
                "Seguimiento académico y calificaciones",
            ],
        },
        {
            title: "Gestión Financiera",
            items: [
                "Control de pagos y cuotas",
                "Generación de recibos y estados de cuenta",
                "Historial de pagos y gestión de métodos de pago",
            ],
        },
        {
            title: "Gestión de Apoderados y Reportes",
            items: [
                "Registro y asociación de apoderados con estudiantes",
                "Comunicación con apoderados",
                "Generación de reportes académicos y financieros en PDF",
            ],
        },
    ],
    links: {},
    images: {
        cover: "/projects/uboldi/uboldi_users.png", // Placeholder
        gallery: [
            "/projects/uboldi/uboldi_payments.png",
            "/projects/uboldi/uboldi_reports.png",
            "/projects/uboldi/uboldi_report_example.png",
        ],
    },
};
