"use client"
import { useState } from "react"
import { BookingModal } from "./booking-modal"

interface PricingPackage {
  id: string
  name: string
  description: string
  price: string
  originalPrice: string
  features: string[]
  additionalFeatures: string[]
}

const ServicesCombo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<PricingPackage | null>(null)

  const handleBookNow = () => {
    const combo: PricingPackage = {
      id: "combo-1",
      name: "All-in-One Combo",
      description: "Company Branding Solution",
      price: "1799",
      originalPrice: "3,599",
      features: [],
      additionalFeatures: [],
    };
    setSelectedPackage(combo);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 font-sans">
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl lg:grid-cols-3">
        {/* Left Content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
            ALL IN ONE <span className="text-[#3DB1B1]">COMBO</span>
          </h1>
          <p className="text-black text-base sm:text-lg mb-6 sm:mb-10">
            Our services are suitable for potential super-startups and brands to
            revamp for company
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-10">
            {/* First Column */}
            <div className="space-y-8">
              {/* LOGO DESIGN SERVICES */}
              <div>
                <h2 className="text-[#3DB1B1] text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  LOGO DESIGN SERVICES
                </h2>
                <ul className="space-y-2 text-black">
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      5 Custom Logo Design Concepts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Dedicated Designer Team
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">Icon Design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      File Formats (PSD, PDF, AI, JPEG, PNG)
                    </span>
                  </li>
                </ul>
              </div>

              {/* STATIONARY SERVICES */}
              <div>
                <h2 className="text-[#3DB1B1] text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  STATIONARY SERVICES
                </h2>
                <ul className="space-y-2 text-black">
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      MS Word Letterhead
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">Business Card</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">Letterhead</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Envelop, Fax Template
                    </span>
                  </li>
                </ul>
              </div>

              {/* SOCIAL MEDIA SERVICES */}
              <div>
                <h2 className="text-[#3DB1B1] text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  SOCIAL MEDIA SERVICES
                </h2>
                <ul className="space-y-2 text-black">
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Facebook Page Design
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Twitter Page Design
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      YouTube Page Design
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Google+ Page Design
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Instagram Page Design
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      All Final File Formats
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-8">
              {/* WEBSITE SERVICES */}
              <div>
                <h2 className="text-[#3DB1B1] text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  WEBSITE SERVICES
                </h2>
                <ul className="space-y-2 text-black">
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      10 Pages Website Design
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      CMS / Admin Panel
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Mobile Responsive
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Team of Expert Web Designer & Developer
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">8 Stock Images</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      5 Banner Design
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">Jquery Sliders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Free Google Friendly Sitemap
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Complete W3C Certified HTML
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Complete Deployment
                    </span>
                  </li>
                </ul>
              </div>

              {/* VALUE-ADDED SERVICES */}
              <div>
                <h2 className="text-[#3DB1B1] text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  VALUE-ADDED SERVICES
                </h2>
                <ul className="space-y-2 text-black">
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      All Final File Formats
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Dedicated Account Manager
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      100% Ownership Rights
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      100% Satisfaction Guarantee
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      100% Unique Design Guarantee
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3DB1B1] mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      100% Money-Back Guarantee
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#65CF5F]/80  to-[#1F9BED] bg-[#1F9BED] px-6 whitespace-nowrap rounded-lg p-5 sm:p-6 text-white flex flex-col h-fit shadow-lg mt-8 lg:mt-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
            COMBO PACKAGES
          </h2>
          <p className="text-center mb-4 sm:mb-6 text-sm sm:text-base">
            Company Branding Solution
          </p>

          <div className="text-center mb-3 sm:mb-4">
            <div className="flex items-center justify-center">
              <span className="text-5xl sm:text-6xl font-bold">$1799</span>
              <div className="ml-2 text-left">
                <span className="line-through text-sm sm:text-base">$2599</span>
                <br />
                <span className="text-sm sm:text-base">ONLY</span>
              </div>
            </div>
          </div>

          <div className="py-2 sm:py-3 text-center text-lg sm:text-xl font-medium mb-6 sm:mb-8">
            03 Months Installments
          </div>

          <button
            className="bg-white w-full sm:w-[200px] hover:scale-105 text-[#3DB1B1] text-base sm:text-[17px] py-2.5 sm:py-3 font-medium hover:opacity-90  transition-all cursor-pointer rounded-lg border-none mx-auto shadow-2xl"
            onClick={handleBookNow}
          >
            Order Now
          </button>
        </div>
      </div>

      {/* You can add a modal component here to show when isModalOpen is true */}
      {isModalOpen && selectedPackage && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          packageId={selectedPackage.id}
          packageName={selectedPackage.name}
          packagePrice={selectedPackage.price}
        />
      )}
    </div>
  );
}

export default ServicesCombo
