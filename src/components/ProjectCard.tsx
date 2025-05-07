import Image from "next/image";
import Link from "next/link";
import { STYLE_PRIMARY_COLOR, STYLE_BORDER_COLOR, STYLE_TEXT_COLOR } from "@/constants";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  projectUrl: string;
  technologies: string[];
  buttonText?: string;
  secondaryButtonText?: string;
  secondaryProjectUrl?: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
  technologies,
  buttonText = "View",
  secondaryButtonText,
  secondaryProjectUrl,
}: ProjectCardProps) {
  const cardClass = `group overflow-hidden border border-${STYLE_BORDER_COLOR} bg-transparent transition-all hover:border-${STYLE_PRIMARY_COLOR}`;
  const techClass = `bg-transparent px-3 py-1.5 text-4 text-${STYLE_TEXT_COLOR}`;
  const buttonClass = `w-fit text-center font-semibold px-3 py-2 tracking-wider border border-${STYLE_PRIMARY_COLOR} text-sm hover:bg-${STYLE_PRIMARY_COLOR}/10 transition-colors duration-300`;
  const descriptionClass = `text-md text-${STYLE_TEXT_COLOR} font-semibold`;

  return (
    <div className={cardClass}>
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={300}
            className="object-cover h-full"
          />
        </div>
      )}
      <div className="space-y-2">
        <div className={`flex flex-wrap gap-2 border border-${STYLE_BORDER_COLOR} border-x-0`}>
          {technologies.map((tech) => (
            <span
              key={tech}
              className={techClass}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3 p-4">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className={descriptionClass}>{description}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={projectUrl}
              className={buttonClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              {buttonText}
            </Link>

            {secondaryButtonText && secondaryProjectUrl && (
              <Link
                href={secondaryProjectUrl}
                className={buttonClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
