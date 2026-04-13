"use client"

import { Callout } from "@/components/docs/callout"
import { CodePreview } from "@/components/docs/code-preview"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function ConceptsPricingPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Pricing Model"
        description="Adkit uses a flat daily rate model. Publishers set a price per day for each slot. Advertisers pay for the exact number of days they book. Adkit takes a 15% platform fee."
        breadcrumbItems={[{ label: "Concepts" }]}
        slug="concepts/pricing"
      />

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">How pricing works</h2>
          <p className="text-muted-foreground mb-4">
            Publishers set a price per day in cents when they create a slot.{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">2500</code> = $25.00/day. Advertisers select a
            date range, and the total is calculated as:
          </p>
          <CodePreview
            language="text"
            code={`total = dailyRate × numberOfDays`}
            showLineNumbers={false}
          />
          <p className="text-muted-foreground mt-4 mb-4">
            Days are calculated in the publisher's timezone. A booking from March 1 to March 7 in the publisher's
            timezone is 7 days — midnight at the start of March 1 to 11:59 PM at the end of March 7.
          </p>
          <Callout variant="note">
            Pricing is always calculated server-side from the database value. The client-displayed price is a loading
            hint only and is never used for billing.
          </Callout>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Revenue share</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Party</th>
                  <th className="text-left py-2 font-medium text-foreground">Share</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Publisher</td>
                  <td className="py-2">85%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-foreground">Adkit</td>
                  <td className="py-2">15%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground">
            The 15% platform fee covers payment processing, CDN delivery, uptime monitoring, and the booking
            infrastructure. The fee is applied to the gross booking amount before any proration refund.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Discounts</h2>
          <p className="text-muted-foreground mb-4">
            Discounts reduce the total at checkout. The final amount charged is:
          </p>
          <CodePreview
            language="text"
            code={`finalAmount = subtotal - discountAmount`}
            showLineNumbers={false}
          />
          <p className="text-muted-foreground mt-4 mb-4">
            Only one discount applies per booking. Promo codes override automatic discounts. Discounts are validated
            server-side — the discount ID is sent at checkout and re-validated against the database, checking that the
            discount is still active, hasn't expired, hasn't exceeded its use limit, and the booking meets any minimum
            day requirement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Prorated refunds</h2>
          <p className="text-muted-foreground mb-4">
            If a slot goes inactive during an active booking, the advertiser is refunded for the time the slot was
            offline. The proration is calculated as:
          </p>
          <CodePreview
            language="text"
            code={`inactiveRatio        = totalInactiveHours / totalBookingDurationHours
estimatedRefund      = min(maxRefundableAmount, maxRefundableAmount × inactiveRatio)

maxRefundableAmount  = amountPaid - adkitFee
adkitFee             = totalOriginalPrice × 0.15
totalOriginalPrice   = amountPaid + discountCents`}
            showLineNumbers={false}
          />
          <Callout variant="note" className="mt-4">
            The 15% Adkit fee is non-refundable regardless of inactivity. Only the publisher's 85% share is eligible
            for proration.
          </Callout>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Price changes</h2>
          <p className="text-muted-foreground mb-4">
            The price is set the first time a slot mounts based on the prop value. If the same slot is ever mounted
            with a different price, you receive a notification in the dashboard and an email to approve the change.
            Until approved, the price stays at its current value. This protects against accidental or unauthorized
            price changes on active slots.
          </p>
        </section>
      </div>
    </article>
  )
}
