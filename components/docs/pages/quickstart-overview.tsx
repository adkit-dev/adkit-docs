"use client"

import {
  JavaScriptIcon,
  ReactIcon,
  NextJSIcon,
  AstroIcon,
  WordPressIcon,
  WebflowIcon,
} from "@/components/icons/sdk-icons"
import { FrameworkCard } from "@/components/docs/framework-card"

const frameworks = [
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
]

export function QuickstartOverviewPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-8 py-8 sm:py-16">
      <header className="mb-10">
        <h1 className="mb-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Quickstarts</h1>
        <p className="text-md text-muted-foreground max-w-3xl">
          Get Adkit running on your site in under 10 minutes. Choose your stack below.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {frameworks.map((fw) => (
          <FrameworkCard
            key={fw.href}
            title={fw.title}
            description={fw.description}
            iconComponent={fw.icon}
            href={fw.href}
            showQuickstartLabel={false}
          />
        ))}
      </div>
    </article>
  )
}
