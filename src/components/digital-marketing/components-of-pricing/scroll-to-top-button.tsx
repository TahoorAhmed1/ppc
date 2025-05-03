"use client"

import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"

export default function ScrollToTopButton() {
  const { scrollYProgress } = useScroll()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      setIsVisible(value > 0.2)
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <motion.button
      className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-white shadow-lg z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </motion.button>
  )
}
