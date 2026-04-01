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
  { Icon: LucideIcon; accent: string; bg: string; border: string; icon: string; iconBg: string; titleColor: string }
> = {
  note: {
    Icon: FileText,
    accent: "bg-slate-300 dark:bg-white/15",
    bg: "bg-white dark:bg-muted/25",
    border: "border-slate-200 dark:border-border/60",
    icon: "text-slate-600 dark:text-muted-foreground",
    iconBg: "bg-slate-100 dark:bg-white/5",
    titleColor: "text-foreground",
  },
  info: {
    Icon: Info,
    accent: "bg-sky-500",
    bg: "bg-sky-50/95 dark:bg-primary/[0.08]",
    border: "border-sky-200 dark:border-primary/20",
    icon: "text-sky-700 dark:text-primary",
    iconBg: "bg-sky-100 dark:bg-primary/10",
    titleColor: "text-sky-900 dark:text-primary",
  },
  warning: {
    Icon: AlertTriangle,
    accent: "bg-amber-500",
    bg: "bg-amber-50/95 dark:bg-amber-500/[0.10]",
    border: "border-amber-200 dark:border-amber-500/25",
    icon: "text-amber-700 dark:text-amber-400",
    iconBg: "bg-amber-100 dark:bg-amber-500/10",
    titleColor: "text-amber-700 dark:text-amber-400",
  },
  tip: {
    Icon: Lightbulb,
    accent: "bg-emerald-500",
    bg: "bg-emerald-50/95 dark:bg-emerald-500/[0.10]",
    border: "border-emerald-200 dark:border-emerald-500/20",
    icon: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-100 dark:bg-emerald-500/10",
    titleColor: "text-emerald-700 dark:text-emerald-400",
  },
}

export function Callout({ variant = "note", title, children, className }: CalloutProps) {
  const { Icon, accent, bg, border, icon, iconBg, titleColor } = config[variant]

  return (
    <div
      className={cn(
        "flex overflow-hidden rounded-xl border shadow-[0_10px_30px_-18px_rgba(15,23,42,0.18)] dark:shadow-[0_18px_45px_-24px_rgba(0,0,0,0.55)]",
        bg,
        border,
        className,
      )}
    >
      <div className={cn("w-1 shrink-0", accent)} />
      <div className="flex flex-1 gap-3 px-4 py-3.5">
        <div className={cn("mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md", iconBg)}>
          <Icon className={cn("h-4 w-4", icon)} />
        </div>
        <div
          className={cn(
            "min-w-0 flex-1 text-sm leading-relaxed",
            "[&_code]:rounded [&_code]:bg-black/6 [&_code]:dark:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs",
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
