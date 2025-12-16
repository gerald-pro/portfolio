import { Project } from "@/types";

export const hunar: Project = {
    slug: "hunar-hardware-store-ecommerce",
    title: "Hunar Hardware Store E-commerce",
    description:
        "Complete e-commerce system with product catalog, shopping cart, payments, and an administration panel.",
    content:
        "This is an e-commerce system developed with Laravel that enables online product sales. The platform includes product catalog management, a shopping cart, order processing, a payment system, an administration dashboard, and user management with roles and permissions. The project follows Laravel best practices, including the use of controllers, models, migrations, seeders, factories, middleware, and service layers.",
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
            title: "Customer Features",
            items: [
                "Product catalog with categories",
                "Shopping cart",
                "Integrated checkout process",
                "Order tracking",
                "Purchase history",
                "User profile management",
                "Contact form",
            ],
        },
        {
            title: "Administrator Features",
            items: [
                "Product management (CRUD)",
                "Category management",
                "Promotion and discount management",
                "User and role management",
                "Analytics dashboard",
                "Order management",
                "Payment management",
                "Content administration",
                "Sidebar customization",
                "Contact message review",
            ],
        },
        {
            title: "Technical Features",
            items: [
                "Authentication and authorization system with roles and permissions",
                "Protected administration panel",
                "Data export to Excel",
                "PDF invoice generation",
                "Advanced search system",
                "Session and shopping cart handling",
                "Cloud storage service integration",
                "Logging system for monitoring",
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
};
