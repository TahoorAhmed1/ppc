"use client"
import ServiceItem from "./service-item"
import { Button } from "../ui/button"
import { useFormContact } from "@/store/form"
import { motion } from "framer-motion"

// Define the service item type
interface ServiceItemType {
  number: string
  title: string
  description: string
}

interface ServicesSectionProps {
  services: ServiceItemType[]
  headingtitle: string
  heading: string
}

export default function ServicesSection({ services, headingtitle, heading }: ServicesSectionProps) {
  const { setIsOpen, isOpen }: any = useFormContact()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.section
      className="py-12 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div className="mb-10" variants={containerVariants}>
        <motion.span className="text-gray-500 uppercase text-sm tracking-wider block mb-4" variants={itemVariants}>
          {headingtitle}
        </motion.span>
        <motion.h2
          className="text-4xl font-extrabold text-[#41B4A7] mb-3"
          variants={itemVariants}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            backgroundSize: ["100% 100%", "200% 200%"],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "linear-gradient(45deg, #65CF5F, #41B4A7, #1F9BED, #41B4A7)",
            backgroundSize: "200% 200%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {heading}
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.length > 0 ? (
          services.map((service) => (
            <ServiceItem
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-2 text-center py-8">No services available</p>
        )}
      </div>

      <motion.div className="mt-12" variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={() => setIsOpen(true)}
          className="inline-block bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-lg text-sm sm:text-base font-semibold transition-all duration-300"
        >
          LET&apos;S CONNECT
        </Button>
      </motion.div>
    </motion.section>
  )
}
