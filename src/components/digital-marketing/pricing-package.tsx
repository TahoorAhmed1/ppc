import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { favicon, pricingImage } from "@/assets"

export default function PricingPackage() {
  return (
    <div className="bg-gray-900 p-3 md:p-6 min-h-screen flex flex-col items-center gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12">
      {/* Package 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl w-full gap-4 md:gap-2">
        {/* Left Card */}
        <div className="space-y-2.5 order-2 md:order-1">
          <div className="bg-white rounded-2xl md:rounded-3xl p-3 sm:p-4 flex-1">
            <p className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text font-medium mb-1 text-sm sm:text-base">
              Package #1
            </p>
            <h2 className="text-xl sm:text-2xl font-bold mb-1">
              Starter <span className="font-normal">Package</span>
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-5 max-w-xs">
              Lay the groundwork for your social media success with the essentials to get started. By building a strong
              foundation, you'll set yourself up for success.
            </p>

            <div className="flex items-baseline mb-3 sm:mb-5">
              <span className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text text-2xl sm:text-3xl font-bold">
                $249
              </span>
              <span className="text-gray-400 line-through ml-2 text-sm sm:text-base">$399</span>
              <div className="ml-auto">
                <div className="h-4 w-4 sm:h-5 sm:w-5 text-teal-500">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16L7 11L8.4 9.55L12 13.15L19.6 5.5L21 7L12 16Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            <p className="text-[10px] sm:text-xs text-gray-600 mb-3 sm:mb-5">
              Learn More About This Package By Contacting Us
            </p>
          </div>
          <div className="space-y-2 sm:space-y-2.5">
            <button className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-white w-full py-2 sm:py-2.5 px-3 sm:px-3.5 rounded flex justify-between items-center text-sm sm:text-base">
              <span className="font-medium">Book Now</span>
              <ArrowRight size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button className="border-2 sm:border-4 border-teal-500 text-teal-500 w-full py-2 sm:py-2.5 px-3 sm:px-3.5 rounded flex justify-between items-center text-sm sm:text-base">
              <span className="font-medium bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
                +18045745376
              </span>
              <ArrowRight size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button className="border-2 sm:border-4 border-teal-500 text-teal-500 w-full py-2 sm:py-2.5 px-3 sm:px-3.5 rounded flex justify-between items-center text-sm sm:text-base">
              <span className="font-medium bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
                View Portfolio
              </span>
              <ArrowRight size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white col-span-1 md:col-span-2 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 flex-1 order-1 md:order-2">
          <div className="flex flex-col sm:flex-row gap-3 mb-3">
            <div className="bg-teal-500 rounded-full h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 flex items-center justify-center text-white">
              <Image
                src={favicon || "/placeholder.svg"}
                alt="Favicon"
                width={1000}
                height={1000}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-extrabold mb-1">
                <span className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
                  What's Included:
                </span>
              </h3>
              <p className="text-gray-700 text-[10px] sm:text-xs">
                This package includes 2 high-quality stock images and a 3-page custom-designed website. It features a
                dynamic jQuery slider banner and a functional contact or query form. The website will be developed using
                W3C certified HTML standards and delivered within 48 to 72 hours. It also comes with complete deployment
                support. We guarantee 100% satisfaction, a 100% unique design, and offer a full money-back guarantee if
                you're not completely happy with the results.
              </p>
            </div>
          </div>
          <div className="border-b-2 border-gray-400 mb-3 sm:mb-5"></div>

          <div className="flex flex-col gap-3 h-40 sm:h-48 md:h-60">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image src={pricingImage || "/placeholder.svg"} alt="Portfolio example" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Package 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl w-full gap-4 md:gap-2">
        {/* Right Card */}
        <div className="bg-white col-span-1 md:col-span-2 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 flex-1 order-1">
          <div className="flex flex-col sm:flex-row gap-3 mb-3">
            <div className="bg-teal-500 rounded-full h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 flex items-center justify-center text-white">
              <Image
                src={favicon || "/placeholder.svg"}
                alt="Favicon"
                width={1000}
                height={1000}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-extrabold mb-1">
                <span className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
                  What's Included:
                </span>
              </h3>
              <p className="text-gray-700 text-[10px] sm:text-xs">
                This package includes 2 high-quality stock images and a 3-page custom-designed website. It features a
                dynamic jQuery slider banner and a functional contact or query form. The website will be developed using
                W3C certified HTML standards and delivered within 48 to 72 hours. It also comes with complete deployment
                support. We guarantee 100% satisfaction, a 100% unique design, and offer a full money-back guarantee if
                you're not completely happy with the results.
              </p>
            </div>
          </div>
          <div className="border-b-2 border-gray-400 mb-3 sm:mb-5"></div>

          <div className="flex flex-col gap-3 h-40 sm:h-48 md:h-60">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image src={pricingImage || "/placeholder.svg"} alt="Portfolio example" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Left Card */}
        <div className="space-y-2.5 order-2">
          <div className="bg-white rounded-2xl md:rounded-3xl p-3 sm:p-4 flex-1">
            <p className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text font-medium mb-1 text-sm sm:text-base">
              Package #2
            </p>
            <h2 className="text-xl sm:text-2xl font-bold mb-1">
              Pro <span className="font-normal">Package</span>
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-5 max-w-xs">
              Lay the groundwork for your social media success with the essentials to get started. By building a strong
              foundation, you'll set yourself up for success.
            </p>

            <div className="flex items-baseline mb-3 sm:mb-5">
              <span className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text text-2xl sm:text-3xl font-bold">
                $249
              </span>
              <span className="text-gray-400 line-through ml-2 text-sm sm:text-base">$399</span>
              <div className="ml-auto">
                <div className="h-4 w-4 sm:h-5 sm:w-5 text-teal-500">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16L7 11L8.4 9.55L12 13.15L19.6 5.5L21 7L12 16Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            <p className="text-[10px] sm:text-xs text-gray-600 mb-3 sm:mb-5">
              Learn More About This Package By Contacting Us
            </p>
          </div>
          <div className="space-y-2 sm:space-y-2.5">
            <button className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-white w-full py-2 sm:py-2.5 px-3 sm:px-3.5 rounded flex justify-between items-center text-sm sm:text-base">
              <span className="font-medium">Book Now</span>
              <ArrowRight size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button className="border-2 sm:border-4 border-teal-500 text-teal-500 w-full py-2 sm:py-2.5 px-3 sm:px-3.5 rounded flex justify-between items-center text-sm sm:text-base">
              <span className="font-medium bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
                +18045745376
              </span>
              <ArrowRight size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button className="border-2 sm:border-4 border-teal-500 text-teal-500 w-full py-2 sm:py-2.5 px-3 sm:px-3.5 rounded flex justify-between items-center text-sm sm:text-base">
              <span className="font-medium bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
                View Portfolio
              </span>
              <ArrowRight size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Package 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl w-full gap-4 md:gap-2">
        {/* Left Card */}
        <div className="space-y-2.5 order-2 md:order-1">
          <div className="bg-white rounded-2xl md:rounded-3xl p-3 sm:p-4 flex-1">
            <p className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text font-medium mb-1 text-sm sm:text-base">
              Package #3
            </p>
            <h2 className="text-xl sm:text-2xl font-bold mb-1">
              Premium <span className="font-normal">Package</span>
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-5 max-w-xs">
              Lay the groundwork for your social media success with the essentials to get started. By building a strong
              foundation, you'll set yourself up for success.
            </p>

            <div className="flex items-baseline mb-3 sm:mb-5">
              <span className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text text-2xl sm:text-3xl font-bold">
                $249
              </span>
              <span className="text-gray-400 line-through ml-2 text-sm sm:text-base">$399</span>
              <div className="ml-auto">
                <div className="h-4 w-4 sm:h-5 sm:w-5 text-teal-500">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16L7 11L8.4 9.55L12 13.15L19.6 5.5L21 7L12 16Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            <p className="text-[10px] sm:text-xs text-gray-600 mb-3 sm:mb-5">
              Learn More About This Package By Contacting Us
            </p>
          </div>
          <div className="space-y-2 sm:space-y-2.5">
            <button className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-white w-full py-2 sm:py-2.5 px-3 sm:px-3.5 rounded flex justify-between items-center text-sm sm:text-base">
              <span className="font-medium">Book Now</span>
              <ArrowRight size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button className="border-2 sm:border-4 border-teal-500 text-teal-500 w-full py-2 sm:py-2.5 px-3 sm:px-3.5 rounded flex justify-between items-center text-sm sm:text-base">
              <span className="font-medium bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
                +18045745376
              </span>
              <ArrowRight size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button className="border-2 sm:border-4 border-teal-500 text-teal-500 w-full py-2 sm:py-2.5 px-3 sm:px-3.5 rounded flex justify-between items-center text-sm sm:text-base">
              <span className="font-medium bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
                View Portfolio
              </span>
              <ArrowRight size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className=" bg-white col-span-1 md:col-span-2 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 flex-1 order-1 md:order-2">
          <div className="flex flex-col sm:flex-row gap-3 mb-3">
            <div className="bg-teal-500 rounded-full h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 flex items-center justify-center text-white">
              <Image
                src={favicon || "/placeholder.svg"}
                alt="Favicon"
                width={1000}
                height={1000}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-extrabold mb-1">
                <span className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
                  What's Included:
                </span>
              </h3>
              <p className="text-gray-700 text-[10px] sm:text-xs">
                This package includes 2 high-quality stock images and a 3-page custom-designed website. It features a
                dynamic jQuery slider banner and a functional contact or query form. The website will be developed using
                W3C certified HTML standards and delivered within 48 to 72 hours. It also comes with complete deployment
                support. We guarantee 100% satisfaction, a 100% unique design, and offer a full money-back guarantee if
                you're not completely happy with the results.
              </p>
            </div>
          </div>
          <div className="border-b-2 border-gray-400 mb-3 sm:mb-5"></div>

          <div className="flex flex-col gap-3 h-40 sm:h-48 md:h-60">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image src={pricingImage || "/placeholder.svg"} alt="Portfolio example" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Package 4 */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl w-full gap-4 md:gap-2">
        {/* Right Card */}
        <div className="bg-white col-span-1 md:col-span-2 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 flex-1 order-1">
          <div className="flex flex-col sm:flex-row gap-3 mb-3">
            <div className="bg-teal-500 rounded-full h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 flex items-center justify-center text-white">
              <Image
                src={favicon || "/placeholder.svg"}
                alt="Favicon"
                width={1000}
                height={1000}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-extrabold mb-1">
                <span className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
                  What's Included:
                </span>
              </h3>
              <p className="text-gray-700 text-[10px] sm:text-xs">
                This package includes 2 high-quality stock images and a 3-page custom-designed website. It features a
                dynamic jQuery slider banner and a functional contact or query form. The website will be developed using
                W3C certified HTML standards and delivered within 48 to 72 hours. It also comes with complete deployment
                support. We guarantee 100% satisfaction, a 100% unique design, and offer a full money-back guarantee if
                you're not completely happy with the results.
              </p>
            </div>
          </div>
          <div className="border-b-2 border-gray-400 mb-3 sm:mb-5"></div>

          <div className="flex flex-col gap-3 h-40 sm:h-48 md:h-60">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image src={pricingImage || "/placeholder.svg"} alt="Portfolio example" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Left Card */}
        <div className="space-y-2.5 order-2">
          <div className="bg-white rounded-2xl md:rounded-3xl p-3 sm:p-4 flex-1">
            <p className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text font-medium mb-1 text-sm sm:text-base">
              Package #4
            </p>
            <h2 className="text-xl sm:text-2xl font-bold mb-1">
              Enterprise <span className="font-normal">Package</span>
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-5 max-w-xs">
              Lay the groundwork for your social media success with the essentials to get started. By building a strong
              foundation, you'll set yourself up for success.
            </p>

            <div className="flex items-baseline mb-3 sm:mb-5">
              <span className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text text-2xl sm:text-3xl font-bold">
                $249
              </span>
              <span className="text-gray-400 line-through ml-2 text-sm sm:text-base">$399</span>
              <div className="ml-auto">
                <div className="h-4 w-4 sm:h-5 sm:w-5 text-teal-500">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16L7 11L8.4 9.55L12 13.15L19.6 5.5L21 7L12 16Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            <p className="text-[10px] sm:text-xs text-gray-600 mb-3 sm:mb-5">
              Learn More About This Package By Contacting Us
            </p>
          </div>
          <div className="space-y-2 sm:space-y-2.5">
            <button className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-white w-full py-2 sm:py-2.5 px-3 sm:px-3.5 rounded flex justify-between items-center text-sm sm:text-base">
              <span className="font-medium">Book Now</span>
              <ArrowRight size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button className="border-2 sm:border-4 border-teal-500 text-teal-500 w-full py-2 sm:py-2.5 px-3 sm:px-3.5 rounded flex justify-between items-center text-sm sm:text-base">
              <span className="font-medium bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
                +18045745376
              </span>
              <ArrowRight size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button className="border-2 sm:border-4 border-teal-500 text-teal-500 w-full py-2 sm:py-2.5 px-3 sm:px-3.5 rounded flex justify-between items-center text-sm sm:text-base">
              <span className="font-medium bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
                View Portfolio
              </span>
              <ArrowRight size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
