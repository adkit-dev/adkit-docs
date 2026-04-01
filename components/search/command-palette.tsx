"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { FileText, Hash, Search, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { docPages } from "@/lib/docs/pages"
import { useDebounce } from "@/hooks/use-debounce"
import { cn } from "@/lib/utils"

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter()
  const [search, setSearch] = useState("")
  const debouncedSearch = useDebounce(search, 150)
  const inputRef = useRef<HTMLInputElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const filteredPages = useMemo(() => {
    const query = debouncedSearch.toLowerCase()
    if (!query) return docPages.slice(0, 12)
    return docPages.filter(
      (page) => page.title.toLowerCase().includes(query) || page.description.toLowerCase().includes(query),
    )
  }, [debouncedSearch])

  const quickLinks = [
    { label: "Getting started", slug: "quickstart" },
    { label: "API Reference", slug: "api/serve" },
  ]

  const allItems = [
    ...filteredPages.map((p) => ({ type: "page" as const, label: p.title, desc: p.description, slug: p.slug })),
    ...(debouncedSearch
      ? []
      : quickLinks.map((l) => ({ type: "quick" as const, label: l.label, desc: "", slug: l.slug }))),
  ]

  // Reset state when opening
  useEffect(() => {
    if (open) {
      setSearch("")
      setActiveIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    setActiveIndex(0)
  }, [debouncedSearch])

  const handleSelect = (slug: string) => {
    onOpenChange(false)
    setSearch("")
    router.push(slug ? `/docs/${slug}` : "/docs")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, allItems.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === "Enter") {
      e.preventDefault()
      if (allItems[activeIndex]) handleSelect(allItems[activeIndex].slug)
    } else if (e.key === "Escape") {
      onOpenChange(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
          />

          {/* Panel — slides up from bottom on mobile, centered on desktop */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", stiffness: 420, damping: 44, mass: 0.75 }}
            className="fixed bottom-0 left-0 right-0 z-50 sm:bottom-auto sm:left-1/2 sm:top-[15%] sm:-translate-x-1/2 sm:w-full sm:max-w-lg"
          >
            <div className="rounded-t-2xl sm:rounded-2xl border border-border/60 bg-card/95 backdrop-blur-2xl shadow-2xl shadow-black/30 overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[70vh]">
              {/* Header with search input */}
              <div className="shrink-0 flex items-center gap-3 px-4 py-3.5 border-b border-border/50">
                <Search className="h-4 w-4 text-muted-foreground shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search documentation..."
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  aria-label="Search documentation"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                <button
                  onClick={() => onOpenChange(false)}
                  className="flex items-center gap-1 rounded border border-border/60 bg-muted/50 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground transition-colors hover:text-foreground sm:hidden"
                  aria-label="Close search"
                >
                  Close
                </button>
                <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-border/60 bg-muted/50 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                  esc
                </kbd>
              </div>

              {/* Results */}
              <div className="flex-1 overflow-y-auto overscroll-contain p-2">
                {allItems.length === 0 ? (
                  <div className="py-10 text-center text-sm text-muted-foreground">No results found.</div>
                ) : (
                  <>
                    {/* Pages group */}
                    {filteredPages.length > 0 && (
                      <div className="mb-1">
                        <div className="px-2 py-1.5 text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                          Pages
                        </div>
                        {filteredPages.map((page, idx) => {
                          const isActive = idx === activeIndex
                          return (
                            <button
                              key={page.slug}
                              onClick={() => handleSelect(page.slug)}
                              onMouseEnter={() => setActiveIndex(idx)}
                              className={cn(
                                "group w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-100",
                                isActive
                                  ? "bg-primary/10 text-foreground"
                                  : "text-foreground hover:bg-muted/60"
                              )}
                            >
                              <div className={cn(
                                "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors",
                                isActive ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
                              )}>
                                <FileText className="h-4 w-4" aria-hidden="true" />
                              </div>
                              <div className="flex flex-col min-w-0 flex-1">
                                <span className="text-sm font-medium truncate">{page.title}</span>
                                <span className={cn(
                                  "text-xs truncate transition-colors",
                                  isActive ? "text-muted-foreground" : "text-muted-foreground/70"
                                )}>
                                  {page.description}
                                </span>
                              </div>
                              <ArrowRight className={cn(
                                "h-3.5 w-3.5 shrink-0 transition-all",
                                isActive ? "text-primary opacity-100 translate-x-0" : "text-muted-foreground opacity-0 -translate-x-1"
                              )} />
                            </button>
                          )
                        })}
                      </div>
                    )}

                    {/* Quick links group */}
                    {!debouncedSearch && (
                      <div>
                        <div className="px-2 py-1.5 text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                          Quick links
                        </div>
                        {quickLinks.map((link, idx) => {
                          const itemIdx = filteredPages.length + idx
                          const isActive = itemIdx === activeIndex
                          return (
                            <button
                              key={link.slug}
                              onClick={() => handleSelect(link.slug)}
                              onMouseEnter={() => setActiveIndex(itemIdx)}
                              className={cn(
                                "group w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-100",
                                isActive
                                  ? "bg-primary/10 text-foreground"
                                  : "text-foreground hover:bg-muted/60"
                              )}
                            >
                              <div className={cn(
                                "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors",
                                isActive ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
                              )}>
                                <Hash className="h-4 w-4" aria-hidden="true" />
                              </div>
                              <span className="text-sm font-medium">{link.label}</span>
                              <ArrowRight className={cn(
                                "h-3.5 w-3.5 shrink-0 ml-auto transition-all",
                                isActive ? "text-primary opacity-100 translate-x-0" : "text-muted-foreground opacity-0 -translate-x-1"
                              )} />
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Footer hint */}
              <div className="shrink-0 hidden sm:flex items-center gap-3 border-t border-border/50 px-4 py-2 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1"><kbd className="rounded border border-border/60 bg-muted/50 px-1 py-0.5 font-mono text-[10px]">↑↓</kbd> navigate</span>
                <span className="flex items-center gap-1"><kbd className="rounded border border-border/60 bg-muted/50 px-1 py-0.5 font-mono text-[10px]">↵</kbd> open</span>
                <span className="flex items-center gap-1"><kbd className="rounded border border-border/60 bg-muted/50 px-1 py-0.5 font-mono text-[10px]">esc</kbd> close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
