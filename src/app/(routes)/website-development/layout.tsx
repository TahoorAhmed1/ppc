// ✅ SERVER COMPONENT (No "use client" here)
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Website Development | Creative Agency 360",
  description: "We Build your Digital Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {children}
    </>
  )
}
