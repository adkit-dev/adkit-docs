"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { Check, ChevronDown, Copy, File } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { codeToHtml } from "shiki"

interface CodeTab {
  label: string
  language: string
  code: string
  filename?: string
  icon?: React.ReactNode
}

interface CodePreviewProps {
  tabs?: CodeTab[]
  code?: string
  language?: string
  filename?: string
  highlightLines?: number[]
  addedLines?: number[]
  removedLines?: number[]
  showLineNumbers?: boolean
  diff?: boolean
  className?: string
}

// ---------------------------------------------------------------------------
// Shared mobile dropdown — portal-based so overflow:hidden never clips it
// ---------------------------------------------------------------------------
function TabDropdown({
  options,
  activeIndex,
  onSelect,
}: {
  options: { label: string; icon?: React.ReactNode }[]
  activeIndex: number
  onSelect: (index: number) => void
}) {
  const [open, setOpen] = useState(false)
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties>({})
  const [mounted, setMounted] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => { setMounted(true) }, [])

  const toggle = () => {
    if (!open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setMenuStyle({
        top: rect.bottom + 4,
        left: rect.left,
        minWidth: Math.max(rect.width, 160),
      })
    }
    setOpen((v) => !v)
  }

  useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent) => {
      if (!triggerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", close)
    return () => document.removeEventListener("mousedown", close)
  }, [open])

  const active = options[activeIndex]

  return (
    <div className="sm:hidden">
      <button
        ref={triggerRef}
        onClick={toggle}
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200/60 dark:text-foreground dark:hover:bg-white/5"
      >
        {active.icon && (
          <span className="flex h-4 w-4 shrink-0 items-center justify-center">
            {active.icon}
          </span>
        )}
        <span>{active.label}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex shrink-0"
        >
          <ChevronDown className="h-3.5 w-3.5 text-slate-400 dark:text-muted-foreground" />
        </motion.span>
      </button>

      {mounted && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -6 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ ...menuStyle, position: "fixed", zIndex: 9999, transformOrigin: "top left" }}
              className="overflow-hidden rounded-xl border border-slate-200/80 bg-white p-1.5 shadow-xl shadow-black/10 dark:border-white/10 dark:bg-[#1c1c27] dark:shadow-black/40"
            >
              {options.map((option, index) => {
                const isActive = index === activeIndex
                return (
                  <button
                    key={index}
                    onClick={() => { onSelect(index); setOpen(false) }}
                    className={cn(
                      "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors duration-100",
                      isActive
                        ? "bg-primary/10 font-medium text-primary dark:bg-primary/15 dark:text-primary"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
                    )}
                  >
                    {option.icon && (
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                        {option.icon}
                      </span>
                    )}
                    <span className="flex-1">{option.label}</span>
                    {isActive && <Check className="h-3.5 w-3.5 shrink-0 text-primary" />}
                  </button>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  )
}

export function CodePreview({
  tabs,
  code: singleCode,
  language: singleLanguage = "typescript",
  filename: singleFilename,
  highlightLines = [],
  addedLines = [],
  removedLines = [],
  showLineNumbers = true,
  diff = false,
  className,
}: CodePreviewProps) {
  const { resolvedTheme } = useTheme()
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)
  const [highlightedCode, setHighlightedCode] = useState<string>("")
  const [mounted, setMounted] = useState(false)
  const codeRef = useRef<HTMLDivElement>(null)

  const resolvedTabs: CodeTab[] = tabs || [
    {
      label: singleFilename || singleLanguage || "Code",
      language: singleLanguage,
      code: singleCode || "",
      filename: singleFilename,
    },
  ]

  const currentTab = resolvedTabs[activeTab]
  const isDark = !mounted || resolvedTheme !== "light"
  const shikiTheme = isDark ? "github-dark-default" : "github-light"

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    async function highlight() {
      if (!currentTab.code) return

      const html = await codeToHtml(currentTab.code, {
        lang: currentTab.language,
        theme: shikiTheme,
      })

      setHighlightedCode(html)
    }

    highlight()
  }, [currentTab.code, currentTab.language, shikiTheme])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentTab.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const processedHtml = highlightedCode
    ? addLineFeatures(highlightedCode, highlightLines, showLineNumbers, diff, addedLines, removedLines, isDark)
    : ""

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border/50 bg-[#fcfcfd] text-slate-900 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.28)] dark:bg-[#0d1117] dark:text-slate-100 dark:shadow-none",
        className
      )}
    >
      {/* Header with tabs and filename */}
      <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-100/85 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] dark:border-primary/30 dark:bg-primary/20 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="flex min-w-0 flex-1 items-center">
          {resolvedTabs.length > 1 ? (
            <>
              {/* Mobile: custom dropdown with icon support */}
              <TabDropdown
                options={resolvedTabs.map((t) => ({ label: t.label, icon: t.icon }))}
                activeIndex={activeTab}
                onSelect={setActiveTab}
              />
              {/* Desktop: tabs */}
              <div className="hidden sm:flex">
                {resolvedTabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={cn(
                      "relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors",
                      activeTab === index
                        ? "text-slate-900 dark:text-foreground"
                        : "text-slate-500 hover:text-slate-900 dark:text-muted-foreground dark:hover:text-foreground"
                    )}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                    {activeTab === index && (
                      <motion.div
                        layoutId="code-tab-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </>
          ) : currentTab.filename ? (
            <div className="flex min-w-0 items-center gap-2 px-4 py-2.5 text-sm text-slate-500 dark:text-muted-foreground">
              <File className="h-4 w-4 shrink-0" />
              <span className="truncate font-mono max-w-[120px] sm:max-w-xs">{currentTab.filename}</span>
            </div>
          ) : null}
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="mr-2 flex shrink-0 w-9 sm:w-[72px] items-center justify-center rounded-md py-2 text-xs text-slate-500 transition-colors hover:bg-slate-200/70 hover:text-slate-900 dark:text-muted-foreground dark:hover:bg-primary/10 dark:hover:text-foreground"
          aria-label="Copy code"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="flex items-center gap-1.5 text-green-600 dark:text-green-400"
              >
                <Check className="h-4 w-4" />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="flex items-center gap-1.5"
              >
                <Copy className="h-4 w-4" />
                <span className="hidden sm:inline">Copy</span>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Code content */}
      <div
        ref={codeRef}
        className="overflow-x-auto text-sm leading-relaxed [&_pre]:m-0 [&_pre]:bg-transparent! [&_pre]:p-4 [&_code]:font-mono [&_.code-line]:leading-6"
        dangerouslySetInnerHTML={{ __html: processedHtml }}
      />
    </div>
  )
}

function addLineFeatures(
  html: string,
  highlightLines: number[],
  showLineNumbers: boolean,
  diff: boolean,
  addedLines: number[] = [],
  removedLines: number[] = [],
  isDark: boolean
): string {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, "text/html")
  const pre = doc.querySelector("pre")
  const code = pre?.querySelector("code")

  if (!code) return html

  const lines = code.innerHTML.split("\n")
  const hasAddedOrRemoved = addedLines.length > 0 || removedLines.length > 0
  const processedLines = lines.map((line, index) => {
    const lineNum = index + 1
    const isHighlighted = highlightLines.includes(lineNum)
    const isAdded = addedLines.includes(lineNum)
    const isRemoved = removedLines.includes(lineNum)
    const isDiffAdd = diff && line.trimStart().startsWith("+")
    const isDiffRemove = diff && line.trimStart().startsWith("-")
    const isDimmed = hasAddedOrRemoved && !isAdded && !isRemoved && !isHighlighted

    let lineClass = "code-line flex"
    let bgClass = ""
    let diffMarker = ""
    let contentClass = "line-content flex-1 pr-4"

    if (isAdded) {
      bgClass = "bg-primary/10"
      diffMarker = `<span class="select-none text-primary w-4 shrink-0 text-center" aria-hidden="true">+</span>`
    } else if (isRemoved) {
      bgClass = "bg-red-500/10"
      diffMarker = `<span class="select-none text-red-500 w-4 shrink-0 text-center" aria-hidden="true">-</span>`
    } else if (isHighlighted) {
      bgClass = "bg-primary/10 border-l-2 border-primary"
      diffMarker = showLineNumbers ? `<span class="w-4 shrink-0"></span>` : ""
    } else if (isDiffAdd) {
      bgClass = "bg-green-500/10 border-l-2 border-green-500"
    } else if (isDiffRemove) {
      bgClass = "bg-red-500/10 border-l-2 border-red-500"
    } else {
      diffMarker = showLineNumbers ? `<span class="w-4 shrink-0"></span>` : ""
    }

    if (isDimmed) {
      contentClass += " opacity-40"
    }

    const lineNumberHtml = showLineNumbers
      ? `<span class="line-number select-none ${isDark ? "text-gray-600" : "text-slate-400"} text-right pr-3 w-8 shrink-0${isDimmed ? " opacity-40" : ""}" aria-hidden="true">${lineNum}</span>`
      : ""

    return `<div class="${lineClass} ${bgClass}">${diffMarker}${lineNumberHtml}<span class="${contentClass}">${line || " "}</span></div>`
  })

  code.innerHTML = processedLines.join("")

  return doc.body.innerHTML
}

interface MultiCodePreviewProps {
  examples: {
    label: string
    language: string
    code: string
    filename?: string
    icon?: React.ReactNode
    highlightLines?: number[]
    addedLines?: number[]
    removedLines?: number[]
  }[]
  showLineNumbers?: boolean
  className?: string
}

export function MultiCodePreview({
  examples,
  showLineNumbers = true,
  className,
}: MultiCodePreviewProps) {
  const { resolvedTheme } = useTheme()
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)
  const [highlightedCodes, setHighlightedCodes] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)
  const isDark = !mounted || resolvedTheme !== "light"
  const shikiTheme = isDark ? "github-dark-default" : "github-light"

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    async function highlightAll() {
      const results = await Promise.all(
        examples.map(async (example) => {
          const html = await codeToHtml(example.code, {
            lang: example.language,
            theme: shikiTheme,
          })
          return addLineFeatures(
            html,
            example.highlightLines || [],
            showLineNumbers,
            false,
            example.addedLines || [],
            example.removedLines || [],
            isDark
          )
        })
      )
      setHighlightedCodes(results)
    }

    highlightAll()
  }, [examples, isDark, shikiTheme, showLineNumbers])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(examples[activeTab].code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border/50 bg-[#fcfcfd] text-slate-900 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.28)] dark:bg-[#0d1117] dark:text-slate-100 dark:shadow-none",
        className
      )}
    >
      {/* Header with tabs */}
      <div className="border-b border-slate-200/80 bg-slate-100/85 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] dark:border-primary/30 dark:bg-primary/20 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="relative flex items-center">
          {/* Mobile: custom dropdown with icon support */}
          <TabDropdown
            options={examples.map((e) => ({ label: e.label, icon: e.icon }))}
            activeIndex={activeTab}
            onSelect={setActiveTab}
          />

          {/* Desktop: tabs */}
          <div className="hidden sm:flex">
            {examples.map((example, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors",
                  activeTab === index
                    ? "text-slate-900 dark:text-foreground"
                    : "text-slate-500 hover:text-slate-900 dark:text-muted-foreground dark:hover:text-foreground"
                )}
              >
                {example.icon}
                <span>{example.label}</span>
                {activeTab === index && (
                  <motion.div
                    layoutId="multi-code-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Filename display - centered, desktop only */}
          {examples[activeTab].filename && (
            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-slate-500 sm:flex dark:text-muted-foreground">
              <File className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate font-mono max-w-[160px] lg:max-w-xs">{examples[activeTab].filename}</span>
            </div>
          )}

          {/* Copy button on right */}
          <button
            onClick={handleCopy}
            className="ml-auto mr-2 flex shrink-0 w-9 sm:w-[72px] items-center justify-center rounded-md py-2 text-xs text-slate-500 transition-colors hover:bg-slate-200/70 hover:text-slate-900 dark:text-muted-foreground dark:hover:bg-primary/10 dark:hover:text-foreground"
            aria-label="Copy code"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="flex items-center gap-1.5 text-green-600 dark:text-green-400"
                >
                  <Check className="h-4 w-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="flex items-center gap-1.5"
                >
                  <Copy className="h-4 w-4" />
                  <span className="hidden sm:inline">Copy</span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Filename sub-row — mobile only */}
        {examples[activeTab].filename && (
          <div className="flex sm:hidden items-center gap-1.5 px-3 pb-1.5 text-xs text-slate-500 dark:text-muted-foreground">
            <File className="h-3 w-3 shrink-0" />
            <span className="truncate font-mono">{examples[activeTab].filename}</span>
          </div>
        )}
      </div>

      {/* Code content with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="overflow-x-auto text-sm leading-relaxed [&_pre]:bg-transparent! [&_pre]:p-4 [&_pre]:m-0 [&_code]:font-mono [&_.code-line]:leading-6"
          dangerouslySetInnerHTML={{ __html: highlightedCodes[activeTab] || "" }}
        />
      </AnimatePresence>
    </div>
  )
}

interface DiffPreviewProps {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
  className?: string
}

export function DiffPreview({
  code,
  language = "diff",
  filename,
  showLineNumbers = true,
  className,
}: DiffPreviewProps) {
  const { resolvedTheme } = useTheme()
  const [copied, setCopied] = useState(false)
  const [highlightedCode, setHighlightedCode] = useState<string>("")
  const [mounted, setMounted] = useState(false)
  const isDark = !mounted || resolvedTheme !== "light"
  const shikiTheme = isDark ? "github-dark-default" : "github-light"

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    async function highlight() {
      const html = await codeToHtml(code, {
        lang: language,
        theme: shikiTheme,
      })
      setHighlightedCode(processDiffHtml(html, showLineNumbers, isDark))
    }
    highlight()
  }, [code, isDark, language, shikiTheme, showLineNumbers])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border/50 bg-[#fcfcfd] text-slate-900 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.28)] dark:bg-[#0d1117] dark:text-slate-100 dark:shadow-none",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-100/85 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] dark:border-primary/30 dark:bg-primary/20 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        {filename && (
          <div className="flex min-w-0 items-center gap-2 px-4 py-2.5 text-sm text-slate-500 dark:text-muted-foreground">
            <File className="h-4 w-4 shrink-0" />
            <span className="truncate font-mono max-w-[120px] sm:max-w-xs">{filename}</span>
          </div>
        )}
        <button
          onClick={handleCopy}
          className="ml-auto mr-2 flex shrink-0 w-9 sm:w-[72px] items-center justify-center rounded-md py-2 text-xs text-slate-500 transition-colors hover:bg-slate-200/70 hover:text-slate-900 dark:text-muted-foreground dark:hover:bg-primary/10 dark:hover:text-foreground"
          aria-label="Copy code"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="flex items-center gap-1.5 text-green-600 dark:text-green-400"
              >
                <Check className="h-4 w-4" />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="flex items-center gap-1.5"
              >
                <Copy className="h-4 w-4" />
                <span className="hidden sm:inline">Copy</span>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <div
        className="overflow-x-auto text-sm leading-relaxed [&_pre]:bg-transparent! [&_pre]:p-4 [&_pre]:m-0 [&_code]:font-mono [&_.code-line]:leading-6"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  )
}

function processDiffHtml(html: string, showLineNumbers: boolean, isDark: boolean): string {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, "text/html")
  const pre = doc.querySelector("pre")
  const code = pre?.querySelector("code")

  if (!code) return html

  const lines = code.innerHTML.split("\n")
  let addLineNum = 0
  let removeLineNum = 0

  const processedLines = lines.map((line) => {
    const trimmedLine = line.replace(/<[^>]*>/g, "").trimStart()
    const isAdd = trimmedLine.startsWith("+") && !trimmedLine.startsWith("+++")
    const isRemove = trimmedLine.startsWith("-") && !trimmedLine.startsWith("---")
    const isContext = !isAdd && !isRemove && !trimmedLine.startsWith("@@") && !trimmedLine.startsWith("diff")

    let bgClass = ""
    let lineNumDisplay = ""

    if (isAdd) {
      addLineNum++
      bgClass = "bg-green-500/15 border-l-2 border-green-500"
      lineNumDisplay = showLineNumbers ? `<span class="line-number select-none text-green-600 text-right pr-4 w-12 shrink-0">${addLineNum}</span>` : ""
    } else if (isRemove) {
      removeLineNum++
      bgClass = "bg-red-500/15 border-l-2 border-red-500"
      lineNumDisplay = showLineNumbers ? `<span class="line-number select-none text-red-600 text-right pr-4 w-12 shrink-0">${removeLineNum}</span>` : ""
    } else if (isContext) {
      addLineNum++
      removeLineNum++
      lineNumDisplay = showLineNumbers ? `<span class="line-number select-none ${isDark ? "text-gray-600" : "text-slate-400"} text-right pr-4 w-12 shrink-0">${addLineNum}</span>` : ""
    } else {
      lineNumDisplay = showLineNumbers ? `<span class="line-number select-none ${isDark ? "text-gray-600" : "text-slate-400"} text-right pr-4 w-12 shrink-0"></span>` : ""
    }

    return `<div class="code-line flex ${bgClass}">${lineNumDisplay}<span class="line-content flex-1 pr-4">${line || " "}</span></div>`
  })

  code.innerHTML = processedLines.join("")

  return doc.body.innerHTML
}
