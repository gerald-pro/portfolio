import { Project } from "@/types";

export const drawseq: Project = {
    slug: "drawseq-diagrams",
    title: "DrawSeq",
    description:
        "Web application for real-time collaborative creation of sequence diagrams.",
    content:
        "DrawSeq is a web application designed for the collaborative creation of sequence diagrams. It allows users to design, edit, and share sequence diagrams in real time, making it easier to visualize interactions between objects within a system. The platform includes advanced editing tools, export options to multiple formats (including source code), and collaborative project management features.",
    role: "Full-Stack Developer",
    date: "2024",
    techStack: {
        backend: [
            "Laravel 10.x",
            "PostgreSQL",
            "WebSockets",
        ],
        frontend: [
            "Vue.js 3",
            "Inertia.js",
            "Tailwind CSS",
            "GoJS",
            "SASS",
        ],
        tools: ["Vite", "Git", "SweetAlert2"],
    },
    features: [
        {
            title: "Diagram Editor",
            items: [
                "Drag-and-drop creation of sequence diagrams",
                "Support for actors, lifelines, messages, and fragments",
                "Editing tools: undo/redo, zoom, alignment",
            ],
        },
        {
            title: "Real-Time Collaboration",
            items: [
                "Simultaneous collaborative editing",
                "Real-time change synchronization",
                "User presence indicators",
            ],
        },
        {
            title: "Project Management",
            items: [
                "Creation and editing of multiple projects",
                "Collaborator invitations and access control",
                "Change history tracking",
            ],
        },
        {
            title: "Export & Import",
            items: [
                "Export to JPEG, JSON, XMI (Enterprise Architect)",
                "Source code generation (Java, PHP, C#)",
                "Import of existing diagrams",
            ],
        },
    ],
    links: {},
    images: {
        cover: "/projects/drawseq/drawseq_editor.png",
        gallery: [
            "/projects/drawseq/drawseq_projects.png",
            "/projects/drawseq/drawseq_create_project.png",
            "/projects/drawseq/drawseq_editor.png",
        ],
    },
};