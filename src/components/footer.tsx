"use client"

import { logo } from "@/assets"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const pulse: any = {
    hidden: { scale: 0.9, opacity: 0.4 },
    visible: {
      scale: [1, 1.05, 1],
      opacity: [0.5],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        duration: 3,
      },
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      className="border-t border-gray-200 pt-12 pb-8 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background animated balls */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={pulse}
          className="absolute md:top-[15%] top-[10%] left-[5%] w-[8vw] h-[8vw] md:w-[6vw] md:h-[6vw] rounded-full bg-gradient-to-r from-[#65CE5C]/40 to-[#3DB1B1]/30 opacity-50 pointer-events-none"
        ></motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={pulse}
          transition={{ delay: 0.3 }}
          className="absolute md:bottom-[15%] bottom-[10%] right-[5%] w-[10vw] h-[10vw] md:w-[7vw] md:h-[7vw] rounded-full bg-gradient-to-r from-[#209CEB]/40 to-[#65CE5C]/30 opacity-40 pointer-events-none"
        ></motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={pulse}
          transition={{ delay: 0.6 }}
          className="absolute md:top-[60%] top-[70%] left-[20%] w-[6vw] h-[6vw] md:w-[4vw] md:h-[4vw] rounded-full bg-gradient-to-r from-[#65CE5C]/50 to-[#1F9BED]/40 opacity-40 pointer-events-none"
        ></motion.div>
      </motion.div>

      <motion.div
        className="container px-4 mx-auto space-y-12 lg:space-y-0 lg:flex lg:justify-between lg:items-start relative z-10 gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left side: logo and newsletter */}
        <motion.div className="max-w-lg space-y-6" variants={itemVariants}>
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={logo || "/placeholder.svg"}
              alt="Logo"
              width={200}
              height={200}
            />
          </motion.div>

          <motion.p
            className="text-gray-700 font-medium leading-relaxed"
            variants={itemVariants}
          >
            "We're a results-driven digital marketing agency focused on helping
            brands grow in a digital-first world."We're a results-driven digital
            marketing agency focused on helping brands grow in a digital-first
            world."
          </motion.p>
        </motion.div>

        {/* Right side: links grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  mt-12 lg:mt-0"
          variants={containerVariants}
        >
          {/* Our Link */}
          <AnimatedFooterColumn
            title="Our Link"
            links={["About Us", "Services", "Portfolio", "Contact Us"]}
          />

          <div className="space-y-4 text-gray-700">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text ">
              Policy
            </h3>
            <div className="flex flex-col space-y-4">
              <Link href={"/privacy"}>Privacy</Link>
              <Link href={"/terms-&-condition"}>Terms & Condition</Link>
            </div>
          </div>
          <div className="space-y-4 text-gray-700">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text">
              Contact us
            </h3>

            <div className="flex items-center gap-2">
              <a
                href="mailto:support@creativeagency360.com"
                className="flex items-center gap-2"
              >
                <Mail className="w-5 h-5 text-[#65CF5F]" />
                <span>support@creativeagency360.com</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#65CF5F]" />
              <a href="tel:+18045745376">+1 (804) 574 5376</a>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-8 h-8 text-[#65CF5F]" />
              <p className="text-sm">2206 ATWOOD DR ANDERSON, INDIANA 46016</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom copyright */}
      <motion.div
        className="mt-12 pt-4 border-t border-gray-200 text-center text-gray-600 text-sm relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        © 2025 Creative Creative Agency 360, Inc. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}

function AnimatedFooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h3
        className="text-xl font-bold bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
      >
        {title}
      </motion.h3>
      <motion.ul className="space-y-3" variants={containerVariants}>
        {links.map((link, index) => {
          const href = `#${link.toLowerCase().replace(" ", "")}`;
          return (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <a href={href} className="text-gray-700 hover:text-gray-900">
                {link}
              </a>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
}


