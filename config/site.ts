// config/site.ts
export const siteConfig = {
  name: "Gerald Avalos",
  role: "Software Developer",
  description:
    "Portafolio personal de Gerald Avalos, ingeniero en sistemas especializado en desarrollo web y móvil.",
  url: "https://gerald-avalos.com", // Placeholder
  links: {
    github: "https://github.com/geraldavalos", // Placeholder
    linkedin: "https://www.linkedin.com/in/geraldavalos", // Placeholder
    email: "avaloss.gerald@gmail.com", // Placeholder
  },
  mainNav: [
    { href: "/", label: "Inicio" },
    { href: "/projects", label: "Proyectos" },
    { href: "/experience", label: "Experiencia" },
    { href: "/about", label: "Sobre mí" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
