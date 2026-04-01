"use client"

import type React from "react"
import { Check, Link } from "lucide-react"
import { CodePreview } from "./code-preview"
import { CommandBlock } from "./command-block"
import { Breadcrumbs } from "./breadcrumbs"
import { Button } from "@/components/ui/button"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

interface DocContentProps {
  title: string
  description: string
  content: string
  slug?: string
}

// Map slug prefixes to their section label and landing href
const SECTION_MAP: Record<string, { label: string; href: string }> = {
  quickstart: { label: "Quickstarts", href: "/docs/quickstart" },
  react: { label: "React SDK", href: "/docs/react/installation" },
  js: { label: "JavaScript SDK", href: "/docs/js/installation" },
  publisher: { label: "Publisher Guide", href: "/docs/publisher/dashboard" },
  advertiser: { label: "Advertiser Guide", href: "/docs/advertiser/booking" },
  concepts: { label: "Concepts", href: "/docs/concepts/pricing" },
  api: { label: "API Reference", href: "/docs/api/serve" },
}

// Derive a fitting filename for code blocks based on language and content hints
function deriveFilename(language: string, code: string): string | undefined {
  const lang = language.toLowerCase()
  if (lang === "text" || lang === "bash" || lang === "shell" || lang === "sh") return undefined
  if (lang === "tsx") {
    if (code.includes("layout") || code.includes("Layout")) return "layout.tsx"
    if (code.includes("App(") || code.includes("function App")) return "App.tsx"
    if (code.includes("_app") || code.includes("_App")) return "_app.tsx"
    if (code.includes("page") || code.includes("Page")) return "page.tsx"
    return "component.tsx"
  }
  if (lang === "jsx") {
    if (code.includes("App(") || code.includes("function App")) return "App.jsx"
    return "component.jsx"
  }
  if (lang === "typescript" || lang === "ts") return "index.ts"
  if (lang === "javascript" || lang === "js") {
    if (code.includes("window.Adkit") || code.includes("adkit.js")) return "script.js"
    return "index.js"
  }
  if (lang === "html") return "index.html"
  if (lang === "css") return "styles.css"
  if (lang === "json") {
    if (code.includes('"scripts"') || code.includes('"dependencies"')) return "package.json"
    return "config.json"
  }
  if (lang === "diff") return undefined
  return undefined
}

function parseContent(content: string) {
  const elements: React.ReactNode[] = []
  const lines = content.split("\n")
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    // Check for code block start
    if (line.startsWith("```")) {
      const language = line.slice(3).trim() || "text"
      const codeLines: string[] = []
      i++

      // Collect code lines until closing fence
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i])
        i++
      }

      const codeStr = codeLines.join("\n")
      if (language === "bash" && (codeStr.includes("npm ") || codeStr.includes("npx ") || codeStr.includes("yarn ") || codeStr.includes("pnpm ") || codeStr.includes("bun "))) {
        elements.push(<CommandBlock key={key++} command={codeStr} />)
      } else {
        const filename = deriveFilename(language, codeStr)
        elements.push(<CodePreview key={key++} code={codeStr} language={language} filename={filename} className="my-6" />)
      }
      i++ // Skip closing fence
      continue
    }

    // Check for table start (line starts with | and contains at least 2 |)
    if (line.trim().startsWith("|") && line.split("|").length >= 3) {
      const tableLines: string[] = []

      // Collect all table lines
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i])
        i++
      }

      // Parse the table
      if (tableLines.length >= 2) {
        elements.push(parseTable(tableLines, key++))
      }
      continue
    }

    // Headers
    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={key++} className="mb-4 mt-8 text-3xl font-bold text-foreground">
          {line.slice(2)}
        </h1>,
      )
      i++
      continue
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="mb-3 mt-6 text-2xl font-semibold text-foreground">
          {line.slice(3)}
        </h2>,
      )
      i++
      continue
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="mb-2 mt-4 text-xl font-semibold text-foreground">
          {line.slice(4)}
        </h3>,
      )
      i++
      continue
    }

    // List items
    if (line.startsWith("- ")) {
      elements.push(
        <li key={key++} className="ml-4 text-muted-foreground">
          {renderInlineFormatting(line.slice(2))}
        </li>,
      )
      i++
      continue
    }

    // Skip empty lines
    if (line.trim() === "") {
      i++
      continue
    }

    // Regular paragraph with inline formatting support
    elements.push(
      <p key={key++} className="mb-2 text-muted-foreground">
        {renderInlineFormatting(line)}
      </p>,
    )
    i++
  }

  return elements
}

function parseTable(lines: string[], key: number): React.ReactNode {
  // Parse header row
  const headerCells = lines[0]
    .split("|")
    .slice(1, -1) // Remove empty first and last elements from split
    .map((cell) => cell.trim())

  // Check if second line is separator (contains dashes)
  const hasSeparator = lines.length > 1 && lines[1].includes("---")
  const startDataRow = hasSeparator ? 2 : 1

  // Parse alignment from separator row
  const alignments: ("left" | "center" | "right")[] = []
  if (hasSeparator) {
    const separatorCells = lines[1].split("|").slice(1, -1)
    separatorCells.forEach((cell) => {
      const trimmed = cell.trim()
      if (trimmed.startsWith(":") && trimmed.endsWith(":")) {
        alignments.push("center")
      } else if (trimmed.endsWith(":")) {
        alignments.push("right")
      } else {
        alignments.push("left")
      }
    })
  }

  // Parse data rows
  const dataRows = lines.slice(startDataRow).map((line) =>
    line
      .split("|")
      .slice(1, -1)
      .map((cell) => cell.trim()),
  )

  return (
    <div key={key} className="my-6 w-full overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            {headerCells.map((cell, cellIndex) => (
              <th
                key={cellIndex}
                className="px-4 py-3 text-left font-semibold text-foreground"
                style={{ textAlign: alignments[cellIndex] || "left" }}
              >
                {renderInlineFormatting(cell)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-border transition-colors hover:bg-muted/30">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 text-muted-foreground"
                  style={{ textAlign: alignments[cellIndex] || "left" }}
                >
                  {renderInlineFormatting(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function renderInlineFormatting(text: string): React.ReactNode {
  const boldRegex = /\*\*([^*]+)\*\*/g
  let lastIndex = 0
  let match

  const tempText = text
  const segments: { type: "text" | "bold"; content: string }[] = []

  while ((match = boldRegex.exec(tempText)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: "text", content: tempText.slice(lastIndex, match.index) })
    }
    segments.push({ type: "bold", content: match[1] })
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < tempText.length) {
    segments.push({ type: "text", content: tempText.slice(lastIndex) })
  }

  if (segments.length === 0) {
    return renderInlineCode(text)
  }

  return segments.map((segment, idx) => {
    if (segment.type === "bold") {
      return (
        <strong key={idx} className="font-semibold text-foreground">
          {renderInlineCode(segment.content)}
        </strong>
      )
    }
    return <span key={idx}>{renderInlineCode(segment.content)}</span>
  })
}

function renderInlineCode(text: string): React.ReactNode {
  if (!text.includes("`")) {
    return text
  }

  const parts = text.split(/`([^`]+)`/)
  return parts.map((part, j) => (j % 2 === 1 ? <InlineCode key={j}>{part}</InlineCode> : part))
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code
      className="rounded px-1.5 py-0.5 font-mono text-sm"
      style={{
        backgroundColor: "var(--inline-code-bg)",
        color: "var(--inline-code-text)",
      }}
    >
      {children}
    </code>
  )
}

export function DocContent({ title, description, content, slug }: DocContentProps) {
  const { copied, copy } = useCopyToClipboard()

  const copyLink = () => {
    const url = typeof window !== "undefined"
      ? `${window.location.origin}/docs/${slug}`
      : `/docs/${slug}`
    copy(url)
  }

  // Build breadcrumbs: Home > [Section] > Title (if slug has a prefix)
  const breadcrumbItems: { label: string; href?: string }[] = []
  if (slug) {
    const parts = slug.split("/")
    const prefix = parts[0]
    const section = SECTION_MAP[prefix]
    if (section && parts.length > 1) {
      breadcrumbItems.push({ label: section.label, href: section.href })
    }
    breadcrumbItems.push({ label: title })
  }

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      {/* Breadcrumbs row with copy link button on the right */}
      {breadcrumbItems.length > 0 && (
        <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2">
          <Breadcrumbs items={breadcrumbItems} />
          <Button
            variant="ghost"
            size="sm"
            onClick={copyLink}
            className="shrink-0 gap-1.5 text-muted-foreground hover:text-foreground h-7 px-2"
            aria-label="Copy link to this page"
          >
            {copied ? (
              <>
                <Check className="size-3.5" />
                <span className="text-xs">Copied</span>
              </>
            ) : (
              <>
                <Link className="size-3.5" />
                <span className="text-xs hidden sm:inline">Copy link</span>
              </>
            )}
          </Button>
        </div>
      )}
      <header className="mb-6 sm:mb-8">
        <h1 className="mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">{title}</h1>
        <p className="text-base sm:text-lg text-muted-foreground">{description}</p>
      </header>
      <div className="prose prose-zinc dark:prose-invert max-w-none">{parseContent(content)}</div>
    </article>
  )
}
