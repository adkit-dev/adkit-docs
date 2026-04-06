"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { ArrowRight, ArrowUp, BookText, Bot, ChevronRight, ExternalLink, MessageCircleCode, RotateCcw, ThumbsDown, ThumbsUp } from "lucide-react"
import { AstroIcon, JavaScriptIcon, NextJSIcon, ReactIcon, WebflowIcon, WordPressIcon } from "@/components/icons/sdk-icons"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { MarkdownMessage } from "@/components/assistant/markdown-message"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { ShortcutHint } from "@/components/ui/shortcut-hint"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

interface AssistantDockProps {
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  queuedPrompt?: { id: number; text: string } | null
  onQueuedPromptHandled?: () => void
}

type ThinkingStep = { article: string; slug: string }

interface Message {
  role: "user" | "assistant"
  content: string
  thinkingSteps?: ThinkingStep[]
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
          <ShortcutHint keyLabel="I" className="hidden sm:inline-flex" />
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
          <source src="https://cdn.adkit.dev/logo.webm" type="video/webm" />
        </video>
      ) : null}
    </div>
  )
}

function getArticleIcon(slug: string, className = "h-2.5 w-2.5 shrink-0") {
  if (slug.startsWith("js/")) return <JavaScriptIcon className={className} />
  if (slug.startsWith("react/")) return <ReactIcon className={className} />
  if (slug === "quickstart/javascript") return <JavaScriptIcon className={className} />
  if (slug === "quickstart/react") return <ReactIcon className={className} />
  if (slug === "quickstart/nextjs") return <NextJSIcon className={className} />
  if (slug === "quickstart/astro") return <AstroIcon className={className} />
  if (slug === "quickstart/wordpress") return <WordPressIcon className={className} />
  if (slug === "quickstart/webflow") return <WebflowIcon className={className} />
  return <BookText className={className} />
}

function ResponseSources({ steps }: { steps: ThinkingStep[] }) {
  const [feedback, setFeedback] = useState<"thanked" | "done" | null>(null)

  const handleFeedback = () => {
    setFeedback("thanked")
    setTimeout(() => setFeedback("done"), 1800)
  }

  return (
    <div className="mt-3 flex items-center justify-between">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            Sources
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-72 p-2">
          <div className="grid gap-1">
            {steps.map((step) => (
              <a
                key={step.slug}
                href={`/${step.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {getArticleIcon(step.slug, "h-3 w-3 shrink-0")}
                <span className="min-w-0 flex-1 truncate">{step.article}</span>
                <ExternalLink className="h-3 w-3 shrink-0 opacity-60" />
              </a>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      <div className="flex items-center h-7">
        <AnimatePresence mode="wait">
          {feedback === "thanked" ? (
            <motion.span
              key="thanks"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-xs text-muted-foreground px-1"
            >
              Thanks!
            </motion.span>
          ) : feedback === null ? (
            <motion.div
              key="buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-0.5"
            >
              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground"
                onClick={handleFeedback}
              >
                <ThumbsUp className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground"
                onClick={handleFeedback}
              >
                <ThumbsDown className="h-3.5 w-3.5" />
              </Button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// ThinkingBlock — shown while Claude reads docs, persists above responses
// ---------------------------------------------------------------------------
function ThinkingBlock({ steps, isActive = false }: { steps: ThinkingStep[]; isActive?: boolean }) {
  const [expanded, setExpanded] = useState(false)

  if (steps.length === 0) return null

  return (
    <div className="mb-2">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex items-center gap-1.5 text-xs text-muted-foreground cursor-pointer transition-all duration-200 group"
        aria-expanded={expanded}
      >
        {isActive ? (
          <motion.div className="flex items-center gap-0.5">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-1 w-1 rounded-full bg-primary/60"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </motion.div>
        ) : (
          <ChevronRight
            className={cn("h-3 w-3 shrink-0 transition-transform duration-200", expanded && "rotate-90")}
          />
        )}
        <span className="flex items-center gap-1 overflow-hidden">
          <span className="shrink-0">Reading</span>
          {steps.map((step, i) => (
            <span key={step.slug} className="flex items-center gap-0.5 shrink-0">
              {i > 0 && i === steps.length - 1 && <span className="text-muted-foreground mr-1">and</span>}
              {i > 0 && i < steps.length - 1 && <span className="text-border mr-1">,</span>}
              <a
                href={`/${step.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="font-medium text-foreground hover:text-primary hover:underline inline-flex items-center gap-1"
              >
                <BookText className="h-2.5 w-2.5 shrink-0" />
                {step.article}
              </a>
            </span>
          ))}
        </span>
      </button>

      {expanded && (
        <div className="mt-1.5 ml-1 border-l-2 border-border/50 pl-3">
          <div className="text-xs text-muted-foreground">Finished reading</div>
        </div>
      )}
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
export function AssistantDock({
  expanded = false,
  onExpandedChange,
  queuedPrompt,
  onQueuedPromptHandled,
}: AssistantDockProps) {
  const [scrollPct, setScrollPct] = useState(0)
  const [messages, setMessages] = useState<Message[]>([])
  const [streamingContent, setStreamingContent] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [readingSteps, setReadingSteps] = useState<ThinkingStep[]>([])
  const readingStepsRef = useRef<ThinkingStep[]>([])
  const isNearBottomRef = useRef(true)
  const scrollRef = useRef<HTMLDivElement>(null)
  const lastQueuedPromptIdRef = useRef<number | null>(null)

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

  // Fix mobile viewport height (avoids issue with 100vh including browser chrome)
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`)
    }
    setVh()
    window.addEventListener("resize", setVh)
    return () => window.removeEventListener("resize", setVh)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && expanded) onExpandedChange?.(false)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [expanded, onExpandedChange])

  // Load persisted conversation from localStorage (up to 7 days)
  useEffect(() => {
    try {
      const raw = localStorage.getItem("adkit-ai-messages")
      if (!raw) return
      const { messages: saved, savedAt } = JSON.parse(raw)
      if (Date.now() - savedAt > 7 * 24 * 60 * 60 * 1000) {
        localStorage.removeItem("adkit-ai-messages")
        return
      }
      if (Array.isArray(saved) && saved.length > 0) setMessages(saved)
    } catch { }
  }, [])

  // Persist conversation to localStorage whenever messages change
  useEffect(() => {
    if (messages.length === 0) return
    try {
      localStorage.setItem("adkit-ai-messages", JSON.stringify({ messages, savedAt: Date.now() }))
    } catch { }
  }, [messages])

  // Track whether user is near the bottom of the scroll container
  const handleScrollContainerScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    isNearBottomRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < 80
  }, [])

  // Auto-scroll to bottom when content changes, but only if near bottom
  useEffect(() => {
    if (!isNearBottomRef.current) return
    requestAnimationFrame(() => {
      if (scrollRef.current) scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
    })
  }, [messages, streamingContent, isLoading, readingSteps])

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
      setReadingSteps([])
      readingStepsRef.current = []
      isNearBottomRef.current = true
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
                const thinkingSteps = [...readingStepsRef.current]
                setMessages([...nextMessages, { role: "assistant", content: accumulated, thinkingSteps }])
                setStreamingContent("")
                setReadingSteps([])
                setIsLoading(false)
                return
              }
              if (parsed.type === "reading") {
                const { article, slug } = parsed
                if (!readingStepsRef.current.some((s) => s.slug === slug)) {
                  const next = [...readingStepsRef.current, { article, slug }]
                  readingStepsRef.current = next
                  setReadingSteps(next)
                }
              }
              if (parsed.type === "text") {
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
          const thinkingSteps = [...readingStepsRef.current]
          setMessages([...nextMessages, { role: "assistant", content: accumulated, thinkingSteps }])
          setStreamingContent("")
        }
        setReadingSteps([])
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
    try { localStorage.removeItem("adkit-ai-messages") } catch { }
  }

  useEffect(() => {
    if (!expanded || !queuedPrompt) return
    if (queuedPrompt.id === lastQueuedPromptIdRef.current) return

    lastQueuedPromptIdRef.current = queuedPrompt.id
    void sendMessage(queuedPrompt.text)
    onQueuedPromptHandled?.()
  }, [expanded, queuedPrompt, sendMessage, onQueuedPromptHandled])

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
              <ShortcutHint keyLabel="I" className="mr-2 hidden rounded-[4px] bg-black/10 text-white/80 sm:inline-flex" />
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
              animate={{ height: "calc(var(--vh, 1vh) * 100 - 82px)" }}
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
                    className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-[11px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
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
                    className="flex-1 overflow-y-auto overscroll-contain"
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
                    <div ref={scrollRef} className="flex-1 overflow-y-auto overscroll-contain" onScroll={handleScrollContainerScroll}>
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
                              className={cn("flex gap-3", msg.role === "user" ? "justify-end" : (msg.thinkingSteps && msg.thinkingSteps.length > 0 ? "justify-start items-start" : "justify-start items-center"))}
                            >
                              {msg.role === "assistant" &&
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary/30 to-primary/10 ring-1 ring-primary/20">
                                      <Bot className="h-5 w-5 text-primary" />
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>Adkit AI</TooltipContent>
                                </Tooltip>
                              }

                              {msg.role === "user" ? (
                                <div className="max-w-[78%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground shadow-sm shadow-primary/20">
                                  <p className="leading-relaxed">{msg.content}</p>
                                </div>
                              ) : (
                                <div className="flex-1 min-w-0 pt-0.5">
                                  {msg.thinkingSteps && msg.thinkingSteps.length > 0 && (
                                    <ThinkingBlock steps={msg.thinkingSteps} />
                                  )}
                                  <MarkdownMessage content={msg.content} />
                                  {msg.thinkingSteps && msg.thinkingSteps.length > 0 && (
                                    <ResponseSources steps={msg.thinkingSteps} />
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
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary/30 to-primary/10 ring-1 ring-primary/20 mt-0.5">
                                <Bot className="h-5 w-5 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0 pt-0.5">
                                {readingSteps.length === 0 && !streamingContent ? (
                                  <TypingIndicator />
                                ) : readingSteps.length > 0 && !streamingContent ? (
                                  <ThinkingBlock steps={readingSteps} isActive />
                                ) : (
                                  <>
                                    {readingSteps.length > 0 && <ThinkingBlock steps={readingSteps} />}
                                    <MarkdownMessage content={streamingContent} />
                                  </>
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
            "shrink-0 px-3 sm:px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-colors duration-300",
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
