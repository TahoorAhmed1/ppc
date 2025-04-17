"use client"

import { motion } from "framer-motion"

export default function StatsBar() {
  return (
    <div className="max-w-3xl mx-auto p-[0.4vw] rounded-[1.6vw] bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] shadow-lg">
      <div className="flex items-center justify-between rounded-[1.6vw] bg-gradient-to-r from-green-200 via-teal-200 to-blue-200 p-[1.6vw]">
        {/* Using map to create the four stat items */}
        {[
          { value: "4.5K", label: "Lorem ipsum\ndolor sit amet" },
          { value: "12+", label: "Lorem ipsum\ndolor sit amet" },
          { value: "6.9K", label: "Lorem ipsum\ndolor sit amet" },
          { value: "4.9", label: "Lorem ipsum\ndolor sit amet" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="flex flex-col items-center text-center px-[0.8vw]"
          >
            <span
              style={{
                fontSize: "clamp(13px, 2vw, 22px)",
                fontWeight: "bold",
                lineHeight: "1.2",
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontSize: "clamp(8px, 1vw, 11px)",
                color: "#4B5563",
                whiteSpace: "pre-line",
                lineHeight: "1.3",
                marginTop: "0.4vw",
              }}
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
