import { AboutMe } from "@/components/landing/AboutMe";
import { TopicHeader } from "@/components/landing/TopicHeader";
import { PageIntro } from "@/components/PageIntro";
import { SkillsRow } from "@/components/SkillsRow";
import { skills } from "@/data/skills";
import { FunFacts } from "@/components/about-me/FunFacts";

export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-background text-white font-mira">
      <main className="container mx-auto px-4 md:px-8 py-10 md:py-18 flex flex-col gap-20 md:gap-32">
        <PageIntro title={"about-me"} description={"Who am I?"} />
        <section className="space-y-8 w-11/12 md:w-9/10 mx-auto">
          <AboutMe showButton={false} />
        </section>
        <section className="space-y-8 w-11/12 md:w-9/10 mx-auto">
          <TopicHeader topic="Skills" showViewAll={false} borderLength={0} />
          <SkillsRow skills={skills} />
        </section>
        <section className="space-y-8 w-11/12 md:w-9/10 mx-auto">
          <TopicHeader topic="Fun Facts" showViewAll={false} borderLength={0} />
          <FunFacts />
        </section>
        <section></section>
      </main>
    </div>
  )
}