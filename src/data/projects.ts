import { PROJECT_BUTTON_GITHUB_TEXT } from "@/constants";

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  technologies: string[];
  buttonText: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS",
    imageUrl: "/projects/dummy-project-image.png",
    projectUrl: "/projects/portfolio",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    buttonText: PROJECT_BUTTON_GITHUB_TEXT
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management",
    imageUrl: "/projects/dummy-project-image.png",
    projectUrl: "/projects/ecommerce",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    buttonText: PROJECT_BUTTON_GITHUB_TEXT
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    imageUrl: "/projects/dummy-project-image.png",
    projectUrl: "/projects/taskmanager",
    technologies: ["React", "Firebase", "Material UI"],
    buttonText: PROJECT_BUTTON_GITHUB_TEXT
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS",
    imageUrl: "/projects/dummy-project-image.png",
    projectUrl: "/projects/portfolio",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    buttonText: PROJECT_BUTTON_GITHUB_TEXT
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management",
    imageUrl: "/projects/dummy-project-image.png",
    projectUrl: "/projects/ecommerce",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    buttonText: PROJECT_BUTTON_GITHUB_TEXT
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    imageUrl: "/projects/dummy-project-image.png",
    projectUrl: "/projects/taskmanager",
    technologies: ["React", "Firebase", "Material UI"],
    buttonText: PROJECT_BUTTON_GITHUB_TEXT
  }
];
