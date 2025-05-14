"use client";
import ContactFormPopup from "@/components/Contact";
import "../globals.css";
import Header from "@/components/header";
import { ToastContainer } from "react-toastify";
import { useFormContact } from "@/store/form";
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

      
    </div>
  );
}
