"use client";
import { TopicHeader } from "@/components/landing/TopicHeader";
import { WorksCards } from "@/components/works/WorksCards";
import { projects } from "@/data/projects";
import { PageIntro } from "@/components/PageIntro";
import { SmallProjectsGrid } from "@/components/SmallProjectsGrid";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  intro: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2
    }
  }
};

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-background text-white font-mira">
      <main className="container mx-auto px-4 md:px-8 py-10 md:py-18 flex flex-col gap-20 md:gap-32">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="intro"
          viewport={{ once: true }}
        >
          <PageIntro title={"projects"} description={"List of my projects"} />
        </motion.div>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 w-11/12 md:w-9/10 mx-auto"
        >
          <TopicHeader topic="complete-apps" showViewAll={false} borderLength={700} />
          <WorksCards projects={projects} />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 w-11/12 md:w-9/10 mx-auto"
        >
          <TopicHeader topic="small-projects" showViewAll={false} borderLength={450} />
          <SmallProjectsGrid />
        </motion.section>

        {/* Empty section to push the footer to the bottom */}
        <section></section>
      </main>
    </div>
  );
}