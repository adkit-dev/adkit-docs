"use client"

import { CodePreview } from "@/components/docs/code-preview"
import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"
import { SlotVerifyPreview } from "@/components/docs/slot-verify-preview"

export function QuickstartWebflowPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Webflow Quickstart"
        description="Add Adkit to your Webflow site using Project Settings and Embed elements. Custom code requires a Webflow paid plan (Basic or above)."
        breadcrumbItems={[{ label: "Quickstarts", href: "/quickstart" }, { label: "Webflow" }]}
        slug="quickstart/webflow"
      />

      <Callout variant="note" title="Prerequisites" className="mb-8">
        A Webflow site on a paid plan and an Adkit account.{" "}
        <a href="https://adkit.dev" className="text-primary">
          Sign up at adkit.dev
        </a>{" "}
        to get your site ID.
      </Callout>

      <div className="space-y-12">
        {/* Step 1 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
              1
            </div>
            <h2 className="text-xl font-semibold m-0">Add the script via Project Settings</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            In the Webflow Designer, open <strong>Project Settings → Custom Code → Footer Code</strong>. Paste the
            following:
          </p>
          <CodePreview
            language="html"
            filename="webflow-footer-code.html"
            code={`<script src="https://cdn.adkit.dev/v1.js" defer></script>`}
            showLineNumbers={false}
          />
          <p className="text-muted-foreground mt-3 text-sm">
            Use <strong>Footer Code</strong>, not Head Code. Placing the script in the footer ensures it runs after
            your slot elements are in the DOM.
          </p>
          <Callout variant="info" title="Publish required" className="mt-4">
            Custom code does not appear in the Webflow Designer preview. You must click <strong>Publish</strong> and
            test on your live site.
          </Callout>
        </section>

        {/* Step 2 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
              2
            </div>
            <h2 className="text-xl font-semibold m-0">Add a slot using an Embed element</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            In the page where you want the ad, open the <strong>Add Elements</strong> panel and add an{" "}
            <strong>Embed</strong> element (under Components). Double-click it to open the code editor, then paste:
          </p>
          <CodePreview
            language="html"
            filename="webflow-embed.html"
            code={`<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
  data-adkit-price="2500"
></div>`}
          />

          <Callout variant="warning" title="Setting data-adkit-price in Webflow" className="mt-4">
            Webflow's Embed editor may strip some <code>data-*</code> attributes. If you see the slot without a price,
            set it as a custom attribute instead:
            <ol className="mt-2">
              <li>Select the div inside the Embed block in the Designer</li>
              <li>Open the <strong>Settings</strong> panel (gear icon)</li>
              <li>Scroll to <strong>Custom Attributes</strong></li>
              <li>
                Add <code>data-adkit-price</code> with value <code>2500</code>
              </li>
            </ol>
          </Callout>
        </section>

        {/* Step 3 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
              3
            </div>
            <h2 className="text-xl font-semibold m-0">Set the slot width in the Designer</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Adkit derives slot height automatically from the width and aspect ratio. Set the width of the Embed element
            to your desired size. Do not set a fixed height — let the aspect ratio control it.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Aspect Ratio</th>
                  <th className="text-left py-2 pr-4 font-medium text-foreground">Common Use</th>
                  <th className="text-left py-2 font-medium text-foreground">Suggested Width</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">banner</td>
                  <td className="py-2 pr-4">Leaderboard (header/footer)</td>
                  <td className="py-2">728px or 100%</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">16:9</td>
                  <td className="py-2 pr-4">Wide in-content placement</td>
                  <td className="py-2">100%</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">4:3</td>
                  <td className="py-2 pr-4">Sidebar placement</td>
                  <td className="py-2">300px</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs">1:1</td>
                  <td className="py-2 pr-4">Square in-content</td>
                  <td className="py-2">300px</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">9:16</td>
                  <td className="py-2 pr-4">Vertical / story placement</td>
                  <td className="py-2">200px</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Step 4 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
              4
            </div>
            <h2 className="text-xl font-semibold m-0">Publish and verify</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Click <strong>Publish</strong> in the Webflow Designer. Open your published site in a private or incognito window. 
          </p>
          <SlotVerifyPreview variant="js" />
          <Callout variant="note" title="Designer preview limitation" className="mt-4">
            The Adkit placeholder will not appear inside the Webflow Designer. Scripts only execute on the published
            site — always verify at your live URL, not in the preview.
          </Callout>
        </section>
      </div>
    </article>
  )
}
