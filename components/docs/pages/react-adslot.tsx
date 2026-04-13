"use client"

import { CodePreview } from "@/components/docs/code-preview"
import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function ReactAdSlotPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="<AdSlot />"
        description="Renders an ad placement in your React component tree. Displays a live ad creative when booked, or a booking placeholder when empty."
        breadcrumbItems={[{ label: "React SDK", href: "/react/installation" }, { label: "<AdSlot />" }]}
        slug="react/adslot"
      />

      <div className="space-y-12">
        {/* Overview */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-4">
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">AdSlot</code> fetches the current booking state
            from the Adkit API and renders one of three states:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 shrink-0" />
              <div>
                <span className="font-medium text-sm">Loading</span>
                <span className="text-sm text-muted-foreground"> — skeleton placeholder shown while the API request is in flight</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 shrink-0" />
              <div>
                <span className="font-medium text-sm">Active</span>
                <span className="text-sm text-muted-foreground"> — the booked ad image, wrapped in a link to the advertiser's destination URL</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 shrink-0" />
              <div>
                <span className="font-medium text-sm">Empty</span>
                <span className="text-sm text-muted-foreground"> — a dashed-border placeholder showing "Your ad here", the price, and a "Rent this spot" CTA that opens the booking modal</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            If a slot is misconfigured, it logs a{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded">console.error</code> and renders nothing — it will
            not crash your component tree.
          </p>
        </section>

        {/* Props */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Props</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Prop</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Type</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Required</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Default</th>
                  <th className="text-left py-2 font-medium text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">slot</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2 pr-4">—</td>
                  <td className="py-2">Unique placement name. Alphanumeric, hyphens, and underscores only.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">aspectRatio</td>
                  <td className="py-2 pr-4 font-mono text-xs">AspectRatio</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2 pr-4">—</td>
                  <td className="py-2">
                    One of <code className="text-xs bg-muted px-1 py-0.5 rounded">"16:9"</code>,{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">"4:3"</code>,{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">"1:1"</code>,{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">"9:16"</code>,{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">"banner"</code>
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">siteId</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">from provider</td>
                  <td className="py-2">Override the site ID from <code className="text-xs bg-muted px-1 py-0.5 rounded">AdkitProvider</code>. Required if used without a provider.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">price</td>
                  <td className="py-2 pr-4 font-mono text-xs">number</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2 pr-4">—</td>
                  <td className="py-2">Daily price in cents (e.g. <code className="text-xs bg-muted px-1 py-0.5 rounded">2500</code> = $25/day). Set on first mount. If the slot is later mounted with a different price, you receive a dashboard notification and email to approve the change.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">size</td>
                  <td className="py-2 pr-4 font-mono text-xs">"sm" | "md" | "lg"</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">"lg"</td>
                  <td className="py-2">Text size preset for the placeholder label and CTA</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">theme</td>
                  <td className="py-2 pr-4 font-mono text-xs">"light" | "dark" | "auto"</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">"auto"</td>
                  <td className="py-2">Color theme. <code className="text-xs bg-muted px-1 py-0.5 rounded">"auto"</code> follows the system preference.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">className</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">—</td>
                  <td className="py-2">Additional CSS classes on the outer container. If omitted, the slot defaults to <code className="text-xs bg-muted px-1 py-0.5 rounded">width: 100%</code>.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">styles</td>
                  <td className="py-2 pr-4 font-mono text-xs">AdSlotStyles</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">—</td>
                  <td className="py-2">Fine-grained color overrides for the placeholder. See <a href="#styles" className="text-primary hover:underline">AdSlotStyles</a> below.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">silent</td>
                  <td className="py-2 pr-4 font-mono text-xs">boolean</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2 pr-4">false</td>
                  <td className="py-2">Disable all event tracking for this slot</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Aspect ratios */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Aspect ratios</h2>
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
                  <td className="py-2">Video-format in-content placements</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">"4:3"</td>
                  <td className="py-2 pr-4">4 / 3</td>
                  <td className="py-2">Sidebar boxes, square-ish placements</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">"1:1"</td>
                  <td className="py-2 pr-4">1 / 1</td>
                  <td className="py-2">Square placements, social-style ads</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">"9:16"</td>
                  <td className="py-2 pr-4">9 / 16</td>
                  <td className="py-2">Vertical / story-format placements</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">"banner"</td>
                  <td className="py-2 pr-4">728 / 90</td>
                  <td className="py-2">Horizontal leaderboard banners (header / footer)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            The SDK warns in the console if your container's rendered aspect ratio deviates more than 5% from the
            declared ratio.
          </p>
        </section>

        {/* AdSlotStyles */}
        <section id="styles">
          <h2 className="text-xl font-semibold mb-4">AdSlotStyles</h2>
          <p className="text-muted-foreground mb-4">
            Pass a <code className="text-sm bg-muted px-1.5 py-0.5 rounded">styles</code> object to override
            individual color tokens on the placeholder. All fields are optional.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Field</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Type</th>
                  <th className="text-left py-2 font-medium text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">borderColor</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2">Color of the dashed placeholder outline</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">backgroundColor</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2">Placeholder background (default: transparent)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">textColorPrimary</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2">Price text color</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">textColorSecondary</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2">Label and CTA text color</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Size presets */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Size presets</h2>
          <p className="text-muted-foreground mb-4">
            The <code className="text-sm bg-muted px-1.5 py-0.5 rounded">size</code> prop controls the text size and
            spacing inside the placeholder.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Value</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Label</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Price</th>
                  <th className="text-left py-2 font-medium text-foreground">CTA</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">"sm"</td>
                  <td className="py-2 pr-4">7px</td>
                  <td className="py-2 pr-4">10px</td>
                  <td className="py-2">6px</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">"md"</td>
                  <td className="py-2 pr-4">9px</td>
                  <td className="py-2 pr-4">14px</td>
                  <td className="py-2">8px</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">"lg"</td>
                  <td className="py-2 pr-4">11px</td>
                  <td className="py-2 pr-4">18px</td>
                  <td className="py-2">10px</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Basic example */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Basic example</h2>
          <CodePreview
            language="tsx"
            filename="src/components/Sidebar.tsx"
            code={`import { AdSlot } from "adkit-react"

export function Sidebar() {
  return (
    <aside className="w-64 shrink-0">
      <nav>{/* ... */}</nav>

      <AdSlot
        slot="sidebar"
        aspectRatio="4:3"
        price={2500}
        className="mt-8 w-full"
      />
    </aside>
  )
}`}
          />
          <Callout variant="warning" title="Price is in cents" className="mt-4">
            <code>{"price={2500}"}</code> displays as $25/day. The server validates and enforces the actual price —
            it cannot be changed client-side.
          </Callout>
        </section>

        {/* All options */}
        <section>
          <h2 className="text-xl font-semibold mb-4">All options</h2>
          <CodePreview
            language="tsx"
            filename="src/components/Banner.tsx"
            code={`import { AdSlot } from "adkit-react"

export function Banner() {
  return (
    <AdSlot
      slot="header-banner"
      aspectRatio="banner"
      price={3500}
      size="md"
      theme="dark"
      className="w-full"
      styles={{
        borderColor: "#6366f1",
        backgroundColor: "#1e1b4b",
        textColorPrimary: "#e0e7ff",
        textColorSecondary: "#a5b4fc",
      }}
      silent={false}
    />
  )
}`}
          />
        </section>

        {/* Without provider */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Without a provider</h2>
          <p className="text-muted-foreground mb-4">
            Pass <code className="text-sm bg-muted px-1.5 py-0.5 rounded">siteId</code> directly to use a slot
            without wrapping your app in <code className="text-sm bg-muted px-1.5 py-0.5 rounded">AdkitProvider</code>.
            This is useful for single isolated placements, but{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">useAdkit()</code> and its{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">refresh()</code> method will not be available.
          </p>
          <CodePreview
            language="tsx"
            filename="src/components/InlinePlacement.tsx"
            code={`import { AdSlot } from "adkit-react"

export function InlinePlacement() {
  return (
    <AdSlot
      siteId="your-site-id"
      slot="in-content-1"
      aspectRatio="16:9"
      price={1500}
      className="my-6 w-full"
    />
  )
}`}
          />
        </section>

        {/* Slot naming */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Slot naming rules</h2>
          <p className="text-muted-foreground mb-2">
            The <code className="text-sm bg-muted px-1.5 py-0.5 rounded">slot</code> name must match{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">/^[a-zA-Z0-9_-]+$/</code>. Slots with invalid
            names are rejected and render nothing.
          </p>
          <p className="text-muted-foreground mb-4">
            A slot identity is scoped to your site:{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">siteId:slot</code>. If the same identity is
            mounted twice on the same page, the second instance logs a warning and fires a{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">slot_duplicate</code> event.
          </p>
          <p className="text-sm text-muted-foreground mb-2">Recommended naming patterns:</p>
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
