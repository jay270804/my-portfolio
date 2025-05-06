import { Contacts } from "@/components/landing/Contacts";
import { TopicHeader } from "@/components/landing/TopicHeader";
import { PageIntro } from "@/components/PageIntro";
import { CONTACTS_PAGE_DESCRIPTION } from "@/constants";
import { ContactForm } from "@/components/landing/ContactForm";
export default function ContactsPage(){
    return (
        <div className="min-h-screen bg-background text-white font-mira">
        <main className="container mx-auto px-4 md:px-8 py-10 md:py-18 flex flex-col gap-20 md:gap-32">
          <PageIntro title={"Contacts"} description={"Let's connect"} />
          <section className="space-y-8 w-11/12 mt-[-20px] md:w-9/10 mx-auto">
            <Contacts description={CONTACTS_PAGE_DESCRIPTION}/>
          </section>
          <section className="space-y-8 w-11/12 mt-[-20px] md:w-9/10 mx-auto">
            <TopicHeader topic="Reach out to me" showViewAll={false} borderLength={0} />
            <ContactForm />
          </section>
          {/* Empty section to push the footer to the bottom */}
          <section></section>
        </main>
      </div>

    )
}