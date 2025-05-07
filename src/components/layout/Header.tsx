"use client";

// import "./globals.css"
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";


const navLinks = [
  { href: "/", label: "home" },
  { href: "/works", label: "works" },
  { href: "/about-me", label: "about me" },
  { href: "/contacts", label: "contacts" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-7/9 mx-auto h-16 bg-background text-white font-mira">
      <nav className="container mx-auto flex items-end justify-between h-16">
        {/* Brand */}
        <div className="w-1/10 font-bold tracking-tight flex items-center gap-2 mb-1">
          <Link href="/" className="flex items-center gap-2">
            <Image src={"/Brand.svg"} width={19} height={19} alt={"Brand Logo"}/>
            <p className="font-bold text-2xl">Jay</p>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-8">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <NavigationMenuItem key={link.href}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`flex items-center py-2 px-0 bg-transparent hover:bg-transparent focus:bg-transparent text-lg
                          ${isActive ? "text-white hover:text-white focus:text-white active:text-white" : "text-gray-300 hover:text-white focus:text-white active:text-white transition-colors duration-200"}
                          data-[active=true]:hover:bg-transparent data-[active=true]:focus:bg-transparent data-[active=true]:active:bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent`}
                      >
                        <div>
                          <span className="text-primary font-bold">#</span>
                          <span className="ml-0.5">{link.label}</span>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Burger Icon for Mobile */}
        <button
          className="md:hidden flex justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Image src="/BurgerButton.png" width={32} height={32} alt="Open menu" />
        </button>
        {/* Burger Menu Drawer */}
        <BurgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} navLinks={navLinks} />
      </nav>
    </header>
  );
}