"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface HeroImageProps {
  image?: string
}

export default function HeroImage({ image }: HeroImageProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative w-full h-full">
        <motion.div
          className="absolute -inset-1  rounded-lg "
          animate={{
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <Image
          src={image || "/placeholder.svg?height=400&width=600&query=web%20developer%20team" || "/placeholder.svg"}
          alt="Web developer working on code with purple design elements"
          width={600}
          height={400}
          className="w-full h-auto rounded-lg relative z-10"
          priority
        />
      </div>
    </motion.div>
  )
}
