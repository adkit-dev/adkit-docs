"use client"

import { useState } from "react"
import { CodePreview } from "@/components/docs/code-preview"
import { CommandBlock } from "@/components/docs/command-block"
import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"
import { SlotVerifyPreview } from "@/components/docs/slot-verify-preview"

export function ReactInstallationPage() {
  const [framework, setFramework] = useState<"nextjs" | "react" | "html">("nextjs")

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Installation"
        description="Get Adkit running on your site. Takes about 3 minutes."
        breadcrumbItems={[{ label: "React SDK", href: "/react/installation" }, { label: "Installation" }]}
        slug="react/installation"
      />

      <Callout variant="note" title="Prerequisites" className="mb-8">
        Node.js 18+, a React 17+ app, and an Adkit account.
      </Callout>

      <div className="flex space-x-2 border-b border-border mb-8">
        <button
          onClick={() => setFramework("nextjs")}
          className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
            framework === "nextjs" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Next.js
        </button>
        <button
          onClick={() => setFramework("react")}
          className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
            framework === "react" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          React (Vite/CRA)
        </button>
        <button
          onClick={() => setFramework("html")}
          className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
            framework === "html" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Vanilla HTML
        </button>
      </div>

      <div className="space-y-12">
        {/* Step 1: Install */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">1</div>
            <h2 className="text-xl font-semibold m-0">Install the package</h2>
          </div>
          
          {framework === "html" ? (
            <p className="text-muted-foreground mb-4">Add the Adkit script to your HTML head.</p>
          ) : (
            <p className="text-muted-foreground mb-4">Install the React SDK using your preferred package manager.</p>
          )}

          {framework === "html" ? (
            <CodePreview 
              language="html"
              filename="index.html"
              code={`<script src="https://cdn.adkit.dev/v1.js" defer></script>`} 
            />
          ) : (
            <CommandBlock command="npm install adkit-react" />
          )}
        </section>

        {/* Step 2: Setup Provider */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">2</div>
            <h2 className="text-xl font-semibold m-0">Setup the Provider</h2>
          </div>
          
          {framework === "html" ? (
            <p className="text-muted-foreground mb-4">No provider setup is needed for Vanilla HTML. You can skip to adding your first slot.</p>
          ) : (
            <>
              <p className="text-muted-foreground mb-4">
                Wrap your app with the <code className="text-sm bg-muted px-1.5 py-0.5 rounded">AdkitProvider</code> and import the styles.
                {framework === "nextjs" ? " In Next.js App Router, add this to your root layout." : " Add this to your root App component."}
              </p>
              
              <CodePreview 
                language="tsx" 
                filename={framework === "nextjs" ? "app/layout.tsx" : "src/App.tsx"}
                addedLines={framework === "nextjs" ? [2, 3, 9, 11] : [2, 3, 7, 12]}
                code={framework === "nextjs" ? `import "./globals.css"
import "adkit-react/styles.css"
import { AdkitProvider } from "adkit-react"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AdkitProvider siteId="your-site-id">
          {children}
        </AdkitProvider>
      </body>
    </html>
  )
}` : `import "./index.css"
import "adkit-react/styles.css"
import { AdkitProvider } from "adkit-react"

export default function App() {
  return (
    <AdkitProvider siteId="your-site-id">
      <div className="app">
        <Sidebar />
        <MainContent />
      </div>
    </AdkitProvider>
  )
}`} 
              />
            </>
          )}
        </section>

        {/* Step 3: Add a Slot */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">3</div>
            <h2 className="text-xl font-semibold m-0">Add your first slot</h2>
          </div>
          
          <p className="text-muted-foreground mb-4">
            Place an ad slot anywhere in your app. Give it a unique identifier.
          </p>

          {framework === "html" ? (
            <CodePreview 
              language="html"
              filename="index.html"
              code={`<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
></div>`} 
            />
          ) : (
            <CodePreview 
              language="tsx" 
              filename={framework === "nextjs" ? "app/components/sidebar.tsx" : "src/components/Sidebar.tsx"}
              code={`import { AdSlot } from "adkit-react"

export function Sidebar() {
  return (
    <aside className="w-64 p-4 border-l">
      <nav>...</nav>
      
      <div className="mt-8">
        <AdSlot slot="sidebar" aspectRatio="4:3" />
      </div>
    </aside>
  )
}`} 
            />
          )}

          <Callout variant="note" title="Not seeing the placeholder?" className="mt-4">
            Check that your <code>siteId</code> is correct and your domain is verified in the dashboard. Make sure
            you don't have an ad blocker enabled during development.
          </Callout>
        </section>

        {/* Step 4: Verify */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">4</div>
            <h2 className="text-xl font-semibold m-0">Verify it works</h2>
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            Toggle <strong className="font-medium text-foreground">Code</strong> for the exact{" "}
            <code className="text-xs bg-muted px-1.5 py-0.5 rounded">AdSlot</code> props;{" "}
            <strong className="font-medium text-foreground">Preview</strong> shows an empty banner slot before an ad is
            booked.
          </p>
          <SlotVerifyPreview variant="react" />
        </section>
      </div>
    </article>
  )
}
