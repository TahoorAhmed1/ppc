"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AlignJustify, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { logo } from "@/assets/index"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const serviceItems = [
    { label: "App Development Services", href: "/app-development-services" },
    { label: "Branding Services", href: "/branding-services" },
    { label: "Digital Marketing", href: "/digital-marketing" },
    { label: "Email Marketing Services", href: "/email-marketing-services" },
    { label: "PPC Management Services", href: "/ppc-management-services" },
    { label: "SEO", href: "/seo" },
    { label: "Social Media Marketing Services", href: "/social-media-marketing-services" },
    { label: "Website Development Services", href: "/website-development-services" },
    { label: "Writing & Publishing Services", href: "/writing-&-publishing-services" },
    { label: "Web Hosting Services", href: "/web-hosting" },
  ]

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#aboutus" },
    {
      label: "Services",
      href: "#services",
      hasDropdown: true,
    },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact Us", href: "#contactus" },
    { label: "Web Hosting", href: "/web-hosting" },
  ]

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
          {navItems.map((item) =>
            item.hasDropdown ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium text-gray-500 underline-offset-4 hover:bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] hover:text-transparent bg-clip-text">
                  {item.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56">
                  {serviceItems.map((service) => (
                    <DropdownMenuItem key={service.href} asChild>
                      <a href={service.href} className="cursor-pointer">
                        {service.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-500 underline-offset-4 hover:bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] hover:text-transparent bg-clip-text"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center md:gap-4 gap-2">
          <a href="#contactus" className="">
            <Button className="bg-gradient-to-r cursor-pointer from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-lg border-none sm:text-sm text-xs md:px-4 px-2 py-2">
              Get Free Consultation
            </Button>
          </a>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
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
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.label} className="space-y-2">
                <div
                  className="flex items-center justify-between text-sm text-gray-600 hover:font-semibold hover:text-primary transition-colors"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <span>{item.label}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </div>
                {servicesOpen && (
                  <div className="pl-4 space-y-2 border-l border-gray-200">
                    {serviceItems.map((service) => (
                      <a
                        key={service.href}
                        href={service.href}
                        className="block text-sm text-gray-500 hover:font-semibold hover:text-primary transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {service.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm text-gray-600 hover:font-semibold hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ),
          )}
        </div>
      )}
    </header>
  )
}
