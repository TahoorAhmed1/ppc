"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { popup } from "@/assets"

export function ImageModal({ isOpen, onClose, imageUrl, alt = "Image" }: any) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscKey)
    return () => window.removeEventListener("keydown", handleEscKey)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={cn(
          "relative mx-auto max-h-[80vh] max-w-[90vw] overflow-hidden rounded-lg transition-all duration-300 md:max-w-[80vw] lg:max-w-[70vw] p-7",
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-1 top-1 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black/80 text-white shadow-lg transition-colors hover:bg-black"
          aria-label="Close modal"
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        <a href="#starter" onClick={onClose}>
          <Image
            width={1000}
            height={1000}
            src={popup || "/placeholder.svg"}
            alt={alt}
            className="h-auto w-full rounded-lg object-contain"
            onLoad={() => setIsAnimating(true)}
            style={{ maxHeight: "calc(80vh - 40px)" }}
          />
        </a>
      </div>
    </div>
  )
}
