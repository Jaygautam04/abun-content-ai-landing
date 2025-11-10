import { Check } from "lucide-react"

const comparisonData = [
  {
    feature: "AI Content Creation",
    abun: true,
    generic: false,
    note: "Human-like articles at scale",
  },
  {
    feature: "Keyword Research (LongTail)",
    abun: true,
    generic: true,
    note: "Find low-competition opportunities",
  },
  {
    feature: "Technical SEO Automation",
    abun: true,
    generic: false,
    note: "Auto schema, indexing, internal links",
  },
  {
    feature: "Content Calendar",
    abun: true,
    generic: true,
    note: "Organize your content strategy",
  },
  {
    feature: "Search Console Integration",
    abun: true,
    generic: false,
    note: "Monitor & optimize automatically",
  },
  {
    feature: "Competitive Analysis",
    abun: true,
    generic: true,
    note: "Steal competitor keywords & backlinks",
  },
  {
    feature: "Fast Indexing",
    abun: true,
    generic: false,
    note: "Get indexed in hours, not days",
  },
  {
    feature: "Programmatic SEO",
    abun: true,
    generic: false,
    note: "Scale pages like Amazon & Wikipedia",
  },
]

export function ComparisonSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-balance text-center text-3xl font-semibold md:text-4xl">{"Why Abun is different"}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          {"We've built the all-in-one platform for SEO & content teams. Here's what sets us apart."}
        </p>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left text-sm font-semibold">Feature</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">Abun</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">Others</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item) => (
                <tr key={item.feature} className="border-b border-border hover:bg-secondary/30 transition-colors">
                  <td className="px-4 py-3 text-sm">
                    <p className="font-medium">{item.feature}</p>
                    <p className="text-xs text-muted-foreground">{item.note}</p>
                  </td>
                  <td className="px-4 py-3 text-center">
                    {item.abun && <Check className="mx-auto h-5 w-5 text-primary" />}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {item.generic && <Check className="mx-auto h-5 w-5 text-muted-foreground opacity-50" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
