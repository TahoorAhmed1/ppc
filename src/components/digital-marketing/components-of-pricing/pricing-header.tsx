"use client"

import { motion } from "framer-motion"

export function PricingHeader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div>
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-[#5ce0c6] mb-4 relative inline-block"
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 15px rgba(92, 224, 198, 0.5)",
          }}
        >
          Our Pricing
          {/* Underline animation on hover */}
          <motion.span
            className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#65CF5F] to-[#1F9BED]"
            initial={{ width: "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.h1>
        <motion.p
          className="text-lg"
          whileHover={{
            x: 5,
            color: "white",
          }}
        >
          Compare Packages & Build Your
          <br />
          Ideal Website.
        </motion.p>
      </div>
      <div className="flex items-center justify-end">
        <div className="text-right">
          <motion.div
            className="mb-2"
            whileHover={{
              x: -5,
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <span className="text-[#5ce0c6] text-2xl font-bold">Features You Need,</span>
          </motion.div>
          <motion.div
            whileHover={{
              x: -5,
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <span className="text-[#5ce0c6] text-2xl font-bold">Budget You Love.</span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
