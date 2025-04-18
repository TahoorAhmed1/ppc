"use client"
import { motion, type Variants } from "framer-motion"
import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Shield } from "lucide-react"
import { useState } from "react"
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
} from "@/assets"

interface CompactServiceCategoryProps {
  icon: string
  title: string
  subtitle: string
}

// Mock award images for demonstration
const award = [award1.src, award2.src, award3.src, award4.src]
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
]
const repeatedServices = [...services, ...services] // repeat once for smooth looping

// Add animation variants after the repeatedServices constant
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const slideUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

const slideRight: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
}

const slideLeft: Variants = {
  hidden: { x: 20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

// Update the main component to use motion.div instead of div for the container
export default function DigitalMarketingHeroSection({ backgroundImage = heroSectionImage3.src, awards = award }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative w-full text-white p-5 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      variants={fadeIn}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>

      {/* Header - now animated */}
      <motion.header
        className="relative z-10 container mx-auto py-4 flex flex-col sm:flex-row justify-between items-center gap-4"
        variants={stagger}
      >
        <motion.div
          className="flex justify-center items-center"
          variants={slideRight}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm sm:text-base md:text-lg max-w-md my-auto text-center sm:text-left">
            Our Focus Is Leveraging PPC Ads That Deliver Targeted Traffic,
            Increased Conversions, And Measurable ROI For Your Online
            Storefront.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-6"
          variants={stagger}
        >
          <motion.div
            className="hidden sm:block md:block"
            variants={slideLeft}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -2, x: -2 }}
          >
            <div className="text-xs">Email</div>
            <div className="font-semibold text-sm">
              info.Creative Agency 360@gmail.com
            </div>
          </motion.div>

          <motion.div
            className="hidden sm:block md:block"
            variants={slideLeft}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -2, x: -2 }}
          >
            <div className="text-xs">Call Now</div>
            <div className="font-semibold text-sm">+18045745376</div>
          </motion.div>
          <motion.div
            variants={slideLeft}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text py-1.5 text-sm sm:text-base">
              Get Free Consultation
            </Button>
          </motion.div>
        </motion.div>
      </motion.header>

      {/* Hero Section - now animated */}
      <motion.div
        className="relative z-10 container mx-auto px-3 py-8 sm:py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
        variants={stagger}
      >
        <motion.div
          className="flex flex-col py-3 sm:py-5 text-center md:text-left"
          variants={stagger}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl leading-9 sm:leading-13 font-bold"
            variants={slideUp}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="bg-white w-fit rounded-xl py-1 inline mx-auto md:mx-0"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <span className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text px-1 rounded-xl ">
                Not just websites
              </span>
            </motion.div>{" "}
            We build <br className="hidden sm:block" />
            digital experiences <br className="hidden sm:block" /> that make
            brands unforgettable.
          </motion.h1>
          <motion.div
            className="flex flex-wrap gap-3 items-center justify-center md:justify-start my-4"
            variants={stagger}
            transition={{ delayChildren: 0.4 }}
          >
            <motion.div
              variants={slideUp}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-white px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base rounded-md">
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-1 sm:gap-2 items-center justify-center"
              variants={stagger}
            >
              {awards.map((awardImage, i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center"
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                >
                  <Image
                    src={awardImage || "/placeholder.svg"}
                    width={1000}
                    height={1000}
                    alt={`Award ${i}`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          variants={slideLeft}
          transition={{ duration: 0.8 }}
        >
          <CompactRequestQuoteForm />
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 px-3 sm:px-6 md:px-9"
        variants={fadeIn}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="overflow-x-hidden py-2 sm:py-4">
          <motion.div
            className="flex gap-x-3 sm:gap-x-4 md:gap-x-6 whitespace-nowrap"
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

// Update CompactRequestQuoteForm to use motion components
function CompactRequestQuoteForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const formControls: Variants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <motion.div
      className="w-full h-full max-w-full sm:max-w-md bg-gray-900/70 backdrop-blur-sm p-4 sm:p-6 rounded-lg"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3"
        variants={slideUp}
        transition={{ duration: 0.6 }}
      >
        Request a Quote
      </motion.h2>
      <motion.p
        className="text-gray-200 text-xs sm:text-sm mb-3 sm:mb-4"
        variants={slideUp}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Enhance your Design and start thriving by signing up for our services today.
      </motion.p>

      <motion.form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3" variants={stagger}>
        <motion.div
          variants={formControls}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02, x: 3 }}
        >
          <Input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="bg-gray-800/70 border-gray-700 text-white placeholder:text-gray-400 h-8 sm:h-9 text-xs sm:text-sm"
            required
          />
        </motion.div>

        <motion.div
          variants={formControls}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02, x: 3 }}
        >
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-800/70 border-gray-700 text-white placeholder:text-gray-400 h-8 sm:h-9 text-xs sm:text-sm"
            required
          />
        </motion.div>

        <motion.div
          variants={formControls}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.02, x: 3 }}
        >
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-gray-800/70 border-gray-700 text-white placeholder:text-gray-400 h-8 sm:h-9 text-xs sm:text-sm"
            required
          />
        </motion.div>

        <motion.div
          variants={formControls}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.02, x: 3 }}
        >
          <Textarea
            name="description"
            placeholder="Write Your business description"
            value={formData.description}
            onChange={handleChange}
            className="bg-gray-800/70 border-gray-700 text-white placeholder:text-gray-400 min-h-[60px] sm:min-h-[80px] text-xs sm:text-sm"
            required
          />
        </motion.div>

        <motion.div
          className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-gray-300"
          variants={formControls}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Shield className="w-3 h-3 text-gray-400" />
          <p>Your data is protected with us — no worries, no compromises</p>
        </motion.div>

        <motion.div
          variants={formControls}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white py-2 sm:py-3 md:py-4 text-sm sm:text-base"
          >
            Get A Quote
          </Button>
        </motion.div>
      </motion.form>
    </motion.div>
  )
}

// Replace the AnimatedServiceCategory function with this updated version that matches the original structure:

function AnimatedServiceCategory({ icon, title, subtitle }: CompactServiceCategoryProps) {
  return (
    <motion.div
      className="flex items-center justify-start w-full max-w-[120px] sm:max-w-[135px] md:max-w-[150px] px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-600/40 rounded-full shadow-sm"
      whileHover={{
        scale: 1.08,
        backgroundColor: "rgba(75, 85, 99, 0.6)",
        y: -3,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Logo */}
      <motion.div
        className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white -ml-0.5 sm:-ml-1 mr-1.5 sm:mr-2"
        whileHover={{ rotate: 10, scale: 1.1 }}
      >
        {icon && (
          <Image
            src={icon || "/placeholder.svg"}
            alt={`${title} Logo`}
            width={24}
            height={24}
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 object-contain"
          />
        )}
      </motion.div>

      {/* Text */}
      <motion.div className="text-white leading-none" whileHover={{ x: 2 }}>
        <h2 className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold tracking-wide">{title}</h2>
        <p className="text-[6px] sm:text-[7px] md:text-[8px] text-left tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] mt-0.5 sm:mt-1">
          {subtitle}
        </p>
      </motion.div>
    </motion.div>
  )
}

// Replace the ServiceCategory import with our animated version
// Replace this line:
// import ServiceCategory from "./service-category"
// With:
const ServiceCategory = AnimatedServiceCategory
