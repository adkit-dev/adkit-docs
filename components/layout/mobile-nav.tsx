"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { getNavSectionIcon, navigation } from "@/lib/docs/nav"
import { ThemeToggle } from "./theme-toggle"
import { SiteLogo } from "./site-logo"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface MobileNavProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
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
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-full max-w-sm p-0" hideCloseButton>
        <SheetTitle className="sr-only">Documentation navigation</SheetTitle>
        <div className="flex flex-col h-full">
          {/* Header with logo, theme toggle, close button */}
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <SiteLogo onClick={() => onOpenChange(false)} />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                onClick={() => onOpenChange(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navigation sections */}
          <nav className="overflow-y-auto flex-1 px-4 py-3">
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
                      <ul className="mt-1 space-y-0.5 border-l border-border/50 ml-3 pl-3">
                        {section.items.map((item) => {
                          const isActive = pathname === item.href
                          const ItemIcon = item.icon
                          return (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={() => onOpenChange(false)}
                                className={cn(
                                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                                  isActive
                                    ? "bg-primary/10 text-accent-light font-medium"
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
                  <div className="mb-2 flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-foreground">
                    {SectionIcon && <SectionIcon className="h-4 w-4" aria-hidden="true" />}
                    {section.title}
                  </div>
                  <ul className="space-y-0.5">
                    {section.items.map((item) => {
                      const isActive = pathname === item.href
                      const ItemIcon = item.icon
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => onOpenChange(false)}
                            className={cn(
                              "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                              isActive
                                ? "bg-primary/10 text-accent-light font-medium"
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
                </div>
              )
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
