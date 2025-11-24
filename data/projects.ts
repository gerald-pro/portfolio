import { Project } from "@/types";

export const projects: Project[] = [
    {
        slug: "ferreteria-hunar-ecommerce",
        title: "Ferretería Hunar E-commerce",
        description:
            "Sistema de comercio electrónico completo con catálogo, carrito, pagos y panel de administración.",
        content:
            "Es un sistema de comercio electrónico desarrollado con Laravel que permite la venta de productos en línea. El sistema incluye funcionalidades de catálogo de productos, carrito de compras, gestión de pedidos, sistema de pagos, panel de administración y gestión de usuarios con roles y permisos. El proyecto sigue las mejores prácticas de desarrollo con Laravel, incluyendo el uso de controladores, modelos, migraciones, seeders, factories, middlewares y servicios.",
        role: "Full-Stack Developer",
        date: "2024",
        techStack: {
            backend: [
                "Laravel 11.x",
                "PHP 8.2+",
                "PostgreSQL",
                "Livewire 3.4",
                "Livewire Volt",
                "DomPDF",
                "Maatwebsite/Excel",
            ],
            frontend: ["Tailwind CSS", "Vite", "Livewire 3.4"],
            services: ["Cloudinary", "PagoFacil (Bolivia)"],
            tools: ["PHPUnit"],
        },
        features: [
            {
                title: "Para Clientes",
                items: [
                    "Catálogo de productos con categorías",
                    "Carrito de compras",
                    "Proceso de pago integrado",
                    "Seguimiento de pedidos",
                    "Historial de compras",
                    "Perfil de usuario",
                    "Formulario de contacto",
                ],
            },
            {
                title: "Para Administradores",
                items: [
                    "Gestión de productos (CRUD)",
                    "Gestión de categorías",
                    "Gestión de promociones y descuentos",
                    "Gestión de usuarios y roles",
                    "Panel de estadísticas",
                    "Gestión de pedidos",
                    "Gestión de pagos",
                    "Administración de contenido",
                    "Personalización de la barra lateral",
                    "Visualización de mensajes de contacto",
                ],
            },
            {
                title: "Características Técnicas",
                items: [
                    "Sistema de autenticación y autorización con roles y permisos",
                    "Panel de administración protegido",
                    "Exportación de datos a Excel",
                    "Generación de facturas en PDF",
                    "Sistema de búsqueda avanzada",
                    "Manejo de sesiones y carrito de compras",
                    "Integración con servicios de almacenamiento en la nube",
                    "Sistema de logs para monitoreo",
                ],
            },
        ],
        links: {
            // demo: "https://...", // Add if available
            // repo: "https://...", // Add if available
        },
        images: {
            cover: "/projects/hunar/hunar_home.png",
            gallery: [
                "/projects/hunar/hunar_home.png",
                "/projects/hunar/hunar_cart.png",
                "/projects/hunar/hunar_charts.png",
                "/projects/hunar/hunar_orders.png",
                "/projects/hunar/hunar_payments.png",
            ],
        },
    },
    {
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
    },
];
