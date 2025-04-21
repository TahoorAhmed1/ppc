"use client"

import { offerIcon1, offerIcon2, offerIcon3, offerIcon4, offerIcon5, offerIcon6 } from "@/assets"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface ServiceItem {
  image: string
  title: string
  description: string
}

interface ServicesSectionProps {
  title?: string
  subtitle?: string
  services?: ServiceItem[]
  buttonText?: string
  showButton?: boolean
  backgroundColor?: string
}

const pulse: any = {
  hidden: { scale: 0.9, opacity: 0.3 },
  visible: {
    scale: [1, 1.05, 1],
    opacity: [0.3],
    transition: {
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
      duration: 3,
    },
  },
}

const MotionCard = motion(Card)

export default function ServicesSection({
  title = "WHY CHOOSE US",
  subtitle = "What We Offer",
  services = defaultServices,
  buttonText = "See more",
  showButton = true,
  backgroundColor = "#f9f9f9",
}: ServicesSectionProps) {
  const [activePopup, setActivePopup] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(true)
  return (
    <section
      id="services"
      className="py-12 md:py-20 overflow-hidden relative"
      style={{ backgroundColor }}
    >
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={pulse}
        className="absolute md:top-[5%] top-[70%] left-[5%] w-[10vw] h-[10vw] md:w-[8vw] md:h-[8vw] rounded-full bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] opacity-50 cursor-pointer hover:opacity-70 transition-opacity "
        onClick={() => {
          setTimeout(() => setActivePopup(1), 150);
        }}
      ></motion.div>

      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={pulse}
        className="absolute md:bottom-[15%] bottom-[10%] right-[10%] w-[12vw] h-[12vw] md:w-[10vw] md:h-[10vw] rounded-full bg-gradient-to-r from-[#3DB1B1]/70 to-[#65CF5F]/60 opacity-40 cursor-pointer hover:opacity-60 transition-opacity"
        onClick={() => {
          setTimeout(() => setActivePopup(2), 150);
        }}
      ></motion.div>

      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl font-bold text-[#1C2D44]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3DB1B1]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.h3>
        </div>

        <div className="grid gap-4  sm:gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <MotionCard
              key={index}
              className="bg-white hover:bg-[#1C2D44] text-[#1C2D44] hover:text-white transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
            >
              <CardHeader className="pb-0">
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + 0.1 * index,
                      type: "spring",
                    }}
                  >
                    <Image
                      src={service.image || ""}
                      alt={service.title}
                      width={60}
                      height={60}
                      className="w-14 h-14 object-contain"
                    />
                  </motion.div>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="mt-4">
                <p className="text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </MotionCard>
          ))}
        </div>

        {showButton && (
          <motion.div
            className="flex justify-center mt-10 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              type: "spring",
            }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r h-11 from-[#65CF5F]/80 to-[#209CEB] hover:from-[#209CEB]/80 hover:to-[#65CF5F] w-[220px] text-[17px] font-medium hover:opacity-90 text-white rounded-md border-none">
                {buttonText}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

const defaultServices: ServiceItem[] = [
  {
    image: offerIcon1.src,
    title: "SEO",
    description:
      "Our expert SEO services help improve your website's visibility in search engines, driving more organic traffic and increasing your online presence.",
  },
  {
    image: offerIcon2.src,
    title: "Web Development",
    description:
      "We build stunning, responsive websites that not only look great but also perform exceptionally well across all devices.",
  },
  {
    image: offerIcon3.src,
    title: "Branding",
    description:
      "Our branding services help establish a strong, recognizable identity for your business, creating a lasting impression.",
  },
  {
    image: offerIcon4.src,
    title: "App Development",
    description:
      "Creating user-friendly mobile apps for iOS and Android platforms that help your business reach a wider audience.",
  },
  {
    image: offerIcon5.src,
    title: "Email Marketing",
    description:
      "We help you reach your customers and prospects through targeted email campaigns that drive engagement and conversions.",
  },
  {
    image: offerIcon6.src,
    title: "Pay-Per-Click Advertising",
    description:
      "Our PPC advertising strategies help you reach potential customers at the right time, maximizing your ROI.",
  },
]
