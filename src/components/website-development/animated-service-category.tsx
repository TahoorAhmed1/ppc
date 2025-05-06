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
      className="flex items-center justify-start w-full max-w-[252px] sm:max-w-[308px] md:max-w-[364px] px-2 sm:px-3.5 py-1 sm:py-1.75 bg-gray-600/40 rounded-full shadow-sm"
      whileHover={{
        scale: 1.08,
        backgroundColor: "rgba(75, 85, 99, 0.6)",
        y: -3,
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="flex items-center justify-center w-12 h-12 sm:w-[67px] sm:h-[67px] md:w-[72px] md:h-[72px] rounded-full bg-white -ml-0.5 sm:-ml-1 mr-3 sm:mr-3 flex-shrink-0"
        whileHover={{ rotate: 10, scale: 1.1 }}
      >
        {icon && (
          <Image
            src={icon || "/placeholder.svg"}
            alt={`${title} Logo`}
            width={500}
            height={500}
            className="w-6 h-6 sm:w-11 sm:h-11 md:w-[50px] md:h-[50px] object-contain"
          />
        )}
      </motion.div>

      <motion.div className="text-white leading-none" whileHover={{ x: 2 }}>
        <h2 className="text-[12.5px] sm:text-[15.5px] md:text-[17px] font-semibold tracking-wide">
          {title}
        </h2>
        <p className="text-[9.5px] sm:text-[11px] md:text-[12.5px] text-left tracking-[1.4px] sm:tracking-[2.1px] md:tracking-[2.8px] mt-0.5 sm:mt-1">
          {subtitle}
        </p>
      </motion.div>
    </motion.div>
  );

}
