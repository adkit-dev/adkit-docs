"use client"

import { Check, Link } from "lucide-react"
import { Breadcrumbs } from "@/components/docs/breadcrumbs"
import { Button } from "@/components/ui/button"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

interface DocPageHeaderProps {
  title: string
  description: string
  breadcrumbItems?: { label: string; href?: string }[]
  slug?: string
  headerClassName?: string
}

export function DocPageHeader({ title, description, breadcrumbItems = [], slug, headerClassName = "mb-8" }: DocPageHeaderProps) {
  const { copied, copy } = useCopyToClipboard()

  const copyLink = () => {
    const url = typeof window !== "undefined" && slug
      ? `${window.location.origin}/docs/${slug}`
      : `/docs/${slug ?? ""}`
    copy(url)
  }

  return (
    <>
      {breadcrumbItems.length > 0 && (
        <div className="mb-4 flex items-center justify-between gap-2 sm:mb-6">
          <Breadcrumbs items={breadcrumbItems} />
          {slug && (
            <Button
              variant="ghost"
              size="sm"
              onClick={copyLink}
              className="h-7 shrink-0 gap-1.5 px-2 text-muted-foreground hover:text-foreground"
              aria-label="Copy link to this page"
            >
              {copied ? (
                <>
                  <Check className="size-3.5" />
                  <span className="text-xs">Copied</span>
                </>
              ) : (
                <>
                  <Link className="size-3.5" />
                  <span className="hidden text-xs sm:inline">Copy link</span>
                </>
              )}
            </Button>
          )}
        </div>
      )}
      <header className={headerClassName}>
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">{title}</h1>
        <p className="text-base text-muted-foreground sm:text-lg">{description}</p>
      </header>
    </>
  )
}
