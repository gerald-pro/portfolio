import { Project } from "@/types";

export const viviseven: Project = {
    slug: "viviseven",
    title: "Viviseven Landing",
    description:
        "Landing page interactiva y moderna desarrollada con Flutter Web para el producto Viviseven.",
    content:
        "El proyecto viviseven_landing es una aplicación web desarrollada con Flutter que sirve como landing page para el producto Viviseven. Destaca por su diseño responsivo, animaciones fluidas y una experiencia de usuario pulida. Implementa una arquitectura robusta utilizando Riverpod para la gestión de estado y GoRouter para la navegación, ofreciendo soporte completo para temas claro y oscuro.",
    role: "Flutter Developer",
    date: "2024",
    techStack: {
        frontend: [
            "Flutter",
            "Dart 3.9+",
            "Flutter Web",
        ],
        stateManagement: [
            "flutter_riverpod 2.6+",
        ],
        routing: [
            "go_router 16.2+",
        ],
    },
    features: [
        {
            title: "Experiencia de Usuario",
            items: [
                "Diseño totalmente responsivo adaptable a cualquier dispositivo",
                "Animaciones fluidas para una navegación natural",
                "Temas personalizables (Claro/Oscuro) con persistencia",
            ],
        },
        {
            title: "Arquitectura Técnica",
            items: [
                "Navegación basada en flujos (Onboarding, Registro, Configuración)",
                "Gestión de estado reactiva con Riverpod",
                "Enrutamiento declarativo con GoRouter",
            ],
        },
    ],
    links: {
        demo: "https://zencillo-viviseven-landing.web.app/",
    },
    images: {
        cover: "/projects/viviseven/viviseven_home.png", // Placeholder
        gallery: [
            "/projects/viviseven/viviseven_home.png",
            "/projects/viviseven/viviseven_register.png",
            "/projects/viviseven/viviseven_upload.png",
        ],
    },
};
