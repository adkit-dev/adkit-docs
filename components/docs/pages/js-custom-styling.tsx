"use client"

import { Callout } from "@/components/docs/callout"
import { CodePreview } from "@/components/docs/code-preview"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function JsCustomStylingPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Custom Styling"
        description="Use documented data attributes on the slot element for supported layout and appearance customization."
        breadcrumbItems={[{ label: "JavaScript SDK", href: "/js/installation" }, { label: "Custom Styling" }]}
        slug="js/custom-styling"
      />

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Style the element you render</h2>
          <p className="text-muted-foreground mb-4">
            In the JavaScript SDK, the slot element starts as your own DOM node. The supported way to control layout is
            to style that element or its wrapper directly, then let Adkit enhance it.
          </p>
          <CodePreview
            language="html"
            filename="index.html"
            code={`<aside style="max-width: 320px; margin: 2rem auto 0;">
  <div
    style="width: 100%;"
    data-adkit-site="your-site-id"
    data-adkit-slot="sidebar"
    data-adkit-aspect-ratio="4:3"
    data-adkit-price="2500"
  ></div>
</aside>`}
          />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Supported styling attributes</h2>
          <p className="text-muted-foreground mb-4">
            For appearance, rely on documented <code className="text-sm bg-muted px-1.5 py-0.5 rounded">data-adkit-*</code>{" "}
            attributes on the slot element itself.
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
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-aspect-ratio</td>
                  <td className="py-2">Slot shape such as <code className="text-xs bg-muted px-1 py-0.5 rounded">4:3</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">16:9</code>, or <code className="text-xs bg-muted px-1 py-0.5 rounded">banner</code></td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-theme</td>
                  <td className="py-2">Built-in color theme: <code className="text-xs bg-muted px-1 py-0.5 rounded">light</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">dark</code>, or <code className="text-xs bg-muted px-1 py-0.5 rounded">auto</code></td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-bg-color</td>
                  <td className="py-2">Placeholder background color</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-border-color</td>
                  <td className="py-2">Placeholder border color</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-text-color-primary</td>
                  <td className="py-2">Primary text color for the price</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">data-adkit-text-color-secondary</td>
                  <td className="py-2">Secondary text color for the label and CTA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodePreview
            language="html"
            filename="index.html"
            code={`<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
  data-adkit-price="2500"
  data-adkit-theme="dark"
  data-adkit-bg-color="#1e1b4b"
  data-adkit-border-color="#6366f1"
  data-adkit-text-color-primary="#e0e7ff"
  data-adkit-text-color-secondary="#a5b4fc"
></div>`}
          />
        </section>

        <Callout variant="warning">
          Treat internal selectors like <code>.adkit-box</code>, <code>.adkit-cta</code>, and modal class names as
          implementation details. They are not part of the supported styling API and may change between SDK versions.
        </Callout>
      </div>
    </article>
  )
}
