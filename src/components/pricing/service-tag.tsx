"use client"

import { motion } from "framer-motion"

interface ServiceTagProps {
  name: string
}

export function ServiceTag({ name }: ServiceTagProps) {
  // Custom color mapping based on service name
  const getTagColor = (service: string) => {
    switch (service) {
      case "Animation":
        return "bg-[#4ecca3] text-white"
      case "Branding":
        return "bg-white text-[#4ecca3] border border-[#4ecca3]"
      case "Digital Marketing":
        return "bg-white text-[#4ecca3] border border-[#4ecca3]"
      case "Ecommerce":
        return "bg-white text-[#4ecca3] border border-[#4ecca3]"
      case "Logo Design":
        return "bg-white text-[#4ecca3] border border-[#4ecca3]"
      case "SEO":
        return "bg-white text-[#4ecca3] border border-[#4ecca3]"
      case "SMM":
        return "bg-white text-[#4ecca3] border border-[#4ecca3]"
      case "Web Design":
        return "bg-white text-[#4ecca3] border border-[#4ecca3]"
      default:
        return "bg-white text-[#4ecca3] border border-[#4ecca3]"
    }
  }

  return (
    <motion.div
      className={`service-tag px-4 py-2 rounded-full text-sm font-medium ${getTagColor(name)}`}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 4px 12px rgba(78, 204, 163, 0.15)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {name}
    </motion.div>
  )
}
