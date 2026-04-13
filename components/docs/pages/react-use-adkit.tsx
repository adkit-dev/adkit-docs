"use client"

import { CodePreview } from "@/components/docs/code-preview"
import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function ReactUseAdkitPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="useAdkit()"
        description="Access the Adkit context from any component inside AdkitProvider. The primary use case is triggering a slot refresh after client-side navigation."
        breadcrumbItems={[{ label: "React SDK", href: "/react/installation" }, { label: "useAdkit()" }]}
        slug="react/use-adkit"
      />

      <div className="space-y-12">
        {/* Overview */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-4">
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">useAdkit()</code> returns the context value
            provided by the nearest{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">AdkitProvider</code>. It throws if called
            outside a provider tree.
          </p>
          <Callout variant="warning">
            <code>useAdkit()</code> must be called inside a component that is a descendant of{" "}
            <code>AdkitProvider</code>. Using it without a provider throws an error.
          </Callout>
        </section>

        {/* Return value */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Return value</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Property</th>
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
                  <td className="py-2">
                    Increments each time <code className="text-xs bg-muted px-1 py-0.5 rounded">refresh()</code> is
                    called. Slots use this as a key to force remounting.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">refresh</td>
                  <td className="py-2 pr-4 font-mono text-xs">{"() => void"}</td>
                  <td className="py-2">
                    Clears all slot tracking state and forces every <code className="text-xs bg-muted px-1 py-0.5 rounded">AdSlot</code> to
                    re-initialize. Use after SPA route changes where slots re-render on a new page.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">mountedSlots</td>
                  <td className="py-2 pr-4 font-mono text-xs">{"Set<string>"}</td>
                  <td className="py-2">
                    Set of currently mounted slot identities in the format{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">siteId:slot</code>
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">registerSlot</td>
                  <td className="py-2 pr-4 font-mono text-xs">{"(identity: string) => boolean"}</td>
                  <td className="py-2">
                    Internal. Returns <code className="text-xs bg-muted px-1 py-0.5 rounded">true</code> if
                    registration succeeded, <code className="text-xs bg-muted px-1 py-0.5 rounded">false</code> if
                    this identity was already registered (duplicate).
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">unregisterSlot</td>
                  <td className="py-2 pr-4 font-mono text-xs">{"(identity: string) => void"}</td>
                  <td className="py-2">Internal. Called by AdSlot on unmount to free the identity.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SPA refresh */}
        <section>
          <h2 className="text-xl font-semibold mb-4">SPA refresh after navigation</h2>
          <p className="text-muted-foreground mb-4">
            In single-page applications, slots from a previous route may still be tracked by the provider when the
            user navigates to a new page. Calling{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">refresh()</code> clears that state so new
            impressions are counted correctly and duplicate-slot detection resets.
          </p>

          <h3 className="text-base font-medium mb-2">React Router</h3>
          <CodePreview
            language="tsx"
            filename="src/components/AdRefresher.tsx"
            code={`import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useAdkit } from "adkit-react"

export function AdRefresher() {
  const { refresh } = useAdkit()
  const location = useLocation()

  useEffect(() => {
    refresh()
  }, [location.pathname])

  return null
}`}
          />
          <p className="text-sm text-muted-foreground mt-3 mb-6">
            Render <code className="text-xs bg-muted px-1 py-0.5 rounded">&lt;AdRefresher /&gt;</code> once inside
            your router, at the same level as your route definitions.
          </p>

          <h3 className="text-base font-medium mb-2">Next.js App Router</h3>
          <CodePreview
            language="tsx"
            filename="app/components/AdRefresher.tsx"
            code={`"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useAdkit } from "adkit-react"

export function AdRefresher() {
  const { refresh } = useAdkit()
  const pathname = usePathname()

  useEffect(() => {
    refresh()
  }, [pathname])

  return null
}`}
          />
        </section>

        {/* Reading context values */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Reading context values</h2>
          <CodePreview
            language="tsx"
            filename="src/components/AdStatus.tsx"
            code={`import { useAdkit } from "adkit-react"

export function AdStatus() {
  const { siteId, mountedSlots } = useAdkit()

  return (
    <div>
      <p>Site: {siteId}</p>
      <p>Active slots: {mountedSlots.size}</p>
    </div>
  )
}`}
          />
        </section>

        {/* Slot identity */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Slot identity format</h2>
          <p className="text-muted-foreground mb-4">
            Slot identities in <code className="text-sm bg-muted px-1.5 py-0.5 rounded">mountedSlots</code> use the
            format <code className="text-sm bg-muted px-1.5 py-0.5 rounded">siteId:slot</code>. The identity is
            site-scoped, not page-scoped — the same slot name maps to the same identity regardless of which URL
            it appears on.
          </p>
          <CodePreview
            language="tsx"
            filename="example"
            code={`// siteId = "abc123", slot = "sidebar"
// identity = "abc123:sidebar"

const { mountedSlots } = useAdkit()
const isSidebarMounted = mountedSlots.has("abc123:sidebar")`}
          />
        </section>
      </div>
    </article>
  )
}
