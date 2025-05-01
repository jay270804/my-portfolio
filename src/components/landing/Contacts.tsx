import React from "react";
import {
  CONTACTS_DESCRIPTION,
  CONTACTS_DISCORD_LABEL,
  CONTACTS_EMAIL_LABEL,
  CONTACTS_EMAIL_LINK,
  CONTACTS_DISCORD_ICON,
  CONTACTS_EMAIL_ICON,
  CONTACTS_MESSAGE_HEADER,
} from "@/constants";
import Image from "next/image";

export function Contacts() {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-full mx-auto gap-8 md:gap-0 justify-between items-center md:items-start mt-8">
      {/* Left: Description */}
      <p className="text-gray-400 text-lg max-w-xl whitespace-pre-line">
        {CONTACTS_DESCRIPTION}
      </p>
      {/* Right: Contact Card */}
      <div className="border border-gray-400 bg-transparent px-8 py-6 min-w-[270px] max-w-xs flex flex-col gap-4">
        <h3 className="font-bold text-xl text-white tracking-wider mb-2">{CONTACTS_MESSAGE_HEADER}</h3>
        <div className="flex items-center gap-3 text-gray-400 text-lg">
            <Image
                src={CONTACTS_DISCORD_ICON}
                alt="discord"
                height={30}
                width={30}
                />
          <span>{CONTACTS_DISCORD_LABEL}</span>
        </div>
        <a href={CONTACTS_EMAIL_LINK} className="flex items-center gap-3 text-gray-400 text-lg hover:text-white transition-colors">
          <Image
                src={CONTACTS_EMAIL_ICON}
                alt="email"
                height={30}
                width={30}
                />

          <span>{CONTACTS_EMAIL_LABEL}</span>
        </a>
      </div>
    </div>
  );
}