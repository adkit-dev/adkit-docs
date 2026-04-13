"use client"

import { CodePreview } from "@/components/docs/code-preview"
import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function JsApiPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="JavaScript API"
        description="Programmatic control of the Adkit SDK via window.__adkit. Primarily used for SPA navigation and slot refresh."
        breadcrumbItems={[{ label: "JavaScript SDK", href: "/js/installation" }, { label: "JavaScript API" }]}
        slug="js/api"
      />

      <div className="space-y-12">
        {/* Global object */}
        <section>
          <h2 className="text-xl font-semibold mb-4">The window.__adkit object</h2>
          <p className="text-muted-foreground mb-4">
            Once the script loads, <code className="text-sm bg-muted px-1.5 py-0.5 rounded">window.__adkit</code> is
            available globally. The SDK is idempotent — if the script loads twice, the second load exits without
            re-initializing.
          </p>
          <Callout variant="note">
            Wait for the <code>load</code> event or place your script calls after the page body before accessing{" "}
            <code>window.__adkit</code>. The object is not available before the SDK initializes.
          </Callout>
        </section>

        {/* API surface */}
        <section>
          <h2 className="text-xl font-semibold mb-4">API reference</h2>
          <div className="overflow-x-auto mb-6">
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
                  <td className="py-2 pr-4 font-mono text-xs">window.__adkit.version</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2">SDK version string (e.g. <code className="text-xs bg-muted px-1 py-0.5 rounded">"1.1.0"</code>)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">window.__adkit.refresh()</td>
                  <td className="py-2 pr-4 font-mono text-xs">{"async () => Promise<void>"}</td>
                  <td className="py-2">
                    Resets all tracking state, re-scans the DOM, and re-initializes all slot elements found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* refresh() */}
        <section>
          <h2 className="text-xl font-semibold mb-4">refresh()</h2>
          <p className="text-muted-foreground mb-4">
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">refresh()</code> is an async function that:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside mb-4">
            <li>Clears the event tracking Sets (so impressions and mounts are counted fresh)</li>
            <li>Clears the duplicate-slot detection Set</li>
            <li>Resets all slot state</li>
            <li>Marks all <code className="text-xs bg-muted px-1 py-0.5 rounded">[data-adkit-slot]</code> elements as uninitialized</li>
            <li>Runs <code className="text-xs bg-muted px-1 py-0.5 rounded">initializeAllSlots()</code> to discover and render every slot in the DOM</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            The primary use case is after client-side navigation in single-page apps, where the DOM changes but the
            page doesn't fully reload.
          </p>

          <h3 className="text-base font-medium mb-2">SPA navigation example</h3>
          <CodePreview
            language="javascript"
            filename="app.js"
            code={`// After a client-side route change, re-initialize slots for the new page
async function navigateTo(path) {
  // Update your DOM / render new content
  await renderPage(path)

  // Re-scan for slot elements on the new page
  await window.__adkit.refresh()
}

// Or with a router callback
router.afterEach(async () => {
  await window.__adkit.refresh()
})`}
          />

          <h3 className="text-base font-medium mb-2 mt-6">Dynamically inserted slots</h3>
          <p className="text-muted-foreground text-sm mb-3">
            The SDK uses a <code className="text-xs bg-muted px-1 py-0.5 rounded">MutationObserver</code> to pick up
            new slot elements automatically within 100ms. Calling{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded">refresh()</code> immediately after inserting
            slots skips the debounce and initializes them right away.
          </p>
          <CodePreview
            language="javascript"
            filename="app.js"
            code={`async function loadSection() {
  const container = document.querySelector("#dynamic-section")
  container.innerHTML = await fetchSectionHTML()

  // Immediately initialize any new slots without waiting for MutationObserver
  await window.__adkit.refresh()
}`}
          />
        </section>

        {/* version */}
        <section>
          <h2 className="text-xl font-semibold mb-4">version</h2>
          <p className="text-muted-foreground mb-4">
            Read the loaded SDK version for debugging or conditional behavior.
          </p>
          <CodePreview
            language="javascript"
            filename="app.js"
            code={`console.log(window.__adkit.version)
// → "1.1.0"`}
          />
        </section>

        {/* Automatic event tracking */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Automatic event tracking</h2>
          <p className="text-muted-foreground mb-4">
            The SDK tracks these events automatically. You don't need to wire up any calls — they fire as part of
            the slot lifecycle.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Event</th>
                  <th className="text-left py-2 font-medium text-foreground">When it fires</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">slot_mount</td>
                  <td className="py-2">Once per slot identity per page load, when the slot initializes</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">slot_view</td>
                  <td className="py-2">When ≥50% of the slot enters the viewport (fires for both active ads and empty placeholders)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">slot_click</td>
                  <td className="py-2">When a visitor clicks a live ad creative (not a placeholder click)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">slot_duplicate</td>
                  <td className="py-2">When the same slot identity appears twice on the same page</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">
            Events are sent via{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded">fetch</code> with{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded">keepalive: true</code> and{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded">credentials: "omit"</code>. They never block rendering
            and silently swallow errors. Disable tracking per-slot with{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded">data-adkit-silent="true"</code>.
          </p>
        </section>
      </div>
    </article>
  )
}
