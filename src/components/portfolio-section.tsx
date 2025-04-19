"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

type PortfolioItem = {
  id?: number
  image?: string
  category?: string
  title?: string
}

type PortfolioSectionProps = {
  heading?: string
  title?: string
  paragraph?: string
  filters?: string[]
  items?: PortfolioItem[]
  backgroundImage?: string
  btnIcon?: string
}

export default function PortfolioSection({
  heading = "Our Work",
  title = "Creative Portfolio",
  paragraph = "Explore our latest design projects across various disciplines.",
  filters = ["All", "UI/UX", "Web Design", "App Design", "Graphic Design"],
  items = [],
  backgroundImage,
  btnIcon = "",
}: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState("All")
  const [filteredItems, setFilteredItems] = useState(items)
  const [isLoaded, setIsLoaded] = useState(false)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const headingVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  const filterVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const portfolioItemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 0.1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  }

  const pulse : any = {
    hidden: { scale: 0.9, opacity: 0.3 },
    visible: {
      scale: [1, 1.05, 1],
      opacity: [0.3],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        duration: 3,
      },
    },
  }

  useEffect(() => {
    // Filter items when activeFilter changes
    setFilteredItems(activeFilter === "All" ? items : items.filter((item) => item.category === activeFilter))

    // Set loaded state after component mounts
    setIsLoaded(true)
  }, [activeFilter, items])

  return (
    <motion.section
      className="relative overflow-hidden py-16"
      id="portfolio"
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated background balls */}
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={pulse}
        className="absolute md:top-[10%] top-[5%] left-[15%] w-[14vw] h-[14vw] md:w-[12vw] md:h-[12vw] rounded-full bg-gradient-to-r from-[#41B4A7]/60 to-[#65CF5F]/50 opacity-40 "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      ></motion.div>

      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={pulse}
        className="absolute md:bottom-[10%] bottom-[5%] right-[10%] w-[10vw] h-[10vw] md:w-[9vw] md:h-[9vw] rounded-full bg-gradient-to-r from-[#1F9BED]/60 to-[#41B4A7]/50 opacity-40 "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      ></motion.div>

      {backgroundImage && (
        <motion.div variants={backgroundVariants} className="absolute inset-0 m-auto w-[90vw] h-full ">
          <Image
            src={backgroundImage || "/placeholder.svg"}
            width={1000}
            height={1000}
            alt="background"
            className="w-full h-full object-contain opacity-10 pointer-events-none"
          />
        </motion.div>
      )}
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="flex flex-col items-center gap-2 text-center" variants={headingVariants}>
          <motion.h2 className="text-xl sm:text-2xl font-bold text-[#1C2D44]" variants={itemVariants}>
            {title}
          </motion.h2>
          <motion.h3 className="text-3xl sm:text-5xl font-extrabold text-[#41B4A7]" variants={itemVariants}>
            {heading}
          </motion.h3>
          <motion.p className="max-w-[700px] text-[#1C2D44] mb-8 text-sm sm:text-base" variants={itemVariants}>
            {paragraph}
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div className="flex flex-wrap justify-center gap-3 mb-10" variants={containerVariants}>
          {filters.map((filter, index) => (
            <motion.div
              key={filter}
              custom={index}
              variants={filterVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium border-gray-200 flex items-center gap-2",
                  activeFilter === filter
                    ? "bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-white border-none"
                    : "bg-white text-gray-700 hover:bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] hover:text-white",
                )}
                onClick={() => setActiveFilter(filter)}
              >
                {btnIcon && (
                  <Image src={`${btnIcon}`} alt={`${filter} icon`} width={16} height={16} className="object-contain" />
                )}
                {filter}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group"
              custom={index}
              variants={portfolioItemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative overflow-hidden rounded-xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={item?.image || ""}
                  alt={item?.title || ""}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
              <motion.div
                className="text-center sm:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {item.category && (
                  <motion.p
                    className="text-sm font-medium tracking-tight text-[#1C2D44]"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text">
                      {item.category}
                    </span>
                  </motion.p>
                )}
                {item.title && (
                  <motion.h4
                    className="text-lg font-bold text-[#1A2B4E]"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item?.title}
                  </motion.h4>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
