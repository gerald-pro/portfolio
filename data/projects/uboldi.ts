import { Project } from "@/types";

export const uboldi: Project = {
    slug: "school-management-system",
    title: "School Management System",
    description:
        "Comprehensive system for managing academic and administrative processes at Uboldi School.",
    content:
        "This project is a School Management System developed for Uboldi School to handle both academic and administrative processes within an educational institution. The system is built using an MVC (Model-View-Controller) architecture and PHP as the server-side language. It supports user management, course administration, payment processing, guardian management, and report generation.",
    role: "Full-Stack Developer",
    date: "2024",
    techStack: {
        backend: ["PHP", "MySQL", "MVC Pattern", "TCPDF"],
        frontend: [
            "HTML5",
            "CSS3",
            "Bootstrap",
            "jQuery",
            "FullCalendar",
        ],
        tools: ["Select2", "Datepicker", "DataTables"],
    },
    features: [
        {
            title: "User & Role Management",
            items: [
                "Authentication and role-based access control",
                "Profiles for administrators, teachers, students, and guardians",
            ],
        },
        {
            title: "Academic Management",
            items: [
                "Course and class administration",
                "Student enrollment management",
                "Academic progress and grading tracking",
            ],
        },
        {
            title: "Financial Management",
            items: [
                "Payment and tuition fee tracking",
                "Generation of receipts and account statements",
                "Payment history and payment method management",
            ],
        },
        {
            title: "Guardian Management & Reporting",
            items: [
                "Registration and association of guardians with students",
                "Communication with guardians",
                "Generation of academic and financial PDF reports",
            ],
        },
    ],
    links: {},
    images: {
        cover: "/projects/uboldi/uboldi_users.png",
        gallery: [
            "/projects/uboldi/uboldi_payments.png",
            "/projects/uboldi/uboldi_reports.png",
            "/projects/uboldi/uboldi_report_example.png",
        ],
    },
};
