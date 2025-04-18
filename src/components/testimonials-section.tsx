"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
      content:
        "Professional, punctual, and results-driven. Advera has been our go-to agency for all things digital.",
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
      content:
        "Professional, punctual, and results-driven. Advera has been our go-to agency for all things digital.",
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
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const slides = chunkArray(testimonials, itemsPerSlide)

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <section className="py-12 md:py-20 bg-[#f9f9f9]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-3 text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1C2D44] ">VIEW REVIEWS</h2>
          <h3 className="text-5xl font-bold  text-[#3DB1B1]">
            Hear from Our Success Stories
          </h3>
          <p className="max-w-[500px] text-[#000000] text-base mt-2">
            Real clients, real results. Discover how we’ve partnered with brands
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
                      <Card
                        key={testimonial.id}
                        className="bg-[#1C2D44] text-white rounded-2xl border-none p-6 flex flex-col justify-between h-full"
                      >
                        <CardContent className="p-0">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300" />
                            <div>
                              <p className="font-semibold text-white">
                                {testimonial.name}
                              </p>
                              <p className="text-sm text-gray-300">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                          <p className="text-white text-sm leading-relaxed">
                            {testimonial.content}
                          </p>
                        </CardContent>
                      </Card>
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
              className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-white border-white rounded-full"
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
                      ? "bg-gradient-to-r from-[#65CF5F] to-[#1F9BED]"
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
              className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-white border-white rounded-full"
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
