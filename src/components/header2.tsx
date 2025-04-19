"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import { logo } from "@/assets/index";

export default function Header2() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background transition-all duration-100 ease-in-out">
      <div className="container py-5 flex  items-center justify-between ">
        <div className="flex items-center gap-x-2">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="logo"
              width={1000}
              height={1000}
              priority
              className="lg:w-[150px] w-[130px]"
            />
          </Link>
        </div>

        <div className="flex items-end md:gap-4 gap-2">
          <div className="flex flex-wrap justify-between w-full gap-12">
            <div className="hidden md:block">
              <div className="text-sm">Email</div>
              <div className="font-semibold text-lg">
                info@creativeagency360.com
              </div>
            </div>

            <div className="hidden md:block">
              <div className="text-sm">Call Now</div>
              <a href="tel:+18045745376" className="font-semibold text-lg">
                +1 (804) 574 5376
              </a>
            </div>

            <a href="#contactus">
              <Button className="bg-gradient-to-r cursor-pointer from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-lg border-none text-base md:text-lg px-5 h-12">
                Let's Talk
              </Button>
            </a>
          </div>
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
          {["Home", "About Us", "Services", "Portfolio", "Contact Us"].map(
            (label) => {
              const href = `#${label.toLowerCase().replace(" ", "")}`;
              return (
                <Link
                  key={label}
                  href={href === "#home" ? "/" : href}
                  className="block text-sm text-gray-600 hover:font-semibold hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)} // auto-close on nav click
                >
                  {label}
                </Link>
              );
            }
          )}
        </div>
      )}
    </header>
  );
}
