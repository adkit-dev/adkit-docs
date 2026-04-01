"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface FrameworkCardProps {
  title: string
  description: string
  iconComponent: React.ComponentType<{ className?: string }>
  href?: string
  showQuickstartLabel?: boolean
  className?: string
}

export function FrameworkCard({
  title,
  description,
  iconComponent: IconComponent,
  href,
  showQuickstartLabel = true,
  className,
}: FrameworkCardProps) {
  const content = (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_34%),linear-gradient(180deg,transparent,rgba(0,0,0,0.03))] opacity-80 dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_34%),linear-gradient(180deg,transparent,rgba(255,255,255,0.02))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent dark:via-white/15"
      />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-primary/15 bg-primary/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-300 group-hover:scale-[1.03] group-hover:border-primary/25 group-hover:bg-primary/10 dark:bg-primary/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <IconComponent className="h-11 w-11" />
        </div>
        <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
      </div>

      <div className="relative z-10 mt-6">
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          {title}
          {showQuickstartLabel ? " Quickstart" : ""}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
      </div>
    </>
  )

  const classes = cn(
    "group relative overflow-hidden rounded-3xl border border-border/60 bg-linear-to-b from-background via-card/95 to-card/80 p-6 shadow-[0_14px_50px_-28px_rgba(0,0,0,0.5)] transition-all duration-300",
    href && "hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_60px_-28px_rgba(0,0,0,0.55)]",
    className,
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return <div className={classes}>{content}</div>
}
