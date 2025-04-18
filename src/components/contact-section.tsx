"use client"

import { useEffect, useRef, useState, type RefObject } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { personImage } from "@/assets"
import { motion, useAnimation } from "framer-motion"

// Custom hook to detect when an element is in view with proper typing
function useInView(options = {}): [RefObject<HTMLDivElement | null>, boolean, boolean] {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)

      if (entry.isIntersecting && !hasTriggered) {
        setHasTriggered(true)
      }
    }, options)

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [hasTriggered, options])

  return [ref, isInView, hasTriggered]
}

// Motion variants for animations
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
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0.5,
    },
  },
}

const formItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  }),
}

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8,
      type: "spring",
      stiffness: 200,
    },
  },
  tap: {
    scale: 0.95,
  },
}

const MotionInput = motion(Input)
const MotionTextarea = motion(Textarea)
const MotionButton = motion(Button)
const MotionCard = motion(Card)

export default function ContactSection() {
  const controls = useAnimation()
  const [containerRef, isInView, hasTriggered] = useInView({
    threshold: 0.2,
  })

  useEffect(() => {
    if (isInView || hasTriggered) {
      controls.start("visible")
    }
  }, [controls, isInView, hasTriggered])

  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden" id="contactus">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid gap-6 lg:grid-cols-2 lg:gap-8  items-center"
        >
          <motion.div
            variants={containerVariants}
            className="flex flex-col justify-center space-y-4"
          >
            <motion.div variants={itemVariants} className="space-y-3">
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text"
              >
                Ready to Get Started?
              </motion.h2>
              <motion.p variants={itemVariants} className="max-w-[600px]">
                Let us know what you're looking for, and we'll help make a
                difference.
              </motion.p>
            </motion.div>

            <MotionCard
              variants={itemVariants}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <CardHeader className="pb-2">
                <motion.h3
                  variants={itemVariants}
                  className="text-lg font-medium"
                >
                  Contact Us
                </motion.h3>
              </CardHeader>
              <CardContent>
                <motion.form variants={containerVariants} className="space-y-4">
                  <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                  >
                    <motion.div
                      custom={0}
                      variants={formItemVariants}
                      className="space-y-2"
                    >
                      <MotionInput
                        id="name"
                        placeholder="Your Name"
                        className="rounded-lg border-gray-300"
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 0 2px rgba(101, 207, 95, 0.3)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </motion.div>
                    <motion.div
                      custom={1}
                      variants={formItemVariants}
                      className="space-y-2"
                    >
                      <MotionInput
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="rounded-lg border-gray-300"
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 0 2px rgba(31, 155, 237, 0.3)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </motion.div>
                    <motion.div
                      custom={2}
                      variants={formItemVariants}
                      className="space-y-2"
                    >
                      <MotionInput
                        id="phone"
                        placeholder="Phone"
                        className="rounded-lg border-gray-300"
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 0 2px rgba(101, 207, 95, 0.3)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </motion.div>
                    <motion.div
                      custom={3}
                      variants={formItemVariants}
                      className="space-y-2"
                    >
                      <MotionInput
                        id="Website"
                        type="text"
                        placeholder="Website"
                        className="rounded-lg border-gray-300"
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 0 2px rgba(31, 155, 237, 0.3)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div
                    custom={4}
                    variants={formItemVariants}
                    className="space-y-2"
                  >
                    <MotionTextarea
                      id="message"
                      placeholder="Message"
                      className="min-h-[120px] rounded-lg border-gray-300"
                      whileFocus={{
                        scale: 1.02,
                        boxShadow: "0 0 0 2px rgba(101, 207, 95, 0.3)",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </motion.div>
                  <MotionButton
                    variants={buttonVariants}
                    whileTap="tap"
                    className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] hover:opacity-90 text-white rounded-lg w-full sm:w-auto border-none"
                  >
                    Send Message
                  </MotionButton>
                </motion.form>
              </CardContent>
            </MotionCard>
          </motion.div>

          <motion.div
            variants={imageVariants}
            className="relative lg:flex hidden items-center justify-center p-20"
          >
            <motion.div>
              <Image
                src={
                  personImage ||
                  "/placeholder.svg?height=500&width=400&query=business person"
                }
                alt="Contact Us"
                width={500}
                height={400}
                className="object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
