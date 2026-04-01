/**
 * Documentation articles for the AI assistant — server-side only, no React imports.
 * Each article is fetched on-demand via tool use when the AI needs specific information.
 */

export interface DocArticle {
  slug: string
  title: string
  description: string
  content: string
}

export const SERVER_DOC_ARTICLES: DocArticle[] = [
  {
    slug: "quickstart/javascript",
    title: "JavaScript Quickstart",
    description: "Add Adkit to any website using a single script tag. No build step required.",
    content: `## Overview
Add Adkit to any HTML website using a single CDN script tag — no build step, no npm required.

## Step 1: Add the Script Tag

Add this to your HTML \`<head>\`:

\`\`\`html
<script src="https://cdn.adkit.dev/v1.js" defer></script>
\`\`\`

## Step 2: Add a Slot Element

Place a div with \`data-adkit-*\` attributes wherever you want an ad:

\`\`\`html
<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
  data-adkit-price="2500"
></div>
\`\`\`

**Note:** \`data-adkit-price\` is in cents. \`2500\` = $25/day.

## Step 3: Verify

Open your site in a browser. You should see a dashed-border placeholder with "Rent this spot" and your price. If not, check that your site ID is correct and you don't have an ad blocker active.

## Data Attributes Reference

| Attribute | Required | Description |
|-----------|----------|-------------|
| \`data-adkit-site\` | Yes | Your site ID from the dashboard |
| \`data-adkit-slot\` | Yes | Unique slot name, e.g. \`"sidebar"\` |
| \`data-adkit-aspect-ratio\` | No | \`"16:9"\`, \`"4:3"\`, \`"1:1"\`, \`"9:16"\`, \`"banner"\` |
| \`data-adkit-price\` | No | Daily price in cents |
| \`data-adkit-theme\` | No | \`"light"\`, \`"dark"\`, or \`"auto"\` |
| \`data-adkit-lazy\` | No | \`"true"\` to enable lazy loading |

## Complete Example

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.adkit.dev/v1.js" defer></script>
</head>
<body>
  <aside>
    <div
      data-adkit-site="abc123"
      data-adkit-slot="sidebar"
      data-adkit-aspect-ratio="4:3"
      data-adkit-price="2500"
    ></div>
  </aside>
</body>
</html>
\`\`\`

## Programmatic Refresh (SPA)

Call these after a page navigation to re-initialize slots:

\`\`\`javascript
window.Adkit.refresh("sidebar")   // refresh one slot
window.Adkit.refreshAll()          // refresh all slots
\`\`\``,
  },
  {
    slug: "quickstart/react",
    title: "React Quickstart",
    description: "Install adkit-react and add ad slots to your React app.",
    content: `## Overview
Install the \`adkit-react\` package and integrate ad slots into your React application.

## Step 1: Install

\`\`\`bash
npm install adkit-react
\`\`\`

## Step 2: Wrap Your App with AdkitProvider

Import styles and wrap your root component:

\`\`\`tsx
// src/App.tsx
import "./index.css"
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
}
\`\`\`

## Step 3: Add AdSlot to a Component

\`\`\`tsx
import { AdSlot } from "adkit-react"

export function Sidebar() {
  return (
    <aside className="w-64 p-4">
      <nav>...</nav>
      <div className="mt-8">
        <AdSlot slot="sidebar" aspectRatio="4:3" />
      </div>
    </aside>
  )
}
\`\`\`

## Step 4: Verify

Start your dev server and open the page. You should see the dashed-border placeholder. If not, check that \`siteId\` is correct and your domain is verified in the dashboard.

## Providerless Usage

You can pass \`siteId\` directly to \`AdSlot\` if you don't want a provider:

\`\`\`tsx
<AdSlot slot="sidebar" siteId="your-site-id" aspectRatio="4:3" />
\`\`\``,
  },
  {
    slug: "quickstart/nextjs",
    title: "Next.js Quickstart",
    description: "Install adkit-react and add slots to your Next.js app. Supports App Router and Pages Router.",
    content: `## Overview
Install \`adkit-react\` and configure it for Next.js App Router or Pages Router.

## Step 1: Install

\`\`\`bash
npm install adkit-react
\`\`\`

## App Router Setup

Add \`AdkitProvider\` to your root layout. **No \`"use client"\` directive is needed for the provider in App Router layouts.**

\`\`\`tsx
// app/layout.tsx
import "./globals.css"
import "adkit-react/styles.css"
import { AdkitProvider } from "adkit-react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
\`\`\`

Then add \`AdSlot\` to any component:

\`\`\`tsx
// app/components/Sidebar.tsx
import { AdSlot } from "adkit-react"

export function Sidebar() {
  return (
    <aside>
      <AdSlot slot="sidebar" aspectRatio="4:3" />
    </aside>
  )
}
\`\`\`

## Pages Router Setup

\`\`\`tsx
// pages/_app.tsx
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
\`\`\`

## SPA Navigation Refresh (App Router)

Slots don't auto-refresh on client navigation. Add this component to your layout:

\`\`\`tsx
// app/components/AdRefresher.tsx
"use client"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function AdRefresher() {
  const pathname = usePathname()
  useEffect(() => {
    window.Adkit?.refreshAll()
  }, [pathname])
  return null
}
\`\`\`

Add \`<AdRefresher />\` inside your \`RootLayout\` body.`,
  },
  {
    slug: "quickstart/astro",
    title: "Astro Quickstart",
    description: "Add Adkit to an Astro site using the vanilla JS SDK or adkit-react in React islands.",
    content: `## Overview
Adkit works in Astro via the vanilla JS CDN script, or via \`adkit-react\` inside React islands.

## Method 1: Vanilla JS (Recommended)

### Step 1: Add script to your layout

\`\`\`html
<!-- src/layouts/Layout.astro -->
---
---
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>{Astro.props.title}</title>
    <script src="https://cdn.adkit.dev/v1.js" defer></script>
  </head>
  <body>
    <slot />
  </body>
</html>
\`\`\`

**Note:** Use a \`src\` attribute (not an inline script) to avoid Astro's bundler processing it.

### Step 2: Add a slot in any .astro page

\`\`\`html
<!-- src/pages/index.astro -->
---
import Layout from "../layouts/Layout.astro"
---
<Layout title="My Site">
  <aside>
    <div
      data-adkit-site="your-site-id"
      data-adkit-slot="sidebar"
      data-adkit-aspect-ratio="4:3"
      data-adkit-price="2500"
    ></div>
  </aside>
</Layout>
\`\`\`

## Method 2: adkit-react in React Islands

If your Astro project has the React integration enabled:

\`\`\`bash
npm install adkit-react
\`\`\`

\`\`\`tsx
// src/components/SidebarAd.tsx
import { AdkitProvider, AdSlot } from "adkit-react"
import "adkit-react/styles.css"

export function SidebarAd() {
  return (
    <AdkitProvider siteId="your-site-id">
      <AdSlot slot="sidebar" aspectRatio="4:3" price={2500} className="w-full" />
    </AdkitProvider>
  )
}
\`\`\`

\`\`\`html
<!-- In your .astro page -->
<SidebarAd client:load />
\`\`\`

Use \`client:visible\` for below-the-fold slots to defer hydration until visible.`,
  },
  {
    slug: "quickstart/wordpress",
    title: "WordPress Quickstart",
    description: "Add Adkit to your WordPress site using Custom HTML blocks, functions.php, or a child theme.",
    content: `## Overview
Three ways to add Adkit to WordPress, from easiest to most robust.

## Method 1: Custom HTML Block (No Coding Required)

### Step 1: Add the script
Install the free **Insert Headers and Footers** plugin. Go to **Settings → Insert Headers and Footers → Scripts in Header** and paste:

\`\`\`html
<script src="https://cdn.adkit.dev/v1.js" defer></script>
\`\`\`

### Step 2: Add a slot
In the block editor, add a **Custom HTML** block and paste:

\`\`\`html
<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
  data-adkit-price="2500"
></div>
\`\`\`

## Method 2: functions.php

Go to **Appearance → Theme File Editor**, open \`functions.php\`, and add at the bottom:

\`\`\`php
function adkit_enqueue_script() {
    wp_enqueue_script(
        'adkit-js',
        'https://cdn.adkit.dev/v1.js',
        array(),
        null,
        true // Load in footer
    );
}
add_action( 'wp_enqueue_scripts', 'adkit_enqueue_script' );
\`\`\`

**Warning:** Changes to the active theme's \`functions.php\` are lost on theme updates. Use a child theme for persistent changes.

## Method 3: Child Theme (Recommended for Longevity)

Create \`wp-content/themes/my-theme-child/\` with these two files:

\`\`\`css
/* style.css */
/*
 Theme Name:   My Theme Child
 Template:     my-theme
*/
\`\`\`

\`\`\`php
<?php
// functions.php
function my_child_enqueue() {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_script('adkit-js', 'https://cdn.adkit.dev/v1.js', array(), null, true);
}
add_action( 'wp_enqueue_scripts', 'my_child_enqueue' );
\`\`\`

Then activate the child theme in **Appearance → Themes**.`,
  },
  {
    slug: "quickstart/webflow",
    title: "Webflow Quickstart",
    description: "Add Adkit to your Webflow site using Project Settings and Embed elements.",
    content: `## Overview
Add Adkit to Webflow using Project Settings for the script and Embed elements for slots. Requires a Webflow paid plan.

## Step 1: Add the Script

In the Webflow Designer: **Project Settings → Custom Code → Footer Code**, paste:

\`\`\`html
<script src="https://cdn.adkit.dev/v1.js" defer></script>
\`\`\`

Use **Footer Code**, not Head Code — the script must run after slot elements exist in the DOM.

## Step 2: Add a Slot via Embed Element

In the **Add Elements** panel, add an **Embed** element (under Components). Double-click to open the code editor, paste:

\`\`\`html
<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
  data-adkit-price="2500"
></div>
\`\`\`

**If Webflow strips \`data-adkit-price\`:** Set it as a Custom Attribute instead — select the element, open the Settings panel (gear icon), scroll to Custom Attributes, add \`data-adkit-price\` with value \`2500\`.

## Step 3: Set Width in Designer

Set the width of the Embed element. Do NOT set a fixed height — the aspect ratio controls height automatically.

| Aspect Ratio | Common Use | Suggested Width |
|---|---|---|
| \`banner\` | Leaderboard | 728px or 100% |
| \`16:9\` | Wide in-content | 100% |
| \`4:3\` | Sidebar | 300px |
| \`1:1\` | Square | 300px |
| \`9:16\` | Vertical | 200px |

## Step 4: Publish and Verify

Click **Publish**. Open your live site in an incognito window — you should see the placeholder. Scripts don't run inside the Webflow Designer preview.`,
  },
  {
    slug: "react/provider",
    title: "<AdkitProvider />",
    description: "Configure the Adkit context provider for your React application.",
    content: `## Overview
\`AdkitProvider\` initializes the Adkit SDK and provides context to all child \`AdSlot\` components.

## Installation

\`\`\`bash
npm install adkit-react
\`\`\`

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| \`siteId\` | \`string\` | Yes | — | Your Adkit site ID |
| \`theme\` | \`"light" \\| "dark" \\| "auto"\` | No | \`"auto"\` | Color theme |
| \`locale\` | \`string\` | No | \`"en-US"\` | Locale for price formatting |

## Basic Example

\`\`\`tsx
import "adkit-react/styles.css"
import { AdkitProvider } from "adkit-react"

function App({ children }) {
  return (
    <AdkitProvider siteId="your-site-id">
      {children}
    </AdkitProvider>
  )
}
\`\`\`

## With Options

\`\`\`tsx
<AdkitProvider siteId="your-site-id" theme="dark" locale="en-GB">
  {children}
</AdkitProvider>
\`\`\`

## Rules
- Only one \`AdkitProvider\` per app
- Place it as high in the component tree as possible
- All \`AdSlot\` components must be descendants of \`AdkitProvider\``,
  },
  {
    slug: "react/adslot",
    title: "<AdSlot />",
    description: "Render an ad slot in your React application.",
    content: `## Overview
\`AdSlot\` renders an ad placement. When the slot has a paid booking, it displays the creative. Otherwise it shows a "Rent this spot" placeholder.

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| \`slot\` | \`string\` | Yes | Unique slot identifier |
| \`aspectRatio\` | \`string\` | No | e.g. \`"16:9"\`, \`"4:3"\`, \`"1:1"\`, \`"9:16"\`, \`"banner"\` |
| \`price\` | \`number\` | No | Daily price in cents (overrides dashboard price) |
| \`className\` | \`string\` | No | Additional CSS classes |
| \`fallback\` | \`ReactNode\` | No | Content to show while loading |
| \`siteId\` | \`string\` | No | Site ID (required if not using AdkitProvider) |

## Example

\`\`\`tsx
import { AdSlot } from "adkit-react"

function Sidebar() {
  return (
    <AdSlot
      slot="sidebar"
      aspectRatio="4:3"
      className="my-4"
    />
  )
}
\`\`\`

## Slot Identifier Naming

Use descriptive, consistent names:
- \`header-banner\` — leaderboard at the top
- \`sidebar\` — standard sidebar placement
- \`in-content-1\` — first in-content placement
- \`footer-leaderboard\` — footer banner

## Without a Provider

\`\`\`tsx
<AdSlot slot="sidebar" siteId="your-site-id" aspectRatio="4:3" />
\`\`\``,
  },
  {
    slug: "react/use-adkit",
    title: "useAdkit Hook",
    description: "Access Adkit state and methods from any component.",
    content: `## Overview
The \`useAdkit\` hook provides access to the Adkit context from any component inside \`AdkitProvider\`.

## Usage

\`\`\`tsx
import { useAdkit } from "adkit-react"

function MyComponent() {
  const { siteId, theme, slots, refresh } = useAdkit()

  return (
    <div>
      <p>Site: {siteId}</p>
      <button onClick={() => refresh()}>Refresh All Slots</button>
    </div>
  )
}
\`\`\`

## Return Value

| Property | Type | Description |
|----------|------|-------------|
| \`siteId\` | \`string\` | Current site ID |
| \`theme\` | \`string\` | Current theme |
| \`slots\` | \`Map<string, Slot>\` | Loaded slot data |
| \`refresh\` | \`(slotId?: string) => void\` | Refresh one or all slots |`,
  },
  {
    slug: "react/theming",
    title: "Theming",
    description: "Customize colors, fonts, and styling for the React SDK.",
    content: `## Theme Prop

Set the theme on \`AdkitProvider\`:

\`\`\`tsx
<AdkitProvider siteId="..." theme="dark">
\`\`\`

Options: \`"light"\`, \`"dark"\`, \`"auto"\` (follows system preference, default).

## CSS Variables

Override these CSS variables to customize colors:

\`\`\`css
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
\`\`\``,
  },
  {
    slug: "js/data-attributes",
    title: "Data Attributes",
    description: "Configure ad slots using HTML data attributes.",
    content: `## Required Attributes

| Attribute | Description |
|-----------|-------------|
| \`data-adkit-site\` | Your site ID |
| \`data-adkit-slot\` | Unique slot identifier |

## Optional Attributes

| Attribute | Description | Default |
|-----------|-------------|---------|
| \`data-adkit-aspect-ratio\` | \`"16:9"\`, \`"4:3"\`, \`"1:1"\`, \`"9:16"\`, \`"banner"\` | \`"auto"\` |
| \`data-adkit-price\` | Daily price in cents | Dashboard price |
| \`data-adkit-theme\` | \`"light"\`, \`"dark"\`, or \`"auto"\` | \`"auto"\` |
| \`data-adkit-lazy\` | \`"true"\` to enable lazy loading | \`"false"\` |

## Full Example

\`\`\`html
<div
  data-adkit-site="abc123"
  data-adkit-slot="header-banner"
  data-adkit-aspect-ratio="banner"
  data-adkit-price="5000"
  data-adkit-theme="dark"
  data-adkit-lazy="true"
></div>
\`\`\`

## Notes
- \`data-adkit-price\` is in **cents** (2500 = $25/day)
- Slot identifiers are case-sensitive, no spaces
- Use consistent slot identifiers across pages`,
  },
  {
    slug: "js/api",
    title: "JavaScript API",
    description: "Programmatically control Adkit slots with JavaScript.",
    content: `## Global Object

After the script loads, \`window.Adkit\` is available:

\`\`\`javascript
window.Adkit.refresh("sidebar")
window.Adkit.refreshAll()
window.Adkit.destroy("sidebar")
\`\`\`

## Methods

| Method | Description |
|--------|-------------|
| \`refresh(slotId)\` | Reload a specific slot |
| \`refreshAll()\` | Reload all slots on the page |
| \`destroy(slotId)\` | Remove a slot from the DOM |
| \`on(event, callback)\` | Listen for slot events |

## Events

\`\`\`javascript
window.Adkit.on("impression", (data) => {
  console.log("Impression:", data.slotId)
})

window.Adkit.on("click", (data) => {
  console.log("Click:", data.slotId)
})

window.Adkit.on("booking", (data) => {
  console.log("Booking started:", data.slotId)
})
\`\`\`

## SPA Usage

Call \`refreshAll()\` after client-side navigation to re-initialize slots:

\`\`\`javascript
router.afterEach(() => {
  window.Adkit?.refreshAll()
})
\`\`\``,
  },
  {
    slug: "how-it-works",
    title: "How It Works",
    description: "Understand the Adkit model: fixed-price slots, self-serve booking, and publisher approval.",
    content: `## The Adkit Model

Adkit replaces programmatic advertising (CPM/RTB auctions) with a direct marketplace. Publishers set fixed daily prices. Advertisers book and pay upfront.

## Key Concepts

### Fixed-Price Slots
You define ad slots with a daily rate. No bidding, no auctions. Advertisers see the price and book for specific dates.

### Self-Serve Booking
Empty slots display a "Rent this spot" placeholder. When a visitor clicks, they're guided through booking and payment — no publisher involvement until approval.

### Publisher Approval
Every ad submission goes through your approval queue. You review the creative and destination URL before anything goes live.

### Automatic Payouts
Payment processing via Stripe. You receive 85% of each booking, paid automatically. If your site has downtime, advertisers receive prorated refunds.

## Revenue Share

| Party | Share |
|-------|-------|
| Publisher | **85%** |
| Adkit | 15% |

Compare to AdSense (~68% to publishers).

## Booking Flow

1. **Publisher** creates slots and sets daily prices in the dashboard
2. **Visitor** sees the "Rent this spot" placeholder in an empty slot
3. **Advertiser** selects dates, uploads creative, and pays
4. **Publisher** reviews and approves or rejects the ad
5. **Ad goes live** on the booked dates
6. **Publisher** receives payout via Stripe`,
  },
  {
    slug: "publisher/creating-slots",
    title: "Creating Slots",
    description: "Define ad placements and set pricing.",
    content: `## Create a Slot

1. Go to **Slots** in your dashboard
2. Click **New Slot**
3. Enter a unique identifier (e.g. \`sidebar\`, \`header-banner\`)
4. Set the daily price in USD
5. Choose dimensions or aspect ratio

## Pricing Tips

- Start lower and raise prices as demand grows
- Price based on your traffic and placement visibility
- Above-the-fold placements command higher rates
- Sidebar slots typically price at $15–$50/day for mid-size blogs

## Slot Naming

Use descriptive, consistent names:
- \`header-banner\` — top-of-page leaderboard
- \`sidebar\` — standard sidebar
- \`in-content-1\` — first mid-article slot
- \`footer\` — bottom of page`,
  },
  {
    slug: "publisher/approvals",
    title: "Approvals",
    description: "Review and approve ad submissions before they go live.",
    content: `## Approval Queue

When an advertiser books a slot, their submission appears in your approval queue. You have 24 hours to respond (otherwise it auto-approves).

## Actions

- **Approve** — Ad goes live on the booked dates
- **Reject** — Advertiser is fully refunded, ad doesn't run
- **Request Changes** — Ask the advertiser to modify their creative

## Review Checklist

- Creative quality (resolution, design)
- Destination URL (safe, relevant to your audience)
- Brand alignment (fits your site's content)
- No misleading claims

## Notifications

You'll receive an email notification for each new submission. Configure notification preferences in **Settings → Notifications**.`,
  },
  {
    slug: "publisher/payouts",
    title: "Payouts",
    description: "Connect Stripe and receive automatic payouts.",
    content: `## Connect Stripe

1. Go to **Settings → Payouts**
2. Click **Connect Stripe**
3. Complete Stripe onboarding (takes ~5 minutes)

You must connect Stripe before you can receive bookings.

## Payout Schedule

Payouts are processed **weekly on Mondays** for the previous week's completed ad runs.

## Revenue Share

You receive **85%** of each booking. Adkit retains 15% as a platform fee.

## Downtime Refunds

If your site is unreachable during a booked campaign, the advertiser receives an automatic prorated refund for the downtime period. Your payout is reduced proportionally.

## Payout History

View all past payouts and download statements from **Settings → Payouts → History**.`,
  },
  {
    slug: "publisher/analytics",
    title: "Analytics",
    description: "Track impressions, clicks, CTR, and revenue.",
    content: `## Metrics

| Metric | Description |
|--------|-------------|
| Impressions | Times an ad entered the viewport (50% visible, 1+ second) |
| Clicks | Times the ad was clicked |
| CTR | Click-through rate (clicks / impressions) |
| Revenue | Total earnings (your 85% share) |
| Fill Rate | % of time a slot had a paid ad vs. showing placeholder |

## Date Filters

- Today
- Last 7 days
- Last 30 days
- Custom date range

## Per-Slot Breakdown

Filter analytics by individual slot to understand which placements perform best.`,
  },
  {
    slug: "advertiser/booking",
    title: "Booking an Ad",
    description: "Book ad space on publisher sites.",
    content: `## How to Book

1. Visit a site with Adkit slots
2. Click on an empty "Rent this spot" placeholder
3. Select your desired dates in the calendar
4. Upload your creative (image)
5. Enter payment details (processed securely via Stripe)
6. Submit for publisher approval

## Creative Requirements

- **Formats:** PNG, JPG, GIF, WebP
- **Max file size:** 2MB
- **Dimensions:** Match the slot's aspect ratio
- **Content:** No misleading claims, adult content, or malware

## After Submission

The publisher typically reviews within 24 hours. You'll receive an email when approved or rejected. If rejected, you're fully refunded.

## Cancellations

Contact the publisher directly for cancellation requests. Refund eligibility depends on how far in advance you cancel.`,
  },
  {
    slug: "concepts/pricing",
    title: "Server-Authoritative Pricing",
    description: "How Adkit protects publishers from price manipulation.",
    content: `## The Problem

If slot prices are set client-side (in JavaScript or HTML attributes), malicious users could modify them in the browser before checkout — paying $1 for a $50/day slot.

## Adkit's Solution

Adkit uses **server-authoritative pricing**:

1. Publisher sets the price in the dashboard (stored server-side)
2. The SDK fetches the current price from Adkit's API to display it
3. At checkout, Adkit's server validates the price again
4. Payment is processed at the server-verified price

The \`data-adkit-price\` attribute and the \`price\` prop are **display hints only** — the actual charged amount is always determined server-side.

## What This Means for Publishers

- Your dashboard price always wins
- Client-side attributes are for display convenience only
- No risk of price manipulation by visitors`,
  },
  {
    slug: "concepts/slot-identity",
    title: "Slot Identity",
    description: "How slot identifiers work across your site.",
    content: `## Slot Identifiers

Each slot has a string identifier that must be unique within your site.

**Rules:**
- Unique per site (not globally)
- Case-sensitive (\`Sidebar\` ≠ \`sidebar\`)
- No spaces (use hyphens: \`in-content-1\`)
- Should be descriptive

## Consistency Across Pages

Use the **same slot ID** every time the same placement appears. For example, if you have a sidebar ad on every blog post page, all of them should use \`data-adkit-slot="sidebar"\`.

This ensures:
- Unified pricing (one price for the slot across all pages)
- Consolidated analytics
- Advertisers book "the sidebar slot" not individual page instances

## When to Use Different IDs

Use different IDs for genuinely different placements:
- \`sidebar\` vs \`in-content-1\` — different positions
- \`homepage-banner\` vs \`article-banner\` — meaningfully different placements with different pricing`,
  },
  {
    slug: "api/serve",
    title: "Serve API",
    description: "API endpoint for fetching ad creatives.",
    content: `## Endpoint

\`\`\`
GET https://api.adkit.dev/v1/serve
\`\`\`

## Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| \`site\` | string | Yes | Your site ID |
| \`slot\` | string | Yes | Slot identifier |

## Response

\`\`\`json
{
  "status": "filled",
  "creative": {
    "imageUrl": "https://cdn.adkit.dev/creatives/abc123.png",
    "destinationUrl": "https://advertiser.com",
    "impressionId": "imp_abc123"
  }
}
\`\`\`

## Status Values

- \`filled\` — Active booking exists, render the creative
- \`empty\` — No active booking, show the "Rent this spot" placeholder

## Usage Note

The SDK calls this automatically. You only need this endpoint if you're building a custom integration outside the provided SDKs.`,
  },
  {
    slug: "api/events",
    title: "Events API",
    description: "API endpoint for tracking impressions and clicks.",
    content: `## Impression Tracking

\`\`\`
POST https://api.adkit.dev/v1/events/impression
\`\`\`

## Click Tracking

\`\`\`
POST https://api.adkit.dev/v1/events/click
\`\`\`

## Request Body

\`\`\`json
{
  "impressionId": "imp_abc123",
  "timestamp": "2024-01-15T10:30:00Z"
}
\`\`\`

## Notes

The SDK tracks impressions and clicks automatically using the Intersection Observer API for viewability. You only need these endpoints for custom integrations.

Impressions are counted when:
- At least 50% of the ad is visible in the viewport
- The ad has been visible for at least 1 continuous second`,
  },
]

/** Build a short index string for the system prompt */
export const DOC_ARTICLE_INDEX = SERVER_DOC_ARTICLES.map(
  (a) => `- ${a.slug}: ${a.title} — ${a.description}`
).join("\n")
