import { FC } from 'react';
import Image from 'next/image';

interface Skill {
  name: string;
  level: number; // 1-5
  category: string;
}

interface SkillsProps {
  skills: Skill[];
}

export const Skills: FC<SkillsProps> = ({ skills }) => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Create a mapping for categories to display category in grid
  const categoryMapping: Record<string, {
    title: string,
    position: string,
    icon: string
  }> = {
    "Languages": {
      title: "Languages",
      position: "col-span-6 sm:col-span-6 md:col-span-2 md:col-start-7 ",
      icon: "💻"
    },
    "Databases": {
      title: "Databases",
      position: "col-span-6 sm:col-span-6 md:col-span-2 md:col-start-9",
      icon: "🗃️"
    },
    "Tools": {
      title: "Tools",
      position: "col-span-6 sm:col-span-6 md:col-span-2 md:col-start-11 ",
      icon: "🛠️"
    },
    "Other": {
      title: "Other",
      position: "col-span-6 sm:col-span-6 md:col-span-2 md:col-start-9 ",
      icon: "🧩"
    },
    "Frameworks": {
      title: "Frameworks",
      position: "col-span-6 sm:col-span-6 md:col-span-2 md:col-start-11 ",
      icon: "⚙️"
    },
    "AI": {
      title: "AI",
      position: "col-span-6 sm:col-span-6 md:col-span-2 md:col-start-11 ",
      icon: "🤖"
    }
  };

  return (
    <div className="w-full">
      {/* Main grid container */}
      <div className="relative grid grid-cols-12 gap-6">
        {/* Decorative elements */}
        <Image
          src="/skills-design.svg"
          alt="Skills design pattern"
          width={500}
          height={400}
          className="absolute hidden md:block top-10 left-12"
        />

        {/* Empty boxes for layout - hide on mobile */}
        <div className="hidden md:block md:col-span-3 md:col-start-5"></div>
        <div className="hidden md:block md:col-span-3 md:col-start-5 md:row-start-3"></div>
        <div className="hidden md:block md:col-span-3 md:col-start-5 md:row-start-6"></div>

        {/* Skill cards - 2 per row on mobile, grid on desktop */}
        {Object.keys(categoryMapping).map((category, index) => {
          if (!skillsByCategory[category]) return null;

          const { title, position, icon } = categoryMapping[category];
          const categorySkills = skillsByCategory[category];

          return (
            <div
              key={category}
              className={`${position} bg-transparent border border-gray-400 h-auto overflow-hidden hover:border-primary transition-colors`}
            >
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-white border-b border-gray-400 p-2 flex items-center">
                  <span className="mr-2">{icon}</span>
                  {title}
                </h3>
                <div className="p-2 flex-grow flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span key={skill.name} className="text-gray-400">{skill.name}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};