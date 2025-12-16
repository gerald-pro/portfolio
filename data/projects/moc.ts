import { Project } from "@/types";

export const moc: Project = {
    slug: "moc-logistics",
    isFeatured: true,
    title: "MOC (Truck Monitoring & Operations)",
    description:
        "Logistics management system for real-time tracking and monitoring of transportation fleets.",
    content:
        "MOC (Truck Monitoring & Operations) is a logistics management system developed with CodeIgniter 4 that enables real-time tracking and monitoring of freight transportation fleets. The platform is designed to optimize cargo transport operations by simplifying order management, vehicle tracking, and communication with drivers and operators.",
    role: "Full-Stack Developer",
    date: "2024",
    techStack: {
        backend: [
            "PHP",
            "CodeIgniter 4",
            "MySQL (Google Cloud)",
            "RESTful API",
        ],
        frontend: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
        ],
        services: [
            "Google Maps API",
            "Expo Push Notifications",
        ],
    },
    features: [
        {
            title: "Order Management",
            items: [
                "Creation and tracking of transport orders",
                "Assignment of vehicles and drivers to routes",
                "Real-time delivery monitoring",
            ],
        },
        {
            title: "Tracking & Monitoring",
            items: [
                "Real-time vehicle geolocation",
                "Monitoring of stops and loading/unloading times",
                "Automatic alerts for delays or incidents",
                "Route maps and mini-maps",
            ],
        },
        {
            title: "Fleet Management & Communication",
            items: [
                "Vehicle and driver administration",
                "Maintenance tracking",
                "Push notifications and WhatsApp alerts",
                "Real-time communication with drivers",
            ],
        },
        {
            title: "Analytics",
            items: [
                "Operational performance and efficiency metrics",
                "Transit time and compliance reports",
            ],
        },
    ],
    links: {
        demo: "https://moc.mx/",
    },
    images: {
        cover: "/projects/moc/moc_real_time.png",
        gallery: [
            "/projects/moc/moc_real_time.png",
            "/projects/moc/moc_request_a_truck.png",
            "/projects/moc/moc_operaciones.png",
        ],
    },
};
