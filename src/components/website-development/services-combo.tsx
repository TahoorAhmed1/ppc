"use client";
import { useState } from "react";
import { BookingModal } from "./booking-modal";

interface PricingPackage {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  features: string[];
  additionalFeatures: string[];
}

const ServicesCombo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PricingPackage | null>(
    null
  );

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
    <div className="container mx-auto py-12 sm:py-16 md:py-20 font-sans">
      <div className="grid grid-cols-1 gap-8 mx-auto  lg:grid-cols-3">
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
        <div>
          <div className="bg-gradient-to-r from-[#65CF5F]/90 to-[#1F9BED]/90 rounded-2xl px-8 py-10 sm:px-10 sm:py-12 shadow-2xl text-white flex flex-col items-center mt-10 space-y-6 sm:space-y-8 max-w-lg mx-auto">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">
              Combo Packages
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-center text-white/90 font-medium max-w-sm">
              A complete company branding solution tailored for growth-focused
              businesses.
            </p>

            {/* Price Section */}
            <div className="flex items-start justify-center space-x-4 sm:space-x-5">
              <span className="text-5xl sm:text-6xl font-extrabold">$1799</span>
              <div className="flex flex-col leading-snug">
                <span className="line-through text-sm sm:text-base text-white/70">
                  $2599
                </span>
                <span className="text-xs sm:text-sm font-medium">
                  Limited Time Only
                </span>
              </div>
            </div>

            {/* Installment Info */}
            <div className="bg-white/10 px-5 py-2.5 rounded-lg backdrop-blur-md text-white text-center text-base sm:text-lg font-medium">
              3 Month Easy Installments
            </div>

            {/* CTA Button */}
            <button
              onClick={handleBookNow}
              className="bg-white text-[#3DB1B1] hover:text-[#3DB1B1] cursor-pointer px-7 py-3 rounded-xl text-base sm:text-lg font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105 duration-200"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>

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
};

export default ServicesCombo;
