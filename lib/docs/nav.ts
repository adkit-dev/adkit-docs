import type React from "react"
import {
  Rocket,
  LayoutDashboard,
  ShoppingCart,
  Server,
  Lightbulb,
  BookOpen,
} from "lucide-react"

export const siteConfig = {
  name: "Adkit Docs",
  description: "Sell ad space directly on your website. Fixed-price slots, publisher-approved placements, two-line integration.",
  url: "https://docs.adkit.dev",
  links: {
    github: "https://github.com/adkit-dev",
  },
}

export const topNavigation = [
  { title: "Documentation", href: "/docs" },
  { title: "Guides", href: "/docs/quickstart" },
  { title: "API Reference", href: "/docs/api/serve" },
  { title: "Changelog", href: "/docs/changelog" },
]

export const footerLinks = {
  explore: [
    { title: "Documentation", href: "/docs" },
    { title: "React SDK", href: "/docs/react/installation" },
    { title: "JavaScript SDK", href: "/docs/js/installation" },
  ],
  resources: [
    { title: "Publisher Guide", href: "/docs/publisher/dashboard" },
    { title: "Advertiser Guide", href: "/docs/advertiser/booking" },
    { title: "API Reference", href: "/docs/api/serve" },
  ],
  company: [
    { title: "GitHub", href: "https://github.com/adkit-dev" },
  ],
  legal: [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
  ],
}

export interface NavItem {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  isCode?: boolean
}

export interface NavSection {
  title: string
  icon?: React.ComponentType<{ className?: string }>
  items: NavItem[]
  collapsible?: boolean
  defaultOpen?: boolean
}

export const navigation: NavSection[] = [
  {
    title: "Getting started",
    icon: Rocket,
    collapsible: true,
    defaultOpen: true,
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Quickstart", href: "/docs/quickstart" },
      { title: "How It Works", href: "/docs/how-it-works" },
    ],
  },
  {
    title: "React SDK",
    collapsible: true,
    defaultOpen: true,
    items: [
      { title: "Installation", href: "/docs/react/installation" },
      { title: "<AdkitProvider />", href: "/docs/react/provider", isCode: true },
      { title: "<AdSlot />", href: "/docs/react/adslot", isCode: true },
      { title: "<BookingModal />", href: "/docs/react/booking-modal", isCode: true },
      { title: "useAdkit()", href: "/docs/react/use-adkit", isCode: true },
      { title: "Theming", href: "/docs/react/theming" },
      { title: "Custom Styling", href: "/docs/react/custom-styling" },
    ],
  },
  {
    title: "JavaScript SDK",
    collapsible: true,
    defaultOpen: true,
    items: [
      { title: "Installation", href: "/docs/js/installation" },
      { title: "Data Attributes", href: "/docs/js/data-attributes" },
      { title: "JavaScript API", href: "/docs/js/api" },
      { title: "Theming", href: "/docs/js/theming" },
      { title: "Custom Styling", href: "/docs/js/custom-styling" },
    ],
  },
  {
    title: "Publisher Guide",
    icon: LayoutDashboard,
    collapsible: true,
    defaultOpen: true,
    items: [
      { title: "Dashboard Overview", href: "/docs/publisher/dashboard" },
      { title: "Creating Slots", href: "/docs/publisher/creating-slots" },
      { title: "Approving Ads", href: "/docs/publisher/approvals" },
      { title: "Analytics", href: "/docs/publisher/analytics" },
      { title: "Discounts", href: "/docs/publisher/discounts" },
      { title: "Payouts", href: "/docs/publisher/payouts" },
      { title: "Settings", href: "/docs/publisher/settings" },
    ],
  },
  {
    title: "Advertiser Guide",
    icon: ShoppingCart,
    collapsible: true,
    defaultOpen: true,
    items: [
      { title: "Booking an Ad", href: "/docs/advertiser/booking" },
      { title: "Campaign Management", href: "/docs/advertiser/campaigns" },
      { title: "Billing", href: "/docs/advertiser/billing" },
    ],
  },
  {
    title: "Concepts",
    icon: Lightbulb,
    collapsible: true,
    defaultOpen: true,
    items: [
      { title: "Pricing Model", href: "/docs/concepts/pricing" },
      { title: "Slot Identity", href: "/docs/concepts/slot-identity" },
      { title: "Event Tracking", href: "/docs/concepts/event-tracking" },
    ],
  },
  {
    title: "API Reference",
    icon: Server,
    collapsible: true,
    defaultOpen: true,
    items: [
      { title: "Serve API", href: "/docs/api/serve" },
      { title: "Events API", href: "/docs/api/events" },
    ],
  },
  {
    title: "Changelog",
    icon: BookOpen,
    collapsible: true,
    defaultOpen: true,
    items: [
      { title: "Changelog", href: "/docs/changelog" },
    ],
  },
]
