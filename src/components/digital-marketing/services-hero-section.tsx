import { heroSectionImage3 } from "@/assets"
import Link from "next/link"
import type React from "react"

type ServicesHeroSectionProps = {
  heading: string
}

const ServicesHeroSection: React.FC<ServicesHeroSectionProps> = ({ heading }) => {
  return (
    <>
      <div
        className="text-white py-16 sm:py-20 md:py-28 lg:py-32 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${heroSectionImage3.src})`,
        }}
      >
        {/* Overlay to ensure text readability on any background */}
        <div className="absolute inset-0  bg-opacity-40"></div>

        <div className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            {heading}
          </h1>
          <div className="flex justify-center text-xs sm:text-sm md:text-base flex-wrap gap-1 sm:gap-2">
            <Link href="/" className="hover:underline transition-colors">
              Home
            </Link>
            <span className="mx-1 sm:mx-2">•</span>
            <span>{heading}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesHeroSection
