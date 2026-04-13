"use client"

import { CodePreview } from "@/components/docs/code-preview"
import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function ReactProviderPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="<AdkitProvider />"
        description="Initializes the Adkit SDK and provides shared context to all AdSlot components in your tree."
        breadcrumbItems={[{ label: "React SDK", href: "/react/installation" }, { label: "<AdkitProvider />" }]}
        slug="react/provider"
      />

      <div className="space-y-12">
        {/* Overview */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-4">
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">AdkitProvider</code> must wrap any part of your
            component tree that contains <code className="text-sm bg-muted px-1.5 py-0.5 rounded">AdSlot</code>{" "}
            components. Place it as high in the tree as possible — typically at the root of your app — so all slots
            share the same context and the{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">refresh()</code> API from{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">useAdkit()</code> works across your entire
            application.
          </p>
          <Callout variant="note">
            <code>AdkitProvider</code> is marked <code>"use client"</code> internally. In Next.js App Router you do not
            need to add <code>"use client"</code> to the file that imports it — the directive is already inside the
            package.
          </Callout>
        </section>

        {/* Props */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Props</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Prop</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Type</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Required</th>
                  <th className="text-left py-2 font-medium text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">siteId</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Your Adkit site ID from the publisher dashboard</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">children</td>
                  <td className="py-2 pr-4 font-mono text-xs">ReactNode</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Your application tree</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* React / Vite example */}
        <section>
          <h2 className="text-xl font-semibold mb-4">React (Vite / CRA)</h2>
          <p className="text-muted-foreground mb-4">
            Wrap your root component and import the stylesheet. The stylesheet is required for slots to render
            correctly.
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

        {/* Next.js App Router */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Next.js — App Router</h2>
          <p className="text-muted-foreground mb-4">
            Add the provider to your root layout. You do not need to create a separate client component wrapper — the
            package handles the <code className="text-sm bg-muted px-1.5 py-0.5 rounded">"use client"</code> boundary
            internally.
          </p>
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
        </section>

        {/* Next.js Pages Router */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Next.js — Pages Router</h2>
          <p className="text-muted-foreground mb-4">
            Add the provider to your custom <code className="text-sm bg-muted px-1.5 py-0.5 rounded">_app.tsx</code>.
          </p>
          <CodePreview
            language="tsx"
            filename="pages/_app.tsx"
            addedLines={[2, 3, 8, 10]}
            code={`import "../styles/globals.css"
import "adkit-react/styles.css"
import { AdkitProvider } from "adkit-react"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AdkitProvider siteId="your-site-id">
      <Component {...pageProps} />
    </AdkitProvider>
  )
}`}
          />
        </section>

        {/* Context values */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Context values</h2>
          <p className="text-muted-foreground mb-4">
            The provider exposes these values through the{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">useAdkit()</code> hook. You typically only need{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">refresh()</code>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Value</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Type</th>
                  <th className="text-left py-2 font-medium text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">siteId</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2">The site ID passed to the provider</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">refreshKey</td>
                  <td className="py-2 pr-4 font-mono text-xs">number</td>
                  <td className="py-2">Increments each time <code className="text-xs bg-muted px-1 py-0.5 rounded">refresh()</code> is called; used by slots to remount</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">refresh</td>
                  <td className="py-2 pr-4 font-mono text-xs">{"() => void"}</td>
                  <td className="py-2">Clears all slot tracking and forces every slot to re-initialize (use after SPA navigation)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">mountedSlots</td>
                  <td className="py-2 pr-4 font-mono text-xs">{"Set<string>"}</td>
                  <td className="py-2">Set of slot identities currently mounted (<code className="text-xs bg-muted px-1 py-0.5 rounded">siteId:slot</code>)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">registerSlot</td>
                  <td className="py-2 pr-4 font-mono text-xs">{"(identity: string) => boolean"}</td>
                  <td className="py-2">Internal — used by AdSlot to detect duplicates</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">unregisterSlot</td>
                  <td className="py-2 pr-4 font-mono text-xs">{"(identity: string) => void"}</td>
                  <td className="py-2">Internal — used by AdSlot on unmount</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Rules */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Rules</h2>
          <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
            <li>Only one <code className="text-xs bg-muted px-1 py-0.5 rounded">AdkitProvider</code> should exist in your application at a time.</li>
            <li>All <code className="text-xs bg-muted px-1 py-0.5 rounded">AdSlot</code> components must be descendants of the provider, unless you pass <code className="text-xs bg-muted px-1 py-0.5 rounded">siteId</code> directly to the slot.</li>
            <li>The <code className="text-xs bg-muted px-1 py-0.5 rounded">refresh()</code> API from <code className="text-xs bg-muted px-1 py-0.5 rounded">useAdkit()</code> only works inside the provider tree.</li>
          </ul>
        </section>
      </div>
    </article>
  )
}
