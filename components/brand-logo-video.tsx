"use client"

import { cn } from "@/lib/utils"

export function BrandLogoVideo({ className }: { className?: string }) {
  return (
    <div className={cn("size-8 shrink-0 overflow-hidden rounded-md", className)} aria-hidden>
      <video
        className="size-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/logo.webm" type="video/webm" />
      </video>
    </div>
  )
}
