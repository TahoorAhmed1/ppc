"use client";

import Image from "next/image";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
  newAwardBgBlack1,
  newAwardBgBlack2,
  newAwardBgBlack3,
  newAwardBgBlack4,
  newAwardBgBlack5,
  newAwardBgBlack6,
  trophy,
} from "@/assets";
import AwardCard from "./award-card";

const awardsData = [
  {
    imageSrc: newAwardBgBlack1.src,
    rating: 4.8,
    className: "w-26",
    description: "Recognized for excellence in web design and development.",
  },
  {
    imageSrc: newAwardBgBlack2.src,
    rating: 4.9,
    className: "w-26",
    description:
      "Recognized as a leader in WordPress, ReactJs, and Web Design in the United States.",
  },
  {
    imageSrc: newAwardBgBlack3.src,
    className: "w-14",
    rating: 4.7,
    description:
      "Proud to be a BBB Accredited business, demonstrating trust and commitment to excellence.",
  },
  {
    imageSrc: newAwardBgBlack4.src,
    className: "w-28",
    rating: 4.8,
    description: "Recognized for excellence in web design and development.",
  },
  {
    imageSrc: newAwardBgBlack5.src,
    className: "w-14",
    rating: 4.9,
    description:
      "Recognized as a leader in WordPress, ReactJs, and Web Design in the United States.",
  },
  {
    imageSrc: newAwardBgBlack6.src,
    className: "w-12",
    rating: 4.7,
    description:
      "Proud to be a BBB Accredited business, demonstrating trust and commitment to excellence.",
  },
];

export default function AwardsComponent() {
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const pausedPositionRef = useRef<number>(0);

  // Calculate the width of one complete set of cards (including gaps)
  const cardWidth = 368; // w-92 = 368px
  const gapWidth = 24; // gap-6 = 24px
  const totalWidth = (cardWidth + gapWidth) * awardsData.length;

  // Create enough duplicates for seamless infinite scroll
  const duplicatedAwards = [...awardsData, ...awardsData, ...awardsData];

  const startContinuousAnimation = (fromPosition = 0) => {
    const duration = 30000; // 30 seconds in milliseconds
    const distance = totalWidth; // Distance to travel for one complete cycle

    startTimeRef.current = Date.now();

    const animate = () => {
      if (!isHovered) {
        const elapsed = Date.now() - (startTimeRef.current || 0);
        const progress = (elapsed / duration) % 1;
        const currentPosition = fromPosition - progress * distance;

        // Reset position when it goes beyond the cycle
        let normalizedPosition = currentPosition;
        if (currentPosition <= -totalWidth * 2) {
          normalizedPosition = currentPosition + totalWidth;
          pausedPositionRef.current = normalizedPosition;
        } else {
          pausedPositionRef.current = currentPosition;
        }

        x.set(normalizedPosition);
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!isHovered) {
      startContinuousAnimation(pausedPositionRef.current);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, totalWidth]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="relative container py-16 px-6 overflow-hidden">
      {/* Trophy image as background on mobile */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center opacity-20 lg:hidden pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={trophy || "/placeholder.svg"}
          alt="Golden Trophy Background"
          width={600}
          height={600}
          className="object-contain"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between ">
          <div className="lg:w-2/3">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#41b4a7]"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Winning Hearts, Minds,
              <br />
              And Awards
            </motion.h1>
            <motion.p
              className="max-w-2xl text-sm md:text-base text-[#1C2D44] leading-relaxed z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Globally recognized for our passion and expertise in creative web
              design models, Web Design Glory crushes digital design with
              user-friendly sites, earning top B2B awards across the U.S.
            </motion.p>
          </div>

          {/* Trophy image on desktop only */}
          <motion.div
            className="lg:w-1/3 hidden lg:flex justify-end mt-8 lg:-mt-16"
            initial={{ opacity: 0, x: 50, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={trophy || "/placeholder.svg"}
              alt="Golden Trophy Award"
              width={1000}
              height={1000}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Awards Grid with Auto Scroll */}
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="flex gap-6 will-change-transform"
            style={{
              x,
              width: `${totalWidth * 3}px`,
            }}
          >
            {duplicatedAwards.map((award, index) => (
              <AwardCard
                key={`${index}-${award.imageSrc}`}
                imageSrc={award.imageSrc}
                rating={award.rating}
                className={award.className}
                description={award.description}
                index={index % awardsData.length}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
