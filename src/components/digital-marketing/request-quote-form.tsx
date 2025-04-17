"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Shield } from "lucide-react"

export default function RequestQuoteForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="w-full h-full max-w-lg bg-gray-900/70 backdrop-blur-sm p-8 rounded-lg ">
      <h2 className="text-3xl font-bold text-white mb-4">Request a Quote</h2>
      <p className="text-gray-200 mb-6">Enhance your Design and start thriving by signing up for our services today.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="bg-gray-800/70 border-gray-700 text-white placeholder:text-gray-400"
            required
          />
        </div>

        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-800/70 border-gray-700 text-white placeholder:text-gray-400"
            required
          />
        </div>

        <div>
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-gray-800/70 border-gray-700 text-white placeholder:text-gray-400"
            required
          />
        </div>

        <div>
          <Textarea
            name="description"
            placeholder="Write Your business description"
            value={formData.description}
            onChange={handleChange}
            className="bg-gray-800/70 border-gray-700 text-white placeholder:text-gray-400 min-h-[100px]"
            required
          />
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-300">
          <Shield className="w-4 h-4 text-gray-400" />
          <p>Your data is protected with us — no worries, no compromises</p>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white py-6 text-lg"
        >
          Get A Quote
        </Button>
      </form>
    </div>
  )
}
