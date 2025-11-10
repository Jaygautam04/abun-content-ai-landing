import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { TiltCard } from "@/components/abun/tilt-card"

const categories = [
  {
    title: "Create Content",
    tools: [
      "AI Articles",
      "AI Blog Automation",
      "AI Programmatic SEO",
      "AI Glossary Creator",
      "Video to Article",
      "AI Comparison Pages",
      "AI Infographic / Stats Page",
    ],
  },
  {
    title: "Win Keywords",
    tools: [
      "LongTail Keyword Research",
      "Steal Competitor Keywords",
      "AI Keyword Research",
      "ICP → Keyword Research",
      "Manual Keyword Research",
    ],
  },
  {
    title: "Technical & On‑Page",
    tools: [
      "AI Auto Schema",
      "Fast Indexing",
      "AI Auto Technical SEO",
      "AI Internal Links Builder",
      "AI Article Updater",
      "Optimize Published Articles",
    ],
  },
  {
    title: "Operate & Grow",
    tools: [
      "Search Console Insights",
      "Content Calendar",
      "AI SEO Tracker",
      "GMB SEO Tracker",
      "Guest Post Finder",
      "Backlink Directory",
      "AI Calculator Widgets",
      "Blog Author Email Finder",
      "Email Verifier & Finder",
      "Reddit SEO",
    ],
  },
]

export function ToolsSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-balance text-center text-3xl font-semibold md:text-4xl">{"Start Scaling your Traffic"}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          {"All good things packed into one software. Feature‑rich tools that help you publish faster and rank higher."}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {categories.map((cat) => (
            <TiltCard key={cat.title} className="group">
              <Card className="border-muted bg-card/60 transition-colors hover:bg-card">
                <CardHeader>
                  <CardTitle className="text-xl transition-colors group-hover:text-primary hover:text-primary">
                    {cat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent
                  className="grid grid-cols-1 gap-2 sm:grid-cols-2"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {cat.tools.map((t) => (
                    <div
                      key={t}
                      className="rounded-md border bg-secondary px-3 py-2 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      {t}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
