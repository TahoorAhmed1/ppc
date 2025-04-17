"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { shopifyIcon, webflowIcon, wixIcon, wordpressIcon } from "@/assets"

const platforms = [
  { name: "Shopify", src: shopifyIcon },
  { name: "WordPress", src: wordpressIcon },
  { name: "Wix", src: wixIcon },
  { name: "Webflow", src: webflowIcon },
]

export const InfiniteScroll = () => {
  // Repeat the list for seamless looping
  const allPlatforms = [...platforms, ...platforms, ...platforms]

  return (
    <motion.div
      className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
        >
          Versatile Development Expertise
        </motion.h1>

        <motion.h2
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto px-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Build Results-Driven Website With The Leading Web Development Agency
        </motion.h2>

        <motion.div
          className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-5xl mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8"
            animate={{
              x: [0, -1 * (platforms.length * (80 + 12))], // Adjust based on smallest size + gap
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {allPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center bg-gray-50 rounded-full p-2 sm:p-3 md:p-4 lg:p-6 min-w-[80px] sm:min-w-[120px] md:min-w-[150px] lg:min-w-[180px] h-10 sm:h-12 md:h-16 lg:h-20 shrink-0"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(240, 249, 255, 1)",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  y: -5,
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="relative w-12 sm:w-16 md:w-20 lg:w-24 h-4 sm:h-5 md:h-6 lg:h-8"
                  whileHover={{ rotate: 5 }}
                >
                  <Image src={platform.src || "/placeholder.svg"} alt={platform.name} fill className="object-contain" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 h-full w-6 sm:w-8 md:w-10 lg:w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-6 sm:w-8 md:w-10 lg:w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
        </motion.div>
      </div>
    </motion.div>
  )
}
