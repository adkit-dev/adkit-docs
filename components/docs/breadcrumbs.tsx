"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { JavaScriptIcon, ReactIcon } from "@/components/icons/sdk-icons"
import { cn } from "@/lib/utils"

export type BreadcrumbItem = { label: string; href?: string }

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

function SdkSectionIcon({ href, label }: BreadcrumbItem) {
  if (href?.startsWith("/react") || label === "React SDK") {
    return <ReactIcon className="size-3.5 shrink-0" aria-hidden />
  }
  if (href?.startsWith("/js") || label === "JavaScript SDK") {
    return <JavaScriptIcon className="size-3.5 shrink-0" aria-hidden />
  }
  return null
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const contentClass = "inline-flex items-center gap-1.5 truncate max-w-[120px] sm:max-w-none"
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center text-sm text-muted-foreground", className)}>
      <ol className="flex items-center gap-1 overflow-x-auto">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center hover:text-foreground transition-colors"
            aria-label="Documentation home"
          >
            <Home className="size-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="size-4 mx-1 shrink-0" aria-hidden="true" />
            {item.href ? (
              <Link href={item.href} className={cn(contentClass, "hover:text-foreground transition-colors")}>
                <SdkSectionIcon {...item} />
                {item.label}
              </Link>
            ) : (
              <span className={cn(contentClass, "text-foreground")} aria-current="page">
                <SdkSectionIcon {...item} />
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
