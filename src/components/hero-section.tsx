"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Phone, PhoneCall, Sparkles, Star, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  firmsLogos,
  heroSectionImage2,
  mailIcon,
  projectDoneLine,
  shopifyIcon,
  wixIcon,
  webflowIcon,
  wordpressIcon,
  profileImage6,
} from "@/assets";
import { AiFillSafetyCertificate } from "react-icons/ai";
import StatsBar from "./stats-card";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import AutoSlider from "./auto-slider";

const pulseAnimation = {
  scale: [1, 1.05, 1],
  opacity: [0.5, 0.6, 0.5],
  transition: {
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "reverse" as const,
    duration: 2,
  },
};

const popupData = [
  {
    id: 1,
    title: "Digital Marketing",
    description:
      "Boost your online presence with our comprehensive digital marketing strategies.",
    icon: "🚀",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Custom websites and applications built with the latest technologies.",
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
];

const platforms = [
  { name: "Shopify", src: shopifyIcon.src },
  { name: "WordPress", src: wordpressIcon.src },
  { name: "Wix", src: wixIcon.src },
  { name: "Webflow", src: webflowIcon.src },
];
const shimmerAnimation = {
  hidden: { backgroundPosition: "200% 0" },
  visible: {
    backgroundPosition: "-200% 0",
    transition: {
      repeat: Number.POSITIVE_INFINITY,
      duration: 3,
      ease: "linear",
    },
  },
};

export default function HeroSection() {
  const [activePopup, setActivePopup] = useState<number | null>(null);

  return (
    <section className="relative container overflow-hidden ">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        whileInView={pulseAnimation}
        className={`absolute sm:top-[5%] -top-[3%]  md:left-[3%]  -left-[3%] w-[12vw] h-[12vw] md:max-w-[7vw] md:h-[7vw] min-w-[4vw] rounded-full bg-gradient-to-r from-black/80 to-black cursor-pointer hover:opacity-70 transition-opacity 
        }`}
        onClick={() => setActivePopup(1)}
      ></motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        whileInView={pulseAnimation}
        className={`absolute md:top-[30%] top-[0.5%] md:right-[0%] right-[3%] w-[12vw] h-[12vw] md:max-w-[7vw] md:h-[7vw] min-w-[4vw] rounded-full bg-gradient-to-r from-black/80 to-black cursor-pointer hover:opacity-70 transition-opacity 
        }`}
        onClick={() => setActivePopup(2)}
      ></motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        whileInView={pulseAnimation}
        className={`absolute md:top-[15%] top-[54%] right-[40%] w-[8vw] h-[8vw] xl:max-w-[5vw] xl:max-h-[5vw]  md:w-[7vw] md:h-[7vw] rounded-full bg-gradient-to-r from-black/80 to-black cursor-pointer hover:opacity-70 transition-opacity 
        }`}
        onClick={() => setActivePopup(3)}
      ></motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        whileInView={pulseAnimation}
        className={`absolute top-[54.5%] right-[37%] w-[4vw] h-[4vw] md:w-[3vw] md:h-[3vw] rounded-full bg-gradient-to-r from-black/80 to-black flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity 
        }`}
        onClick={() => setActivePopup(4)}
      >
        <AiFillSafetyCertificate className="text-white w-full h-full p-[15%]" />
      </motion.div>

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
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
                onClick={() => setActivePopup(null)}
                aria-label="Close popup"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="text-4xl mb-4" aria-hidden="true">
                  {popupData[activePopup - 1]?.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-black/80 to-black text-transparent bg-clip-text">
                  {popupData[activePopup - 1]?.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {popupData[activePopup - 1]?.description}
                </p>
                <div>
                  <Button
                    className="bg-gradient-to-r from-black/80 to-black hover:opacity-90 text-white rounded-full border-none"
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

      <div className="absolute lg:right-[9%] right-[15%] lg:top-20 md:top-[40%] sm:top-[42%] top-6/11 z-40">
        <div className="cursor-pointer" onClick={() => setActivePopup(5)}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card
              className="rounded-lg shadow-md bg-gradient-to-r from-black/80 to-black text-white w-fit h-fit p-2 sm:p-3"
              style={{
                maxHeight: "150px",
              }}
            >
              <CardContent className="flex flex-col justify-between h-full p-0">
                <h2 className="font-medium text-[10px] sm:text-sm">
                  Monthly Visitor
                </h2>

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
                        height: bar.height,
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
          <div className="flex flex-col justify-center space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2 md:space-y-4"
            >
              <h1 className="text-[35px] font-bold md:leading-tight md:text-4xl lg:text-5xl">
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={shimmerAnimation}
                  className="relative inline-block bg-gradient-to-r from-black to-black bg-clip-text text-transparent"
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                >
                  Your One-Stop Digital Marketing and Web Design Partner
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="relative inline-block bg-gradient-to-r mt-5 from-black via-black to-black bg-clip-text text-transparent"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-75"
                    style={{
                      backgroundSize: "200% 100%",
                      mixBlendMode: "overlay",
                    }}
                    animate={{
                      x: ["100%", "-100%"],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      duration: 2,
                      ease: "easeInOut",
                      delay: 1,
                      repeatDelay: 3,
                    }}
                  />
                  Empowering Your Brand Voice
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative max-w-[640px] text-black text-lg  lg:text-[22px]"
              >
                A team of UI/UX experts, web and mobile app developers,
                copywriters and digital marketers who deliver real-world
                solutions for today's dynamic landscape.
              </motion.p>
            </motion.div>

            <div className="w-full">
              <Image
                src={firmsLogos}
                alt="Partner company logos"
                width={1000}
                height={1000}
                className="w-full h-auto max-h-20 -z-1"
                priority
              />
            </div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#contactus">
                  <Button className="bg-gradient-to-r h-11 cursor-pointer from-black/80 to-black hover:from-black/80 hover:to-black w-full sm:w-[190px] text-[17px] font-medium hover:opacity-90 text-white rounded-lg border-none">
                    Get In Touch
                  </Button>
                </a>
              </motion.div>
            </div>

            <div>
              <div className="flex gap-2 text-[#1a3d7c]">
                <div className="flex-shrink-0 flex items-center gap-2">
                  <Phone className=" w-4 h-4" />
                  <p>
                    <a
                      className="font-medium text-base text-sm sm:text-base text-black"
                      href="tel:+18045745376"
                    >
                      +92 3282371639
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <p>
                  <a
                    className="text-sm sm:text-base"
                    href="mailto:support@nexuzglobal.com"
                  >
                    support@nexuzglobal.com
                  </a>
                </p>
              </div>
            </div>
            <div className="hidden xl:block">
              <AutoSlider platforms={platforms} />
            </div>
          </div>

          <div className="relative flex justify-center mt-8 md:mt-0">
            <div className="absolute md:top-50 top-[10%] right-[65%] w-[clamp(40px,35vw,190px)] h-[clamp(60px,8vw,80px)] bg-white rounded-xl shadow-md p-2 sm:p-3 z-40">
              <div className="flex items-center gap-[1vw]">
                <img
                  src={
                    profileImage6?.src ||
                    "/placeholder.svg?height=40&width=40&query=profile avatar"
                  }
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

            <div className="absolute h-[40px] md:w-[clamp(50px,21vw,130px)] top-[30%] sm:top-50 right-[5%] bg-white rounded-lg shadow-md flex flex-col justify-center lg:py-10 sm:py-6 md:px-3 py-3 pr-4 pl-2 z-40">
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
                      src={
                        projectDoneLine ||
                        "/placeholder.svg?height=40&width=40&query=upward trend line"
                      }
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
              <motion.div
                whileInView={pulseAnimation}
                className="absolute top-[16%] left-[8%] w-[80%] h-0 pb-[80%] rounded-full bg-gradient-to-r from-black/80 to-black opacity-50 z-0"
              ></motion.div>

              <div>
                <Image
                  src={
                    heroSectionImage2?.src ||
                    "/placeholder.svg?height=1000&width=1000&query=digital marketing expert"
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
  );
}
