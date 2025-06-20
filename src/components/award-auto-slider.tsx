"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"

interface Platform {
  name: string
  src: string
}

interface AutoSliderProps {
  platforms: Platform[]
  speed?: number
  className?: string
}

export default function AwardsAutoSlider({ platforms, speed = 20, className = "" }: AutoSliderProps) {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  // Create a triple-length array to ensure continuous scrolling
  const allPlatforms = [...platforms, ...platforms, ...platforms]

  // Calculate the total width to move
  const calculateDistance = () => {
    if (!containerRef.current) return 0

    // Calculate the width of a single set of platforms
    const singleSetWidth = platforms.length * (getItemWidth() + getGapWidth())

    return -1 * singleSetWidth
  }

  // Get item width based on screen size
  const getItemWidth = () => {
    if (typeof window === "undefined") return 180

    return window.innerWidth < 640 ? 100 : window.innerWidth < 768 ? 140 : window.innerWidth < 1024 ? 160 : 200
  }

  // Get gap width based on screen size
  const getGapWidth = () => {
    if (typeof window === "undefined") return 8

    return window.innerWidth < 640 ? 4 : window.innerWidth < 768 ? 6 : window.innerWidth < 1024 ? 8 : 12
  }

  // Start the animation
  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: [0, calculateDistance()],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        },
      })
    }

    startAnimation()

    return () => {
      controls.stop()
    }
  }, [controls, speed])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      controls.stop()
      controls.start({
        x: [0, calculateDistance()],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        },
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [controls, speed])

  return (
    <motion.div
      className={`w-full ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      ref={containerRef}
    >
      <div className="relative w-full overflow-hidden">
        <motion.div className="flex gap-2" animate={controls}>
          {allPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              className="flex items-center  justify-center bg-[#f9fafb] backdrop-blur-sm rounded-full p-3 sm:p-4 md:p-5 lg:p-6 min-w-[100px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[200px] h-12 sm:h-16 md:h-20 lg:h-24 shrink-0 "
            >
              <div className="relative w-16 sm:w-20 md:w-24 lg:w-32 h-6 sm:h-8 md:h-10 lg:h-12">
                <Image src={platform.src || "/placeholder.svg"} alt={platform.name} fill className="object-contain" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 h-full w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      </div>
    </motion.div>
  )
}
