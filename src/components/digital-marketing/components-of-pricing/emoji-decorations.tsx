"use client"

import { motion } from "framer-motion"
import { coolEmoji, laughEmoji, loveEmoji, loveEmoji2, wowEmoji } from "@/assets"
import Image from "next/image"

export function EmojiDecorations() {
  // Floating animation variants
  const floatingAnimation = {
    y: [0, -15, -5, -20, -10, 0],
    x: [0, 5, -5, 8, -8, 0],
    rotate: [0, 5, -3, 5, -5, 0],
  }

  // Different timing for each emoji
  const transitionOptions = {
    duration: 8,
    ease: "easeInOut",
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "loop" as const,
  }

  return (
    <>
      <motion.div
        className="hidden xl:block absolute top-[60px] left-200 cursor-pointer"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        whileHover={{
          scale: 1.3,
          rotate: [0, 15, -15, 0],
          transition: { duration: 0.8 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          <Image
            src={wowEmoji.src || "/placeholder.svg"}
            alt=""
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20"
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-yellow-400/30"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1.5, opacity: [0, 0.5, 0] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>

      <motion.div
        className="hidden xl:block absolute top-300 left-0 cursor-pointer z-10"
        animate={{
          y: [0, 10, -10, 15, 0],
          x: [0, -8, 8, -4, 0],
        }}
        transition={{
          ...transitionOptions,
          duration: 9,
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
        whileHover={{
          scale: 1.3,
          y: [0, -10, 0],
          transition: { duration: 0.5, repeat: 3 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          <Image
            src={laughEmoji.src || "/placeholder.svg"}
            alt=""
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20"
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-pink-400/30"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1.5, opacity: [0, 0.5, 0] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>

      <motion.div
        className="hidden xl:block absolute top-[600px] left-[20px] cursor-pointer z-10"
        animate={{
          y: [0, 15, 5, -10, 0],
          rotate: [0, 10, -5, 8, 0],
        }}
        transition={{
          ...transitionOptions,
          duration: 10,
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
        whileHover={{
          scale: 1.4,
          rotate: [0, 20, 0, -20, 0],
          transition: { duration: 1.5 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          <Image
            src={loveEmoji.src || "/placeholder.svg"}
            alt=""
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20"
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-red-400/30"
            initial={{ scale: 0 }}
            whileHover={{
              scale: 2,
              opacity: [0, 0.3, 0],
            }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-red-400 rounded-full opacity-0"
              style={{
                top: "50%",
                left: "50%",
              }}
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: [0, 1, 0],
                x: [(i - 2) * 5, (i - 2) * 20],
                y: [-5, -30],
                scale: [1, 0],
                transition: { duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.1 },
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="hidden xl:block absolute top-[200px] right-[60px] cursor-pointer"
        animate={{
          y: [0, -10, 5, -15, 0],
          x: [0, -5, 10, -8, 0],
        }}
        transition={{
          ...transitionOptions,
          duration: 7,
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
        whileHover={{
          scale: 1.3,
          rotate: [0, 360],
          transition: { duration: 0.8 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          <Image
            src={loveEmoji2.src || "/placeholder.svg"}
            alt=""
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20"
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-purple-400/30"
            initial={{ scale: 0 }}
            whileHover={{
              scale: 1.5,
              opacity: [0, 0.5, 0],
              rotate: [0, 180],
            }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>

      <motion.div
        className="hidden xl:block absolute bottom-[40px] left-[40px] cursor-pointer"
        animate={{
          y: [0, 10, -5, 15, 0],
          x: [0, 8, -5, 10, 0],
          rotate: [0, -5, 3, -5, 0],
        }}
        transition={{
          ...transitionOptions,
          duration: 8.5,
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
        whileHover={{
          y: [-20, -40, -20],
          scale: 1.4,
          transition: { duration: 1.5, ease: "easeOut" },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          <Image
            src={coolEmoji.src || "/placeholder.svg"}
            alt=""
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20"
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-400/30"
            initial={{ scale: 0 }}
            whileHover={{
              scale: 2,
              opacity: [0, 0.3, 0],
              y: -30,
            }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-0 bg-gradient-to-t from-blue-500 to-transparent"
            initial={{ height: 0, opacity: 0 }}
            whileHover={{
              height: [0, 40, 20, 30, 0],
              opacity: [0, 0.8, 0.4, 0.6, 0],
              transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="hidden xl:block absolute bottom-[40px] right-[40px] cursor-pointer"
        animate={{
          y: [0, -15, 5, -10, 0],
          x: [0, 5, -8, 5, 0],
          rotate: [0, 5, -3, 5, 0],
        }}
        transition={{
          ...transitionOptions,
          duration: 6,
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
        whileHover={{
          scale: 1.3,
          rotate: [0, 10, -10, 20, -20, 0],
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.8, rotate: 0 }}
      >
        <div className="relative">
          <Image
            src={wowEmoji.src || "/placeholder.svg"}
            alt=""
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20"
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-yellow-300/30"
            initial={{ scale: 0 }}
            whileHover={{
              scale: [1, 2, 1],
              opacity: [0, 0.6, 0],
            }}
            transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY }}
          />
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full"
              style={{
                top: `${50 + 40 * Math.sin((i * Math.PI) / 3)}%`,
                left: `${50 + 40 * Math.cos((i * Math.PI) / 3)}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [0, 10 * Math.cos((i * Math.PI) / 3), 20 * Math.cos((i * Math.PI) / 3)],
                y: [0, 10 * Math.sin((i * Math.PI) / 3), 20 * Math.sin((i * Math.PI) / 3)],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </motion.div>
    </>
  )
}
