import React from "react";
import { STYLE_PRIMARY_COLOR, STYLE_TEXT_COLOR } from "@/constants";

interface PageIntroProps {
  title: string;
  description: string;
}

export function PageIntro({ title, description }: PageIntroProps) {
  return (
        <section className="space-y-2 w-11/12 md:w-9/10 mb-[-64px] mx-auto tracking-wider">
      <div className="flex items-center gap-1">
        <span className={`text-${STYLE_PRIMARY_COLOR} text-2xl font-mono font-bold leading-none`}>/</span>
        <h1 className="text-2xl font-bold text-white tracking-wider leading-none">{title}</h1>
      </div>
      <p className="text-gray-400 text-base mt-2">{description}</p>
    </section>
  );
}