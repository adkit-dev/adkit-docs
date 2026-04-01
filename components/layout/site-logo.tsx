"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/docs/nav"

interface SiteLogoProps {
  className?: string
  onClick?: () => void
}

export function SiteLogo({ className, onClick }: SiteLogoProps) {
  return (
    <Link href="/docs" className={cn("flex items-center gap-2", className)} onClick={onClick}>
      <span className="font-mono text-lg font-semibold text-foreground">
        <span className="text-muted-foreground">&lt;</span>
        <span className="text-primary">{siteConfig.name.replace(/\s+Docs$/, "")}</span>
        <span className="text-muted-foreground">/&gt;</span>
      </span>
    </Link>
  )
}
