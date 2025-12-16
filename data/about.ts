// data/about.ts
import { AboutData } from "@/types/about";

export const aboutData: AboutData = {
    profileImage: {
        src: "/profile.jpg",
        alt: "Profile photo",
    },

    bio: [
        "I am a Systems Engineer focused on software development, with experience building business-oriented applications and systems. I primarily work on backend development, API design, and service integration, contributing to both web and mobile projects.",
        "I have collaborated with remote and multidisciplinary teams in agile environments, delivering solutions for companies and institutions while prioritizing code quality, maintainability, and incremental delivery."
    ],

    education: [
        {
            title: "Bachelor’s Degree in Systems Engineering",
            institution:
                "Universidad Autónoma Gabriel René Moreno",
            period: "2019 – 2024",
        },
        {
            title: "Academic Excellence Scholarship",
            institution: "Universidad Autónoma Gabriel René Moreno",
            period: "2020 and 2021",
        },
    ],

    skills: [
        {
            title: "Backend",
            skills: [
                "Java",
                "Spring Boot",
                "PHP",
                "Laravel",
                "CodeIgniter",
                "Node.js",
                "REST APIs",
                "GraphQL",
            ],
        },
        {
            title: "Frontend",
            skills: [
                "JavaScript",
                "Vue.js",
                "React",
                "Next.js",
            ],
        },
        {
            title: "Mobile",
            skills: [
                "Flutter",
                "Dart",
            ],
        },
        {
            title: "Databases",
            skills: [
                "PostgreSQL",
                "MySQL",
                "Informix",
                "MongoDB",
            ],
        },
        {
            title: "Tools & Practices",
            skills: [
                "Git",
                "Scrum",
                "CI/CD",
                "WebSockets",
            ],
        },
    ],
};