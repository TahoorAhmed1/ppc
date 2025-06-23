"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

interface AwardCardProps {
  imageSrc: string
  rating: number
  description: string
  altText?: string
  className?: string
  index: number
}

export default function AwardCard({
  imageSrc,
  rating,
  description,
  className,
  altText = "Award Image",
  index,
}: AwardCardProps) {
  return (
    <motion.div
      className="h-50 bg-[#1c2d44] rounded-lg p-6 shadow-2xl w-92 flex-shrink-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex items-center justify-between mb-4">
        <motion.div
          className={`drop-shadow-xl/25 ${className}`}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1 + 0.2,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={altText}
            width={1000}
            height={1000}
            className="object-contain"
          />
        </motion.div>
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1 + 0.3,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <Star className="w-5 h-5 fill-white text-black/25 mr-1 drop-shadow-xl/10" />
          <span className="text-xl font-bold text-white">{rating}</span>
        </motion.div>
      </div>

      <motion.p
        className="text-white text-sm drop-shadow-xl/25"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.4,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}
