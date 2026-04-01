import type React from "react"
import { ReactInstallationPage } from "@/components/docs/pages/react-installation"
import { QuickstartOverviewPage } from "@/components/docs/pages/quickstart-overview"
import { QuickstartJavaScriptPage } from "@/components/docs/pages/quickstart-javascript"
import { QuickstartReactPage } from "@/components/docs/pages/quickstart-react"
import { QuickstartNextjsPage } from "@/components/docs/pages/quickstart-nextjs"
import { QuickstartAstroPage } from "@/components/docs/pages/quickstart-astro"
import { QuickstartWordPressPage } from "@/components/docs/pages/quickstart-wordpress"
import { QuickstartWebflowPage } from "@/components/docs/pages/quickstart-webflow"

export interface DocPage {
  slug: string
  title: string
  description: string
  content?: string
  component?: React.ComponentType
  isCodeTitle?: boolean
}

export const docPages: DocPage[] = [
  // Quickstart
  {
    slug: "quickstart/javascript",
    title: "JavaScript",
    description: "Add Adkit to any website using a single script tag. No build step required.",
    component: QuickstartJavaScriptPage,
  },
  {
    slug: "quickstart/react",
    title: "React",
    description: "Install adkit-react and add ad slots to your React app.",
    component: QuickstartReactPage,
  },
  {
    slug: "quickstart/nextjs",
    title: "Next.js",
    description: "Install adkit-react and add slots to your Next.js app. Supports App Router and Pages Router.",
    component: QuickstartNextjsPage,
  },
  {
    slug: "quickstart/astro",
    title: "Astro",
    description: "Add Adkit to an Astro site using the vanilla JS SDK or adkit-react in React islands.",
    component: QuickstartAstroPage,
  },
  {
    slug: "quickstart/wordpress",
    title: "WordPress",
    description: "Add Adkit to your WordPress site using Custom HTML blocks, functions.php, or a child theme.",
    component: QuickstartWordPressPage,
  },
  {
    slug: "quickstart/webflow",
    title: "Webflow",
    description: "Add Adkit to your Webflow site using Project Settings and Embed elements.",
    component: QuickstartWebflowPage,
  },
  // Get Started
  {
    slug: "quickstart",
    title: "Quickstarts",
    description: "Get Adkit running on your site in under 10 minutes.",
    component: QuickstartOverviewPage,
  },
  {
    slug: "how-it-works",
    title: "How It Works",
    description: "Understand the Adkit model: fixed-price slots, self-serve booking, and publisher approval.",
    content: `## The Adkit Model

Adkit replaces programmatic advertising with a direct marketplace. Publishers set fixed daily prices, and advertisers book slots directly through your website.

## Key Concepts

### Fixed-Price Slots

You define ad slots on your site with a daily price. No bidding, no auctions, no real-time optimization. Advertisers see the price upfront and book for specific dates.

### Self-Serve Booking

Empty slots display a placeholder inviting visitors to book. When someone clicks, they see your pricing and can purchase the slot with a credit card. Demand comes from your own audience.

### Publisher Approval

Every ad submission goes through your approval queue. You review the creative, destination URL, and advertiser details before anything goes live. Your site, your rules.

### Automatic Payouts

Adkit handles payment processing via Stripe. You receive 85% of each booking, paid out automatically. If a slot has downtime (your site is unreachable), advertisers are refunded proportionally.

## Revenue Share

| Party | Share |
|-------|-------|
| Publisher | 85% |
| Adkit | 15% |

Compare this to AdSense, where publishers typically keep around 68%.

## Flow

1. **Publisher** creates slots and sets prices
2. **Visitor** sees empty slot with booking CTA
3. **Advertiser** books dates and uploads creative
4. **Publisher** approves or rejects the ad
5. **Ad goes live** on the booked dates
6. **Publisher** receives payout via Stripe`,
  },
  // React SDK
  {
    slug: "react/installation",
    title: "Installation",
    description: "Install the adkit-react package and add it to your React or Next.js project.",
    component: ReactInstallationPage,
  },
  {
    slug: "react/provider",
    title: "<AdkitProvider />",
    description: "Configure the Adkit context provider for your React application.",
    isCodeTitle: true,
    content: `## Overview

\`AdkitProvider\` initializes the Adkit SDK and provides context to all child components.

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| \`siteId\` | \`string\` | Yes | Your Adkit site ID |
| \`theme\` | \`"light" \\| "dark" \\| "auto"\` | No | Color theme (default: \`"auto"\`) |
| \`locale\` | \`string\` | No | Locale for formatting (default: \`"en-US"\`) |

## Example

\`\`\`tsx
import { AdkitProvider } from "adkit-react"

function App({ children }) {
  return (
    <AdkitProvider 
      siteId="your-site-id"
      theme="dark"
      locale="en-GB"
    >
      {children}
    </AdkitProvider>
  )
}
\`\`\`

## Notes

- Only one \`AdkitProvider\` should exist in your app
- Place it as high in the tree as possible
- All \`AdSlot\` components must be descendants of \`AdkitProvider\``,
  },
  {
    slug: "react/adslot",
    title: "<AdSlot />",
    description: "Render an ad slot in your React application.",
    isCodeTitle: true,
    content: `## Overview

\`AdSlot\` renders an ad placement. It displays either a paid creative or a booking placeholder.

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| \`slot\` | \`string\` | Yes | Unique slot identifier |
| \`aspectRatio\` | \`string\` | No | Aspect ratio (e.g., \`"16:9"\`, \`"4:3"\`) |
| \`className\` | \`string\` | No | Additional CSS classes |
| \`fallback\` | \`ReactNode\` | No | Content to show while loading |

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

## Slot Identifiers

Slot identifiers must be unique within your site. Use descriptive names like:

- \`header-banner\`
- \`sidebar\`
- \`in-content-1\`
- \`footer-leaderboard\``,
  },
  {
    slug: "react/booking-modal",
    title: "<BookingModal />",
    description: "Customize the booking modal that appears when visitors click to book a slot.",
    isCodeTitle: true,
    content: `## Overview

The \`BookingModal\` component controls the booking flow UI. It's rendered automatically when a visitor clicks to book, but you can customize its appearance.

## Props

| Prop | Type | Description |
|------|------|-------------|
| \`onClose\` | \`() => void\` | Called when modal is dismissed |
| \`onSuccess\` | \`(booking: Booking) => void\` | Called after successful booking |

## Customization

Content coming soon.`,
  },
  {
    slug: "react/use-adkit",
    title: "useAdkit Hook",
    description: "Access Adkit state and methods from any component.",
    content: `## Overview

The \`useAdkit\` hook provides access to Adkit context from any component within the provider.

## Usage

\`\`\`tsx
import { useAdkit } from "adkit-react"

function MyComponent() {
  const { siteId, theme, slots } = useAdkit()
  
  return <div>Site: {siteId}</div>
}
\`\`\`

## Return Value

| Property | Type | Description |
|----------|------|-------------|
| \`siteId\` | \`string\` | Current site ID |
| \`theme\` | \`string\` | Current theme |
| \`slots\` | \`Map<string, Slot>\` | Loaded slot data |
| \`refresh\` | \`() => void\` | Force refresh slot data |

Content coming soon.`,
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

Options:
- \`"light"\` - Light mode
- \`"dark"\` - Dark mode  
- \`"auto"\` - Follow system preference (default)

## CSS Variables

Override CSS variables to customize colors:

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
\`\`\`

Content coming soon.`,
  },
  {
    slug: "react/custom-styling",
    title: "Custom Styling",
    description: "Apply custom CSS classes and styles to Adkit components.",
    content: `## className Prop

All Adkit components accept a \`className\` prop:

\`\`\`tsx
<AdSlot slot="sidebar" className="my-custom-class" />
\`\`\`

## CSS Selectors

Target Adkit elements with these selectors:

\`\`\`css
.adkit-slot { }
.adkit-slot-placeholder { }
.adkit-slot-creative { }
.adkit-booking-modal { }
\`\`\`

Content coming soon.`,
  },
  // JavaScript SDK
  {
    slug: "js/installation",
    title: "Installation",
    description: "Add the Adkit script to any website.",
    content: `## Add the Script

Add this script tag to your HTML, ideally in the \`<head>\`:

\`\`\`html
<script src="https://cdn.adkit.dev/v1.js" defer></script>
\`\`\`

## Add a Slot

Place a div with data attributes where you want the ad:

\`\`\`html
<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
></div>
\`\`\`

## Verify Installation

Open your browser console. You should see:

\`\`\`
[Adkit] Initialized with site: your-site-id
\`\`\`

## CDN

The script is served from Adkit's global CDN with automatic failover. Average load time is under 50ms.`,
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
| \`data-adkit-aspect-ratio\` | Aspect ratio (e.g., \`"16:9"\`) | \`"auto"\` |
| \`data-adkit-theme\` | \`"light"\`, \`"dark"\`, or \`"auto"\` | \`"auto"\` |
| \`data-adkit-lazy\` | Enable lazy loading | \`"true"\` |

## Example

\`\`\`html
<div
  data-adkit-site="abc123"
  data-adkit-slot="header-banner"
  data-adkit-aspect-ratio="728:90"
  data-adkit-theme="dark"
  data-adkit-lazy="true"
></div>
\`\`\``,
  },
  {
    slug: "js/api",
    title: "JavaScript API",
    description: "Programmatically control Adkit slots with JavaScript.",
    content: `## Global Object

After the script loads, \`window.Adkit\` is available:

\`\`\`javascript
window.Adkit.refresh("sidebar")
window.Adkit.destroy("sidebar")
\`\`\`

## Methods

| Method | Description |
|--------|-------------|
| \`refresh(slotId)\` | Reload a specific slot |
| \`refreshAll()\` | Reload all slots |
| \`destroy(slotId)\` | Remove a slot |
| \`on(event, callback)\` | Listen for events |

## Events

\`\`\`javascript
window.Adkit.on("impression", (data) => {
  console.log("Impression:", data.slotId)
})

window.Adkit.on("click", (data) => {
  console.log("Click:", data.slotId)
})
\`\`\`

Content coming soon.`,
  },
  {
    slug: "js/theming",
    title: "Theming",
    description: "Customize the appearance of JavaScript SDK slots.",
    content: `## Theme Attribute

Set the theme per slot:

\`\`\`html
<div
  data-adkit-site="..."
  data-adkit-slot="sidebar"
  data-adkit-theme="dark"
></div>
\`\`\`

## Global Theme

Set a global theme via JavaScript:

\`\`\`javascript
window.Adkit.setTheme("dark")
\`\`\`

Content coming soon.`,
  },
  {
    slug: "js/custom-styling",
    title: "Custom Styling",
    description: "Apply custom CSS to JavaScript SDK slots.",
    content: `## CSS Classes

Adkit adds these classes to slot elements:

\`\`\`css
.adkit-slot { }
.adkit-slot--loading { }
.adkit-slot--empty { }
.adkit-slot--filled { }
\`\`\`

## Custom Styles

\`\`\`css
.adkit-slot {
  border-radius: 8px;
  overflow: hidden;
}

.adkit-slot--empty {
  background: #f5f5f5;
}
\`\`\`

Content coming soon.`,
  },
  // Publisher Guide
  {
    slug: "publisher/dashboard",
    title: "Dashboard Overview",
    description: "Navigate the Adkit publisher dashboard.",
    content: `## Overview

The publisher dashboard at [adkit.dev/dashboard](https://adkit.dev/dashboard) is your control center for managing ad slots, reviewing submissions, and tracking revenue.

## Sections

- **Overview** - Revenue summary, recent activity
- **Slots** - Create and manage ad placements
- **Approvals** - Review pending ad submissions
- **Analytics** - Impressions, clicks, CTR, revenue
- **Payouts** - Stripe connection, payout history
- **Settings** - Site configuration, team members

Content coming soon.`,
  },
  {
    slug: "publisher/creating-slots",
    title: "Creating Slots",
    description: "Define ad placements and set pricing.",
    content: `## Create a Slot

1. Go to **Slots** in your dashboard
2. Click **New Slot**
3. Enter a unique identifier (e.g., \`sidebar\`)
4. Set the daily price
5. Choose dimensions or aspect ratio

## Pricing

Set a fixed daily price in USD. Advertisers book by the day and pay upfront.

## Best Practices

- Use descriptive slot names
- Price based on traffic and placement visibility
- Start lower and increase as demand grows

Content coming soon.`,
  },
  {
    slug: "publisher/approvals",
    title: "Approvals",
    description: "Review and approve ad submissions before they go live.",
    content: `## Approval Queue

When an advertiser books a slot, their submission appears in your approval queue. You can:

- **Approve** - Ad goes live on the booked dates
- **Reject** - Advertiser is refunded, ad doesn't run
- **Request Changes** - Ask for creative modifications

## Review Checklist

- Creative quality and appropriateness
- Destination URL safety
- Brand alignment

Content coming soon.`,
  },
  {
    slug: "publisher/analytics",
    title: "Analytics",
    description: "Track impressions, clicks, CTR, and revenue.",
    content: `## Metrics

| Metric | Description |
|--------|-------------|
| Impressions | Times the ad was displayed |
| Clicks | Times the ad was clicked |
| CTR | Click-through rate |
| Revenue | Total earnings |
| Fill Rate | % of time slots had paid ads |

## Date Range

Filter analytics by:
- Today
- Last 7 days
- Last 30 days
- Custom range

Content coming soon.`,
  },
  {
    slug: "publisher/discounts",
    title: "Discounts",
    description: "Create discount codes for advertisers.",
    content: `## Create a Discount

1. Go to **Settings > Discounts**
2. Click **New Discount**
3. Set the code, percentage, and expiration

## Discount Types

- **Percentage off** - e.g., 20% off
- **Fixed amount** - e.g., $10 off

Content coming soon.`,
  },
  {
    slug: "publisher/payouts",
    title: "Payouts",
    description: "Connect Stripe and receive automatic payouts.",
    content: `## Connect Stripe

1. Go to **Settings > Payouts**
2. Click **Connect Stripe**
3. Complete Stripe onboarding

## Payout Schedule

Payouts are processed weekly on Mondays for the previous week's earnings.

## Revenue Share

You receive 85% of each booking. Adkit retains 15%.

Content coming soon.`,
  },
  {
    slug: "publisher/settings",
    title: "Settings",
    description: "Configure your site and team settings.",
    content: `## Site Settings

- Site name and URL
- Default slot pricing
- Notification preferences

## Team Members

Invite team members with different roles:
- **Owner** - Full access
- **Admin** - Manage slots and approvals
- **Viewer** - Read-only analytics

Content coming soon.`,
  },
  // Advertiser Guide
  {
    slug: "advertiser/booking",
    title: "Booking an Ad",
    description: "Book ad space on publisher sites.",
    content: `## How to Book

1. Visit a site with Adkit slots
2. Click on an empty slot placeholder
3. Select your dates
4. Upload your creative
5. Enter payment details
6. Submit for publisher approval

## Creative Requirements

- Image formats: PNG, JPG, GIF, WebP
- Max file size: 2MB
- Match the slot's aspect ratio

Content coming soon.`,
  },
  {
    slug: "advertiser/campaigns",
    title: "Campaign Management",
    description: "Manage your active and upcoming ad campaigns.",
    content: `## Advertiser Dashboard

Access your campaigns at [adkit.dev/advertiser](https://adkit.dev/advertiser).

## Campaign Status

- **Pending** - Awaiting publisher approval
- **Approved** - Scheduled to run
- **Live** - Currently displaying
- **Completed** - Campaign ended
- **Rejected** - Publisher declined

Content coming soon.`,
  },
  {
    slug: "advertiser/billing",
    title: "Billing",
    description: "Manage payment methods and view invoices.",
    content: `## Payment Methods

Add credit cards in your account settings. Payments are processed via Stripe.

## Invoices

Download invoices for completed bookings from your dashboard.

## Refunds

If a publisher's site has downtime during your campaign, you receive an automatic prorated refund.

Content coming soon.`,
  },
  // API Reference
  {
    slug: "api/serve",
    title: "Serve API",
    description: "API endpoint for fetching ad creatives.",
    content: `## Endpoint

\`\`\`
GET https://api.adkit.dev/v1/serve
\`\`\`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| \`site\` | string | Yes | Site ID |
| \`slot\` | string | Yes | Slot identifier |

## Response

\`\`\`json
{
  "status": "filled",
  "creative": {
    "imageUrl": "https://cdn.adkit.dev/...",
    "destinationUrl": "https://example.com",
    "impressionId": "imp_abc123"
  }
}
\`\`\`

## Status Values

- \`filled\` - Paid ad to display
- \`empty\` - No active booking, show placeholder

Content coming soon.`,
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

Content coming soon.`,
  },
  // Concepts
  {
    slug: "concepts/pricing",
    title: "Server-Authoritative Pricing",
    description: "How Adkit protects publishers from price manipulation.",
    content: `## The Problem

Client-side pricing can be manipulated. If prices are set in JavaScript, attackers can modify them before checkout.

## The Solution

Adkit uses server-authoritative pricing. Prices are stored on our servers and validated at checkout. The client never controls the price.

## How It Works

1. Publisher sets price in dashboard (server-side)
2. SDK fetches price from API for display
3. At checkout, server validates the price again
4. Payment is processed at the server-verified price

This prevents any client-side price manipulation.`,
  },
  {
    slug: "concepts/slot-identity",
    title: "Slot Identity",
    description: "How slot identifiers work across your site.",
    content: `## Slot Identifiers

Each slot has a unique identifier within your site. This ID:

- Must be unique per site
- Should be descriptive (e.g., \`sidebar\`, \`header-banner\`)
- Is case-sensitive
- Cannot contain spaces

## Consistency

Use the same slot ID across all pages where that slot appears. This ensures:

- Consistent pricing
- Unified analytics
- Proper ad delivery

Content coming soon.`,
  },
  {
    slug: "concepts/event-tracking",
    title: "Event Tracking",
    description: "How Adkit tracks impressions and clicks.",
    content: `## Automatic Tracking

The SDK automatically tracks:

- **Impressions** - When an ad enters the viewport
- **Clicks** - When a user clicks the ad

## Viewability

Impressions are only counted when:

- At least 50% of the ad is visible
- The ad has been visible for at least 1 second

## Privacy

Adkit does not use cookies for tracking. We use anonymous impression IDs that cannot identify individual users.

Content coming soon.`,
  },
  // Changelog
  {
    slug: "changelog",
    title: "Changelog",
    description: "Recent updates and releases.",
    content: `## Changelog

Release notes and updates will be posted here.

Content coming soon.`,
  },
]

export function getDocPage(slug: string): DocPage | undefined {
  return docPages.find((page) => page.slug === slug)
}
