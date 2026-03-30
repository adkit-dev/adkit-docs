"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { ArrowRight, ArrowUp } from "lucide-react"
import { ReactIcon, NextJSIcon } from "@/components/icons/sdk-icons"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface AssistantDockProps {
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
}

const suggestions = [
  {
    icon: ReactIcon,
    title: "AdSlot",
    isComponent: true,
    description: "React",
  },
  {
    icon: ReactIcon,
    title: "AdkitProvider",
    isComponent: true,
    description: "React",
  },
  {
    icon: NextJSIcon,
    title: "Next.js Quickstart",
    isComponent: false,
    description: "Get started fast",
  },
]

const placeholders = [
  "How do I handle SSR with AdkitProvider?",
  "What props does AdSlot accept?",
  "How do I track ad impressions?",
  "Can I lazy load ad slots?",
  "How do I style the booking modal?",
]

function AssistantInput({
  onFocus,
  onSubmit,
}: {
  onFocus?: () => void
  onSubmit?: (value: string) => void
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
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length)
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
          newData.push({
            x: n,
            y: t,
            color: [pixelData[e], pixelData[e + 1], pixelData[e + 2], pixelData[e + 3]],
          })
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

  const animate = (start: number) => {
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
    if (!value.trim()) return
    setAnimating(true)
    draw()
    const maxX = newDataRef.current.reduce((prev, current) => (current.x > prev ? current.x : prev), 0)
    animate(maxX)
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
          className={cn(
            "w-full h-full bg-transparent px-5 pr-28 text-sm text-foreground focus:outline-none",
            animating && "text-transparent"
          )}
        />

        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <kbd className="hidden rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline-block">
            ⌘I
          </kbd>
          <motion.button
            type="submit"
            disabled={!value.trim()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "relative h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300",
              value.trim()
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                : "bg-muted text-muted-foreground"
            )}
            aria-label="Send message"
          >
            <motion.div
              animate={{
                y: value.trim() ? [0, -2, 0] : 0,
              }}
              transition={{
                duration: 1.5,
                repeat: value.trim() ? Infinity : 0,
                ease: "easeInOut",
              }}
            >
              <ArrowUp className="h-4 w-4" />
            </motion.div>
            {value.trim() && (
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
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  )
}

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

export function AssistantDock({ expanded = false, onExpandedChange }: AssistantDockProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    if (expanded) {
      setIsVisible(true)
    }
  }, [expanded])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && expanded) {
        onExpandedChange?.(false)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [expanded, onExpandedChange])

  const handleSuggestionClick = (suggestion: string) => {
    console.log("Navigate to:", suggestion)
    onExpandedChange?.(false)
  }

  const handleBackdropClick = () => {
    onExpandedChange?.(false)
  }

  return (
    <>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm lg:left-64"
            onClick={handleBackdropClick}
          />
        )}
      </AnimatePresence>

      <div
        className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:left-64"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(calc(100% + 16px))",
          transition: "transform 0.5s ease-in-out",
        }}
      >
        <div className="mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 1,
                }}
                className="mb-4 overflow-hidden rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-primary/5" />
                  <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
                  <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-primary/15 blur-2xl" />

                  <div className="absolute top-3 left-3 z-10">
                    <button
                      onClick={() => onExpandedChange?.(false)}
                      className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-lg border border-border/50 px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <kbd className="rounded border border-border/80 bg-background/80 px-1 py-0.5 text-[10px] font-medium shadow-sm">
                        esc
                      </kbd>
                      <span className="whitespace-nowrap">to close</span>
                    </button>
                  </div>

                  <div className="relative px-6 py-8 text-center">
                    <motion.div
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1,
                      }}
                      className="mx-auto"
                    >
                      <AssistantLogoVideo />
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="text-xl font-semibold text-foreground"
                    >
                      Ask AdKit AI anything
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-2 text-sm text-muted-foreground"
                    >
                      Get instant answers about integration, pricing, and best practices.
                    </motion.p>
                  </div>
                </div>

                <div className="border-t border-border/50 p-4">
                  <div className="grid gap-2">
                    {suggestions.map((suggestion, index) => (
                      <motion.button
                        key={suggestion.title}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.25 + index * 0.05,
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                        onClick={() => handleSuggestionClick(suggestion.title)}
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
                          <span>Go to page</span>
                          <ArrowRight className="h-3 w-3" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AssistantInput
            onFocus={() => onExpandedChange?.(true)}
            onSubmit={(value) => {
              console.log("Submit:", value)
            }}
          />
        </div>
      </div>
    </>
  )
}
