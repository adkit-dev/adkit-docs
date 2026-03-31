import { Info, AlertTriangle, Lightbulb, FileText, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export type CalloutVariant = "note" | "info" | "warning" | "tip"

interface CalloutProps {
  variant?: CalloutVariant
  title?: string
  children: ReactNode
  className?: string
}

const config: Record<
  CalloutVariant,
  { Icon: LucideIcon; accent: string; bg: string; border: string; icon: string; titleColor: string }
> = {
  note: {
    Icon: FileText,
    accent: "bg-foreground/20",
    bg: "bg-muted/40",
    border: "border-border/60",
    icon: "text-muted-foreground",
    titleColor: "text-foreground",
  },
  info: {
    Icon: Info,
    accent: "bg-primary",
    bg: "bg-primary/[0.05]",
    border: "border-primary/20",
    icon: "text-primary",
    titleColor: "text-primary",
  },
  warning: {
    Icon: AlertTriangle,
    accent: "bg-amber-500",
    bg: "bg-amber-500/[0.06]",
    border: "border-amber-500/25",
    icon: "text-amber-500",
    titleColor: "text-amber-700 dark:text-amber-400",
  },
  tip: {
    Icon: Lightbulb,
    accent: "bg-emerald-500",
    bg: "bg-emerald-500/[0.06]",
    border: "border-emerald-500/20",
    icon: "text-emerald-600 dark:text-emerald-400",
    titleColor: "text-emerald-700 dark:text-emerald-400",
  },
}

export function Callout({ variant = "note", title, children, className }: CalloutProps) {
  const { Icon, accent, bg, border, icon, titleColor } = config[variant]

  return (
    <div className={cn("flex overflow-hidden rounded-lg border", bg, border, className)}>
      <div className={cn("w-1 shrink-0", accent)} />
      <div className="flex flex-1 gap-3 px-4 py-3.5">
        <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", icon)} />
        <div
          className={cn(
            "min-w-0 flex-1 text-sm leading-relaxed",
            "[&_code]:rounded [&_code]:bg-black/[0.06] [&_code]:dark:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs",
            "[&_a]:underline [&_a]:underline-offset-4",
            "[&_p]:m-0 [&_p+p]:mt-2",
            "[&_ol]:mt-2 [&_ol]:space-y-1 [&_ol]:list-decimal [&_ol]:list-inside",
            "[&_strong]:font-semibold"
          )}
        >
          {title && (
            <p className={cn("mb-1.5 font-semibold leading-snug", titleColor)}>{title}</p>
          )}
          <div className="text-foreground/80">{children}</div>
        </div>
      </div>
    </div>
  )
}
