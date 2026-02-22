"use client";

import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

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
import { Typewriter } from "react-simple-typewriter";

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
import { useFormContact } from "@/store/form";
import { AnimatedServiceCategory } from "./animated-service-category";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(6, { message: "Please enter a valid phone number" }),
  message: z
    .string()
    .min(5, { message: "Description must be at least 5 characters" }),
});

type ContactFormData = z.infer<typeof formSchema>;

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

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export default function WebsiteDevelopmentHeroSection({
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
        "/api/store-contact-us-form",
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
    <div
      className="relative w-full text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>

      <motion.div
        className="relative z-10 container py-6"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center mt-10">
          <motion.div className="w-full" variants={fadeIn}>
            <motion.h1
              className="text-[46px] lg:text-[60px] font-bold leading-tight h-[350px]"
              variants={slideIn}
            >
              <motion.span
                className="inline-block bg-white rounded-xl py-1 px-2 mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <span className="bg-gradient-to-r from-black/80 to-black bg-clip-text text-transparent">
                  Not Just Websites
                </span>
              </motion.span>
              <motion.span className="md:ml-2.5" variants={fadeIn}>
                We Build
              </motion.span>
              <motion.span className="text-white" variants={fadeIn}>
                <Typewriter
                  words={[
                    " Digital Experiences That Make Brands Unforgettable.",
                  ]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={90}
                  deleteSpeed={0}
                  delaySpeed={999999}
                />
              </motion.span>
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-start gap-4 lg:mt-14 mt-6"
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setIsOpen(true)}
                  className="bg-gradient-to-r cursor-pointer h-13 from-black/80 to-black text-white px-8 py-3 text-base rounded-lg"
                >
                  Get a Quote
                </Button>
              </motion.div>

              <motion.div
                className="flex gap-6 items-center"
                variants={staggerContainer}
              >
                {awards.map((awardImage: any, i: any) => (
                  <motion.div
                    key={i}
                    className="md:w-16 md:h-16 w-14 h-14 items-center justify-center"
                    variants={fadeIn}
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                      transition: { delay: 0.5 + i * 0.1, duration: 0.5 },
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 },
                    }}
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
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div
              className="relative p-[4px] rounded-xl border-animation-wrapper max-w-[550px] ml-auto shadow-lg"
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="bg-slate-950 rounded-xl lg:px-10 px-6 py-8 w-full">
                <h2 className="text-3xl font-bold mb-4">Request a Quote</h2>
                <p className="text-lg text-gray-300 mb-6 font-semibold">
                  We Don't Just Build Sites. We Build Brand Experiences.
                </p>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    {["name", "email", "phone", "message"].map(
                      (fieldName, index) => (
                        <motion.div
                          key={fieldName}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.5 + index * 0.1,
                            duration: 0.5,
                          }}
                        >
                          <FormField
                            control={form.control}
                            name={fieldName as keyof ContactFormData}
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  {fieldName === "message" ? (
                                    <Textarea
                                      {...field}
                                      placeholder="Write Your business description"
                                      rows={4}
                                      className="w-full p-4 h-32 bg-[#1a3b49]/20 placeholder:font-normal font-semibold rounded-md text-white placeholder:text-slate-200 text-base resize-none outline-none"
                                      style={{
                                        boxShadow:
                                          "0 0 0 1px rgba(102, 201, 193, 0.2), inset 0 0 0 1px rgba(102, 201, 193, 0.1)",
                                      }}
                                    />
                                  ) : (
                                    <Input
                                      {...field}
                                      type={
                                        fieldName === "email"
                                          ? "email"
                                          : fieldName === "phone"
                                          ? "tel"
                                          : "text"
                                      }
                                      placeholder={
                                        fieldName === "name"
                                          ? "Full Name"
                                          : fieldName === "email"
                                          ? "Email Address"
                                          : "Phone Number"
                                      }
                                      className="w-full p-4 h-11 bg-[#1a3b49]/20 placeholder:font-normal font-semibold rounded-md text-white placeholder:text-slate-200 text-base outline-none"
                                      style={{
                                        boxShadow:
                                          "0 0 0 1px rgba(102, 201, 193, 0.2), inset 0 0 0 1px rgba(102, 201, 193, 0.1)",
                                      }}
                                    />
                                  )}
                                </FormControl>
                                <FormMessage className="text-xs text-red-400" />
                              </FormItem>
                            )}
                          />
                        </motion.div>
                      )
                    )}

                    <motion.p
                      className="text-xs text-gray-300 mt-2 mb-5 text-left"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      <span className="font-medium">Disclaimer</span>: You agree
                      to receive messages from NexuzGlobal. This includes
                      SMS messages for appointment scheduling, reminders, and
                      billing. Message frequency may vary. Text STOP to opt out.
                      See our{" "}
                      <a
                        target="_blank"
                        href="/privacy"
                        className="font-medium mx-1 underline"
                        rel="noreferrer"
                      >
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a
                        target="_blank"
                        href="/terms-&-condition"
                        className="font-medium mx-1 underline"
                        rel="noreferrer"
                      >
                        Terms and Conditions
                      </a>
                      .
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1, duration: 0.5 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        type="submit"
                        className="bg-gradient-to-r w-full hover:scale-105 transition-all cursor-pointer from-black/80 to-black hover:opacity-90 text-white rounded-lg border-none text-sm md:text-base px-3 py-2"
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
                    </motion.div>
                  </form>
                </Form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-10 mt-8 pb-8">
        <AnimatedServiceCategory services={services} />
      </div>
    </div>
  );
}
