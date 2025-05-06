import { PROJECT_BUTTON_GITHUB_TEXT, PROJECT_BUTTON_LIVE_TEXT } from "@/constants"

export interface SmallProject {
  title: string;
  description: string;
  technologies: string[];
  projectUrl: string;
  buttonText: string;
}

export const smallProjects: SmallProject[] = [
  {
    title: "Bot boilerplate",
    description: "Start creating scalable discord.js bot with typescript in seconds",
    technologies: ["Discord.js", "TS", "JS"],
    projectUrl: "https://github.com/example/bot-boilerplate",
    buttonText: PROJECT_BUTTON_GITHUB_TEXT
  },
  {
    title: "My blog",
    description: "Front-end of my future blog website written in vue",
    technologies: ["VUE", "CSS", "JS"],
    projectUrl: "https://github.com/example/my-blog",
    buttonText: PROJECT_BUTTON_GITHUB_TEXT
  },
  {
    title: "Chess pro",
    description: "Figma landing page about service for viewing chess tournaments",
    technologies: ["Figma"],
    projectUrl: "https://figma.com/example/chess-pro",
    buttonText: PROJECT_BUTTON_GITHUB_TEXT
  },
  {
    title: "Crash protect website",
    description: "Figma template for website about anti-raid, anti-crash discord bot",
    technologies: ["Figma"],
    projectUrl: "https://figma.com/example/crash-protect",
    buttonText: PROJECT_BUTTON_GITHUB_TEXT
  },
  {
    title: "CSS experiments",
    description: "Collection of my different little projects in css",
    technologies: ["HTML", "CSS"],
    projectUrl: "https://example.com/css-experiments",
    buttonText: PROJECT_BUTTON_LIVE_TEXT
  },
  {
    title: "Web Dev nvim config",
    description: "Config for neovim perfect for web developer",
    technologies: ["Lua", "NeoVim"],
    projectUrl: "https://github.com/example/nvim-config",
    buttonText: PROJECT_BUTTON_GITHUB_TEXT
  },
  {
    title: "Ooku",
    description: "Simple Link shortener with auth",
    technologies: ["Python", "Quart", "HTML"],
    projectUrl: "https://example.com/ooku",
    buttonText: PROJECT_BUTTON_LIVE_TEXT
  },
  {
    title: "School website",
    description: "Figma template website for my school",
    technologies: ["Figma"],
    projectUrl: "https://figma.com/example/school-website",
    buttonText: PROJECT_BUTTON_GITHUB_TEXT
  }
];