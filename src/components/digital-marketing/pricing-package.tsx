import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { favicon, pricingImage } from "@/assets";

export default function PricingPackage() {
  return (
    <div className="bg-gray-900 p-4 md:p-8 min-h-screen flex flex-col items-center gap-8 sm:gap-10 md:gap-14 py-10 sm:py-14 md:py-16">
      {/* Reusable Package Component */}
      {[1, 2, 3, 4].map((pkg, idx) => (
        <div key={pkg} className="grid grid-cols-1 md:grid-cols-3 max-w-7xl w-full gap-6 md:gap-4">
          {/* Left Card */}
          <div className={`space-y-4 ${idx % 2 === 0 ? "order-2 md:order-1" : "order-2"}`}>
            <div className="bg-white rounded-3xl p-4 sm:p-6 flex-1">
              <p className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text font-medium mb-2 text-base sm:text-lg">
                Package #{pkg}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                {pkg === 1 ? "Starter" : pkg === 2 ? "Pro" : pkg === 3 ? "Premium" : "Enterprise"} <span className="font-normal">Package</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 max-w-sm">
                Lay the groundwork for your social media success with the essentials to get started. By building a strong foundation, you'll set yourself up for success.
              </p>
              <div className="flex items-baseline mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text text-3xl sm:text-4xl font-bold">
                  $249
                </span>
                <span className="text-gray-400 line-through ml-3 text-base sm:text-lg">$399</span>
                <div className="ml-auto">
                  <div className="h-6 w-6 text-teal-500">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <path d="M12 16L7 11L8.4 9.55L12 13.15L19.6 5.5L21 7L12 16Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
                Learn More About This Package By Contacting Us
              </p>
            </div>
            <div className="space-y-3">
              <button className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-white w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded flex justify-between items-center text-base sm:text-lg">
                <span className="font-medium">Book Now</span>
                <ArrowRight size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button className="border-4 border-teal-500 text-teal-500 w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded flex justify-between items-center text-base sm:text-lg">
                <span className="font-medium bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
                  +18045745376
                </span>
                <ArrowRight size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button className="border-4 border-teal-500 text-teal-500 w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded flex justify-between items-center text-base sm:text-lg">
                <span className="font-medium bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
                  View Portfolio
                </span>
                <ArrowRight size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className={`bg-white col-span-1 md:col-span-2 rounded-3xl p-6 sm:p-8 md:p-10 flex-1 ${idx % 2 === 0 ? "order-1 md:order-2" : "order-1"}`}>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="bg-teal-500 rounded-full h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 flex items-center justify-center text-white">
                <Image
                  src={favicon || "/placeholder.svg"}
                  alt="Favicon"
                  width={1000}
                  height={1000}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-extrabold mb-2">
                  <span className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
                    What's Included:
                  </span>
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  This package includes 2 high-quality stock images and a 3-page custom-designed website. It features a
                  dynamic jQuery slider banner and a functional contact or query form. The website will be developed using
                  W3C certified HTML standards and delivered within 48 to 72 hours. It also comes with complete deployment
                  support. We guarantee 100% satisfaction, a 100% unique design, and offer a full money-back guarantee if
                  you're not completely happy with the results.
                </p>
              </div>
            </div>
            <div className="border-b-2 border-gray-400 mb-4 sm:mb-6"></div>
            <div className="flex flex-col gap-4 h-56 sm:h-64 md:h-80">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src={pricingImage || "/placeholder.svg"} alt="Portfolio example" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
