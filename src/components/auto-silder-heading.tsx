"use client"

import { motion } from "framer-motion"

interface HeadingProps {
  title: string
  subtitle: string
  titleColor?: string
  titleClassName?: string
  subtitleClassName?: string
}

export default function AutoSliderHeading({
  title,
  subtitle,
  titleColor = "#41B4A7",
  titleClassName = "",
  subtitleClassName = "",
}: HeadingProps) {
  return (
    <div className="text-center mb-8">
      <motion.h1
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 ${titleClassName}`}
        style={{ color: titleColor }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        whileHover={{ scale: 1.03 }}
      >
        {title}
      </motion.h1>

      <motion.h2
        className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 max-w-3xl mx-auto px-2 ${subtitleClassName}`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        {subtitle}
      </motion.h2>
    </div>
  )
}
