"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type TiltCardProps = {
  className?: string
  maxTilt?: number // in degrees
  scale?: number
  children: React.ReactNode
  glare?: boolean // enable highlight glare
  glareOpacity?: number // 0..1
  shadow?: boolean // enable hover shadow
}

export function TiltCard({
  className,
  maxTilt = 12,
  scale = 1.02,
  children,
  glare = true,
  glareOpacity = 0.35,
  shadow = true,
}: TiltCardProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const glareRef = React.useRef<HTMLDivElement>(null)

  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false

  const [transform, setTransform] = React.useState<string>("")

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = (x / rect.width) * 2 - 1
    const py = (y / rect.height) * 2 - 1

    if (prefersReducedMotion) {
      setTransform(`perspective(1000px)`)
      if (glare && glareRef.current) glareRef.current.style.opacity = "0"
      return
    }

    const rx = (-py * maxTilt).toFixed(2)
    const ry = (px * maxTilt).toFixed(2)
    setTransform(`perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`)

    el.style.setProperty("--mx", `${x}px`)
    el.style.setProperty("--my", `${y}px`)

    if (glare && glareRef.current) {
      const d = Math.hypot(px, py) // 0 (center) to ~1.41 (corner)
      const intensity = Math.max(0, 1 - Math.min(d, 1)) // 1 at center -> 0 at edge
      glareRef.current.style.opacity = String((glareOpacity * intensity).toFixed(3))
      // position handled by radial-gradient anchor via --mx/--my
    }
  }

  const reset = () => {
    setTransform(`perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`)
    if (glare && glareRef.current) glareRef.current.style.opacity = "0"
  }

  return (
    <div
      ref={ref}
      className={cn(
        "relative will-change-transform transition-transform duration-200 ease-out",
        "rounded-lg overflow-hidden group",
        shadow && "hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/40",
        "hover:ring-1 hover:ring-primary/20",
        // enable GPU acceleration
        "transform-gpu",
        className,
      )}
      style={{ transform: transform || "perspective(1000px)" }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onPointerDown={reset}
      onPointerCancel={reset}
    >
      {glare ? (
        <div
          ref={glareRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150"
          style={{
            background:
              "radial-gradient(220px 220px at var(--mx) var(--my), rgba(255,255,255,0.35), rgba(255,255,255,0) 60%)",
            mixBlendMode: "screen",
          }}
        />
      ) : null}

      <div style={{ transformStyle: "preserve-3d" }}>{children}</div>
    </div>
  )
}
