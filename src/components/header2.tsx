"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { logo } from "@/assets/index";
import { AlignJustify, ChevronDown, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const serviceItems = [
  // { label: "App Development Services", href: "/app-development-services" },
  // { label: "Branding Services", href: "/branding-services" },
  // { label: "Digital Marketing", href: "/digital-marketing" },
  // { label: "Email Marketing Services", href: "/email-marketing-services" },
  // { label: "PPC Management Services", href: "/ppc-management-services" },
  { label: "logo Design", href: "/logo-services" },
  {
    label: "Website Design & Development",
    href: "/website-development-services",
  },
  { label: "E-Commerce Websites", href: "/e-commerce-services" },
  {
    label: "Social Media Marketing",
    href: "/social-media-marketing-services",
  },
  { label: "Search Engine Optimization", href: "/seo" },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#aboutus" },
  {
    label: "Services",
    href: "#services",
    hasDropdown: true,
  },
  { label: "Packages", href: "/packages" },
  { label: "Contact Us", href: "#contactus" },
];

export default function Header2({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background transition-all duration-100 ease-in-out">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-x-2">
            <a href="/" className="flex items-center">
              <Image
                src={logo || "/placeholder.svg"}
                alt="logo"
                width={800}
                height={800}
                priority
                className="w-[108px] lg:w-[124px]"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-x-3 lg:gap-x-9">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className="flex items-center text-sm font-medium text-gray-500 underline-offset-4 hover:bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] hover:text-transparent hover:bg-clip-text">
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
                  className="text-sm font-medium text-gray-500 underline-offset-4 hover:bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] hover:text-transparent hover:bg-clip-text"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Contact Info and CTA */}
          <div className="flex items-center gap-3">
            {/* <div className="hidden md:flex items-center gap-4 lg:gap-10">
              <div>
                <div className="text-xs">Email</div>
                <a className="font-semibold text-xs lg:text-base" href="mailto:support@creativeagency360.com">
                  support@creativeagency360.com
                </a>
              </div>

              <div>
                <div className="text-xs">Call Now</div>
                <a href="tel:+18045745376" className="font-semibold text-xs lg:text-base">
                  +1 (804) 574 5376
                </a>
              </div>
            </div> */}

            {/* CTA Button */}
            <Button
              onClick={() => setIsOpen(true)}
              className="bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] hover:to-[#65CF5F] hover:from-[#1F9BED]/80 hover:opacity-90 hover:scale-105 transition-all duration-300 text-white rounded-lg border-none text-sm md:text-base px-4 h-10"
            >
              Let's Talk
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden ml-2"
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <X className="h-5 w-5 text-muted-foreground" />
              ) : (
                <AlignJustify className="h-5 w-5 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 py-3 space-y-3 border-t">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.label} className="space-y-2">
                  <button
                    className="flex items-center justify-between w-full text-sm text-gray-600 hover:font-semibold hover:text-primary transition-colors"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 space-y-2 border-l border-gray-200">
                      {serviceItems.map((service) => (
                        <a
                          key={service.href}
                          href={service.href}
                          className="block text-sm text-gray-500 hover:font-semibold hover:text-primary transition-colors py-1"
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
                  className="block text-sm text-gray-600 hover:font-semibold hover:text-primary transition-colors py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}

            {/* Mobile Contact Info */}
            <div className="pt-2 mt-2 border-t border-gray-100">
              <div className="mb-2">
                <div className="text-xs text-gray-500">Email</div>
                <a
                  className="font-semibold text-sm"
                  href="mailto:support@creativeagency360.com"
                >
                  support@creativeagency360.com
                </a>
              </div>
              <div>
                <div className="text-xs text-gray-500">Call Now</div>
                <a href="tel:+18045745376" className="font-semibold text-sm">
                  +1 (804) 574 5376
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
