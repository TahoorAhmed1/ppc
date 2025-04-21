"use client";
import type React from "react";
import Header from "@/components/header2";
import { ToastContainer } from "react-toastify";
import ContactFormPopup from "@/components/Contact";
import { useFormContact } from "@/store/form";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { setIsOpen, isOpen }: any = useFormContact();
  return (
    <div>
      <Header setIsOpen={setIsOpen} />
      <ToastContainer />
      {children}
      <ContactFormPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
