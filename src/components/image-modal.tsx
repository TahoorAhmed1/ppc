
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
          "relative transition-all duration-300",
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -right-3 -top-3 z-10 cursor-pointer rounded-full bg-black p-1 text-white shadow-md hover:bg-gray-800"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <a href="#starter" onClick={onClose}>
          <Image
            width={1000}
            height={1000}
            src={popup || "/placeholder.svg"}
            alt={alt}
            className="max-h-[85vh] max-w-full object-contain"
            onLoad={() => setIsAnimating(true)}
          />
        </a>
      </div>
    </div>
  )
}
