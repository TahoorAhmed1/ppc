"use client";
import { useEffect, useState } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { PricingCard } from "./pricing-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PackageData {
  ecommercePackages: any[];
  logoPackages: any[];
  mobileAppPackages: any[];
  seoPackages: any[];
  socialMediaPackages: any[];
  websitePackages: any;
}

interface PricingSectionProps {
  packageData?: PackageData;
  filter?: string[];
  filterLink?: string;
  pricingOptionsDescription?: string;
  pricingOptionsHeading?: string;
  pricingOptionsTilte?: string;
  pricingOptions: any[];
  showHeading?: boolean;
}
export default function PricingSection({
  showHeading = true,
  packageData,
  filter,
  filterLink,
  pricingOptionsHeading,
  pricingOptionsDescription,
  pricingOptions,
  pricingOptionsTilte,
}: PricingSectionProps) {
  const [scope, animate] = useAnimate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Number of items to show initially
  const initialItemsToShow = 2;

  // Calculate if we need the "See More" button
  const needsSeeMore = pricingOptions.length > initialItemsToShow;

  // Determine which items to display
  const displayedOptions = showAll
    ? pricingOptions
    : pricingOptions.slice(0, initialItemsToShow);

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

  // Animation variants for the heading
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

  useEffect(() => {
    // Animate elements on page load
    const sequence: Array<[string, Record<string, any>, Record<string, any>]> =
      [
        [".heading-beat", { opacity: [0, 1], y: [20, 0] }, { duration: 0.5 }],
        [".heading-main", { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 }],
        [
          ".heading-subtitle",
          { opacity: [0, 1], y: [20, 0] },
          { duration: 0.7 },
        ],
        [".service-tags", { opacity: [0, 1] }, { duration: 0.5 }],
        [
          ".service-tag",
          { scale: [0.8, 1], opacity: [0, 1] },
          { duration: 0.4, delay: stagger(0.05) },
        ],
        [
          ".pricing-card",
          { opacity: [0, 1], y: [50, 0] },
          { duration: 0.6, delay: stagger(0.1) },
        ],
      ];

    animate(sequence);
  }, [animate]);

  return (
    <main
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-10 space-y-4 sm:space-y-6 md:space-y-8"
      ref={scope}
    >
      {showHeading && (
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
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
      )}

      <div>
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          variants={containerVariants}
        >
          {filter?.map((filter, index) => (
            <motion.div
              key={filter}
              custom={index}
              variants={filterVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium border-gray-200 flex data-center gap-2",
                  activeFilter === filter
                    ? "bg-gradient-to-r from-black/80 to-black text-white border-none"
                    : "bg-white text-black hover:bg-gradient-to-r from-black/80 to-black hover:text-white"
                )}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 justify-items-center max-w-250 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {displayedOptions.map((option, index) => (
          <motion.div
            key={option.id}
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <PricingCard
              duration={option.duration ?? undefined}
              currentPrice={option.currentPrice ?? undefined}
              originalPrice={option.originalPrice ?? undefined}
              features={option.features}
              index={index}
              packageHeading={option.packageHeading}
              packageDescription={option.packageDescription}
              buttonTitle={option.buttonTitle}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* See More Button */}
      {needsSeeMore && (
        <motion.div
          className="flex justify-center mt-8 sm:mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-black/80 to-black hover:from-black/80 hover:to-black text-white font-medium px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 ease-in-out text-sm sm:text-base"
            >
              {showAll ? "See Less" : "See More"}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
