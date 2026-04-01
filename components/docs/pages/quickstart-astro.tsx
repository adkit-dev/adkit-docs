"use client"

import { CommandBlock } from "@/components/docs/command-block"
import { CodePreview } from "@/components/docs/code-preview"
import { Breadcrumbs } from "@/components/docs/breadcrumbs"
import { Callout } from "@/components/docs/callout"
import { ArrowRight } from "lucide-react"

export function QuickstartAstroPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <Breadcrumbs items={[{ label: "Quickstarts", href: "/docs/quickstart" }, { label: "Astro" }]} className="mb-4 sm:mb-6" />

      <header className="mb-8">
        <h1 className="mb-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Astro</h1>
        <p className="text-lg text-muted-foreground">
          Add Adkit to an Astro site using the vanilla JS SDK. If your project has React integration enabled, you can
          also use <code className="text-base bg-muted px-1.5 py-0.5 rounded">adkit-react</code> inside React islands.
        </p>
      </header>

      <Callout variant="note" title="Prerequisites" className="mb-8">
        An Astro project and an Adkit account.{" "}
        <a href="https://adkit.dev" className="text-primary">
          Sign up at adkit.dev
        </a>{" "}
        to get your site ID.
      </Callout>

      <div className="space-y-12">
        {/* Step 1 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
              1
            </div>
            <h2 className="text-xl font-semibold m-0">Add the script to your layout</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Open your base layout and add the Adkit script tag inside{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">&lt;head&gt;</code>. Most Astro projects have a
            single layout at{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">src/layouts/Layout.astro</code>.
          </p>
          <CodePreview
            language="html"
            filename="src/layouts/Layout.astro"
            addedLines={[9]}
            code={`---
// Layout.astro frontmatter
---
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{Astro.props.title}</title>
    <script src="https://cdn.adkit.dev/v1.js" defer></script>
  </head>
  <body>
    <slot />
  </body>
</html>`}
          />
          <Callout variant="note" title="Astro script hoisting" className="mt-4">
            Astro may process inline <code>&lt;script&gt;</code> tags. Using a <code>src</code> attribute (as above)
            loads the script as-is without Astro's bundler touching it.
          </Callout>
        </section>

        {/* Step 2 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
              2
            </div>
            <h2 className="text-xl font-semibold m-0">Place a slot element</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Add the slot div to any{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">.astro</code> file. The SDK discovers it on page
            load.
          </p>
          <CodePreview
            language="html"
            filename="src/pages/index.astro"
            code={`---
import Layout from "../layouts/Layout.astro"
---
<Layout title="My Site">
  <main>
    <article>
      <!-- page content -->
    </article>

    <aside>
      <div
        data-adkit-site="your-site-id"
        data-adkit-slot="sidebar"
        data-adkit-aspect-ratio="4:3"
        data-adkit-price="2500"
      ></div>
    </aside>
  </main>
</Layout>`}
          />
          <Callout variant="warning" title="Price is in cents" className="mt-4">
            <code>data-adkit-price="2500"</code> = $25/day.
          </Callout>
        </section>

        {/* Step 3 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
              3
            </div>
            <h2 className="text-xl font-semibold m-0">Verify it works</h2>
          </div>
          <p className="text-muted-foreground">
            Run <code className="text-sm bg-muted px-1.5 py-0.5 rounded">astro dev</code> and open your page. You
            should see a dashed-border placeholder with "Rent this spot" and your price. If it doesn't appear, check the
            browser console for{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">[Adkit]</code> errors.
          </p>
        </section>

        {/* React islands */}
        <section className="pt-8 border-t border-border">
          <h2 className="text-xl font-semibold mb-2">Using adkit-react in React islands</h2>
          <p className="text-muted-foreground mb-6">
            If your Astro project has the{" "}
            <a
              href="https://docs.astro.build/en/guides/integrations-guide/react/"
              className="text-primary underline underline-offset-4"
            >
              React integration
            </a>{" "}
            enabled, you can use <code className="text-sm bg-muted px-1.5 py-0.5 rounded">adkit-react</code> inside
            React components instead.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-3">Install the package:</p>
              <CommandBlock command="npm install adkit-react" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-3">
                Create a React component with the provider and slot:
              </p>
              <CodePreview
                language="tsx"
                filename="src/components/SidebarAd.tsx"
                code={`import { AdkitProvider, AdSlot } from "adkit-react"
import "adkit-react/styles.css"

export function SidebarAd() {
  return (
    <AdkitProvider siteId="your-site-id">
      <AdSlot
        slot="sidebar"
        aspectRatio="4:3"
        price={2500}
        className="w-full"
      />
    </AdkitProvider>
  )
}`}
              />
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-3">Use it as a client island in your Astro page:</p>
              <CodePreview
                language="html"
                filename="src/pages/index.astro"
                code={`---
import Layout from "../layouts/Layout.astro"
import { SidebarAd } from "../components/SidebarAd"
---
<Layout title="My Site">
  <aside>
    <SidebarAd client:load />
  </aside>
</Layout>`}
              />
            </div>
          </div>

          <Callout variant="tip" className="mt-4">
            Use <code>client:load</code> or <code>client:visible</code> (for below-the-fold slots) to hydrate the
            component client-side. <code>client:only="react"</code> also works if you want to skip SSR entirely.
          </Callout>
        </section>

        {/* Next steps */}
        <section className="pt-8 border-t border-border">
          <h2 className="text-xl font-semibold mb-4">Next steps</h2>
          <div className="grid gap-3">
            <a
              href="/docs/js/data-attributes"
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div>
                <p className="font-medium text-foreground">Data Attributes</p>
                <p className="text-sm text-muted-foreground">Full reference for all slot configuration options</p>
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
