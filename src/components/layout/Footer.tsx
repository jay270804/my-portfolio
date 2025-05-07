import React from "react";
import Image from "next/image";
import { FOOTER_NAME, FOOTER_EMAIL, FOOTER_EMAIL_LINK, FOOTER_SUBTITLE, SOCIAL_LINKS } from "@/constants";

export function Footer() {
  return (
    <footer className="w-11/12 md:w-7/9 mx-auto h-auto md:h-50 bg-transparent text-white font-mira flex flex-col justify-between pt-4 pb-2">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-0">
        {/* Left: Name, email, subtitle */}
        <div className="flex md:flex-col md:gap-1 gap-5 p-2 flex-row items-center md:items-start">
          <div className="flex items-center gap-2">
            <Image src="/Brand.svg" width={19} height={19} alt="Brand Logo" />
            <span className="font-bold text-lg tracking-wide">{FOOTER_NAME}</span>
            <a href={FOOTER_EMAIL_LINK} className="text-gray-400 text-base ml-2 hidden md:block hover:underline">{FOOTER_EMAIL}</a>
          </div>
          <span className="text-gray-200 text-sm md:text-base mt-1 tracking-wider text-center md:text-left ">{FOOTER_SUBTITLE}</span>
        </div>
        {/* Right: Media and icons */}
        <div className="flex flex-col items-center md:items-start gap-2 p-2">
          <span className="font-semibold text-xl text-white tracking-wider hidden md:block">Media</span>
          <div className="gap-4 hidden md:flex">
            <a href={SOCIAL_LINKS[0].href} aria-label="Github">
              <Image src="/Github.svg" width={30} height={30} alt="Github" className="opacity-60 hover:opacity-100 transition" />
            </a>
            <a href={SOCIAL_LINKS[1].href} aria-label="LinkedIn">
              <Image src="/Linkedin.svg" width={30} height={30} alt="LinkedIn" className="opacity-60 hover:opacity-100 transition" />
            </a>
          </div>
        </div>
      </div>
      {/* Center: Copyright */}
      <div className="w-full flex justify-center pb-4">
        <span className="text-gray-400 text-sm md:text-base">{`©Copyright ${new Date().getFullYear()}. Made by Jay`}</span>
      </div>
    </footer>
  );
}