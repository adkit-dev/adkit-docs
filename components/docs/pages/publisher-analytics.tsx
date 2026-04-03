"use client"

import { DocPageHeader } from "@/components/docs/doc-page-header"

function ImagePlaceholder({ caption }: { caption: string }) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-muted/30 aspect-video flex items-center justify-center mb-4">
      <p className="text-sm text-muted-foreground text-center px-8 leading-relaxed">{caption}</p>
    </div>
  )
}

export function PublisherAnalyticsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Analytics"
        description="The Analytics page shows detailed performance data for your selected site — revenue, impressions, clicks, CTR, RPM, fill rate, device breakdown, top countries, top pages, and a live activity feed."
        breadcrumbItems={[{ label: "Publisher Guide", href: "/publisher/dashboard" }, { label: "Analytics" }]}
        slug="publisher/analytics"
      />

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Date range</h2>
          <p className="text-muted-foreground mb-4">
            Use the date range selector at the top right to filter all charts and metrics. Four presets are available:
            24h, 7d, 30d, 90d. You can also pick a custom range with the calendar picker. The chart axis adjusts
            automatically — hourly for ranges under 25 hours, daily for ranges under 8 days, weekly for longer ranges.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <p className="text-muted-foreground mb-4">
            Three filters sit alongside the date range selector:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>
              <span className="font-medium text-foreground">Slot</span> — Filter to a single slot. Defaults to all
              slots.
            </li>
            <li>
              <span className="font-medium text-foreground">Device</span> — Filter to Desktop, Mobile, or Tablet.
            </li>
            <li>
              <span className="font-medium text-foreground">Country</span> — Filter to a specific country. Only
              countries that have recorded impressions appear in the list.
            </li>
          </ul>
          <p className="text-muted-foreground mb-4">
            All filters combine. "Clear filters" appears when any non-date filter is active.
          </p>
          <ImagePlaceholder caption="Analytics page header showing date range presets, slot filter, device filter, and country filter dropdowns" />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">KPI bar</h2>
          <p className="text-muted-foreground mb-4">
            Six metrics at the top of the page, all scoped to the selected date range and filters:
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
                    Total earnings from approved bookings that started within the date range.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Impressions</td>
                  <td className="py-2">Total slot views.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Clicks</td>
                  <td className="py-2">Total ad clicks.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">CTR</td>
                  <td className="py-2">Clicks ÷ impressions as a percentage.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">RPM</td>
                  <td className="py-2">
                    Revenue per 1,000 impressions. Useful for comparing slot efficiency.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-foreground">Fill Rate</td>
                  <td className="py-2">
                    Percentage of slot views that showed an active ad. A low fill rate means your slots are getting
                    traffic but not bookings.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ImagePlaceholder caption="Analytics KPI bar showing all six metrics" />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Revenue &amp; Impressions chart</h2>
          <p className="text-muted-foreground mb-4">
            A composed chart with revenue as an area on the left axis and impressions as a dashed line on the right
            axis. Hover any point for a tooltip showing revenue, impressions, clicks, and CTR for that period.
          </p>
          <ImagePlaceholder caption="Revenue and impressions chart with tooltip visible" />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Slot Performance</h2>
          <p className="text-muted-foreground mb-4">
            A bar chart showing revenue by slot. Hover a bar for a tooltip showing revenue, impressions, and CTR for
            that slot. Useful for identifying which placements are earning the most.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Device Breakdown</h2>
          <p className="text-muted-foreground mb-4">
            A pie chart showing the percentage of impressions from Desktop, Mobile, and Tablet. If device data isn't
            available for a period, it shows 100% Desktop as a fallback.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Country Breakdown</h2>
          <p className="text-muted-foreground mb-4">
            A horizontal bar chart showing impressions by country, limited to your top 5 countries. Country codes are
            shown on the axis. Hover a bar to see the full country name and impression count.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Top Pages</h2>
          <p className="text-muted-foreground mb-4">
            A ranked list of up to 5 pages by impression count, showing the path, impression count, and CTR. Click the
            external link icon next to any path to open that page on your site.
          </p>
          <ImagePlaceholder caption="Top pages list showing paths with impression counts and CTR values" />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Live activity</h2>
          <p className="text-muted-foreground mb-4">
            A chronological feed of recent ad events — views and clicks. Each row shows the visitor's country flag,
            device type, action type, a plain-English description, and a relative timestamp. Click "See more" to load
            additional events paginated in batches of 10.
          </p>
        </section>
      </div>
    </article>
  )
}
