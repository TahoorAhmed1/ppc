"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import TestimonialCard from "./testimonial-card"

function chunkArray<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

export default function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(3)
  const [isLoaded, setIsLoaded] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      content:
        "Working with Advera has been a transformative experience for our business. Their strategic approach to digital marketing has significantly increased our online visibility and customer engagement.",
    },
    {
      id: 2,
      name: "David Thompson",
      role: "CEO, Tech Startup",
      content:
        "The team at Advera truly understands our vision and has helped us create a website that perfectly represents our brand. Their attention to detail and commitment to excellence is unmatched.",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "E-commerce Manager",
      content:
        "Since partnering with Advera, our online sales have increased by 40%. Their SEO and PPC strategies have been incredibly effective in driving qualified traffic to our website.",
    },
    {
      id: 4,
      name: "Emily Carter",
      role: "Product Manager",
      content:
        "Advera's creative team brought our product to life. Their branding strategy helped us stand out in a crowded market.",
    },
    {
      id: 5,
      name: "James Wilson",
      role: "Operations Head",
      content: "Professional, punctual, and results-driven. Advera has been our go-to agency for all things digital.",
    },
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      content:
        "Working with Advera has been a transformative experience for our business. Their strategic approach to digital marketing has significantly increased our online visibility and customer engagement.",
    },
    {
      id: 2,
      name: "David Thompson",
      role: "CEO, Tech Startup",
      content:
        "The team at Advera truly understands our vision and has helped us create a website that perfectly represents our brand. Their attention to detail and commitment to excellence is unmatched.",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "E-commerce Manager",
      content:
        "Since partnering with Advera, our online sales have increased by 40%. Their SEO and PPC strategies have been incredibly effective in driving qualified traffic to our website.",
    },
    {
      id: 4,
      name: "Emily Carter",
      role: "Product Manager",
      content:
        "Advera's creative team brought our product to life. Their branding strategy helped us stand out in a crowded market.",
    },
    {
      id: 5,
      name: "James Wilson",
      role: "Operations Head",
      content: "Professional, punctual, and results-driven. Advera has been our go-to agency for all things digital.",
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth
      if (vw < 640) setItemsPerSlide(1)
      else if (vw < 1024) setItemsPerSlide(2)
      else setItemsPerSlide(3)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    setIsLoaded(true)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const slides = chunkArray(testimonials, itemsPerSlide)

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // Animation variants
  const pulse: any = {
    hidden: { scale: 0.9, opacity: 0.3 },
    visible: {
      scale: [1, 1.05, 1],
      opacity: [0.3],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        duration: 3,
      },
    },
  }

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="review"
      className="py-12 md:py-20 bg-[#f9f9f9] relative overflow-hidden"
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
          className="absolute md:top-[10%] top-[5%] left-[8%] w-[10vw] h-[10vw] md:w-[8vw] md:h-[8vw] rounded-full bg-gradient-to-r from-[#65CE5C]/30 to-[#3DB1B1]/20 opacity-40 pointer-events-none"
        ></motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={pulse}
          transition={{ delay: 0.3 }}
          className="absolute md:bottom-[10%] bottom-[5%] right-[8%] w-[12vw] h-[12vw] md:w-[9vw] md:h-[9vw] rounded-full bg-gradient-to-r from-[#209CEB]/30 to-[#65CE5C]/20 opacity-30 pointer-events-none"
        ></motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={pulse}
          transition={{ delay: 0.6 }}
          className="absolute md:top-[20%] top-[15%] right-[12%] w-[7vw] h-[7vw] md:w-[6vw] md:h-[6vw] rounded-full bg-gradient-to-r from-[#65CE5C]/40 to-[#1F9BED]/30 opacity-25 pointer-events-none"
        ></motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={pulse}
          transition={{ delay: 0.9 }}
          className="absolute md:bottom-[20%] bottom-[15%] left-[15%] w-[5vw] h-[5vw] md:w-[4vw] md:h-[4vw] rounded-full bg-gradient-to-r from-[#209CEB]/30 to-[#3DB1B1]/20 opacity-25 pointer-events-none"
        ></motion.div>
      </motion.div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center gap-3 text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1C2D44] ">VIEW REVIEWS</h2>
          <h3 className="text-5xl font-bold  text-[#3DB1B1]">
            Hear from Our Success Stories
          </h3>
          <p className="max-w-[500px] text-[#000000] text-lg mt-2">
            Real clients, real results. Discover how we've partnered with brands
            like yours to deliver measurable success
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {slides.map((slide, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div
                    className={`grid gap-6 ${
                      itemsPerSlide === 1
                        ? "grid-cols-1"
                        : itemsPerSlide === 2
                        ? "md:grid-cols-2"
                        : "lg:grid-cols-3"
                    }`}
                  >
                    {slide.map((testimonial) => (
                      <TestimonialCard
                        key={testimonial.id}
                        testimonial={testimonial}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-6">
            <Button
              variant="outline"
              size="icon"
              className="bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-white border-white rounded-full hover:opacity-90 transition-opacity"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </Button>

            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    activeSlide === idx
                      ? "bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED]"
                      : "bg-gray-300"
                  }`}
                  onClick={() => setActiveSlide(idx)}
                >
                  <span className="sr-only">Go to slide {idx + 1}</span>
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-white border-white rounded-full hover:opacity-90 transition-opacity"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
