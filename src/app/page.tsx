import { Introduction } from "@/components/landing/Introduction";
import { SocialLinks } from "@/components/landing/SocialLinks";
import { Quote } from "@/components/landing/Quote";
import { TopicHeader } from "@/components/landing/TopicHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Skills } from "@/components/Skills";
import { AboutMe } from "@/components/landing/AboutMe";
import { projects, type Project } from "@/data/projects";
import { skills } from "@/data/skills";
import "./globals.css";
import {
  TOPIC_ABOUT_ME_BORDER_LENGTH,
  TOPIC_PROJECTS_BORDER_LENGTH,
  TOPIC_SKILLS_BORDER_LENGTH,
  TOPIC_CONTACTS_BORDER_LENGTH,
  PROJECT_BUTTON_LINK,
} from "@/constants";
import { Contacts } from "@/components/landing/Contacts";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white relative font-mira">

      <main className="container mx-auto px-4 md:px-8 py-10 md:py-18 flex flex-col gap-20 md:gap-32">
        <Introduction />
        <div className="mx-auto">
          <Quote />
        </div>

        {/* Projects Section */}
        <section className="space-y-8 w-11/12 md:w-9/10 mx-auto">
          <TopicHeader
            topic="Projects"
            showViewAll={true}
            viewAllLink={PROJECT_BUTTON_LINK}
            borderLength={TOPIC_PROJECTS_BORDER_LENGTH}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
            {projects.filter((project:Project, index: number) => index < 3).map((project: Project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-8 w-11/12 md:w-9/10 mx-auto">
          <TopicHeader
            topic="Skills"
            showViewAll={false}
            borderLength={TOPIC_SKILLS_BORDER_LENGTH}
          />
          <Skills skills={skills} />
        </section>

        <section className="space-y-8 w-11/12 md:-mt-8 md:w-9/10 mx-auto">
          <TopicHeader
            topic="About me"
            showViewAll={false}
            borderLength={TOPIC_ABOUT_ME_BORDER_LENGTH}
          />
          <AboutMe showButton={true} />
        </section>

        <section className="space-y-8 w-11/12 md:w-9/10 mx-auto">
          <TopicHeader
            topic={"Contacts"}
            showViewAll={false}
            borderLength={TOPIC_CONTACTS_BORDER_LENGTH}
          />
          <Contacts showButton={true} />
        </section>
      </main>
    </div>
  );
}
