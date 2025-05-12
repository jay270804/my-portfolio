"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/constants";

export function SocialLinks() {
  const socialLinksVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <div className="hidden md:block fixed top-0 z-49 left-5">
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "11rem" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-[1px] bg-gray-400 mx-auto mb-2"
      />
      <div className="flex flex-col items-center gap-2">
        {SOCIAL_LINKS.map((link, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={socialLinksVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              href={link.href}
              className="transition-transform hover:-translate-y-1"
            >
              <Image src={link.icon} width={32} height={32} alt={link.alt} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}