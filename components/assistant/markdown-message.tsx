"use client"

import { CodePreview } from "@/components/docs/code-preview"
import { CommandBlock } from "@/components/docs/command-block"

type Segment =
  | { type: "code"; language: string; code: string }
  | { type: "text"; content: string }

function parseSegments(markdown: string): Segment[] {
  const segments: Segment[] = []
  const codeBlockRe = /```(\w*)\n?([\s\S]*?)```/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = codeBlockRe.exec(markdown)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: "text", content: markdown.slice(lastIndex, match.index) })
    }
    segments.push({ type: "code", language: match[1] || "text", code: match[2].trimEnd() })
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < markdown.length) {
    segments.push({ type: "text", content: markdown.slice(lastIndex) })
  }

  return segments
}

function isInstallCommand(language: string, code: string): boolean {
  const trimmed = code.trim()
  return (
    language === "bash" &&
    /^(npm (install|i)|yarn add|pnpm add|bun add)\s+\S/.test(trimmed)
  )
}

function InlineContent({ text }: { text: string }) {
  // Split on **bold**, `code`, and [link](url)
  const parts = text.split(/(\*\*[^*\n]+?\*\*|`[^`\n]+`|\[[^\]]+\]\([^)]+\))/)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
          return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>
        }
        if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
          return (
            <code key={i} className="rounded bg-muted px-1.5 py-0.5 font-mono text-[11px] text-foreground/90">
              {part.slice(1, -1)}
            </code>
          )
        }
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (linkMatch) {
          return (
            <a key={i} href={linkMatch[2]} className="text-primary underline underline-offset-2 hover:text-primary/80">
              {linkMatch[1]}
            </a>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

function renderTextBlock(text: string): React.ReactNode[] {
  const lines = text.split("\n")
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (!line.trim()) {
      i++
      continue
    }

    // Headings
    if (line.startsWith("### ")) {
      elements.push(
        <h4 key={`h-${i}`} className="mt-3 mb-1 text-[13px] font-semibold text-foreground">
          {line.slice(4)}
        </h4>
      )
      i++
      continue
    }
    if (line.startsWith("## ")) {
      elements.push(
        <h3 key={`h-${i}`} className="mt-3 mb-1.5 text-sm font-semibold text-foreground">
          {line.slice(3)}
        </h3>
      )
      i++
      continue
    }
    if (line.startsWith("# ")) {
      elements.push(
        <h2 key={`h-${i}`} className="mt-3 mb-1.5 text-base font-semibold text-foreground">
          {line.slice(2)}
        </h2>
      )
      i++
      continue
    }

    // Horizontal rule
    if (/^---+$/.test(line.trim())) {
      elements.push(<hr key={`hr-${i}`} className="my-3 border-border/50" />)
      i++
      continue
    }

    // Lists — collect consecutive list items
    if (/^(\s*[-*]|\s*\d+\.)\s/.test(line)) {
      const items: { text: string; indent: number }[] = []
      const isOrdered = /^\s*\d+\./.test(line)

      while (i < lines.length && /^(\s*[-*]|\s*\d+\.)\s/.test(lines[i])) {
        const indent = lines[i].match(/^(\s*)/)?.[1].length ?? 0
        const text = lines[i].replace(/^\s*(?:[-*]|\d+\.)\s/, "")
        items.push({ text, indent })
        i++
      }

      elements.push(
        isOrdered ? (
          <ol key={`list-${i}`} className="my-2 space-y-1 pl-5 text-sm text-foreground/80 list-decimal">
            {items.map((item, j) => (
              <li key={j} style={{ marginLeft: item.indent > 0 ? 12 : 0 }}>
                <InlineContent text={item.text} />
              </li>
            ))}
          </ol>
        ) : (
          <ul key={`list-${i}`} className="my-2 space-y-1 pl-5 text-sm text-foreground/80 list-disc">
            {items.map((item, j) => (
              <li key={j} style={{ marginLeft: item.indent > 0 ? 12 : 0 }}>
                <InlineContent text={item.text} />
              </li>
            ))}
          </ul>
        )
      )
      continue
    }

    // Paragraph — collect adjacent non-special lines
    const paraLines: string[] = []
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,4}|[-*]|\d+\.|---+)\s/.test(lines[i]) &&
      !/^-{3,}$/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i])
      i++
    }

    if (paraLines.length > 0) {
      elements.push(
        <p key={`p-${i}`} className="my-1.5 text-sm text-foreground/80 leading-relaxed">
          <InlineContent text={paraLines.join(" ")} />
        </p>
      )
    }
  }

  return elements
}

export function MarkdownMessage({ content }: { content: string }) {
  const segments = parseSegments(content)

  return (
    <div className="space-y-0.5 min-w-0">
      {segments.map((segment, i) => {
        if (segment.type === "code") {
          if (isInstallCommand(segment.language, segment.code)) {
            return <CommandBlock key={i} command={segment.code.trim()} />
          }
          return (
            <CodePreview
              key={i}
              code={segment.code}
              language={segment.language || "text"}
              showLineNumbers={segment.code.split("\n").length > 4}
              className="my-2"
            />
          )
        }
        return (
          <div key={i} className="min-w-0">
            {renderTextBlock(segment.content)}
          </div>
        )
      })}
    </div>
  )
}
