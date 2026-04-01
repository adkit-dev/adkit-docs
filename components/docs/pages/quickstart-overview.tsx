"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  JavaScriptIcon,
  ReactIcon,
  NextJSIcon,
  AstroIcon,
  WordPressIcon,
  WebflowIcon,
} from "@/components/icons/sdk-icons"

const frameworks = [
  {
    title: "JavaScript",
    description: "Add Adkit to any website using a single script tag. No build step required.",
    href: "/docs/quickstart/javascript",
    icon: JavaScriptIcon,
  },
  {
    title: "React",
    description: "Install adkit-react and add ad slots to your React app.",
    href: "/docs/quickstart/react",
    icon: ReactIcon,
  },
  {
    title: "Next.js",
    description: "Install adkit-react and add slots to your Next.js app. Supports App Router and Pages Router.",
    href: "/docs/quickstart/nextjs",
    icon: NextJSIcon,
  },
  {
    title: "Astro",
    description: "Add Adkit to an Astro site using the vanilla JS SDK or adkit-react in React islands.",
    href: "/docs/quickstart/astro",
    icon: AstroIcon,
  },
  {
    title: "WordPress",
    description: "Add Adkit to your WordPress site using Custom HTML blocks, functions.php, or a child theme.",
    href: "/docs/quickstart/wordpress",
    icon: WordPressIcon,
  },
  {
    title: "Webflow",
    description: "Add Adkit to your Webflow site using Project Settings and Embed elements.",
    href: "/docs/quickstart/webflow",
    icon: WebflowIcon,
  },
]

export function QuickstartOverviewPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-8 py-8 sm:py-16">
      <header className="mb-10">
        <h1 className="mb-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Quickstarts</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Get Adkit running on your site in under 10 minutes. Choose your framework below.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {frameworks.map((fw) => (
          <Link
            key={fw.href}
            href={fw.href}
            className="group flex items-start gap-5 rounded-xl border border-border/60 bg-card/50 p-6 transition-all hover:border-primary/40 hover:bg-primary/5 hover:shadow-sm"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted/60 transition-colors group-hover:bg-primary/10">
              <fw.icon className="h-7 w-7" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-base font-semibold text-foreground">{fw.title}</h2>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{fw.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </article>
  )
}
