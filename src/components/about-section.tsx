"use client";

// First, let's add state to track which card is being hovered
import { useState, useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";

import {
  aboutCardIcon1,
  aboutCardIcon1Hover,
  aboutCardIcon2,
  aboutCardIcon2Hover,
  aboutCardIcon3,
  aboutCardIcon3Hover,
  logo,
} from "@/assets";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  // Add state to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3 + i * 0.1,
      },
    }),
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 },
    },
  };

  // Create an array of card data with regular and hover icons
  const cardData = [
    {
      icon: aboutCardIcon1,
      hoverIcon: aboutCardIcon1Hover,
      title: "100% Ownership Rights",
      description:
        "Guaranteed Satisfaction: We're not happy until you are. Expect top-tier work, timely delivery, and a team that truly listens.",
    },
    {
      icon: aboutCardIcon2,
      hoverIcon: aboutCardIcon2Hover,
      title: "Customer Satisfaction",
      description:
        "Complete Ownership: Your project, your control. We deliver full rights and access, giving you the power to evolve freely.",
    },
    {
      icon: aboutCardIcon3,
      hoverIcon: aboutCardIcon3Hover,
      title: "Constant Client Coordination",
      description:
        "100% Transparency: We believe in clear communication and total honesty. No surprises—just real collaboration.",
    },
  ];

  return (
    <motion.section
      id="aboutus"
      ref={sectionRef}
      className="py-8 md:py-30 bg-white text-black flex flex-col justify-center "
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container grid grid-cols-1 lg:grid-cols-3 items-start gap-4">
        <motion.div
          className="flex flex-col lg:items-start items-center text-center lg:text-start gap-3 w-full max-w-sm mx-auto lg:mx-0"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <a href="/" className="flex font-bold text-3xl items-center">
              Nexuz Global
            </a>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-[42px] font-bold leading-tight z-10"
            variants={itemVariants}
          >
            <span className=" text-black">Who We Are</span>{" "}
          </motion.h2>

          <motion.p
            className="text-sm md:text-base text-black leading-relaxed z-10"
            variants={itemVariants}
          >
            At Nexuz Global , your success is our priority. Our mission? To help
            you connect with your audience, strengthen your brand, and drive
            long-term results.
          </motion.p>
        </motion.div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardData.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              onHoverStart={() => setHoveredCard(i)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div variants={cardHoverVariants}>
                <Card className="bg-white hover:bg-black text-black hover:text-white lg:items-start items-center text-center lg:text-start border-0 shadow-xl p-1 h-[340px] transition-colors duration-300 z-10">
                  <CardContent className="p-4">
                    <motion.div
                      className="flex mb-4 lg:items-start items-center lg:justify-start justify-center text-center lg:text-start"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={
                        isInView
                          ? { scale: 1, opacity: 1 }
                          : { scale: 0.8, opacity: 0 }
                      }
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    >
                      <Image
                        src={
                          (hoveredCard === i ? card.hoverIcon : card.icon) ||
                          "/placeholder.svg"
                        }
                        alt={`Card ${i + 1}`}
                        width={120}
                        height={120}
                      />
                    </motion.div>
                    <motion.h3
                      className="xl:text-2xl md:text-lg sm:text-xl font-semibold mb-2 xl:w-50"
                      initial={{ x: -20, opacity: 0 }}
                      animate={
                        isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                      }
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      className="text-sm"
                      initial={{ x: -20, opacity: 0 }}
                      animate={
                        isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                      }
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                    >
                      {card.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
