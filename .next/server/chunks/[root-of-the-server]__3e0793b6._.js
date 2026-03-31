module.exports=[93695,(e,t,i)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},70406,(e,t,i)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},18622,(e,t,i)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,i)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,i)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,i)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},2047,(e,t,i)=>{"use strict";t.exports=e.r(98943).vendored["react-rsc"].ReactServerDOMTurbopackServer},69619,e=>{"use strict";let t=(0,e.i(2047).registerClientReference)(function(){throw Error("Attempted to call ReactInstallationPage() from the server but ReactInstallationPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/adkit-docs/components/docs/pages/react-installation.tsx <module evaluation>","ReactInstallationPage");e.s(["ReactInstallationPage",0,t])},74178,e=>{"use strict";let t=(0,e.i(2047).registerClientReference)(function(){throw Error("Attempted to call ReactInstallationPage() from the server but ReactInstallationPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/adkit-docs/components/docs/pages/react-installation.tsx","ReactInstallationPage");e.s(["ReactInstallationPage",0,t])},63122,e=>{"use strict";e.i(69619);var t=e.i(74178);e.n(t)},41590,e=>{"use strict";let t=[{slug:"quickstart",title:"Quickstart",description:"Get Adkit running on your site in under 10 minutes.",content:`## Install the SDK

Choose your preferred installation method:

### JavaScript (Recommended for most sites)

Add the Adkit script to your HTML:

\`\`\`html
<script src="https://cdn.adkit.dev/v1.js" defer></script>
\`\`\`

### React / Next.js

Install the React package:

\`\`\`bash
npm install adkit-react
\`\`\`

## Add Your First Slot

### JavaScript

\`\`\`html
<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
></div>
\`\`\`

### React

\`\`\`tsx
import { AdkitProvider, AdSlot } from "adkit-react"
import "adkit-react/styles.css"

function App() {
  return (
    <AdkitProvider siteId="your-site-id">
      <AdSlot slot="sidebar" aspectRatio="4:3" />
    </AdkitProvider>
  )
}
\`\`\`

## Get Your Site ID

1. Sign up at [adkit.dev](https://adkit.dev)
2. Create a new site in your dashboard
3. Copy your site ID from the settings page

## Next Steps

- Configure your slot pricing in the [Publisher Dashboard](/docs/publisher/dashboard)
- Customize the appearance with [Theming](/docs/react/theming)
- Learn about [How It Works](/docs/how-it-works)`},{slug:"how-it-works",title:"How It Works",description:"Understand the Adkit model: fixed-price slots, self-serve booking, and publisher approval.",content:`## The Adkit Model

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
6. **Publisher** receives payout via Stripe`},{slug:"react/installation",title:"Installation",description:"Install the adkit-react package and add it to your React or Next.js project.",component:e.i(63122).ReactInstallationPage},{slug:"react/provider",title:"AdkitProvider",description:"Configure the Adkit context provider for your React application.",content:`## Overview

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
- All \`AdSlot\` components must be descendants of \`AdkitProvider\``},{slug:"react/adslot",title:"AdSlot",description:"Render an ad slot in your React application.",content:`## Overview

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
- \`footer-leaderboard\``},{slug:"react/booking-modal",title:"BookingModal",description:"Customize the booking modal that appears when visitors click to book a slot.",content:`## Overview

The \`BookingModal\` component controls the booking flow UI. It's rendered automatically when a visitor clicks to book, but you can customize its appearance.

## Props

| Prop | Type | Description |
|------|------|-------------|
| \`onClose\` | \`() => void\` | Called when modal is dismissed |
| \`onSuccess\` | \`(booking: Booking) => void\` | Called after successful booking |

## Customization

Content coming soon.`},{slug:"react/use-adkit",title:"useAdkit Hook",description:"Access Adkit state and methods from any component.",content:`## Overview

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

Content coming soon.`},{slug:"react/theming",title:"Theming",description:"Customize colors, fonts, and styling for the React SDK.",content:`## Theme Prop

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

Content coming soon.`},{slug:"react/custom-styling",title:"Custom Styling",description:"Apply custom CSS classes and styles to Adkit components.",content:`## className Prop

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

Content coming soon.`},{slug:"js/installation",title:"Installation",description:"Add the Adkit script to any website.",content:`## Add the Script

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

The script is served from Adkit's global CDN with automatic failover. Average load time is under 50ms.`},{slug:"js/data-attributes",title:"Data Attributes",description:"Configure ad slots using HTML data attributes.",content:`## Required Attributes

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
\`\`\``},{slug:"js/api",title:"JavaScript API",description:"Programmatically control Adkit slots with JavaScript.",content:`## Global Object

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

Content coming soon.`},{slug:"js/theming",title:"Theming",description:"Customize the appearance of JavaScript SDK slots.",content:`## Theme Attribute

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

Content coming soon.`},{slug:"js/custom-styling",title:"Custom Styling",description:"Apply custom CSS to JavaScript SDK slots.",content:`## CSS Classes

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

Content coming soon.`},{slug:"publisher/dashboard",title:"Dashboard Overview",description:"Navigate the Adkit publisher dashboard.",content:`## Overview

The publisher dashboard at [adkit.dev/dashboard](https://adkit.dev/dashboard) is your control center for managing ad slots, reviewing submissions, and tracking revenue.

## Sections

- **Overview** - Revenue summary, recent activity
- **Slots** - Create and manage ad placements
- **Approvals** - Review pending ad submissions
- **Analytics** - Impressions, clicks, CTR, revenue
- **Payouts** - Stripe connection, payout history
- **Settings** - Site configuration, team members

Content coming soon.`},{slug:"publisher/creating-slots",title:"Creating Slots",description:"Define ad placements and set pricing.",content:`## Create a Slot

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

Content coming soon.`},{slug:"publisher/approvals",title:"Approvals",description:"Review and approve ad submissions before they go live.",content:`## Approval Queue

When an advertiser books a slot, their submission appears in your approval queue. You can:

- **Approve** - Ad goes live on the booked dates
- **Reject** - Advertiser is refunded, ad doesn't run
- **Request Changes** - Ask for creative modifications

## Review Checklist

- Creative quality and appropriateness
- Destination URL safety
- Brand alignment

Content coming soon.`},{slug:"publisher/analytics",title:"Analytics",description:"Track impressions, clicks, CTR, and revenue.",content:`## Metrics

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

Content coming soon.`},{slug:"publisher/discounts",title:"Discounts",description:"Create discount codes for advertisers.",content:`## Create a Discount

1. Go to **Settings > Discounts**
2. Click **New Discount**
3. Set the code, percentage, and expiration

## Discount Types

- **Percentage off** - e.g., 20% off
- **Fixed amount** - e.g., $10 off

Content coming soon.`},{slug:"publisher/payouts",title:"Payouts",description:"Connect Stripe and receive automatic payouts.",content:`## Connect Stripe

1. Go to **Settings > Payouts**
2. Click **Connect Stripe**
3. Complete Stripe onboarding

## Payout Schedule

Payouts are processed weekly on Mondays for the previous week's earnings.

## Revenue Share

You receive 85% of each booking. Adkit retains 15%.

Content coming soon.`},{slug:"publisher/settings",title:"Settings",description:"Configure your site and team settings.",content:`## Site Settings

- Site name and URL
- Default slot pricing
- Notification preferences

## Team Members

Invite team members with different roles:
- **Owner** - Full access
- **Admin** - Manage slots and approvals
- **Viewer** - Read-only analytics

Content coming soon.`},{slug:"advertiser/booking",title:"Booking an Ad",description:"Book ad space on publisher sites.",content:`## How to Book

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

Content coming soon.`},{slug:"advertiser/campaigns",title:"Campaign Management",description:"Manage your active and upcoming ad campaigns.",content:`## Advertiser Dashboard

Access your campaigns at [adkit.dev/advertiser](https://adkit.dev/advertiser).

## Campaign Status

- **Pending** - Awaiting publisher approval
- **Approved** - Scheduled to run
- **Live** - Currently displaying
- **Completed** - Campaign ended
- **Rejected** - Publisher declined

Content coming soon.`},{slug:"advertiser/billing",title:"Billing",description:"Manage payment methods and view invoices.",content:`## Payment Methods

Add credit cards in your account settings. Payments are processed via Stripe.

## Invoices

Download invoices for completed bookings from your dashboard.

## Refunds

If a publisher's site has downtime during your campaign, you receive an automatic prorated refund.

Content coming soon.`},{slug:"api/serve",title:"Serve API",description:"API endpoint for fetching ad creatives.",content:`## Endpoint

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

Content coming soon.`},{slug:"api/events",title:"Events API",description:"API endpoint for tracking impressions and clicks.",content:`## Impression Tracking

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

Content coming soon.`},{slug:"concepts/pricing",title:"Server-Authoritative Pricing",description:"How Adkit protects publishers from price manipulation.",content:`## The Problem

Client-side pricing can be manipulated. If prices are set in JavaScript, attackers can modify them before checkout.

## The Solution

Adkit uses server-authoritative pricing. Prices are stored on our servers and validated at checkout. The client never controls the price.

## How It Works

1. Publisher sets price in dashboard (server-side)
2. SDK fetches price from API for display
3. At checkout, server validates the price again
4. Payment is processed at the server-verified price

This prevents any client-side price manipulation.`},{slug:"concepts/slot-identity",title:"Slot Identity",description:"How slot identifiers work across your site.",content:`## Slot Identifiers

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

Content coming soon.`},{slug:"concepts/event-tracking",title:"Event Tracking",description:"How Adkit tracks impressions and clicks.",content:`## Automatic Tracking

The SDK automatically tracks:

- **Impressions** - When an ad enters the viewport
- **Clicks** - When a user clicks the ad

## Viewability

Impressions are only counted when:

- At least 50% of the ad is visible
- The ad has been visible for at least 1 second

## Privacy

Adkit does not use cookies for tracking. We use anonymous impression IDs that cannot identify individual users.

Content coming soon.`},{slug:"changelog",title:"Changelog",description:"Recent updates and releases.",content:`## Changelog

Release notes and updates will be posted here.

Content coming soon.`}];function i(e){return t.find(t=>t.slug===e)}e.s(["docPages",0,t,"getDocPage",()=>i])},33014,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o={getOrigin:function(){return n},resolveArray:function(){return r},resolveAsArrayOrUndefined:function(){return s}};for(var a in o)Object.defineProperty(i,a,{enumerable:!0,get:o[a]});function r(e){return Array.isArray(e)?e:[e]}function s(e){if(null!=e)return r(e)}function n(e){let t;if("string"==typeof e)try{t=(e=new URL(e)).origin}catch{}return t}},11449,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o={resolveManifest:function(){return d},resolveRobots:function(){return s},resolveRouteData:function(){return l},resolveSitemap:function(){return n}};for(var a in o)Object.defineProperty(i,a,{enumerable:!0,get:o[a]});let r=e.r(33014);function s(e){let t="";for(let i of Array.isArray(e.rules)?e.rules:[e.rules]){for(let e of(0,r.resolveArray)(i.userAgent||["*"]))t+=`User-Agent: ${e}
`;if(i.allow)for(let e of(0,r.resolveArray)(i.allow))t+=`Allow: ${e}
`;if(i.disallow)for(let e of(0,r.resolveArray)(i.disallow))t+=`Disallow: ${e}
`;i.crawlDelay&&(t+=`Crawl-delay: ${i.crawlDelay}
`),t+="\n"}return e.host&&(t+=`Host: ${e.host}
`),e.sitemap&&(0,r.resolveArray)(e.sitemap).forEach(e=>{t+=`Sitemap: ${e}
`}),t}function n(e){let t=e.some(e=>Object.keys(e.alternates??{}).length>0),i=e.some(e=>{var t;return!!(null==(t=e.images)?void 0:t.length)}),o=e.some(e=>{var t;return!!(null==(t=e.videos)?void 0:t.length)}),a="";for(let d of(a+='<?xml version="1.0" encoding="UTF-8"?>\n',a+='<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',i&&(a+=' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'),o&&(a+=' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"'),t?a+=' xmlns:xhtml="http://www.w3.org/1999/xhtml">\n':a+=">\n",e)){var r,s,n;a+="<url>\n",a+=`<loc>${d.url}</loc>
`;let e=null==(r=d.alternates)?void 0:r.languages;if(e&&Object.keys(e).length)for(let t in e)a+=`<xhtml:link rel="alternate" hreflang="${t}" href="${e[t]}" />
`;if(null==(s=d.images)?void 0:s.length)for(let e of d.images)a+=`<image:image>
<image:loc>${e}</image:loc>
</image:image>
`;if(null==(n=d.videos)?void 0:n.length)for(let e of d.videos)a+=["<video:video>",`<video:title>${e.title}</video:title>`,`<video:thumbnail_loc>${e.thumbnail_loc}</video:thumbnail_loc>`,`<video:description>${e.description}</video:description>`,e.content_loc&&`<video:content_loc>${e.content_loc}</video:content_loc>`,e.player_loc&&`<video:player_loc>${e.player_loc}</video:player_loc>`,e.duration&&`<video:duration>${e.duration}</video:duration>`,e.view_count&&`<video:view_count>${e.view_count}</video:view_count>`,e.tag&&`<video:tag>${e.tag}</video:tag>`,e.rating&&`<video:rating>${e.rating}</video:rating>`,e.expiration_date&&`<video:expiration_date>${e.expiration_date}</video:expiration_date>`,e.publication_date&&`<video:publication_date>${e.publication_date}</video:publication_date>`,e.family_friendly&&`<video:family_friendly>${e.family_friendly}</video:family_friendly>`,e.requires_subscription&&`<video:requires_subscription>${e.requires_subscription}</video:requires_subscription>`,e.live&&`<video:live>${e.live}</video:live>`,e.restriction&&`<video:restriction relationship="${e.restriction.relationship}">${e.restriction.content}</video:restriction>`,e.platform&&`<video:platform relationship="${e.platform.relationship}">${e.platform.content}</video:platform>`,e.uploader&&`<video:uploader${e.uploader.info&&` info="${e.uploader.info}"`}>${e.uploader.content}</video:uploader>`,`</video:video>
`].filter(Boolean).join("\n");if(d.lastModified){let e=d.lastModified instanceof Date?d.lastModified.toISOString():d.lastModified;a+=`<lastmod>${e}</lastmod>
`}d.changeFrequency&&(a+=`<changefreq>${d.changeFrequency}</changefreq>
`),"number"==typeof d.priority&&(a+=`<priority>${d.priority}</priority>
`),a+="</url>\n"}return a+"</urlset>\n"}function d(e){return JSON.stringify(e)}function l(e,t){return"robots"===t?s(e):"sitemap"===t?n(e):"manifest"===t?d(e):""}},36995,e=>{"use strict";var t=e.i(96881),i=e.i(15135),o=e.i(26311),a=e.i(96212),r=e.i(62977),s=e.i(25139),n=e.i(96005),d=e.i(98626),l=e.i(76888),c=e.i(91591),p=e.i(45848),u=e.i(82611),m=e.i(55178),h=e.i(36502),v=e.i(60932),g=e.i(48259),f=e.i(93695);e.i(91448);var y=e.i(99925),k=e.i(46595),b=e.i(41590);function w(){let e=process.env.NEXT_PUBLIC_BASE_URL||"https://docs.example.com",t=b.docPages.map(t=>({url:`${e}/docs/${t.slug}`,lastModified:new Date,changeFrequency:"weekly",priority:.8}));return[{url:e,lastModified:new Date,changeFrequency:"weekly",priority:1},{url:`${e}/docs`,lastModified:new Date,changeFrequency:"weekly",priority:.9},...t]}e.s(["default",()=>w],83977);var A=e.i(11449);async function C(){let e=await w(),t=(0,A.resolveRouteData)(e,"sitemap");return new k.NextResponse(t,{headers:{"Content-Type":"application/xml","Cache-Control":"public, max-age=0, must-revalidate"}})}e.s(["GET",()=>C],6041),e.i(6041),e.i(83977),e.s(["GET",()=>C],9057);var S=e.i(9057);let R=new t.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/sitemap.xml/route",pathname:"/sitemap.xml",filename:"sitemap--route-entry",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/adkit-docs/app/sitemap--route-entry.js",nextConfigOutput:"",userland:S}),{workAsyncStorage:x,workUnitAsyncStorage:P,serverHooks:I}=R;function T(){return(0,o.patchFetch)({workAsyncStorage:x,workUnitAsyncStorage:P})}async function D(e,t,o){R.isDev&&(0,a.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let k="/sitemap.xml/route";k=k.replace(/\/index$/,"")||"/";let b=await R.prepare(e,t,{srcPage:k,multiZoneDraftMode:!1});if(!b)return t.statusCode=400,t.end("Bad Request"),null==o.waitUntil||o.waitUntil.call(o,Promise.resolve()),null;let{buildId:w,params:A,nextConfig:C,parsedUrl:S,isDraftMode:x,prerenderManifest:P,routerServerContext:I,isOnDemandRevalidate:T,revalidateOnlyGenerated:D,resolvedPathname:E,clientReferenceManifest:_,serverActionsManifest:M}=b,N=(0,d.normalizeAppPath)(k),q=!!(P.dynamicRoutes[N]||P.routes[E]),O=async()=>((null==I?void 0:I.render404)?await I.render404(e,t,S,!1):t.end("This page could not be found"),null);if(q&&!x){let e=!!P.routes[E],t=P.dynamicRoutes[N];if(t&&!1===t.fallback&&!e){if(C.experimental.adapterPath)return await O();throw new f.NoFallbackError}}let $=null;!q||R.isDev||x||($="/index"===($=E)?"/":$);let j=!0===R.isDev||!q,U=q&&!j;M&&_&&(0,s.setReferenceManifestsSingleton)({page:k,clientReferenceManifest:_,serverActionsManifest:M,serverModuleMap:(0,n.createServerModuleMap)({serverActionsManifest:M})});let H=e.method||"GET",F=(0,r.getTracer)(),L=F.getActiveScopeSpan(),B={params:A,prerenderManifest:P,renderOpts:{experimental:{authInterrupts:!!C.experimental.authInterrupts},cacheComponents:!!C.cacheComponents,supportsDynamicResponse:j,incrementalCache:(0,a.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:C.cacheLife,waitUntil:o.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,i,o)=>R.onRequestError(e,t,o,I)},sharedContext:{buildId:w}},G=new l.NodeNextRequest(e),K=new l.NodeNextResponse(t),z=c.NextRequestAdapter.fromNodeNextRequest(G,(0,c.signalFromNodeResponse)(t));try{let s=async e=>R.handle(z,B).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let i=F.getRootSpanAttributes();if(!i)return;if(i.get("next.span_type")!==p.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${i.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let o=i.get("next.route");if(o){let t=`${H} ${o}`;e.setAttributes({"next.route":o,"http.route":o,"next.span_name":t}),e.updateName(t)}else e.updateName(`${H} ${k}`)}),n=!!(0,a.getRequestMeta)(e,"minimalMode"),d=async a=>{var r,d;let l=async({previousCacheEntry:i})=>{try{if(!n&&T&&D&&!i)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let r=await s(a);e.fetchMetrics=B.renderOpts.fetchMetrics;let d=B.renderOpts.pendingWaitUntil;d&&o.waitUntil&&(o.waitUntil(d),d=void 0);let l=B.renderOpts.collectedTags;if(!q)return await (0,m.sendResponse)(G,K,r,B.renderOpts.pendingWaitUntil),null;{let e=await r.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(r.headers);l&&(t[g.NEXT_CACHE_TAGS_HEADER]=l),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let i=void 0!==B.renderOpts.collectedRevalidate&&!(B.renderOpts.collectedRevalidate>=g.INFINITE_CACHE)&&B.renderOpts.collectedRevalidate,o=void 0===B.renderOpts.collectedExpire||B.renderOpts.collectedExpire>=g.INFINITE_CACHE?void 0:B.renderOpts.collectedExpire;return{value:{kind:y.CachedRouteKind.APP_ROUTE,status:r.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:i,expire:o}}}}catch(t){throw(null==i?void 0:i.isStale)&&await R.onRequestError(e,t,{routerKind:"App Router",routePath:k,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:T})},I),t}},c=await R.handleResponse({req:e,nextConfig:C,cacheKey:$,routeKind:i.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:P,isRoutePPREnabled:!1,isOnDemandRevalidate:T,revalidateOnlyGenerated:D,responseGenerator:l,waitUntil:o.waitUntil,isMinimalMode:n});if(!q)return null;if((null==c||null==(r=c.value)?void 0:r.kind)!==y.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==c||null==(d=c.value)?void 0:d.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});n||t.setHeader("x-nextjs-cache",T?"REVALIDATED":c.isMiss?"MISS":c.isStale?"STALE":"HIT"),x&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let p=(0,h.fromNodeOutgoingHttpHeaders)(c.value.headers);return n&&q||p.delete(g.NEXT_CACHE_TAGS_HEADER),!c.cacheControl||t.getHeader("Cache-Control")||p.get("Cache-Control")||p.set("Cache-Control",(0,v.getCacheControlHeader)(c.cacheControl)),await (0,m.sendResponse)(G,K,new Response(c.value.body,{headers:p,status:c.value.status||200})),null};L?await d(L):await F.withPropagatedContext(e.headers,()=>F.trace(p.BaseServerSpan.handleRequest,{spanName:`${H} ${k}`,kind:r.SpanKind.SERVER,attributes:{"http.method":H,"http.target":e.url}},d))}catch(t){if(t instanceof f.NoFallbackError||await R.onRequestError(e,t,{routerKind:"App Router",routePath:N,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:T})}),q)throw t;return await (0,m.sendResponse)(G,K,new Response(null,{status:500})),null}}e.s(["handler",()=>D,"patchFetch",()=>T,"routeModule",()=>R,"serverHooks",()=>I,"workAsyncStorage",()=>x,"workUnitAsyncStorage",()=>P],36995)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__3e0793b6._.js.map