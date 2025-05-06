import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/data/projects";

interface WorksCardsProps {
  projects: Project[];
}

export function WorksCards({ projects }: WorksCardsProps) {
  return (
    <div className="space-y-8 w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}