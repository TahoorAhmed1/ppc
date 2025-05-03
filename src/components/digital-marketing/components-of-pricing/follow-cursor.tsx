"use client"

import type React from "react"
import { useEffect } from "react"

interface FollowCursorProps {
  dotCount?: number
  maxSize?: number
  minSize?: number
  baseSpeed?: number
  colorful?: boolean
  customColors?: string[]
  cursorStyle?: "circle" | "ring" | "dot" | "none"
  cursorSize?: number
}

const FollowCursor: React.FC<FollowCursorProps> = ({
  dotCount = 4,
  maxSize = 16,
  minSize = 6,
  baseSpeed = 8,
  colorful = true,
  customColors,
  cursorStyle = "dot",
  cursorSize = 20,
}) => {
  useEffect(() => {
    let canvas: HTMLCanvasElement
    let context: CanvasRenderingContext2D | null
    let animationFrame: number
    let width = window.innerWidth
    let height = window.innerHeight
    const cursor = { x: width / 2, y: height / 2 }
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

    // Default brand colors - exactly 4 colors for 4 dots
    const defaultColors = [
      "#3CBFAE", // Teal
      "#65CF5F", // Green
      "#1F9BED", // Blue
      "#5ce0c6", // Light teal
    ]

    // Use custom colors if provided, otherwise use default colors
    const colors = customColors || defaultColors

    class Dot {
      position: { x: number; y: number }
      width: number
      lag: number
      color: string
      opacity: number

      constructor(x: number, y: number, width: number, lag: number, color: string, opacity = 1) {
        this.position = { x, y }
        this.width = width
        this.lag = lag
        this.color = color
        this.opacity = opacity
      }

      moveTowards(targetX: number, targetY: number, context: CanvasRenderingContext2D) {
        this.position.x += (targetX - this.position.x) / this.lag
        this.position.y += (targetY - this.position.y) / this.lag

        // Extract RGB components from the color
        let colorValue = this.color
        const alpha = this.opacity

        // Handle hex color format
        if (this.color.startsWith("#")) {
          const r = Number.parseInt(this.color.slice(1, 3), 16)
          const g = Number.parseInt(this.color.slice(3, 5), 16)
          const b = Number.parseInt(this.color.slice(5, 7), 16)
          colorValue = `rgba(${r}, ${g}, ${b}, ${alpha})`
        }
        // Handle rgba format
        else if (this.color.startsWith("rgba")) {
          colorValue = this.color.replace(/[\d.]+\)$/, `${alpha})`)
        }
        // Handle rgb format
        else if (this.color.startsWith("rgb")) {
          colorValue = this.color.replace("rgb", "rgba").replace(")", `, ${alpha})`)
        }

        context.fillStyle = colorValue
        context.beginPath()
        context.arc(this.position.x, this.position.y, this.width, 0, 2 * Math.PI)
        context.fill()
        context.closePath()
      }
    }

    class Cursor {
      position: { x: number; y: number }
      size: number
      color: string
      style: string

      constructor(x: number, y: number, size: number, color: string, style: string) {
        this.position = { x, y }
        this.size = size
        this.color = color
        this.style = style
      }

      update(x: number, y: number, context: CanvasRenderingContext2D) {
        this.position.x = x
        this.position.y = y

        if (this.style === "none") return

        context.beginPath()

        if (this.style === "ring") {
          context.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI)
          context.strokeStyle = this.color
          context.lineWidth = 2
          context.stroke()
        } else if (this.style === "circle") {
          context.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI)
          context.fillStyle = this.color
          context.fill()
        } else if (this.style === "dot") {
          // For dot style, make it slightly larger than the trail dots
          context.arc(this.position.x, this.position.y, this.size / 2, 0, 2 * Math.PI)
          context.fillStyle = this.color
          context.fill()
        }

        context.closePath()
      }
    }

    // Create the main cursor
    const mainCursor = new Cursor(width / 2, height / 2, cursorSize, colorful ? colors[0] : "#323232a6", cursorStyle)

    // Create exactly 4 dots with decreasing sizes and increasing lag
    const dots: Dot[] = []
    for (let i = 0; i < Math.min(dotCount, 4); i++) {
      // Calculate size: largest dot first, smallest last
      const size = maxSize - (maxSize - minSize) * (i / 3)

      // Calculate lag: first dot has base speed, each subsequent dot is slower
      // Increase spacing between dots
      const lag = baseSpeed + i * 4

      // Calculate opacity: first dot is most opaque, last dot is most transparent
      const opacity = 0.9 - i / 5

      // Assign color: cycle through the colors array
      const color = colorful ? colors[i % colors.length] : "#323232a6"

      dots.push(new Dot(width / 2, height / 2, size, lag, color, opacity))
    }

    const onMouseMove = (e: MouseEvent) => {
      cursor.x = e.clientX
      cursor.y = e.clientY

      // Hide the default cursor when our custom cursor is active
      if (cursorStyle !== "none") {
        document.body.style.cursor = "none"
      }
    }

    const onMouseLeave = () => {
      // Restore the default cursor when mouse leaves the window
      document.body.style.cursor = "auto"
    }

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        cursor.x = e.touches[0].clientX
        cursor.y = e.touches[0].clientY
      }
    }

    const onWindowResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      if (canvas) {
        canvas.width = width
        canvas.height = height
      }
    }

    const updateCursorAndDots = () => {
      if (context) {
        context.clearRect(0, 0, width, height)

        // Update the main cursor
        mainCursor.update(cursor.x, cursor.y, context)

        // First dot follows the cursor with a lag
        dots[0].moveTowards(cursor.x, cursor.y, context)

        // Each subsequent dot follows the previous dot
        for (let i = 1; i < dots.length; i++) {
          dots[i].moveTowards(dots[i - 1].position.x, dots[i - 1].position.y, context)
        }
      }
    }

    const loop = () => {
      updateCursorAndDots()
      animationFrame = requestAnimationFrame(loop)
    }

    const init = () => {
      if (prefersReducedMotion.matches) {
        console.log("Reduced motion enabled, cursor effect skipped.")
        return
      }

      canvas = document.createElement("canvas")
      context = canvas.getContext("2d")
      canvas.style.position = "fixed"
      canvas.style.top = "0"
      canvas.style.left = "0"
      canvas.style.pointerEvents = "none"
      canvas.style.zIndex = "9999"
      canvas.width = width
      canvas.height = height
      document.body.appendChild(canvas)

      window.addEventListener("mousemove", onMouseMove)
      window.addEventListener("mouseleave", onMouseLeave)
      window.addEventListener("touchmove", onTouchMove)
      window.addEventListener("resize", onWindowResize)
      loop()
    }

    const destroy = () => {
      if (canvas) canvas.remove()
      document.body.style.cursor = "auto"
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseleave", onMouseLeave)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("resize", onWindowResize)
    }

    prefersReducedMotion.onchange = () => {
      if (prefersReducedMotion.matches) {
        destroy()
      } else {
        init()
      }
    }

    init()

    return () => {
      destroy()
    }
  }, [dotCount, maxSize, minSize, baseSpeed, colorful, customColors, cursorStyle, cursorSize])

  return null // This component doesn't render any visible JSX
}

export default FollowCursor
