"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type RotatingTextProps = {
  words: string[]
  intervalMs?: number
  className?: string
  cycleColor?: boolean
}

export function RotatingText({ words, intervalMs = 1800, className, cycleColor = true }: RotatingTextProps) {
  const [idx, setIdx] = React.useState(0)

  React.useEffect(() => {
    if (!words || words.length <= 1) return
    const id = setInterval(() => setIdx((i) => (i + 1) % words.length), intervalMs)
    return () => clearInterval(id)
  }, [words, intervalMs])

  return (
    <span
      className={cn("relative inline-block h-[1em] align-baseline overflow-hidden", className)}
      aria-live="polite"
      aria-atomic="true"
    >
      <span
        key={idx}
        className={cn(
          "inline-block will-change-transform",
          "animate-[v0-rt-in_380ms_cubic-bezier(.22,1,.36,1)]",
          cycleColor && "animate-color-cycle",
        )}
        style={{ color: "var(--color-primary)" }}
      >
        {words[idx]}
      </span>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes v0-rt-in {
              0% { opacity: 0; transform: translateY(0.35em) }
              100% { opacity: 1; transform: translateY(0) }
            }
          `,
        }}
      />
    </span>
  )
}
