"use client";
import { AboutMe } from "@/components/landing/AboutMe";
import { TopicHeader } from "@/components/landing/TopicHeader";
import { PageIntro } from "@/components/PageIntro";
import { SkillsRow } from "@/components/SkillsRow";
import { skills } from "@/data/skills";
import { FunFacts } from "@/components/about-me/FunFacts";
import {
  PAGE_TITLE_ABOUT,
  PAGE_DESCRIPTION_ABOUT,
  SECTION_TITLE_SKILLS,
  SECTION_TITLE_FUN_FACTS,
  CLASS_SECTION_CONTAINER,
  STYLE_BG_COLOR
} from "@/constants";
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
      delay: 0.4
    }
  }
};

export default function AboutMePage() {
  return (
    <div className={`min-h-screen bg-${STYLE_BG_COLOR} text-white font-mira`}>
      <main className="container mx-auto px-4 md:px-8 py-10 md:py-18 flex flex-col gap-20 md:gap-32">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="intro"
          viewport={{ once: true }}
        >
          <PageIntro title={PAGE_TITLE_ABOUT} description={PAGE_DESCRIPTION_ABOUT} />
        </motion.div>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={CLASS_SECTION_CONTAINER}
        >
          <AboutMe showButton={false} />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={CLASS_SECTION_CONTAINER}
        >
          <TopicHeader topic={SECTION_TITLE_SKILLS} showViewAll={false} borderLength={0} />
          <SkillsRow skills={skills} />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={CLASS_SECTION_CONTAINER}
        >
          <TopicHeader topic={SECTION_TITLE_FUN_FACTS} showViewAll={false} borderLength={0} />
          <FunFacts />
        </motion.section>

        <section></section>
      </main>
    </div>
  )
}