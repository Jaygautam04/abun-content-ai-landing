import Link from "next/link"
import { RotatingText } from "@/components/abun/rotating-text"
import { MagneticButton } from "@/components/abun/magnetic-button"

export function Hero() {
  return (
    <header className="bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        {/* Tagline gets subtle color cycle to feel alive */}
        <p className="text-center text-xs font-medium tracking-wider text-muted-foreground animate-color-cycle">
          {"AI SEO & Marketing Tools"}
        </p>
        {/* Headline now includes rotating text */}
        <h1 className="mt-3 text-balance text-center text-4xl font-semibold tracking-tight md:text-6xl">
          {"The All‑In‑One Toolkit for "}
          <RotatingText
            words={["SEO", "Growth Marketing", "Content Teams", "Founders", "Agencies"]}
            cycleColor
            className="px-1"
          />
          {"."}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-center text-base leading-relaxed text-muted-foreground md:text-lg">
          {
            "Used by 5,325 Marketers, Founders, and SEO Experts to drive traffic, generate leads, rank faster, and achieve solid business growth."
          }
        </p>
        {/* Swap CTAs to magnetic buttons for premium hover */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <MagneticButton asChild size="lg" className="rounded-full">
            <Link href="https://app.abun.com/auth/signup" prefetch={false}>
              {"Claim Your Free Account"}
            </Link>
          </MagneticButton>
          <MagneticButton asChild size="lg" variant="secondary" className="rounded-full">
            <Link href="https://abun.com/integrations" prefetch={false}>
              {"View Integrations"}
            </Link>
          </MagneticButton>
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          {"Free Accounts available only for a Limited Time"}
        </p>

        {/* 3D Showcase */}
        <div
          className="mx-auto mt-10 max-w-4xl"
          style={{ perspective: "1200px" }} // establish 3D space
          aria-hidden="true"
        >
          <div className="relative h-56 md:h-64">
            {/* Back plate */}
            <div
              className="absolute inset-0 rounded-2xl border bg-secondary/50"
              style={{
                transform: "rotateX(14deg) rotateY(-18deg) translateZ(-40px)",
                transformStyle: "preserve-3d",
                animation: "v0-rotate-slow 22s linear infinite",
              }}
            />
            {/* Main card */}
            <div
              className="absolute left-1/2 top-1/2 h-40 w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border bg-card shadow-xl md:h-48 hover-shimmer"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateX(12deg) rotateY(12deg) translateZ(0px)",
                animation: "v0-float 6s ease-in-out infinite",
              }}
            >
              {/* Raised header strip */}
              <div
                className="h-10 w-full rounded-t-2xl"
                style={{
                  background: "var(--color-secondary)",
                  color: "var(--color-secondary-foreground)",
                  transform: "translateZ(18px)",
                }}
              />
              {/* Pills */}
              <div className="grid grid-cols-2 gap-2 p-4 md:grid-cols-3">
                {[
                  "AI Articles",
                  "Keyword Research",
                  "Programmatic SEO",
                  "Auto Schema",
                  "Fast Indexing",
                  "AI Blog Automation",
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-md border bg-secondary px-3 py-2 text-xs text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    style={{ transform: "translateZ(12px)" }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
            {/* Floating badge */}
            <div
              className="absolute right-6 top-6 rounded-full border bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow-md"
              style={{
                transform: "translateZ(32px) rotateY(-8deg) rotateX(6deg)",
                animation: "v0-float 7.5s ease-in-out -1.5s infinite, v0-color-cycle 8s ease-in-out infinite",
              }}
            >
              {"Sleek • Modern • Simple"}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
