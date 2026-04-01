"use client"

import { cn } from "@/lib/utils"
import { useShortcutModifier } from "@/hooks/use-shortcut-modifier"
import { Kbd } from "@/components/ui/kbd"

interface ShortcutHintProps {
  keyLabel: string
  className?: string
}

export function ShortcutHint({ keyLabel, className }: ShortcutHintProps) {
  const modifier = useShortcutModifier()
  const modifierSymbol = modifier === "Cmd" ? "⌘" : "⌃"

  return (
    <Kbd className={cn("gap-0.5", className)} aria-label={`${modifier}+${keyLabel}`}>
      <span aria-hidden="true">{modifierSymbol}</span>
      <span>{keyLabel}</span>
    </Kbd>
  )
}
