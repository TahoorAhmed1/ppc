"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import TestimonialCard from "./testimonial-card";
import {
  profileImage1,
  profileImage2,
  profileImage3,
  profileImage4,
  profileImage5,
  profileImage6,
  profileImage7,
  profileImage8,
} from "@/assets";

export default function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const testimonials = [
    {
      id: 1,
      avatar: profileImage1.src,
      name: "Sarah Johnson",
      role: "Marketing Director",
      content:
        "Working with Advera has been a transformative experience for our business. Their strategic approach to digital marketing has significantly increased our online visibility and customer engagement.",
    },
    {
      id: 2,
      avatar: profileImage2.src,
      name: "David Thompson",
      role: "CEO, Tech Startup",
      content:
        "The team at Advera truly understands our vision and has helped us create a website that perfectly represents our brand. Their attention to detail and commitment to excellence is unmatched.",
    },
    {
      id: 3,
      avatar: profileImage3.src,
      name: "Michael Rodriguez",
      role: "E-commerce Manager",
      content:
        "Since partnering with Advera, our online sales have increased by 40%. Their SEO and PPC strategies have been incredibly effective in driving qualified traffic to our website.",
    },
    {
      id: 4,
      avatar: profileImage4.src,
      name: "Emily Carter",
      role: "Product Manager",
      content:
        "Advera's creative team brought our product to life. Their branding strategy helped us stand out in a crowded market.",
    },
    {
      id: 5,
      avatar: profileImage5.src,
      name: "James Wilson",
      role: "Operations Head",
      content:
        "Professional, punctual, and results-driven. Advera has been our go-to agency for all things digital.",
    },
    {
      id: 6,
      avatar: profileImage6.src,
      name: "Emily Carter",
      role: "Product Manager",
      content:
        "Advera's creative team brought our product to life. Their branding strategy helped us stand out in a crowded market.",
    },
    {
      id: 7,
      avatar: profileImage7.src,
      name: "James Wilson",
      role: "Operations Head",
      content:
        "Professional, punctual, and results-driven. Advera has been our go-to agency for all things digital.",
    },
    {
      id: 8,
      avatar: profileImage8.src,
      name: "James Wilson",
      role: "Operations Head",
      content:
        "Professional, punctual, and results-driven. Advera has been our go-to agency for all things digital.",
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section
      id="review"
      className="py-12 md:py-20 bg-[#f9f9f9] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute md:top-[10%] top-[5%] left-[8%] w-[10vw] h-[10vw] md:w-[8vw] md:h-[8vw] rounded-full bg-gradient-to-r from-[#65CE5C]/30 to-[#3DB1B1]/20 opacity-40 pointer-events-none"></div>
        <div className="absolute md:bottom-[10%] bottom-[5%] right-[8%] w-[12vw] h-[12vw] md:w-[9vw] md:h-[9vw] rounded-full bg-gradient-to-r from-[#209CEB]/30 to-[#65CE5C]/20 opacity-30 pointer-events-none"></div>
        <div className="absolute md:top-[20%] top-[15%] right-[12%] w-[7vw] h-[7vw] md:w-[6vw] md:h-[6vw] rounded-full bg-gradient-to-r from-[#65CE5C]/40 to-[#1F9BED]/30 opacity-25 pointer-events-none"></div>
        <div className="absolute md:bottom-[20%] bottom-[15%] left-[15%] w-[5vw] h-[5vw] md:w-[4vw] md:h-[4vw] rounded-full bg-gradient-to-r from-[#209CEB]/30 to-[#3DB1B1]/20 opacity-25 pointer-events-none"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center gap-3 text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1C2D44]">VIEW REVIEWS</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#3DB1B1]">
            Hear from Our Success Stories
          </h3>
          <p className="max-w-[500px] text-base md:text-lg mt-2 text-[#000000]">
            Real clients, real results. Discover how we've partnered with brands
            like yours to deliver measurable success
          </p>
        </div>

        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8">
            <CarouselPrevious
              variant="outline"
              className="static h-8 w-8 md:h-10 md:w-10  cursor-pointer mt-6 md:mt-8 bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-white border-white rounded-full hover:opacity-90 transition-opacity"
            />

            <div className="flex gap-1 md:gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                    current === index
                      ? "bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED]"
                      : "bg-gray-300"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                >
                  <span className="sr-only">Go to slide {index + 1}</span>
                </button>
              ))}
            </div>

            <CarouselNext
              variant="outline"
              className="static h-8 w-8 md:h-10 md:w-10 mt-6 md:mt-8 cursor-pointer  bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-white border-white rounded-full hover:opacity-90 transition-opacity"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
