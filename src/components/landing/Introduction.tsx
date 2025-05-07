import Image from "next/image";
import Link from "next/link";
import {
  CURRENTLY_WORKING_PROJECT_NAME,
  CURRENTLY_WORKING_LABEL,
  DEVELOPER_NAME,
  DEVELOPER_TITLE_1,
  DEVELOPER_TITLE_2,
  DEVELOPER_DESCRIPTION,
  CONTACT_BUTTON_TEXT,
  CONTACT_BUTTON_LINK
} from "@/constants";

export function Introduction() {
  return (
    <div className="flex flex-col md:flex-row w-11/12 md:w-9/10 justify-between  items-center mx-auto gap-1 md:gap-10">
      <div className="space-y-4 flex flex-col gap-3 md:w-2/3">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          {DEVELOPER_NAME} is an{" "}
          <span className="text-primary">{DEVELOPER_TITLE_1}</span> &{" "}
          <span className="text-primary">{DEVELOPER_TITLE_2}</span>
        </h1>
        <p className="text-gray-400 tracking-wide text-base md:text-2xl max-w-md">
          {DEVELOPER_DESCRIPTION}
        </p>
      <Link
        href={CONTACT_BUTTON_LINK}
        className="w-fit hidden md:block font-semibold px-3 py-2 tracking-wider border border-primary text-md hover:bg-primary/10 transition-colors duration-300"
      >
        {CONTACT_BUTTON_TEXT}
      </Link>
      </div>
      <div className=" p-2 max-w-md md:w-2/3 flex  flex-col items-center">
        {/* <Image src={"/Introduction-developer.svg" } height={386} width={469} alt="my-image"/> */}
        <div className="relative">
        <Image src={"/logo-outline.svg"} height={150} width={150} alt="logo outline" className="absolute top-17 left-4 z-0"/>
        <Image src={"/intro-picture-1.png" } height={386} width={469} alt="my-image" className="relative z-10"/>
        <Image src={"/Dots.png"} height={100} width={100} alt="dots" className="absolute bottom-10 right-8 z-10"/>
        </div>
        <p className="text-md font-semibold tracking-wider border-2 h-9 w-9/10 border-gray-500 flex mx-auto gap-1.5 items-center mt-0">
            <Image src={"/primary-rectangle.svg"} height={16} width={16} alt="purple rectangle" className="ml-2"/>
            <span className="text-gray-400">{" "}{CURRENTLY_WORKING_LABEL}</span>{" "}
            {CURRENTLY_WORKING_PROJECT_NAME}
        </p>
      </div>
    </div>
  );
}