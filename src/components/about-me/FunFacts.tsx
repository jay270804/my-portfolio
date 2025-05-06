import { FC } from 'react';
import Image from 'next/image';
import { funFacts } from '@/data/funFacts';
import { FUN_FACTS_PATTERN_IMAGE } from '@/constants';

export const FunFacts: FC = () => {
  // Function to process text and make parts between * * bold
  const formatText = (text: string) => {
    // Split by * but keep the *
    const parts = text.split(/(\*[^*]+\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        // Remove asterisks and make bold
        return <strong key={index} className="font-semibold text-white">{part.slice(1, -1)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="w-full flex items-start justify-between">
      <div className="flex flex-wrap gap-4 max-w-[60%]">
        {funFacts.map((fact, index) => (
          <div
            key={index}
            className="inline-block border border-gray-400 bg-transparent transition-all hover:border-primary px-3 py-2"
          >
            <p className="text-gray-400 tracking-wider text-md whitespace-nowrap">{formatText(fact)}</p>
          </div>
        ))}
      </div>

      <div className="hidden md:block mr-8">
        <Image
          src={FUN_FACTS_PATTERN_IMAGE}
          alt="Fun facts pattern"
          width={250}
          height={250}
          className="object-contain"
        />
      </div>
    </div>
  );
};