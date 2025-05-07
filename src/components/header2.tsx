"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { logo } from "@/assets/index";
import { AlignJustify, ChevronDown, X } from "lucide-react";

const serviceItems = [
  { label: "App Development Services", href: "/app-development-services" },
  { label: "Branding Services", href: "/branding-services" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Email Marketing Services", href: "/email-marketing-services" },
  { label: "PPC Management Services", href: "/ppc-management-services" },
  { label: "SEO", href: "/seo" },
  {
    label: "Social Media Marketing Services",
    href: "/social-media-marketing-services",
  },
  {
    label: "Website Development Services",
    href: "/website-development-services",
  },
  {
    label: "Writing & Publishing Services",
    href: "/writing-&-publishing-services",
  },
];
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
];

export default function Header2({ setIsOpen }: any) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background transition-all duration-100 ease-in-out">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <a href="/" className="flex items-center">
            <Image
              src={logo || "/placeholder.svg"}
              alt="logo"
              width={800}
              height={800}
              priority
              className="lg:w-[124px] w-[108px]"
            />
          </a>
        </div>

        <div className="flex md:gap-3 gap-1 items-center">
          <div className="flex flex-wrap justify-between items-center w-full lg:gap-10 gap-3">
            <div className="hidden md:block">
              <div className="text-xs">Email</div>
              <a
                className="font-semibold lg:text-base text-xs"
                href="mailto:support@creativeagency360.com"
              >
                support@creativeagency360.com
              </a>
            </div>

            <div className="hidden md:block">
              <div className="text-xs">Call Now</div>
              <a
                href="tel:+18045745376"
                className="font-semibold lg:text-base text-xs"
              >
                +1 (804) 574 5376 
              </a>
            </div>

            <Button
              onClick={() => setIsOpen(true)}
              className="bg-gradient-to-r hover:scale-105 transition-all duration-300 cursor-pointer from-[#65CF5F]/80 to-[#1F9BED] hover:to-[#65CF5F] hover:from-[#1F9BED]/80 hover:opacity-90 text-white rounded-lg border-none text-sm md:text-base px-4 h-10"
            >
              Let's Talk
            </Button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            ) : (
              <AlignJustify className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="px-3 pb-3 pt-2 space-y-2 bg-background border-t md:absolute md:right-0 md:w-64 md:mt-1 md:border md:rounded-lg md:shadow-md">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.label} className="space-y-2">
                <div
                  className="flex items-center justify-between text-xs text-gray-600 hover:font-semibold hover:text-primary transition-colors"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {servicesOpen && (
                  <div className="pl-3 space-y-2 border-l border-gray-200">
                    {serviceItems.map((service) => (
                      <a
                        key={service.href}
                        href={service.href}
                        className="block text-xs text-gray-500 hover:font-semibold hover:text-primary transition-colors"
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
                className="block text-xs text-gray-600 hover:font-semibold hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
}
