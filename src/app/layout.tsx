import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SocialLinks } from "@/components/landing/SocialLinks";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Jay's Portfolio",
  description: "Developed by Jay",
  icons: {
    icon: '/Brand.svg',
    shortcut: '/Brand.svg',
    apple: '/Brand.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-mira antialiased`}
      >
        <Header/>
        <SocialLinks />
        {children}
        <div className="w-full border-[0.5px] border-gray-400"></div>
        <Footer/>
        <Analytics />
      </body>
    </html>
  );
}
