import { Card, CardContent } from "@/components/ui/card"
import { TiltCard } from "@/components/abun/tilt-card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    quote: "Abun helped us scale our content 10x without hiring more writers. The AI quality is honestly impressive.",
    author: "Sarah Chen",
    role: "Content Director @ TechFlow",
    initials: "SC",
  },
  {
    quote: "We went from 200 to 5K monthly visitors in 3 months. This tool is a game-changer for SEO teams.",
    author: "Marcus Rodriguez",
    role: "SEO Manager @ GrowthCo",
    initials: "MR",
  },
  {
    quote: "Finally, an AI tool that understands SEO. The keyword research integration alone saves us hours.",
    author: "Elena Kowalski",
    role: "Founder @ ContentBox",
    initials: "EK",
  },
  {
    quote: "Our clients are seeing real results. The technical SEO automation is exactly what we needed.",
    author: "James Patterson",
    role: "Agency Owner @ Digital Pro",
    initials: "JP",
  },
]

export function Testimonials() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-balance text-center text-3xl font-semibold md:text-4xl">
          {"Loved by marketers, founders & SEO experts."}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          {"See what users are saying about their growth with Abun."}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <TiltCard key={t.author} className="group">
              <Card className="border-muted bg-card/60 transition-colors hover:bg-card h-full">
                <CardContent className="p-6 flex flex-col h-full" style={{ transformStyle: "preserve-3d" }}>
                  <p
                    className="flex-1 text-sm leading-relaxed italic text-foreground"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {`"${t.quote}"`}
                  </p>
                  <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                    <Avatar className="h-10 w-10 bg-primary">
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {t.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold transition-colors group-hover:text-primary">{t.author}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
