"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Menu, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { topNavigation } from "@/lib/docs/nav"
import { SiteLogo } from "./site-logo"
import { ThemeToggle } from "./theme-toggle"

interface TopbarProps {
  onSearchClick?: () => void
  onMenuClick?: () => void
}

export function Topbar({ onSearchClick, onMenuClick }: TopbarProps) {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-sidebar-border bg-sidebar/80 px-4 backdrop-blur-sm lg:px-6">
      {/* Left: menu toggle (mobile) + logo */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 lg:hidden"
          aria-label="Open navigation menu"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <SiteLogo />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-64 items-center justify-end pr-4 lg:flex">
        <div className="pointer-events-auto">
          <ThemeToggle />
        </div>
      </div>

      <div className="ml-auto hidden md:flex items-center gap-1">
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
        <Link href="/quickstart" className="ml-2">
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

      <div className="flex items-center gap-2 lg:hidden">
        <ThemeToggle />
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 md:hidden"
          aria-label="Search"
          onClick={onSearchClick}
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
