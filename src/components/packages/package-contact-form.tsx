"use client"

import { useEffect, useRef, useState, type RefObject } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useAnimation } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Check, Loader2 } from "lucide-react"
import { notify } from "@/lib/utils"

function useInView(options = {}): [RefObject<HTMLDivElement | null>, boolean, boolean] {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)

      if (entry.isIntersecting && !hasTriggered) {
        setHasTriggered(true)
      }
    }, options)

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [hasTriggered, options])

  return [ref, isInView, hasTriggered]
}

// Create Zod schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  website_url: z.string().url({ message: "Please enter a valid website URL" }).or(z.string().length(0)),
  message: z.string().min(5, { message: "Message must be at least 5 characters" }),
  package_price: z.string().optional(),
  ip_address: z.string().optional(),
})

// Define the form data type based on the schema
type ContactFormData = z.infer<typeof contactFormSchema>

// Motion variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0.5,
    },
  },
}

const formItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  }),
}

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8,
      type: "spring",
      stiffness: 200,
    },
  },
  tap: {
    scale: 0.95,
  },
}

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

const MotionInput = motion(Input)
const MotionTextarea = motion(Textarea)
const MotionButton = motion(Button)
const MotionCard = motion(Card)

export default function ContactSection() {
  const controls = useAnimation()
  const [containerRef, isInView, hasTriggered] = useInView({
    threshold: 0.2,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoaded, setIsLoaded] = useState(true) // Set to true by default to ensure content is visible

  useEffect(() => {
    if (isInView || hasTriggered) {
      controls.start("visible")
    }
  }, [controls, isInView, hasTriggered])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      website_url: "",
      message: "",
      package_price: "",
      ip_address: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value)
      })

      try {
        const ipResponse = await fetch("https://api.ipify.org?format=json")
        const ipData = await ipResponse.json()
        formData.append("ip_address", ipData.ip)
      } catch (error) {
        console.error("Could not fetch IP address:", error)
      }

      const response = await fetch("https://demo7.obistest.online/api/store-contact-us-form", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setIsSuccess(true)

      notify("success", "Message sent successfully!")

      setTimeout(() => {
        reset()
        setIsSuccess(false)
      }, 2000)
    } catch (error) {
      console.log("error", error)
    }
    setIsSubmitting(false)
  }

  return (
    <section
      className=" bg-white overflow-hidden relative  py-30"
      id="contactus"
    >
      <motion.div
        className="absolute top-10 left-0 w-full h-full"
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={pulse}
          className="absolute md:top-[15%] top-[10%] left-[5%] w-[12vw] h-[12vw] md:w-[10vw] md:h-[10vw] rounded-full bg-gradient-to-r from-[#65CE5C]/40 to-[#3DB1B1]/30 opacity-50 pointer-events-none"
        ></motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={pulse}
          transition={{ delay: 0.3 }}
          className="absolute md:bottom-[15%] bottom-[10%] right-[5%] w-[14vw] h-[14vw] md:w-[12vw] md:h-[12vw] rounded-full bg-gradient-to-r from-[#209CEB]/40 to-[#65CE5C]/30 opacity-40 pointer-events-none"
        ></motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={pulse}
          transition={{ delay: 0.9 }}
          className="absolute md:top-[60%] top-[70%] left-[20%] w-[6vw] h-[6vw] md:w-[5vw] md:h-[5vw] rounded-full bg-gradient-to-r from-[#209CEB]/40 to-[#3DB1B1]/30 opacity-30 pointer-events-none"
        ></motion.div>
      </motion.div>

      <div id="contactus" className="container relative z-10 ">
        <h1 className="text-4xl md:text-5xl text-center font-bold  bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text mb-15">
          Connect Our Team
        </h1>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 lg:grid-cols-2 lg:gap-8  "
        >
          <motion.div variants={imageVariants}>
            <motion.div className="my-10 lg:my-0">
              <p className="text-lg text-gray-700">
                Begin your journey towards business growth confidently. Whether
                you're eager to explore our offerings or seek further
                discussion, don't hesitate to reach out. Our dedicated team is
                available round-the-clock, ready to provide complimentary
                consultations tailored to your needs. At Creative Agency, we
                promise exceptional outcomes that align precisely with your
                business requirements. No challenge is too daunting; our skilled
                experts are here to bring your ideas to life. Connect with us
                today and let's embark on your next venture together.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex py-5 xl:py-0 lg:pt-8 flex-col justify-center space-y-4"
          >
            <MotionCard
              variants={itemVariants}
              transition={{ type: "spring", stiffness: 100 }}
              className="shadow-none border-0 p-0"
            >
              <CardContent className="p-0">
                <motion.form
                  variants={containerVariants}
                  className="space-y-4"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                  >
                    <motion.div
                      custom={0}
                      variants={formItemVariants}
                      className="space-y-2"
                    >
                      <MotionInput
                        {...register("name")}
                        id="name"
                        placeholder="Your Name"
                        className={`rounded-lg border-[#EAEDEF] h-11 bg-[#F9F9F9] ring-0 focus-visible:ring-0 focus:ring-0 ${
                          errors.name ? "border-red-500" : ""
                        }`}
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 0 2px rgba(101, 207, 95, 0.3)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">
                          {errors.name.message}
                        </p>
                      )}
                    </motion.div>
                    <motion.div
                      custom={1}
                      variants={formItemVariants}
                      className="space-y-2"
                    >
                      <MotionInput
                        {...register("email")}
                        id="email"
                        type="email"
                        placeholder="Email"
                        className={`rounded-lg border-[#EAEDEF] h-11 bg-[#F9F9F9] ring-0 focus-visible:ring-0 focus:ring-0 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 0 2px rgba(31, 155, 237, 0.3)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </motion.div>
                    <motion.div
                      custom={2}
                      variants={formItemVariants}
                      className="space-y-2"
                    >
                      <MotionInput
                        {...register("phone")}
                        id="phone"
                        placeholder="Phone"
                        className={`rounded-lg border-[#EAEDEF] h-11 bg-[#F9F9F9] ring-0 focus-visible:ring-0 focus:ring-0 ${
                          errors.phone ? "border-red-500" : ""
                        }`}
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 0 2px rgba(101, 207, 95, 0.3)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500">
                          {errors.phone.message}
                        </p>
                      )}
                    </motion.div>
                    <motion.div
                      custom={3}
                      variants={formItemVariants}
                      className="space-y-2"
                    >
                      <MotionInput
                        {...register("website_url")}
                        id="website_url"
                        type="text"
                        placeholder="Website"
                        className={`rounded-lg border-[#EAEDEF] h-11 bg-[#F9F9F9] ring-0 focus-visible:ring-0 focus:ring-0 ${
                          errors.website_url ? "border-red-500" : ""
                        }`}
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 0 2px rgba(31, 155, 237, 0.3)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      {errors.website_url && (
                        <p className="text-sm text-red-500">
                          {errors.website_url.message}
                        </p>
                      )}
                    </motion.div>
                  </motion.div>
                  <motion.div
                    custom={4}
                    variants={formItemVariants}
                    className="space-y-2"
                  >
                    <MotionTextarea
                      {...register("message")}
                      id="message"
                      placeholder="Message"
                      className={`min-h-[120px] rounded-lg border-[#EAEDEF] h-11 bg-[#F9F9F9] ring-0 focus-visible:ring-0 focus:ring-0 ${
                        errors.message ? "border-red-500" : ""
                      }`}
                      whileFocus={{
                        scale: 1.02,
                        boxShadow: "0 0 0 2px rgba(101, 207, 95, 0.3)",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </motion.div>

                  <p className="text-xs text-gray-800 mt-2 mb-5 text-left">
                    <span className="font-medium">Disclaimer</span> : You agree
                    to receive conversation messages from CreativeAgency360.
                    This includes SMS messages for appointment scheduling,
                    appointment reminders, post-visit instructions, and billing
                    notifications. You may receive up to 2 messages per day;
                    message frequency may vary. To opt out, text STOP. For
                    assistance, text HELP or visit Website Message and data
                    rates may apply. See our
                    <a
                      href={"/privacy"}
                      className="font-medium mx-1 underline"
                      rel="noreferrer"
                    >
                      Privacy Policy
                    </a>
                    and{" "}
                    <a
                      href={"/terms-&-condition"}
                      className="font-medium mx-1 underline"
                      rel="noreferrer"
                    >
                      {" "}
                      Terms and Conditions
                    </a>
                    . STOP to any message to opt out.
                  </p>
                  <MotionButton
                    variants={buttonVariants}
                    whileTap="tap"
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className="bg-gradient-to-r duration-300 hover:scale-105 transition-all  hover:from-[#209CEB]/80 hover:to-[#65CF5F] from-[#65CE5C]/80 h-12 cursor-pointer to-[#209CEB] w-[220px] hover:opacity-90 text-white rounded-lg border-none"
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
                      "Send Message"
                    )}
                  </MotionButton>
                </motion.form>
              </CardContent>
            </MotionCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
