"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  shopifyIcon,
  webflowIcon,
  wixIcon,
  wordpressIcon,
} from "@/assets";

const platforms = [
  { name: "Shopify", src: shopifyIcon },
  { name: "WordPress", src: wordpressIcon },
  { name: "Wix", src: wixIcon },
  { name: "Webflow", src: webflowIcon },
];

export const InfiniteScroll = () => {
  // Repeat the list for seamless looping
  const allPlatforms = [...platforms, ...platforms, ...platforms];

  return (
    <div className="w-full bg-white py-12 md:py-20">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
        Versatile Development Expertise
      </h1>

      <h2 className="text-lg md:text-xl text-gray-800 mb-12 max-w-3xl mx-auto">
        Build Results-Driven Website With The Leading Web Development Agency
      </h2>
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -1 * (platforms.length * 196)],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {allPlatforms.map((platform, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-gray-50 rounded-full p-6 min-w-[180px] h-20 shrink-0"
          >
            <div className="relative w-24 h-8">
              <Image
                src={platform.src}
                alt={platform.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
    </div>

    
    </div>
    </div>
  );
};
