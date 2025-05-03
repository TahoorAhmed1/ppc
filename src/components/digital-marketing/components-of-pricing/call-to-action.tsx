"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <motion.div
      className="flex justify-center mt-12 gap-4"
      whileHover={{
        y: -5,
        transition: { duration: 0.3 },
      }}
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button className="bg-gradient-to-r w-40 cursor-pointer from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-lg border-none text-sm md:text-base px-3 py-2 relative overflow-hidden group">
          {/* Gradient overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#5ce0c6] to-[#65CF5F] opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="relative z-10"
            whileHover={{
              textShadow: "0 0 8px rgba(255,255,255,0.8)",
            }}
          >
            Contact Us
          </motion.span>
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="outline"
          className="bg-gradient-to-r w-50 cursor-pointer from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-lg border-none text-sm md:text-base px-3 py-2 relative overflow-hidden group"
        >
          {/* Gradient overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#5ce0c6] to-[#65CF5F] opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="relative z-10 flex items-center"
            whileHover={{
              textShadow: "0 0 8px rgba(255,255,255,0.8)",
            }}
          >
            View Portfolio
            <motion.span
              className="ml-2 inline-block"
              initial={{ x: 0 }}
              whileHover={{
                x: 5,
                transition: { repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", duration: 0.6 },
              }}
            >
              →
            </motion.span>
          </motion.span>
        </Button>
      </motion.div>
    </motion.div>
  )
}
