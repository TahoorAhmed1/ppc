"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { firmsLogos, heroSectionImage2, mailIcon, profileImage, projectDoneLine } from "@/assets"
import { AiFillSafetyCertificate } from "react-icons/ai"
import StatsBar from "./stats-card"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const slideRight = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const slideLeft = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

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
];

const popupVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activePopup, setActivePopup] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative container overflow-hidden ">
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={pulse}
        className="absolute md:top-[5%] top-[70%] left-[5%] w-[10vw] h-[10vw] md:w-[8vw] md:h-[8vw] rounded-full bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] opacity-50 cursor-pointer hover:opacity-70 transition-opacity"
        onClick={() => {
          setTimeout(() => setActivePopup(1), 150);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      ></motion.div>
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={pulse}
        transition={{ delay: 0.3 }}
        className="absolute md:top-[30%] top-[60%] right-[2%] w-[8vw] h-[8vw] md:w-[7vw] md:h-[7vw] rounded-full bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] opacity-50 cursor-pointer hover:opacity-70 transition-opacity"
        onClick={() => {
          setTimeout(() => setActivePopup(2), 150);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      ></motion.div>
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={pulse}
        transition={{ delay: 0.6 }}
        className="absolute md:top-[15%] top-[54%] right-[35%] w-[8vw] h-[8vw] md:w-[7vw] md:h-[7vw] rounded-full bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] opacity-50 cursor-pointer hover:opacity-70 transition-opacity"
        onClick={() => {
          setTimeout(() => setActivePopup(3), 150);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      ></motion.div>
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={scaleUp}
        transition={{ delay: 0.9 }}
        className="absolute top-[54.5%] right-[37%] w-[4vw] h-[4vw] md:w-[3vw] md:h-[3vw] rounded-full bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] opacity-50 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
        onClick={() => {
          setTimeout(() => setActivePopup(4), 150);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AiFillSafetyCertificate className="text-white w-full h-full p-[15%]" />
      </motion.div>

      <AnimatePresence>
        {activePopup !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setActivePopup(null)}
          >
            <motion.div
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                onClick={() => setActivePopup(null)}
              >
                <X size={20} />
              </motion.button>

              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="text-4xl mb-4"
                >
                  {popupData[activePopup - 1]?.icon}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl font-bold mb-2 bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text"
                >
                  {popupData[activePopup - 1]?.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-600 mb-4"
                >
                  {popupData[activePopup - 1]?.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    className="bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-full border-none"
                    onClick={() => setActivePopup(null)}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={slideLeft}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="absolute lg:right-[9%] right-[15%] lg:top-20 sm:top-[42%] top-[50%] z-40"
      >
        <Card
          className="rounded-lg shadow-md bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-white w-fit h-fit p-2 sm:p-3"
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
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: bar.height }}
                  transition={{
                    delay: 0.7 + i * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className={`w-[6px] sm:w-[8px] bg-white/70 rounded-md md:h-[${bar.mdHeight}]`}
                  style={{
                    backgroundColor: `rgba(255,255,255,${0.6 + i * 0.05})`,
                  }}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="  py-6 md:py-12">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={staggerChildren}
            className="flex flex-col justify-center space-y-4 md:space-y-6"
          >
            <motion.div
              variants={slideRight}
              className="space-y-2 md:space-y-4"
            >
              <motion.h1
                variants={slideRight}
                className="text-2xl sm:text-3xl font-bold  md:text-4xl lg:text-5xl"
              >
                <span className="bg-gradient-to-r  text-[#41B4A7] ">
                  Your One-Stop Digital Marketing and Web Design Partner
                  Empowering Your Brand Voice
                </span>
              </motion.h1>
              <motion.p
                variants={slideRight}
                className="max-w-[600px] text-[#1C2D44] text-sm sm:text-base md:text-lg lg:text-base xl:text-xl"
              >
                A team of UI/UX experts, web and mobile app developers,
                copywriters and digital marketers who deliver real-world
                solutions for today's dynamic landscape.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              transition={{ delay: 0.3 }}
              className="w-full"
            >
              <Image
                src={firmsLogos || "/placeholder.svg"}
                alt="logos"
                width={1000}
                height={1000}
                className="w-full h-auto max-h-20 object-contain"
              />
            </motion.div>

            <motion.div
              variants={slideUp}
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#contactus">
                  <Button className="bg-gradient-to-r cursor-pointer from-[#65CF5F]/80 to-[#209CEB] hover:from-[#209CEB]/80 hover:to-[#65CF5F] w-[220px] text-[17px] font-medium hover:opacity-90 text-white rounded-lg border-none">
                    Get In Touch
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={slideUp}
              className="flex gap-2 text-[#1a3d7c]"
            >
              <motion.div variants={scaleUp} className="flex-shrink-0">
                <Image
                  src={mailIcon || "/placeholder.svg"}
                  alt="mail-icon"
                  width={100}
                  height={100}
                  className="w-12 h-12 sm:w-15 sm:h-16 object-contain"
                />
              </motion.div>
              <motion.div variants={slideRight}>
                <p className="font-medium text-lg sm:text-xl md:text-2xl text-[#1C2D44]">
                  (888) 321-7452
                </p>
                <p className="text-xs sm:text-sm">info@creativeagency360.com</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ delay: 0.5 }}
            className="relative flex items-center justify-center mt-8 md:mt-0"
          >
            {/* Customer Review Card - made responsive */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={slideRight}
              transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
              className="absolute md:top-50 top-[10%] right-[65%] w-[clamp(70px,40vw, 100px)] h-[clamp(100px, 10vw, 150px)] bg-white rounded-xl shadow-md p-2 sm:p-3 z-40"
            >
              <div className="flex items-center gap-[1vw]">
                <motion.img
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                  src={profileImage.src || "/placeholder.svg"}
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
                <div className="flex flex-col">
                  <motion.div
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                    variants={staggerChildren}
                    className="flex gap-[0.3vw] mb-[0.5vw]"
                  >
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <motion.div
                          key={i}
                          variants={{
                            hidden: { opacity: 0, scale: 0 },
                            visible: {
                              opacity: 1,
                              scale: 1,
                              transition: { delay: 1.0 + i * 0.1 },
                            },
                          }}
                        >
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
                        </motion.div>
                      ))}
                  </motion.div>
                  <motion.p
                    variants={fadeIn}
                    transition={{ delay: 1.5 }}
                    className="text-gray-500 font-medium"
                    style={{
                      fontSize: "clamp(8px, 1vw, 12px)",
                    }}
                  >
                    20k+ Customer Review
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Project Done Card - made responsive */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={slideLeft}
              transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              className="absolute h-[40px] w-[(clamp(80px,40vw, 100px)] sm:w-[140px] top-[30%] sm:top-50 right-[5%] bg-white rounded-lg shadow-md flex flex-col justify-center lg:py-10 sm:py-6 md:px-3 py-3 pr-4 pl-2 z-40"
            >
              <div>
                <motion.p
                  variants={fadeIn}
                  className="text-gray-500"
                  style={{
                    fontSize: "clamp(8px, 1.2vw, 14px)",
                  }}
                >
                  Project Done
                </motion.p>
                <div className="flex items-center" style={{ gap: "1vw" }}>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                    className="font-semibold text-gray-800"
                    style={{
                      fontSize: "clamp(10px, 2vw, 20px)",
                    }}
                  >
                    3,258
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    style={{ marginTop: "0.5vw" }}
                  >
                    <Image
                      src={projectDoneLine || "/placeholder.svg"}
                      alt="project done line"
                      width={1000}
                      height={1000}
                      className="object-contain"
                      style={{
                        width: "clamp(16px, 2.5vw, 40px)",
                        height: "clamp(16px, 2.5vw, 40px)",
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <div className="relative w-full h-full">
              {/* Large background circle behind the girl */}
              <motion.div
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={pulse}
                className="absolute top-[10%] left-[10%] w-[80%] h-0 pb-[80%] rounded-full bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] opacity-50 z-0"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <Image
                  src={heroSectionImage2.src || "/placeholder.svg"}
                  alt="Digital Marketing Expert"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-auto relative z-10"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="-mt-6 relative z-20"
              >
                <StatsBar />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
