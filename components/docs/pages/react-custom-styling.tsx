"use client"

import { CodePreview } from "@/components/docs/code-preview"
import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function ReactCustomStylingPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Custom Styling"
        description="Apply your own CSS to Adkit slot elements using className, CSS class selectors, and data attributes."
        breadcrumbItems={[{ label: "React SDK", href: "/react/installation" }, { label: "Custom Styling" }]}
        slug="react/custom-styling"
      />

      <div className="space-y-12">
        {/* className prop */}
        <section>
          <h2 className="text-xl font-semibold mb-4">className prop</h2>
          <p className="text-muted-foreground mb-4">
            Pass a <code className="text-sm bg-muted px-1.5 py-0.5 rounded">className</code> to control the outer
            container's layout — width, margin, padding, and position.
          </p>
          <CodePreview
            language="tsx"
            filename="src/components/Sidebar.tsx"
            code={`import { AdSlot } from "adkit-react"

// Fill the parent's width with top margin
<AdSlot
  slot="sidebar"
  aspectRatio="4:3"
  price={2500}
  className="mt-8 w-full"
/>

// Fixed width, centered
<AdSlot
  slot="in-content"
  aspectRatio="16:9"
  price={1500}
  className="mx-auto w-[640px] max-w-full"
/>`}
          />
          <Callout variant="note" className="mt-4">
            If no <code>className</code> is provided, the slot defaults to{" "}
            <code>width: 100%</code> via the <code>adkit-slot--default-width</code> class. Providing any
            className removes this default — you take full control of the width.
          </Callout>
        </section>

        {/* CSS class selectors */}
        <section>
          <h2 className="text-xl font-semibold mb-4">CSS class selectors</h2>
          <p className="text-muted-foreground mb-4">
            These classes are applied to the internal elements of every slot. Target them in your global stylesheet
            to make changes across all slots at once.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Class</th>
                  <th className="text-left py-2 font-medium text-foreground">Element</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">.adkit-slot</td>
                  <td className="py-2">Root container (when className is provided)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">.adkit-slot--default-width</td>
                  <td className="py-2">Root container (when no className is provided, adds <code className="text-xs bg-muted px-1 py-0.5 rounded">width: 100%</code>)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">.adkit-canvas</td>
                  <td className="py-2">Inner canvas that enforces the aspect ratio</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">.adkit-box</td>
                  <td className="py-2">Placeholder container (empty and loading states)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">.adkit-content</td>
                  <td className="py-2">Inner content wrapper inside the placeholder</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">.adkit-label</td>
                  <td className="py-2">"Your ad here" / "ad space" label text</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">.adkit-price</td>
                  <td className="py-2">Price display text</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">.adkit-cta</td>
                  <td className="py-2">"Rent this spot" / "Rent" / "Learn more" button</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">.adkit-arrow</td>
                  <td className="py-2">Arrow icon inside the CTA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodePreview
            language="css"
            filename="src/index.css"
            code={`/* Rounded corners on all slots */
.adkit-canvas {
  border-radius: 8px;
  overflow: hidden;
}

/* Custom font on placeholder text */
.adkit-label,
.adkit-cta {
  font-family: "Inter", sans-serif;
}

/* Bolder CTA */
.adkit-cta {
  font-weight: 600;
  letter-spacing: 0.01em;
}`}
          />
        </section>

        {/* Data attribute selectors */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Data attribute selectors</h2>
          <p className="text-muted-foreground mb-4">
            The root element has data attributes for site, slot name, aspect ratio, and size. Use them to scope
            styles to a specific placement without adding extra classes.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Attribute</th>
                  <th className="text-left py-2 font-medium text-foreground">Example value</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-site</td>
                  <td className="py-2 font-mono text-xs">abc123</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-slot</td>
                  <td className="py-2 font-mono text-xs">sidebar</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-ratio</td>
                  <td className="py-2 font-mono text-xs">4:3</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-size</td>
                  <td className="py-2 font-mono text-xs">lg</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodePreview
            language="css"
            filename="src/index.css"
            code={`/* Style only the sidebar slot */
[data-adkit-slot="sidebar"] .adkit-canvas {
  border-radius: 12px;
}

/* Different border radius for banner slots */
[data-adkit-ratio="banner"] .adkit-canvas {
  border-radius: 4px;
}

/* Compact text for small-size slots */
[data-adkit-size="sm"] .adkit-cta {
  display: none;
}`}
          />
        </section>

        {/* Modal CSS classes */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Modal CSS classes</h2>
          <p className="text-muted-foreground mb-4">
            The booking modal uses these classes. Override them to match your brand if needed.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Class</th>
                  <th className="text-left py-2 font-medium text-foreground">Element</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">.adkit-modal-overlay</td>
                  <td className="py-2">Full-screen backdrop</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">.adkit-modal-card</td>
                  <td className="py-2">Modal card (max-width: 420px, z-index: 999999)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">.adkit-modal-headline</td>
                  <td className="py-2">Modal title</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">.adkit-modal-cta</td>
                  <td className="py-2">"Book this ad" primary button</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">.adkit-modal-cancel</td>
                  <td className="py-2">Cancel / dismiss button</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">.adkit-modal-price</td>
                  <td className="py-2">Price display in the modal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </article>
  )
}
