"use client"

import Image from "next/image"
import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function AdvertiserCampaignsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Campaign Management"
        description="The Campaigns page is your central view of every ad booking you've made. From here you can see the status of each campaign, track performance, and manage individual bookings."
        breadcrumbItems={[{ label: "Advertiser Guide", href: "/advertiser/booking" }, { label: "Campaign Management" }]}
        slug="advertiser/campaigns"
      />

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">The campaigns grid</h2>
          <p className="text-muted-foreground mb-4">
            Every campaign appears as a card. Cards show your ad creative at the top (at its actual aspect ratio), and
            below that the campaign name, status badge, booking amount, site name with a link, destination URL with a
            link, impression count, click count, and CTR. For active campaigns, a small sparkline chart at the bottom
            shows impression trend over recent days.
          </p>
          <p className="text-muted-foreground mb-4">
            If you have no campaigns yet, example cards are shown to illustrate what the page will look like.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Campaign statuses</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Status</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Color</th>
                  <th className="text-left py-2 font-medium text-foreground">Meaning</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Running</td>
                  <td className="py-2 pr-4">Green</td>
                  <td className="py-2">The ad is currently live and serving.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Scheduled</td>
                  <td className="py-2 pr-4">Blue</td>
                  <td className="py-2">Approved, not yet live.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Pending approval</td>
                  <td className="py-2 pr-4">Amber</td>
                  <td className="py-2">Awaiting publisher review.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Slot offline</td>
                  <td className="py-2 pr-4">Amber</td>
                  <td className="py-2">Running, but the publisher's site is not responding.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Completed</td>
                  <td className="py-2 pr-4">Gray</td>
                  <td className="py-2">Campaign has ended.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-foreground">Cancelled</td>
                  <td className="py-2 pr-4">Red</td>
                  <td className="py-2">Campaign was cancelled.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Campaign detail page</h2>
          <p className="text-muted-foreground mb-4">
            Click any campaign card to open the detail page for that booking.
          </p>

          <h3 className="text-base font-semibold mb-2">Status banner</h3>
          <p className="text-muted-foreground mb-4">
            A banner at the top of the page shows the current campaign state:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li>
              <span className="font-medium text-foreground">Pending approval:</span> amber banner with a note that the
              average wait is 6 hours, and a Contact Support button.
            </li>
            <li>
              <span className="font-medium text-foreground">Scheduled:</span> blue banner confirming the approval date
              and start date.
            </li>
            <li>
              <span className="font-medium text-foreground">Running (no downtime):</span> green banner with a link to
              view the ad on the site.
            </li>
            <li>
              <span className="font-medium text-foreground">Running (with past downtime):</span> lime banner noting
              that a prorated refund will be applied, with the estimated refund amount.
            </li>
            <li>
              <span className="font-medium text-foreground">Running (currently offline):</span> amber warning banner
              noting the slot is offline and you won't be charged for this period.
            </li>
          </ul>

          <h3 className="text-base font-semibold mb-2">Lifecycle timeline</h3>
          <p className="text-muted-foreground mb-4">
            A horizontal four-step timeline shows: Booked → Approved → Scheduled → Live. The current step is
            highlighted. Completed steps are filled in black. The Live step uses a green pulsing indicator when active.
          </p>

          <h3 className="text-base font-semibold mb-2">Campaign summary card</h3>
          <p className="text-muted-foreground mb-4">
            The right column shows start and end times as relative timestamps (e.g., "Started 3d 2h ago", "Ends in
            5d") with an info tooltip showing the exact datetime. Below the dates, a cost breakdown table shows the
            per-day rate, number of days, any discount, total paid, and — if there's an inactivity refund pending —
            the estimated refund amount in amber. A "View invoice" button opens the Stripe receipt.
          </p>

          <Image
            src="https://cjo9byig3a.ufs.sh/f/gu2Lzg6JSemZ9aj6Iy7b5fTnZWCidPkKE6Ax1VI0ut3LBGND"
            alt="Campaign detail page showing status banner, timeline, summary card, and performance chart"
            width={800}
            height={450}
            className="rounded-lg border border-border object-cover mb-4"
          />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Editing your campaign</h2>
          <p className="text-muted-foreground mb-4">
            While your campaign is awaiting publisher approval, an "Edit Creative" button is available. After approval,
            the button is disabled with a tooltip explaining that editing is disabled while the campaign is running.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Rebooking a slot</h2>
          <p className="text-muted-foreground mb-4">
            A "Rebook Slot" button is always available. It opens a booking modal pre-filled with the same slot,
            carrying over your existing creative. The calendar shows current availability for that slot. Select new
            dates and confirm to submit a new booking.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Renaming a campaign</h2>
          <p className="text-muted-foreground mb-4">
            Click the pencil icon next to the campaign name to rename it. The name is used only in your dashboard — it
            doesn't appear on the ad or to the publisher.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Performance</h2>
          <p className="text-muted-foreground mb-4">
            Below the summary card, four KPI tiles show: Impressions, Clicks, CTR, and Spend.
          </p>
          <p className="text-muted-foreground mb-4">
            The performance chart shows impressions (dark line, left axis), clicks (blue line, left axis), and CTR
            (green line, right axis) over time. Three range options are available: 7d, 30d, and All. The "All" view
            shows only days with actual data. The 7d and 30d views include all days in the range, with zeros for days
            with no data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Inactivity and prorated refunds</h2>
          <p className="text-muted-foreground mb-4">
            If the publisher's site goes offline during your campaign, the system tracks the overlap between the
            inactivity period and your booking window. The campaign detail page shows total inactive hours and an
            estimated refund amount.
          </p>
          <p className="text-muted-foreground mb-4">
            After the campaign ends, any prorated refund is automatically applied — you receive a separate email with
            the refund receipt.
          </p>
          <Callout variant="note">
            The refund is proportional to how long your campaign was offline relative to the total booking duration.
            Adkit's 15% platform fee is non-refundable; only your net spend is eligible for proration.
          </Callout>
        </section>
      </div>
    </article>
  )
}
