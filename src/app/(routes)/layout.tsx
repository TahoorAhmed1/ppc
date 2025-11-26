"use client";
import type React from "react";
import Header from "@/components/header";
import { ToastContainer } from "react-toastify";
import ContactFormPopup from "@/components/Contact";
import { useFormContact } from "@/store/form";
import "../globals.css";
import Footer from "@/components/footer";

export default function ChildLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { setIsOpen, isOpen }: any = useFormContact();
  return (
    <div>
      <Header />
      <ToastContainer />
      {children}
      <ContactFormPopup isOpen={isOpen} setIsOpen={setIsOpen} />
      <Footer />
    </div>
  );
}
