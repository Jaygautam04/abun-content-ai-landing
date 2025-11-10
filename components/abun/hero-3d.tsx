"use client"
import { MagneticButton } from "./magnetic-button"
import { TiltCard } from "./tilt-card"
import { Button } from "@/components/ui/button"

export function Hero3D() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            All‑in‑One AI SEO & Growth Marketing Toolkit
          </h1>
          <p className="text-pretty text-muted-foreground">
            Abun is an AI Content Writer that creates valuable, human‑like content. Generate blogs, automate publishing,
            and scale programmatic SEO—fast, simple, and affordable.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton size="lg" className="bg-primary text-primary-foreground">
              Get Started Free
            </MagneticButton>
            <Button variant="outline" size="lg">
              See How It Works
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">No credit card required. Cancel anytime.</p>
        </div>

        {/* 3D stack preview */}
        <div className="relative h-[360px] w-full">
          <div
            className="absolute inset-0 rounded-2xl"
            aria-hidden="true"
            style={{
              background: "radial-gradient(1200px 600px at 80% 20%, rgba(80,200,120,0.08), transparent 60%)",
              filter: "blur(0.5px)",
            }}
          />
          <div className="absolute right-4 top-4 hidden md:block">
            <span className="rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">Live preview</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[88%] max-w-[520px]">
              <div className="pointer-events-none absolute -left-4 -top-6 h-8 w-24 rounded-full bg-primary/10 blur-md" />
              <div className="pointer-events-none absolute -bottom-8 -right-4 h-10 w-28 rounded-full bg-primary/10 blur-md" />

              <div className="space-y-6">
                <TiltCard className="rounded-2xl border bg-card/70 backdrop-blur">
                  <div className="p-5">
                    <h3 className="text-sm font-medium text-muted-foreground">AI Content Writer & Blog Generator</h3>
                    <p className="mt-1 text-sm">Create long‑form, coherent articles with SEO‑ready structure.</p>
                    <div className="mt-3 h-24 rounded-lg border bg-muted/40" aria-hidden="true" />
                  </div>
                </TiltCard>

                <div className="ml-6">
                  <TiltCard className="rounded-2xl border bg-card/70 backdrop-blur">
                    <div className="p-5">
                      <h3 className="text-sm font-medium text-muted-foreground">AI Blog Automation</h3>
                      <p className="mt-1 text-sm">Automate briefs, drafts, images, and publishing.</p>
                      <div className="mt-3 grid grid-cols-3 gap-2" aria-hidden="true">
                        <div className="h-16 rounded-md border bg-muted/40" />
                        <div className="h-16 rounded-md border bg-muted/40" />
                        <div className="h-16 rounded-md border bg-muted/40" />
                      </div>
                    </div>
                  </TiltCard>
                </div>

                <div className="-ml-6">
                  <TiltCard className="rounded-2xl border bg-card/70 backdrop-blur">
                    <div className="p-5">
                      <h3 className="text-sm font-medium text-muted-foreground">Programmatic SEO</h3>
                      <p className="mt-1 text-sm">Generate thousands of high‑quality pages from templates and data.</p>
                      <div className="mt-3 h-20 rounded-md border bg-muted/40" aria-hidden="true" />
                    </div>
                  </TiltCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
