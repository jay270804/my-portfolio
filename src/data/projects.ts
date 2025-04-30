export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS",
    imageUrl: "/projects/dummy-project-image.png",
    projectUrl: "/projects/portfolio",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management",
    imageUrl: "/projects/dummy-project-image.png",
    projectUrl: "/projects/ecommerce",
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    imageUrl: "/projects/dummy-project-image.png",
    projectUrl: "/projects/taskmanager",
    technologies: ["React", "Firebase", "Material UI"]
  }
];
