"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  firmsLogos,
  heroSectionImage2,
  mailIcon,
  profileImage2,
  projectDoneLine,
  shopifyIcon,
  wixIcon,
  webflowIcon,
  wordpressIcon,
} from "@/assets"
import { AiFillSafetyCertificate } from "react-icons/ai"
import StatsBar from "./stats-card"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import AutoSlider from "./auto-slider"

// Pulse animation for the circular elements
const pulseAnimation = {
  scale: [1, 1.05, 1],
  opacity: [0.5, 0.6, 0.5],
  transition: {
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "reverse" as const,
    duration: 2,
  },
}

const popupData = [
  {
    id: 1,
    title: "Digital Marketing",
    description: "Boost your online presence with our comprehensive digital marketing strategies.",
    icon: "🚀",
  },
  {
    id: 2,
    title: "Web Development",
    description: "Custom websites and applications built with the latest technologies.",
    icon: "💻",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Create intuitive and engaging user experiences that convert.",
    icon: "🎨",
  },
  {
    id: 4,
    title: "Security First",
    description: "All our solutions prioritize your data security and privacy.",
    icon: "🔒",
  },
  {
    id: 5,
    title: "Monthly Visitor Stats",
    description:
      "Track your website's performance with our detailed analytics dashboard. See visitor trends and engagement metrics.",
    icon: "📊",
  },
]

const platforms = [
  { name: "Shopify", src: shopifyIcon.src },
  { name: "WordPress", src: wordpressIcon.src },
  { name: "Wix", src: wixIcon.src },
  { name: "Webflow", src: webflowIcon.src },
]

export default function HeroSection() {
  const [activePopup, setActivePopup] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  // Check for mobile and tablet screen sizes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }

    // Set initial state
    checkScreenSize()

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize)

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return (
    <section className="relative container overflow-hidden">
      {/* Animated circles - only show on larger screens or with reduced opacity on mobile */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        whileInView={pulseAnimation}
        className={`absolute md:top-[5%] top-[70%] left-[5%] w-[10vw] h-[10vw] md:w-[8vw] md:h-[8vw] rounded-full bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] cursor-pointer hover:opacity-70 transition-opacity ${
          isMobile ? "opacity-30" : "opacity-50"
        }`}
        onClick={() => setActivePopup(1)}
      ></motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        whileInView={pulseAnimation}
        className={`absolute md:top-[30%] top-[60%] right-[2%] w-[8vw] h-[8vw] md:w-[7vw] md:h-[7vw] rounded-full bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] cursor-pointer hover:opacity-70 transition-opacity ${
          isMobile ? "opacity-30" : "opacity-50"
        }`}
        onClick={() => setActivePopup(2)}
      ></motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        whileInView={pulseAnimation}
        className={`absolute md:top-[15%] top-[54%] right-[35%] w-[8vw] h-[8vw] md:w-[7vw] md:h-[7vw] rounded-full bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] cursor-pointer hover:opacity-70 transition-opacity ${
          isMobile ? "opacity-30" : "opacity-50"
        }`}
        onClick={() => setActivePopup(3)}
      ></motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        whileInView={pulseAnimation}
        className={`absolute top-[54.5%] right-[37%] w-[4vw] h-[4vw] md:w-[3vw] md:h-[3vw] rounded-full bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity ${
          isMobile ? "opacity-30" : "opacity-50"
        }`}
        onClick={() => setActivePopup(4)}
      >
        <AiFillSafetyCertificate className="text-white w-full h-full p-[15%]" />
      </motion.div>

      {/* Popup animation */}
      <AnimatePresence>
        {activePopup !== null && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setActivePopup(null)}
          >
            <div
              className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                onClick={() => setActivePopup(null)}
                aria-label="Close popup"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="text-4xl mb-4" aria-hidden="true">
                  {popupData[activePopup - 1]?.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text">
                  {popupData[activePopup - 1]?.title}
                </h3>
                <p className="text-gray-600 mb-4">{popupData[activePopup - 1]?.description}</p>
                <div>
                  <Button
                    className="bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-full border-none"
                    onClick={() => setActivePopup(null)}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Monthly Visitor Card with popup functionality */}
      <div className="absolute lg:right-[9%] right-[15%] lg:top-20 sm:top-[42%] top-[50%] z-40">
        <div className="cursor-pointer" onClick={() => setActivePopup(5)}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card
              className="rounded-lg shadow-md bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-white w-fit h-fit p-2 sm:p-3"
              style={{
                maxHeight: "150px",
              }}
            >
              <CardContent className="flex flex-col justify-between h-full p-0">
                <h2 className="font-medium text-[10px] sm:text-sm">Monthly Visitor</h2>

                <div className="flex items-end gap-[6px] sm:gap-2 mt-1 sm:mt-2">
                  <div className="flex flex-col justify-between leading-none text-white/90 text-[8px] sm:text-[10px] gap-[2px] sm:gap-[6px]">
                    <p>30</p>
                    <p>20</p>
                    <p>10</p>
                  </div>

                  {[
                    { height: "16px", mdHeight: "24px" },
                    { height: "24px", mdHeight: "36px" },
                    { height: "20px", mdHeight: "28px" },
                    { height: "16px", mdHeight: "24px" },
                    { height: "24px", mdHeight: "36px" },
                    { height: "32px", mdHeight: "48px" },
                  ].map((bar, i) => (
                    <div
                      key={i}
                      className="w-[6px] sm:w-[8px] bg-white/70 rounded-md"
                      style={{
                        height: isMobile ? bar.height : bar.mdHeight,
                        backgroundColor: `rgba(255,255,255,${0.6 + i * 0.05})`,
                      }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <div className="py-6 md:py-12">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="flex flex-col justify-center space-y-4 md:space-y-6">
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-2xl sm:text-3xl font-bold md:text-4xl lg:text-5xl">
                <span className="bg-gradient-to-r text-[#41B4A7]">
                  Your One-Stop Digital Marketing and Web Design Partner Empowering Your Brand Voice
                </span>
              </h1>
              <p className="max-w-[600px] text-[#1C2D44] text-sm sm:text-base md:text-lg lg:text-base xl:text-xl">
                A team of UI/UX experts, web and mobile app developers, copywriters and digital marketers who deliver
                real-world solutions for today's dynamic landscape.
              </p>
            </div>

            <div className="w-full">
              <Image
                src={firmsLogos || "/placeholder.svg?height=100&width=1000&query=company logos"}
                alt="Partner company logos"
                width={1000}
                height={100}
                className="w-full h-auto max-h-20 object-contain"
                priority
              />
            </div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#contactus">
                  <Button className="bg-gradient-to-r cursor-pointer from-[#65CF5F]/80 to-[#209CEB] hover:from-[#209CEB]/80 hover:to-[#65CF5F] w-full sm:w-[190px] text-[17px] font-medium hover:opacity-90 text-white rounded-lg border-none">
                    Get In Touch
                  </Button>
                </a>
              </motion.div>
            </div>

            <div className="flex gap-2 text-[#1a3d7c]">
              <div className="flex-shrink-0">
                <Image
                  src={mailIcon || "/placeholder.svg?height=100&width=100&query=mail icon"}
                  alt="Contact us"
                  width={100}
                  height={100}
                  className="w-12 h-12 sm:w-15 sm:h-16 object-contain"
                />
              </div>
              <div>
                <p className="font-medium text-lg sm:text-xl md:text-2xl text-[#1C2D44]">(888) 321-7452</p>
                <p className="text-xs sm:text-sm">info@creativeagency360.com</p>
              </div>
            </div>

            <AutoSlider platforms={platforms} className="-mt-10 py-10" />
          </div>

          {/* Right column - Image and floating cards */}
          <div className="relative flex items-center justify-center mt-8 md:mt-0">
            {/* Customer Review Card - responsive */}
            <div className="absolute md:top-50 top-[10%] right-[65%] w-[clamp(40px,35vw,190px)] h-[clamp(60px,8vw,80px)] bg-white rounded-xl shadow-md p-2 sm:p-3 z-40">
              <div className="flex items-center gap-[1vw]">
                <img
                  src={profileImage2?.src || "/placeholder.svg?height=40&width=40&query=profile avatar"}
                  alt="Customer Avatar"
                  className="rounded-full object-cover"
                  style={{
                    width: "6vw",
                    height: "6vw",
                    minWidth: "32px",
                    minHeight: "32px",
                    maxWidth: "40px",
                    maxHeight: "40px",
                  }}
                />
                <div className="flex flex-col w-[clamp(90px,80vw,100px)]">
                  <div className="flex gap-[0.3vw] mb-[0.5vw]">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i}>
                          <Star
                            style={{
                              width: "2vw",
                              height: "2vw",
                              minWidth: "12px",
                              minHeight: "12px",
                              maxWidth: "14px",
                              maxHeight: "14px",
                            }}
                            fill="#F59E0B"
                            stroke="none"
                          />
                        </div>
                      ))}
                  </div>
                  <p
                    className="text-gray-500 font-medium"
                    style={{
                      fontSize: "clamp(8px, 1vw, 12px)",
                    }}
                  >
                    20k+ Customer Review
                  </p>
                </div>
              </div>
            </div>

            {/* Project Done Card - responsive */}
            <div className="absolute h-[40px] w-[clamp(50px,15vw,130px)] top-[30%] sm:top-50 right-[5%] bg-white rounded-lg shadow-md flex flex-col justify-center lg:py-10 sm:py-6 md:px-3 py-3 pr-4 pl-2 z-40">
              <div>
                <p
                  className="text-gray-500"
                  style={{
                    fontSize: "clamp(8px, 1.2vw, 14px)",
                  }}
                >
                  Project Done
                </p>
                <div className="flex items-center" style={{ gap: "1vw" }}>
                  <p
                    className="font-semibold text-gray-800"
                    style={{
                      fontSize: "clamp(10px, 2vw, 20px)",
                    }}
                  >
                    3,258
                  </p>
                  <div style={{ marginTop: "0.5vw" }}>
                    <Image
                      src={projectDoneLine || "/placeholder.svg?height=40&width=40&query=upward trend line"}
                      alt="Project growth trend"
                      width={40}
                      height={40}
                      className="object-contain"
                      style={{
                        width: "clamp(16px, 2.5vw, 40px)",
                        height: "clamp(16px, 2.5vw, 40px)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full h-full">
              {/* Large background circle behind the image */}
              <motion.div
                whileInView={pulseAnimation}
                className="absolute top-[10%] left-[10%] w-[80%] h-0 pb-[80%] rounded-full bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] opacity-50 z-0"
              ></motion.div>

              <div>
                <Image
                  src={
                    heroSectionImage2?.src || "/placeholder.svg?height=1000&width=1000&query=digital marketing expert"
                  }
                  alt="Digital Marketing Expert"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-auto relative z-10"
                  priority
                />
              </div>
              <div className="-mt-6 relative z-20">
                <StatsBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
