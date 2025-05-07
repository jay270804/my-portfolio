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

export default function ContactsPage(){
    return (
        <div className={`min-h-screen bg-${STYLE_BG_COLOR} text-white font-mira`}>
        <main className="container mx-auto px-4 md:px-8 py-10 md:py-18 flex flex-col gap-20 md:gap-32">
          <PageIntro title={PAGE_TITLE_CONTACTS} description={PAGE_DESCRIPTION_CONTACTS} />
          <section className={`${CLASS_SECTION_CONTAINER} mt-[-20px]`}>
            <Contacts description={CONTACTS_PAGE_DESCRIPTION} showButton={false} />
          </section>
          <section className={`${CLASS_SECTION_CONTAINER} mt-[-20px]`}>
            <TopicHeader topic={SECTION_TITLE_REACH_OUT} showViewAll={false} borderLength={0} />
            <ContactForm />
          </section>
          {/* Empty section to push the footer to the bottom */}
          <section></section>
        </main>
      </div>

    )
}