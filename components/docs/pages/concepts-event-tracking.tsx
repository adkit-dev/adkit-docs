"use client"

import { Callout } from "@/components/docs/callout"
import { CodePreview } from "@/components/docs/code-preview"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function ConceptsEventTrackingPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Event Tracking"
        description="Adkit tracks four events for every ad slot. These events power the analytics dashboard, fill rate calculations, and inactivity detection."
        breadcrumbItems={[{ label: "Concepts", href: "/concepts/pricing" }, { label: "Event Tracking" }]}
        slug="concepts/event-tracking"
      />

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">The four events</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Event</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">When it fires</th>
                  <th className="text-left py-2 font-medium text-foreground">Tracked by</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">slot_mount</td>
                  <td className="py-2 pr-4">Every time the slot component mounts</td>
                  <td className="py-2">React SDK and JS SDK</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">slot_view</td>
                  <td className="py-2 pr-4">When 50% of the slot is visible in the viewport</td>
                  <td className="py-2">IntersectionObserver</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">slot_click</td>
                  <td className="py-2 pr-4">When a visitor clicks the ad</td>
                  <td className="py-2">Click handler</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">slot_duplicate</td>
                  <td className="py-2 pr-4">When the same slot appears more than once on a page</td>
                  <td className="py-2">Deduplication logic</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">slot_mount</h2>
          <p className="text-muted-foreground mb-4">
            Fires on every page load where the slot is rendered. This event is used to detect that the slot is still
            active on the publisher's site. If no{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">slot_mount</code> is received for 2 hours, the
            slot is marked inactive.
          </p>
          <p className="text-muted-foreground mb-4">
            The <code className="text-sm bg-muted px-1.5 py-0.5 rounded">slot_mount</code> event also carries the
            current price from the publisher's implementation. This price is stored as a loading hint — after the API
            responds with the server-authoritative price, the loading hint is discarded and never used for billing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">slot_view</h2>
          <p className="text-muted-foreground mb-4">
            Fires once when the slot enters the viewport with at least 50% visibility, using the browser's{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">IntersectionObserver</code> API. This is counted
            as an impression in analytics. The event fires once per page load — if the slot scrolls out of view and
            back in, it does not fire again.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">slot_click</h2>
          <p className="text-muted-foreground mb-4">
            Fires when a visitor clicks the ad creative. The click opens the destination URL in the same tab. The
            event is sent to the Events API before the navigation occurs.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">slot_duplicate</h2>
          <p className="text-muted-foreground mb-4">
            Fires when the SDK detects that the same slot name is mounted more than once on a single page. This is a
            developer warning — it doesn't affect analytics or billing, but it indicates a configuration error. Only
            one instance of each slot should be present on a page.
          </p>
          <Callout variant="warning">
            If you see a <code>slot_duplicate</code> event in your analytics, check that you haven't included the same
            slot name more than once on a single page render.
          </Callout>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">How events are sent</h2>
          <p className="text-muted-foreground mb-4">
            The React SDK uses{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">navigator.sendBeacon</code> to send events,
            falling back to{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">fetch</code> with{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">keepalive: true</code> if{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">sendBeacon</code> is not available.
          </p>
          <p className="text-muted-foreground mb-4">
            The JavaScript CDN SDK uses{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">fetch</code> with{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">keepalive: true</code>.
          </p>
          <p className="text-muted-foreground mb-4">Both SDKs send events to:</p>
          <CodePreview
            language="text"
            code={`https://adkit.dev/api/events`}
            showLineNumbers={false}
          />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Event payload</h2>
          <p className="text-muted-foreground mb-4">
            Each event includes the slot identity (
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">siteId:slotName</code>), the event type, and
            metadata such as the visitor's page URL, referrer, screen dimensions, and device type. Device type is
            inferred from the user agent string.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Analytics aggregation</h2>
          <p className="text-muted-foreground mb-4">
            Events are aggregated into daily stats by a background job. The analytics dashboard reads from these
            aggregated stats for historical data, and supplements with live events from the current day for real-time
            accuracy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Metrics derived from events</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Metric</th>
                  <th className="text-left py-2 font-medium text-foreground">Derivation</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Impressions</td>
                  <td className="py-2">
                    Count of <code className="text-xs bg-muted px-1 py-0.5 rounded">slot_view</code> events
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Clicks</td>
                  <td className="py-2">
                    Count of <code className="text-xs bg-muted px-1 py-0.5 rounded">slot_click</code> events
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">CTR</td>
                  <td className="py-2">clicks ÷ impressions</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Fill rate</td>
                  <td className="py-2">
                    Views with an active booking ÷ total{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">slot_view</code> events
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-foreground">RPM</td>
                  <td className="py-2">(revenue ÷ impressions) × 1,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </article>
  )
}
