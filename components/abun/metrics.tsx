import { Card, CardContent } from "@/components/ui/card"
import { TiltCard } from "@/components/abun/tilt-card"

const items = [
  {
    label: "Community",
    value: "5,325+",
    note: "marketers, founders & SEO experts",
  },
  {
    label: "Scale",
    value: "2.6B+",
    note: "AI/LLM tokens used by our users",
  },
  {
    label: "Speed",
    value: "Lightning‑fast",
    note: "indexing & automation",
  },
  {
    label: "No learning curve",
    value: "Minutes",
    note: "to first results",
  },
]

export function Metrics() {
  return (
    <section className="border-y">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-10 md:grid-cols-4">
        {items.map((m) => (
          <TiltCard key={m.label} className="group">
            <Card className="bg-secondary transition-colors hover:bg-card">
              <CardContent className="p-6" style={{ transformStyle: "preserve-3d" }}>
                <p className="text-sm text-muted-foreground" style={{ transform: "translateZ(8px)" }}>
                  {m.label}
                </p>
                <p
                  className="mt-1 text-3xl font-semibold transition-colors group-hover:text-primary"
                  style={{ transform: "translateZ(14px)" }}
                >
                  {m.value}
                </p>
                <p
                  className="mt-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground/80"
                  style={{ transform: "translateZ(8px)" }}
                >
                  {m.note}
                </p>
              </CardContent>
            </Card>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
