"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface ServiceBadgesProps {
  services: string[]
}

export function ServiceBadges({ services }: ServiceBadgesProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6 text-white">
      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.1,
            y: -3,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Badge
            variant="outline"
            className="rounded-md py-2 px-4 bg-transparent text-white border-gray-600 hover:border-[#5ce0c6] transition-colors duration-300"
          >
            {service}
          </Badge>
        </motion.div>
      ))}
    </div>
  )
}
