"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { notify } from "@/lib/utils";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  message: z.string().min(5, { message: "Message is required" }),
  packageId: z.number().optional(),
  package_name: z.string().optional(),
  package_price: z.number().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function BookingModal({
  isOpen,
  onClose,
  packageId,
  packageName,
  packagePrice,
}: any) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      packageId: packageId,
      package_name: packageName,
      package_price: Number(packagePrice),
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://demo7.obistest.online/api/store-contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      await response.json();

      setIsSuccess(true);
      notify("success", "Package Request submitted");
      setTimeout(() => {
        form.reset();
        setIsSuccess(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalContent = (
    <>
      {packageName && (
        <div className="mb-4 text-center">
          <span className="bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text font-bold text-xl">
            {packageName} Package
          </span>
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Full Name"
                    className="w-full p-2 h-11 bg-white placeholder:font-semibold font-semibold rounded-md text-black placeholder-white text-base outline-none"
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
                    className="w-full p-2 h-11 bg-white placeholder:font-semibold font-semibold rounded-md text-black placeholder-white text-base outline-none"
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
                    className="w-full p-2 h-11 bg-white placeholder:font-semibold font-semibold rounded-md text-black placeholder-white text-base outline-none"
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
                    className="w-full p-2  h-36 bg-white placeholder:font-semibold font-semibold rounded-md text-black placeholder-white text-base resize-none outline-none"
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
            <span className="font-medium">Disclaimer</span> : You agree to
            receive conversation messages from CreativeAgency360. This includes
            SMS messages for appointment scheduling, appointment reminders,
            post-visit instructions, and billing notifications. You may receive
            up to 2 messages per day; message frequency may vary. To opt out,
            text STOP. For assistance, text HELP or visit Website Message and
            data rates may apply. See our
            <Link href={"/privacy"} className="font-medium mx-1 underline">
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
            className="bg-gradient-to-r w-full h-12 cursor-pointer from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-lg border-none text-sm md:text-base px-3 py-2"
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
    </>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-xl py-10 px-8">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Book Your Package
          </DialogTitle>
        </DialogHeader>
        {modalContent}
      </DialogContent>
    </Dialog>
  );
}
