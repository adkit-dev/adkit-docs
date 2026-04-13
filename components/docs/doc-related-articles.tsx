import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { getRelatedArticles } from "@/lib/docs/related-articles"

export function DocRelatedArticles({ slug }: { slug: string }) {
  const items = getRelatedArticles(slug)
  if (items.length === 0) return null

  return (
    <section
      aria-labelledby="doc-related-heading"
      className={cn(
        "mx-auto px-4 sm:px-8 pb-16 sm:pb-20 border-t border-border",
        slug === "quickstart" ? "max-w-4xl" : "max-w-3xl"
      )}
    >
      <h2 id="doc-related-heading" className="text-xl font-semibold text-foreground pt-10 sm:pt-12 mb-4">
        Related articles
      </h2>
      <div className="grid gap-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center justify-between gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors group"
          >
            <div className="min-w-0">
              <p className="font-medium text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
          </Link>
        ))}
      </div>
    </section>
  )
}
