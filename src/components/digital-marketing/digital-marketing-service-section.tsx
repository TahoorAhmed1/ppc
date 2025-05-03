"use client"

import { Button } from "@/components/ui/button"
import { coolEmoji, digitalserviceIcon1, digitalserviceIcon2, digitalserviceIcon3, digitalserviceIcon4, laughEmoji, likeEmoji, loveEmoji, serviceRightImage } from "@/assets/index" // Import emojis and service image
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import ServiceCard from "./service-cards"

export default function DigitalMarketingServiceSection() {
  const headingRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)
  const imageRef = useRef(null)
  const cardsRef = useRef(null)

  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 })
  const isDescriptionInView = useInView(descriptionRef, { once: true, amount: 0.3 })
  const isButtonInView = useInView(buttonRef, { once: true, amount: 0.3 })
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 })
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.1 })

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <main className="bg-white ">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-25 lg:mb-55 xl:mb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          {/* Left Column */}
          <div className="space-y-8 relative">
            <motion.div
              className="absolute -top-10 -right-25 z-10 hidden lg:block"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Image
                src={likeEmoji.src || "/placeholder.svg"}
                alt="Love reaction"
                width={1000}
                height={1000}
                className="w-20 h-20 md:w-28 md:h-28"
              />
            </motion.div>
            <motion.div
              className="absolute left-0 top-[310vw] sm:top-180 lg:top-150 z-20"
              animate={{
                x: [0, 10, 0],
                y: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Image
                src={coolEmoji.src || "/placeholder.svg"}
                alt="Thumbs up"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                ref={headingRef}
                initial={{ opacity: 0, y: 30 }}
                animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-6xl md:text-5xl lg:text-6xl font-bold text-[#3CBFAE] leading-tight"
              >
                Take Your Social Media To The Next Level
              </motion.h1>

              <motion.p
                ref={descriptionRef}
                initial={{ opacity: 0, y: 30 }}
                animate={isDescriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-[#1C2D44] text-lg font-medium max-w-xl"
              >
                At Creative Agency 360, we don't have a secret formula — just a proven approach to help you achieve your
                goals in a simple, effective, and results-driven way.
              </motion.p>

              <motion.div
                ref={buttonRef}
                initial={{ opacity: 0, y: 30 }}
                animate={isButtonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <Button className="bg-gradient-to-r w-fit from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-lg border-none text-sm md:text-base px-4 py-2">
                  Get In Touch
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Service Cards */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:absolute z-10 2xl:top-[40%] xl:top-[50%] lg:top-[75%] md:top-[30%] "
          >
            <motion.div
              custom={0}
              initial="hidden"
              animate={isCardsInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <ServiceCard
                icon={digitalserviceIcon1.src}
                title="Holistic Social Media Strategies"
                description="We design customized strategies that are uniquely aligned with your brand's objectives and target audience, ensuring your message stands out."
                iconBgColor="bg-[#E8F8F6]"
              />
            </motion.div>
            <motion.div
              custom={1}
              initial="hidden"
              animate={isCardsInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <ServiceCard
                icon={digitalserviceIcon2.src}
                title="Engaging Content Creation"
                description="Our expert team crafts captivating content, optimized for each platform, that resonates with your followers and drives interaction."
                iconBgColor="bg-[#E8F8F6]"
              />
            </motion.div>
            <motion.div
              custom={2}
              initial="hidden"
              animate={isCardsInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <ServiceCard
                icon={digitalserviceIcon3.src}
                title="Advertising and Campaign Management"
                description="We use analytics to track performance, continuously optimizing your campaigns for measurable growth and success."
                iconBgColor="bg-[#E8F8F6]"
              />
            </motion.div>
            <motion.div
              custom={3}
              initial="hidden"
              animate={isCardsInView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <ServiceCard
                icon={digitalserviceIcon4.src}
                title="Expertise Across Platforms"
                description="From Facebook to TikTok, our experience across all major social platforms ensures your business gets the best results, no matter the channel."
                iconBgColor="bg-[#E8F8F6]"
              />
            </motion.div>
          </div>

          {/* Right Column Image */}
          <div className="relative mt-12 lg:mt-0">
            <div className="relative w-full overflow-hidden">
              {/* Emoji top-right */}
              <motion.div
                className="absolute top-6 right-4 md:right-16 z-10"
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3.5,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Image
                  src={loveEmoji.src || "/placeholder.svg"}
                  alt="Love reaction"
                  width={60}
                  height={60}
                  className="w-12 h-12 md:w-16 md:h-16"
                />
              </motion.div>

              {/* Main Image */}
              <motion.div
                ref={imageRef}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isImageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative"
              >
                <Image
                  src={serviceRightImage.src || "/placeholder.svg"}
                  alt="Phone mockup with person holding megaphone"
                  width={500}
                  height={800}
                  className="w-full h-auto lg:w-[600px] md:w-[400px] mx-auto"
                  priority
                />

                {/* Bottom emoji */}
                <motion.div
                  className="absolute bottom-0 right-4 z-10"
                  animate={{
                    rotate: [0, -5, 0, 5, 0],
                    y: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <Image
                    src={laughEmoji.src || "/placeholder.svg"}
                    alt="Heart eyes emoji"
                    width={60}
                    height={60}
                    className="w-12 h-12 md:w-16 md:h-16"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
