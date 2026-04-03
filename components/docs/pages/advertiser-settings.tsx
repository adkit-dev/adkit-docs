"use client"

import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function AdvertiserSettingsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Settings"
        description="Advertiser settings let you update your company name and manage your account."
        breadcrumbItems={[{ label: "Advertiser Guide", href: "/advertiser/booking" }, { label: "Settings" }]}
        slug="advertiser/settings"
      />

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold mb-2">Company name</h3>
              <p className="text-muted-foreground">
                This is the name that appears on your invoices and in communications with publishers. It is not shown
                on your ads. You can update it at any time — the change takes effect immediately for all future
                bookings and invoice records.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">
                Your sign-in email address is displayed here but cannot be changed from the settings page. Contact
                support to change your sign-in email.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Danger Zone</h2>

          <h3 className="text-base font-semibold mb-2">Delete account</h3>
          <p className="text-muted-foreground mb-4">
            Permanently deletes your advertiser account and all associated data — campaigns, billing history, and
            invoices. This cannot be undone.
          </p>
          <p className="text-muted-foreground mb-4">
            To confirm deletion, a dialog opens requiring you to type{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">DELETE</code> exactly before the button becomes
            active.
          </p>
          <Callout variant="warning">
            Deleting your account is permanent. All campaigns, billing history, and invoices are removed and cannot be
            recovered.
          </Callout>
        </section>
      </div>
    </article>
  )
}
