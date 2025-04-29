import { FEATURED_QUOTE } from "@/constants";
import Image from "next/image";

export function Quote() {
  return (
    <div className="relative w-10/11  max-w-5xl mx-auto">
      {/* Quote content with embedded quotes */}
      <div className="border border-gray-400 p-4 md:p-6 bg-transparent relative">
        {/* Left quote */}
        <Image
          src="/double-quotes.svg"
          height={28}
          width={28}
          alt="double quotes svg"
          className="absolute -top-3 left-3 md:-top-3 md:left-5"
        />

        <p className="text-xl md:text-3xl font-semibold tracking-widest px-2 md:px-4 py-2">
          {FEATURED_QUOTE.text}
        </p>

        {/* Right quote */}
        <Image
          src="/double-quotes.svg"
          height={28}
          width={28}
          alt="double quotes svg"
          className="absolute -bottom-3 right-3 md:-bottom-3 md:right-5 z-48"
        />
      </div>

      {/* Author container - positioned independently */}
      <div className="absolute -bottom-10 md:-bottom-15.5 right-0">
        <div className="border border-gray-400 min-w-[120px] md:min-w-[240px] h-[40px] md:h-[63px] flex items-center justify-center bg-transparent px-3 md:px-5 py-1 md:py-2">
          <p className="text-lg md:text-xl tracking-widest">
            - {FEATURED_QUOTE.author}
          </p>
        </div>
      </div>
    </div>
  );
}