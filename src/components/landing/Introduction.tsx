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
    <div className="flex w-9/10 justify-between items-center mx-auto">
      <div className="space-y-4 flex flex-col gap-6">
        <h1 className="text-4xl font-bold tracking-wide">
          {DEVELOPER_NAME} is a{" "}
          <span className="text-primary">{DEVELOPER_TITLE_1}</span> and{" "}
          <span className="text-primary">{DEVELOPER_TITLE_2}</span>
        </h1>
        <p className="text-gray-400 tracking-wide text-md max-w-md">
          {DEVELOPER_DESCRIPTION}
        </p>
      <Link
        href={CONTACT_BUTTON_LINK}
        className="w-fit font-semibold px-3 py-2 tracking-wider border border-primary text-md hover:bg-primary/10 transition-colors duration-300"
      >
        {CONTACT_BUTTON_TEXT}
      </Link>
      </div>


      <div className="mt-8 p-2  max-w-md ">
        <Image src={"/Introduction-developer.svg" } height={386} width={469} alt="my-image"/>
        <p className="text-md font-semibold tracking-wider border-2 h-9 w-9/10 border-gray-500 flex mx-auto gap-1.5 items-center">
            <Image src={"/primary-rectangle.svg"} height={16} width={16} alt="purple rectangle" className="ml-2"/>
            <span className="text-gray-400">{" "}{CURRENTLY_WORKING_LABEL}</span>{" "}
            {CURRENTLY_WORKING_PROJECT_NAME}
        </p>
      </div>
    </div>
  );
}