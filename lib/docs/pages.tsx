import type React from "react"
import { ReactInstallationPage } from "@/components/docs/pages/react-installation"
import { QuickstartOverviewPage } from "@/components/docs/pages/quickstart-overview"
import { QuickstartJavaScriptPage } from "@/components/docs/pages/quickstart-javascript"
import { QuickstartReactPage } from "@/components/docs/pages/quickstart-react"
import { QuickstartNextjsPage } from "@/components/docs/pages/quickstart-nextjs"
import { QuickstartAstroPage } from "@/components/docs/pages/quickstart-astro"
import { QuickstartWordPressPage } from "@/components/docs/pages/quickstart-wordpress"
import { QuickstartWebflowPage } from "@/components/docs/pages/quickstart-webflow"
import { HowItWorksPage } from "@/components/docs/pages/how-it-works"
import { ReactProviderPage } from "@/components/docs/pages/react-provider"
import { ReactAdSlotPage } from "@/components/docs/pages/react-adslot"
import { ReactBookingModalPage } from "@/components/docs/pages/react-booking-modal"
import { ReactUseAdkitPage } from "@/components/docs/pages/react-use-adkit"
import { ReactThemingPage } from "@/components/docs/pages/react-theming"
import { ReactCustomStylingPage } from "@/components/docs/pages/react-custom-styling"
import { JsInstallationPage } from "@/components/docs/pages/js-installation"
import { JsDataAttributesPage } from "@/components/docs/pages/js-data-attributes"
import { JsApiPage } from "@/components/docs/pages/js-api"
import { JsThemingPage } from "@/components/docs/pages/js-theming"
import { JsCustomStylingPage } from "@/components/docs/pages/js-custom-styling"
import { PublisherOverviewPage } from "@/components/docs/pages/publisher-overview"
import { PublisherDashboardPage } from "@/components/docs/pages/publisher-dashboard"
import { PublisherCreatingSlotsPage } from "@/components/docs/pages/publisher-creating-slots"
import { PublisherApprovalsPage } from "@/components/docs/pages/publisher-approvals"
import { PublisherAnalyticsPage } from "@/components/docs/pages/publisher-analytics"
import { PublisherDiscountsPage } from "@/components/docs/pages/publisher-discounts"
import { PublisherPayoutsPage } from "@/components/docs/pages/publisher-payouts"
import { PublisherSettingsPage } from "@/components/docs/pages/publisher-settings"
import { AdvertiserOverviewPage } from "@/components/docs/pages/advertiser-overview"
import { AdvertiserBookingPage } from "@/components/docs/pages/advertiser-booking"
import { AdvertiserCampaignsPage } from "@/components/docs/pages/advertiser-campaigns"
import { AdvertiserBillingPage } from "@/components/docs/pages/advertiser-billing"
import { AdvertiserSettingsPage } from "@/components/docs/pages/advertiser-settings"
import { ConceptsPricingPage } from "@/components/docs/pages/concepts-pricing"
import { ConceptsSlotIdentityPage } from "@/components/docs/pages/concepts-slot-identity"
import { ConceptsEventTrackingPage } from "@/components/docs/pages/concepts-event-tracking"

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
    component: HowItWorksPage,
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
    component: ReactProviderPage,
  },
  {
    slug: "react/adslot",
    title: "<AdSlot />",
    description: "Render an ad slot in your React application.",
    isCodeTitle: true,
    component: ReactAdSlotPage,
  },
  {
    slug: "react/booking-modal",
    title: "<BookingModal />",
    description: "The booking flow modal that opens when a visitor clicks an empty slot placeholder.",
    isCodeTitle: true,
    component: ReactBookingModalPage,
  },
  {
    slug: "react/use-adkit",
    title: "useAdkit Hook",
    description: "Access the Adkit context from any component inside AdkitProvider.",
    component: ReactUseAdkitPage,
  },
  {
    slug: "react/theming",
    title: "Theming",
    description: "Control the visual appearance of Adkit slots with themes, color overrides, and CSS variables.",
    component: ReactThemingPage,
  },
  {
    slug: "react/custom-styling",
    title: "Custom Styling",
    description: "Apply your own CSS to Adkit slot elements using className, class selectors, and data attributes.",
    component: ReactCustomStylingPage,
  },
  // JavaScript SDK
  {
    slug: "js/installation",
    title: "Installation",
    description: "Add Adkit to any website with a single script tag. No npm, no build step required.",
    component: JsInstallationPage,
  },
  {
    slug: "js/data-attributes",
    title: "Data Attributes",
    description: "Configure ad slots using HTML data attributes. Full reference for all required and optional attributes.",
    component: JsDataAttributesPage,
  },
  {
    slug: "js/api",
    title: "JavaScript API",
    description: "Programmatic control via window.__adkit. Primarily used for SPA navigation and slot refresh.",
    component: JsApiPage,
  },
  {
    slug: "js/theming",
    title: "Theming",
    description: "Control slot appearance using data attributes and CSS custom properties.",
    component: JsThemingPage,
  },
  {
    slug: "js/custom-styling",
    title: "Custom Styling",
    description: "Apply your own CSS to Adkit slot elements using class selectors and data attribute selectors.",
    component: JsCustomStylingPage,
  },
  // Publisher Guide
  {
    slug: "publisher/overview",
    title: "Publisher Guide",
    description: "Everything you need to sell ad space on your site — from setting up placements to getting paid.",
    component: PublisherOverviewPage,
  },
  {
    slug: "publisher/dashboard",
    title: "Dashboard",
    description: "Navigate the KPI bar, charts, suggested items, and live activity feed on your publisher dashboard.",
    component: PublisherDashboardPage,
  },
  {
    slug: "publisher/creating-slots",
    title: "Creating Slots",
    description: "Define ad placements, set pricing, manage slot status, and understand installation detection.",
    component: PublisherCreatingSlotsPage,
  },
  {
    slug: "publisher/approvals",
    title: "Approving Ads",
    description: "Review ad creatives, approve or reject bookings, and configure auto-approval.",
    component: PublisherApprovalsPage,
  },
  {
    slug: "publisher/analytics",
    title: "Analytics",
    description: "Track revenue, impressions, clicks, CTR, RPM, fill rate, device breakdown, and top pages.",
    component: PublisherAnalyticsPage,
  },
  {
    slug: "publisher/discounts",
    title: "Discounts",
    description: "Create multi-day discounts, promo codes, and advertiser loyalty rewards.",
    component: PublisherDiscountsPage,
  },
  {
    slug: "publisher/payouts",
    title: "Payouts",
    description: "Connect Stripe, track earnings, and understand the 85/15 revenue share.",
    component: PublisherPayoutsPage,
  },
  {
    slug: "publisher/settings",
    title: "Settings",
    description: "Configure site identity, booking rules, and manage danger zone actions.",
    component: PublisherSettingsPage,
  },
  // Advertiser Guide
  {
    slug: "advertiser/overview",
    title: "Advertiser Guide",
    description: "Book ad placements on publisher sites, manage your campaigns, and track performance.",
    component: AdvertiserOverviewPage,
  },
  {
    slug: "advertiser/booking",
    title: "Booking an Ad",
    description: "Choose dates, upload your creative, and pay — a step-by-step guide to booking an ad slot.",
    component: AdvertiserBookingPage,
  },
  {
    slug: "advertiser/campaigns",
    title: "Campaign Management",
    description: "View campaign status, track performance, edit creatives, and manage refunds.",
    component: AdvertiserCampaignsPage,
  },
  {
    slug: "advertiser/billing",
    title: "Billing",
    description: "Manage your payment method and view your full invoice history.",
    component: AdvertiserBillingPage,
  },
  {
    slug: "advertiser/settings",
    title: "Settings",
    description: "Update your company name and manage your advertiser account.",
    component: AdvertiserSettingsPage,
  },
  // Concepts
  {
    slug: "concepts/pricing",
    title: "Pricing Model",
    description: "Daily rate model, revenue share, discounts, prorated refunds, and server-authoritative pricing.",
    component: ConceptsPricingPage,
  },
  {
    slug: "concepts/slot-identity",
    title: "Slot Identity",
    description: "How siteId:slotName identity works, slot status transitions, and SDK resolution.",
    component: ConceptsSlotIdentityPage,
  },
  {
    slug: "concepts/event-tracking",
    title: "Event Tracking",
    description: "The four SDK events, how they're sent, and how they power analytics and fill rate.",
    component: ConceptsEventTrackingPage,
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
