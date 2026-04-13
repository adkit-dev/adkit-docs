"use client"

import Image from "next/image"
import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function PublisherPayoutsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Payouts"
        description="You keep 85% of every booking. Adkit takes a 15% platform fee. Payouts are processed through Stripe Connect — you connect your Stripe account once and earnings are transferred automatically."
        breadcrumbItems={[{ label: "Publisher Guide", href: "/publisher/dashboard" }, { label: "Payouts" }]}
        slug="publisher/payouts"
      />

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Revenue share</h2>
          <div className="overflow-x-auto mb-4">
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
                  <td className="py-2 pr-4">85%</td>
                  <td className="py-2">Paid via Stripe Connect</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-foreground">Adkit</td>
                  <td className="py-2 pr-4">15%</td>
                  <td className="py-2">Platform fee covering payment processing, CDN, uptime monitoring</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Connecting Stripe</h2>
          <p className="text-muted-foreground mb-4">
            Go to Payouts and click "Connect with Stripe". You'll be redirected to Stripe's onboarding flow — takes
            about 2 minutes. Once complete, you're redirected back to the dashboard and your account is connected.
          </p>
          <p className="text-muted-foreground mb-4">
            If you have unclaimed earnings before connecting, a banner at the top of the page shows the amount and a
            "Claim now" button. Connecting Stripe triggers automatic processing of any pending payouts.
          </p>
          <Image
            src="https://cjo9byig3a.ufs.sh/f/gu2Lzg6JSemZR0wQJdp5GcAtE6dlZBFJwNUehO0Su9yx7pkr"
            alt="Payouts page disconnected state showing Connect with Stripe button and unclaimed earnings banner"
            width={800}
            height={450}
            className="rounded-lg border border-border object-cover mb-4"
          />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">KPI bar</h2>
          <p className="text-muted-foreground mb-4">Four metrics once connected:</p>
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
                  <td className="py-2 pr-4 font-medium text-foreground">Available</td>
                  <td className="py-2">
                    Your current Stripe Connect balance. Money that has been transferred to your Stripe account and is
                    waiting to be paid out to your bank based on your payout schedule.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Pending</td>
                  <td className="py-2">
                    Revenue from active bookings that haven't ended yet. This becomes available after the booking's end
                    date passes.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Lifetime</td>
                  <td className="py-2">Total earnings across all time, including pending.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-foreground">Paid Out</td>
                  <td className="py-2">Total transferred from your Stripe balance to your bank account.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground">
            The Available metric shows an estimated next payout date based on your Stripe payout schedule.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">How earnings flow</h2>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>An advertiser books and pays.</li>
            <li>The booking runs on your site.</li>
            <li>When the booking ends, your 85% share is transferred to your Stripe Connect account.</li>
            <li>
              Stripe pays out to your bank on your configured schedule (daily, weekly, or monthly automatic, or manual).
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Transaction history</h2>
          <p className="text-muted-foreground mb-4">
            A paginated table showing all approved and active bookings with their financial details:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Column</th>
                  <th className="text-left py-2 font-medium text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Date</td>
                  <td className="py-2">The booking end date.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Slot</td>
                  <td className="py-2">Which slot the booking was for.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Booking</td>
                  <td className="py-2">Advertiser name, links to the approval page.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Gross</td>
                  <td className="py-2">Total amount the advertiser paid.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Fee (15%)</td>
                  <td className="py-2">Adkit's platform fee.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Net</td>
                  <td className="py-2">Your earnings (85% of gross).</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-foreground">Status</td>
                  <td className="py-2">Completed, Filled (currently running), or Pending.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Payout history</h2>
          <p className="text-muted-foreground mb-4">
            A paginated table showing transfers from your Stripe Connect balance to your bank account. Shows date,
            amount, status (Pending, In transit, Paid, Failed), and expected bank arrival date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Payout schedule</h2>
          <p className="text-muted-foreground mb-4">
            Your payout schedule is managed in Stripe. Once connected, your current schedule is displayed on the
            payouts page (e.g. "Automatic (Weekly: Monday)"). To change your schedule, click "Manage in Stripe" to
            open your Stripe Express dashboard.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Automatic prorating</h2>
          <p className="text-muted-foreground mb-4">
            If your slot goes inactive during an active booking (stops appearing on your site), the advertiser is
            prorated for the time the ad wasn't displaying. Your earnings are reduced proportionally, minus Adkit's 15%
            fee which is non-refundable. The proration is calculated based on the overlap between any inactivity
            periods and the booking window.
          </p>
          <Callout variant="note">
            The 15% platform fee is non-refundable even when prorating occurs. Only your 85% share is adjusted.
          </Callout>
        </section>
      </div>
    </article>
  )
}
