"use client";
import { motion, type Variants } from "framer-motion";
import type React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Shield } from "lucide-react";
import { useState } from "react";
import {
  award1,
  award2,
  award3,
  award4,
  heroSectionImage3,
  serviceIcon1,
  serviceIcon2,
  serviceIcon3,
  serviceIcon4,
  serviceIcon6,
} from "@/assets";

interface CompactServiceCategoryProps {
  icon: string;
  title: string;
  subtitle: string;
}

// Mock award images for demonstration
const award = [award1.src, award2.src, award3.src, award4.src];
const services = [
  { icon: serviceIcon1.src, title: "TRAVEL / TOUR", subtitle: "W E B S I T E" },
  { icon: serviceIcon2.src, title: "TRAVEL / TOUR", subtitle: "W E B S I T E" },
  { icon: serviceIcon3.src, title: "TRAVEL / TOUR", subtitle: "W E B S I T E" },
  { icon: serviceIcon4.src, title: "TRAVEL / TOUR", subtitle: "W E B S I T E" },
  { icon: serviceIcon2.src, title: "TRAVEL / TOUR", subtitle: "W E B S I T E" },
  { icon: serviceIcon6.src, title: "TRAVEL / TOUR", subtitle: "W E B S I T E" },
  { icon: serviceIcon1.src, title: "TRAVEL / TOUR", subtitle: "W E B S I T E" },
  { icon: serviceIcon2.src, title: "TRAVEL / TOUR", subtitle: "W E B S I T E" },
  { icon: serviceIcon3.src, title: "TRAVEL / TOUR", subtitle: "W E B S I T E" },
  { icon: serviceIcon4.src, title: "TRAVEL / TOUR", subtitle: "W E B S I T E" },
  { icon: serviceIcon2.src, title: "TRAVEL / TOUR", subtitle: "W E B S I T E" },
  { icon: serviceIcon6.src, title: "TRAVEL / TOUR", subtitle: "W E B S I T E" },
];
const repeatedServices = [...services, ...services];

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const slideLeft: Variants = {
  hidden: { x: 20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function DigitalMarketingHeroSection({
  backgroundImage = heroSectionImage3.src,
  awards = award,
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative w-full text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      variants={fadeIn}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>

      <div className="relative z-10 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mb-5">
          <div>
            <motion.p
              className="text-base md:text-lg max-w-md font-normal"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              Our Focus Is Leveraging PPC Ads That Deliver Targeted Traffic,
              Increased Conversions, And Measurable ROI For Your Online
              Storefront.
            </motion.p>
          </div>
          <div className="flex justify-end w-full">
            <div className="flex flex-wrap justify-between w-full  gap-6 max-w-[650px] ">
              <motion.div
                className="hidden md:block"
                variants={slideLeft}
                transition={{ duration: 0.6 }}
              >
                <div className="text-sm">Email</div>
                <div className="font-semibold text-base">
                  info@creativeagency360.com
                </div>
              </motion.div>

              <motion.div
                className="hidden md:block"
                variants={slideLeft}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-sm">Call Now</div>
                <div className="font-semibold text-base">+18045745376</div>
              </motion.div>

              <motion.div
                variants={slideLeft}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button className="bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-lg border-none text-sm md:text-base px-3 py-2">
                  Lets have a talk
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              variants={slideUp}
              transition={{ duration: 0.7 }}
            >
              <motion.span
                className="bg-white inline-block rounded-xl py-1 px-4 mb-2"
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text">
                  Not just websites
                </span>
              </motion.span>
              <span className="ml-2">We build</span>
              <br />
              digital experiences
              <br />
              that make brands
              <br />
              unforgettable.
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center gap-4 mt-6"
              variants={fadeIn}
            >
              <motion.div
                variants={slideUp}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Button className="bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-white px-8 py-3 text-base rounded-lg">
                  Get In Touch
                </Button>
              </motion.div>

              <div className="flex gap-6 items-center">
                {awards.map((awardImage, i) => (
                  <motion.div
                    key={i}
                    className=" md:w-16 md:h-16 w-14 h-14  items-center justify-center"
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Image
                      src={awardImage || "/placeholder.svg"}
                      width={500}
                      height={500}
                      alt={`Award ${i + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              className="bg-[#000000]/50 rounded-xl px-6 py-8 w-full max-w-[520px] ml-auto shadow-lg border border-[#1a3b49]/50"
              variants={slideLeft}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-2">Request a Quote</h2>
              <p className="text-sm text-gray-300 mb-6">
                Enhance your Design and start thriving by signing up for our
                services today.
              </p>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-2 bg-[#1a3b49]/40 placeholder:font-semibold font-semibold rounded-md text-white placeholder-white text-base outline-none"
                    style={{
                      boxShadow:
                        "0 0 0 1px rgba(102, 201, 193, 0.2), inset 0 0 0 1px rgba(102, 201, 193, 0.1)",
                    }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-2 bg-[#1a3b49]/40 placeholder:font-semibold font-semibold rounded-md text-white placeholder-white text-base outline-none"
                    style={{
                      boxShadow:
                        "0 0 0 1px rgba(102, 201, 193, 0.2), inset 0 0 0 1px rgba(102, 201, 193, 0.1)",
                    }}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-2 bg-[#1a3b49]/40 placeholder:font-semibold font-semibold rounded-md text-white placeholder-white text-base outline-none"
                    style={{
                      boxShadow:
                        "0 0 0 1px rgba(102, 201, 193, 0.2), inset 0 0 0 1px rgba(102, 201, 193, 0.1)",
                    }}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Write Your business description"
                    rows={4}
                    className="w-full p-2 bg-[#1a3b49]/40 placeholder:font-semibold font-semibold rounded-md text-white placeholder-white text-base resize-none outline-none"
                    style={{
                      boxShadow:
                        "0 0 0 1px rgba(102, 201, 193, 0.2), inset 0 0 0 1px rgba(102, 201, 193, 0.1)",
                    }}
                  />
                </div>

                <p className="text-xs text-gray-400 mt-2 mb-4 text-center">
                  Your data is protected with us — no worries, no compromises
                </p>

                <Button
                  type="button"
                  className="bg-gradient-to-r w-full from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-lg border-none text-sm md:text-base px-3 py-2"
                >
                  Get A Quote
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="relative z-10 mt-8 pb-8"
        variants={fadeIn}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="overflow-x-hidden py-4">
          <motion.div
            className="flex gap-x-6 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            {repeatedServices.map((service, i) => (
              <div key={i} className="snap-start shrink-0">
                <ServiceCategory
                  icon={service.icon}
                  title={service.title}
                  subtitle={service.subtitle}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function AnimatedServiceCategory({
  icon,
  title,
  subtitle,
}: CompactServiceCategoryProps) {
  return (
    <motion.div
      className="flex items-center justify-start w-full max-w-[120px] sm:max-w-[135px] md:max-w-[150px] px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-600/40 rounded-full shadow-sm"
      whileHover={{
        scale: 1.08,
        backgroundColor: "rgba(75, 85, 99, 0.6)",
        y: -3,
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Logo */}
      <motion.div
        className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white -ml-0.5 sm:-ml-1 mr-1.5 sm:mr-2"
        whileHover={{ rotate: 10, scale: 1.1 }}
      >
        {icon && (
          <Image
            src={icon || "/placeholder.svg"}
            alt={`${title} Logo`}
            width={500}
            height={500}
            className="w-4 h-4 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
          />
        )}
      </motion.div>

      {/* Text */}
      <motion.div className="text-white leading-none" whileHover={{ x: 2 }}>
        <h2 className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold tracking-wide">
          {title}
        </h2>
        <p className="text-[6px] sm:text-[7px] md:text-[8px] text-left tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] mt-0.5 sm:mt-1">
          {subtitle}
        </p>
      </motion.div>
    </motion.div>
  );
}

// Replace the ServiceCategory import with our animated version
// Replace this line:
// import ServiceCategory from "./service-category"
// With:
const ServiceCategory = AnimatedServiceCategory;
