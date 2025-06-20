"use client";
import { useState, useEffect } from "react";
import React from "react";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  favicon,
  package2,
  package3,
  package4,
  package1,
  package6,
  package5,
} from "@/assets";
import { BookingModal } from "./booking-modal";

interface PricingPackage {
  id: string;
  name: string;
  description: string;
  price: string;
  image: any;
  originalPrice: string;
  features: string[];
}

const pricingPackages: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter",
    image: package1,
    description:
      "Perfect for small businesses looking to establish their online presence with a simple yet professional website.",
    price: "149",
    originalPrice: "298",
    features: [
      "3-4 Pages Website",
      "02 Stock Images",
      "03 Banner Designs",
      "All Browser Compatibility",
      "Complete W3C Certified HTML",
      "Google Friendly Sitemap",
      "NO MONTHLY/YEARLY FEE",
      "Dedicated Project Manager",
      "48 to 72 hours TAT",
      "Unlimited Revisions",
      "Complete Deployment",
      "100% Satisfaction Guarantee",
      "100% Unique Design Guarantee",
      "100% Money Back Guarantee",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    image: package2,
    description:
      "Elevate your brand with a conceptual and interactive design that engages visitors and showcases your business.",
    price: "349",
    originalPrice: "698",
    features: [
      "3-5 Pages Website",
      "Conceptual & Interactive Design",
      "08 Stock Images",
      "05 Banner Design",
      "1 jQuery Slider Banner",
      "All Browser Compatibility",
      "Complete W3C Certified HTML",
      "Google Friendly Sitemap",
      "Contact/Query Form",
      "NO MONTHLY/YEARLY FEE",
      "Dedicated Project Manager",
      "Unlimited Revisions",
      "48 to 72 hours TAT",
      "Complete Deployment",
      "100% Satisfaction Guarantee",
      "100% Unique Design Guarantee",
      "100% Money Back Guarantee",
    ],
  },
  {
    id: "business",
    name: "Business",
    image: package3,
    description:
      "A comprehensive solution for growing businesses that need more content and enhanced functionality.",
    price: "532",
    originalPrice: "1064",
    features: [
      "5-10 Pages Website",
      "Conceptual & Interactive Design",
      "12 Stock Images",
      "08 Banner Design",
      "1 jQuery Slider Banner",
      "All Browser Compatibility",
      "Complete W3C Certified HTML",
      "Google Friendly Sitemap",
      "Contact/Query Form",
      "Search Engine Submission",
      "NO MONTHLY/YEARLY FEE",
      "Dedicated Project Manager",
      "Unlimited Revisions",
      "48 to 72 hours TAT",
      "Complete Deployment",
      "100% Satisfaction Guarantee",
      "100% Unique Design Guarantee",
      "100% Money Back Guarantee",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    image: package4,
    description:
      "Take your online presence to the next level with special effects, more content, and enhanced design elements.",
    price: "765",
    originalPrice: "1530",
    features: [
      "10-15 Pages Website",
      "Conceptual & Interactive Design",
      "15 Stock Images",
      "Special hover Effects",
      "10 Banner Design",
      "1 jQuery Slider Banner",
      "All Browser Compatibility",
      "Complete W3C Certified HTML",
      "Google Friendly Sitemap",
      "Contact/Query Form",
      "Search Engine Submission",
      "Social Media Banner Designs",
      "Content Management System (CMS)",
      "NO MONTHLY/YEARLY FEE",
      "Dedicated Project Manager",
      "Unlimited Revisions",
      "48 to 72 hours TAT",
      "Complete Deployment",
      "100% Satisfaction Guarantee",
      "100% Unique Design Guarantee",
      "100% Money Back Guarantee",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    image: package5,
    description:
      "A feature-rich solution for established businesses requiring advanced functionality and comprehensive online presence.",
    price: "899",
    originalPrice: "1798",
    features: [
      "15-20 Pages Website",
      "Conceptual & Interactive Design",
      "20 Stock Images",
      "Special Hover Effects",
      "15 Banner Design",
      "1 jQuery Slider Banner",
      "All Browser Compatibility",
      "Complete W3C Certified HTML",
      "Google Friendly Sitemap",
      "Contact/Query Form",
      "Social Media Banner Designs",
      "Social Media Integration",
      "Search Engine Submission",
      "Login/Sign-up Area",
      "Online Appointment/Scheduling",
      "Content Management System (CMS)",
      "NO MONTHLY/YEARLY FEE",
      "Dedicated Project Manager",
      "Unlimited Revisions",
      "48 to 72 hours TAT",
      "Complete Deployment",
      "100% Satisfaction Guarantee",
      "100% Unique Design Guarantee",
      "100% Money Back Guarantee",
    ],
  },
  {
    id: "ultimate",
    name: "Ultimate",
    image: package6,
    description:
      "Our most comprehensive package with custom PHP development and advanced features for businesses requiring a powerful online platform.",
    price: "1249",
    originalPrice: "2498",
    features: [
      "15-20 Pages Website",
      "Custom PhP Development",
      "30 Stock Images",
      "Special Hover Effects",
      "20 Banner Design",
      "1 jQuery Slider Banner",
      "All Browser Compatibility",
      "Complete W3C Certified HTML",
      "Google Friendly Sitemap",
      "Contact/Query Form",
      "Social Media Banner Designs",
      "Social Media Integration",
      "Search Engine Submission",
      "Multi Lingual (Optional)",
      "Payment Module Integration (Optional)",
      "Search Bar Integration",
      "Newsletter Subscription",
      "Online Appointment/Scheduling",
      "Login/Sign-up Area",
      "Content Management System (CMS)",
      "NO MONTHLY/YEARLY FEE",
      "Dedicated Project Manager",
      "Unlimited Revisions",
      "48 to 72 hours TAT",
      "Complete Deployment",
      "100% Satisfaction Guarantee",
      "100% Unique Design Guarantee",
      "100% Money Back Guarantee",
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

  // Animation component for scroll-triggered animations
  const AnimateOnScroll = ({
    children,
    index,
  }: {
    children: React.ReactNode;
    index: number;
  }) => {
    const controls = useAnimation();
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.3 });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.25, 0.1, 0.25, 1.0],
            },
          },
        }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="bg-gray-900 min-h-screen items-center py-10 sm:py-14 md:py-16">
      <div className="container flex flex-col gap-8 sm:gap-10 md:gap-14">
        {pricingPackages.map((pkg, idx) => (
          <AnimateOnScroll key={pkg.id} index={idx}>
            <div
              id={pkg.id}
              className="grid grid-cols-1 lg:grid-cols-3 w-full lg:gap-6 gap-0 gap-y-4"
            >
              <div
                className={`space-y-4 ${
                  idx % 2 === 0 ? "order-1 lg:order-1" : "order-1 lg:order-2"
                }`}
              >
                <div
                  className={`${
                    pkg.name === "Enterprise" || pkg.name === "Ultimate"
                      ? "p-2 rounded-3xl bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] shadow-[0_0_30px_rgba(101,207,95,0.75)] hover:shadow-[0_0_80px_rgba(101,207,95,0.75)] transition-shadow duration-300"
                      : pkg.name === "Professional" ||
                        pkg.name === "Business" ||
                        pkg.name === "Premium"
                      ? "p-2 rounded-3xl bg-gradient-to-r from-[#65CF5F] to-[#1F9BED]"
                      : ""
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
                </div>

                <div className="">
                  <motion.button
                    className="mb-5 bg-gradient-to-r hover:scale-105 transition-all duration-300 cursor-pointer hover:from-[#1F9BED]/80 hover:to-[#65CF5F] from-[#65CF5F]/80 to-[#1F9BED] text-white w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-lg flex justify-between items-center text-base sm:text-lg"
                    onClick={() => handleBookNow(pkg)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="font-medium">Book Now</span>
                    <ArrowRight size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.button>
                  <motion.a href="tel:+18045745376" className="">
                    <motion.button
                      className="border-4 mb-5 hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg group border-teal-500 text-teal-500 w-full py-3 sm:py-3.5 px-4 sm:px-5 flex justify-between items-center text-base sm:text-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="font-medium bg-gradient-to-r group-hover:from-[#1F9BED]/80 group-hover:to-[#65CF5F] transition-colors from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text">
                        +1 (804) 574 5376
                      </span>
                      <ArrowRight size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.button>
                  </motion.a>

                  <motion.a href="#portfolio" className="">
                    <motion.button
                      className="border-4 mb-5 hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg group border-teal-500 text-teal-500 w-full py-3 sm:py-3.5 px-4 sm:px-5 flex justify-between items-center text-base sm:text-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="font-medium bg-gradient-to-r group-hover:from-[#1F9BED]/80 group-hover:to-[#65CF5F] transition-colors from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text">
                        View Portfolio
                      </span>
                      <ArrowRight size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.button>
                  </motion.a>
                </div>
              </div>
              <div
                className={`bg-white col-span-1 md:col-span-2 rounded-3xl p-6 md:p-8 flex-1 ${
                  idx % 2 === 0 ? "order-2 lg:order-2" : "order-2 lg:order-1"
                }`}
              >
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="bg-teal-500 rounded-full h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 flex items-center justify-center text-white">
                    <Image
                      src={
                        favicon ||
                        "/placeholder.svg?height=1000&width=1000&query=abstract logo" ||
                        "/placeholder.svg" ||
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

                    <ul className="text-gray-700 text-base grid grid-cols-1 sm:grid-cols-2 gap-x-6 list-disc pl-4 mb-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
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
          </AnimateOnScroll>
        ))}
      </div>

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
