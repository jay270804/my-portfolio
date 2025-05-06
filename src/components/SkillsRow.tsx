import { FC } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsRowProps {
  skills: Skill[];
}

export const SkillsRow: FC<SkillsRowProps> = ({ skills }) => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Create a mapping for categories to display category
  const categoryMapping: Record<string, {
    title: string,
    icon: string
  }> = {
    "Languages": {
      title: "Languages",
      icon: "💻"
    },
    "Databases": {
      title: "Databases",
      icon: "🗃️"
    },
    "Tools": {
      title: "Tools",
      icon: "🛠️"
    },
    "Other": {
      title: "Other",
      icon: "🧩"
    },
    "Frameworks": {
      title: "Frameworks",
      icon: "⚙️"
    },
    "AI": {
      title: "AI",
      icon: "🤖"
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-4">
        {Object.keys(categoryMapping).map((category) => {
          if (!skillsByCategory[category]) return null;

          const { title, icon } = categoryMapping[category];
          const categorySkills = skillsByCategory[category];

          return (
            <div
              key={category}
              className="flex-none w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)] lg:w-[calc(25%-0.75rem)] bg-transparent border border-gray-400 h-auto hover:border-primary transition-colors"
            >
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-white border-b border-gray-400 p-2 flex items-center">
                  <span className="mr-2 inline md:hidden">{icon}</span>
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