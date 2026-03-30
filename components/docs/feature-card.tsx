import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  logo: ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureCard({ logo, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/60 bg-linear-to-b from-background via-card/90 to-card/70 p-6 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_60px_-28px_rgba(0,0,0,0.55)]",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_32%),linear-gradient(180deg,transparent,rgba(0,0,0,0.03))] opacity-80 dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_32%),linear-gradient(180deg,transparent,rgba(255,255,255,0.02))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent dark:via-white/15"
      />

      <div className="relative z-10 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primary/8 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-300 group-hover:scale-105 group-hover:border-primary/30 group-hover:bg-primary/12 dark:bg-primary/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          {logo}
        </div>
      </div>

      <div className="relative z-10 mt-5">
        <h3 className="text-base font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
