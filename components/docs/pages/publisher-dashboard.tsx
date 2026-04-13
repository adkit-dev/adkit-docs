"use client"

import { DocPageHeader } from "@/components/docs/doc-page-header"

export function PublisherDashboardPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Dashboard"
        description="The dashboard is your home base. It shows the last 30 days of performance across all slots on your selected site, surfaces items that need attention, and gives you a live feed of recent ad events."
        breadcrumbItems={[{ label: "Publisher Guide", href: "/publisher/overview" }, { label: "Dashboard" }]}
        slug="publisher/dashboard"
      />

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Selecting a site</h2>
          <p className="text-muted-foreground">
            You can have multiple sites under one account. Use the site selector in the top-left sidebar to switch
            between them. Everything on the dashboard — metrics, activity, suggested items — reflects the currently
            selected site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">KPI bar</h2>
          <p className="text-muted-foreground mb-4">
            Five metrics displayed in a single card at the top of the dashboard, all scoped to the last 30 days:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Metric</th>
                  <th className="text-left py-2 font-medium text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Revenue</td>
                  <td className="py-2">
                    Total earnings from approved and active bookings. Formatted as{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">$1.2K</code> if over $1,000.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Impressions</td>
                  <td className="py-2">Number of times your ad slots were viewed by visitors.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Clicks</td>
                  <td className="py-2">Number of times visitors clicked on an active ad.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">CTR</td>
                  <td className="py-2">
                    Click-through rate. Calculated as clicks ÷ impressions, shown as a percentage.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-foreground">Fill Rate</td>
                  <td className="py-2">
                    Percentage of slot views that showed an active ad. Calculated as views with an active booking ÷
                    total views.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground">
            Each metric has a tooltip explaining it. Hover the info icon to see it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Revenue, Clicks &amp; Impressions chart</h2>
          <p className="text-muted-foreground">
            A composed chart showing the last 30 days of data. Revenue is shown as an area chart on the left axis.
            Impressions are shown as a dashed line on the right axis. Clicks are shown as a solid line on the right
            axis. The chart legend explains which line is which.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Suggested</h2>
          <p className="text-muted-foreground">
            A row of up to 5 cards showing recently updated bookings, slots, and discounts. The dashboard prioritizes
            items that need action — pending bookings appear first, then paused or pending slots, then discounts
            expiring within 30 days. After that, recently updated items fill any remaining spots. Click any card to
            navigate directly to that item.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Live activity</h2>
          <p className="text-muted-foreground">
            The 5 most recent ad events across your slots — impressions and clicks. Each row shows a flag for the
            visitor's country, a device icon (desktop/mobile/tablet), an action icon (eye for view, cursor for click),
            a plain-English description, and a relative timestamp.
          </p>
        </section>
      </div>
    </article>
  )
}
