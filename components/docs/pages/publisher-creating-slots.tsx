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

export function PublisherCreatingSlotsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Creating Slots"
        description="Slots are the ad placements you define on your site. Each slot has a name, an aspect ratio, and a daily price. The name in your code must match the name in the dashboard exactly."
        breadcrumbItems={[{ label: "Publisher Guide", href: "/publisher/dashboard" }, { label: "Creating Slots" }]}
        slug="publisher/creating-slots"
      />

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Two ways to create a slot</h2>
          <p className="text-muted-foreground mb-4">
            You can create slots entirely in code — just add the component or div with the correct attributes and the
            SDK will detect and register it automatically on the next page load. It will appear in your dashboard once
            detected.
          </p>
          <p className="text-muted-foreground mb-4">
            Alternatively, you can create a slot from the dashboard by clicking "Create slot" on the Slots page. The
            dashboard will walk you through naming it, choosing an aspect ratio, and setting a price, then show you the
            code to add.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Slot names</h2>
          <p className="text-muted-foreground mb-4">
            Slot names must contain only letters, numbers, hyphens, and underscores. No spaces. Names are unique per
            site — you can't have two slots named{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">sidebar</code> on the same site, but you can have
            a <code className="text-sm bg-muted px-1.5 py-0.5 rounded">sidebar</code> on each of your different sites.
          </p>
          <p className="text-muted-foreground mb-4">
            The name you use in code and the name in the dashboard must match exactly. The identity Adkit uses to serve
            ads is <code className="text-sm bg-muted px-1.5 py-0.5 rounded">siteId:slotName</code> — the combination
            of your site ID and slot name.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Slot names are not page-specific</h2>
          <p className="text-muted-foreground mb-4">
            A slot named <code className="text-sm bg-muted px-1.5 py-0.5 rounded">sidebar</code> on{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">/blog/post-1</code> and{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">/blog/post-2</code> is the same placement. When
            an advertiser books your sidebar, their ad appears everywhere that slot appears — across all pages. This is
            intentional: advertisers rent a placement, not a URL.
          </p>
          <Callout variant="note">
            If you need page-specific placements, use distinct names:{" "}
            <code>homepage-hero</code>, <code>blog-sidebar</code>, etc.
          </Callout>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Aspect ratios</h2>
          <p className="text-muted-foreground mb-4">
            Five options are available. The SDK enforces the aspect ratio with CSS — only set the width, height is
            always derived automatically.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Value</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Ratio</th>
                  <th className="text-left py-2 font-medium text-foreground">Best for</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">16:9</td>
                  <td className="py-2 pr-4">16:9</td>
                  <td className="py-2">Hero banners, video-style placements</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">4:3</td>
                  <td className="py-2 pr-4">4:3</td>
                  <td className="py-2">Sidebars, content blocks</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">1:1</td>
                  <td className="py-2 pr-4">1:1</td>
                  <td className="py-2">Square placements</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">9:16</td>
                  <td className="py-2 pr-4">9:16</td>
                  <td className="py-2">Vertical/mobile placements</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">banner</td>
                  <td className="py-2 pr-4">728:90</td>
                  <td className="py-2">Leaderboard banners</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Setting a price</h2>
          <p className="text-muted-foreground mb-4">
            Price is set in cents.{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">2500</code> = $25.00/day. The price you set in
            code is registered automatically the first time the slot loads on your site, and the slot becomes
            immediately bookable.
          </p>
          <p className="text-muted-foreground mb-4">
            You can also change prices directly in the dashboard on the slot detail page.
          </p>
          <Callout variant="warning" title="Price changes require confirmation">
            If the same slot is ever mounted with a different price, you'll receive a notification in the dashboard
            and an email. Until you confirm, the price stays at its current value. This protects against accidental
            or unauthorized price changes.
          </Callout>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Slot statuses</h2>
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
                  <td className="py-2 pr-4 font-medium text-foreground">Pending setup</td>
                  <td className="py-2">Slot created but not yet detected on your site.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Available</td>
                  <td className="py-2">Slot is live and accepting bookings.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Filled</td>
                  <td className="py-2">Slot has an active ad running.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Inactive</td>
                  <td className="py-2">Slot hasn't received traffic in the last 2 hours.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">Paused</td>
                  <td className="py-2">You've manually paused the slot — it won't accept bookings.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-foreground">Archived</td>
                  <td className="py-2">Slot is hidden from your active list but data is preserved.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Installation detection</h2>
          <p className="text-muted-foreground mb-4">
            After you add the slot to your code and deploy, Adkit polls for it automatically every 3 seconds. Once
            detected, the status changes from "Pending setup" to "Available" and the slot is ready to receive bookings.
            No manual action is needed.
          </p>
          <ImagePlaceholder caption="Slot detail page in pending setup state showing installation instructions and polling indicator" />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Pausing and archiving</h2>
          <p className="text-muted-foreground mb-4">
            You can pause a slot from the slot list or the slot detail page using the actions menu. A paused slot won't
            show a booking CTA to visitors and won't accept new bookings. Slots with an active booking cannot be paused
            until the booking ends.
          </p>
          <p className="text-muted-foreground mb-4">
            Archiving removes the slot from your active list. Archived slots still preserve all historical data and
            bookings. You can restore an archived slot at any time.
          </p>
          <ImagePlaceholder caption="Slot list showing statuses, revenue column, and dropdown actions menu" />
        </section>
      </div>
    </article>
  )
}
