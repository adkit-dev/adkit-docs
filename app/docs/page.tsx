"use client"

import { Fragment } from "react"
import Link from "next/link"
import {
  DollarSign,
  Shield,
  Wallet,
  Store,
  BarChart,
  ArrowRight,
  ArrowDown,
  Code,
} from "lucide-react"
import { DecorativeBg } from "@/components/docs/decorative-bg"
import { FeatureCard } from "@/components/docs/feature-card"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { MultiCodePreview } from "@/components/docs/code-preview"
import {
  AstroIcon,
  JavaScriptIcon,
  NextJSIcon,
  ReactIcon,
  WebflowIcon,
  WordPressIcon,
} from "@/components/icons/sdk-icons"

const features = [
  {
    title: "Earn 17% more than AdSense",
    description: "Keep 85% of every booking. Compared to AdSense's 68% split, you're earning 17% more.",
    icon: Wallet,
  },
  {
    title: "Up and running in two lines",
    description: "Utilize our quickstart for your stack and your first ad slot is live in minutes.",
    icon: Code,
  },
  {
    title: "Fixed-price booking model",
    description: "Set your daily price. Advertisers see the cost upfront, and you know exactly what you'll earn.",
    icon: DollarSign,
  },
  {
    title: "Full control over what runs",
    description: "Manually approve every booking, or enable auto-approval for zero maintenance.",
    icon: Shield,
  },
  {
    title: "Self-serve marketplace",
    description: "Empty slots show a placeholder inviting your site's actual visitors to book an ad.",
    icon: Store,
  },
  {
    title: "Real-time analytics",
    description: "Track revenue, impressions, clicks, CTR, fill rate, and more from your dashboard.",
    icon: BarChart,
  },
]

const howItWorks = [
  {
    step: 1,
    title: "Install the SDK",
    description: "Add the script tag or React package to your site and define your ad slots.",
  },
  {
    step: 2,
    title: "Visitors book",
    description: "Empty slots display a placeholder that visitors can book directly from.",
  },
  {
    step: 3,
    title: "You get paid",
    description: "Review each ad before it goes live. Get paid automatically via Stripe.",
  },
]

const frameworkCards = [
  {
    framework: "JavaScript",
    description: "Script tag setup for any website, recommended for non-React sites not using Next.js or Astro.",
    iconComponent: JavaScriptIcon,
  },
  {
    framework: "React",
    description: "Get your React site up and running in minutes with native components and hooks.",
    iconComponent: ReactIcon,
  },
  {
    framework: "Next.js",
    description: "Framework-specific guidance for adding Adkit to App Router and Pages Router projects.",
    iconComponent: NextJSIcon,
  },
  {
    framework: "Astro",
    description: "Add Adkit to Astro pages and islands with a lightweight client-side integration.",
    iconComponent: AstroIcon,
  },
  {
    framework: "WordPress",
    description: "Install Adkit in WordPress themes or custom layouts without rebuilding your stack.",
    iconComponent: WordPressIcon,
  },
  {
    framework: "Webflow",
    description: "Use custom code embeds and launch Adkit on Webflow sites with minimal setup.",
    iconComponent: WebflowIcon,
  },
]

const codeExamples = [
  {
    label: "JavaScript",
    language: "html",
    filename: "index.html",
    icon: <JavaScriptIcon className="h-4 w-4" />,
    addedLines: [7, 12, 13, 14, 15, 16],
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <script src="https://cdn.adkit.dev/v1.js" defer></script>
</head>
<body>
  <main>
    <h1>Welcome to my site</h1>
    <div
      data-adkit-site="your-site-id"
      data-adkit-slot="my-slot"
      data-adkit-aspect-ratio="4:3"
    ></div>
  </main>
</body>
</html>`,
  },
  {
    label: "React",
    language: "tsx",
    filename: "app/layout.tsx",
    icon: <ReactIcon className="h-4 w-4" />,
    addedLines: [2, 3, 14, 15],
    code: `import type { Metadata } from "next"
import { AdkitProvider, AdSlot } from "adkit-react"
import "adkit-react/styles.css"
import "./globals.css"

export const metadata: Metadata = {
  title: "My App",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AdkitProvider siteId="your-site-id">
          <AdSlot slot="my-slot" aspectRatio="4:3" />
          {children}
        </AdkitProvider>
      </body>
    </html>
  )
}`,
  },
]

function CodeExampleSection() {
  return (
    <div className="mt-20">
      <p className="mb-6 text-center text-lg text-muted-foreground">
        Add your first ad slot in two lines.
      </p>
      <MultiCodePreview examples={codeExamples} />
    </div>
  )
}

function SDKHeroCard({
  title,
  description,
  href,
  iconComponent: IconComponent,
}: {
  title: string
  description: string
  href: string
  iconComponent: React.ComponentType<{ className?: string }>
}) {
  const patternId = `grid-${href.replace(/[^a-zA-Z0-9_-]/g, "-")}`

  return (
    <Link href={href} className="group cursor-pointer">
      <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all sm:h-52">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/5 via-transparent to-transparent"
        />

        <svg
          className="absolute inset-0 h-full w-full opacity-[0.18] mask-[radial-gradient(ellipse_at_center,black_65%,transparent_100%)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id={patternId} width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/15 dark:text-primary/35"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>

        <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/20 dark:border-primary/35 bg-white/80 dark:bg-black/30 backdrop-blur-sm ring-1 ring-primary/10 dark:ring-primary/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:border-primary/70 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.6),0_0_60px_rgba(139,92,246,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]">
          <IconComponent className="h-10 w-10" />
        </div>
      </div>

      <div className="mt-5 space-y-1">
        <h3 className="font-medium text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}

function HowItWorksCard({
  step,
  title,
  description,
}: {
  step: number
  title: string
  description: string
}) {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-linear-to-b from-background via-card/95 to-card/75 p-6 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_60px_-28px_rgba(0,0,0,0.55)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_30%),linear-gradient(180deg,transparent,rgba(0,0,0,0.03))] opacity-80 dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_30%),linear-gradient(180deg,transparent,rgba(255,255,255,0.02))]"
        />

        <div className="relative z-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/15 bg-primary/8 text-lg font-semibold text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:bg-primary/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              {step}
            </div>
            <div>
              <h3 className="mt-1 text-base font-semibold tracking-tight text-foreground">{title}</h3>
            </div>
          </div>
        </div>

        <p className="relative z-10 mt-5 text-sm leading-6 text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function HowItWorksArrow() {
  return (
    <div className="flex items-center justify-center py-1 lg:py-0">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/95 text-muted-foreground shadow-sm backdrop-blur-sm">
        <ArrowDown className="h-4 w-4 lg:hidden" />
        <ArrowRight className="hidden h-4 w-4 lg:block" />
      </div>
    </div>
  )
}

function FrameworkCard({
  framework,
  description,
  iconComponent: IconComponent,
}: {
  framework: string
  description: string
  iconComponent: React.ComponentType<{ className?: string }>
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-linear-to-b from-background via-card/95 to-card/80 p-6 shadow-[0_14px_50px_-28px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_60px_-28px_rgba(0,0,0,0.55)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_34%),linear-gradient(180deg,transparent,rgba(0,0,0,0.03))] opacity-80 dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_34%),linear-gradient(180deg,transparent,rgba(255,255,255,0.02))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent dark:via-white/15"
      />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-primary/15 bg-primary/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-300 group-hover:scale-[1.03] group-hover:border-primary/25 group-hover:bg-primary/10 dark:bg-primary/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <IconComponent className="h-11 w-11" />
        </div>
        <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
      </div>

      <div className="relative z-10 mt-6">
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          {framework} Quickstart
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export default function DocsPage() {
  return (
    <div className="relative min-h-[calc(100vh-3.5rem)]">
      <DecorativeBg />

      {/* Grid background with radial fade - hero area only */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] overflow-hidden text-primary/6 dark:text-primary/12">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
            <linearGradient id="hero-fade-vertical" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="black" />
              <stop offset="15%" stopColor="white" />
              <stop offset="70%" stopColor="white" />
              <stop offset="100%" stopColor="black" />
            </linearGradient>
            <linearGradient id="hero-fade-horizontal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="black" />
              <stop offset="20%" stopColor="white" />
              <stop offset="80%" stopColor="white" />
              <stop offset="100%" stopColor="black" />
            </linearGradient>
            <mask id="hero-mask">
              <rect width="100%" height="100%" fill="url(#hero-fade-vertical)" />
            </mask>
            <mask id="hero-mask-combined">
              <rect width="100%" height="100%" fill="url(#hero-fade-horizontal)" mask="url(#hero-mask)" />
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#hero-grid)"
            mask="url(#hero-mask-combined)"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 lg:py-24 lg:pb-12">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Welcome to Adkit Docs
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Configure and sell ad space on your website, directly from your codebase. These docs will help you get started.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/docs/quickstart">
              <ShimmerButton
                shimmerColor="hsl(270 70% 75%)"
                background="hsl(270 70% 45%)"
                className="h-12 px-8 font-sans text-base font-medium"
              >
                Quickstarts
                <ArrowRight className="ml-2 h-4 w-4" />
              </ShimmerButton>
            </Link>
            <Button asChild variant="ghost" size="lg" className="h-12 px-8 text-base rounded-full">
              <Link href="https://github.com/adkit-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick Start Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <SDKHeroCard
            title="JavaScript SDK"
            description="Add a script tag to any website. No build step, no framework required."
            href="/docs/js/installation"
            iconComponent={JavaScriptIcon}
          />
          <SDKHeroCard
            title="React SDK"
            description="Drop-in React components with hooks, context, and TypeScript support."
            href="/docs/react/installation"
            iconComponent={ReactIcon}
          />
        </div>

        {/* Code Example Section */}
        <CodeExampleSection />

        {/* Framework Section */}
        <div className="mt-24">
          <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
            Pick your framework
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-muted-foreground sm:text-base">
            Start with the stack that matches your site, and get your first ad slot live in minutes.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {frameworkCards.map((card) => (
              <FrameworkCard
                key={card.framework}
                framework={card.framework}
                description={card.description}
                iconComponent={card.iconComponent}
              />
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
            Features built for developers
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                logo={<feature.icon className="h-5 w-5" />}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
