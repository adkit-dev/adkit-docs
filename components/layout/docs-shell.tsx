"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Topbar } from "./topbar"
import { Sidebar } from "./sidebar"
import { MobileNav } from "./mobile-nav"
import { Footer } from "./footer"
import { SkipLink } from "./skip-link"
import { CommandPalette } from "@/components/search/command-palette"
import { AssistantDock } from "@/components/assistant/assistant-dock"

interface DocsShellProps {
  children: React.ReactNode
}

export function DocsShell({ children }: DocsShellProps) {
  const pathname = usePathname()
  const [searchOpen, setSearchOpen] = useState(false)
  const [assistantExpanded, setAssistantExpanded] = useState(false)
  const [queuedAssistantPrompt, setQueuedAssistantPrompt] = useState<{ id: number; text: string } | null>(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  // Close assistant on navigation
  useEffect(() => {
    setAssistantExpanded(false)
  }, [pathname])

  const handleAskAiFromSearch = (query: string) => {
    setSearchOpen(false)
    setAssistantExpanded(true)
    setQueuedAssistantPrompt({ id: Date.now(), text: query })
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === "i" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setAssistantExpanded((prev) => !prev)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <SkipLink />
      <Topbar
        onSearchClick={() => setSearchOpen(true)}
        onMenuClick={() => setMobileNavOpen(true)}
      />
      <div className={cn("flex flex-1", assistantExpanded && "h-[calc(100vh-3.5rem)] overflow-hidden")}>
        <div className="hidden lg:block">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)]">
            <Sidebar onSearchClick={() => setSearchOpen(true)} />
          </div>
        </div>
        <main
          id="main-content"
          className={cn("relative flex-1 overflow-hidden", assistantExpanded && "h-[calc(100vh-3.5rem)]")}
          tabIndex={-1}
        >
          <div
            className={cn("relative z-0", assistantExpanded && "pointer-events-none")}
            aria-hidden={assistantExpanded ? "true" : undefined}
          >
            {children}
            <Footer />
          </div>
          {assistantExpanded && (
            <div className="pointer-events-auto absolute inset-0 z-40 bg-background/5 backdrop-blur-[1px]" aria-hidden="true" />
          )}
          <AssistantDock
            expanded={assistantExpanded}
            onExpandedChange={setAssistantExpanded}
            queuedPrompt={queuedAssistantPrompt}
            onQueuedPromptHandled={() => setQueuedAssistantPrompt(null)}
          />
        </main>
      </div>

      <MobileNav open={mobileNavOpen} onOpenChange={setMobileNavOpen} />
      <CommandPalette open={searchOpen} onOpenChange={setSearchOpen} onAskAi={handleAskAiFromSearch} />
    </div>
  )
}
