import React from "react";
import Link from "next/link";
import {
  ABOUT_ME_GREETING,
  ABOUT_ME_BIO_1,
  ABOUT_ME_BIO_2,
  ABOUT_ME_VIDEO_PATH,
  ABOUT_ME_VIDEO_POSTER,
  CONTACT_BUTTON_TEXT,
  CONTACT_BUTTON_LINK,
  ABOUT_ME_BUTTON_TEXT,
} from "@/constants";

export const AboutMe = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between md:items-center gap-8">
      {/* Left column - Bio text */}
      <div className="w-full md:w-1/2  text-lg space-y-8 mt-8 md:mt-0">
        <h2 className="text-gray-400">{ABOUT_ME_GREETING}</h2>

        <p className="text-gray-400">{ABOUT_ME_BIO_1}</p>

        <p className="text-gray-400">{ABOUT_ME_BIO_2}</p>

        <Link
          href={CONTACT_BUTTON_LINK}
          className="w-fit block font-semibold px-3 py-2 tracking-wider border border-primary text-md hover:bg-primary/10 transition-colors duration-300"
        >
          {ABOUT_ME_BUTTON_TEXT}
        </Link>
      </div>

      {/* Right column - Video with dots pattern */}
      <div className="w-full md:w-2/3 flex justify-center md:ml-35 mt-5 items-center">
        <div className="relative w-full max-w-xl">
          <video
            className="w-full h-auto rounded-sm border-b border-primary"
            controls
            poster={ABOUT_ME_VIDEO_POSTER}
            preload="auto"
            playsInline
            autoPlay={false}
          >
            <source src={ABOUT_ME_VIDEO_PATH} type="video/mp4" />
            <source src={`${ABOUT_ME_VIDEO_PATH}#t=0.1`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Decorative dots pattern top-right */}
          <div className="absolute -top-5 -right-5 md:-top-7 md:-right-7 grid grid-cols-5 gap-2 z-10">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-gray-400 opacity-30"
              />
            ))}
          </div>

          {/* Decorative dots pattern bottom-left */}
          <div className="absolute -bottom-5 -left-5 md:-bottom-7 md:-left-7 grid grid-cols-5 gap-2 z-10">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-gray-400 opacity-30"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
