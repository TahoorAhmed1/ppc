"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"

interface Platform {
  name: string
  src: string
}

interface AutoSliderProps {
  platforms: Platform[]
  pauseOnHover?: boolean
  speed?: number
  className?: string
}

export default function AutoSlider({ platforms, pauseOnHover = true, speed = 20, className = "" }: AutoSliderProps) {
  const [isPaused, setIsPaused] = useState(false)
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  // Create a triple-length array to ensure continuous scrolling
  const allPlatforms = [...platforms, ...platforms, ...platforms]

  // Calculate the total width to move
  const calculateDistance = () => {
    if (!containerRef.current) return 0

    // Get the container width
    const containerWidth = containerRef.current.offsetWidth

    // Calculate the width of a single set of platforms
    const singleSetWidth = platforms.length * (getItemWidth() + getGapWidth())

    return -1 * singleSetWidth
  }

  // Get item width based on screen size
  const getItemWidth = () => {
    if (typeof window === "undefined") return 180

    return window.innerWidth < 640 ? 80 : window.innerWidth < 768 ? 120 : window.innerWidth < 1024 ? 150 : 180
  }

  // Get gap width based on screen size
  const getGapWidth = () => {
    if (typeof window === "undefined") return 8

    return window.innerWidth < 640 ? 3 : window.innerWidth < 768 ? 4 : window.innerWidth < 1024 ? 6 : 8
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

    if (!isPaused) {
      startAnimation()
    } else {
      controls.stop()
    }

    return () => {
      controls.stop()
    }
  }, [controls, isPaused, speed])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!isPaused) {
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
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [controls, isPaused, speed])

  return (
    <motion.div
      className={`w-full  ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      ref={containerRef}
    >
      <div className="relative w-full  overflow-hidden">
        <motion.div
          className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8"
          animate={controls}
        >
          {allPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              className="flex hover:scale-105 transition-all cursor-pointer items-center justify-center bg-gray-50 rounded-full p-2 sm:p-3 md:p-4 lg:p-6 min-w-[80px] sm:min-w-[120px] md:min-w-[150px] lg:min-w-[180px] h-10 sm:h-12 md:h-16 lg:h-20 shrink-0"
              transition={{ duration: 0.2 }}
            >
              <div className="relative w-12 sm:w-16 md:w-20 lg:w-32 h-4 sm:h-5 md:h-8 lg:h-12">
                <Image
                  src={platform.src || "/placeholder.svg"}
                  alt={platform.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute left-0 top-0 h-full w-6 sm:w-8 md:w-10 lg:w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-6 sm:w-8 md:w-10 lg:w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </motion.div>
  );
}
