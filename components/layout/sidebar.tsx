"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ShortcutHint } from "@/components/ui/shortcut-hint"
import { getNavSectionIcon, navigation } from "@/lib/docs/nav"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface SidebarProps {
  onSearchClick?: () => void
}

export function Sidebar({ onSearchClick }: SidebarProps) {
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
      <div className="p-4">
        <Button
          variant="outline"
          className="h-10 w-full justify-start gap-2 rounded-full border-border bg-background px-4 text-foreground/70 hover:bg-muted hover:text-foreground"
          onClick={onSearchClick}
          aria-label="Open search"
        >
          <Search className="h-4 w-4" />
          <span className="text-sm">Search...</span>
          <ShortcutHint keyLabel="K" className="ml-auto hidden sm:inline-flex" />
        </Button>
      </div>

      <nav className="flex-1 overflow-y-auto overscroll-contain px-3 pb-4" tabIndex={0}>
        {navigation.map((section) => {
          const SectionIcon = getNavSectionIcon(section.title) ?? section.icon
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
                    {SectionIcon && <SectionIcon className="h-4 w-4" aria-hidden="true" />}
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
                {SectionIcon && <SectionIcon className="h-4 w-4" aria-hidden="true" />}
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
    </aside>
  )
}
