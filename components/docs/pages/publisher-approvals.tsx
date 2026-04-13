"use client"

import Image from "next/image"
import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function PublisherApprovalsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Approving Ads"
        description="Before an ad goes live on your site, you review it. You see the creative, the destination URL, the dates, and what you'll earn. You approve or reject with a reason. Nothing runs without your sign-off."
        breadcrumbItems={[{ label: "Publisher Guide", href: "/publisher/dashboard" }, { label: "Approving Ads" }]}
        slug="publisher/approvals"
      />

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">The approval queue</h2>
          <p className="text-muted-foreground mb-4">The Approvals page has two tabs:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>
              <span className="font-medium text-foreground">Action required</span> — Bookings waiting for your
              decision. A count badge and amber dot appear when items are waiting.
            </li>
            <li>
              <span className="font-medium text-foreground">Completed</span> — All bookings you've already approved or
              rejected, filterable by status.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Reviewing a booking</h2>
          <p className="text-muted-foreground mb-4">
            Click any row to open the booking detail page. You'll see:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>The ad creative at full size, rendered at its actual aspect ratio against a checkered background</li>
            <li>The destination URL the ad will link to</li>
            <li>
              A booking details card: advertiser name, slot, dates, duration in days, booking total, and your earnings
              (85% of the booking amount)
            </li>
            <li>A timeline showing when the ad goes live and when it ends</li>
          </ul>
          <Image
            src="https://cjo9byig3a.ufs.sh/f/gu2Lzg6JSemZzMcHqYjiX4RSQ2H7nv5rLDOj6AbIqGJfhaEx"
            alt="Booking detail page showing ad creative, destination link, and Approve/Reject buttons"
            width={800}
            height={450}
            className="rounded-lg border border-border object-cover mb-4"
          />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Approving</h2>
          <p className="text-muted-foreground mb-4">
            Click "Approve ad". The button asks for confirmation on the first click — it changes to "Confirm approval?"
            before submitting. Once confirmed:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>
              The booking is marked as approved
            </li>
            <li>
              The advertiser receives an approval email with desktop and mobile previews of their ad on your site
            </li>
            <li>The ad is scheduled to go live automatically at the start date</li>
            <li>
              If there are more pending bookings, you're automatically navigated to the next one
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Rejecting</h2>
          <p className="text-muted-foreground mb-4">
            Click "Reject ad". A panel opens asking you to choose a reason:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>Not relevant to site audience</li>
            <li>Conflicts with site brand</li>
            <li>Low-quality or unclear ad</li>
            <li>Inappropriate content</li>
            <li>Broken/unsafe destination link</li>
            <li>Other (free text)</li>
          </ul>
          <p className="text-muted-foreground">
            A reason is required. Once rejected, the advertiser receives a rejection email with your reason,
            improvement tips, and a full refund. The refund is processed automatically.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Navigating between pending bookings</h2>
          <p className="text-muted-foreground mb-4">
            When multiple bookings are pending, a navigation bar appears at the top of the detail page showing Previous
            and Next buttons so you can move through the queue without returning to the list.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Auto-approval</h2>
          <p className="text-muted-foreground mb-4">
            If you'd prefer not to review ads manually, you can enable auto-approval in Settings under Booking Rules.
            With auto-approval on, bookings are approved immediately after payment. The Approvals page will show a
            message explaining this, and all bookings go directly to the Completed tab.
          </p>
          <Callout variant="warning" title="Auto-approval means no review">
            With auto-approval enabled, ads go live without you seeing them first. Only enable this if you accept the
            risk that ads may appear on your site that you wouldn't have approved manually.
          </Callout>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">What happens after approval</h2>
          <p className="text-muted-foreground mb-4">
            The ad is scheduled to activate at the start date and time (midnight in your site's timezone). At
            activation, the ad replaces the placeholder on your site. Impressions and clicks are tracked automatically.
            The ad stops running automatically when the booking ends.
          </p>
        </section>
      </div>
    </article>
  )
}
