"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
  serviceIcon5,
  serviceIcon6,
} from "@/assets/index";
import { notify } from "@/lib/utils";
import { AnimatedServiceCategory } from "./animated-service-category";
import Link from "next/link";
import { useFormContact } from "@/store/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(6, { message: "Please enter a valid phone number" }),
  message: z
    .string()
    .min(5, { message: "Description must be at least 5 characters" }),
});

type ContactFormData = z.infer<typeof formSchema>;

// Mock award images for demonstration
const award = [award1.src, award2.src, award3.src, award4.src];
const services = [
  { icon: serviceIcon1.src, title: "REAL ESTATE", subtitle: "W E B S I T E" },
  { icon: serviceIcon2.src, title: "TRAVEL / TOUR", subtitle: "W E B S I T E" },
  {
    icon: serviceIcon3.src,
    title: "PHARMA / MEDIC",
    subtitle: "W E B S I T E",
  },
  { icon: serviceIcon4.src, title: "TECHNOLOGY", subtitle: "W E B S I T E" },
  {
    icon: serviceIcon5.src,
    title: "PHARMA / MEDIC",
    subtitle: "W E B S I T E",
  },
  { icon: serviceIcon6.src, title: "E-COMMERCE", subtitle: "W E B S I T E" },
];

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
}: any) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { setIsOpen }: any = useFormContact();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });

      try {
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();
        formData.append("ip_address", ipData.ip);
      } catch (error) {
        console.error("Could not fetch IP address:", error);
      }

      const response = await fetch(
        "https://demo7.obistest.online/api/store-contact-us-form",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSuccess(true);
      notify("success", "Message sent successfully!");

      setTimeout(() => {
        form.reset();
        setIsSuccess(false);
      }, 2000);
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-10">
          <div className="">
            <motion.h1
              className="text-4xl lg:text-[60px] font-bold leading-tight"
              variants={slideUp}
              transition={{ duration: 0.7 }}
            >
              <motion.span
                className="bg-white inline-block rounded-xl py-1 px-4 mb-2"
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text pb-2">
                  Not Just Websites
                </span>
              </motion.span>
              <span className="ml-2">We </span>
              <br />
              Build Digital Experiences
              <br />
              that Make Brands
              <br />
              Unforgettable.
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center gap-4 lg:mt-14 mt-6"
              variants={fadeIn}
            >
              <motion.div
                variants={slideUp}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Button
                  onClick={() => setIsOpen(true)}
                  className="bg-gradient-to-r cursor-pointer h-12 from-[#65CF5F]/80 to-[#1F9BED] text-white px-8 py-3 text-base rounded-lg"
                >
                  Get a Quote
                </Button>
              </motion.div>

              <div className="flex gap-6 items-center">
                {awards.map((awardImage: any, i: any) => (
                  <motion.div
                    key={i}
                    className="md:w-16 md:h-16 w-14 h-14 items-center justify-center"
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
              className="bg-[#000000]/50 rounded-xl lg:px-10 px-6 py-8 w-full max-w-[600px] ml-auto shadow-lg border border-[#1a3b49]/50"
              variants={slideLeft}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">Request a Quote</h2>
              <p className="text-lg text-gray-300 mb-6 font-semibold">
                We Don’t Just Build Sites. We Build Brand Experiences.
              </p>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Full Name"
                            className="w-full p-4 h-11 bg-[#1a3b49]/40 placeholder:font-normal font-semibold rounded-md text-white placeholder:text-slate-200  text-base outline-none"
                            style={{
                              boxShadow:
                                "0 0 0 1px rgba(102, 201, 193, 0.2), inset 0 0 0 1px rgba(102, 201, 193, 0.1)",
                            }}
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-4 h-11 bg-[#1a3b49]/40 placeholder:font-normal font-semibold rounded-md text-white placeholder:text-slate-200 text-base outline-none"
                            style={{
                              boxShadow:
                                "0 0 0 1px rgba(102, 201, 193, 0.2), inset 0 0 0 1px rgba(102, 201, 193, 0.1)",
                            }}
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full p-4 h-11 bg-[#1a3b49]/40 placeholder:font-normal font-semibold rounded-md text-white placeholder:text-slate-200 text-base outline-none"
                            style={{
                              boxShadow:
                                "0 0 0 1px rgba(102, 201, 193, 0.2), inset 0 0 0 1px rgba(102, 201, 193, 0.1)",
                            }}
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Write Your business description"
                            rows={4}
                            className="w-full p-4 h-32 bg-[#1a3b49]/40 placeholder:font-normal font-semibold rounded-md text-white placeholder:text-slate-200 text-base resize-none outline-none"
                            style={{
                              boxShadow:
                                "0 0 0 1px rgba(102, 201, 193, 0.2), inset 0 0 0 1px rgba(102, 201, 193, 0.1)",
                            }}
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />

                  <p className="text-xs text-gray-300 mt-2 mb-5 text-left">
                    <span className="font-medium">Disclaimer</span> : You agree
                    to receive conversation messages from CreativeAgency360.
                    This includes SMS messages for appointment scheduling,
                    appointment reminders, post-visit instructions, and billing
                    notifications. You may receive up to 2 messages per day;
                    message frequency may vary. To opt out, text STOP. For
                    assistance, text HELP or visit Website Message and data
                    rates may apply. See our
                    <Link
                      href={"/privacy"}
                      className="font-medium mx-1 underline"
                    >
                      Privacy Policy
                    </Link>
                    and{" "}
                    <Link
                      href={"/terms-&-condition"}
                      className="font-medium mx-1 underline"
                    >
                      {" "}
                      Terms and Conditions
                    </Link>
                    . STOP to any message to opt out.
                  </p>

                  <Button
                    type="submit"
                    className="bg-gradient-to-r w-full cursor-pointer from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-lg border-none text-sm md:text-base px-3 py-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </span>
                    ) : isSuccess ? (
                      "Submitted Successfully!"
                    ) : (
                      "Get A Quote"
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="relative z-10 mt-8 pb-8"
        variants={fadeIn}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {/* Use the AnimatedServiceCategory component */}
        <AnimatedServiceCategory services={services} />
      </motion.div>
    </motion.div>
  );
}
