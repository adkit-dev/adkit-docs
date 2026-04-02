"use client"

import { useId, useState, type ReactNode } from "react"
import { Check, Copy, FileCode2, LayoutTemplate } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useShikiHighlightedHtml } from "@/components/docs/code-preview"
import { FakeAdkitSlot } from "@/components/docs/fake-adkit-slot"

const REACT_SLOT_CODE = `<AdSlot
  slot="header-banner"
  aspectRatio="banner"
  size="lg"
  price={3500}
/>`

const JS_SLOT_CODE = `<div
  data-adkit-site="your-site-id"
  data-adkit-slot="header-banner"
  data-adkit-aspect-ratio="banner"
  data-adkit-size="lg"
  data-adkit-price="3500"
/>`

type TabId = "preview" | "code"

export interface SlotVerifyPreviewProps {
  variant: "react" | "js"
  className?: string
}

export function SlotVerifyPreview({ variant, className }: SlotVerifyPreviewProps) {
  const rid = useId().replace(/:/g, "")
  const layoutId = `slot-verify-tab-${rid}`
  const [tab, setTab] = useState<TabId>("preview")
  const [copied, setCopied] = useState(false)

  const code = variant === "react" ? REACT_SLOT_CODE : JS_SLOT_CODE
  const language = variant === "react" ? "tsx" : "html"
  const filename = variant === "react" ? "AdSlot.tsx" : "index.html"
  const highlighted = useShikiHighlightedHtml(code, language, false)

  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const tabs: { id: TabId; label: string; icon: ReactNode }[] = [
    { id: "preview", label: "Preview", icon: <LayoutTemplate className="h-3.5 w-3.5" /> },
    { id: "code", label: "Code", icon: <FileCode2 className="h-3.5 w-3.5" /> },
  ]

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border/50 bg-[#fcfcfd] text-slate-900 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.28)] dark:bg-[#0d1117] dark:text-slate-100 dark:shadow-none",
        className
      )}
    >
      <div className="relative flex items-center border-b border-slate-200/80 bg-slate-100/85 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] dark:border-primary/30 dark:bg-primary/20 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="flex min-w-0 flex-1 items-center">
          <div className="flex">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors",
                  tab === t.id
                    ? "text-slate-900 dark:text-foreground"
                    : "text-slate-500 hover:text-slate-900 dark:text-muted-foreground dark:hover:text-foreground"
                )}
              >
                {t.icon}
                <span>{t.label}</span>
                {tab === t.id && (
                  <motion.div
                    layoutId={layoutId}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {tab === "code" && (
          <div className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 items-center gap-1.5 text-xs text-slate-500 dark:text-muted-foreground sm:flex">
            <span className="truncate font-mono max-w-[140px] sm:max-w-[220px]">{filename}</span>
          </div>
        )}

        <button
          type="button"
          onClick={copy}
          className="ml-auto mr-2 flex shrink-0 w-9 items-center justify-center rounded-md py-2 text-xs text-slate-500 transition-colors hover:bg-slate-200/70 hover:text-slate-900 dark:text-muted-foreground dark:hover:bg-primary/10 dark:hover:text-foreground sm:w-[72px]"
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
                <span className="hidden sm:inline">Copied</span>
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

      <AnimatePresence mode="wait">
        {tab === "preview" ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="flex items-center justify-center bg-gradient-to-b from-slate-100/60 to-slate-50/30 px-4 py-8 sm:px-8 sm:py-10 dark:from-white/[0.04] dark:to-transparent">
              <div className="w-full max-w-[min(100%,728px)]">
                <FakeAdkitSlot slot="header-banner" aspectRatio="banner" price={3500} size="lg" />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="code"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-[140px]"
          >
            <div
              className="overflow-x-auto text-sm leading-relaxed [&_pre]:m-0 [&_pre]:bg-transparent! [&_pre]:p-4 [&_code]:font-mono [&_.code-line]:leading-6 [&_.code-line]:min-w-full"
              dangerouslySetInnerHTML={{ __html: highlighted }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
