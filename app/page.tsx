import { Hero } from "@/components/abun/hero"
import { Metrics } from "@/components/abun/metrics"
import { ToolsSection } from "@/components/abun/tools-section"
import { Benefits } from "@/components/abun/benefits"
import { Integrations } from "@/components/abun/integrations"
import { Testimonials } from "@/components/abun/testimonials"
import { ComparisonSection } from "@/components/abun/comparison-section"
import { FaqSection } from "@/components/abun/faq-section"
import { TrustBadges } from "@/components/abun/trust-badges"
import { CtaSection } from "@/components/abun/cta-section"
import { Footer } from "@/components/abun/footer"

export default function Page() {
  return (
    <main className="min-h-dvh">
      <Hero />
      <Metrics />
      <ToolsSection />
      <Benefits />
      <Integrations />
      <TrustBadges />
      <Testimonials />
      <ComparisonSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
