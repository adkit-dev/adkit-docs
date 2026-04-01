"use client"

import { useState } from "react"
import { CodePreview } from "@/components/docs/code-preview"
import { CommandBlock } from "@/components/docs/command-block"
import { ArrowRight } from "lucide-react"
import { Callout } from "@/components/docs/callout"
import { DocPageHeader } from "@/components/docs/doc-page-header"

export function ReactInstallationPage() {
  const [framework, setFramework] = useState<"nextjs" | "react" | "html">("nextjs")

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Installation"
        description="Get Adkit running on your site. Takes about 3 minutes."
        breadcrumbItems={[{ label: "React SDK", href: "/docs/react/installation" }, { label: "Installation" }]}
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
          
          <div className="p-6 border border-border rounded-lg bg-card flex flex-col items-center justify-center text-center">
            <div className="w-full max-w-xs aspect-video border-2 border-dashed border-border rounded flex items-center justify-center mb-4 bg-muted/20">
              <span className="text-muted-foreground font-medium">Adkit Placeholder</span>
            </div>
            <p className="text-foreground font-medium">Open your site.</p>
            <p className="text-muted-foreground text-sm mt-1">
              You should see a dashed border placeholder with your price. If you see it, you're done.
            </p>
          </div>
        </section>

        {/* What happens next */}
        <section className="pt-8 border-t border-border">
          <h2 className="text-2xl font-semibold mb-4">What happens next?</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center mb-3">
                <span className="text-xl">🖱️</span>
              </div>
              <h3 className="font-medium mb-2">1. Visitor Clicks</h3>
              <p className="text-sm text-muted-foreground">When a visitor clicks the placeholder, they'll be guided through booking and payment.</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded bg-amber-500/10 flex items-center justify-center mb-3">
                <span className="text-xl">🔔</span>
              </div>
              <h3 className="font-medium mb-2">2. You Approve</h3>
              <p className="text-sm text-muted-foreground">You'll receive a notification to review the creative and approve the ad.</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center mb-3">
                <span className="text-xl">💰</span>
              </div>
              <h3 className="font-medium mb-2">3. Ad Goes Live</h3>
              <p className="text-sm text-muted-foreground">The ad runs for the booked duration, and you get paid automatically via Stripe.</p>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}
