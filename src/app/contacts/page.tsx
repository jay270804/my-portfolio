"use client";
import { Contacts } from "@/components/landing/Contacts";
import { TopicHeader } from "@/components/landing/TopicHeader";
import { PageIntro } from "@/components/PageIntro";
import {
  CONTACTS_PAGE_DESCRIPTION,
  PAGE_TITLE_CONTACTS,
  PAGE_DESCRIPTION_CONTACTS,
  SECTION_TITLE_REACH_OUT,
  CLASS_SECTION_CONTAINER,
  STYLE_BG_COLOR
} from "@/constants";
import { ContactForm } from "@/components/landing/ContactForm";
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
  body: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4
    }
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.6
    }
  }
};

export default function ContactsPage(){
    return (
        <div className={`min-h-screen bg-${STYLE_BG_COLOR} text-white font-mira`}>
        <main className="container mx-auto px-4 md:px-8 py-10 md:py-18 flex flex-col gap-20 md:gap-32">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="intro"
            viewport={{ once: true }}
          >
            <PageIntro title={PAGE_TITLE_CONTACTS} description={PAGE_DESCRIPTION_CONTACTS} />
          </motion.div>

          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="body"
            viewport={{ once: true }}
            className={`${CLASS_SECTION_CONTAINER} mt-[-20px]`}
          >
            <Contacts description={CONTACTS_PAGE_DESCRIPTION} showButton={false} />
          </motion.section>

          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="end"
            viewport={{ once: true }}
            className={`${CLASS_SECTION_CONTAINER} mt-[-20px]`}
          >
            <TopicHeader topic={SECTION_TITLE_REACH_OUT} showViewAll={false} borderLength={0} />
            <ContactForm />
          </motion.section>

          {/* Empty section to push the footer to the bottom */}
          <section></section>
        </main>
      </div>
    )
}