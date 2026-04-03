/**
 * Plain-text documentation context for the AI assistant.
 * No React imports — safe to use in server-side API routes.
 */
export const DOCS_CONTEXT = `
=== ADKIT DOCUMENTATION ===

--- Quickstart: JavaScript ---
Path: /quickstart/javascript
Add Adkit to any website using a single script tag — no build step required.

Step 1: Add the script tag to your HTML <head>:
  <script src="https://cdn.adkit.dev/v1.js" defer></script>

Step 2: Add a slot element wherever you want an ad:
  <div
    data-adkit-site="YOUR_SITE_ID"
    data-adkit-slot="sidebar"
    data-adkit-aspect-ratio="4:3"
    data-adkit-price="2500"
  ></div>
  NOTE: data-adkit-price is in CENTS. 2500 = $25/day.

Step 3: Data attribute reference:
  - data-adkit-site (required): Your site ID from the dashboard
  - data-adkit-slot (required): Unique slot name (e.g. "sidebar", "header-banner")
  - data-adkit-aspect-ratio: "16:9", "4:3", "1:1", "9:16", or "banner"
  - data-adkit-price: Daily price in cents
  - data-adkit-theme: "light", "dark", or "auto"
  - data-adkit-lazy: "true" to enable lazy loading

Step 4: Verify — open your site and look for a dashed-border placeholder saying "Rent this spot".

Programmatic refresh (SPA use):
  window.Adkit.refresh("sidebar")
  window.Adkit.refreshAll()

--- Quickstart: React ---
Path: /quickstart/react

Step 1: Install the package:
  npm install adkit-react

Step 2: Wrap your app with AdkitProvider and import styles:
  // src/App.tsx
  import "adkit-react/styles.css"
  import { AdkitProvider } from "adkit-react"

  export default function App() {
    return (
      <AdkitProvider siteId="your-site-id">
        <YourApp />
      </AdkitProvider>
    )
  }

Step 3: Add AdSlot to any component:
  import { AdSlot } from "adkit-react"

  export function Sidebar() {
    return <AdSlot slot="sidebar" aspectRatio="4:3" />
  }

Step 4: Verify — look for the dashed-border placeholder.

Providerless usage (pass siteId directly to AdSlot):
  <AdSlot slot="sidebar" siteId="your-site-id" aspectRatio="4:3" />

--- Quickstart: Next.js ---
Path: /quickstart/nextjs

Step 1: Install:
  npm install adkit-react

Step 2 (App Router — app/layout.tsx):
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
  }
  NOTE: No "use client" directive needed for AdkitProvider in App Router layouts.

Step 2 (Pages Router — pages/_app.tsx):
  import "adkit-react/styles.css"
  import { AdkitProvider } from "adkit-react"
  import type { AppProps } from "next/app"

  export default function MyApp({ Component, pageProps }: AppProps) {
    return (
      <AdkitProvider siteId="your-site-id">
        <Component {...pageProps} />
      </AdkitProvider>
    )
  }

Step 3: Add AdSlot to components (no "use client" needed for display):
  import { AdSlot } from "adkit-react"

  export function Sidebar() {
    return <AdSlot slot="sidebar" aspectRatio="4:3" />
  }

SPA route change refresh (App Router):
  "use client"
  import { usePathname } from "next/navigation"
  import { useEffect } from "react"

  export function AdRefresher() {
    const pathname = usePathname()
    useEffect(() => { window.Adkit?.refreshAll() }, [pathname])
    return null
  }

--- Quickstart: Astro ---
Path: /quickstart/astro

Step 1: Add script to src/layouts/Layout.astro:
  <head>
    <script src="https://cdn.adkit.dev/v1.js" defer></script>
  </head>
  NOTE: Use src attribute (not inline script) to avoid Astro bundler interference.

Step 2: Add slot in any .astro file:
  <div
    data-adkit-site="your-site-id"
    data-adkit-slot="sidebar"
    data-adkit-aspect-ratio="4:3"
    data-adkit-price="2500"
  ></div>

Using adkit-react in React islands:
  npm install adkit-react

  // src/components/SidebarAd.tsx
  import { AdkitProvider, AdSlot } from "adkit-react"
  import "adkit-react/styles.css"

  export function SidebarAd() {
    return (
      <AdkitProvider siteId="your-site-id">
        <AdSlot slot="sidebar" aspectRatio="4:3" price={2500} />
      </AdkitProvider>
    )
  }

  // In .astro page:
  <SidebarAd client:load />
  // or client:visible for below-the-fold slots

--- Quickstart: WordPress ---
Path: /quickstart/wordpress

Method 1 — Custom HTML Block (no coding required):
  1. Install "Insert Headers and Footers" plugin
  2. Settings → Insert Headers and Footers → Scripts in Header:
     <script src="https://cdn.adkit.dev/v1.js" defer></script>
  3. In block editor, add Custom HTML block and paste:
     <div data-adkit-site="your-site-id" data-adkit-slot="sidebar" data-adkit-aspect-ratio="4:3" data-adkit-price="2500"></div>

Method 2 — functions.php:
  function adkit_enqueue_script() {
    wp_enqueue_script('adkit-js', 'https://cdn.adkit.dev/v1.js', array(), null, true);
  }
  add_action('wp_enqueue_scripts', 'adkit_enqueue_script');
  WARNING: Edits to active theme's functions.php are overwritten on theme updates.

Method 3 — Child Theme (recommended for longevity):
  Create wp-content/themes/my-theme-child/ with style.css and functions.php.
  In child functions.php, enqueue parent styles and adkit script.

--- Quickstart: Webflow ---
Path: /quickstart/webflow
Requires Webflow paid plan (Basic or above).

Step 1: Project Settings → Custom Code → Footer Code:
  <script src="https://cdn.adkit.dev/v1.js" defer></script>
  Use Footer Code, not Head Code.

Step 2: Add Embed element with slot div:
  <div data-adkit-site="your-site-id" data-adkit-slot="sidebar" data-adkit-aspect-ratio="4:3" data-adkit-price="2500"></div>
  If Webflow strips data-adkit-price: set it as a Custom Attribute in the Settings panel instead.

Step 3: Set Embed element width in the Designer. Do NOT set fixed height.
  Aspect ratios: banner (728px), 16:9 (100%), 4:3 (300px), 1:1 (300px), 9:16 (200px)

Step 4: Publish and verify on live site (NOT in Designer preview — scripts don't run in preview).

--- React SDK: AdkitProvider ---
Path: /react/provider

Props:
  - siteId (string, required): Your Adkit site ID
  - theme ("light" | "dark" | "auto", optional, default: "auto"): Color theme
  - locale (string, optional, default: "en-US"): Locale for formatting

Example:
  <AdkitProvider siteId="your-site-id" theme="dark" locale="en-GB">
    {children}
  </AdkitProvider>

Notes:
  - Only one AdkitProvider should exist in your app
  - Place it as high in the tree as possible
  - All AdSlot components must be descendants of AdkitProvider

--- React SDK: AdSlot ---
Path: /react/adslot

Props:
  - slot (string, required): Unique slot identifier
  - aspectRatio (string, optional): e.g., "16:9", "4:3", "1:1", "9:16", "banner"
  - className (string, optional): Additional CSS classes
  - fallback (ReactNode, optional): Content while loading

Example:
  <AdSlot slot="sidebar" aspectRatio="4:3" className="my-4" />

Good slot names: "header-banner", "sidebar", "in-content-1", "footer-leaderboard"

--- React SDK: useAdkit Hook ---
Path: /react/use-adkit

  import { useAdkit } from "adkit-react"

  function MyComponent() {
    const { siteId, theme, slots, refresh } = useAdkit()
    return <div>Site: {siteId}</div>
  }

Return values: siteId, theme, slots (Map), refresh()

--- React SDK: Theming ---
Path: /react/theming

  <AdkitProvider siteId="..." theme="dark">

Or override CSS variables:
  :root {
    --adkit-primary: #6366f1;
    --adkit-background: #ffffff;
    --adkit-text: #0a0a0a;
    --adkit-border: #e5e5e5;
  }
  .dark {
    --adkit-background: #0a0a0a;
    --adkit-text: #fafafa;
    --adkit-border: #262626;
  }

--- JavaScript SDK: Data Attributes ---
Path: /js/data-attributes

Required: data-adkit-site, data-adkit-slot
Optional: data-adkit-aspect-ratio, data-adkit-theme, data-adkit-lazy, data-adkit-price

--- JavaScript SDK: JS API ---
Path: /js/api

  window.Adkit.refresh("sidebar")    // reload specific slot
  window.Adkit.refreshAll()          // reload all slots
  window.Adkit.destroy("sidebar")    // remove a slot
  window.Adkit.on("impression", cb)  // listen for events
  window.Adkit.on("click", cb)

--- How It Works ---
Path: /how-it-works

Publishers set fixed daily prices for ad slots. Advertisers book directly through your site.
Revenue split: Publisher 85%, Adkit 15% (vs AdSense ~68% to publishers).

Flow:
  1. Publisher creates slots and sets prices in dashboard
  2. Visitor sees empty slot with "Rent this spot" booking CTA
  3. Advertiser books dates and uploads creative
  4. Publisher approves or rejects the ad
  5. Ad goes live on booked dates
  6. Publisher receives payout via Stripe

--- Publisher: Creating Slots ---
Path: /publisher/creating-slots

  1. Dashboard → Slots → New Slot
  2. Enter unique identifier (e.g. "sidebar")
  3. Set daily price in USD
  4. Choose aspect ratio

Best practices: use descriptive names, price based on traffic/visibility, start lower and raise.

--- Publisher: Approvals ---
Path: /publisher/approvals

When an advertiser books, their submission appears in your approval queue.
Actions: Approve / Reject (advertiser refunded) / Request Changes.
Review: creative quality, destination URL safety, brand alignment.

--- Publisher: Payouts ---
Path: /publisher/payouts

Connect Stripe in Settings → Payouts.
Payouts processed weekly on Mondays for the prior week's earnings.
You receive 85% of each booking. If your site has downtime, advertisers get prorated refunds.

--- Publisher: Analytics ---
Path: /publisher/analytics

Metrics: Impressions, Clicks, CTR, Revenue, Fill Rate.
Date filters: Today, Last 7 days, Last 30 days, Custom range.

--- Advertiser: Booking ---
Path: /advertiser/booking

  1. Click an empty slot placeholder on a publisher's site
  2. Select dates
  3. Upload creative (PNG/JPG/GIF/WebP, max 2MB, match slot aspect ratio)
  4. Enter payment — processed via Stripe
  5. Submit for publisher approval

--- Concepts: Server-Authoritative Pricing ---
Path: /concepts/pricing

Prices are stored on Adkit servers and validated at checkout.
The client NEVER controls the price — prevents any client-side manipulation.

--- Concepts: Slot Identity ---
Path: /concepts/slot-identity

Slot IDs: unique per site, descriptive, case-sensitive, no spaces.
Use the same ID across all pages for consistent pricing/analytics.

`
