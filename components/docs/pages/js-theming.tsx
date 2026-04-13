"use client"

import { CodePreview } from "@/components/docs/code-preview"
import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function JsThemingPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Theming"
        description="Control the visual appearance of JavaScript SDK slots using data attributes and CSS custom properties."
        breadcrumbItems={[{ label: "JavaScript SDK", href: "/js/installation" }, { label: "Theming" }]}
        slug="js/theming"
      />

      <div className="space-y-12">
        {/* Built-in themes */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Built-in themes</h2>
          <p className="text-muted-foreground mb-4">
            Set <code className="text-sm bg-muted px-1.5 py-0.5 rounded">data-adkit-theme</code> on any slot to
            control its color palette. The theme is applied per-slot — different slots on the same page can use
            different themes.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Value</th>
                  <th className="text-left py-2 font-medium text-foreground">Behavior</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">"auto"</td>
                  <td className="py-2">Follows the system <code className="text-xs bg-muted px-1 py-0.5 rounded">prefers-color-scheme</code> media query (default)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">"light"</td>
                  <td className="py-2">Always use the light palette</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">"dark"</td>
                  <td className="py-2">Always use the dark palette</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodePreview
            language="html"
            filename="index.html"
            code={`<!-- Dark sidebar on a dark background -->
<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
  data-adkit-price="2500"
  data-adkit-theme="dark"
></div>

<!-- Banner follows system preference -->
<div
  data-adkit-site="your-site-id"
  data-adkit-slot="header-banner"
  data-adkit-aspect-ratio="banner"
  data-adkit-price="3500"
  data-adkit-theme="auto"
></div>`}
          />
        </section>

        {/* Color data attributes */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Color data attributes</h2>
          <p className="text-muted-foreground mb-4">
            Override individual color tokens per slot using data attributes. These accept any valid CSS color value
            (hex, rgb, oklch, etc.).
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Attribute</th>
                  <th className="text-left py-2 font-medium text-foreground">What it controls</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-bg-color</td>
                  <td className="py-2">Placeholder background fill (default: transparent)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-border-color</td>
                  <td className="py-2">Dashed outline color (applied at 40%/60% opacity for normal/hover)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-text-color-primary</td>
                  <td className="py-2">Price text color</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-text-color-secondary</td>
                  <td className="py-2">Label ("Your ad here") and CTA ("Rent this spot") text color</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodePreview
            language="html"
            filename="index.html"
            code={`<!-- Indigo-themed sidebar -->
<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
  data-adkit-price="2500"
  data-adkit-bg-color="#1e1b4b"
  data-adkit-border-color="#6366f1"
  data-adkit-text-color-primary="#e0e7ff"
  data-adkit-text-color-secondary="#a5b4fc"
></div>`}
          />
        </section>

        {/* CSS custom properties */}
        <section>
          <h2 className="text-xl font-semibold mb-4">CSS custom properties</h2>
          <p className="text-muted-foreground mb-4">
            The SDK sets these CSS custom properties inline on each slot's root element. You can override them in
            your stylesheet to apply changes globally or conditionally.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Variable</th>
                  <th className="text-left py-2 font-medium text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">--adkit-bg</td>
                  <td className="py-2">Placeholder background</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">--adkit-text</td>
                  <td className="py-2">Primary text (price)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">--adkit-text-muted</td>
                  <td className="py-2">Secondary text (label, CTA)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">--adkit-text-strong</td>
                  <td className="py-2">Strong text emphasis</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">--adkit-border</td>
                  <td className="py-2">Dashed border color (normal state)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">--adkit-border-hover</td>
                  <td className="py-2">Dashed border color (hover state)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">--adkit-aspect</td>
                  <td className="py-2">CSS aspect-ratio derived from data-adkit-aspect-ratio</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodePreview
            language="css"
            filename="styles.css"
            code={`/* Apply brand colors to all slots */
[data-adkit-slot] {
  --adkit-border: oklch(60% 0.2 270);
  --adkit-border-hover: oklch(70% 0.2 270);
}

/* Only apply to slots on a dark background section */
.dark-section [data-adkit-slot] {
  --adkit-bg: #0f172a;
  --adkit-text: #f1f5f9;
  --adkit-text-muted: #94a3b8;
  --adkit-border: rgba(148, 163, 184, 0.3);
  --adkit-border-hover: rgba(148, 163, 184, 0.6);
}

/* Target a specific slot */
[data-adkit-slot="sidebar"] {
  --adkit-bg: #f0fdf4;
  --adkit-border: #22c55e;
}`}
          />
          <Callout variant="note" className="mt-4">
            Data attributes (e.g., <code>data-adkit-bg-color</code>) take precedence over CSS custom property overrides
            because they are set as inline styles. Use data attributes for per-slot control and CSS variables for
            global defaults.
          </Callout>
        </section>
      </div>
    </article>
  )
}
