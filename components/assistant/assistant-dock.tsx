"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { ArrowRight, ArrowUp, RotateCcw, Sparkles } from "lucide-react"
import { ReactIcon, NextJSIcon } from "@/components/icons/sdk-icons"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { MarkdownMessage } from "@/components/assistant/markdown-message"
import { ShimmerButton } from "@/components/ui/shimmer-button"

interface AssistantDockProps {
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
}

interface Message {
  role: "user" | "assistant"
  content: string
  sources?: string[] // articles read to generate this response
}

const SUGGESTIONS = [
  {
    icon: ReactIcon,
    title: "AdSlot",
    isComponent: true,
    description: "React",
    question: "How do I use the AdSlot component?",
  },
  {
    icon: ReactIcon,
    title: "AdkitProvider",
    isComponent: true,
    description: "React",
    question: "How do I set up AdkitProvider?",
  },
  {
    icon: NextJSIcon,
    title: "Next.js Quickstart",
    isComponent: false,
    description: "Get started fast",
    question: "How do I add Adkit to a Next.js app?",
  },
]

const PLACEHOLDERS = [
  "How do I handle SSR with AdkitProvider?",
  "What props does AdSlot accept?",
  "How do I track ad impressions?",
  "Can I lazy load ad slots?",
  "How do I style the booking modal?",
]

const RATE_LIMIT_MAX = 30
const RATE_LIMIT_WINDOW_MS = 30 * 60 * 1000
const RATE_LIMIT_KEY = "adkit-ai-timestamps"

function checkClientRateLimit(): { allowed: boolean; resetInMinutes: number } {
  if (typeof window === "undefined") return { allowed: true, resetInMinutes: 0 }
  try {
    const now = Date.now()
    const raw = localStorage.getItem(RATE_LIMIT_KEY)
    const timestamps: number[] = raw ? JSON.parse(raw) : []
    const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
    if (recent.length >= RATE_LIMIT_MAX) {
      const oldest = Math.min(...recent)
      const resetInMs = oldest + RATE_LIMIT_WINDOW_MS - now
      return { allowed: false, resetInMinutes: Math.ceil(resetInMs / 60000) }
    }
    recent.push(now)
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recent))
    return { allowed: true, resetInMinutes: 0 }
  } catch {
    return { allowed: true, resetInMinutes: 0 }
  }
}

// ---------------------------------------------------------------------------
// Vanishing input with animated placeholder
// ---------------------------------------------------------------------------
function AssistantInput({
  onFocus,
  onSubmit,
  disabled,
}: {
  onFocus?: () => void
  onSubmit?: (value: string) => void
  disabled?: boolean
}) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const newDataRef = useRef<{ x: number; y: number; r: number; color: string }[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState("")
  const [animating, setAnimating] = useState(false)

  const startAnimation = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % PLACEHOLDERS.length)
    }, 3000)
  }, [])

  useEffect(() => {
    startAnimation()
    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible" && intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      } else if (document.visibilityState === "visible") {
        startAnimation()
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [startAnimation])

  const draw = useCallback(() => {
    if (!inputRef.current) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 800
    canvas.height = 800
    ctx.clearRect(0, 0, 800, 800)
    const computedStyles = getComputedStyle(inputRef.current)
    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"))
    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`
    ctx.fillStyle = "#FFF"
    ctx.fillText(value, 16, 40)

    const imageData = ctx.getImageData(0, 0, 800, 800)
    const pixelData = imageData.data
    const newData: { x: number; y: number; color: number[] }[] = []

    for (let t = 0; t < 800; t++) {
      const i = 4 * t * 800
      for (let n = 0; n < 800; n++) {
        const e = i + 4 * n
        if (pixelData[e] !== 0 && pixelData[e + 1] !== 0 && pixelData[e + 2] !== 0) {
          newData.push({ x: n, y: t, color: [pixelData[e], pixelData[e + 1], pixelData[e + 2], pixelData[e + 3]] })
        }
      }
    }

    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
    }))
  }, [value])

  useEffect(() => {
    draw()
  }, [value, draw])

  const runVanishAnimation = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr: typeof newDataRef.current = []
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i]
          if (current.x < pos) {
            newArr.push(current)
          } else {
            if (current.r <= 0) continue
            current.x += Math.random() > 0.5 ? 1 : -1
            current.y += Math.random() > 0.5 ? 1 : -1
            current.r -= 0.05 * Math.random()
            newArr.push(current)
          }
        }
        newDataRef.current = newArr
        const ctx = canvasRef.current?.getContext("2d")
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800)
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color } = t
            if (n > pos) {
              ctx.beginPath()
              ctx.rect(n, i, s, s)
              ctx.fillStyle = color
              ctx.strokeStyle = color
              ctx.stroke()
            }
          })
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8)
        } else {
          setValue("")
          setAnimating(false)
        }
      })
    }
    animateFrame(start)
  }

  const vanishAndSubmit = () => {
    if (!value.trim() || disabled) return
    setAnimating(true)
    draw()
    const maxX = newDataRef.current.reduce((prev, cur) => (cur.x > prev ? cur.x : prev), 0)
    runVanishAnimation(maxX)
    onSubmit?.(value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !animating) {
      vanishAndSubmit()
    }
  }

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      role="search"
      aria-label="Ask AI assistant"
      className="relative rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur-sm overflow-hidden"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault()
          vanishAndSubmit()
        }}
        className="relative h-14"
      >
        <canvas
          className={cn(
            "absolute pointer-events-none text-base transform scale-50 top-[20%] left-4 origin-top-left filter invert dark:invert-0 pr-20",
            !animating ? "opacity-0" : "opacity-100"
          )}
          ref={canvasRef}
        />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => !animating && setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={onFocus}
          disabled={disabled}
          className={cn(
            "w-full h-full bg-transparent px-5 pr-28 text-sm text-foreground focus:outline-none disabled:opacity-50",
            animating && "text-transparent"
          )}
        />

        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <kbd className="hidden rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline-block">
            ⌘I
          </kbd>
          <motion.button
            type="submit"
            disabled={!value.trim() || disabled}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "relative h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300",
              value.trim() && !disabled
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                : "bg-muted text-muted-foreground"
            )}
            aria-label="Send message"
          >
            <motion.div
              animate={{ y: value.trim() && !disabled ? [0, -2, 0] : 0 }}
              transition={{ duration: 1.5, repeat: value.trim() && !disabled ? Infinity : 0, ease: "easeInOut" }}
            >
              <ArrowUp className="h-4 w-4" />
            </motion.div>
            {value.trim() && !disabled && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute inset-0 rounded-full bg-primary/20 animate-ping"
              />
            )}
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {!value && (
            <motion.p
              key={`placeholder-${currentPlaceholder}`}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none"
            >
              {PLACEHOLDERS[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// Logo video
// ---------------------------------------------------------------------------
function AssistantLogoVideo() {
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setShouldLoad(true))
    return () => window.cancelAnimationFrame(id)
  }, [])

  return (
    <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-2xl">
      {shouldLoad ? (
        <video
          className={cn(
            "size-full object-cover transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-hidden
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src="/ai.webm" type="video/webm" />
        </video>
      ) : null}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Reading indicator — shown while Claude fetches a doc article
// ---------------------------------------------------------------------------
function ReadingIndicator({ article }: { article: string }) {
  return (
    <div className="flex items-center gap-2 py-0.5">
      <motion.div
        className="flex items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-1 w-1 rounded-full bg-primary/60"
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
      <span className="text-xs text-muted-foreground">
        Reading <span className="font-medium text-foreground/70">{article}</span>
      </span>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Typing indicator
// ---------------------------------------------------------------------------
function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-1 py-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main dock
// ---------------------------------------------------------------------------
export function AssistantDock({ expanded = false, onExpandedChange }: AssistantDockProps) {
  const [scrollPct, setScrollPct] = useState(0)
  const [messages, setMessages] = useState<Message[]>([])
  const [streamingContent, setStreamingContent] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [readingArticle, setReadingArticle] = useState<string | null>(null)
  const readingArticlesRef = useRef<string[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)

  const isScrolled = scrollPct > 5

  // Track scroll percentage
  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement
      const scrollable = el.scrollHeight - el.clientHeight
      setScrollPct(scrollable > 0 ? (el.scrollTop / scrollable) * 100 : 0)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && expanded) onExpandedChange?.(false)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [expanded, onExpandedChange])

  // ⌘I / Ctrl+I hotkey
  useEffect(() => {
    const handleHotkey = (e: KeyboardEvent) => {
      if (e.key === "i" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onExpandedChange?.(!expanded)
      }
    }
    document.addEventListener("keydown", handleHotkey)
    return () => document.removeEventListener("keydown", handleHotkey)
  }, [expanded, onExpandedChange])

  // Auto-scroll to bottom when messages/streaming updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, streamingContent, isLoading])

  const sendMessage = useCallback(
    async (userText: string) => {
      if (!userText.trim() || isLoading) return

      // Client-side rate limit
      const { allowed, resetInMinutes } = checkClientRateLimit()
      if (!allowed) {
        setError(`Rate limit reached. Try again in ${resetInMinutes} minute${resetInMinutes !== 1 ? "s" : ""}.`)
        onExpandedChange?.(true)
        return
      }

      setError(null)
      setReadingArticle(null)
      readingArticlesRef.current = []
      const userMessage: Message = { role: "user", content: userText.trim() }
      const nextMessages = [...messages, userMessage]
      setMessages(nextMessages)
      setIsLoading(true)
      setStreamingContent("")
      onExpandedChange?.(true)

      try {
        const res = await fetch("/api/assistant", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: nextMessages.slice(-10) }),
        })

        if (res.status === 429) {
          setError("Rate limit exceeded. Please wait 30 minutes.")
          setIsLoading(false)
          return
        }

        if (!res.ok || !res.body) {
          setError("Failed to connect. Please try again.")
          setIsLoading(false)
          return
        }

        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let accumulated = ""

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value, { stream: true })
          for (const line of chunk.split("\n")) {
            if (!line.startsWith("data: ")) continue
            const data = line.slice(6).trim()
            try {
              const parsed = JSON.parse(data)
              if (parsed.type === "done") {
                const sources = [...readingArticlesRef.current]
                setMessages([...nextMessages, { role: "assistant", content: accumulated, sources }])
                setStreamingContent("")
                setReadingArticle(null)
                setIsLoading(false)
                return
              }
              if (parsed.type === "reading") {
                setReadingArticle(parsed.article)
                if (!readingArticlesRef.current.includes(parsed.article)) {
                  readingArticlesRef.current = [...readingArticlesRef.current, parsed.article]
                }
              }
              if (parsed.type === "text") {
                setReadingArticle(null) // clear reading indicator once text starts
                accumulated += parsed.text
                setStreamingContent(accumulated)
              }
              if (parsed.type === "error") {
                setError(parsed.error)
                setIsLoading(false)
                return
              }
            } catch {
              // incomplete JSON chunk, skip
            }
          }
        }
        // Stream ended without done event
        if (accumulated) {
          const sources = [...readingArticlesRef.current]
          setMessages([...nextMessages, { role: "assistant", content: accumulated, sources }])
          setStreamingContent("")
        }
        setReadingArticle(null)
        setIsLoading(false)
      } catch {
        setError("Network error. Please try again.")
        setIsLoading(false)
      }
    },
    [messages, isLoading, onExpandedChange]
  )

  const resetConversation = () => {
    setMessages([])
    setStreamingContent("")
    setError(null)
    setIsLoading(false)
  }

  const hasConversation = messages.length > 0 || isLoading

  const dockVisible = !isScrolled || expanded

  return (
    <>
    {/* FAB — shown when scrolled and chat is closed */}
    <AnimatePresence>
      {isScrolled && !expanded && (
        <motion.div
          key="fab"
          initial={{ scale: 0, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 16 }}
          transition={{ type: "spring", stiffness: 420, damping: 38 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <ShimmerButton
            shimmerColor="hsl(270 70% 75%)"
            shimmerDuration="8s"
            background="hsl(270 70% 45%)"
            className="px-5 py-3 font-sans text-sm font-medium shadow-xl shadow-primary/30"
            onClick={() => onExpandedChange?.(true)}
            aria-label="Open AI assistant"
          >
            <Sparkles className="mr-1.5 h-4 w-4" />
            Ask AI
          </ShimmerButton>
        </motion.div>
      )}
    </AnimatePresence>

    <div
      className="fixed bottom-0 left-0 right-0 z-50 lg:left-64 flex flex-col"
      style={{
        transform: dockVisible ? "translateY(0)" : "translateY(calc(100% + 16px))",
        transition: "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
      }}
    >
      {/* Expanding chat panel — slides up from the input bar */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="chat-panel"
            initial={{ height: 0 }}
            animate={{ height: "calc(100vh - 82px)" }}
            exit={{ height: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 44, mass: 0.75 }}
            className="overflow-hidden flex flex-col bg-card/30 backdrop-blur-2xl border-t border-border/60 will-change-transform"
          >
            {/* Top bar */}
            <div className="shrink-0 flex items-center justify-between px-4 sm:px-6 py-3 border-b border-border/50">
              <button
                onClick={() => onExpandedChange?.(false)}
                className="flex items-center gap-1.5 rounded-lg border border-border/50 px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <kbd className="rounded border border-border/80 bg-background/80 px-1 py-0.5 text-[10px] font-medium shadow-sm">
                  esc
                </kbd>
                <span className="whitespace-nowrap">to close</span>
              </button>

              {hasConversation && (
                <button
                  onClick={resetConversation}
                  className="flex items-center gap-1.5 rounded-lg border border-border/50 px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>New chat</span>
                </button>
              )}
            </div>

            {/* Scrollable content area — fills remaining height */}
            <AnimatePresence mode="wait" initial={false}>
              {!hasConversation ? (
                /* ── Intro / suggestions ── */
                <motion.div
                  key="intro"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex-1 overflow-y-auto"
                >
                  {/* Decorative blobs */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                    <div className="absolute bottom-0 -left-12 h-48 w-48 rounded-full bg-primary/8 blur-2xl" />
                  </div>

                  <div className="relative mx-auto max-w-lg px-6 pt-12 pb-8 text-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.05 }}
                    >
                      <AssistantLogoVideo />
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-xl font-semibold text-foreground"
                    >
                      Ask AdKit AI anything
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.14 }}
                      className="mt-2 text-sm text-muted-foreground"
                    >
                      Get instant answers about integration, pricing, and best practices.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.18 }}
                      className="mt-8 grid gap-2 text-left"
                    >
                      {SUGGESTIONS.map((suggestion, index) => (
                        <motion.button
                          key={suggestion.title}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + index * 0.05, type: "spring", stiffness: 300, damping: 25 }}
                          onClick={() => sendMessage(suggestion.question)}
                          className="group flex items-center gap-3 rounded-xl border border-border/50 bg-secondary/30 p-3 text-left transition-all hover:border-primary/30 hover:bg-primary/5"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-black dark:text-white transition-colors group-hover:bg-primary/20">
                            <suggestion.icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            {suggestion.isComponent ? (
                              <p className="text-sm font-medium text-foreground">
                                <code className="rounded bg-secondary/80 px-1.5 py-0.5 font-mono text-xs text-primary">
                                  {"<"}{suggestion.title}{" />"}
                                </code>
                              </p>
                            ) : (
                              <p className="text-sm font-medium text-foreground">{suggestion.title}</p>
                            )}
                            <p className="text-xs text-muted-foreground mt-0.5">{suggestion.description}</p>
                          </div>
                          <div className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                            <span>Ask AI</span>
                            <ArrowRight className="h-3 w-3" />
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                /* ── Conversation — bottom-anchored ── */
                <motion.div
                  key="messages"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex-1 overflow-hidden flex flex-col"
                >
                  <div ref={scrollRef} className="flex-1 overflow-y-auto">
                    {/* Spacer pushes messages to the bottom when content is short */}
                    <div className="flex flex-col min-h-full">
                      <div className="flex-1" />
                      <div className="space-y-6 px-4 sm:px-6 pt-6 pb-4 mx-auto w-full max-w-2xl">
                        {messages.map((msg, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 38 }}
                            className={cn("flex gap-3", msg.role === "user" ? "justify-end" : "justify-start items-start")}
                          >
                            {msg.role === "assistant" && (
                              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary/30 to-primary/10 ring-1 ring-primary/20 mt-0.5">
                                <Sparkles className="h-3 w-3 text-primary" />
                              </div>
                            )}

                            {msg.role === "user" ? (
                              <div className="max-w-[78%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground shadow-sm shadow-primary/20">
                                <p className="leading-relaxed">{msg.content}</p>
                              </div>
                            ) : (
                              <div className="flex-1 min-w-0 pt-0.5">
                                <MarkdownMessage content={msg.content} />
                                {msg.sources && msg.sources.length > 0 && (
                                  <div className="mt-3 flex flex-wrap gap-1.5">
                                    {msg.sources.map((src) => (
                                      <span
                                        key={src}
                                        className="inline-flex items-center gap-1 rounded-full border border-primary/15 bg-primary/8 px-2.5 py-0.5 text-[10px] font-medium text-primary/70"
                                      >
                                        <Sparkles className="h-2.5 w-2.5" />
                                        {src}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
                          </motion.div>
                        ))}

                        {/* Streaming / thinking message */}
                        {isLoading && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 38 }}
                            className="flex gap-3 justify-start items-start"
                          >
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary/30 to-primary/10 ring-1 ring-primary/20 mt-0.5">
                              <Sparkles className="h-3 w-3 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0 pt-0.5">
                              {streamingContent ? (
                                <MarkdownMessage content={streamingContent} />
                              ) : readingArticle ? (
                                <ReadingIndicator article={readingArticle} />
                              ) : (
                                <TypingIndicator />
                              )}
                            </div>
                          </motion.div>
                        )}

                        {error && (
                          <div className="flex items-start gap-2 rounded-xl border border-destructive/25 bg-destructive/8 px-4 py-3 text-sm text-destructive">
                            {error}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input bar — always at bottom, blends with panel when open */}
      <div
        className={cn(
          "shrink-0 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-colors duration-300",
          expanded && "bg-card/30 backdrop-blur-2xl border-t border-border/50"
        )}
      >
        <div className="mx-auto max-w-2xl">
          <AssistantInput
            onFocus={() => onExpandedChange?.(true)}
            onSubmit={sendMessage}
            disabled={isLoading}
          />
        </div>
      </div>
    </div>
    </>
  )
}
