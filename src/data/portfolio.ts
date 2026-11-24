export type Project = {
  name: string;
  category: string;
  description: string;
  detail: string;
  technologies: string[];
  status: "In development" | "Prototype" | "Project";
  featured?: boolean;
  accent: "purple" | "cyan";
};

export const projects: Project[] = [
  {
    name: "Hustla",
    category: "Full-Stack Platform",
    description:
      "A business-oriented platform designed to help businesses connect with relevant opportunities.",
    detail:
      "The broader scope includes a public website, investor portal, investor access requests, a document room, and administrative review and approval workflows. Planned capabilities are represented with care and are not presented as fully deployed features.",
    technologies: ["Web Development", "Admin Workflows", "Investor Portal"],
    status: "In development",
    featured: true,
    accent: "purple",
  },
  {
    name: "AI Prompt Library",
    category: "AI Software",
    description:
      "An AI-focused software project for organizing and accessing useful AI prompts.",
    detail:
      "The project explores a structured way to store and retrieve prompts, making useful AI-related resources easier to discover and work with.",
    technologies: ["AI", "Software Project"],
    status: "Project",
    accent: "cyan",
  },
  {
    name: "NCIM Website",
    category: "Web Development",
    description:
      "A public-facing organization website with content for programmes, events, stories, involvement, and donations.",
    detail:
      "The intended scope includes Home, About, Programmes, Events, Stories and Impact, Get Involved, Contact, and donation information. The planned stack is React, TypeScript, Node.js, Express, and PostgreSQL.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    status: "In development",
    accent: "purple",
  },
  {
    name: "NYONDOSTORE",
    category: "E-commerce",
    description:
      "An e-commerce-related project exploring the digital storefront experience.",
    detail:
      "A software project focused on the e-commerce category. More detailed implementation and deployment information has not yet been confirmed.",
    technologies: ["E-commerce", "Web Development"],
    status: "Project",
    accent: "purple",
  },
  {
    name: "E-commerce API",
    category: "Backend Development",
    description:
      "A backend API project exploring e-commerce-related application services.",
    detail:
      "This project demonstrates backend and API development within an e-commerce context. Endpoint specifications and deployment status require further confirmation.",
    technologies: ["Node.js", "API Development", "Backend"],
    status: "Project",
    accent: "cyan",
  },
  {
    name: "BLOG",
    category: "Web Development",
    description:
      "A blog-oriented software project for publishing and reading written content.",
    detail:
      "The project is represented at a verified high level while implementation specifics, technologies, and repository details await confirmation.",
    technologies: ["Blog", "Web Development"],
    status: "Project",
    accent: "purple",
  },
  {
    name: "CleanCycle",
    category: "IoT / Embedded",
    description:
      "An Arduino-based sanitation monitoring prototype for a practical challenge in Uganda.",
    detail:
      "CleanCycle explores toilet usage monitoring, visit tracking, cleanliness status, overdue cleaning detection, sensor input, LED indicators, automatic lighting, and buzzer alerts. It uses Arduino Uno and IR, touch, light-dependent resistor, and door/button inputs.",
    technologies: ["Arduino Uno", "Sensors", "Embedded Programming"],
    status: "Prototype",
    featured: true,
    accent: "cyan",
  },
  {
    name: "Smart Safe-Stage Bench",
    category: "IoT Concept",
    description:
      "A proposed sensor-based transport and mobility safety concept for a practical Ugandan problem.",
    detail:
      "The concept explores passenger assistance requests, roadside intrusion detection, automatic lighting, and bench occupancy or activity monitoring. It remains a project concept and prototype in development.",
    technologies: ["Arduino", "Sensors", "Mobility Safety"],
    status: "Prototype",
    accent: "purple",
  },
];

export const skills = [
  {
    title: "Programming",
    items: ["JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "API development", "Backend application development"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub"],
  },
  {
    title: "IoT",
    items: ["Arduino", "Embedded programming", "Sensor-based systems", "Hardware/software integration"],
  },
];
