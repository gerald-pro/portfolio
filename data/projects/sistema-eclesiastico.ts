import { Project } from "@/types";

export const sistemaEclesiastico: Project = {
    slug: "church-management-system",
    title: "Church Management System",
    description:
        "Educational system for managing ministries and members, showcasing design patterns in Node.js.",
    content:
        "This is an educational project specifically designed to implement and demonstrate the use of software design patterns, using a church management system as a case study. Its main goal is to showcase the practical application of design patterns such as MVC, Proxy, and Strategy in a realistic context involving the management of ministries, members, and family relationships.",
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
        database: ["Relational (Configurable)"],
    },
    features: [
        {
            title: "Ministry Management",
            items: [
                "CRUD operations for ministries",
                "Assignment of roles within each ministry",
            ],
        },
        {
            title: "Member Management",
            items: [
                "Registration of members and visitors",
                "Personal data management",
                "Status control (member / visitor)",
                "Assignment of ministry roles",
            ],
        },
        {
            title: "Relationship Management",
            items: [
                "Definition of relationship types",
                "Establishment and visualization of family relationships",
            ],
        },
        {
            title: "Implemented Design Patterns",
            items: [
                "MVC: Core application architecture",
                "Proxy: Secure management of personal data",
                "Strategy: Flexible report generation",
            ],
        },
    ],
    links: {},
    images: {
        cover: "/projects/iglesia/iglesia_strategy_diagram.png",
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