"use client"

import { logo } from "@/assets"
import Image from "next/image"
import Link from "next/link"
import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <motion.footer
      className="border-t border-gray-200 pt-12 pb-8 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="container px-4 mx-auto space-y-12 lg:space-y-0 lg:flex lg:justify-between lg:items-start"
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
            <Image src={logo || "/placeholder.svg"} alt="Logo" width={200} height={200} />
          </motion.div>

          <motion.p className="text-gray-700 font-medium leading-relaxed" variants={itemVariants}>
            "We're a results-driven digital marketing agency focused on helping brands grow in a digital-first
            world."We're a results-driven digital marketing agency focused on helping brands grow in a digital-first
            world.
          </motion.p>
        </motion.div>

        {/* Right side: links grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 lg:mt-0"
          variants={containerVariants}
        >
          {/* Our Link */}
          <AnimatedFooterColumn title="Our Link" links={["About Us", "Careers", "We're Hiring", "Press & Media"]} />

          {/* Our Service */}
          <AnimatedFooterColumn
            title="Our Service"
            links={[
              "Social Media Marketing",
              "Digital Strategy",
              "SEO Optimization",
              "Data Analytics",
            ]}
          />

          {/* Resources */}
          <AnimatedFooterColumn title="Resources" links={["Blog", "Case Studies", "eBooks", "FAQ"]} />
        </motion.div>
      </motion.div>

      {/* Bottom copyright */}
      <motion.div
        className="mt-12 pt-4 border-t border-gray-200 text-center text-gray-600 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        © 2025 Advora, Inc. All rights reserved.
      </motion.div>
    </motion.footer>
  )
}

function AnimatedFooterColumn({ title, links }: { title: string; links: string[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  return (
    <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
      <motion.h3
        className="text-xl font-bold bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
      >
        {title}
      </motion.h3>
      <motion.ul className="space-y-3" variants={containerVariants}>
        {links.map((link, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              {link}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
