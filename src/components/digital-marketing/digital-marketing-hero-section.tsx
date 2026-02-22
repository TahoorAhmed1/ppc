"use client";

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
import { Typewriter } from "react-simple-typewriter";

import {
  award1,
  award2,
  award3,
  award4,
  heroSectionImage3,
  facebookIcon,
  twitterIcon,
  instagramIcon,
  snapchatIcon,
  tiktokIcon,
  youtubeIcon,
  discordIcon,
  pinterestIcon,
  trustpilot,
} from "@/assets/index";
import { notify } from "@/lib/utils";
import Link from "next/link";
import { useFormContact } from "@/store/form";
import { DigitialMarkethingServiceCategory } from "./digitial-markething-service-category";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(6, { message: "Please enter a valid phone number" }),
  message: z
    .string()
    .min(5, { message: "Description must be at least 5 characters" }),
});

type ContactFormData = z.infer<typeof formSchema>;

const award = [award1.src, award2.src, award3.src, award4.src, trustpilot.src];
const services = [
  { icon: facebookIcon.src, title: "FACEBOOK", subtitle: "MARKETING" },
  { icon: instagramIcon.src, title: "INSTAGRAM", subtitle: "MARKETING" },
  { icon: youtubeIcon.src, title: "YOUTUBE", subtitle: "MARKETING" },
  { icon: snapchatIcon.src, title: "SNAPCHAT", subtitle: "MARKETING" },
  { icon: tiktokIcon.src, title: "TIKTOK", subtitle: "MARKETING" },
  { icon: pinterestIcon.src, title: "PINTEREST", subtitle: "MARKETING" },
  { icon: discordIcon.src, title: "DISCORD", subtitle: "MARKETING" },
  { icon: twitterIcon.src, title: "TWITTER", subtitle: "MARKETING" },
];

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
      <div className="relative z-10 container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mt-10">
          <div className="w-full">
            <h1 className=" text-[41px] md:text-[46px] lg:text-[60px] font-bold leading-tight md:h-[350px] h-[320px] ">
              <span className="inline-block bg-white rounded-xl py-1 px-2 mb-2">
                <span className="bg-gradient-to-r from-black/80 to-black bg-clip-text text-transparent">
                  Not Just Websites
                </span>
              </span>
              <br />
              <span className="text-white">
                <Typewriter
                  words={[
                    " We Build Digital Experiences That Make Brands Unforgettable.",
                  ]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={0}
                  deleteSpeed={0}
                  delaySpeed={999999}
                />
              </span>
            </h1>

            <div className="flex flex-wrap items-start gap-4 lg:mt-14 mt-6">
              <div>
                <Button
                  onClick={() => setIsOpen(true)}
                  className="bg-gradient-to-r cursor-pointer h-13 from-black/80 to-black text-white px-8 py-3 text-base rounded-lg"
                >
                  Get a Quote
                </Button>
              </div>

              <div className="flex flex-wrap lg:gap-8 gap-4 items-center sm:mt-0 mt-2">
                {awards.map((awardImage: any, i: any) => (
                  <div
                    key={i}
                    className="md:w-20 md:h-20 w-[60px] h-[60px] items-center justify-center"
                  >
                    <Image
                      src={awardImage || "/placeholder.svg"}
                      width={500}
                      height={500}
                      alt={`Award ${i + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full ">
            <div className="relative p-[4px] rounded-xl border-animation-wrapper max-w-[450px] md:ml-auto ml-auto mr-auto shadow-lg">
              <div className="bg-slate-950 rounded-xl lg:px-10 px-6 py-8 w-full">
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
                              className="w-full p-4 h-11 bg-[#1a3b49]/20 placeholder:font-normal font-semibold rounded-md text-white placeholder:text-slate-200  text-base outline-none"
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
                              className="w-full p-4 h-11 bg-[#1a3b49]/20 placeholder:font-normal font-semibold rounded-md text-white placeholder:text-slate-200 text-base outline-none"
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
                              className="w-full p-4 h-11 bg-[#1a3b49]/20 placeholder:font-normal font-semibold rounded-md text-white placeholder:text-slate-200 text-base outline-none"
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
                              className="w-full p-4 h-32 bg-[#1a3b49]/20 placeholder:font-normal font-semibold rounded-md text-white placeholder:text-slate-200 text-base resize-none outline-none"
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
                      <span className="font-medium">Disclaimer</span>: You agree
                      to receive messages from NexuzGlobal. This includes
                      SMS messages for appointment scheduling, reminders, and
                      billing. Message frequency may vary. Text STOP to opt out.
                      See our{" "}
                      <a
                        target="_blank"
                        href="/privacy"
                        className="font-medium mx-1 underline"
                      >
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a
                        target="_blank"
                        href="/terms-&-condition"
                        className="font-medium mx-1 underline"
                      >
                        Terms and Conditions
                      </a>
                      .
                    </p>

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
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 pb-8">
        <DigitialMarkethingServiceCategory services={services} />
      </div>
    </div>
  );
}
