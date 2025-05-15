"use client";

import { packagesBgImage } from "@/assets";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useFormContact } from "@/store/form";

export default function HireUsHeroSection() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  const pulseAnimation = {
    initial: { scale: 1, opacity: 0.8 },
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as "reverse",
        ease: "easeInOut",
      },
    },
  };

  const rotateAnimation = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  };
  const { setIsOpen, isOpen }: any = useFormContact();

  return (
    <div className="relative min-h-[600px] w-full flex flex-col items-center justify-center px-4 py-16 z-10 overflow-hidden">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: `url(${packagesBgImage.src})`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Left arrow circle */}
      <motion.div
        className="absolute left-[5%] sm:left-[10%] top-1/2 transform -translate-y-1/2 w-12 sm:w-16 h-12 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-sm z-10"
        initial="initial"
        animate="animate"
        variants={floatAnimation}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ArrowUp className="w-6 sm:w-8 h-6 sm:h-8 text-[#65CF5F] transform -rotate-45" />
      </motion.div>

      {/* Right arrow circle */}
      <motion.div
        className="absolute right-[5%] sm:right-[10%] top-[15%] sm:top-[20%] w-12 sm:w-16 h-12 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-sm z-10"
        initial="initial"
        animate="animate"
        variants={{
          ...floatAnimation,
          animate: {
            ...floatAnimation.animate,
            transition: { ...floatAnimation.animate.transition, delay: 1 },
          },
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ArrowUp className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500 transform rotate-45" />
      </motion.div>

      {/* Green circle */}
      <motion.div
        className="absolute right-[35%] sm:right-[40%] top-[25%] sm:top-[30%] w-6 sm:w-8 h-6 sm:h-8 border-2 border-green-300 rounded-full z-10"
        initial="initial"
        animate="animate"
        variants={pulseAnimation}
      />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text mb-6 sm:mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          EXPERIENCE SMARTER DIGITAL WITH CREATIVE AGENCY
        </motion.h1>

        <motion.div
          className="flex justify-center mb-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            className="w-2 h-2 bg-GREEN-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </motion.div>

        <motion.h2
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3DB1B1] mb-8 sm:mb-12 leading-tight"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.2, ease: "easeOut" },
            },
          }}
        >
          Discover digital solutions that help you take your industry by storm
          with Creative Agency.
        </motion.h2>

        <motion.button
          className="bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] hover:from-[#209CEB]/80 hover:to-[#65CF5F] rounded-2xl border-none text-white font-bold py-3 sm:py-4 px-8 sm:px-10 text-base sm:text-lg transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
        >
          HIRE US TODAY
        </motion.button>
      </div>
    </div>
  );
}
