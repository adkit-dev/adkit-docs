"use client"

import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"

function ImagePlaceholder({ caption }: { caption: string }) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-muted/30 aspect-video flex items-center justify-center mb-4">
      <p className="text-sm text-muted-foreground text-center px-8 leading-relaxed">{caption}</p>
    </div>
  )
}

export function AdvertiserBillingPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Billing"
        description="The Billing page shows your payment method on file and a complete invoice history for all your campaigns."
        breadcrumbItems={[{ label: "Advertiser Guide", href: "/advertiser/booking" }, { label: "Billing" }]}
        slug="advertiser/billing"
      />

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Payment method</h2>
          <p className="text-muted-foreground mb-4">
            Your saved card is shown at the top of the page with the card brand and last four digits displayed on a
            card-style widget. Click "Manage payment methods" to open Stripe's billing portal where you can add,
            update, or remove payment methods. If no card is on file, an "Add payment method" button appears instead.
          </p>
          <Callout variant="note">
            Your payment method is managed by Stripe. Adkit never stores your card details.
          </Callout>
          <ImagePlaceholder caption="Billing page showing payment method card widget and Manage button" />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Invoice history</h2>
          <p className="text-muted-foreground mb-4">
            Every booking appears as an invoice row showing the booking date, campaign name, amount, and status.
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
                  <td className="py-2 pr-4 font-medium text-foreground">Paid</td>
                  <td className="py-2">Payment was completed and a Stripe receipt is available.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Pending</td>
                  <td className="py-2">Payment is in progress or the receipt hasn't been generated yet.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-foreground">Cancelled</td>
                  <td className="py-2">The booking was cancelled.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground mb-4">
            Click "View invoice" on any row to open the Stripe receipt in a new tab. The button is disabled if no
            receipt is available yet.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Filtering and search</h2>
          <p className="text-muted-foreground mb-4">
            Three filters are available at the top of the invoice table: a search field (searches by campaign name), a
            status dropdown (All, Paid, Pending, Cancelled), and a date range picker. Filters combine — for example,
            you can show only Paid invoices from a specific month. A "Clear filters" button appears when any filter is
            active.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Pagination</h2>
          <p className="text-muted-foreground mb-4">
            Results are paginated. The default page size is 10 rows. A per-page selector lets you choose 10, 25, or 50
            rows. Previous/Next buttons navigate between pages. The current page and total result count are shown.
          </p>
          <ImagePlaceholder caption="Billing page showing invoice table with filters, status badges, and pagination" />
        </section>
      </div>
    </article>
  )
}
