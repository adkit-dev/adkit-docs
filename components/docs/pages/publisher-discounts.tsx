"use client"

import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function PublisherDiscountsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Discounts"
        description="Discounts let you offer automatic price reductions to attract advertisers and reward loyalty. They apply at checkout — advertisers see the discounted price before paying. Discounts never change your base slot price."
        breadcrumbItems={[{ label: "Publisher Guide", href: "/publisher/dashboard" }, { label: "Discounts" }]}
        slug="publisher/discounts"
      />

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">How discounts work</h2>
          <p className="text-muted-foreground mb-4">Three rules apply to every discount:</p>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
            <li>
              Only one discount applies per booking — they don't stack.
            </li>
            <li>
              Promo codes override automatic discounts. If an advertiser enters a code, that discount is used
              regardless of any automatic discounts they qualify for.
            </li>
            <li>
              Discounts never change your base price. Your slot's listed daily rate stays the same — the discount is
              applied at checkout only.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Discount types</h2>
          <p className="text-muted-foreground mb-4">Four types are available:</p>

          <div className="space-y-6 mb-6">
            <div>
              <h3 className="text-base font-semibold mb-2">Multi-day discount</h3>
              <p className="text-muted-foreground">
                Automatically applied when an advertiser books for a minimum number of days. Example: 10% off bookings
                of 3 or more days. Set the minimum day threshold and the discount amount (percentage or fixed dollar
                amount).
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-2">Promo code</h3>
              <p className="text-muted-foreground">
                A shareable code advertisers enter at checkout. You set the code (or generate one), the discount
                amount, and optionally a minimum booking duration, maximum number of uses, and an expiry date. Once the
                max uses limit is reached, the code stops working automatically.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-2">First-time advertiser</h3>
              <p className="text-muted-foreground">
                Applied automatically when an advertiser has no previous bookings on your site. Example: $20 off a
                first booking. Optionally require a minimum number of days.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-2">Repeat advertiser</h3>
              <p className="text-muted-foreground">
                Applied automatically when an advertiser has at least a set number of past bookings on your site.
                Example: 15% off after 2 or more bookings. Rewards loyalty.
              </p>
            </div>
          </div>

        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Creating a discount</h2>
          <p className="text-muted-foreground mb-4">
            Click "Create discount". A three-step drawer opens:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
            <li>
              <span className="font-medium text-foreground">Choose type</span> — Select one of the four discount types.
            </li>
            <li>
              <span className="font-medium text-foreground">Configure</span> — Set the slot(s) the discount applies to
              (all slots or specific ones), the discount value (percentage or fixed dollar amount), and any
              type-specific options like minimum days, promo code, max uses, or expiry.
            </li>
            <li>
              <span className="font-medium text-foreground">Review</span> — Confirm all settings and a plain-English
              preview of what advertisers will see.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Discount value types</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>
              <span className="font-medium text-foreground">Percentage</span> — e.g. 10% off. Applied to the booking
              total.
            </li>
            <li>
              <span className="font-medium text-foreground">Fixed</span> — e.g. $20 off. Subtracted from the booking
              total.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Slot assignment</h2>
          <p className="text-muted-foreground mb-4">
            Each discount can apply to all slots on your site or to specific slots you choose. "All slots" is a toggle
            — enabling it overrides any specific slot selection.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Managing discounts</h2>
          <p className="text-muted-foreground mb-4">Each discount card shows:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>The discount name and type</li>
            <li>
              A plain-English summary of the rule (e.g. "Advertisers booking 3+ days save 10%")
            </li>
            <li>The discount value</li>
            <li>
              For promo codes: the code with a copy button
            </li>
            <li>Usage count (and max uses if set)</li>
            <li>Expiry date if applicable</li>
          </ul>
          <p className="text-muted-foreground mb-4">Actions available on each card:</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Action</th>
                  <th className="text-left py-2 font-medium text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Pause / Activate</td>
                  <td className="py-2">Toggle the discount on or off without deleting it.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Edit</td>
                  <td className="py-2">Opens the configuration drawer pre-filled with current values.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Duplicate</td>
                  <td className="py-2">
                    Creates a copy of the discount. Promo codes get a new randomly generated code.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-foreground">Delete</td>
                  <td className="py-2">Permanently removes the discount. Requires confirmation.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Callout variant="note">
            Pausing a discount is non-destructive — usage counts and expiry dates are preserved. Deleting a discount
            is permanent and cannot be undone.
          </Callout>
        </section>
      </div>
    </article>
  )
}
