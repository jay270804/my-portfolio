import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/constants";

interface BurgerMenuProps {
  open: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export function BurgerMenu({ open, onClose, navLinks }: BurgerMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-60 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-background text-white shadow-lg transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700">
          <span className="font-bold text-2xl">Menu</span>
          <button onClick={onClose} aria-label="Close menu">
            <Image src="/CrossButton.png" width={28} height={28} alt="Close menu" />
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-mono text-gray-200 hover:text-primary transition-colors"
              onClick={onClose}
            >
              <span className="text-primary font-bold">#</span>
              <span className="ml-1">{link.label}</span>
            </Link>
          ))}
        </nav>
        <div className="flex justify-center gap-6 mt-10">
          {SOCIAL_LINKS.map((link, idx) => (
            <Link key={idx} href={link.href} target="_blank" rel="noopener noreferrer">
              <Image src={link.icon} width={50} height={50} alt={link.alt} />
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}