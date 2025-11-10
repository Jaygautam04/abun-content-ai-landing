import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Integrations() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">{"Full‑Fledged Integrations"}</h2>
          <p className="mt-3 text-muted-foreground">
            {
              "We integrate with all the latest tech, so you are not left behind. Built for teams that hate complexity but love when things just work."
            }
          </p>
          <div className="mt-6">
            <Button asChild className="rounded-full">
              <Link href="https://abun.com/integrations" prefetch={false}>
                {"View Integrations"}
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>{"Simple by Design"}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-sm text-muted-foreground">
              {"Zero setup time and a single price for everything."}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{"Designed for Efficiency"}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-sm text-muted-foreground">
              {"Automate content and technical SEO with one click."}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{"Enterprise‑Grade Security"}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-sm text-muted-foreground">
              {"Privacy first with transparent pricing and great support."}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
