import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row">
        <p className="text-sm text-muted-foreground">
          {"© "} {new Date().getFullYear()} {" Abun. All rights reserved."}
        </p>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <Link href="https://abun.com/" prefetch={false} className="hover:text-foreground">
            {"Home"}
          </Link>
          <Link
            href="https://abun.com/ai-content-writer-blog-generator"
            prefetch={false}
            className="hover:text-foreground"
          >
            {"AI Content Writer"}
          </Link>
          <Link href="https://abun.com/ai-powered-rewording-tool" prefetch={false} className="hover:text-foreground">
            {"Rewording Tool"}
          </Link>
          <Link href="https://abun.com/integrations" prefetch={false} className="hover:text-foreground">
            {"Integrations"}
          </Link>
          <Link href="https://app.abun.com/auth/signup" prefetch={false} className="hover:text-foreground">
            {"Sign up"}
          </Link>
        </nav>
      </div>
    </footer>
  )
}
