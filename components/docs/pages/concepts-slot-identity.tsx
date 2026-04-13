"use client"

import { Callout } from "@/components/docs/callout"
import { CodePreview } from "@/components/docs/code-preview"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function ConceptsSlotIdentityPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Slot Identity"
        description="Every ad slot in Adkit has a unique identity that determines where ads are served, how analytics are tracked, and what constitutes a booking on that placement."
        breadcrumbItems={[{ label: "Concepts", href: "/concepts/pricing" }, { label: "Slot Identity" }]}
        slug="concepts/slot-identity"
      />

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">How slot identity works</h2>
          <p className="text-muted-foreground mb-4">
            A slot is identified by the combination of its site ID and slot name:
          </p>
          <CodePreview
            language="text"
            code={`slotId = siteId:slotName`}
            showLineNumbers={false}
          />
          <p className="text-muted-foreground mt-4 mb-4">
            For example, if your site ID is{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">site_abc</code> and your slot is named{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">sidebar</code>, the full slot identity is{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">site_abc:sidebar</code>. This identity is used
            in all API calls for serving ads, logging events, and managing bookings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Slot names are not page-specific</h2>
          <p className="text-muted-foreground mb-4">
            A slot named <code className="text-sm bg-muted px-1.5 py-0.5 rounded">sidebar</code> is the same
            placement regardless of which page it appears on. If you include a{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">sidebar</code> slot on{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">/blog/post-1</code> and{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">/blog/post-2</code>, any booking for{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">sidebar</code> will serve the same ad on both
            pages simultaneously.
          </p>
          <p className="text-muted-foreground mb-4">
            This is intentional — advertisers are booking a placement on your site, not a specific URL. The placement
            is defined by the slot name, not the page path.
          </p>
          <Callout variant="note">
            If you need page-specific placements, use distinct names:{" "}
            <code>blog-sidebar</code>, <code>homepage-hero</code>, <code>about-sidebar</code>, etc.
          </Callout>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Slot identity and the SDK</h2>
          <p className="text-muted-foreground mb-4">
            Both the React SDK and the JavaScript CDN SDK use the slot name to construct the full slot identity when
            making API requests.
          </p>
          <p className="text-muted-foreground mb-4">
            In the React SDK, the{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">slot</code> prop on{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">&lt;AdSlot&gt;</code> is the slot name. The SDK
            sends both the <code className="text-sm bg-muted px-1.5 py-0.5 rounded">siteId</code> (from{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">&lt;AdkitProvider&gt;</code>) and the{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">slot</code> name to the serve API, which
            resolves the full <code className="text-sm bg-muted px-1.5 py-0.5 rounded">siteId:slotName</code>{" "}
            identity.
          </p>
          <p className="text-muted-foreground mb-4">
            In the JavaScript SDK,{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">data-adkit-slot</code> is the slot name. The
            same resolution happens server-side.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Slot status</h2>
          <p className="text-muted-foreground mb-4">
            Each slot has a status that reflects its current availability:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Status</th>
                  <th className="text-left py-2 font-medium text-foreground">Meaning</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">pending</td>
                  <td className="py-2">Slot is registered but has not yet been detected on the site.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">available</td>
                  <td className="py-2">Slot is live and can be booked.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">filled</td>
                  <td className="py-2">Slot has an active ad running.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">inactive</td>
                  <td className="py-2">Slot has not received traffic in the last 2 hours.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">paused</td>
                  <td className="py-2">Publisher has manually paused the slot.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">archived</td>
                  <td className="py-2">Slot is hidden but data is preserved.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground">
            A slot transitions to{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">inactive</code> automatically when no mount
            event is received for 2 hours. This triggers inactivity tracking for any active bookings on that slot.
          </p>
        </section>
      </div>
    </article>
  )
}
