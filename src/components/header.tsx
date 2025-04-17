"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AlignJustify, Search, X } from "lucide-react"
import Image from "next/image"
import { logo } from "@/assets/index"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background transition-all duration-100 ease-in-out">
      <div className="container flex  items-center justify-between ">
        <div className="flex items-center gap-2">
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

        <nav className="hidden md:flex gap-9">
          {["Home", "About Us", "Services", "Portfolio", "Contact Us"].map(
            (label) => {
              const href = `#${label.toLowerCase().replace(" ", "")}`;
              return (
                <Link
                  key={label}
                  href={href === "#home" ? "/" : href}
                  className="text-sm hover:font-bold text-gray-500 underline-offset-4 hover:bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] hover:text-transparent bg-clip-text"
                >
                  {label}
                </Link>
              );
            }
          )}
        </nav>

        <div className="flex items-center md:gap-4 gap-2">
          <Button className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] hover:opacity-90 text-white rounded-lg border-none sm:text-sm text-xs md:px-4 px-2   py-2">
            Get Free Consultation
          </Button>
          {/* <Search className="h-5 w-5 text-muted-foreground hidden md:block" /> */}
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
  )
}
