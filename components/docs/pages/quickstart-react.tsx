"use client"

import { CodePreview } from "@/components/docs/code-preview"
import { CommandBlock } from "@/components/docs/command-block"
import { Breadcrumbs } from "@/components/docs/breadcrumbs"
import { Callout } from "@/components/docs/callout"
import { ArrowRight } from "lucide-react"

export function QuickstartReactPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <Breadcrumbs items={[{ label: "Quickstarts", href: "/docs/quickstart" }, { label: "React" }]} className="mb-4 sm:mb-6" />

      <header className="mb-8">
        <h1 className="mb-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">React</h1>
        <p className="text-lg text-muted-foreground">
          Install <code className="text-base bg-muted px-1.5 py-0.5 rounded">adkit-react</code> and drop ad slots into
          your React app. Works with Vite, Create React App, and any React 17+ project.
        </p>
      </header>

      <Callout variant="note" title="Prerequisites" className="mb-8">
        React 17+, Node.js 18+, and an Adkit account.{" "}
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
            <h2 className="text-xl font-semibold m-0">Add the provider</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Wrap your app with{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">AdkitProvider</code> and import the stylesheet.
            Place the provider as high in the tree as possible so all slots share the same context.
          </p>
          <CodePreview
            language="tsx"
            filename="src/App.tsx"
            addedLines={[2, 3, 7, 9]}
            code={`import "./index.css"
import "adkit-react/styles.css"
import { AdkitProvider } from "adkit-react"

export default function App() {
  return (
    <AdkitProvider siteId="your-site-id">
      <Router />
    </AdkitProvider>
  )
}`}
          />
        </section>

        {/* Step 3 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
              3
            </div>
            <h2 className="text-xl font-semibold m-0">Place a slot</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Import <code className="text-sm bg-muted px-1.5 py-0.5 rounded">AdSlot</code> and add it anywhere in your
            component tree. Give it a unique slot name and an aspect ratio.
          </p>
          <CodePreview
            language="tsx"
            filename="src/components/Sidebar.tsx"
            code={`import { AdSlot } from "adkit-react"

export function Sidebar() {
  return (
    <aside className="w-64 shrink-0">
      <nav>{/* ... */}</nav>

      <AdSlot
        slot="sidebar"
        aspectRatio="4:3"
        price={2500}
        className="mt-8 w-full"
      />
    </aside>
  )
}`}
          />
          <Callout variant="warning" title="Price is in cents" className="mt-4">
            <code>{"price={2500}"}</code> displays as $25/day. The server confirms the final price — it cannot be
            overridden client-side.
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
            Run your app and navigate to the page with the slot. You should see a dashed-border placeholder with "Rent
            this spot" and your price. If it doesn't appear, check the console — misconfigured slots log a{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">console.error</code> and render nothing without
            crashing the component tree.
          </p>
        </section>

        {/* Secondary pattern */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Without a provider</h2>
          <p className="text-muted-foreground mb-4">
            If you only need a single isolated slot, pass{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">siteId</code> directly to{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">AdSlot</code> instead of using a provider.
          </p>
          <CodePreview
            language="tsx"
            filename="src/components/Banner.tsx"
            code={`import { AdSlot } from "adkit-react"

export function Banner() {
  return (
    <AdSlot
      siteId="your-site-id"
      slot="header-banner"
      aspectRatio="banner"
      price={3500}
      className="w-full"
    />
  )
}`}
          />
          <Callout variant="note" className="mt-4">
            The <code>refresh()</code> API from <code>useAdkit()</code> is only available inside a provider. For SPA
            route changes, use the provider approach.
          </Callout>
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
              href="/docs/react/use-adkit"
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div>
                <p className="font-medium text-foreground">useAdkit()</p>
                <p className="text-sm text-muted-foreground">Programmatic refresh and slot registry</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
            </a>
            <a
              href="/docs/react/theming"
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div>
                <p className="font-medium text-foreground">Theming</p>
                <p className="text-sm text-muted-foreground">Light, dark, and auto themes with custom color overrides</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
            </a>
          </div>
        </section>
      </div>
    </article>
  )
}
