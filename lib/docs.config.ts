import {
  Rocket,
  LayoutDashboard,
  ShoppingCart,
  Server,
  Lightbulb,
} from "lucide-react"

export const siteConfig = {
  name: "Adkit Docs",
  description: "Sell ad space directly on your website. Fixed-price slots, publisher-approved placements, two-line integration.",
  url: "https://docs.adkit.dev",
  ogImage: "/og-image.png",
  logo: {
    light: "/logo-light.svg",
    dark: "/logo-dark.svg",
  },
  github: "https://github.com/adkit-dev",
}

export const topNavigation = [
  { label: "Documentation", href: "/docs" },
  { label: "Guides", href: "/docs/quickstart" },
  { label: "API Reference", href: "/docs/api/serve" },
  { label: "Changelog", href: "/docs/changelog" },
]

export const navigation = [
  {
    title: "Getting started",
    icon: Rocket,
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Quickstart", href: "/docs/quickstart" },
      { title: "How It Works", href: "/docs/how-it-works" },
    ],
  },
  {
    title: "React SDK",
    items: [
      { title: "Installation", href: "/docs/react/installation" },
      { title: "AdkitProvider", href: "/docs/react/provider" },
      { title: "AdSlot", href: "/docs/react/adslot" },
      { title: "BookingModal", href: "/docs/react/booking-modal" },
      { title: "useAdkit Hook", href: "/docs/react/use-adkit" },
      { title: "Theming", href: "/docs/react/theming" },
      { title: "Custom Styling", href: "/docs/react/custom-styling" },
    ],
  },
  {
    title: "JavaScript SDK",
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
    items: [
      { title: "Dashboard Overview", href: "/docs/publisher/dashboard" },
      { title: "Creating Slots", href: "/docs/publisher/creating-slots" },
      { title: "Approvals", href: "/docs/publisher/approvals" },
      { title: "Analytics", href: "/docs/publisher/analytics" },
      { title: "Discounts", href: "/docs/publisher/discounts" },
      { title: "Payouts", href: "/docs/publisher/payouts" },
      { title: "Settings", href: "/docs/publisher/settings" },
    ],
  },
  {
    title: "Advertiser Guide",
    icon: ShoppingCart,
    items: [
      { title: "Booking an Ad", href: "/docs/advertiser/booking" },
      { title: "Campaign Management", href: "/docs/advertiser/campaigns" },
      { title: "Billing", href: "/docs/advertiser/billing" },
    ],
  },
  {
    title: "API Reference",
    icon: Server,
    items: [
      { title: "Serve API", href: "/docs/api/serve" },
      { title: "Events API", href: "/docs/api/events" },
    ],
  },
  {
    title: "Concepts",
    icon: Lightbulb,
    items: [
      { title: "Server-Authoritative Pricing", href: "/docs/concepts/pricing" },
      { title: "Slot Identity", href: "/docs/concepts/slot-identity" },
      { title: "Event Tracking", href: "/docs/concepts/event-tracking" },
    ],
  },
]

export const footerLinks = {
  explore: [
    { label: "Documentation", href: "/docs" },
    { label: "React SDK", href: "/docs/react/installation" },
    { label: "JavaScript SDK", href: "/docs/js/installation" },
  ],
  resources: [
    { label: "Publisher Guide", href: "/docs/publisher/dashboard" },
    { label: "Advertiser Guide", href: "/docs/advertiser/booking" },
    { label: "API Reference", href: "/docs/api/serve" },
  ],
  company: [
    { label: "GitHub", href: "https://github.com/adkit-dev" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
}

export const iconMap = {
  Rocket,
  LayoutDashboard,
  ShoppingCart,
  Server,
  Lightbulb,
}
