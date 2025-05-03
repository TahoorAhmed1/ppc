"use client"

import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
}

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      "span",
      {
        opacity: [0, 1],
        y: [20, 0],
      },
      {
        duration: 0.5,
        delay: stagger(0.05),
      },
    )
  }, [animate])

  return (
    <motion.h1 ref={scope} className={className}>
      {text.split("").map((char, index) => (
        <motion.span key={`${char}-${index}`} style={{ display: "inline-block" }}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  )
}

function stagger(delay: number) {
  return (i: number) => i * delay
}
