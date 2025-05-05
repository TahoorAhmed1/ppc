import { heroSectionImage3 } from "@/assets";
import WebDevelopmentSection from "@/components/web-development-services";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="text-white py-20 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroSectionImage3.src})`,
        }}
      >
        <div className="px-4 md:px-8 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Website Development Services
          </h1>
          <div className="flex justify-center text-sm md:text-base flex-wrap gap-2">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2 hidden sm:inline">•</span>
            <span>Website Development Services</span>
          </div>
        </div>
      </div>

      <div className="">
        <WebDevelopmentSection />
      </div>
    </div>
  );
}
