import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Footer } from "react-day-picker";
import * as motion from "motion/react-client";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Creative Agency",
  description: " Creative Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${geistMono.variable} antialiased `}
      >
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
