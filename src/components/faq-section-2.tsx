"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2, Plus } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import faq from "../assets/images/faq-background.png";
import { notify } from "@/lib/utils";
const contactSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  number: z.string().min(10, { message: "Please enter a valid phone number" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Custom animated components
const MotionCard = motion(Card);
const MotionCardHeader = motion(CardHeader);
const MotionCardContent = motion(CardContent);
const MotionAccordionItem = motion(AccordionItem);
const MotionInput = motion(Input);
const MotionButton = motion(Button);
const MotionLink = motion(Link);

export default function AnimatedFaqSection2({
  enableGradientBackground = true,
}: {
  enableGradientBackground?: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      number: "",
    },
  });

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

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const accordionItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://demo7.obistest.online/api/store-subscribtion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            number: data.number,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Subscription failed");
      }

      setIsSuccess(true);

      notify("success", "Subscription successful!");
      setTimeout(() => {
        reset();
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      className="py-16 md:py-20 w-full bg-no-repeat bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${faq.src})`,
      }}
      initial="hidden"
      animate={"visible"}
      variants={containerVariants}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -bottom-10 -left-10 w-40 h-40 border-t border-l border-teal-500/20 rounded-tl-3xl"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 border-b border-r border-teal-500/20 rounded-br-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="grid gap-12 lg:grid-cols-3 items-center"
          variants={sectionVariants}
        >
          <motion.div
            className="space-y-6 lg:col-span-2"
            variants={sectionVariants}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              <MotionAccordionItem
                value="item-1"
                className="border-b border-gray-700/50"
                variants={accordionItemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <AccordionTrigger className="md:text-lg text-base font-medium text-white group w-full text-left  w-full">
                  How long does it take to build a website?
                  <div className="ml-auto md:flex  hidden  h-6 w-6 items-center justify-center rounded-full border border-teal-500/50 text-teal-500 shrink-0">
                    <Plus className="h-4 w-4 group-data-[state=open]:rotate-45 transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300/90 text-sm ">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    It depends on the project, but most websites are ready in
                    3–6 weeks.
                  </motion.div>
                </AccordionContent>
              </MotionAccordionItem>

              <MotionAccordionItem
                value="item-2"
                className="border-b border-gray-700/50"
                variants={accordionItemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <AccordionTrigger className="md:text-lg text-base font-medium text-white group w-full text-left ">
                  Can I make changes to the website after it's live?
                  <div className="ml-auto  md:flex  hidden h-6 w-6 items-center justify-center rounded-full border border-teal-500/50 text-teal-500 shrink-0">
                    <Plus className="h-4 w-4 group-data-[state=open]:rotate-45 transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300/90 text-sm ">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    Yes! We use easy-to-manage platforms so you can update
                    content anytime—no coding needed.
                  </motion.div>
                </AccordionContent>
              </MotionAccordionItem>

              <MotionAccordionItem
                value="item-3"
                className="border-b border-gray-700/50"
                variants={accordionItemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <AccordionTrigger className="md:text-lg text-base font-medium text-white group w-full text-left ">
                  Do you only build new websites, or can you redesign mine?
                  <div className="ml-auto md:flex  hidden h-6 w-6 items-center justify-center rounded-full border border-teal-500/50 text-teal-500 shrink-0">
                    <Plus className="h-4 w-4 group-data-[state=open]:rotate-45 transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300/90 text-sm ">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className=""
                  >
                    We do both! Whether you need a brand-new site or just want
                    to refresh your current one, we’ve got you covered.
                  </motion.div>
                </AccordionContent>
              </MotionAccordionItem>
            </Accordion>
          </motion.div>

          <div className="">
            <MotionCard
              className="bg-transparent border-none shadow-none p-0"
              variants={cardVariants}
            >
              <MotionCardHeader className="p-0 mb-4" variants={itemVariants}>
                <motion.h2
                  className="lg:text-4xl  text-3xl font-bold text-white "
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  How We Can Help You?
                </motion.h2>
              </MotionCardHeader>
              <MotionCardContent
                className="p-0 space-y-6"
                variants={itemVariants}
              >
                <motion.p
                  className="text-gray-300 text-base  leading-relaxed"
                  variants={itemVariants}
                >
                  Follow our newsletter. We will regularly update our latest
                  project and availability.
                </motion.p>

                <motion.form
                  className="flex flex-col gap-4 "
                  variants={itemVariants}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex flex-col gap-3 w-full">
                    <div className="w-full ">
                      <MotionInput
                        {...register("email")}
                        placeholder="Enter Your email"
                        className="rounded-md px-4 py-2 h-12 w-full bg-white/10 border border-gray-700/50 text-white focus:ring-0 focus-visible:ring-0 focus:border-teal-500 focus-visible:border-teal-500"
                        variants={itemVariants}
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 0 2px rgba(20, 184, 166, 0.2)",
                        }}
                        disabled={isSubmitting || isSuccess}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-400 mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="w-full ">
                      <MotionInput
                        {...register("number")}
                        placeholder="Number"
                        className="rounded-md px-4 py-2 h-12 w-full bg-white/10 border border-gray-700/50 text-white focus:ring-0 focus-visible:ring-0 focus:border-teal-500 focus-visible:border-teal-500"
                        variants={itemVariants}
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 0 2px rgba(20, 184, 166, 0.2)",
                        }}
                        disabled={isSubmitting || isSuccess}
                      />
                      {errors.number && (
                        <p className="text-sm text-red-400 mt-1">
                          {errors.number.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <MotionButton
                    type="submit"
                    className="bg-teal-500 hover:bg-teal-600  text-white rounded-md px-6 py-3 h-auto font-medium"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    disabled={isSubmitting || isSuccess}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : isSuccess ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Sent!
                      </>
                    ) : (
                      "Lets Talk"
                    )}
                  </MotionButton>

                 
                </motion.form>
              </MotionCardContent>
            </MotionCard>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
