"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { favicon, pricingImage, package2, package3, package4 } from "@/assets";
import { BookingModal } from "./booking-modal";

interface PricingPackage {
  id: number;
  name: string;
  description: string;
  price: string;
  image: any;
  originalPrice: string;
  features: string[];
  additionalFeatures: string[];
}

const pricingPackages: PricingPackage[] = [
  {
    id: 1,
    name: "Starter",
    image: pricingImage,
    description:
      "Set the stage for social media success by starting with the essentials. With a solid foundation, you'll pave the way for future growth and achievement.",
    price: "149",
    originalPrice: "298",
    features: [
      "Perfect for getting started online with a clean and simple 3-page website.",
      "It includes 2 high-quality stock images.",
      "One jQuery slider banner for dynamic visual appeal.",
      "A fully functional contact or query form.",
      "Built using complete W3C certified HTML standards.",
      "Your website will be delivered within 48 to 72 hours.",
    ],
    additionalFeatures: [
      "You'll also receive full deployment support to make your launch smooth and stress-free.",
      "This package comes with a 100% satisfaction guarantee.",
      "A 100% unique design promise.",
      "A full money-back guarantee if you're not completely happy with the final result.",
    ],
  },
  {
    id: 2,
    name: "Growth",
    image: package2,
    description:
      "Elevate your brand with custom strategies across various platforms. With our expertise and insights, we deliver impactful solutions across a range of social media channels.",
    price: "249",
    originalPrice: "498",
    features: [
      "5-page custom website tailored to your needs.",
      "Includes 5 professional stock photos.",
      "Comes with 3 unique banner designs aligned with your brand identity.",
      "Features one jQuery slider for dynamic visuals.",
      "Includes a Google-friendly sitemap for basic SEO.",
      "Built using W3C certified HTML standards.",
      "Delivery within 48 to 72 hours.",
    ],
    additionalFeatures: [
      "Backed by a 100% satisfaction guarantee.",
      "Includes a 100% unique design promise.",
      "Offers a full money-back guarantee if you're not satisfied.",
      "Optional Upgrades: Mobile responsiveness for $200.",
      "CMS integration for $250 (easily expandable as your business grows).",
      "A powerful launchpad for establishing a strong online presence.",
    ],
  },
  {
    id: 3,
    name: "Premium",
    image: package3,
    description:
      "Leverage advanced tools and campaigns to accelerate your efforts, boosting visibility and engagement across all social media channels for greater impact.",
    price: "500",
    originalPrice: "1000",
    features: [
      "Provides a 10-page custom-designed website complete with CMS/admin panel support.",
      "It includes 8 stock images.",
      "5 eye-catching banner designs.",
      "A jQuery slider banner for dynamic presentation.",
      "You'll also receive a Google-friendly sitemap.",
      "Delivery is guaranteed within 48 to 72 hours along with full deployment support.",
    ],
    additionalFeatures: [
      "Full W3C certified HTML development.",
      "Optional mobile responsiveness can be added for $200.",
      "This package includes 100% satisfaction.",
      "A unique design promise.",
      "A full money-back guarantee.",
      "It's the perfect solution for businesses ready to scale and strengthen their digital presence.",
    ],
  },
  {
    id: 4,
    name: "Ultimate",
    image: package4,
    description:
      "With a comprehensive, 360-degree social media approach, we cover everything you need—whether it's creating engaging posts or growing your followers.",
    price: "800",
    originalPrice: "1600",
    features: [
      "Delivering a high-end, fully custom 15 page dynamic website designed to impress.",
      "It's mobile responsive.",
      "Includes optional tools like online appointment booking, payment integration, lead capture forms, and newsletter subscription.",
      "You also get 5 stock photos.",
      "3 custom banners.",
      "A jQuery slider.",
      "We'll integrate social media.",
      "Enable newsfeed updates.",
    ],
    additionalFeatures: [
      "Handle search engine submission.",
      "Built using W3C certified HTML.",
      "Delivered within 48 to 72 hours.",
      "This package ensures seamless deployment.",
      "Enjoy peace of mind with our 100% satisfaction guarantee.",
      "Unique design assurance.",
      "Full money-back promise.",
      "It's the ultimate all-in-one digital solution.",
    ],
  },
];

export default function PricingPackage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PricingPackage | null>(
    null
  );

  const handleBookNow = (pkg: PricingPackage) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gray-900 p-4 md:p-8 min-h-screen flex flex-col items-center gap-8 sm:gap-10 md:gap-14 py-10 sm:py-14 md:py-16">
      {/* Map through all packages */}
      {pricingPackages.map((pkg, idx) => (
        <div
          key={pkg.id}
          className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl w-full gap-6 md:gap-4"
        >
          {/* Left Card */}
          <div
            className={`space-y-4 ${
              idx % 2 === 0 ? "order-2 md:order-1" : "order-2"
            }`}
          >
            <div className="bg-white rounded-3xl p-4 sm:p-6 flex-1">
              <p className="bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text font-medium mb-2 text-base sm:text-lg">
                Package #{pkg.id}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                {pkg.name} <span className="font-normal">Package</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 max-w-sm">
                {pkg.description}
              </p>
              <div className="flex items-baseline mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text text-3xl sm:text-4xl font-bold">
                  ${pkg.price}
                </span>
                <span className="text-gray-400 line-through ml-3 text-base sm:text-lg">
                  ${pkg.originalPrice}
                </span>
                <div className="ml-auto">
                  <div className="h-6 w-6 text-teal-500">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        d="M12 16L7 11L8.4 9.55L12 13.15L19.6 5.5L21 7L12 16Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
                Learn More About This Package By Contacting Us
              </p>
            </div>
            <div className="space-y-3">
              <button
                className="bg-gradient-to-r cursor-pointer hover:from-[#1F9BED]/80 hover:to-[#65CF5F] transition-colors   from-[#65CF5F]/80 to-[#1F9BED] text-white w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded flex justify-between items-center text-base sm:text-lg"
                onClick={() => handleBookNow(pkg)}
              >
                <span className="font-medium">Book Now</span>
                <ArrowRight size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <a href="+18045745376">
                <button className="border-4 cursor-pointer group border-teal-500 text-teal-500 w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded flex justify-between items-center text-base sm:text-lg">
                  <span className="font-medium bg-gradient-to-r group-hover:from-[#1F9BED]/80 group-hover:to-[#65CF5F] transition-colors from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text">
                    +1 (804) 574 5376
                  </span>
                  <ArrowRight size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </a>
              {/* <button className="border-4 border-teal-500 text-teal-500 w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded flex justify-between items-center text-base sm:text-lg">
                <span className="font-medium bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text">
                  View Portfolio
                </span>
                <ArrowRight size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
              </button> */}
            </div>
          </div>

          <div
            className={`bg-white col-span-1 md:col-span-2 rounded-3xl p-6 md:p-8 flex-1 ${
              idx % 2 === 0 ? "order-1 md:order-2" : "order-1"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="bg-teal-500 rounded-full h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 flex items-center justify-center text-white">
                <Image
                  src={
                    favicon ||
                    "/placeholder.svg?height=1000&width=1000&query=abstract logo" ||
                    "/placeholder.svg"
                  }
                  alt="Favicon"
                  width={1000}
                  height={1000}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-3xl font-extrabold mb-2">
                  <span className="bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text">
                    What&apos;s Included:
                  </span>
                </h3>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  <ul className="text-gray-700 text-base space-y-2 list-disc pl-4 mb-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <ul className="text-gray-700 text-base space-y-2 list-disc pl-4">
                    {pkg.additionalFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-b-2 border-gray-400 mb-4 sm:mb-6"></div>
            <div className="flex flex-col gap-4 h-56 sm:h-64 md:h-80">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={`${pkg.name} package portfolio example`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {selectedPackage && (
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
