import { SmallProject, smallProjects } from "@/data/small-projects";
import { ProjectCard } from "./ProjectCard";

interface SmallProjectsGridProps {
  projects?: SmallProject[];
}

export function SmallProjectsGrid({ projects = smallProjects }: SmallProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          projectUrl={project.projectUrl}
          buttonText={project.buttonText}
        />
      ))}
    </div>
  );
}