"use client"

import { CodePreview } from "@/components/docs/code-preview"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function JsCustomStylingPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Custom Styling"
        description="Apply your own CSS to Adkit slot elements using class selectors and data attribute selectors."
        breadcrumbItems={[{ label: "JavaScript SDK", href: "/js/installation" }, { label: "Custom Styling" }]}
        slug="js/custom-styling"
      />

      <div className="space-y-12">
        {/* CSS class selectors */}
        <section>
          <h2 className="text-xl font-semibold mb-4">CSS class selectors</h2>
          <p className="text-muted-foreground mb-4">
            The SDK injects a stylesheet with these classes. Target them in your own CSS to customize element
            appearance globally.
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
                  <td className="py-2">Root wrapper element (injected by the SDK around your div)</td>
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
                  <td className="py-2">Inner content wrapper</td>
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
                  <td className="py-2">"Rent this spot" / "Rent" / "Learn more" CTA button</td>
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
            filename="styles.css"
            code={`/* Rounded corners on all slots */
.adkit-canvas {
  border-radius: 8px;
  overflow: hidden;
}

/* Custom font */
.adkit-label,
.adkit-cta {
  font-family: "Inter", sans-serif;
}

/* Bolder CTA */
.adkit-cta {
  font-weight: 600;
}`}
          />
        </section>

        {/* Data attribute selectors */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Data attribute selectors</h2>
          <p className="text-muted-foreground mb-4">
            Each slot's root element has data attributes you can use to scope styles to specific placements without
            adding extra classes.
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
            filename="styles.css"
            code={`/* Only the sidebar slot */
[data-adkit-slot="sidebar"] .adkit-canvas {
  border-radius: 12px;
}

/* All banner-format slots */
[data-adkit-ratio="banner"] .adkit-content {
  padding: 0 16px;
}

/* Hide CTA on small-size slots */
[data-adkit-size="sm"] .adkit-cta {
  display: none;
}

/* Scope styles to your site ID if you embed third-party slots */
[data-adkit-site="your-site-id"] .adkit-box {
  border-radius: 8px;
}`}
          />
        </section>

        {/* Modal CSS */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Booking modal styles</h2>
          <p className="text-muted-foreground mb-4">
            The booking modal uses these classes. Override them to match your brand.
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
                  <td className="py-2 pr-4 font-mono text-xs">.adkit-modal-overlay</td>
                  <td className="py-2">Full-screen backdrop</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">.adkit-modal-card</td>
                  <td className="py-2">Modal card (max-width: 420px, z-index: 999999)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">.adkit-modal-headline</td>
                  <td className="py-2">Modal title text</td>
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
          <CodePreview
            language="css"
            filename="styles.css"
            code={`/* Adjust modal card border radius */
.adkit-modal-card {
  border-radius: 20px;
}

/* Brand the primary CTA button */
.adkit-modal-cta {
  background: #6366f1;
  font-weight: 700;
  letter-spacing: 0.02em;
}`}
          />
        </section>
      </div>
    </article>
  )
}
