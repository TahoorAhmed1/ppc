"use client";

import { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2, X } from "lucide-react";

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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { notify } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof formSchema>;

export default function ContactFormPopup({ isOpen, setIsOpen }: any) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

      if (!response.ok) throw new Error("Failed to submit form");

      setIsSuccess(true);
      notify("success", "Message sent successfully!");

      setTimeout(() => {
        form.reset();
        setIsSuccess(false);
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px]  py-3 px-0 border-[#1a3b49]/50 bg-[#000000]/90 text-white">
        <div className="relative w-full">
          <div className="px-8 py-6 w-full">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-1.5">
                Request a Quote
              </DialogTitle>
              <DialogDescription className="text-base text-gray-300 font-semibold">
                We Don't Just Build Sites. We Build Brand Experiences.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3 mt-4"
              >
                {["name", "email", "phone"].map((field) => (
                  <FormField
                    key={field}
                    control={form.control}
                    name={field as keyof ContactFormData}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder={
                              field.name === "name"
                                ? "Full Name"
                                : field.name === "email"
                                ? "Email Address"
                                : "Phone Number"
                            }
                            className="w-full p-3 h-9 bg-[#1a3b49]/40 placeholder:font-normal font-semibold rounded-md text-white placeholder:text-slate-200 text-sm outline-none"
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
                ))}

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Write your business description"
                          rows={3}
                          className="w-full p-3 h-28 bg-[#1a3b49]/40 placeholder:font-normal font-semibold rounded-md text-white placeholder:text-slate-200 text-sm resize-none outline-none"
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

                <p className="text-[10px] text-gray-300 mt-2 text-left">
                  <span className="font-medium">Disclaimer</span> : You agree to receive conversation messages from CreativeAgency360...{" "}
                  <a
                    target="_blank"
                    href={"/privacy"}
                    className="font-medium mx-1 underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    target="_blank"
                    href={"/terms-&-condition"}
                    className="font-medium mx-1 underline"
                  >
                    Terms and Conditions
                  </a>
                  .
                </p>

                <Button
                  type="submit"
                  className="bg-gradient-to-r w-full from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-lg border-none text-sm px-3 py-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />
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
      </DialogContent>
    </Dialog>
  );
}
