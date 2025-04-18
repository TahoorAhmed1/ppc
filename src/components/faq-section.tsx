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
import { ArrowRight, Check, Loader2 } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";

// Create Zod schema for email validation
const subscriptionSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize React Hook Form with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SubscriptionFormData>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
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

  // Handle form submission
  const onSubmit = async (data: SubscriptionFormData) => {
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
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Subscription failed");
      }

      setIsSuccess(true);
      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch with you soon.",
      });

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
      className={`py-12 md:py-20 ${
        enableGradientBackground
          ? "bg-gradient-to-br from-[#4aa399] to-[#0c131d]"
          : "bg-[#f9f9f9]"
      }`}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="container px-4 md:px-6" variants={sectionVariants}>
        <motion.div
          className="grid gap-12 lg:grid-cols-2 items-start"
          variants={sectionVariants}
        >
          {/* LEFT - FAQ */}
          <motion.div className="space-y-6" variants={sectionVariants}>
            <Accordion
              type="single"
              collapsible
              className={`w-full space-y-2 ${
                enableGradientBackground ? "text-white" : ""
              }`}
            >
              <MotionAccordionItem
                value="item-1"
                className="border-b border-gray-200"
                variants={accordionItemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <AccordionTrigger
                  className={`text-lg font-medium ${
                    enableGradientBackground ? "text-white" : ""
                  }`}
                >
                  How do I sign up for the project?
                </AccordionTrigger>
                <AccordionContent
                  className={`${
                    enableGradientBackground
                      ? "text-white/80"
                      : "text-muted-foreground"
                  } text-sm`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    Signing up is easy! Simply contact us through our website,
                    email, or phone.
                  </motion.div>
                </AccordionContent>
              </MotionAccordionItem>

              <MotionAccordionItem
                value="item-2"
                className="border-b border-gray-200"
                variants={accordionItemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <AccordionTrigger
                  className={`text-lg font-medium ${
                    enableGradientBackground ? "text-white" : ""
                  }`}
                >
                  What should I prepare before starting?
                </AccordionTrigger>
                <AccordionContent
                  className={`${
                    enableGradientBackground
                      ? "text-white/80"
                      : "text-muted-foreground"
                  } text-sm`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    Prepare your project goals, any existing materials, and your
                    budget.
                  </motion.div>
                </AccordionContent>
              </MotionAccordionItem>

              <MotionAccordionItem
                value="item-3"
                className="border-b border-gray-200"
                variants={accordionItemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <AccordionTrigger
                  className={`text-lg font-medium ${
                    enableGradientBackground ? "text-white" : ""
                  }`}
                >
                  Does my company need help with marketing advice?
                </AccordionTrigger>
                <AccordionContent
                  className={`${
                    enableGradientBackground
                      ? "text-white/80"
                      : "text-muted-foreground"
                  } text-sm`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    Yes, most companies benefit from strategic marketing advice
                    to grow and reach target audiences.
                  </motion.div>
                </AccordionContent>
              </MotionAccordionItem>
            </Accordion>
          </motion.div>

          <MotionCard
            className="bg-transparent border-none shadow-none"
            variants={cardVariants}
          >
            <MotionCardHeader className="px-0" variants={itemVariants}>
              <motion.h2
                className={`text-4xl font-bold text-[#3DB1B1]`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                New Project In Mind?
              </motion.h2>
            </MotionCardHeader>
            <MotionCardContent
              className="px-0 space-y-6"
              variants={itemVariants}
            >
              <motion.p
                className={`${
                  enableGradientBackground ? "text-white/80" : "text-[#1C2D44]"
                } text-base leading-relaxed`}
                variants={itemVariants}
              >
                Get expert help, right when you need it. Subscribe to our
                newsletter.
              </motion.p>

              <motion.form
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md"
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
                <MotionButton
                  type="submit"
                  className="bg-gradient-to-r h-11 from-[#65CF5F] cursor-pointer to-[#1F9BED] hover:opacity-90 text-white rounded-md px-6 whitespace-nowrap"
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

              <motion.div className="pt-2" variants={itemVariants}>
                <MotionLink
                  href="#faq"
                  className={`inline-flex items-center text-[#3DB1B1] font-medium`}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  More FAQ
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight
                      className={`ml-1 h-4 w-4 text-[#3DB1B1] font-medium`}
                    />
                  </motion.span>
                </MotionLink>
              </motion.div>
            </MotionCardContent>
          </MotionCard>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
