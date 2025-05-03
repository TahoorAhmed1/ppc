"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface SocialMediaIconProps {
  src: string
  alt: string
  className?: string
}

export function SocialMediaIcon({ src, alt, className }: SocialMediaIconProps) {
  return (
    <motion.div
      className={`absolute ${className} cursor-pointer`}
      whileHover={{
        scale: 1.2,
        rotate: [0, 10, -10, 0],
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Image src={src || "/placeholder.svg"} alt={alt} width={60} height={60} className="w-12 h-12 md:w-14 md:h-14" />
    </motion.div>
  )
}
