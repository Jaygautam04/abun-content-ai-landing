import { Card, CardContent } from "@/components/ui/card"
import { TiltCard } from "@/components/abun/tilt-card"

const benefits = [
  {
    title: "Built for Scale",
    desc: "Publish AI articles, programmatic pages, and updates at scale with zero setup time.",
  },
  {
    title: "Privacy First",
    desc: "Enterprise‑grade security with transparent pricing and great support.",
  },
  {
    title: "Community Driven",
    desc: "New tools every month and frequent feature drops based on real marketer feedback.",
  },
]

export function Benefits() {
  return (
    <section className="border-y bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-balance text-center text-3xl font-semibold md:text-4xl">
          {"We are your unfair advantage."}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          {"Our users see guaranteed growth within 30 days."}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {benefits.map((b) => (
            <TiltCard key={b.title} className="group">
              <Card className="bg-card transition-colors hover:bg-card/90">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
