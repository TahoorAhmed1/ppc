"use client";

import type React from "react";
import { useEffect } from "react";

interface RainbowCursorProps {
  dotCount?: number;
  maxSize?: number;
  minSize?: number;
  baseSpeed?: number;
  saturation?: number;
  lightness?: number;
}

const RainbowCursor: React.FC<RainbowCursorProps> = ({
  dotCount = 20,
  maxSize = 12,
  minSize = 3,
  baseSpeed = 8,
  saturation = 80,
  lightness = 60,
}) => {
  useEffect(() => {
    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D | null;
    let animationFrame: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const cursor = { x: width / 2, y: height / 2 };
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    class Dot {
      position: { x: number; y: number };
      width: number;
      lag: number;
      hue: number;
      opacity: number;

      constructor(
        x: number,
        y: number,
        width: number,
        lag: number,
        hue: number,
        opacity = 1
      ) {
        this.position = { x, y };
        this.width = width;
        this.lag = lag;
        this.hue = hue;
        this.opacity = opacity;
      }

      moveTowards(
        targetX: number,
        targetY: number,
        context: CanvasRenderingContext2D
      ) {
        this.position.x += (targetX - this.position.x) / this.lag;
        this.position.y += (targetY - this.position.y) / this.lag;

        // Use HSL for rainbow effect
        const colorValue = `hsla(${this.hue}, ${saturation}%, ${lightness}%, ${this.opacity})`;

        context.fillStyle = colorValue;
        context.beginPath();
        context.arc(
          this.position.x,
          this.position.y,
          this.width,
          0,
          2 * Math.PI
        );
        context.fill();
        context.closePath();
      }
    }

    const dots: Dot[] = [];
    for (let i = 0; i < dotCount; i++) {
      const size = maxSize - (maxSize - minSize) * (i / dotCount);

      const lag = baseSpeed + i * 1.5;

      const opacity = 1 - i / (dotCount * 1.5);

      const hue = (i * (360 / dotCount)) % 360;

      dots.push(new Dot(width / 2, height / 2, size, lag, hue, opacity));
    }

    const onMouseMove = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        cursor.x = e.touches[0].clientX;
        cursor.y = e.touches[0].clientY;
      }
    };

    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const updateDots = () => {
      if (context) {
        context.clearRect(0, 0, width, height);

        // First dot follows the cursor
        dots[0].moveTowards(cursor.x, cursor.y, context);

        // Each subsequent dot follows the previous dot
        for (let i = 1; i < dots.length; i++) {
          dots[i].moveTowards(
            dots[i - 1].position.x,
            dots[i - 1].position.y,
            context
          );
        }
      }
    };

    const loop = () => {
      updateDots();
      animationFrame = requestAnimationFrame(loop);
    };

    const init = () => {
      if (prefersReducedMotion.matches) {
        console.log("Reduced motion enabled, cursor effect skipped.");
        return;
      }

      canvas = document.createElement("canvas");
      context = canvas.getContext("2d");
      canvas.style.position = "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = "9999";
      canvas.width = width;
      canvas.height = height;
      document.body.appendChild(canvas);

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("resize", onWindowResize);
      loop();
    };

    const destroy = () => {
      if (canvas) canvas.remove();
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onWindowResize);
    };

    prefersReducedMotion.onchange = () => {
      if (prefersReducedMotion.matches) {
        destroy();
      } else {
        init();
      }
    };

    init();

    return () => {
      destroy();
    };
  }, [dotCount, maxSize, minSize, baseSpeed, saturation, lightness]);

  return null;
};

export default RainbowCursor;
