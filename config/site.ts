export const siteConfig = {
  name: "Gerald Avalos",
  role: "Software Developer",
  description:
    "Personal portfolio of Gerald Avalos, a systems engineer specialized in web and mobile application development.",
  url: "https://gerald-avalos.com",
  links: {
    github: "https://github.com/gerald-pro",
    linkedin: "https://www.linkedin.com/in/gerald-avalos-73a004228",
    email: "avaloss.gerald@gmail.com",
  },
  mainNav: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/about", label: "About" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;