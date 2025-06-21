"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ecommercePackage,
  logoPackage,
  websitePackage,
  socialMediaPackage,
  seoPackage,
  brandingPackages, // ✅ Renamed for clarity
  appPackages,
} from "@/components/packages/packages";
import PricingSection from "@/components/pricing/pricing-section";
import { ArrowLeft, ArrowRight } from "lucide-react";

const filterVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const pricingCardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.04,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.04,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// ✅ Filter options (Branding Package added)
const filter = [
  "Website Package",
  "E-commerce Package",
  "logo Package",
  "SEO Package",
  "Social Media Package",
  "Mobile App Package",
  "Branding Package",
];

// ✅ Combined all data packages
const allPricingData = {
  websitePackages: websitePackage,
  ecommercePackages: ecommercePackage,
  logoPackages: logoPackage,
  seoPackages: seoPackage,
  socialMediaPackages: socialMediaPackage,
  appPackages: appPackages,
  brandingPackages: brandingPackages,
};

const pricingOptionsTilte = "Packages";
const pricingOptionsHeading = "Your Digital Growth Starts Here";
const pricingOptionsDescription =
  "From websites to logos, SEO to social media we’ve bundled powerful tools to help your business thrive online.";

export default function NewAllPackagesSection() {
  type PricingOption =
    | (typeof websitePackage)[number]
    | (typeof ecommercePackage)[number]
    | (typeof logoPackage)[number]
    | (typeof seoPackage)[number]
    | (typeof socialMediaPackage)[number]
    | (typeof appPackages)[number]
    | (typeof brandingPackages)[number]; // ✅ Extended

  const [filteredPricingOptions, setFilteredPricingOptions] = useState<
    PricingOption[]
  >(allPricingData.websitePackages);
  const [activeFilter, setActiveFilter] = useState("Website Package");
  const [currentIndex, setCurrentIndex] = useState(0);

  const packagesPerPage = 2;
  const totalPages = Math.ceil(filteredPricingOptions.length / packagesPerPage);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setCurrentIndex(0);

    const filterMap: Record<string, keyof typeof allPricingData> = {
      "Website Package": "websitePackages",
      "E-commerce Package": "ecommercePackages",
      "logo Package": "logoPackages",
      "SEO Package": "seoPackages",
      "Social Media Package": "socialMediaPackages",
      "Mobile App Package": "appPackages",
      "Branding Package": "brandingPackages", // ✅ Added
    };

    const dataKey = filterMap[filter];
    if (dataKey && allPricingData[dataKey]) {
      setFilteredPricingOptions(allPricingData[dataKey]);
    }
  };

  const currentPackages = filteredPricingOptions.slice(
    currentIndex * packagesPerPage,
    (currentIndex + 1) * packagesPerPage
  );

  return (
    <div className="bg-white py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <motion.h2
          className="text-xl sm:text-2xl font-bold text-[#1a3a5a] uppercase mb-2 sm:mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {pricingOptionsTilte}
        </motion.h2>

        <motion.h1
          className="heading-main text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#4ecca3] to-[#3db8c5] text-transparent bg-clip-text p-3 sm:p-4 md:p-5"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          {pricingOptionsHeading}
        </motion.h1>

        <motion.p
          className="heading-subtitle max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-800 px-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {pricingOptionsDescription}
        </motion.p>
      </div>

      <div>
        <motion.div
          className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {filter.map((filterItem, index) => (
            <motion.div
              key={filterItem}
              custom={index}
              variants={filterVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium border-gray-200 flex data-center gap-2",
                  activeFilter === filterItem
                    ? "bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-white border-none"
                    : "bg-white text-gray-700 hover:bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] hover:text-white"
                )}
                onClick={() => handleFilterClick(filterItem)}
              >
                {filterItem}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${currentIndex}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={pricingCardVariants}
          >
            <PricingSection
              showHeading={false}
              pricingOptions={currentPackages}
            />
          </motion.div>
        </AnimatePresence>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8 sm:mt-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0}
                variant="outline"
                className="static h-8 w-8 md:h-10 md:w-10 cursor-pointer bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-white border-white rounded-full hover:opacity-90 transition-opacity"
              >
                <ArrowLeft />
              </Button>
            </motion.div>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-gradient-to-r from-[#65CF5F] to-[#1F9BED]"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                onClick={() =>
                  setCurrentIndex(Math.min(totalPages - 1, currentIndex + 1))
                }
                disabled={currentIndex === totalPages - 1}
                variant="outline"
                className="static h-8 w-8 md:h-10 md:w-10 cursor-pointer bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-white border-white rounded-full hover:opacity-90 transition-opacity"
              >
                <ArrowRight />
              </Button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
