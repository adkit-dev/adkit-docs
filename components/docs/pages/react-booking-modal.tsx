"use client"

import { CodePreview } from "@/components/docs/code-preview"
import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function ReactBookingModalPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="<BookingModal />"
        description="The booking flow modal that opens when a visitor clicks an empty slot placeholder."
        breadcrumbItems={[{ label: "React SDK", href: "/react/installation" }, { label: "<BookingModal />" }]}
        slug="react/booking-modal"
      />

      <div className="space-y-12">
        {/* Overview */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-4">
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">BookingModal</code> is rendered automatically
            by <code className="text-sm bg-muted px-1.5 py-0.5 rounded">AdSlot</code> when a visitor clicks an empty
            placeholder. You do not need to render it manually in most cases.
          </p>
          <p className="text-muted-foreground">
            The modal is exported from <code className="text-sm bg-muted px-1.5 py-0.5 rounded">adkit-react</code> if
            you need to invoke it outside of the standard slot flow, but its primary purpose is internal to{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">AdSlot</code>.
          </p>
        </section>

        {/* How the flow works */}
        <section>
          <h2 className="text-xl font-semibold mb-6">How the booking flow works</h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Visitor clicks the placeholder",
                description:
                  "When an AdSlot is in the empty state, clicking the \"Rent this spot\" button opens the BookingModal inline — no page navigation required.",
              },
              {
                step: "2",
                title: "Modal displays the opportunity",
                description:
                  "The modal shows the slot name, price, and a list of what's included: exclusive placement, fixed price, preview before payment, dashboard tracking, and the 24/7 uptime guarantee.",
              },
              {
                step: "3",
                title: "Visitor clicks \"Book this ad\"",
                description:
                  "The modal redirects to adkit.dev/book with your site ID, slot name, and the referring page URL. The price is fetched server-side — it is never passed in the URL to prevent manipulation.",
              },
              {
                step: "4",
                title: "Advertiser completes checkout",
                description:
                  "Stripe handles payment. The advertiser selects dates and uploads their creative on the Adkit booking page.",
              },
              {
                step: "5",
                title: "You receive the approval request",
                description:
                  "A notification appears in your Adkit dashboard. You review the creative and approve or reject it before anything goes live.",
              },
            ].map(({ step, title, description }) => (
              <div key={step} className="flex gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0 mt-0.5">
                  {step}
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">{title}</p>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Props */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Props</h2>
          <p className="text-muted-foreground mb-4">
            These are the props used internally by{" "}
            <code className="text-sm bg-muted px-1.5 py-0.5 rounded">AdSlot</code> when it renders the modal. If you
            import <code className="text-sm bg-muted px-1.5 py-0.5 rounded">BookingModal</code> directly, you must
            provide all required props.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Prop</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Type</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Required</th>
                  <th className="text-left py-2 font-medium text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">siteId</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Your Adkit site ID</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">slot</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">The slot identifier</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">price</td>
                  <td className="py-2 pr-4 font-mono text-xs">number</td>
                  <td className="py-2 pr-4">No</td>
                  <td className="py-2">Daily price in cents to display in the modal. If omitted, no price is shown.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">onClose</td>
                  <td className="py-2 pr-4 font-mono text-xs">{"() => void"}</td>
                  <td className="py-2 pr-4">Yes</td>
                  <td className="py-2">Called when the modal is dismissed (Escape key, backdrop click, or Cancel button)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Booking URL */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Booking URL</h2>
          <p className="text-muted-foreground mb-4">
            When the advertiser clicks "Book this ad", they are redirected to:
          </p>
          <CodePreview
            language="text"
            filename="redirect target"
            code={`https://adkit.dev/book?siteId={siteId}&slot={slot}&ref={window.location.href}`}
          />
          <p className="text-sm text-muted-foreground mt-4">
            The price is <strong className="text-foreground">not</strong> included in the URL. It is fetched
            server-side from your dashboard configuration, preventing any client-side price manipulation.
          </p>
        </section>

        {/* Behavior */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Modal behavior</h2>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
            <li>Pressing <kbd className="text-xs bg-muted px-1.5 py-0.5 rounded border border-border">Esc</kbd> closes the modal</li>
            <li>Clicking the backdrop (outside the card) closes the modal</li>
            <li>Body scroll is locked while the modal is open</li>
            <li>Only one modal can be open at a time</li>
            <li>The modal is accessible: <code className="text-xs bg-muted px-1 py-0.5 rounded">role="dialog"</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">aria-modal="true"</code></li>
          </ul>
        </section>

        {/* Direct usage */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Direct usage</h2>
          <p className="text-muted-foreground mb-4">
            If you need to trigger the booking modal programmatically from a custom UI element:
          </p>
          <CodePreview
            language="tsx"
            filename="src/components/CustomCTA.tsx"
            code={`import { useState } from "react"
import { BookingModal } from "adkit-react"

export function CustomCTA() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Advertise here
      </button>

      {open && (
        <BookingModal
          siteId="your-site-id"
          slot="sidebar"
          price={2500}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}`}
          />
          <Callout variant="note" className="mt-4">
            In most cases you should let <code>AdSlot</code> manage the modal automatically. Use direct rendering
            only if you need a booking CTA that is visually separate from the ad slot itself.
          </Callout>
        </section>
      </div>
    </article>
  )
}
