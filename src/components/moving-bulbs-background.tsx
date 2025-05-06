"use client"

import { useEffect, useRef, useState } from "react"

interface Bulb {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  intensity: number
  pulseSpeed: number
  pulseDirection: number
}

interface MovingBulbsBackgroundProps {
  bulbCount?: number
  minSize?: number
  maxSize?: number
  speed?: number
  colors?: string[]
  pulseEffect?: boolean
}

export default function MovingBulbsBackground({
  bulbCount = 8,
  minSize = 5,
  maxSize = 20,
  speed = 2.5,
  colors = ["#0575E6", "#1a9ed0", "#34c79b", "#00F260"],
  pulseEffect = true,
}: MovingBulbsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const bulbsRef = useRef<Bulb[]>([])
  const animationRef = useRef<number>(0)

  // Initialize bulbs
  const initBulbs = () => {
    if (!dimensions.width || !dimensions.height) return

    const bulbs: Bulb[] = []
    for (let i = 0; i < bulbCount; i++) {
      bulbs.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: minSize + Math.random() * (maxSize - minSize),
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        intensity: 0.5 + Math.random() * 0.5,
        pulseSpeed: 0.01 + Math.random() * 0.02,
        pulseDirection: Math.random() > 0.5 ? 1 : -1,
      })
    }
    bulbsRef.current = bulbs
  }

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const { clientWidth, clientHeight } = document.documentElement
        setDimensions({
          width: clientWidth,
          height: clientHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  // Initialize bulbs when dimensions change
  useEffect(() => {
    initBulbs()
  }, [dimensions])

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || !dimensions.width || !dimensions.height) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const drawBulb = (x: number, y: number, size: number, color: string, intensity: number) => {
      // Create a linear gradient for each ball
      const gradient = ctx.createLinearGradient(x - size, y, x + size, y)
      gradient.addColorStop(0, "rgba(101, 207, 95, 0.8)") // #65CF5F with 80% opacity
      gradient.addColorStop(1, "#1F9BED")

      // Draw the bulb with gradient
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
    }

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Update and draw bulbs
      bulbsRef.current.forEach((bulb) => {
        // Update position
        bulb.x += bulb.speedX
        bulb.y += bulb.speedY

        // Bounce off edges
        if (bulb.x < bulb.size * 3 || bulb.x > dimensions.width - bulb.size * 3) {
          bulb.speedX *= -1
        }
        if (bulb.y < bulb.size * 3 || bulb.y > dimensions.height - bulb.size * 3) {
          bulb.speedY *= -1
        }

        // Update pulse effect
        if (pulseEffect) {
          bulb.intensity += bulb.pulseSpeed * bulb.pulseDirection
          if (bulb.intensity > 1) {
            bulb.intensity = 1
            bulb.pulseDirection = -1
          } else if (bulb.intensity < 0.5) {
            bulb.intensity = 0.5
            bulb.pulseDirection = 1
          }
        }

        // Draw bulb
        drawBulb(bulb.x, bulb.y, bulb.size, bulb.color, bulb.intensity)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [dimensions, pulseEffect])

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
    />
  )
}
