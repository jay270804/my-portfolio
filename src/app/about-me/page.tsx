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

export default function AboutMePage() {
  return (
    <div className={`min-h-screen bg-${STYLE_BG_COLOR} text-white font-mira`}>
      <main className="container mx-auto px-4 md:px-8 py-10 md:py-18 flex flex-col gap-20 md:gap-32">
        <PageIntro title={PAGE_TITLE_ABOUT} description={PAGE_DESCRIPTION_ABOUT} />
        <section className={CLASS_SECTION_CONTAINER}>
          <AboutMe showButton={false} />
        </section>
        <section className={CLASS_SECTION_CONTAINER}>
          <TopicHeader topic={SECTION_TITLE_SKILLS} showViewAll={false} borderLength={0} />
          <SkillsRow skills={skills} />
        </section>
        <section className={CLASS_SECTION_CONTAINER}>
          <TopicHeader topic={SECTION_TITLE_FUN_FACTS} showViewAll={false} borderLength={0} />
          <FunFacts />
        </section>
        <section></section>
      </main>
    </div>
  )
}