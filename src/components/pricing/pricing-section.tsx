"use client";
import { useEffect, useState } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { PricingCard } from "./pricing-card";
import { ServiceTag } from "./service-tag";
import { AnimatedText } from "./animated-text";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PricingSectionProps {
  filter: string[];
  filterLink?: string;
  pricingOptionsDescription?: string;
  pricingOptionsHeading?: string;
  pricingOptionsTilte?: string;
  pricingOptions: {
    id: number;
    packageHeading: string;
    packageDescription: string;
    buttonTitle?: string;
    duration: number | null;
    currentPrice?: number | null;
    originalPrice?: number | null;
    features: string[];
  }[];
}
export default function PricingSection({
  filter,
  filterLink,
  pricingOptionsHeading,
  pricingOptionsDescription,
  pricingOptions,
  pricingOptionsTilte,
}: PricingSectionProps) {
  const [scope, animate] = useAnimate();
  const [activeFilter, setActiveFilter] = useState("All");
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

  const data = [
    { category: "Real Estate" },
    { category: "E-commerce" },
    { category: "Real Estate" },
    { category: "Business" },
    { category: "Business" },
    { category: "Business" },
    { category: "Business" },
    { category: "E-commerce" },
    { category: "E-commerce" },
    { category: "E-commerce" },
    { category: "Business" },
    { category: "E-commerce" },
    { category: "E-commerce" },
    { category: "E-commerce" },
    { category: "Business" },
  ];

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
    <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8" ref={scope}>
      <div className="text-center mb-12">
        <motion.h2 className="text-2xl font-bold text-[#1a3a5a] uppercase  mb-4">
          {pricingOptionsTilte}
        </motion.h2>
        <AnimatedText
          text={pricingOptionsHeading || ""}
          className="heading-main text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#4ecca3] to-[#3db8c5] text-transparent bg-clip-text"
        />
        <motion.p className="heading-subtitle max-w-3xl mx-auto text-base sm:text-lg text-gray-800">
          {pricingOptionsDescription}
        </motion.p>
      </div>

      {/* <motion.div
        className="flex flex-wrap justify-center gap-3 mb-10"
        variants={containerVariants}
      >
        {filter?.map((filter: string, index: number) => (
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
                  ? "bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-white border-none"
                  : "bg-white text-gray-700 hover:bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] hover:text-white"
              )}
              onClick={() => setActiveFilter(filter)}
            >
              <Link href={`${filterLink}`} className="flex items-center gap-2">
              {filter}</Link>
            </Button>
          </motion.div>
        ))}
      </motion.div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center justify-items-center max-w-250 mx-auto gap-5">
        {pricingOptions.map((option, index) => (
          <PricingCard
            key={option.id}
            duration={option.duration ?? undefined}
            currentPrice={option.currentPrice ?? undefined}
            originalPrice={option.originalPrice ?? undefined}
            features={option.features}
            index={index}
            packageHeading={option.packageHeading}
            packageDescription={option.packageDescription}
            buttonTitle={option.buttonTitle}
          />
        ))}
      </div>
    </main>
  );
}
