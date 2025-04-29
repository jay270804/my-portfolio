import { Introduction } from "@/components/landing/Introduction";
import { SocialLinks } from "@/components/landing/SocialLinks";
import { Quote } from "@/components/landing/Quote";
import "./globals.css"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white relative font-mira">
      <SocialLinks />
      <main className="container mx-auto px-4 md:px-8 py-10 md:py-18 flex flex-col gap-20 md:gap-32">
        <Introduction />
        <div className="mx-auto">
          <Quote />
        </div>
      </main>
    </div>
  );
}
