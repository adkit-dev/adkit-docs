"use client"

import { useState } from "react"
import { CodePreview } from "@/components/docs/code-preview"
import { CommandBlock } from "@/components/docs/command-block"
import { Breadcrumbs } from "@/components/docs/breadcrumbs"
import { Callout } from "@/components/docs/callout"
import { ArrowRight } from "lucide-react"

export function QuickstartNextjsPage() {
  const [router, setRouter] = useState<"app" | "pages">("app")

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <Breadcrumbs items={[{ label: "Quickstart" }, { label: "Next.js" }]} className="mb-4 sm:mb-6" />

      <header className="mb-8">
        <h1 className="mb-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Next.js</h1>
        <p className="text-lg text-muted-foreground">
          Install <code className="text-base bg-muted px-1.5 py-0.5 rounded">adkit-react</code> and add slots to your
          Next.js app. Supports both App Router (Next.js 13+) and Pages Router.
        </p>
      </header>

      <Callout variant="note" title="Prerequisites" className="mb-8">
        Next.js 13+, Node.js 18+, and an Adkit account.{" "}
        <a href="https://adkit.dev" className="text-primary">
          Sign up at adkit.dev
        </a>{" "}
        to get your site ID.
      </Callout>

      {/* Router selector */}
      <div className="flex space-x-2 border-b border-border mb-10">
        <button
          onClick={() => setRouter("app")}
          className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
            router === "app"
              ? "border-primary text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          App Router
        </button>
        <button
          onClick={() => setRouter("pages")}
          className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
            router === "pages"
              ? "border-primary text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Pages Router
        </button>
      </div>

      <div className="space-y-12">
        {/* Step 1 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
              1
            </div>
            <h2 className="text-xl font-semibold m-0">Install the package</h2>
          </div>
          <CommandBlock command="npm install adkit-react" />
        </section>

        {/* Step 2 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
              2
            </div>
            <h2 className="text-xl font-semibold m-0">
              {router === "app" ? "Add the provider to your root layout" : "Add the provider to _app.tsx"}
            </h2>
          </div>

          {router === "app" ? (
            <>
              <p className="text-muted-foreground mb-4">
                Import <code className="text-sm bg-muted px-1.5 py-0.5 rounded">AdkitProvider</code> and the styles in
                your root layout. No{" "}
                <code className="text-sm bg-muted px-1.5 py-0.5 rounded">"use client"</code> directive needed — the
                library ships all components pre-marked as client components.
              </p>
              <Callout variant="info" title='No "use client" required' className="mb-4">
                <code>adkit-react</code> handles this automatically. Import and use its components directly from any
                Server Component file — no directive needed on your end.
              </Callout>
              <CodePreview
                language="tsx"
                filename="app/layout.tsx"
                addedLines={[2, 3, 9, 11]}
                code={`import "./globals.css"
import "adkit-react/styles.css"
import { AdkitProvider } from "adkit-react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AdkitProvider siteId="your-site-id">
          {children}
        </AdkitProvider>
      </body>
    </html>
  )
}`}
              />
            </>
          ) : (
            <>
              <p className="text-muted-foreground mb-4">
                Wrap your app in{" "}
                <code className="text-sm bg-muted px-1.5 py-0.5 rounded">AdkitProvider</code> inside{" "}
                <code className="text-sm bg-muted px-1.5 py-0.5 rounded">pages/_app.tsx</code>.
              </p>
              <CodePreview
                language="tsx"
                filename="pages/_app.tsx"
                addedLines={[2, 3, 7, 9]}
                code={`import type { AppProps } from "next/app"
import "adkit-react/styles.css"
import { AdkitProvider } from "adkit-react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AdkitProvider siteId="your-site-id">
      <Component {...pageProps} />
    </AdkitProvider>
  )
}`}
              />
            </>
          )}
        </section>

        {/* Step 3 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
              3
            </div>
            <h2 className="text-xl font-semibold m-0">Add a slot</h2>
          </div>

          {router === "app" ? (
            <>
              <p className="text-muted-foreground mb-4">
                Import <code className="text-sm bg-muted px-1.5 py-0.5 rounded">AdSlot</code> in any component —
                Server Component or Client Component. No extra directive needed.
              </p>
              <CodePreview
                language="tsx"
                filename="app/blog/[slug]/page.tsx"
                code={`import { AdSlot } from "adkit-react"

export default function BlogPost() {
  return (
    <div className="flex gap-8">
      <article className="flex-1">
        {/* post content */}
      </article>

      <aside className="w-72 shrink-0">
        <AdSlot
          slot="sidebar"
          aspectRatio="4:3"
          price={2500}
          className="w-full"
        />
      </aside>
    </div>
  )
}`}
              />
            </>
          ) : (
            <>
              <p className="text-muted-foreground mb-4">
                Import <code className="text-sm bg-muted px-1.5 py-0.5 rounded">AdSlot</code> in any page or
                component.
              </p>
              <CodePreview
                language="tsx"
                filename="pages/blog/[slug].tsx"
                code={`import { AdSlot } from "adkit-react"

export default function BlogPost() {
  return (
    <div className="flex gap-8">
      <article className="flex-1">
        {/* post content */}
      </article>

      <aside className="w-72 shrink-0">
        <AdSlot
          slot="sidebar"
          aspectRatio="4:3"
          price={2500}
          className="w-full"
        />
      </aside>
    </div>
  )
}`}
              />
            </>
          )}

          <Callout variant="warning" title="Price is in cents" className="mt-4">
            <code>{"price={2500}"}</code> = $25/day.
          </Callout>
        </section>

        {/* Step 4 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
              4
            </div>
            <h2 className="text-xl font-semibold m-0">Verify it works</h2>
          </div>
          <p className="text-muted-foreground">
            Run <code className="text-sm bg-muted px-1.5 py-0.5 rounded">next dev</code> and open the page. You should
            see a dashed-border placeholder with "Rent this spot" and your price. If the slot doesn't appear, check the
            browser console — misconfigured slots log a{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">console.error</code> and render nothing without
            crashing the tree.
          </p>
        </section>

        {/* SPA refresh pattern */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Refreshing on route change</h2>
          <p className="text-muted-foreground mb-4">
            Slots re-fetch automatically on mount. For SPA-style navigations where the slot component doesn't remount,
            use <code className="text-sm bg-muted px-1.5 py-0.5 rounded">useAdkit()</code> to trigger a refresh when
            the pathname changes.
          </p>
          <CodePreview
            language="tsx"
            filename={router === "app" ? "app/components/AdRefresher.tsx" : "components/AdRefresher.tsx"}
            code={`"use client"

import { useEffect } from "react"
import { useAdkit } from "adkit-react"
import { usePathname } from "next/navigation"

export function AdRefresher() {
  const { refresh } = useAdkit()
  const pathname = usePathname()

  useEffect(() => {
    refresh()
  }, [pathname])

  return null
}`}
          />
          {router === "app" && (
            <Callout variant="note" className="mt-4">
              This component requires <code>"use client"</code> because it calls a hook. Render it inside your root
              layout, nested inside the provider.
            </Callout>
          )}
        </section>

        {/* Next steps */}
        <section className="pt-8 border-t border-border">
          <h2 className="text-xl font-semibold mb-4">Next steps</h2>
          <div className="grid gap-3">
            <a
              href="/docs/react/adslot"
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div>
                <p className="font-medium text-foreground">&lt;AdSlot /&gt; Reference</p>
                <p className="text-sm text-muted-foreground">All props: size, theme, custom styles, and more</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
            </a>
            <a
              href="/docs/react/provider"
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div>
                <p className="font-medium text-foreground">&lt;AdkitProvider /&gt; Reference</p>
                <p className="text-sm text-muted-foreground">Provider configuration and the refresh API</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
            </a>
            <a
              href="/docs/publisher/dashboard"
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div>
                <p className="font-medium text-foreground">Publisher Dashboard</p>
                <p className="text-sm text-muted-foreground">Manage slots, review ad submissions, and track revenue</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
            </a>
          </div>
        </section>
      </div>
    </article>
  )
}
