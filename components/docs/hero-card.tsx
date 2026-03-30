import Link from "next/link"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface HeroCardProps {
  title: string
  description: string
  href: string
  icon: LucideIcon
  className?: string
}

export function HeroCard({ title, description, href, icon: Icon, className }: HeroCardProps) {
  const patternId = `grid-${href.replace(/[^a-zA-Z0-9_-]/g, "-")}`

  return (
    <Link href={href} className={cn("group cursor-pointer", className)}>
      <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all sm:h-52">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent"
        />

        <svg
          className="absolute inset-0 h-full w-full opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_100%)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id={patternId} width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/15 dark:text-primary/35"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>

        <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/20 dark:border-primary/35 bg-primary/5 dark:bg-primary/10 backdrop-blur-sm ring-1 ring-primary/10 dark:ring-primary/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-transform duration-200 group-hover:scale-105">
          <Icon
            className="h-10 w-10 text-primary/70 dark:text-primary drop-shadow-[0_0_10px_rgba(113,98,242,0.35)]"
            strokeWidth={1.5}
          />
        </div>
      </div>

      <div className="mt-5 space-y-1">
        <h3 className="font-medium text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}
