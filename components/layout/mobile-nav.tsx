"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { navigation, topNavigation } from "@/lib/docs/nav"
import { ThemeToggle } from "./theme-toggle"
import { SiteLogo } from "./site-logo"
import { JavaScriptIcon, ReactIcon } from "@/components/icons/sdk-icons"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface MobileNavProps {
  open: boolean
  onOpenChange: (open: boolean) => void
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

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const pathname = usePathname()
  const [sectionOpen, setSectionOpen] = useState(false)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    navigation.forEach((section) => {
      if (section.collapsible) {
        initial[section.title] = section.defaultOpen ?? true
      }
    })
    return initial
  })

  const currentSection = topNavigation.find((item) => pathname.startsWith(item.href)) || topNavigation[0]

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

          {/* Section dropdown */}
          <div className="px-4 py-3 border-b border-border">
            <div className="relative">
              <button
                className="flex w-full items-center justify-between rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm"
                onClick={() => setSectionOpen(!sectionOpen)}
              >
                <span>{currentSection?.title || "Documentation"}</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", sectionOpen && "rotate-180")} />
              </button>
              {sectionOpen && (
                <div className="absolute left-0 right-0 top-full mt-1 z-10 rounded-lg border border-border bg-background shadow-lg">
                  {topNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex w-full items-center px-4 py-2.5 text-sm hover:bg-secondary transition-colors",
                        pathname.startsWith(item.href) && "text-accent",
                      )}
                      onClick={() => {
                        setSectionOpen(false)
                        onOpenChange(false)
                      }}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Navigation sections */}
          <nav className="overflow-y-auto flex-1 px-4 py-3">
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
                      <ul className="mt-1 space-y-0.5 border-l border-border/50 ml-3 pl-3">
                        {section.items.map((item) => {
                          const isActive = pathname === item.href
                          return (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={() => onOpenChange(false)}
                                className={cn(
                                  "flex items-center rounded-lg px-3 py-2 text-sm transition-colors",
                                  isActive
                                    ? "bg-primary/10 text-accent-light font-medium"
                                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                                )}
                              >
                                {item.title}
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
                    {section.icon && <section.icon className="h-4 w-4" />}
                    {section.title}
                  </div>
                  <ul className="space-y-0.5">
                    {section.items.map((item) => {
                      const isActive = pathname === item.href
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => onOpenChange(false)}
                            className={cn(
                              "flex items-center rounded-lg px-3 py-2 text-sm transition-colors",
                              isActive
                                ? "bg-primary/10 text-accent-light font-medium"
                                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                            )}
                          >
                            {item.title}
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
