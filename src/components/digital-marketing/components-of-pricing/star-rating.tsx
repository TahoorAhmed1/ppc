"use client"

import { motion } from "framer-motion"

interface StarRatingProps {
  rating: number
}

export function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex mb-2">
      {[...Array(rating)].map((_, index) => (
        <motion.svg
          key={index}
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 24 24"
          whileHover={{
            scale: 1.3,
            rotate: [0, 10, -10, 0],
            color: "#FFD700",
          }}
          transition={{ duration: 0.3 }}
        >
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
        </motion.svg>
      ))}
    </div>
  )
}
