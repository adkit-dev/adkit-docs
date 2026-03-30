"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Sparkles, MoreVertical, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { topNavigation } from "@/lib/docs/nav"
import { SiteLogo } from "./site-logo"

interface TopbarProps {
  onSearchClick?: () => void
  onAssistantClick?: () => void
}

export function Topbar({ onSearchClick, onAssistantClick }: TopbarProps) {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-sidebar-border bg-sidebar/80 px-4 backdrop-blur-sm lg:px-6">
      {/* Logo on left */}
      <SiteLogo />

      {/* Desktop navigation */}
      <div className="hidden md:flex items-center gap-1">
        <nav className="flex items-center gap-1" aria-label="Main navigation">
          {topNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-1.5 text-sm font-medium transition-colors flex items-center",
                pathname.startsWith(item.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <Link href="/docs/quickstart" className="ml-2">
          <ShimmerButton
            shimmerColor="hsl(270 70% 75%)"
            background="hsl(270 70% 45%)"
            className="h-9 px-4 font-sans text-sm font-medium"
          >
            Quickstarts
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </ShimmerButton>
        </Link>
      </div>

      {/* Mobile icons */}
      <div className="flex items-center gap-1 md:hidden">
        <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Search" onClick={onSearchClick}>
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="AI Assistant" onClick={onAssistantClick}>
          <Sparkles className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="More options">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
