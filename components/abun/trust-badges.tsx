import { Shield, Lock, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const badges = [
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data is never used to train our models",
  },
  {
    icon: Award,
    title: "Trusted by 5K+",
    description: "Marketers, founders & SEO experts worldwide",
  },
]

export function TrustBadges() {
  return (
    <section className="border-t border-b bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {badges.map((badge) => {
            const Icon = badge.icon
            return (
              <Card key={badge.title} className="border-0 bg-transparent">
                <CardContent className="flex items-center gap-3 p-4">
                  <Icon className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">{badge.title}</p>
                    <p className="text-xs text-muted-foreground">{badge.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
