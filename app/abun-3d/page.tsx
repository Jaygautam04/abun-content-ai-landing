import { Hero3D } from "@/components/abun/hero-3d"
import { Tools3D } from "@/components/abun/tools-3d"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Page() {
  return (
    <main className="min-h-dvh bg-background">
      <Hero3D />
      <Tools3D />

      <section className="mx-auto w-full max-w-6xl px-4 pb-20">
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          <Card className="border bg-card/70 backdrop-blur">
            <CardContent className="p-6">
              <h3 className="text-sm font-medium text-muted-foreground">Built for teams</h3>
              <p className="mt-1 text-sm">Collaborate on briefs, drafts, and content calendars with approvals.</p>
            </CardContent>
          </Card>
          <Card className="border bg-card/70 backdrop-blur">
            <CardContent className="p-6">
              <h3 className="text-sm font-medium text-muted-foreground">SEO‑native</h3>
              <p className="mt-1 text-sm">Structured headings, entities, and schema baked‑in.</p>
            </CardContent>
          </Card>
          <Card className="border bg-card/70 backdrop-blur">
            <CardContent className="p-6">
              <h3 className="text-sm font-medium text-muted-foreground">Simple & affordable</h3>
              <p className="mt-1 text-sm">Transparent pricing that scales with your needs.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground">
            Start creating with Abun
          </Button>
        </div>
      </section>
    </main>
  )
}
