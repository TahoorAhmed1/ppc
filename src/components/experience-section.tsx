"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation, type Variants } from "framer-motion"
import { experienceImage, mailIcon } from "@/assets"

// Create motion components
const MotionDiv = motion.div
const MotionButton = motion.button
const MotionImage = motion.div

export default function MarketingSection() {
  const [isLoaded, setIsLoaded] = useState(true)
  const [activePopup, setActivePopup] = useState<number | null>(null)

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const imageVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  const barContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  }

  const pulse: Variants = {
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

  // Refs for scroll animations
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section
      id="experience"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background animated balls */}
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={pulse}
        className="absolute md:top-[15%] top-[10%] right-[5%] w-[10vw] h-[10vw] md:w-[8vw] md:h-[8vw] rounded-full bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] opacity-50 "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      ></motion.div>

      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={pulse}
        className="absolute md:bottom-[0%] bottom-[15%] left-[0%] w-[9vw] h-[9vw] md:w-[7.5vw] md:h-[7.5vw] rounded-full bg-gradient-to-r from-[#3DB1B1]/70 to-[#65CF5F]/60 opacity-40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      ></motion.div>

      <MotionDiv
        className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Image & CTA Section */}
        <MotionDiv
          className="w-full lg:w-1/2 flex flex-col items-center gap-6"
          variants={containerVariants}
        >
          <MotionImage
            className="w-full max-w-[500px] rounded-xl overflow-hidden"
            variants={imageVariants}
          >
            <Image
              src={experienceImage || "/placeholder.svg"}
              alt="Digital marketing professional"
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
              priority
            />
          </MotionImage>

          {/* CTA */}
          <MotionDiv
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
            variants={containerVariants}
          >
            <MotionDiv
              className="flex items-center gap-3 text-[#1C2D44]"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <MotionDiv
                variants={itemVariants}
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <Image
                  src={mailIcon || "/placeholder.svg"}
                  alt="mail-icon"
                  width={100}
                  height={100}
                  className="w-10 h-16"
                />
              </MotionDiv>
              <MotionDiv variants={itemVariants}>
                <p className="font-semibold text-lg">(888) 321-7452</p>
                <p className="text-xs">info@creativeagency360.com</p>
              </MotionDiv>
            </MotionDiv>
            <a href="#contactus">
              <MotionButton
                className="bg-gradient-to-r cursor-pointer from-[#65CF5F]/80 to-[#209CEB] hover:from-[#209CEB]/80 hover:to-[#65CF5F] w-[200px] text-[17px] py-2 h-11 font-medium hover:opacity-90 text-white rounded-lg border-none"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(31, 155, 237, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </MotionButton>
            </a>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
          variants={containerVariants}
        >
          <MotionDiv className="space-y-2" variants={itemVariants}>
            <h2 className="text-[#1d3557] text-2xl font-bold uppercase">
              EXPERIENCE
            </h2>
            <h2 className="text-4xl font-bold leading-snug">
              <span className="bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text">
                That Speaks for Itself
              </span>
            </h2>
          </MotionDiv>

          <MotionDiv
            variants={itemVariants}
            className="text-[#1d3557] font-medium text-sm leading-relaxed"
          >
            <p>
              Whether you are looking to create a mind-boggling website or
              e-commerce store, a promising Digital Marketing Strategy, or
              attention-grabbing graphic design services, we have the right
              bunch of people who go beyond your expectations to produce
              exemplary results.
            </p>
          </MotionDiv>

          {/* Service bars */}
          <MotionDiv className="space-y-4 pt-4" variants={barContainerVariants}>
            <AnimatedServiceBar name="SEO" percentage={90} />
            <AnimatedServiceBar name="PPC" percentage={79} />
            <AnimatedServiceBar name="Content Writing" percentage={95} />
            <AnimatedServiceBar name="Email Marketing" percentage={95} />
            <AnimatedServiceBar name="Branding" percentage={95} />
            <AnimatedServiceBar name="Web Development" percentage={95} />
            <AnimatedServiceBar name="App Development" percentage={95} />
          </MotionDiv>
        </MotionDiv>
      </MotionDiv>
    </section>
  );
}

function AnimatedServiceBar({
  name,
  percentage,
}: {
  name: string
  percentage: number
}) {
  const barRef = useRef(null)
  const isInView = useInView(barRef, { once: false, amount: 0.5 })
  const controls = useAnimation()

  // Define barVariants inside the component
  const barVariants: Variants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: `${percentage}%`,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  return (
    <MotionDiv
      className="space-y-1"
      ref={barRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }}
    >
      <div className="flex justify-between text-sm font-medium text-gray-800">
        <span>{name}</span>
        <MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
          <span>{percentage}%</span>
        </MotionDiv>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <MotionDiv
          className="h-full bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] rounded-full"
          custom={percentage}
          variants={barVariants}
        ></MotionDiv>
      </div>
    </MotionDiv>
  )
}
