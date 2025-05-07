export interface Skill {
  name: string;
  level: number; // 1-5
  category: string;
}

// export const skills: Skill[] = [
//   // Languages
//   { name: "TypeScript", level: 4, category: "Languages" },
//   { name: "Java", level: 3, category: "Languages" },
//   { name: "Python", level: 4, category: "Languages" },
//   { name: "JavaScript", level: 5, category: "Languages" },
//   { name: "C++", level: 5, category: "Languages" },

//   // Databases
//   { name: "SQLite", level: 4, category: "Databases" },
//   { name: "PostgreSQL", level: 3, category: "Databases" },
//   { name: "MongoDB", level: 4, category: "Databases" },

//   // Tools
//   { name: "VSCode", level: 5, category: "Tools" },
//   { name: "Linux", level: 4, category: "Tools" },
//   { name: "Figma", level: 3, category: "Tools" },
//   { name: "GitHub", level: 5, category: "Tools" },
//   { name: "Docker", level: 5, category: "Tools" },
//   { name: "Cursor", level: 5, category: "Tools" },
//   { name: "Postman", level: 5, category: "Tools" },

//   // Other
//   { name: "Tailwind CSS", level: 5, category: "Other" },
//   { name: "Shadcn UI", level: 5, category: "Other" },
//   { name: "Jinja", level: 3, category: "Other" },
//   { name: "Poetry", level: 4, category: "Other" },
//   { name: "REST", level: 4, category: "Other" },
//   { name: "OpenAPI", level: 3, category: "Other" },

//   // Frameworks
//   { name: "React", level: 5, category: "Frameworks" },
//   { name: "Next.js", level: 4, category: "Frameworks" },
//   // { name: "Vue", level: 4, category: "Frameworks" },
//   { name: "Express.js", level: 3, category: "Frameworks" },
//   { name: "Django", level: 4, category: "Frameworks" },
//   { name: "Fastapi", level: 4, category: "Frameworks" },
//   { name: "Gradio", level: 4, category: "Frameworks" },

//   { name: "Agentic", level: 5, category: "AI" },
//   { name: "OpenAI API", level: 4, category: "AI" },
//   { name: "Claude API", level: 3, category: "AI" },
//   { name: "Hugging Face", level: 4, category: "AI" },
//   { name: "LlamaIndex", level: 4, category: "AI" },
//   { name: "n8n", level: 4, category: "AI" },
//   { name: "LangGraph", level: 4, category: "AI" }
// ];
export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", level: 4, category: "Languages" },
  { name: "Python", level: 5, category: "Languages" }, // Increased level based on resume
  { name: "JavaScript", level: 5, category: "Languages" },
  { name: "Java", level: 3, category: "Languages" },
  { name: "C++", level: 3, category: "Languages" }, // Adjusted level

  // Cloud & DevOps (New category)
  { name: "AWS SAM", level: 4, category: "Cloud & DevOps" },
  { name: "AWS Lambda", level: 3, category: "Cloud & DevOps" },
  { name: "Serverless Architecture", level: 4, category: "Cloud & DevOps" },
  { name: "Docker", level: 5, category: "Cloud & DevOps" }, // Moved from Tools
  { name: "Git/GitHub", level: 5, category: "Cloud & DevOps" }, // Moved from Tools

  // Databases
  { name: "PostgreSQL", level: 4, category: "Databases" }, // Increased based on resume
  { name: "MongoDB", level: 4, category: "Databases" },
  { name: "MySQL", level: 3, category: "Databases" }, // Added from resume
  { name: "SQLite", level: 4, category: "Databases" },

  // Tools
  { name: "VSCode", level: 5, category: "Tools" },
  { name: "Linux", level: 4, category: "Tools" },
  { name: "Figma", level: 3, category: "Tools" },
  { name: "Cursor", level: 5, category: "Tools" },
  { name: "Postman", level: 5, category: "Tools" },

  // AI/ML (Expanded category)
  { name: "Agentic", level: 5, category: "AI/ML" },
  { name: "OpenAI API", level: 4, category: "AI/ML" },
  { name: "Claude API", level: 3, category: "AI/ML" },
  { name: "Hugging Face", level: 4, category: "AI/ML" },
  { name: "LlamaIndex", level: 4, category: "AI/ML" },
  { name: "LangChain", level: 4, category: "AI/ML" }, // Added from resume
  { name: "PyTorch", level: 3, category: "AI/ML" }, // Added from resume
  { name: "TensorFlow", level: 3, category: "AI/ML" }, // Added from resume
  { name: "LangGraph", level: 4, category: "AI/ML" },
  { name: "n8n", level: 4, category: "AI/ML" },

  // Frameworks
  { name: "React", level: 5, category: "Frameworks" },
  { name: "Next.js", level: 4, category: "Frameworks" },
  { name: "Express.js", level: 3, category: "Frameworks" },
  { name: "Django", level: 4, category: "Frameworks" },
  { name: "FastAPI", level: 5, category: "Frameworks" }, // Increased based on resume prominence
  { name: "Gradio", level: 4, category: "Frameworks" },
  { name: "Node.js", level: 4, category: "Frameworks" }, // Added from resume
  { name: "Tailwind CSS", level: 5, category: "Frameworks" },

  // Other
  { name: "ShadcnUI", level: 5, category: "Other" },
  { name: "Jinja", level: 3, category: "Other" },
  { name: "Poetry", level: 4, category: "Other" },
  { name: "REST API Design", level: 4, category: "Other" }, // Expanded name
  { name: "OpenAPI Specification", level: 3, category: "Other" },
  { name: "SOLID Principles", level: 4, category: "Other" }, // Added from resume
  { name: "TDD/BDD", level: 3, category: "Other" }, // Added from resume
];
