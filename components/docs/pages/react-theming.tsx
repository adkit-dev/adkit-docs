"use client"

import { CodePreview } from "@/components/docs/code-preview"
import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function ReactThemingPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Theming"
        description="Control the visual appearance of Adkit slots. Set a built-in theme, override individual color tokens, or apply global CSS variables."
        breadcrumbItems={[{ label: "React SDK", href: "/react/installation" }, { label: "Theming" }]}
        slug="react/theming"
      />

      <div className="space-y-12">
        {/* Theme prop */}
        <section>
          <h2 className="text-xl font-semibold mb-4">theme prop</h2>
          <p className="text-muted-foreground mb-4">
            Every <code className="text-sm bg-muted px-1.5 py-0.5 rounded">AdSlot</code> accepts a{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">theme</code> prop that controls the placeholder's
            built-in color scheme.
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
                  <td className="py-2">Follows <code className="text-xs bg-muted px-1 py-0.5 rounded">prefers-color-scheme</code> media query (default)</td>
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
            language="tsx"
            filename="src/components/Sidebar.tsx"
            code={`import { AdSlot } from "adkit-react"

// Always dark — useful for dark sidebars regardless of system theme
<AdSlot
  slot="sidebar"
  aspectRatio="4:3"
  price={2500}
  theme="dark"
/>

// Follow system preference (default)
<AdSlot
  slot="header-banner"
  aspectRatio="banner"
  price={3500}
  theme="auto"
/>`}
          />
          <Callout variant="note" className="mt-4">
            Theme is set per-slot. There is no global theme prop on{" "}
            <code>AdkitProvider</code> — each slot manages its own appearance independently.
          </Callout>
        </section>

        {/* styles prop */}
        <section>
          <h2 className="text-xl font-semibold mb-4">styles prop — fine-grained overrides</h2>
          <p className="text-muted-foreground mb-4">
            The <code className="text-sm bg-muted px-1.5 py-0.5 rounded">styles</code> prop accepts an{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">AdSlotStyles</code> object that overrides
            individual color tokens on the placeholder. All fields are optional and any valid CSS color value is
            accepted.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Field</th>
                  <th className="text-left py-2 font-medium text-foreground">What it controls</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">borderColor</td>
                  <td className="py-2">Dashed outline color of the placeholder (applied at 40% / 60% opacity for normal / hover)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">backgroundColor</td>
                  <td className="py-2">Background fill of the placeholder (default: transparent)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">textColorPrimary</td>
                  <td className="py-2">Price text color</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">textColorSecondary</td>
                  <td className="py-2">Label ("Your ad here") and CTA ("Rent this spot") text color</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodePreview
            language="tsx"
            filename="src/components/Indigo.tsx"
            code={`import { AdSlot } from "adkit-react"

<AdSlot
  slot="sidebar"
  aspectRatio="4:3"
  price={2500}
  styles={{
    borderColor: "#6366f1",
    backgroundColor: "#1e1b4b",
    textColorPrimary: "#e0e7ff",
    textColorSecondary: "#a5b4fc",
  }}
/>`}
          />
        </section>

        {/* CSS custom properties */}
        <section>
          <h2 className="text-xl font-semibold mb-4">CSS custom properties</h2>
          <p className="text-muted-foreground mb-4">
            The slot sets these CSS custom properties inline on its root element. You can target them in your
            stylesheet for global or conditional overrides — though the{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">styles</code> prop is usually easier for
            per-slot changes.
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
                  <td className="py-2">CSS aspect-ratio value derived from the aspectRatio prop</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodePreview
            language="css"
            filename="src/index.css"
            code={`/* Override colors globally for all slots on the page */
[data-adkit-slot] {
  --adkit-border: oklch(60% 0.2 270);
  --adkit-border-hover: oklch(70% 0.2 270);
  --adkit-bg: oklch(15% 0.05 270);
}

/* Or target a specific slot by its data attribute */
[data-adkit-site="abc123"][data-adkit-slot="sidebar"] {
  --adkit-bg: #f0fdf4;
  --adkit-border: #22c55e;
}`}
          />
        </section>

        {/* Data attributes on DOM */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Data attributes on the DOM element</h2>
          <p className="text-muted-foreground mb-4">
            The rendered slot element has these data attributes you can use as CSS selectors:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Attribute</th>
                  <th className="text-left py-2 font-medium text-foreground">Value</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-site</td>
                  <td className="py-2">Your site ID</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-slot</td>
                  <td className="py-2">The slot name</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-ratio</td>
                  <td className="py-2">The aspect ratio value (e.g. <code className="text-xs bg-muted px-1 py-0.5 rounded">4:3</code>)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-size</td>
                  <td className="py-2"><code className="text-xs bg-muted px-1 py-0.5 rounded">sm</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">md</code>, or <code className="text-xs bg-muted px-1 py-0.5 rounded">lg</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </article>
  )
}
