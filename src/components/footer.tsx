"use client"

import { logo } from "@/assets"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, type FormEvent } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <footer className="border-t border-gray-200 pt-12 pb-8 bg-white">
      <div className="container px-4 mx-auto space-y-12 lg:space-y-0 lg:flex lg:justify-between lg:items-start">
        {/* Left side: logo and newsletter */}
        <div className="max-w-lg space-y-6">
          <div className="flex items-center">
            <Image src={logo} alt="Logo" width={200} height={200} />
          </div>

          <p className="text-gray-700 font-medium leading-relaxed">
          "We’re a results-driven digital marketing agency focused on helping brands grow in a digital-first world."We’re a results-driven digital marketing agency focused on helping brands grow in a digital-first world.          </p>

          {/* <form onSubmit={handleSubmit} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] font-bold text-white placeholder-white/80 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bg-white rounded-full p-2 text-blue-500"
              aria-label="Subscribe"
            >
              <ArrowRight size={18} />
            </button>
          </form> */}
        </div>

        {/* Right side: links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 lg:mt-0">
          {/* Our Link */}
          <FooterColumn
            title="Our Link"
            links={["About Us", "Careers", "We're Hiring", "Press & Media"]}
          />

          {/* Our Service */}
          <FooterColumn
            title="Our Service"
            links={["Social Media Marketing", "Digital Strategy", "SEO Optimization", "Data Analytics"]}
          />

          {/* Resources */}
          <FooterColumn
            title="Resources"
            links={["Blog", "Case Studies", "eBooks", "FAQ"]}
          />
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 pt-4 border-t border-gray-200 text-center text-gray-600 text-sm">
        © 2025 Advora, Inc. All rights reserved.
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
