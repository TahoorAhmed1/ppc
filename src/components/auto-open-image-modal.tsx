"use client"

import { useState, useEffect } from "react"
import { ImageModal } from "./image-modal"
import { popup } from "@/assets" 

export function AutoOpenImageModal({ alt = "Image", delayInSeconds = 10 }: any) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, delayInSeconds * 1000)

    return () => clearTimeout(timer)
  }, [delayInSeconds]) 

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <ImageModal
      isOpen={isOpen}
      onClose={handleClose}
      imageUrl={popup} 
      alt={alt}
    />
  )
}
