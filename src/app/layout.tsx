import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { Footer } from "react-day-picker";
import * as motion from "motion/react-client";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: " Agency 360",
  description: "  Agency 360",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased `}>
        <motion.div
          initial={{ opacity: 0, scale: 0, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            scale: { type: "spring", duration: 0.4, bounce: 0.5 },
          }}
        >
          <Header />
        </motion.div>
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
