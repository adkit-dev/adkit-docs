"use client"

import { CodePreview } from "@/components/docs/code-preview"
import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function JsDataAttributesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Data Attributes"
        description="Configure ad slots using HTML data attributes. All slot behavior is controlled entirely through attributes — no JavaScript required."
        breadcrumbItems={[{ label: "JavaScript SDK", href: "/js/installation" }, { label: "Data Attributes" }]}
        slug="js/data-attributes"
      />

      <div className="space-y-12">
        {/* Required */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Required attributes</h2>
          <p className="text-muted-foreground mb-4">
            Every slot element must have these four attributes. A slot with a missing or invalid required attribute
            is silently skipped — it won't render and won't throw an error.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Attribute</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Type</th>
                  <th className="text-left py-2 font-medium text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-site</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2">Your Adkit site ID from the publisher dashboard</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-slot</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2">
                    Unique placement name. Must match{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">/^[a-zA-Z0-9_-]+$/</code> — alphanumeric,
                    hyphens, and underscores only.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-aspect-ratio</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2">
                    One of:{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">"16:9"</code>{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">"4:3"</code>{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">"1:1"</code>{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">"9:16"</code>{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">"banner"</code>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-price</td>
                  <td className="py-2 pr-4">integer string</td>
                  <td className="py-2">
                    Daily rate in cents — non-negative integer.{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">"2500"</code> = $25/day.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Callout variant="warning" title="Price is in cents">
            Use whole numbers only. <code>"2500"</code> = $25.00/day. The server validates and enforces the price at
            checkout — it cannot be manipulated client-side.
          </Callout>
        </section>

        {/* Optional */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Optional attributes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Attribute</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Type</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Default</th>
                  <th className="text-left py-2 font-medium text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-size</td>
                  <td className="py-2 pr-4 font-mono text-xs">"sm" | "md" | "lg"</td>
                  <td className="py-2 pr-4">"lg"</td>
                  <td className="py-2">Text size preset for placeholder label and CTA</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-theme</td>
                  <td className="py-2 pr-4 font-mono text-xs">"light" | "dark" | "auto"</td>
                  <td className="py-2 pr-4">"auto"</td>
                  <td className="py-2">
                    Color theme. <code className="text-xs bg-muted px-1 py-0.5 rounded">"auto"</code> follows
                    the system <code className="text-xs bg-muted px-1 py-0.5 rounded">prefers-color-scheme</code>.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-silent</td>
                  <td className="py-2 pr-4 font-mono text-xs">"true"</td>
                  <td className="py-2 pr-4">—</td>
                  <td className="py-2">Disable all event tracking for this slot</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-bg-color</td>
                  <td className="py-2 pr-4">CSS color</td>
                  <td className="py-2 pr-4">transparent</td>
                  <td className="py-2">Placeholder background fill color</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-text-color-primary</td>
                  <td className="py-2 pr-4">CSS color</td>
                  <td className="py-2 pr-4">theme-based</td>
                  <td className="py-2">Price text color</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-text-color-secondary</td>
                  <td className="py-2 pr-4">CSS color</td>
                  <td className="py-2 pr-4">theme-based</td>
                  <td className="py-2">Label and CTA text color</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-border-color</td>
                  <td className="py-2 pr-4">CSS color</td>
                  <td className="py-2 pr-4">theme-based</td>
                  <td className="py-2">Dashed border color (applied at 40%/60% opacity for normal/hover)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Aspect ratios */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Aspect ratio values</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Value</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">CSS ratio</th>
                  <th className="text-left py-2 font-medium text-foreground">Typical use</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">"16:9"</td>
                  <td className="py-2 pr-4">16 / 9</td>
                  <td className="py-2">In-content video-format placements</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">"4:3"</td>
                  <td className="py-2 pr-4">4 / 3</td>
                  <td className="py-2">Sidebar boxes</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">"1:1"</td>
                  <td className="py-2 pr-4">1 / 1</td>
                  <td className="py-2">Square placements</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">"9:16"</td>
                  <td className="py-2 pr-4">9 / 16</td>
                  <td className="py-2">Vertical / story-format placements</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">"banner"</td>
                  <td className="py-2 pr-4">728 / 90</td>
                  <td className="py-2">Horizontal leaderboard (header / footer)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Full example */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Full example</h2>
          <CodePreview
            language="html"
            filename="index.html"
            code={`<!-- Sidebar with dark theme and custom colors -->
<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
  data-adkit-price="2500"
  data-adkit-size="md"
  data-adkit-theme="dark"
  data-adkit-bg-color="#1e1b4b"
  data-adkit-border-color="#6366f1"
  data-adkit-text-color-primary="#e0e7ff"
  data-adkit-text-color-secondary="#a5b4fc"
></div>

<!-- Header banner with default theme, silent tracking -->
<div
  data-adkit-site="your-site-id"
  data-adkit-slot="header-banner"
  data-adkit-aspect-ratio="banner"
  data-adkit-price="3500"
  data-adkit-silent="true"
></div>`}
          />
        </section>

        {/* Slot naming */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Slot naming rules</h2>
          <p className="text-muted-foreground mb-2">
            Slot names must match <code className="text-sm bg-muted px-1.5 py-0.5 rounded">/^[a-zA-Z0-9_-]+$/</code>.
            Slots with invalid names are silently skipped.
          </p>
          <p className="text-muted-foreground mb-4">
            A slot identity is <code className="text-sm bg-muted px-1.5 py-0.5 rounded">siteId:slot</code>. If the
            same identity appears twice on a page, the second instance is skipped and a{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">slot_duplicate</code> event is sent.
          </p>
          <p className="text-sm text-muted-foreground mb-2">Recommended patterns:</p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li><code className="text-xs bg-muted px-1 py-0.5 rounded">sidebar</code></li>
            <li><code className="text-xs bg-muted px-1 py-0.5 rounded">header-banner</code></li>
            <li><code className="text-xs bg-muted px-1 py-0.5 rounded">in-content-1</code></li>
            <li><code className="text-xs bg-muted px-1 py-0.5 rounded">footer-leaderboard</code></li>
          </ul>
        </section>
      </div>
    </article>
  )
}
