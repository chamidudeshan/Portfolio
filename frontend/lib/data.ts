export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  { name: "JavaScript", icon: "js" },
  { name: "TypeScript", icon: "ts" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "next" },
  { name: "Node.js", icon: "node" },
  { name: "Express", icon: "express" },
  { name: "Python", icon: "python" },
  { name: "Java", icon: "java" },
  { name: "MySQL", icon: "mysql" },
  { name: "MongoDB", icon: "mongo" },
  { name: "Git", icon: "git" },
  { name: "Docker", icon: "docker" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Linux", icon: "linux" },
];

export const skillCategories = [
  {
    label: "Frontend",
    skills: [
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "node" },
      { name: "Express", icon: "express" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongo" },
    ],
  },
  {
    label: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Linux", icon: "linux" },
    ],
  },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce web application with product management, cart functionality, and secure payments.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Student Management System",
    description:
      "Desktop application for managing student records, attendance, and grade tracking with role-based access.",
    tech: ["Java", "MySQL", "JavaFX"],
    github: "#",
    live: null,
  },
  {
    title: "Task Management App",
    description:
      "Real-time collaborative task manager with drag-and-drop boards, notifications, and team workspaces.",
    tech: ["React", "Express", "Socket.io", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "Interactive weather dashboard consuming public APIs with 7-day forecast, charts, and location search.",
    tech: ["React", "TypeScript", "OpenWeatherAPI"],
    github: "#",
    live: "#",
  },
];

export const education = [
  {
    degree: "BSc (Hons) in Information Technology",
    institution: "University / Institute Name",
    period: "2022 — Present",
    description: "Studying software engineering, database systems, networking, and web development.",
  },
  {
    degree: "G.C.E. Advanced Level",
    institution: "School Name",
    period: "2019 — 2021",
    description: "Combined Mathematics stream with strong results in Mathematics and IT.",
  },
  {
    degree: "G.C.E. Ordinary Level",
    institution: "School Name",
    period: "2014 — 2019",
    description: "9 A passes including Mathematics, Science, and ICT.",
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/chamidu-deshan", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/chamidu-deshan", icon: "linkedin" },
  { label: "Email", href: "mailto:chamidu@example.com", icon: "mail" },
];
