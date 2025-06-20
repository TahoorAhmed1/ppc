"use client";

import type React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  offerIcon1,
  offerIcon2,
  offerIcon3,
  offerIcon4,
  offerIcon5,
  offerIcon6,
} from "@/assets";

interface ServiceItem {
  image: string;
  title: string;
  link: string;
  description: string;
}

const defaultServices: ServiceItem[] = [
  {
    image: offerIcon1.src,
    title: "SEO",
    link: "/seo",
    description:
      "Our expert SEO services help improve your website's visibility in search engines, driving more organic traffic and increasing your online presence.",
  },
  {
    image: offerIcon2.src,
    link: "/website-development-services",
    title: "Web Development",
    description:
      "We build stunning, responsive websites that not only look great but also perform exceptionally well across all devices.",
  },
  {
    image: offerIcon3.src,
    title: "Branding",
    link: "/branding-services",
    description:
      "Our branding services help establish a strong, recognizable identity for your business, creating a lasting impression.",
  },
  {
    image: offerIcon4.src,
    title: "App Development",
    link: "/app-development-services",
    description:
      "Creating user-friendly mobile apps for iOS and Android platforms that help your business reach a wider audience.",
  },
  {
    image: offerIcon5.src,
    title: "Email Marketing",
    link: "/email-marketing-services",
    description:
      "We help you reach your customers and prospects through targeted email campaigns that drive engagement and conversions.",
  },
  {
    image: offerIcon6.src,
    title: "Pay-Per-Click Advertising",
    link: "/ppc-management-services",
    description:
      "Our PPC advertising strategies help you reach potential customers at the right time, maximizing your ROI.",
  },
  {
    image: offerIcon1.src,
    title: "Digital Marketing",
    link: "/digital-marketing",
    description:
      "Comprehensive digital marketing strategies that help your business grow online through multiple channels and platforms.",
  },
  {
    image: offerIcon3.src,
    title: "Social Media Marketing",
    link: "/social-media-marketing-services",
    description:
      "Engaging social media campaigns that build your brand presence and connect with your target audience across platforms.",
  },
  {
    image: offerIcon2.src,
    title: "Writing & Publishing",
    link: "/writing-&-publishing-services",
    description:
      "Professional content writing and publishing services that help establish your authority and engage your audience with valuable information.",
  },
];

interface ServicesSectionProps {
  services?: ServiceItem[];
  title?: string;
  heading?: string;
  paragraph?: string;
  description?: string;
  buttonText?: string;
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const headingVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const MotionCard = motion(Card);

const NewServicesSection: React.FC<ServicesSectionProps> = ({
  services: propServices,
  title = "Why Choose Us",
  heading = "What We Offer",
  paragraph = "",
  buttonText = "Show More",
}) => {
  const services = propServices || defaultServices;
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(services.length / cardsPerPage);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto ">
        <motion.div
          className="flex flex-col data-center gap-2 text-center"
          variants={headingVariants}
        >
          <motion.h2
            className="text-xl sm:text-2xl font-bold text-[#1C2D44]"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          <motion.h3
            className="text-3xl sm:text-5xl font-extrabold text-[#41B4A7] mb-3"
            variants={itemVariants}
          >
            {heading}
          </motion.h3>
          <motion.p
            className="max-w-[700px] w-full mx-auto text-[#1C2D44] mb-8 text-sm sm:text-base text-center"
            variants={itemVariants}
          >
            {paragraph}
          </motion.p>
        </motion.div>

        <div className="grid gap-4 sm:gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {services
            .slice(currentIndex * cardsPerPage, (currentIndex + 1) * cardsPerPage)
            .map((service, index) => (
              <a href={service.link} key={currentIndex * cardsPerPage + index}>
                <MotionCard
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
              </a>
            ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0}
                className="bg-[#3DB1B1] hover:bg-[#1C2D44] text-white px-6 py-2 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </Button>
            </motion.div>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'bg-[#3DB1B1]' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                onClick={() => setCurrentIndex(Math.min(totalPages - 1, currentIndex + 1))}
                disabled={currentIndex === totalPages - 1}
                className="bg-[#3DB1B1] hover:bg-[#1C2D44] text-white px-6 py-2 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </Button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewServicesSection;