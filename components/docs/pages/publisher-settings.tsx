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

export function PublisherSettingsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Settings"
        description="Site settings control your site's identity, how bookings work, and danger zone actions. Settings are per-site — each site you manage has its own configuration."
        breadcrumbItems={[{ label: "Publisher Guide", href: "/publisher/dashboard" }, { label: "Settings" }]}
        slug="publisher/settings"
      />

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Site Identity</h2>

          <div className="space-y-6 mb-6">
            <div>
              <h3 className="text-base font-semibold mb-2">Site name</h3>
              <p className="text-muted-foreground">
                The name advertisers see in their dashboard when they book your slots. Choose something descriptive —
                your brand name or site name. This field is required.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-2">Domain</h3>
              <p className="text-muted-foreground">
                Your site's domain (e.g.{" "}
                <code className="text-xs bg-muted px-1 py-0.5 rounded">example.com</code>). Used for domain
                verification, ad serving, and displaying your favicon throughout the dashboard. Update this if your
                domain changes.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-2">Timezone</h3>
              <p className="text-muted-foreground">
                All booking dates, slot activity timestamps, and payout calculations use this timezone. Set it to your
                site's primary timezone. If an advertiser books "March 1 to March 7", those dates are interpreted in
                this timezone.
              </p>
            </div>
          </div>

          <ImagePlaceholder caption="Site Identity section showing name, domain, and timezone fields" />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Booking Rules</h2>
          <p className="text-muted-foreground mb-6">
            Two settings that control how advertisers can book your slots:
          </p>

          <div className="space-y-6 mb-6">
            <div>
              <h3 className="text-base font-semibold mb-2">Minimum Buffer Period</h3>
              <p className="text-muted-foreground mb-2">
                The minimum amount of time between now and when a booking can start. Prevents advertisers from booking
                slots that start immediately, giving you time to review. Options range from 6 hours to 30 days. Default
                is 24 hours.
              </p>
              <p className="text-muted-foreground">
                If manual review is enabled, the buffer should be long enough for you to review and approve before the
                ad is scheduled to go live.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-2">Require manual review</h3>
              <p className="text-muted-foreground mb-2">
                When enabled (default), all bookings go to your approval queue before going live. You must approve each
                ad before it runs.
              </p>
              <p className="text-muted-foreground">
                When disabled, bookings are automatically approved after payment. Ads go live at their start date
                without any review. This is useful if you want zero-maintenance operation, but means you won't see ads
                before they appear on your site.
              </p>
            </div>
          </div>

          <Callout variant="warning" title="Disabling manual review">
            A warning is shown when you disable manual review. Ads will appear on your site without any preview or
            approval step.
          </Callout>

          <ImagePlaceholder caption="Booking Rules section showing buffer period dropdown and manual review toggle" />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Saving changes</h2>
          <p className="text-muted-foreground mb-4">
            A sticky footer bar appears when you have unsaved changes. It shows "You have unsaved changes." and a Save
            Changes button. The button is disabled if required fields are empty or if there are no changes to save.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Danger Zone</h2>

          <h3 className="text-base font-semibold mb-2">Delete Site</h3>
          <p className="text-muted-foreground mb-4">
            Permanently deletes the site and all associated slots, bookings, analytics data, and payout records. This
            cannot be undone.
          </p>
          <p className="text-muted-foreground mb-4">
            To confirm, a dialog appears requiring you to type{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">DELETE</code> exactly before the button becomes
            active.
          </p>

          <Callout variant="warning">
            Deleting a site is permanent. All slots, bookings, analytics, and payout records are removed and cannot be
            recovered.
          </Callout>

          <ImagePlaceholder caption="Danger zone showing Delete Site button and confirmation dialog with DELETE input" />
        </section>
      </div>
    </article>
  )
}
