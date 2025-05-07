import { FC } from 'react';
import Image from 'next/image';
import { funFacts } from '@/data/funFacts';
import { FUN_FACTS_PATTERN_IMAGE, STYLE_PRIMARY_COLOR, STYLE_BORDER_COLOR, STYLE_TEXT_COLOR } from '@/constants';

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

  const factClass = `inline-block border border-${STYLE_BORDER_COLOR} bg-transparent transition-all hover:border-${STYLE_PRIMARY_COLOR} px-3 py-2`;
  const textClass = `text-${STYLE_TEXT_COLOR} tracking-wider text-md break-words`;

  return (
    <div className="w-full flex items-start justify-between">
      <div className="flex flex-wrap gap-4 w-full md:max-w-[60%]">
        {funFacts.map((fact, index) => (
          <div
            key={index}
            className={factClass}
          >
            <p className={textClass}>{formatText(fact)}</p>
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