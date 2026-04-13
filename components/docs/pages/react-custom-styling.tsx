"use client"

import { CodePreview } from "@/components/docs/code-preview"
import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function ReactCustomStylingPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Custom Styling"
        description="Use documented props on AdSlot for supported layout and appearance customization."
        breadcrumbItems={[{ label: "React SDK", href: "/react/installation" }, { label: "Custom Styling" }]}
        slug="react/custom-styling"
      />

      <div className="space-y-12">
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

        <section>
          <h2 className="text-xl font-semibold mb-4">Appearance props</h2>
          <p className="text-muted-foreground mb-4">
            Use documented props for visual changes instead of targeting internal DOM structure.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Prop</th>
                  <th className="text-left py-2 font-medium text-foreground">What it controls</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">theme</td>
                  <td className="py-2">Built-in palette: <code className="text-xs bg-muted px-1 py-0.5 rounded">"light"</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">"dark"</code>, or <code className="text-xs bg-muted px-1 py-0.5 rounded">"auto"</code></td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">styles.borderColor</td>
                  <td className="py-2">Placeholder border color</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">styles.backgroundColor</td>
                  <td className="py-2">Placeholder background color</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">styles.textColorPrimary</td>
                  <td className="py-2">Primary text color for the price</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">styles.textColorSecondary</td>
                  <td className="py-2">Secondary text color for the label and CTA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodePreview
            language="tsx"
            filename="src/components/Sidebar.tsx"
            code={`import { AdSlot } from "adkit-react"

<AdSlot
  slot="sidebar"
  aspectRatio="4:3"
  price={2500}
  theme="dark"
  styles={{
    borderColor: "#6366f1",
    backgroundColor: "#1e1b4b",
    textColorPrimary: "#e0e7ff",
    textColorSecondary: "#a5b4fc",
  }}
/>`}
          />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Public data attributes on the rendered slot</h2>
          <p className="text-muted-foreground mb-4">
            The root element exposes stable data attributes. These are the only DOM markers you should rely on if you
            need to identify a rendered slot.
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
        </section>

        <Callout variant="warning">
          Do not rely on internal selectors like <code>.adkit-box</code>, <code>.adkit-cta</code>, or modal class
          names. They are implementation details, not supported customization APIs.
        </Callout>
      </div>
    </article>
  )
}
