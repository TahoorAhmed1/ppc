"use client"

import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"

export default function ScrollDownIndicator() {
  const { scrollYProgress } = useScroll()
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      setIsVisible(value < 0.05)
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <motion.div
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center gap-2 cursor-pointer"
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: isVisible ? [1, 0.5, 1] : 0,
        y: isVisible ? [0, 10, 0] : 20,
      }}
      transition={{ duration: 2, repeat: isVisible ? Number.POSITIVE_INFINITY : 0 }}
      onClick={() => {
        const serviceSection = document.getElementById("service-section")
        if (serviceSection) {
          serviceSection.scrollIntoView({ behavior: "smooth" })
        }
      }}
    >
      <motion.span
        className="text-white text-sm font-medium"
        animate={{ opacity: [1, 0.7, 1] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        Scroll Down
      </motion.span>
      <motion.div
        className="w-8 h-12 border-2 border-white rounded-full flex justify-center"
        initial={{ opacity: 0.7 }}
      >
        <motion.div
          className="w-1 h-3 bg-white rounded-full mt-2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.div>
    </motion.div>
  )
}
