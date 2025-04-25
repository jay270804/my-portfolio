import { FEATURED_QUOTE } from "@/constants";
import Image from "next/image";

export function Quote() {
  return (
    <div className="relative max-w-5xl">
      {/* Quote content with embedded quotes */}
      <div className="border border-gray-400 p-6 bg-transparent relative">
        {/* Left quote */}
        <Image
          src="/double-quotes.svg"
          height={45}
          width={45}
          alt="double quotes svg"
          className="absolute -top-4 left-5"
        />

        <p className="text-4xl font-semibold tracking-widest px-4 py-2">
          {FEATURED_QUOTE.text}
        </p>

        {/* Right quote */}
        <Image
          src="/double-quotes.svg"
          height={45}
          width={45}
          alt="double quotes svg"
          className="absolute -bottom-4 right-5 z-48"
        />
      </div>

      {/* Author container - positioned independently */}
      <div className="absolute -bottom-15.5 right-0">
        <div className="border border-gray-400 m-w-3xl  h-[63px] flex items-center justify-center bg-transparent px-5 py-2">
          <p className="text-3xl tracking-widest">
            - {FEATURED_QUOTE.author}
          </p>
        </div>
      </div>
    </div>
  );
}