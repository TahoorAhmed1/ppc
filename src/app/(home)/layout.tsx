import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/header";
import { Footer } from "react-day-picker";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: " Creative Agency 360",
  description: "  Creative Agency 360",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased `}>
        <Header />
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
