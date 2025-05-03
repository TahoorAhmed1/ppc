"use client"

import { motion, useInView } from "framer-motion"
import { type ReactNode, useRef } from "react"

interface ScrollAnimationWrapperProps {
  children: ReactNode
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "zoom-in" | "stagger"
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  amount?: number
}

export default function ScrollAnimationWrapper({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  amount = 0.2,
}: ScrollAnimationWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  const animations = {
    "fade-up": {
      initial: { opacity: 0, y: 50 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    },
    "fade-in": {
      initial: { opacity: 0 },
      animate: isInView ? { opacity: 1 } : { opacity: 0 },
    },
    "slide-left": {
      initial: { opacity: 0, x: 100 },
      animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 },
    },
    "slide-right": {
      initial: { opacity: 0, x: -100 },
      animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 },
    },
    "zoom-in": {
      initial: { opacity: 0, scale: 0.9 },
      animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 },
    },
    stagger: {
      initial: { opacity: 0, y: 50 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial={animations[animation].initial}
      animate={animations[animation].animate}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
