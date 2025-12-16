import { Project } from "@/types";

export const mailEcommerce: Project = {
    slug: "ecommerce-mail-processor",
    title: "E-Commerce Mail Processor",
    description:
        "Email-based e-commerce system that allows users to interact with an online store using only an email client.",
    content:
        "This system is an email-based e-commerce platform that enables users to fully interact with an online store using only their email client, without accessing a web browser. Users send commands or requests via email and receive responses with formatted HTML content that simulates a web interface. The system includes responsive HTML email design, interactive buttons, and purchase forms embedded directly within emails.",
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
            title: "Email-Based Interaction",
            items: [
                "Command-based interaction via email",
                "HTML responses simulating a web interface",
                "Catalog browsing and purchases directly from the inbox",
                "Order tracking via email",
            ],
        },
        {
            title: "Core Features",
            items: [
                "Email template management with dynamic variables",
                "Individual and bulk email delivery",
                "Scheduled email sending",
                "User management and system monitoring",
                "Delivery reports and analytics",
                "Performance charts generated with JFreeChart",
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
