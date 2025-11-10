import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">{"Ready to grow with AI?"}</h2>
          <p className="mt-3 text-base/relaxed opacity-90">
            {
              "Claim your free account and start publishing human‑like AI articles, research long‑tail keywords, and automate your blog."
            }
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link href="https://app.abun.com/auth/signup" prefetch={false}>
                {"Claim Your Free Account"}
              </Link>
            </Button>
          </div>
          <p className="mt-2 text-xs opacity-80">{"Free Accounts available only for a Limited Time"}</p>
        </div>
      </div>
    </section>
  )
}
