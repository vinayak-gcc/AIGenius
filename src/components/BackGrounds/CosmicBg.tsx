"use client"

import { useEffect, useRef } from "react"

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Resize canvas based on container
    const resizeCanvas = () => {
      const { width, height } = container.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
    }
    
    const observer = new ResizeObserver(resizeCanvas)
    observer.observe(container)
    resizeCanvas()

    // Create stars
    const stars: { x: number; y: number; size: number; speed: number }[] = []
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.2 + 0.05,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "rgb(28, 14, 42)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#2d1854")
      gradient.addColorStop(1, "#1c0e2a")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        const opacity = Math.random() * 0.5 + 0.3
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()

        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 z-[-1]">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
