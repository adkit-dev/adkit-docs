"use client"

import { CodePreview } from "@/components/docs/code-preview"
import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"
import { SlotVerifyPreview } from "@/components/docs/slot-verify-preview"

export function JsInstallationPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Installation"
        description="Add Adkit to any website with a single script tag. No npm, no build step, no framework required."
        breadcrumbItems={[{ label: "JavaScript SDK", href: "/js/installation" }, { label: "Installation" }]}
        slug="js/installation"
      />

      <Callout variant="note" title="Prerequisites" className="mb-8">
        An Adkit account and a site ID.{" "}
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
            <h2 className="text-xl font-semibold m-0">Add the script tag</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Add the Adkit script to the{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">&lt;head&gt;</code> of every page where you want
            ads. The <code className="text-sm bg-muted px-1.5 py-0.5 rounded">defer</code> attribute loads the script
            without blocking page render.
          </p>
          <CodePreview
            language="html"
            filename="index.html"
            code={`<head>
  <!-- your other head content -->
  <script src="https://cdn.adkit.dev/v1.js" defer></script>
</head>`}
          />
          <p className="text-sm text-muted-foreground mt-3">
            The script is served from Adkit's global CDN (~18KB minified / ~5.8KB gzipped). Average load time is under 50ms.
          </p>
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
            wherever you want an ad. The SDK discovers and initializes all slot elements automatically after the page
            loads.
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
          <Callout variant="warning" title="Price is in cents" className="mt-4">
            <code>data-adkit-price="2500"</code> displays as $25/day. The server validates and enforces the final price
            — it cannot be manipulated client-side.
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
          <p className="text-muted-foreground mb-4">
            Open your page in a browser. You should see a preview like the one below.
          </p>
          <SlotVerifyPreview variant="js" />
          <p className="text-muted-foreground mt-4 mb-4">
            If the slot doesn't appear, open the browser console — all errors are prefixed with{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">[Adkit]</code>.
          </p>
          <Callout variant="note">
            Disable your ad blocker during development. Most ad blockers suppress the Adkit script in local
            environments.
          </Callout>
        </section>

        {/* Complete example */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Complete page example</h2>
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
      <article><!-- page content --></article>

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

        {/* Initialization */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Initialization behavior</h2>
          <p className="text-muted-foreground mb-4">
            The SDK waits for the <code className="text-sm bg-muted px-1.5 py-0.5 rounded">load</code> event, then
            yields with <code className="text-sm bg-muted px-1.5 py-0.5 rounded">setTimeout(0)</code> to allow
            frameworks to hydrate before it scans the DOM. This means slots added by a framework during hydration
            are picked up automatically.
          </p>
          <p className="text-muted-foreground mb-4">
            A <code className="text-sm bg-muted px-1.5 py-0.5 rounded">MutationObserver</code> watches{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">document.body</code> for dynamically added
            slot elements. Slots inserted into the DOM after initial load are initialized within 100ms automatically
            — no manual call needed in most cases.
          </p>
          <p className="text-muted-foreground">
            For explicit control (e.g., after a client-side navigation), call{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">window.__adkit.refresh()</code>.
          </p>
        </section>

        {/* CSP */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Content Security Policy</h2>
          <p className="text-muted-foreground mb-4">
            If your site uses a CSP, add the following directives:
          </p>
          <CodePreview
            language="text"
            filename="Content-Security-Policy header"
            code={`script-src https://cdn.adkit.dev;
connect-src https://adkit.dev;
img-src https://ufs.sh;`}
          />
        </section>
      </div>
    </article>
  )
}
