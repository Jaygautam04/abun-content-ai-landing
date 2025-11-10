"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type MagneticButtonProps = React.ComponentProps<typeof Button> & {
  strength?: number // px pull radius
}

export function MagneticButton({ className, strength = 32, children, ...props }: MagneticButtonProps) {
  const wrapRef = React.useRef<HTMLDivElement>(null)
  const btnRef = React.useRef<HTMLButtonElement>(null)

  const reset = () => {
    if (!btnRef.current) return
    btnRef.current.style.transform = "translate3d(0,0,0)"
  }

  const onMove = (e: React.MouseEvent) => {
    if (!wrapRef.current || !btnRef.current) return
    const rect = wrapRef.current.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    const dist = Math.hypot(relX, relY)
    const max = strength
    const pull = Math.max(0, max - dist) / max
    const tx = (relX / rect.width) * pull * max
    const ty = (relY / rect.height) * pull * max
    btnRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
  }

  return (
    <div
      ref={wrapRef}
      className="inline-block"
      onMouseMove={onMove}
      onMouseLeave={reset}
      onMouseUp={reset}
      onBlur={reset}
    >
      <Button
        ref={btnRef}
        className={cn(
          "transition-transform duration-100 will-change-transform",
          "shadow-[0_8px_24px_rgba(0,0,0,0.15)]",
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    </div>
  )
}
