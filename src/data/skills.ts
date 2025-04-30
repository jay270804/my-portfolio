export interface Skill {
  name: string;
  level: number; // 1-5
  category: string;
}

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", level: 4, category: "Languages" },
  { name: "Lua", level: 3, category: "Languages" },
  { name: "Python", level: 4, category: "Languages" },
  { name: "JavaScript", level: 5, category: "Languages" },

  // Databases
  { name: "SQLite", level: 4, category: "Databases" },
  { name: "PostgreSQL", level: 3, category: "Databases" },
  { name: "Mongo", level: 4, category: "Databases" },

  // Tools
  { name: "VSCode", level: 5, category: "Tools" },
  { name: "Neovim", level: 4, category: "Tools" },
  { name: "Linux", level: 4, category: "Tools" },
  { name: "Figma", level: 3, category: "Tools" },
  { name: "XFCE", level: 3, category: "Tools" },
  { name: "Arch", level: 4, category: "Tools" },
  { name: "Git", level: 5, category: "Tools" },
  { name: "Font Awesome", level: 4, category: "Tools" },

  // Other
  { name: "HTML", level: 5, category: "Other" },
  { name: "CSS", level: 5, category: "Other" },
  { name: "EJS", level: 3, category: "Other" },
  { name: "SCSS", level: 4, category: "Other" },
  { name: "REST", level: 4, category: "Other" },
  { name: "Jinja", level: 3, category: "Other" },

  // Frameworks
  { name: "React", level: 5, category: "Frameworks" },
  { name: "Vue", level: 4, category: "Frameworks" },
  { name: "Disnake", level: 3, category: "Frameworks" },
  { name: "Discord.js", level: 4, category: "Frameworks" },
  { name: "Flask", level: 4, category: "Frameworks" },
  { name: "Express.js", level: 4, category: "Frameworks" },

  { name: "React", level: 5, category: "AI" },
  { name: "Vue", level: 4, category: "AI" },
  { name: "Disnake", level: 3, category: "AI" },
  { name: "Discord.js", level: 4, category: "AI" },
  { name: "Flask", level: 4, category: "AI" },
  { name: "Express.js", level: 4, category: "AI" }
];