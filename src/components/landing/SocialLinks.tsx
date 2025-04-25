import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants";

export function SocialLinks() {
  return (
    <div className="fixed top-0 z-49 left-5 ">
    <div className="w-[1px] h-44 bg-gray-400 mx-auto mb-2"></div>
      <div className="flex flex-col items-center gap-2">
        {SOCIAL_LINKS.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="transition-transform hover:-translate-y-1"
          >
            <Image src={link.icon} width={32} height={32} alt={link.alt} />
          </Link>
        ))}
      </div>
    </div>
  );
}