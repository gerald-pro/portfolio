// data/about.ts
import { AboutData } from "@/types/about";

export const aboutData: AboutData = {
    profileImage: {
        src: "/profile.jpg",
        alt: "Foto de perfil",
    },

    bio: [
        "Soy ingeniero en sistemas especializado en desarrollo web y móvil, soporte técnico y administración de servidores. Me apasiona transformar procesos operativos complejos en aplicaciones robustas y fáciles de usar, priorizando la trazabilidad, la seguridad y la entrega incremental.",
        "Trabajo frecuentemente con equipos remotos bajo metodologías ágiles para asegurar lanzamientos confiables y soporte pos-despliegue.",
    ],

    education: [
        {
            title: "Licenciatura en Ingeniería en Sistemas",
            institution:
                "Universidad Autónoma Gabriel René Moreno",
            period: "2019 – 2024",
        },
        {
            title: "Beca a la excelencia",
            institution: "Universidad Autónoma Gabriel René Moreno",
            period: "2020 y 2021",
        },
    ],

    skills: [
        {
            title: "Backend",
            skills: [
                "PHP",
                "CodeIgniter",
                "Laravel",
                "Java",
                "Spring Boot",
                "NestJS",
            ],
        },
        {
            title: "Frontend",
            skills: ["Vue.js", "React", "Next.js"],
        },
        {
            title: "Mobile",
            skills: ["Flutter", "Dart"],
        },
        {
            title: "DevOps & Infra",
            skills: [
                "Linux",
                "Google Cloud",
                "AWS",
                "CI/CD",
                "WebSockets",
            ],
        },
    ],
};
