"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import "./fake-adkit-slot.css"

const RATIO_CSS: Record<string, string> = {
  "16:9": "16 / 9",
  "4:3": "4 / 3",
  "1:1": "1 / 1",
  "9:16": "9 / 16",
  banner: "728 / 90",
}

export type FakeAdkitAspectRatio = "16:9" | "4:3" | "1:1" | "9:16" | "banner"
export type FakeAdkitSize = "sm" | "md" | "lg"
export type FakeAdkitTheme = "auto" | "dark" | "light"

export interface FakeAdkitSlotStyles {
  backgroundColor?: string
  textColorPrimary?: string
  textColorSecondary?: string
  borderColor?: string
}

/** When theme is "auto", follow the docs site theme (next-themes), not system preference. */
function useFakeAdkitIsDark(theme: FakeAdkitTheme): boolean {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (theme === "dark") return true
  if (theme === "light") return false
  return !mounted || resolvedTheme !== "light"
}

export interface FakeAdkitSlotProps {
  slot: string
  aspectRatio: FakeAdkitAspectRatio
  price?: number
  size?: FakeAdkitSize
  theme?: FakeAdkitTheme
  className?: string
  styles?: FakeAdkitSlotStyles
  /** Matches AdSlot loading placeholder (“ad space”, no CTA). */
  loading?: boolean
}

export function FakeAdkitSlot({
  slot,
  aspectRatio,
  price,
  size = "lg",
  theme = "auto",
  className,
  styles,
  loading = false,
}: FakeAdkitSlotProps) {
  const isDark = useFakeAdkitIsDark(theme)

  const styleVars = {
    "--adkit-aspect": RATIO_CSS[aspectRatio],
    "--adkit-bg": styles?.backgroundColor ?? "transparent",
    "--adkit-text-muted":
      styles?.textColorSecondary ?? (isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)"),
    "--adkit-text":
      styles?.textColorSecondary ?? (isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)"),
    "--adkit-text-strong":
      styles?.textColorPrimary ?? (isDark ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.9)"),
    "--adkit-border": styles?.borderColor
      ? `color-mix(in srgb, ${styles.borderColor} 40%, transparent)`
      : isDark
        ? "rgba(255,255,255,0.22)"
        : "rgba(0,0,0,0.1)",
    "--adkit-border-hover": styles?.borderColor
      ? `color-mix(in srgb, ${styles.borderColor} 60%, transparent)`
      : isDark
        ? "rgba(255,255,255,0.38)"
        : "rgba(0,0,0,0.2)",
  } as React.CSSProperties

  const formattedPrice =
    price != null
      ? (() => {
          const dollars = price / 100
          return Number.isInteger(dollars)
            ? dollars.toLocaleString()
            : dollars.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        })()
      : null

  const isBanner = aspectRatio === "banner"
  const ctaText =
    formattedPrice != null ? (isBanner ? "Rent" : "Rent this spot") : "Learn more"

  const rootClass = `adkit-slot ${className ? className : "adkit-slot--default-width"}`

  return (
    <div
      className={rootClass}
      style={styleVars}
      data-adkit-slot={slot}
      data-adkit-ratio={aspectRatio}
      data-adkit-size={size}
    >
      <div className="adkit-canvas">
        <div
          id={`${slot}-placeholder`}
          className="adkit-box"
          style={loading ? { cursor: "default" } : undefined}
        >
          <div className="adkit-content">
            <div className="adkit-label">{loading ? "ad space" : "Your ad here"}</div>
            {formattedPrice != null && <div className="adkit-price">${formattedPrice}/day</div>}
            {!loading && (
              <div className="adkit-cta">
                {ctaText}
                <span className="adkit-arrow">→</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
