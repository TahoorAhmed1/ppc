"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { BookingModal } from "./booking-modal";

interface PricingPackage {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  features: string[];
  additionalFeatures: string[];
}

const ServicesCombo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PricingPackage | null>(
    null
  );

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const handleBookNow = () => {
    const combo: PricingPackage = {
      id: "combo-1",
      name: "All-in-One Combo",
      description: "Company Branding Solution",
      price: "1799",
      originalPrice: "3,599",
      features: [],
      additionalFeatures: [],
    };
    setSelectedPackage(combo);
    setIsModalOpen(true);
  };

  return (
    <motion.div
      className="container mx-auto py-12 sm:py-16 md:py-20 font-sans"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
        <motion.div className="lg:col-span-2" variants={itemVariants}>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4"
            variants={itemVariants}
          >
            ALL IN ONE <span className="text-black">COMBO</span>
          </motion.h1>
          <motion.p
            className="text-black text-base sm:text-lg mb-6 sm:mb-10"
            variants={itemVariants}
          >
            Our services are suitable for potential super-startups and brands to
            revamp for company
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-10"
            variants={itemVariants}
          >
            <motion.div className="space-y-8" variants={itemVariants}>
              <motion.div variants={itemVariants}>
                <motion.h2
                  className="text-black text-lg sm:text-xl font-bold mb-3 sm:mb-4"
                  variants={itemVariants}
                >
                  LOGO DESIGN SERVICES
                </motion.h2>
                <motion.ul
                  className="space-y-2 text-black"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0.5}
                >
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      5 Custom Logo Design Concepts
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Dedicated Designer Team
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">Icon Design</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      File Formats (PSD, PDF, AI, JPEG, PNG)
                    </span>
                  </motion.li>
                </motion.ul>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.h2
                  className="text-black text-lg sm:text-xl font-bold mb-3 sm:mb-4"
                  variants={itemVariants}
                >
                  STATIONARY SERVICES
                </motion.h2>
                <motion.ul
                  className="space-y-2 text-black"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0.5}
                >
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      MS Word Letterhead
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">Business Card</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">Letterhead</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Envelop, Fax Template
                    </span>
                  </motion.li>
                </motion.ul>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.h2
                  className="text-black text-lg sm:text-xl font-bold mb-3 sm:mb-4"
                  variants={itemVariants}
                >
                  SOCIAL MEDIA SERVICES
                </motion.h2>
                <motion.ul
                  className="space-y-2 text-black"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0.5}
                >
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Facebook Page Design
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Twitter Page Design
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      YouTube Page Design
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Google+ Page Design
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Instagram Page Design
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      All Final File Formats
                    </span>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </motion.div>

            <motion.div className="space-y-8" variants={itemVariants}>
              <motion.div variants={itemVariants}>
                <motion.h2
                  className="text-black text-lg sm:text-xl font-bold mb-3 sm:mb-4"
                  variants={itemVariants}
                >
                  WEBSITE SERVICES
                </motion.h2>
                <motion.ul
                  className="space-y-2 text-black"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0.5}
                >
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      10 Pages Website Design
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      CMS / Admin Panel
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Mobile Responsive
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Team of Expert Web Designer & Developer
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">8 Stock Images</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      5 Banner Design
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">Jquery Sliders</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Free Google Friendly Sitemap
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Complete W3C Certified HTML
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Complete Deployment
                    </span>
                  </motion.li>
                </motion.ul>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.h2
                  className="text-black text-lg sm:text-xl font-bold mb-3 sm:mb-4"
                  variants={itemVariants}
                >
                  VALUE-ADDED SERVICES
                </motion.h2>
                <motion.ul
                  className="space-y-2 text-black"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0.5}
                >
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      All Final File Formats
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      Dedicated Account Manager
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      100% Ownership Rights
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      100% Satisfaction Guarantee
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      100% Unique Design Guarantee
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    variants={listItemVariants}
                    custom={(index: number) => index * 0.1}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-black mr-2 flex-shrink-0 font-medium">
                      ›
                    </span>
                    <span className="text-sm sm:text-base">
                      100% Money-Back Guarantee
                    </span>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="bg-gradient-to-r from-black/90 to-black/90 rounded-2xl px-8 py-10 sm:px-10 sm:py-12 shadow-2xl text-white flex flex-col items-center mt-10 space-y-6 sm:space-y-8 max-w-lg mx-auto h-120"
          variants={itemVariants}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            transition: { duration: 0.3 },
          }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-center"
            variants={itemVariants}
          >
            Combo Packages
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-center text-white/90 font-medium max-w-sm"
            variants={itemVariants}
          >
            A complete company branding solution tailored for growth-focused
            businesses.
          </motion.p>

          <motion.div
            className="flex items-start justify-center space-x-4 sm:space-x-5"
            variants={itemVariants}
          >
            <motion.span
              className="text-5xl sm:text-6xl font-extrabold"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
            >
              $1799
            </motion.span>
            <motion.div
              className="flex flex-col leading-snug"
              variants={itemVariants}
            >
              <span className="line-through text-sm sm:text-base text-white/70">
                $2599
              </span>
              <span className="text-xs sm:text-sm font-medium">
                Limited Time Only
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white/10 px-5 py-2.5 rounded-lg backdrop-blur-md text-white text-center text-base sm:text-lg font-medium"
            variants={itemVariants}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          >
            3 Month Easy Installments
          </motion.div>

          <motion.button
            onClick={handleBookNow}
            className="bg-white text-black hover:text-black cursor-pointer px-7 py-3 rounded-xl text-base sm:text-lg font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105 duration-200"
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Order Now
          </motion.button>
        </motion.div>
      </div>

      {isModalOpen && selectedPackage && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          packageId={selectedPackage.id}
          packageName={selectedPackage.name}
          packagePrice={selectedPackage.price}
        />
      )}
    </motion.div>
  );
};

export default ServicesCombo;
