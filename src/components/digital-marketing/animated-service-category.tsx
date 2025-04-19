"use client"

import { motion, useAnimationControls } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface ServiceItem {
  icon: string
  title: string
  subtitle: string
}

interface AnimatedServiceCategoryProps {
  services: ServiceItem[]
}

export function AnimatedServiceCategory({ services }: AnimatedServiceCategoryProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)
  const controls = useAnimationControls()

  // Create enough copies to ensure a smooth infinite scroll
  // We'll use 3 sets of services to ensure we always have enough content
  const duplicatedServices = [...services, ...services, ...services]

  useEffect(() => {
    if (!containerRef.current) return

    const updateWidths = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)

        // Calculate the width of a single set of services
        const singleSetWidth = services.length * (176 + 24) // max-width + gap
        setContentWidth(singleSetWidth)
      }
    }

    updateWidths()

    // Start the animation
    startAnimation()

    // Update measurements on resize
    window.addEventListener("resize", updateWidths)
    return () => window.removeEventListener("resize", updateWidths)
  }, [services.length])

  const startAnimation = async () => {
    if (contentWidth === 0) return

    // Reset position
    await controls.set({ x: 0 })

    // Animate to the negative width of one set of services
    await controls.start({
      x: -contentWidth,
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    })
  }

  // Restart animation when content width changes
  useEffect(() => {
    if (contentWidth > 0) {
      startAnimation()
    }
  }, [contentWidth])

  return (
    <div className="relative w-full overflow-hidden py-4" ref={containerRef}>
      <motion.div
        className="flex gap-x-6 whitespace-nowrap"
        animate={controls}
        style={{
          willChange: "transform",
        }}
      >
        {duplicatedServices.map((service, i) => (
          <div key={i} className="shrink-0">
            <ServiceCategoryItem icon={service.icon} title={service.title} subtitle={service.subtitle} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

interface ServiceCategoryItemProps {
  icon: string
  title: string
  subtitle: string
}

function ServiceCategoryItem({ icon, title, subtitle }: ServiceCategoryItemProps) {
  return (
    <motion.div
      className="flex items-center justify-start w-full max-w-[140px] sm:max-w-[158px] md:max-w-[176px] px-1.5 sm:px-2.5 py-0.75 sm:py-1.25 bg-gray-600/40 rounded-full shadow-sm"
      whileHover={{
        scale: 1.08,
        backgroundColor: "rgba(75, 85, 99, 0.6)",
        y: -3,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Logo */}
      <motion.div
        className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white -ml-0.5 sm:-ml-1 mr-2 sm:mr-2.5 flex-shrink-0"
        whileHover={{ rotate: 10, scale: 1.1 }}
      >
        {icon && (
          <Image
            src={icon || "/placeholder.svg"}
            alt={`${title} Logo`}
            width={500}
            height={500}
            className="w-4.5 h-4.5 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain"
          />
        )}
      </motion.div>

      {/* Text */}
      <motion.div className="text-white leading-none" whileHover={{ x: 2 }}>
        <h2 className="text-[9px] sm:text-[11px] md:text-[12px] font-semibold tracking-wide">{title}</h2>
        <p className="text-[7px] sm:text-[8px] md:text-[9px] text-left tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] mt-0.5 sm:mt-1">
          {subtitle}
        </p>
      </motion.div>
    </motion.div>
  )
}
