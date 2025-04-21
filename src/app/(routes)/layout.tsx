import type React from "react";
import Header from "@/components/header2";
import { ToastContainer } from "react-toastify";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <ToastContainer />
      {children}
    </div>
  );
}
