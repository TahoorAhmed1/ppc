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
  uiDesignPackages,
  appPackages,
} from "@/components/packages/packages";
import PricingSection from "@/components/pricing/pricing-section";

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

const filter = [
  "Website Package",
  "E-commerce Package",
  "logo Package",
  "SEO Package",
  "Social Media Package",
  "UI Design Package",
  "Mobile App Package",
];

const allPricingData = {
  websitePackages: websitePackage,
  ecommercePackages: ecommercePackage,
  logoPackages: logoPackage,
  seoPackages: seoPackage,
  socialMediaPackages: socialMediaPackage,
  uiDesignPackages: uiDesignPackages,
  appPackages: appPackages,
};

const pricingOptionsTilte = "BEAT THE ODDS";
const pricingOptionsHeading = "Shiny Doesn't Mean Smart";
const pricingOptionsDescription =
  "In a web full of pretty pixels and empty promises, real power lies in what's under the hood. Go beyond the glitter—build for impact. ";

export default function AllPackagesSection() {
  type PricingOption =
    | (typeof websitePackage)[number]
    | (typeof ecommercePackage)[number]
    | (typeof logoPackage)[number]
    | (typeof seoPackage)[number]
    | (typeof socialMediaPackage)[number]
    | (typeof uiDesignPackages)[number]
    | (typeof appPackages)[number];
  const [filteredPricingOptions, setFilteredPricingOptions] = useState<
    PricingOption[]
  >(allPricingData.websitePackages);
  const [activeFilter, setActiveFilter] = useState("Website Package");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);

    const filterMap: Record<string, keyof typeof allPricingData> = {
      "Website Package": "websitePackages",
      "E-commerce Package": "ecommercePackages",
      "logo Package": "logoPackages",
      "SEO Package": "seoPackages",
      "Social Media Package": "socialMediaPackages",
      "UI Design Package": "uiDesignPackages",
      "Mobile App Package": "appPackages",
    };

    const dataKey = filterMap[filter];
    if (dataKey && allPricingData[dataKey]) {
      setFilteredPricingOptions(allPricingData[dataKey]);
    }
  };

  return (
    <div className="bg-white py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
      <div className="text-center mb-8 sm:mb-10 md:mb-12  ">
        <motion.h2
          className="text-xl sm:text-2xl font-bold text-[#1a3a5a] uppercase mb-2 sm:mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {pricingOptionsTilte}
        </motion.h2>

        {/* New animation approach for the heading */}
        <motion.h1
          className="heading-main text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-black to-black text-transparent bg-clip-text p-3 sm:p-4 md:p-5"
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

      {/* Filter Buttons */}
      <div>
        <motion.div
          className="flex flex-wrap justify-center gap-3"
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
                    ? "bg-gradient-to-r from-black/80 to-black text-white border-none"
                    : "bg-white text-black hover:bg-gradient-to-r from-black/80 to-black hover:text-white"
                )}
                onClick={() => handleFilterClick(filterItem)}
              >
                {filterItem}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={pricingCardVariants}
          >
            <PricingSection
              showHeading={false}
              pricingOptions={filteredPricingOptions}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
