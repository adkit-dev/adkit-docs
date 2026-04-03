"use client"

import { Callout } from "@/components/docs/callout"
import { CodePreview } from "@/components/docs/code-preview"
import { DocPageHeader } from "@/components/docs/doc-page-header"

function ImagePlaceholder({ caption }: { caption: string }) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-muted/30 aspect-video flex items-center justify-center mb-4">
      <p className="text-sm text-muted-foreground text-center px-8 leading-relaxed">{caption}</p>
    </div>
  )
}

export function AdvertiserBookingPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Booking an Ad"
        description="Booking an ad on Adkit is a three-step process: choose your dates, upload your creative, then review and pay. You don't need an account to book — one is created automatically when you check out."
        breadcrumbItems={[{ label: "Advertiser Guide" }]}
        slug="advertiser/booking"
      />

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Finding a slot to book</h2>
          <p className="text-muted-foreground mb-4">
            Every Adkit ad slot has a unique booking URL. Publishers share this link directly. Clicking it opens the
            booking flow for that specific placement.
          </p>
          <CodePreview
            language="text"
            code={`https://adkit.dev/book?siteId=SITE_ID&slot=SLOT_NAME`}
            showLineNumbers={false}
          />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Step 1: Choose dates</h2>
          <p className="text-muted-foreground mb-4">
            The calendar shows the slot's availability in the publisher's timezone. Dates already booked by another
            advertiser are grayed out and unselectable. The earliest available start date is determined by the
            publisher's buffer period — publishers can require anywhere from 6 hours to 30 days of advance notice.
          </p>
          <p className="text-muted-foreground mb-4">
            The calendar note shows the publisher's timezone abbreviation (e.g., "EST", "PST") so you know how dates
            are interpreted.
          </p>
          <p className="text-muted-foreground mb-4">
            A price summary below the calendar updates in real time as you select dates, showing your daily rate, total
            days, and total cost. If the publisher has discounts that apply to your booking length, they appear
            automatically in the summary.
          </p>
          <p className="text-muted-foreground mb-4">
            If the slot has no available dates or is currently inactive, you'll see a message explaining that bookings
            are paused.
          </p>
          <ImagePlaceholder caption="Booking page step 1 showing calendar with some dates grayed out, date range selected, and price summary" />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Available offers</h2>
          <p className="text-muted-foreground mb-4">
            If the publisher has created discounts, an "Available offers" panel appears alongside the calendar showing
            what's available. Discounts that require a minimum number of days are grayed out until your selection meets
            the requirement. Discounts that qualify are applied automatically — click Apply to use one.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Step 2: Upload your ad</h2>
          <p className="text-muted-foreground mb-4">
            Upload a PNG, JPG, or GIF up to 32MB. The aspect ratio required for this slot is displayed in the
            guidelines section. Recommended resolutions by aspect ratio:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Aspect ratio</th>
                  <th className="text-left py-2 font-medium text-foreground">Recommended resolution</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">16:9</td>
                  <td className="py-2">1920 × 1080</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">4:3</td>
                  <td className="py-2">1600 × 1200</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">1:1</td>
                  <td className="py-2">1200 × 1200</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">9:16</td>
                  <td className="py-2">1080 × 1920</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">banner (8:1)</td>
                  <td className="py-2">1600 × 200</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground mb-4">
            If you're signed into an existing advertiser account, you'll also see an option to import a creative from a
            previous campaign. This carries over the image and destination URL from the previous booking.
          </p>

          <h3 className="text-base font-semibold mb-2">Cropping your image</h3>
          <p className="text-muted-foreground mb-4">
            After uploading, a live preview shows how your ad will look at the slot's aspect ratio. If your image
            doesn't match the slot's proportions, click "Crop image" to open a crop tool. The crop area is constrained
            to the correct aspect ratio. Drag to reposition it, or drag the corner handles to resize. Click "Apply
            crop" to confirm, or "Cancel" to go back to the original.
          </p>

          <h3 className="text-base font-semibold mb-2">Destination URL</h3>
          <p className="text-muted-foreground mb-4">
            Enter the URL visitors will be sent to when they click your ad. URL parameters can be added from a dropdown
            menu — common options like{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">utm_source</code>,{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">utm_medium</code>,{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">utm_campaign</code>,{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">ref</code>, and{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">via</code> are available pre-filled. The full URL
            including parameters is shown in real time below the input.
          </p>

          <h3 className="text-base font-semibold mb-2">Company name</h3>
          <p className="text-muted-foreground mb-4">
            Your company name is visible to the publisher and appears on your invoices. It is not shown on the ad
            itself.
          </p>

          <ImagePlaceholder caption="Booking page step 2 showing upload area, live ad preview, destination URL field, and guidelines panel" />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Step 3: Review and pay</h2>
          <p className="text-muted-foreground mb-4">
            The review step shows a compact preview of your ad, a promo code input, a full booking summary, and the
            payment button.
          </p>

          <h3 className="text-base font-semibold mb-2">Promo code</h3>
          <p className="text-muted-foreground mb-4">
            If the publisher has created a promo code discount, you can enter it here. If the code is valid and better
            than any automatic discount you already have, it's applied. If it's invalid or doesn't meet the minimum
            booking length, an error is shown explaining why.
          </p>

          <h3 className="text-base font-semibold mb-2">Booking summary</h3>
          <p className="text-muted-foreground mb-4">
            Shows: site name, placement aspect ratio, start and end datetime (with timezone abbreviation), price per
            day, number of days, any discount, and total.
          </p>

          <h3 className="text-base font-semibold mb-2">Payment</h3>
          <p className="text-muted-foreground mb-4">
            If you're signed in with a saved card, it's shown here and you can pay with one click. A "Change" button
            opens Stripe's billing portal to update your payment method. If you don't have a saved card, clicking "Pay
            and launch ad" redirects to a Stripe Checkout page.
          </p>
          <Callout variant="note">
            Payment is processed by Stripe. Your card details never touch Adkit's servers.
          </Callout>

          <ImagePlaceholder caption="Booking page step 3 showing booking summary card, promo code field, payment button" />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">What happens after you pay</h2>
          <p className="text-muted-foreground mb-4">
            The "What's next" section on the review step explains the flow based on the publisher's settings.
          </p>

          <h3 className="text-base font-semibold mb-2">If the publisher reviews ads manually</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
            <li>
              If you're not signed in, you'll receive an email with access to your advertiser dashboard.
            </li>
            <li>The site owner reviews your ad — the average wait time shown is 6 hours.</li>
            <li>You receive an approval email with desktop and mobile previews of your ad.</li>
            <li>
              Your ad goes live automatically at the start of your booking window (midnight in the publisher's
              timezone).
            </li>
            <li>Track performance from your dashboard.</li>
          </ol>

          <h3 className="text-base font-semibold mb-2">If the publisher has enabled auto-approval</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
            <li>Your ad goes live automatically at the start of your booking.</li>
            <li>Track performance from your dashboard.</li>
          </ol>

          <Callout variant="note">
            If the publisher's site experiences downtime during your campaign, your booking is automatically prorated
            so you only pay for time your ad was live.
          </Callout>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Progress is saved automatically</h2>
          <p className="text-muted-foreground mb-4">
            Your booking progress is saved as you go. If you navigate away and return to the same booking URL, the
            calendar, creative, and review step are restored to where you left off. If any previously selected dates
            have since been booked by another advertiser, the calendar is reset and you're returned to step 1.
          </p>
        </section>
      </div>
    </article>
  )
}
