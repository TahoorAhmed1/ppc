'use client'
import { motion } from "framer-motion"
import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Shield } from "lucide-react"
import { useState } from "react"
import { award1, award2, award3, award4, heroSectionImage3, serviceIcon1, serviceIcon2, serviceIcon3, serviceIcon4, serviceIcon5, serviceIcon6 } from "@/assets"
import ServiceCategory from "./service-category"

interface CompactServiceCategoryProps {
  icon: string
  title: string
  subtitle: string
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
const repeatedServices = [...services, ...services]; // repeat once for smooth looping

export default function DigitalMarketingHeroSection({
  backgroundImage = heroSectionImage3.src,
  awards = award,
}) {
  return (
    <div
      className="relative w-full text-white p-5 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>

      {/* Header - 20% smaller */}
      <header className="relative z-10 container mx-auto py-4 flex justify-between items-center">
        <div className="flex justify-center items-center">
          <p className="text-base md:text-lg max-w-md my-auto">
            Our Focus Is Leveraging PPC Ads That Deliver Targeted Traffic, Increased Conversions, And Measurable ROI For
            Your Online Storefront.
          </p>
        </div>
        <div className="flex gap-6">
          <div className="hidden md:block">
            <div className="text-xs">Email</div>
            <div className="font-semibold text-sm">info.advora@gmail.com</div>
          </div>
          <div className="hidden md:block">
            <div className="text-xs">Call Now</div>
            <div className="font-semibold text-sm">+18045745376</div>
          </div>
          <Button className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text py-1.5">
            Get Free Consultation
          </Button>
        </div>
      </header>

      {/* Hero Section - 20% smaller */}
      <div className="relative z-10 container mx-auto px-3 py-12 md:py-16 grid md:grid-cols-2 gap-10">
        <div className="flex flex-col py-5">
          <h1 className="text-4xl leading-13 font-bold">
            <div className="bg-white w-fit rounded-xl py-1 inline"><span className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text  px-1 rounded-xl">Not just websites</span></div> We build <br />digital
            experiences <br /> that make brands unforgettable.
          </h1>
          <div className="flex flex-wrap gap-3 items-center my-4">
            <Button className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED]  text-white px-6 py-4 text-base rounded-md">
              Get In Touch
            </Button>

            <div className="flex gap-2 items-center justify-center">
              {awards.map((awardImage, i) => (
                <div key={i} className="w-12 h-12 flex items-center justify-center">
                  <Image src={awardImage || "/placeholder.svg"} width={1000} height={1000} alt={`Award ${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <CompactRequestQuoteForm />
        </div>
      </div>


      <div className="relative z-10 px-9">
        <div className="overflow-x-hidden py-4">
          <motion.div
            className="flex gap-x-6 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
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
      </div>
    </div>
  )
}

// Compact version of RequestQuoteForm (20% smaller)
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

  return (
    <div className="w-full h-full max-w-md bg-gray-900/70 backdrop-blur-sm p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-3">Request a Quote</h2>
      <p className="text-gray-200 text-sm mb-4">
        Enhance your Design and start thriving by signing up for our services today.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <Input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="bg-gray-800/70 border-gray-700 text-white placeholder:text-gray-400 h-9 text-sm"
            required
          />
        </div>

        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-800/70 border-gray-700 text-white placeholder:text-gray-400 h-9 text-sm"
            required
          />
        </div>

        <div>
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-gray-800/70 border-gray-700 text-white placeholder:text-gray-400 h-9 text-sm"
            required
          />
        </div>

        <div>
          <Textarea
            name="description"
            placeholder="Write Your business description"
            value={formData.description}
            onChange={handleChange}
            className="bg-gray-800/70 border-gray-700 text-white placeholder:text-gray-400 min-h-[80px] text-sm"
            required
          />
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-300">
          <Shield className="w-3 h-3 text-gray-400" />
          <p>Your data is protected with us — no worries, no compromises</p>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white py-4 text-base"
        >
          Get A Quote
        </Button>
      </form>
    </div>
  )
}

// Compact version of ServiceCategory (20% smaller)

