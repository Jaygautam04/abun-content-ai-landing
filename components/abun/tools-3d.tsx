"use client"
import { TiltCard } from "./tilt-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const tools = [
  {
    title: "AI Content Writer & Blog Generator",
    desc: "Create human‑like, SEO‑ready articles using NLP with coherent, long‑form structure.",
  },
  {
    title: "AI Rewording Tool",
    desc: "Generate plagiarism‑free rewrites for posts, emails, and articles.",
  },
  {
    title: "AI Blog Automation",
    desc: "Automate briefs, drafts, images, and publishing to streamline content ops.",
  },
  {
    title: "Programmatic SEO",
    desc: "Scale landing pages from data and templates with consistency and speed.",
  },
  {
    title: "Keyword Research",
    desc: "Discover opportunities and map them to content at scale.",
  },
  {
    title: "Content Samples",
    desc: "Preview tone, structure, and SEO schema with sharable samples.",
  },
]

export function Tools3D() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-semibold text-foreground">Everything you need to grow</h2>
        <p className="mt-2 text-muted-foreground">
          Powerful tools packaged into a simple, modern, and affordable toolkit.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((t) => (
          <TiltCard key={t.title} className="rounded-xl border bg-card/70 backdrop-blur">
            <Card className="rounded-xl border-0 bg-transparent shadow-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{t.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">{t.desc}</p>
                <div className="mt-4 h-20 rounded-md border bg-muted/40" aria-hidden="true" />
              </CardContent>
            </Card>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
