import React from "react";
import Link from "next/link";
import {
  CONTACTS_DESCRIPTION,
  CONTACTS_DISCORD_LABEL,
  CONTACTS_EMAIL_LABEL,
  CONTACTS_EMAIL_LINK,
  CONTACTS_DISCORD_ICON,
  CONTACTS_EMAIL_ICON,
  CONTACTS_MESSAGE_HEADER,
  CONTACTS_BUTTON_TEXT,
  CONTACTS_BUTTON_LINK,
  STYLE_PRIMARY_COLOR,
  STYLE_TEXT_COLOR,
  STYLE_BORDER_COLOR
} from "@/constants";
import Image from "next/image";

interface ContactsProps {
  description?: string;
  showButton?: boolean;
}

export function Contacts({
  description = CONTACTS_DESCRIPTION,
  showButton = false,
}: ContactsProps) {
  const buttonClass = `w-fit block font-semibold px-3 text-white py-2 tracking-wider border border-${STYLE_PRIMARY_COLOR} text-md hover:bg-${STYLE_PRIMARY_COLOR}/10 transition-colors duration-300`;

  return (
    <div className="flex flex-col md:flex-row w-full md:w-full mx-auto gap-8 md:gap-0 justify-between items-center md:items-start mt-8">
      {/* Left: Description */}
      <div className="text-gray-400 text-lg max-w-xl whitespace-pre-line space-y-6">
        <p>{description}</p>

        {showButton && (
          <Link href={CONTACTS_BUTTON_LINK} className={buttonClass}>
            {CONTACTS_BUTTON_TEXT}
          </Link>
        )}
      </div>

      {/* Right: Contact Card */}
      <div className={`border border-${STYLE_BORDER_COLOR} bg-transparent px-8 py-6 w-full md:min-w-[270px] md:max-w-xs flex flex-col gap-4`}>
        <h3 className="font-bold text-xl text-white tracking-wider mb-2">{CONTACTS_MESSAGE_HEADER}</h3>
        <div className={`flex items-center gap-3 text-${STYLE_TEXT_COLOR} text-lg`}>
            <Image
                src={CONTACTS_DISCORD_ICON}
                alt="discord"
                height={30}
                width={30}
                />
          <span>{CONTACTS_DISCORD_LABEL}</span>
        </div>
        <a href={CONTACTS_EMAIL_LINK} className={`flex items-center gap-3 text-${STYLE_TEXT_COLOR} text-lg hover:text-white transition-colors`}>
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