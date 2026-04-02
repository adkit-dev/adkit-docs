"use client"

import { DocPageHeader } from "@/components/docs/doc-page-header"

export function HowItWorksPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="How It Works"
        description="Adkit replaces programmatic advertising with a direct marketplace. Publishers set fixed prices, advertisers book slots, and you approve every ad before it goes live."
        breadcrumbItems={[{ label: "Getting Started" }, { label: "How It Works" }]}
        slug="how-it-works"
      />

      <div className="space-y-12">
        {/* The model */}
        <section>
          <h2 className="text-xl font-semibold mb-4">The Adkit model</h2>
          <p className="text-muted-foreground mb-4">
            Traditional ad networks use real-time auctions where your page loads arbitrary third-party content for fractions of a cent per impression. Adkit works differently: you define placement slots on your site, set a fixed daily price, and advertisers book directly through your own pages. No auctions, no tracking pixels, no mystery about what runs on your site.
          </p>
          <p className="text-muted-foreground">
            Every booking goes through your approval queue. You review the creative and destination URL before anything goes live. If something doesn't meet your standards, reject it — the advertiser is refunded automatically.
          </p>
        </section>

        {/* Flow */}
        <section>
          <h2 className="text-xl font-semibold mb-6">The booking flow</h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "You create a slot",
                description:
                  "Add an ad placement to your site using the React SDK or the JavaScript snippet. Give it a name, an aspect ratio, and a daily price. The SDK renders a dashed-border placeholder where the ad will appear.",
              },
              {
                step: "2",
                title: "A visitor clicks the placeholder",
                description:
                  "Anyone browsing your site can click an empty slot. A booking modal opens inline — no redirect, no third-party page. They see your price, slot dimensions, and what's included.",
              },
              {
                step: "3",
                title: "The advertiser completes booking",
                description:
                  "They select dates, upload their creative (image), and pay by credit card via Stripe. The price they pay is validated server-side — it cannot be manipulated from the client.",
              },
              {
                step: "4",
                title: "You review and approve",
                description:
                  "A notification arrives in your Adkit dashboard. You review the creative, destination URL, and advertiser details. Approve it to schedule the ad, or reject it for a full refund.",
              },
              {
                step: "5",
                title: "The ad runs on the booked dates",
                description:
                  "On the start date, the placeholder is replaced with the advertiser's image and link. Impressions and clicks are tracked automatically. The ad stops running automatically when the booking expires.",
              },
              {
                step: "6",
                title: "You get paid",
                description:
                  "Adkit processes payouts weekly via Stripe. You keep 85% of each booking. If your site experiences downtime during a campaign, advertisers receive a prorated refund automatically.",
              },
            ].map(({ step, title, description }) => (
              <div key={step} className="flex gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0 mt-0.5">
                  {step}
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">{title}</p>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key concepts */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Key concepts</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-medium mb-2">Fixed-price slots</h3>
              <p className="text-sm text-muted-foreground">
                You set a daily price per slot. There are no auctions, no CPM floors, and no surprise fluctuations. Advertisers know exactly what they'll pay before they book.
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-medium mb-2">Self-serve booking</h3>
              <p className="text-sm text-muted-foreground">
                Your audience books directly on your site. Demand comes from people already reading your content, not from a third-party ad exchange matching unrelated advertisers.
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-medium mb-2">Publisher approval</h3>
              <p className="text-sm text-muted-foreground">
                Every submission enters your approval queue. Nothing runs without your explicit sign-off. You can reject any booking and the advertiser is refunded without dispute.
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-medium mb-2">Server-authoritative pricing</h3>
              <p className="text-sm text-muted-foreground">
                Prices are set in your dashboard and validated server-side at checkout. Client-side code never controls what the advertiser is charged — manipulation is not possible.
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-medium mb-2">Automatic payouts</h3>
              <p className="text-sm text-muted-foreground">
                Earnings are deposited weekly via Stripe Connect. No manual invoicing, no minimum threshold, no chasing payments. Refunds for downtime are calculated and issued automatically.
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-medium mb-2">No cookies or fingerprinting</h3>
              <p className="text-sm text-muted-foreground">
                Adkit uses anonymous impression IDs. No user tracking, no cross-site data collection, no GDPR cookie banners required for the ad units themselves.
              </p>
            </div>
          </div>
        </section>

        {/* Revenue share */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Revenue share</h2>
          <p className="text-muted-foreground mb-4">
            Publishers keep 85% of every booking. Adkit retains 15% to cover payment processing, CDN delivery, uptime monitoring, and platform maintenance.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Party</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Share</th>
                  <th className="text-left py-2 font-medium text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Publisher</td>
                  <td className="py-2 pr-4 text-green-600 dark:text-green-400 font-medium">85%</td>
                  <td className="py-2">Paid weekly via Stripe Connect</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Adkit</td>
                  <td className="py-2 pr-4">15%</td>
                  <td className="py-2">Platform fee (processing, CDN, ops)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-muted-foreground italic" colSpan={3}>
                    Compare: Google AdSense publishers typically keep ~68%.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Event tracking */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Automatic event tracking</h2>
          <p className="text-muted-foreground mb-4">
            The SDK tracks ad lifecycle events automatically. You don't need to wire up any analytics calls.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Event</th>
                  <th className="text-left py-2 font-medium text-foreground">When it fires</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">slot_mount</td>
                  <td className="py-2">Once per slot per page load, when the component initializes</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">slot_view</td>
                  <td className="py-2">When at least 50% of the slot enters the viewport (once per mount)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">slot_click</td>
                  <td className="py-2">When a visitor clicks a live ad (not a placeholder click)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Events are sent via <code className="text-xs bg-muted px-1 py-0.5 rounded">navigator.sendBeacon()</code> with a <code className="text-xs bg-muted px-1 py-0.5 rounded">fetch keepalive</code> fallback. They never block rendering and never throw errors.
          </p>
        </section>

        {/* Browser support */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Browser requirements</h2>
          <p className="text-muted-foreground mb-4">
            Both SDKs require modern browser APIs. The following table shows the minimum versions for full support.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Browser</th>
                  <th className="text-left py-2 font-medium text-foreground">Minimum version</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Chrome / Edge</td>
                  <td className="py-2">88+</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Firefox</td>
                  <td className="py-2">89+</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Safari</td>
                  <td className="py-2">15+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Required APIs: <code className="text-xs bg-muted px-1 py-0.5 rounded">IntersectionObserver</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">fetch</code>, CSS <code className="text-xs bg-muted px-1 py-0.5 rounded">aspect-ratio</code>. The JavaScript SDK also requires <code className="text-xs bg-muted px-1 py-0.5 rounded">MutationObserver</code>; the React SDK requires <code className="text-xs bg-muted px-1 py-0.5 rounded">ResizeObserver</code>.
          </p>
        </section>
      </div>
    </article>
  )
}
