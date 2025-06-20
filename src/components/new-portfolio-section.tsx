"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Projects from "./project"

type PortfolioItem = {
  img?: string
  category?: string
}

type PortfolioSectionProps = {
  heading?: string
  title?: string
  paragraph?: string
  data?: any[]
  backgroundImage?: string
  portfolioData?: PortfolioItem[]
  animate?: boolean
}

export default function NewPortfolioSection({
  animate,
  portfolioData,
  heading = "Our Work",
  title = "Creative Portfolio",
  paragraph = "Explore our latest design projects across various disciplines.",
  backgroundImage,
}: PortfolioSectionProps) {
  const [allItems, setAllItems] = useState(portfolioData || [])
  const [isLoaded, setIsLoaded] = useState(false)

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

  const pulse: any = {
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
    // Simply show all portfolio data without any filtering
    const sortedData = [...(portfolioData || [])].sort((a: PortfolioItem, b: PortfolioItem) =>
      (a.category ?? "").localeCompare(b.category ?? ""),
    )

    setAllItems(sortedData)
    setIsLoaded(true)
  }, [portfolioData])

  return (
    <motion.section
      className="relative overflow-hidden md:py-20 pt-5 pb-20"
      id="portfolio"
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        variants={pulse}
        className="absolute md:top-[10%] top-[5%] left-[15%] w-[14vw] h-[14vw] md:w-[12vw] md:h-[12vw] rounded-full bg-gradient-to-r from-[#41B4A7]/60 to-[#65CF5F]/50 opacity-40"
      />
      <motion.div
        variants={pulse}
        className="absolute md:bottom-[10%] bottom-[5%] right-[10%] w-[10vw] h-[10vw] md:w-[9vw] md:h-[9vw] rounded-full bg-gradient-to-r from-[#1F9BED]/60 to-[#41B4A7]/50 opacity-40"
      />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="flex flex-col data-center gap-2 text-center" variants={headingVariants}>
          <motion.h2 className="text-xl sm:text-2xl font-bold text-[#1C2D44]" variants={itemVariants}>
            {title}
          </motion.h2>
          <motion.h3 className="text-3xl sm:text-5xl font-extrabold text-[#41B4A7] mb-3" variants={itemVariants}>
            {heading}
          </motion.h3>
          <motion.p
            className="max-w-[700px] w-full mx-auto text-[#1C2D44] mb-8 text-sm sm:text-base text-center"
            variants={itemVariants}
          >
            {paragraph}
          </motion.p>
        </motion.div>

        <motion.div initial="initial" animate="animate" variants={containerVariants}>
          <Projects items={allItems} animate={animate} />
        </motion.div>
      </div>
    </motion.section>
  )
}
