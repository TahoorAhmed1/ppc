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
      <div className="container flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src={logo || "/placeholder.svg"}
              alt="logo"
              width={80}
              height={80}
              className="w-20 sm:w-24 md:w-[100px]"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 lg:gap-6">
          {["Home", "About Us", "Services", "Portfolio", "Contact Us"].map((label) => {
            const href = `#${label.toLowerCase().replace(" ", "")}`
            return (
              <Link
                key={label}
                href={href === "#home" ? "/" : href}
                className="text-xs md:text-[13px] lg:text-sm hover:font-bold text-gray-500 underline-offset-4 hover:bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] hover:text-transparent bg-clip-text"
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] hover:opacity-90 text-white rounded-lg border-none text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 h-8 sm:h-10 whitespace-nowrap">
            Get Free Consultation
          </Button>
          <Search className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground hidden md:block" />
          {/* Hamburger for mobile */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
            ) : (
              <AlignJustify className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-background border-t">
          {["Home", "About Us", "Services", "Portfolio", "Contact Us"].map((label) => {
            const href = `#${label.toLowerCase().replace(" ", "")}`
            return (
              <Link
                key={label}
                href={href === "#home" ? "/" : href}
                className="block text-xs sm:text-sm text-gray-600 hover:font-semibold hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)} // auto-close on nav click
              >
                {label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
