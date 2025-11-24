import { Project } from "@/types";

export const mailEcommerce: Project = {
    slug: "ecommerce-mail-processor",
    title: "E-Commerce Mail Processor",
    description:
        "E-commerce basado en correo electrónico que permite interactuar con una tienda en línea usando solo un cliente de correo.",
    content:
        "El sistema es un E-commerce basado en correo electrónico que permite a los usuarios interactuar completamente con una tienda en línea utilizando únicamente su cliente de correo electrónico, sin necesidad de acceder a un navegador web. Los usuarios envían comandos o solicitudes por correo electrónico y reciben respuestas con contenido HTML formateado que simula una interfaz web. Incluye diseño HTML responsivo, botones interactivos y formularios de compra directamente en el correo.",
    role: "Backend Developer",
    date: "2024",
    techStack: {
        backend: [
            "Java 21",
            "Spring Framework",
            "Hibernate ORM",
            "PostgreSQL",
            "JavaMail",
            "Thymeleaf",
        ],
        tools: [
            "Maven",
            "JUnit 5",
            "Mockito",
            "Logback",
            "Cloudinary",
            "Lanterna",
            "JFreeChart",
        ],
    },
    features: [
        {
            title: "Interacción por Correo",
            items: [
                "Envío de comandos por correo electrónico",
                "Respuestas con contenido HTML simulando interfaz web",
                "Navegación por catálogo y compras desde la bandeja de entrada",
                "Seguimiento de pedidos por correo",
            ],
        },
        {
            title: "Funcionalidades",
            items: [
                "Gestión de plantillas de correo con variables dinámicas",
                "Envío individual y masivo de correos",
                "Programación de envíos",
                "Gestión de usuarios y monitoreo del sistema",
                "Reportes y estadísticas de envíos",
                "Gráficos de rendimiento con JFreeChart",
            ],
        },
    ],
    links: {},
    images: {
        cover: "/projects/mail_ecommerce/mail_ecommerce_code.png",
        gallery: [
            "/projects/mail_ecommerce/mail_ecommerce_console.png",
            "/projects/mail_ecommerce/mail_ecommerce_home.png",
            "/projects/mail_ecommerce/mail_ecommerce_code.png",
            "/projects/mail_ecommerce/mail_ecommerce_help.png",
            "/projects/mail_ecommerce/mail_ecommerce_chart.png",
        ],
    },
};
