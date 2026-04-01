"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Sparkles, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { navigation } from "@/lib/docs/nav"
import { ThemeToggle } from "./theme-toggle"
import { JavaScriptIcon, ReactIcon } from "@/components/icons/sdk-icons"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface SidebarProps {
  onSearchClick?: () => void
  onAssistantClick?: () => void
}

function getSectionIcon(title: string) {
  if (title === "React SDK") {
    return <ReactIcon className="h-4 w-4" />
  }
  if (title === "JavaScript SDK") {
    return <JavaScriptIcon className="h-4 w-4" />
  }
  return null
}

export function Sidebar({ onSearchClick, onAssistantClick }: SidebarProps) {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    navigation.forEach((section) => {
      if (section.collapsible) {
        initial[section.title] = section.defaultOpen ?? true
      }
    })
    return initial
  })

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <aside
      role="navigation"
      aria-label="Main navigation"
      className="flex h-full w-64 flex-col border-r border-border/50 bg-sidebar"
    >
      <div className="flex items-center gap-2 p-4">
        <Button
          variant="outline"
          className="h-9 flex-1 justify-start gap-2 border-border bg-background text-foreground/70 hover:bg-muted hover:text-foreground"
          onClick={onSearchClick}
          aria-label="Open search (Cmd+K)"
        >
          <Search className="h-4 w-4" />
          <span className="text-sm">Search...</span>
          <kbd className="ml-auto hidden rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium sm:inline-block">
            ⌘K
          </kbd>
        </Button>
        <ShimmerButton
          shimmerColor="hsl(270 70% 75%)"
          background="hsl(270 70% 45%)"
          className="h-9 shrink-0 px-3 font-sans text-sm font-medium"
          onClick={onAssistantClick}
          aria-label="Open AI assistant"
        >
          <Sparkles className="mr-1.5 h-4 w-4" />
          Ask AI
        </ShimmerButton>
      </div>

      <nav className="flex-1 overflow-y-auto overscroll-contain px-3 pb-4" tabIndex={0}>
        {navigation.map((section) => {
          const customIcon = getSectionIcon(section.title)
          const isCollapsible = section.collapsible
          const isOpen = openSections[section.title] ?? true

          if (isCollapsible) {
            return (
              <Collapsible
                key={section.title}
                open={isOpen}
                onOpenChange={() => toggleSection(section.title)}
                className="mb-4"
              >
                <CollapsibleTrigger className="flex w-full items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-sm font-medium text-foreground hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center gap-2">
                    {customIcon || (section.icon && <section.icon className="h-4 w-4" aria-hidden="true" />)}
                    {section.title}
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-muted-foreground transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="mt-1 space-y-0.5 border-l border-border/50 ml-3 pl-3" role="list">
                    {section.items.map((item) => {
                      const isActive = pathname === item.href
                      const ItemIcon = item.icon
                      return (
                        <li key={item.href}>
                            <Link
                              href={item.href}
                              aria-current={isActive ? "page" : undefined}
                              className={cn(
                                "flex min-h-[36px] items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors",
                                isActive
                                  ? "bg-primary/10 font-medium text-accent-light"
                                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                              )}
                            >
                              {ItemIcon && <ItemIcon className="h-4 w-4 shrink-0" />}
                              {item.isCode ? (
                                <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-primary">
                                  {item.title}
                                </code>
                              ) : (
                                item.title
                              )}
                            </Link>
                        </li>
                      )
                    })}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            )
          }

          return (
            <div key={section.title} className="mb-4">
              <div className="mb-1 flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-foreground">
                {section.icon && <section.icon className="h-4 w-4" aria-hidden="true" />}
                {section.title}
              </div>
              <ul className="space-y-0.5" role="list">
                {section.items.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex min-h-[44px] items-center gap-2 rounded-lg px-2 py-2 text-sm transition-colors",
                          isActive
                            ? "bg-primary/10 font-medium text-accent-light"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                        )}
                      >
                        {item.isCode ? (
                          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-primary">
                            {item.title}
                          </code>
                        ) : (
                          item.title
                        )}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </nav>

      <div className="border-t border-border/50 p-4">
        <div className="flex items-center justify-end">
          <ThemeToggle />
        </div>
      </div>
    </aside>
  )
}
