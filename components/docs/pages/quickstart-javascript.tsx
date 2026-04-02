"use client"

import { CodePreview } from "@/components/docs/code-preview"
import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"
import { SlotVerifyPreview } from "@/components/docs/slot-verify-preview"

export function QuickstartJavaScriptPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="JavaScript Quickstart"
        description="Add Adkit to any website with a single script tag. No build step or framework required — works on plain HTML, static sites, and any CMS that allows custom code."
        breadcrumbItems={[{ label: "Quickstarts", href: "/quickstart" }, { label: "JavaScript" }]}
        slug="quickstart/javascript"
      />

      <Callout variant="note" title="Prerequisites" className="mb-8">
        An Adkit account and a site ID.{" "}
        <a href="https://adkit.dev" className="text-primary">
          Sign up at adkit.dev
        </a>{" "}
        if you haven't already.
      </Callout>

      <div className="space-y-12">
        {/* Step 1 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
              1
            </div>
            <h2 className="text-xl font-semibold m-0">Add the script tag</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Paste this tag inside the{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">&lt;head&gt;</code> of every page where you want
            to show ads. The <code className="text-sm bg-muted px-1.5 py-0.5 rounded">defer</code> attribute ensures it
            loads without blocking your page.
          </p>
          <CodePreview
            language="html"
            filename="index.html"
            code={`<head>
  <!-- ... your other head content ... -->
  <script src="https://cdn.adkit.dev/v1.js" defer></script>
</head>`}
          />
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
            Add a <code className="text-sm bg-muted px-1.5 py-0.5 rounded">&lt;div&gt;</code> with data attributes
            wherever you want an ad to appear. The SDK discovers these elements automatically on page load.
          </p>
          <CodePreview
            language="html"
            filename="index.html"
            code={`<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
  data-adkit-price="2500"
></div>`}
          />

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Attribute</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Required</th>
                  <th className="text-left py-2 font-medium text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-site</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Your Adkit site ID</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-slot</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">
                    Unique placement name (e.g.{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">sidebar</code>,{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">header-banner</code>)
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-aspect-ratio</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">16:9</code>,{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">4:3</code>,{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">1:1</code>,{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">9:16</code>, or{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">banner</code>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-price</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">
                    Daily price in cents —{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">2500</code> = $25/day
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Callout variant="warning" title="Price is in cents" className="mt-4">
            <code>data-adkit-price="2500"</code> = $25/day. The server validates and enforces the price — it
            cannot be manipulated client-side.
          </Callout>
        </section>

        {/* Step 3: Complete example */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
              3
            </div>
            <h2 className="text-xl font-semibold m-0">Complete example</h2>
          </div>
          <p className="text-muted-foreground mb-4">A working minimal page with one ad slot.</p>
          <CodePreview
            language="html"
            filename="index.html"
            code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Site</title>
    <script src="https://cdn.adkit.dev/v1.js" defer></script>
  </head>
  <body>
    <main>
      <article>
        <!-- your page content -->
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
  </body>
</html>`}
          />
        </section>

        {/* Step 4: Verify */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
              4
            </div>
            <h2 className="text-xl font-semibold m-0">Verify it works</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Open your page in a browser. You should see a slot such as the one below. 
          </p>
          <SlotVerifyPreview variant="js" />
          <Callout variant="note" className="mt-4">
            <strong>Ad blockers:</strong> Disable your ad blocker during development. Most ad blockers suppress the
            Adkit script in local environments.
          </Callout>
        </section>

        {/* Common patterns */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Common patterns</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-base font-medium mb-2">Multiple slots on one page</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Each slot needs a unique{" "}
                <code className="text-xs bg-muted px-1 py-0.5 rounded">data-adkit-slot</code> value. The SDK discovers
                all of them in a single pass.
              </p>
              <CodePreview
                language="html"
                filename="index.html"
                code={`<!-- Header banner -->
<div
  data-adkit-site="your-site-id"
  data-adkit-slot="header-banner"
  data-adkit-aspect-ratio="banner"
  data-adkit-price="3500"
></div>

<!-- Sidebar -->
<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
  data-adkit-price="2500"
></div>`}
              />
            </div>

            <div>
              <h3 className="text-base font-medium mb-2">Programmatic refresh</h3>
              <p className="text-muted-foreground text-sm mb-3">
                If you render slots dynamically (e.g. after a fetch or client-side navigation), call{" "}
                <code className="text-xs bg-muted px-1 py-0.5 rounded">window.__adkit.refresh()</code> to re-scan the
                DOM.
              </p>
              <CodePreview
                language="javascript"
                filename="app.js"
                code={`// After dynamically inserting slot elements into the DOM
async function loadContent() {
  const container = document.getElementById("dynamic-content")
  container.innerHTML = await fetchPageContent()

  // Re-scan for new slot elements
  await window.__adkit.refresh()
}`}
              />
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}
