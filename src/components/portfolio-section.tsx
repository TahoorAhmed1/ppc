"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Projects from "./project";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
  project16,
} from "@/assets";

type PortfolioItem = {
  img: string;
  category: string;
};

type PortfolioSectionProps = {
  heading?: string;
  title?: string;
  paragraph?: string;
  filters?: string[];
  data?: any[];
  backgroundImage?: string;
  btnIcon?: string;
};

export default function PortfolioSection({
  heading = "Our Work",
  title = "Creative Portfolio",
  paragraph = "Explore our latest design projects across various disciplines.",
  filters = [],
  backgroundImage,
  btnIcon = "",
}: PortfolioSectionProps) {
  const data = [
    { img: project1, category: "Real Estate" },
    { img: project2, category: "E-commerce" },
    { img: project3, category: "Real Estate" },
    { img: project4, category: "Business" },
    { img: project5, category: "Business" },
    { img: project6, category: "Business" },
    { img: project7, category: "Business" },
    { img: project9, category: "E-commerce" },
    { img: project10, category: "E-commerce" },
    { img: project11, category: "E-commerce" },
    { img: project12, category: "Business" },
    { img: project13, category: "Hospitality and Food Service" },
    { img: project14, category: "E-commerce" },
    { img: project15, category: "E-commerce" },
    { img: project16, category: "Business" },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState(data);
  const [isLoaded, setIsLoaded] = useState(false);

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const headingVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

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

  const pulse: any = {
    hidden: { scale: 0.9, opacity: 0.3 },
    visible: {
      scale: [1, 1.05, 1],
      opacity: [0.3],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        duration: 3,
      },
    },
  };

  useEffect(() => {
    const sortedData =
      activeFilter === "All"
        ? [...data].sort((a, b) => a.category.localeCompare(b.category))
        : data
            .filter((item) => item.category === activeFilter)
            .sort((a, b) => a.category.localeCompare(b.category));

    setFilteredItems(sortedData);
    setIsLoaded(true);
  }, [activeFilter, data]);

  return (
    <motion.section
      className="relative overflow-hidden pb-10"
      id="portfolio"
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        variants={pulse}
        className="absolute md:top-[10%] top-[5%] left-[15%] w-[14vw] h-[14vw] md:w-[12vw] md:h-[12vw] rounded-full bg-gradient-to-r from-[#41B4A7]/60 to-[#65CF5F]/50 opacity-40"
      />
      <motion.div
        variants={pulse}
        className="absolute md:bottom-[10%] bottom-[5%] right-[10%] w-[10vw] h-[10vw] md:w-[9vw] md:h-[9vw] rounded-full bg-gradient-to-r from-[#1F9BED]/60 to-[#41B4A7]/50 opacity-40"
      />

      {backgroundImage && (
        <motion.div
          className="absolute inset-0 m-auto w-[90vw] h-full"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></motion.div>
      )}

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col data-center gap-2 text-center"
          variants={headingVariants}
        >
          <motion.h2
            className="text-xl sm:text-2xl font-bold text-[#1C2D44]"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          <motion.h3
            className="text-3xl sm:text-5xl font-extrabold text-[#41B4A7] mb-3"
            variants={itemVariants}
          >
            {heading}
          </motion.h3>
          <motion.p
            className="max-w-[700px] w-full mx-auto text-[#1C2D44] mb-8 text-sm sm:text-base text-center"
            variants={itemVariants}
          >
            {paragraph}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          variants={containerVariants}
        >
          {filters.map((filter, index) => (
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
                {btnIcon && (
                  <Image
                    src={`${btnIcon}`}
                    alt={`${filter} icon`}
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                )}
                {filter}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={containerVariants}>
          <Projects items={filteredItems} />
        </motion.div>
      </div>
    </motion.section>
  );
}
