"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";

const subscriptionSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type SubscriptionFormData = z.infer<typeof subscriptionSchema>;

export default function EnhancedCtaSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<SubscriptionFormData>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      email: "",
    },
  });

  const email = watch("email");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Form element variants
  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  // Heading floating animation
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  // Background reveal animation
  const backgroundVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Success message variants
  const successVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Decorative element variants
  const decorVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        duration: 0.5,
      },
    },
  };

  // Sparkle animation variants
  const sparkleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 3,
      },
    },
  };

  const onSubmit = async (data: SubscriptionFormData) => {
    setIsSubmitted(true);

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

      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        reset();
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });

      // Even on error, we'll reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden relative">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      >
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-[#65CF5F]/10 to-[#1F9BED]/10 blur-xl"
          variants={decorVariants}
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            transition: {
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-[#1F9BED]/10 to-[#65CF5F]/10 blur-xl"
          variants={decorVariants}
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            transition: {
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          }}
        />
      </motion.div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          className="flex flex-col items-center text-center gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="relative" animate="animate">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold py-2 text-[#3DB1B1]"
              whileHover={{
                backgroundSize: "200%",
                backgroundPosition: ["0%", "100%"],
                transition: { duration: 1 },
              }}
            >
              Let’s Make Your Project Standout!
            </motion.h2>
            <motion.div
              className="absolute -top-6 -right-6 text-[#65CF5F]"
              variants={sparkleVariants}
              initial="hidden"
              animate="visible"
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
          </motion.div>

          <motion.p
            className="max-w-2xl text-[#1C2D44] text-base sm:text-lg"
            variants={itemVariants}
          >
            You want more than average, let’s create something that truly stands
            out.
          </motion.p>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                className="mt-4 flex flex-col sm:flex-row items-center gap-3 w-full max-w-xl"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onSubmit={handleSubmit(onSubmit)}
                key="form"
              >
                <motion.div
                  className="w-full sm:flex-1"
                  variants={itemVariants}
                >
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="relative"
                  >
                    <Input
                      {...register("email")}
                      placeholder="Enter your email"
                      className={`rounded-lg px-4 py-3 w-full ring-0 focus-visible:ring-0 text-[#1C2D44] h-12 bg-[#F8F8F8] border border-[#AFAFAF] transition-all duration-300 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 text-left">
                        {errors.email.message}
                      </p>
                    )}
                  </motion.div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-[#65CF5F] to-[#209CEB] w-[200px] hover:opacity-90 h-12 text-white rounded-lg px-6 py-3  relative overflow-hidden group"
                  >
                    <motion.span
                      className="absolute inset-0 bg-white opacity-20 rounded-lg"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />
                    <motion.div className="flex items-center justify-center gap-2">
                      Contact Me
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.form>
            ) : (
              <motion.div
                className="mt-4 flex items-center justify-center gap-2 bg-green-100 text-green-700 py-3 px-6 rounded-lg w-full max-w-xl"
                variants={successVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="success"
              >
                <Check className="w-5 h-5" />
                <span>Thank you! We'll be in touch soon.</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Animated decorative elements */}
          <motion.div
            className="absolute -bottom-10 left-1/4 w-16 h-16 rounded-full border-2 border-[#65CF5F]/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: [0, 1, 0],
              x: [0, -30],
              y: [0, -20],
              transition: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 2,
                times: [0, 0.5, 1],
              },
            }}
          />
          <motion.div
            className="absolute top-20 right-1/4 w-8 h-8 rounded-full border-2 border-[#1F9BED]/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: [0, 1, 0],
              x: [0, 20],
              y: [0, 30],
              transition: {
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3,
                times: [0, 0.5, 1],
              },
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
