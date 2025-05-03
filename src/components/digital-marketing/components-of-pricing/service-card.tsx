"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  number: string
  title: string
  description: string
}

export function ServiceCard({ number, title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <Card className="border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <motion.div
            className="text-[#4cd3a5] text-xl font-medium mb-4"
            whileHover={{
              scale: 1.1,
              x: 5,
              transition: { duration: 0.2 },
            }}
          >
            {number}
          </motion.div>
          <motion.h3
            className="text-2xl font-bold text-[#1e293b] mb-3"
            whileHover={{
              color: "#4cd3a5",
              x: 5,
              transition: { duration: 0.2 },
            }}
          >
            {title}
          </motion.h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <motion.div
            className="text-[#4cd3a5]"
            whileHover={{
              scale: 1.2,
              x: 5,
              transition: { duration: 0.2 },
            }}
          >
            <ArrowRight className="h-5 w-5" />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
