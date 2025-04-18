"use client"

import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

// Assuming these imports are correct from your original code
// If not, please adjust accordingly
import { aboutCardIcon1, aboutCardIcon2, aboutCardIcon3, logo } from "@/assets"

export default function AboutSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3 + i * 0.1,
      },
    }),
  }

  const cardHoverVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.section
      id="aboutus"
      ref={sectionRef}
      className="py-8 md:py-16 bg-white text-[#1C2D44] flex flex-col justify-center"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container grid grid-cols-1 lg:grid-cols-3 items-start gap-4">
        <motion.div
          className="flex flex-col items-start gap-3 w-full max-w-sm mx-auto lg:mx-0"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Image
              src={logo || "/placeholder.svg"}
              alt="Creative Agency"
              width={1000}
              height={1000}
              className="h-12 w-auto"
            />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-[42px] font-bold leading-tight"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
              About
            </span>{" "}
            <span className="text-[#1F9BED]">US</span>
          </motion.h2>

          <motion.p
            className="text-sm md:text-base text-[#1C2D44] leading-relaxed"
            variants={itemVariants}
          >
            Productive agents are happy agents. Give them all the support tools
            and information they need to best serve your customers.
          </motion.p>
        </motion.div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[aboutCardIcon1, aboutCardIcon2, aboutCardIcon3].map((icon, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div variants={cardHoverVariants}>
                <Card className="bg-white hover:bg-[#1C2D44] text-[#1C2D44] hover:text-white border-0 shadow-xl p-1 h-80 transition-colors duration-300">
                  <CardContent className="p-4">
                    <motion.div
                      className="flex mb-4"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={
                        isInView
                          ? { scale: 1, opacity: 1 }
                          : { scale: 0.8, opacity: 0 }
                      }
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    >
                      <Image
                        src={icon || "/placeholder.svg"}
                        alt={`Card ${i + 1}`}
                        width={120}
                        height={120}
                      />
                    </motion.div>
                    <motion.h3
                      className="xl:text-2xl md:text-lg sm:text-xl font-semibold mb-2 xl:w-50"
                      initial={{ x: -20, opacity: 0 }}
                      animate={
                        isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                      }
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                    >
                      {i === 0 && "Constant Client Coordination"}
                      {i === 1 && "Customer Satisfaction"}
                      {i === 2 && "100% Ownership Rights"}
                    </motion.h3>
                    <motion.p
                      className="text-sm"
                      initial={{ x: -20, opacity: 0 }}
                      animate={
                        isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                      }
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                    >
                      {i === 0 &&
                        "Productive agents are happy agents. Give them all the support tools and information they need."}
                      {i === 1 &&
                        "Powerful enough to handle the most complex business, flexible enough to scale as you grow."}
                      {i === 2 &&
                        "We build bridges between companies and customers by evaluating deep data and tech adoption."}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
