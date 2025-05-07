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
      <div className="container py-5 flex  items-center justify-between  ">
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

        <div className="flex  md:gap-4 gap-2 items-center">
          <div className="flex flex-wrap justify-between items-center w-full lg:gap-12 gap-4">
            <div className="hidden md:block">
              <div className="text-sm">Email</div>

              <a
                className="font-semibold lg:text-lg text-sm"
                href="mailto:support@creativeagency360.com"
              >
                support@creativeagency360.com
              </a>
            </div>

            <div className="hidden md:block">
              <div className="text-sm">Call Now</div>
              <a
                href="tel:+18045745376"
                className="font-semibold lg:text-lg text-sm"
              >
                +1 (804) 574 5376
              </a>
            </div>

            <Button
              onClick={() => setIsOpen(true)}
              className="bg-gradient-to-r hover:scale-105 transition-all duration-300 cursor-pointercursor-pointer from-[#65CF5F]/80 to-[#1F9BED] hover:to-[#65CF5F] hover:from-[#1F9BED]/80 hover:opacity-90  text-white rounded-lg border-none text-base md:text-lg px-5 h-12"
            >
              Let's Talk
            </Button>
          </div>
          <button
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
        <div className="px-4 pb-4 pt-2 space-y-2 bg-background border-t md:absolute md:right-0  md:w-70 md:mt-1 md:border md:rounded-lg md:shadow-md">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.label} className="space-y-2">
                <div
                  className="flex items-center justify-between text-sm text-gray-600 hover:font-semibold hover:text-primary transition-colors"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
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
            )
          )}
        </div>
      )}
    </header>
  );
}
