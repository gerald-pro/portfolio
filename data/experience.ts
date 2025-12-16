import { Experience } from "@/types/experience";

export const experience: Experience[] = [
    {
        id: "zencillo",
        role: "Software Developer",
        company: "Zencillo Software",
        location: "Miami, USA",
        modality: "Remote",
        startDate: "Feb 2025",
        endDate: "Nov 2025",
        description:
            "Development of business-oriented software solutions, contributing to web and mobile applications, service integration, and real-time communication features.",
        responsibilities: [
            "Designed and implemented RESTful APIs to integrate internal features and services.",
            "Developed backend services in Java using Spring Boot.",
            "Implemented WebSockets for real-time messaging and communication.",
            "Built cross-platform mobile applications using Flutter.",
        ],
    },
    {
        id: "desarrollamelo",
        role: "Full-Stack Developer",
        company: "Desarrollamelo",
        location: "Bolivia",
        modality: "Remote",
        startDate: "Apr 2024",
        endDate: "Jan 2025",
        description:
            "Contributed to the development of enterprise applications and internal systems, including CRM solutions, e-commerce platforms, and web applications for the real estate sector.",
        responsibilities: [
            "Developed backend services for a CRM-like system using Java and Spring Boot.",
            "Designed APIs and data queries using GraphQL.",
            "Integrated NoSQL databases using MongoDB.",
            "Developed web applications using PHP (Laravel) and Vue.js.",
            "Supported the development of mobile applications built with Flutter.",
        ],
    },
    {
        id: "uagrm",
        role: "Full-Stack Developer",
        company: "Accreditation Department, UAGRM",
        startDate: "2023",
        endDate: "6 months",
        description:
            "Developed an institutional application to support academic self-evaluation and accreditation processes.",
        responsibilities: [
            "Developed backend and frontend modules using PHP and Laravel.",
            "Integrated Informix databases to manage academic information.",
            "Designed and enhanced features focused on data validation and control.",
        ],
    },
    {
        id: "inforfactory",
        role: "Software Developer Intern",
        company: "Inforfactory",
        startDate: "2023",
        endDate: "6 months",
        description:
            "Assisted in the development of internal solutions focused on process automation and system monitoring.",
        responsibilities: [
            "Automated processes for structured data extraction from PDF files.",
            "Developed web-based tools to monitor resources and services on AWS.",
            "Participated in continuous integration and deployment (CI/CD) pipelines.",
            "Collaborated within a Scrum-based agile team.",
        ],
    },
];