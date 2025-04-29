import Image from "next/image";
import Link from "next/link";
import {PROJECT_BUTTON_CODE_TEXT} from "@/constants"

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  technologies: string[];
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="group overflow-hidden border border-gray-400 bg-transparent transition-all hover:border-primary">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={300}
          className="object-cover h-full"
        />
      </div>
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2 border border-gray-400 border-x-0">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-transparent px-3 py-1.5 text-4 text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3 p-4">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-md text-gray-400">{description}</p>
          <Link
            href={projectUrl}
            className="w-1/3 md:w-1/4 text-center font-semibold px-3 py-2 tracking-tighter border border-primary text-sm hover:bg-primary/10 transition-colors duration-300"
            >
            {PROJECT_BUTTON_CODE_TEXT}
          </Link>
        </div>
      </div>
    </div>
  );
}