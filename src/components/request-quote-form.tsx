"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, Loader2, Shield } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

// Create Zod schema for form validation
const quoteFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .regex(/^[0-9+\-\s()]*$/, { message: "Please enter a valid phone number" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" }),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

// Animation variants
const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
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
      stiffness: 100,
      damping: 10,
    },
  },
};

// Create motion components
const MotionForm = motion.form;
const MotionDiv = motion.div;

export default function RequestQuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize React Hook Form with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      description: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      setIsSuccess(true);
      toast({
        title: "Quote request submitted!",
        description: "We'll get back to you as soon as possible.",
      });

      setTimeout(() => {
        reset();
        setIsSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error submitting request",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full max-w-lg bg-gray-900/70 backdrop-blur-sm p-8 rounded-lg">
      <h2 className="text-3xl font-bold text-white mb-4">Request a Quote</h2>
      <p className="text-gray-200 mb-6">
        Enhance your Design and start thriving by signing up for our services
        today.
      </p>

      <MotionForm
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
        initial="hidden"
        animate="visible"
        variants={formVariants}
      >
        <MotionDiv variants={itemVariants} className="space-y-1">
          <Input
            type="text"
            {...register("fullName")}
            placeholder="Full Name"
            className={`bg-gray-800/70 border-gray-700 text-white placeholder:text-gray-400 ${
              errors.fullName ? "border-red-500" : ""
            }`}
            disabled={isSubmitting || isSuccess}
          />
          {errors.fullName && (
            <p className="text-red-400 text-sm">{errors.fullName.message}</p>
          )}
        </MotionDiv>

        <MotionDiv variants={itemVariants} className="space-y-1">
          <Input
            type="email"
            {...register("email")}
            placeholder="Email Address"
            className={`bg-gray-800/70 border-gray-700 text-white placeholder:text-gray-400 ${
              errors.email ? "border-red-500" : ""
            }`}
            disabled={isSubmitting || isSuccess}
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email.message}</p>
          )}
        </MotionDiv>

        <MotionDiv variants={itemVariants} className="space-y-1">
          <Input
            type="tel"
            {...register("phone")}
            placeholder="Phone Number"
            className={`bg-gray-800/70 border-gray-700 text-white placeholder:text-gray-400 ${
              errors.phone ? "border-red-500" : ""
            }`}
            disabled={isSubmitting || isSuccess}
          />
          {errors.phone && (
            <p className="text-red-400 text-sm">{errors.phone.message}</p>
          )}
        </MotionDiv>

        <MotionDiv variants={itemVariants} className="space-y-1">
          <Textarea
            {...register("description")}
            placeholder="Write Your business description"
            className={`bg-gray-800/70 border-gray-700 text-white placeholder:text-gray-400 min-h-[100px] ${
              errors.description ? "border-red-500" : ""
            }`}
            disabled={isSubmitting || isSuccess}
          />
          {errors.description && (
            <p className="text-red-400 text-sm">{errors.description.message}</p>
          )}
        </MotionDiv>

        <MotionDiv
          variants={itemVariants}
          className="flex items-center gap-2 text-sm text-gray-300"
        >
          <Shield className="w-4 h-4 text-gray-400" />
          <p>Your data is protected with us — no worries, no compromises</p>
        </MotionDiv>

        <MotionDiv
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white py-6 text-lg flex items-center justify-center"
            disabled={isSubmitting || isSuccess}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : isSuccess ? (
              <>
                <Check className="mr-2 h-5 w-5" />
                Quote Requested!
              </>
            ) : (
              "Get A Quote"
            )}
          </Button>
        </MotionDiv>
      </MotionForm>
    </div>
  );
}
