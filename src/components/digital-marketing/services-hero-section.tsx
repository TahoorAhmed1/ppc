"use client";

import { heroSectionImage3 } from "@/assets";
import Link from "next/link";
import type React from "react";
import { motion } from "framer-motion";

type ServicesHeroSectionProps = {
  heading: string;
};

const ServicesHeroSection: React.FC<ServicesHeroSectionProps> = ({
  heading,
}) => {
  return (
    <>
      <div
        className="text-white py-16 sm:py-20 md:py-28 lg:py-32 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${heroSectionImage3.src})`,
        }}
      >
        <div className="absolute inset-0 bg-opacity-40 bg-black/60 "></div>

        <div className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {heading}
          </motion.h1>
          <motion.div
            className="flex justify-center text-xs sm:text-sm md:text-base flex-wrap gap-1 sm:gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div whileHover={{ scale: 1.05, x: -2 }}>
              <Link href="/" className="hover:underline transition-colors">
                Home
              </Link>
            </motion.div>
            <span className="mx-1 sm:mx-2">•</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {heading}
            </motion.span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ServicesHeroSection;
