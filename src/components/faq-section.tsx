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
import { notify } from "@/lib/utils";

// Create Zod schema for email validation
const subscriptionSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  number: z.string().min(10, { message: "Please enter a valid phone number" }),
});

type SubscriptionFormData = z.infer<typeof subscriptionSchema>;

// Custom animated components
const MotionCard = motion(Card);
const MotionCardHeader = motion(CardHeader);
const MotionCardContent = motion(CardContent);
const MotionAccordionItem = motion(AccordionItem);
const MotionInput = motion(Input);
const MotionButton = motion(Button);
const MotionLink = motion(Link);

export default function AnimatedFaqSection({
  enableGradientBackground = false,
}: {
  enableGradientBackground?: boolean;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SubscriptionFormData>({
    resolver: zodResolver(subscriptionSchema),
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

  const onSubmit = async (data: SubscriptionFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "/api/store-subscribtion",
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
      className={`py-12 md:py-16 flex justify-between w-full mx-auto bg-[#f9f9f9] relative overflow-hidden`}
      initial="hidden"
      animate={"visible"}
      variants={containerVariants}
    >
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
          className="absolute md:top-[10%] top-[5%] right-[10%] w-[9vw] h-[9vw] md:w-[7vw] md:h-[7vw] rounded-full bg-gradient-to-r from-black/40 to-black/30 opacity-50 pointer-events-none"
        ></motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={pulse}
          transition={{ delay: 0.6 }}
          className="absolute md:top-[40%] top-[30%] left-[5%] w-[7vw] h-[7vw] md:w-[5vw] md:h-[5vw] rounded-full bg-gradient-to-r from-black/50 to-black/40 opacity-40 pointer-events-none"
        ></motion.div>
      </motion.div>

      <motion.div
        className="container px-4 md:px-6 relative z-10"
        variants={sectionVariants}
      >
        <motion.div
          className="grid lg:gap-20 gap-10 lg:grid-cols-3"
          variants={sectionVariants}
        >
          <motion.div
            className="lg:col-span-2 flex item-center justify-center"
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
                <AccordionTrigger className="text-lg font-medium text-black group">
                  How long does it take to build a website?
                  <div className="ml-auto flex h-6 w-6 items-center justify-center rounded-full border border-black/60 text-black shrink-0">
                    <Plus className="h-4 w-4 group-data-[state=open]:rotate-45 transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-800/90 text-sm">
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
                <AccordionTrigger className="text-lg font-medium text-black group">
                  Can I make changes to the website after it's live?
                  <div className="ml-auto flex h-6 w-6 items-center justify-center rounded-full border border-black/60 text-black shrink-0">
                    <Plus className="h-4 w-4 group-data-[state=open]:rotate-45 transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-800/90 text-sm">
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
                <AccordionTrigger className="text-lg font-medium text-black group">
                  Do you only build new websites, or can you redesign mine?
                  <div className="ml-auto flex h-6 w-6 items-center justify-center rounded-full border border-black/60 text-black shrink-0">
                    <Plus className="h-4 w-4 group-data-[state=open]:rotate-45 transition-transform" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-800/90 text-sm">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    We do both! Whether you need a brand-new site or just want
                    to refresh your current one, we’ve got you covered.
                  </motion.div>
                </AccordionContent>
              </MotionAccordionItem>
            </Accordion>
          </motion.div>
          <div className="flex justify-end">
            <MotionCard
              className="bg-transparent border-none shadow-none p-0"
              variants={cardVariants}
            >
              <MotionCardHeader className="p-0 mb-4" variants={itemVariants}>
                <motion.h2
                  className={`text-4xl font-bold text-black`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  New Project In Mind?
                </motion.h2>
              </MotionCardHeader>
              <MotionCardContent
                className="p-0 space-y-6"
                variants={itemVariants}
              >
                <motion.p
                  className={`${
                    enableGradientBackground ? "text-white/80" : "text-black"
                  } text-base leading-relaxed`}
                  variants={itemVariants}
                >
                  Get expert help, right when you need it. Subscribe to our
                  newsletter.
                </motion.p>

                <motion.form
                  className="flex flex-col   gap-3 "
                  variants={itemVariants}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex-1 space-y-1">
                    <MotionInput
                      {...register("email")}
                      placeholder="Enter Your Email"
                      className={`rounded-lg px-4 py-2 h-11 w-full bg-[#F8F8F8] border border-[#AFAFAF] focus:ring-0 focus-visible:ring-0 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      variants={itemVariants}
                      whileFocus={{
                        scale: 1.02,
                        boxShadow: "0 0 0 2px rgba(101, 207, 95, 0.2)",
                      }}
                      disabled={isSubmitting || isSuccess}
                    />
                    {errors.email && (
                      <p
                        className={`text-sm ${
                          enableGradientBackground
                            ? "text-white/90"
                            : "text-red-500"
                        }`}
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <MotionInput
                      {...register("number")}
                      placeholder="Enter Your number"
                      className={`rounded-lg px-4 py-2 h-11 w-full bg-[#F8F8F8] border border-[#AFAFAF] focus:ring-0 focus-visible:ring-0 ${
                        errors.number ? "border-red-500" : ""
                      }`}
                      variants={itemVariants}
                      whileFocus={{
                        scale: 1.02,
                        boxShadow: "0 0 0 2px rgba(101, 207, 95, 0.2)",
                      }}
                      disabled={isSubmitting || isSuccess}
                    />
                    {errors.number && (
                      <p
                        className={`text-sm ${
                          enableGradientBackground
                            ? "text-white/90"
                            : "text-red-500"
                        }`}
                      >
                        {errors.number.message}
                      </p>
                    )}
                  </div>
                  <MotionButton
                    type="submit"
                    className="bg-gradient-to-r h-11 from-black/80 cursor-pointer to-black hover:opacity-90 text-white rounded-md px-6 whitespace-nowrap"
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
                      "Let's Talk"
                    )}
                  </MotionButton>
                </motion.form>
              </MotionCardContent>
            </MotionCard>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
