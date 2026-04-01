"use client"

import type { ReactNode } from "react"
import ReactMarkdown, { type Components } from "react-markdown"
import remarkGfm from "remark-gfm"
import { CodePreview } from "@/components/docs/code-preview"
import { CommandBlock } from "@/components/docs/command-block"

type Segment =
  | { type: "markdown"; content: string }
  | { type: "code"; language: string; code: string; filename?: string }

function isInstallCommand(language: string, code: string): boolean {
  const trimmed = code.trim()
  return (
    language === "bash" &&
    /^(npm (install|i)|yarn add|pnpm add|bun add)\s+\S/.test(trimmed)
  )
}

function parseFilename(info: string): string | undefined {
  const attributeMatch = info.match(/(?:^|\s)(?:filename|file|title)=("([^"]+)"|'([^']+)'|(\S+))/)
  if (attributeMatch) {
    return attributeMatch[2] || attributeMatch[3] || attributeMatch[4]
  }

  const shorthand = info.trim()
  if (shorthand && !shorthand.includes("=") && /[/.]/.test(shorthand)) {
    return shorthand.replace(/^['"]|['"]$/g, "")
  }

  return undefined
}

function parseCodeInfo(info: string): { language: string; filename?: string } {
  const trimmed = info.trim()
  if (!trimmed) {
    return { language: "text" }
  }

  const [languageToken, ...rest] = trimmed.split(/\s+/)
  const metadata = rest.join(" ")

  return {
    language: languageToken || "text",
    filename: parseFilename(metadata),
  }
}

function parseSegments(markdown: string): Segment[] {
  const segments: Segment[] = []
  const codeBlockRe = /^```([^\n]*)\n([\s\S]*?)^```$/gm
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = codeBlockRe.exec(markdown)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: "markdown", content: markdown.slice(lastIndex, match.index) })
    }

    const { language, filename } = parseCodeInfo(match[1] ?? "")
    segments.push({
      type: "code",
      language,
      filename,
      code: (match[2] ?? "").replace(/\n$/, ""),
    })

    lastIndex = match.index + match[0].length
  }

  if (lastIndex < markdown.length) {
    segments.push({ type: "markdown", content: markdown.slice(lastIndex) })
  }

  return segments
}

const markdownComponents: Components = {
  h1: ({ children }) => <h2 className="mb-2 mt-4 text-lg font-semibold text-foreground first:mt-0">{children}</h2>,
  h2: ({ children }) => <h3 className="mb-2 mt-4 text-base font-semibold text-foreground first:mt-0">{children}</h3>,
  h3: ({ children }) => <h4 className="mb-1.5 mt-3 text-sm font-semibold text-foreground first:mt-0">{children}</h4>,
  h4: ({ children }) => <h5 className="mb-1.5 mt-3 text-[13px] font-semibold text-foreground first:mt-0">{children}</h5>,
  p: ({ children }) => <p className="my-2 text-sm leading-relaxed text-foreground/80 first:mt-0 last:mb-0">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  hr: () => <hr className="my-4 border-border/50" />,
  ul: ({ children }) => <ul className="my-2 list-disc space-y-1 pl-5 text-sm text-foreground/80">{children}</ul>,
  ol: ({ children }) => <ol className="my-2 list-decimal space-y-1 pl-5 text-sm text-foreground/80">{children}</ol>,
  li: ({ children }) => <li className="leading-relaxed marker:text-muted-foreground">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-3 rounded-r-lg border-l-2 border-primary/30 bg-muted/40 px-4 py-2 text-sm text-foreground/80">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer noopener" : undefined}
      className="text-primary underline underline-offset-2 hover:text-primary/80"
    >
      {children}
    </a>
  ),
  table: ({ children }) => (
    <div className="my-4 overflow-x-auto rounded-xl border border-border/60">
      <table className="w-full border-collapse text-left text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-muted/50">{children}</thead>,
  tbody: ({ children }) => <tbody className="divide-y divide-border/50">{children}</tbody>,
  tr: ({ children }) => <tr className="align-top">{children}</tr>,
  th: ({ children }) => (
    <th className="border-b border-border/60 px-3 py-2 font-semibold text-foreground">{children}</th>
  ),
  td: ({ children }) => <td className="px-3 py-2 align-top text-foreground/80">{children}</td>,
  code: ({ children, ...props }) => {
    return (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[11px] text-foreground/90" {...props}>
        {children}
      </code>
    )
  },
  pre: ({ children }) => <pre className="my-2 overflow-x-auto rounded-xl bg-muted/60 p-4 text-sm">{children}</pre>,
}

function normalizeMarkdown(content: string): string {
  return content.replace(/\r\n/g, "\n")
}

export function MarkdownMessage({ content }: { content: string }) {
  const segments = parseSegments(normalizeMarkdown(content))

  return (
    <div className="min-w-0 space-y-0.5">
      {segments.map((segment, index) => {
        if (segment.type === "code") {
          if (isInstallCommand(segment.language, segment.code)) {
            return <CommandBlock key={index} command={segment.code.trim()} />
          }

          return (
            <CodePreview
              key={index}
              code={segment.code}
              language={segment.language}
              filename={segment.filename}
              showLineNumbers={segment.code.split("\n").length > 4}
              className="my-2"
            />
          )
        }

        return (
          <ReactMarkdown key={index} remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {segment.content}
          </ReactMarkdown>
        )
      })}
    </div>
  )
}
