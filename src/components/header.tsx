"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import { logo } from "@/assets/index";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#aboutus" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact Us", href: "#contactus" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background transition-all duration-100 ease-in-out">
      <div className="container py-5 flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <a href="/" className="flex items-center">
            <Image
              src={logo || "/placeholder.svg"}
              alt="logo"
              width={1000}
              height={1000}
              priority
              className="lg:w-[155px] w-[135px]"
            />
          </a>
        </div>

        <nav className="hidden md:flex lg:gap-x-9 gap-x-3 ">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-500 underline-offset-4 hover:bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] hover:text-transparent bg-clip-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center md:gap-4 gap-2">
          <a href="#contactus" className="">
            <Button className="bg-gradient-to-r cursor-pointer from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-lg border-none sm:text-sm text-xs md:px-4 px-2 py-2">
              Get Free Consultation
            </Button>
          </a>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
            ) : (
              <AlignJustify className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-background border-t">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-sm text-gray-600 hover:font-semibold hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
