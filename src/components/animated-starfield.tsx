"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  hasGradient: boolean
  twinkleSpeed: number
  twinkleDirection: number
  maxOpacity: number
  minOpacity: number
}

interface AnimatedStarfieldProps {
  starCount?: number
  minSize?: number
  maxSize?: number
  backgroundColor?: string
  minSpeed?: number
  maxSpeed?: number
}

export default function AnimatedStarfield({
  starCount = 150,
  minSize = 2,
  maxSize = 3,
  backgroundColor = "",
  minSpeed = 0.5,
  maxSpeed = 1.5,
}: AnimatedStarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Regenerate stars when canvas is resized
      starsRef.current = generateStars()
    }

    // Generate stars with random properties
    const generateStars = (): Star[] => {
      const stars: Star[] = []
      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * (maxSize - minSize) + minSize
        const hasGradient = Math.random() < 0.15 // 15% of stars have gradient
        const maxOpacity = hasGradient ? 0.8 : 0.9
        const minOpacity = hasGradient ? 0.3 : 0.2
        const opacity = Math.random() * (maxOpacity - minOpacity) + minOpacity

        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          opacity,
          speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
          hasGradient,
          twinkleSpeed: 0.002 + Math.random() * 0.005,
          twinkleDirection: Math.random() > 0.5 ? 1 : -1,
          maxOpacity,
          minOpacity,
        })
      }
      return stars
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw stars
      starsRef.current.forEach((star) => {
        // Move star
        star.y += star.speed

        // Wrap around when star goes off screen
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }

        // Twinkle effect
        star.opacity += star.twinkleSpeed * star.twinkleDirection
        if (star.opacity >= star.maxOpacity) {
          star.opacity = star.maxOpacity
          star.twinkleDirection = -1
        } else if (star.opacity <= star.minOpacity) {
          star.opacity = star.minOpacity
          star.twinkleDirection = 1
        }

        // Draw star
        if (star.hasGradient) {
          // Create gradient for special stars
          const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 2)
          gradient.addColorStop(0, `rgba(101, 207, 95, ${star.opacity})`)
          gradient.addColorStop(1, `rgba(31, 155, 237, ${star.opacity * 0.8})`)
          ctx.fillStyle = gradient

          // Draw slightly larger for gradient stars
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 1.5, 0, Math.PI * 2)
          ctx.fill()

          // Add glow effect for gradient stars
          const glowGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 4)
          glowGradient.addColorStop(0, `rgba(101, 207, 95, ${star.opacity * 0.3})`)
          glowGradient.addColorStop(1, "rgba(31, 155, 237, 0)")
          ctx.fillStyle = glowGradient
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2)
          ctx.fill()
        } else {
          // Regular white stars
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // Occasionally add a shooting star
      if (Math.random() < 0.003) {
        createShootingStar(ctx, canvas.width, canvas.height)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    // Create shooting star effect
    const createShootingStar = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      const x = Math.random() * width
      const y = 0
      const length = 50 + Math.random() * 70
      const angle = Math.PI / 4 + (Math.random() * Math.PI) / 4
      const speed = 15 + Math.random() * 10

      let currentX = x
      let currentY = y
      let alpha = 1

      const drawShootingStar = () => {
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(currentX, currentY)

        // Calculate new position
        currentX += Math.cos(angle) * speed
        currentY += Math.sin(angle) * speed

        ctx.lineTo(currentX, currentY)
        ctx.stroke()

        // Fade out
        alpha -= 0.02

        if (alpha > 0 && currentX < width && currentY < height) {
          requestAnimationFrame(drawShootingStar)
        }
      }

      drawShootingStar()
    }

    // Initial setup
    resizeCanvas()
    starsRef.current = generateStars()
    animate()

    // Handle window resize
    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [starCount, minSize, maxSize, backgroundColor, minSpeed, maxSpeed])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ backgroundColor }}
    />
  )
}
