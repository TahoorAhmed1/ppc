"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface ImageSectionProps {
  image?: string
}

export default function ImageSection({ image }: ImageSectionProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className="absolute -inset-2  rounded-lg "
        animate={{
          opacity: [0.4, 0.6, 0.4],
          rotate: [0, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <Image
        src={image || ""}
        alt="Web development workspace with purple blob design"
        width={600}
        height={600}
        className="w-full h-auto relative z-10 rounded-lg"
        priority
      />
    </motion.div>
  )
}
