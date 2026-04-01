"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
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
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  // Close assistant on navigation
  useEffect(() => {
    setAssistantExpanded(false)
  }, [pathname])

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
        onAssistantClick={() => setAssistantExpanded(true)}
        onMenuClick={() => setMobileNavOpen(true)}
      />
      <div className="flex flex-1">
        <div className="hidden lg:block">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)]">
            <Sidebar onSearchClick={() => setSearchOpen(true)} onAssistantClick={() => setAssistantExpanded(true)} />
          </div>
        </div>
        <main id="main-content" className="relative flex-1 overflow-hidden" tabIndex={-1}>
          {children}
          <Footer />
          <AssistantDock expanded={assistantExpanded} onExpandedChange={setAssistantExpanded} />
        </main>
      </div>

      <MobileNav open={mobileNavOpen} onOpenChange={setMobileNavOpen} />
      <CommandPalette open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  )
}
