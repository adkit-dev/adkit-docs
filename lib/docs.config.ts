import {
  Rocket,
  LayoutDashboard,
  ShoppingCart,
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
  { label: "Documentation", href: "/" },
  { label: "Guides", href: "/quickstart" },
  { label: "Changelog", href: "/changelog" },
]

export const navigation = [
  {
    title: "Getting started",
    icon: Rocket,
    items: [
      { title: "Introduction", href: "/" },
      { title: "Quickstart", href: "/quickstart" },
      { title: "How It Works", href: "/how-it-works" },
    ],
  },
  {
    title: "React SDK",
    items: [
      { title: "Installation", href: "/react/installation" },
      { title: "AdkitProvider", href: "/react/provider" },
      { title: "AdSlot", href: "/react/adslot" },
      { title: "BookingModal", href: "/react/booking-modal" },
      { title: "useAdkit Hook", href: "/react/use-adkit" },
      { title: "Theming", href: "/react/theming" },
      { title: "Custom Styling", href: "/react/custom-styling" },
    ],
  },
  {
    title: "JavaScript SDK",
    items: [
      { title: "Installation", href: "/js/installation" },
      { title: "Data Attributes", href: "/js/data-attributes" },
      { title: "JavaScript API", href: "/js/api" },
      { title: "Theming", href: "/js/theming" },
      { title: "Custom Styling", href: "/js/custom-styling" },
    ],
  },
  {
    title: "Publisher Guide",
    icon: LayoutDashboard,
    items: [
      { title: "Dashboard Overview", href: "/publisher/dashboard" },
      { title: "Creating Slots", href: "/publisher/creating-slots" },
      { title: "Approvals", href: "/publisher/approvals" },
      { title: "Analytics", href: "/publisher/analytics" },
      { title: "Discounts", href: "/publisher/discounts" },
      { title: "Payouts", href: "/publisher/payouts" },
      { title: "Settings", href: "/publisher/settings" },
    ],
  },
  {
    title: "Advertiser Guide",
    icon: ShoppingCart,
    items: [
      { title: "Booking an Ad", href: "/advertiser/booking" },
      { title: "Campaign Management", href: "/advertiser/campaigns" },
      { title: "Billing", href: "/advertiser/billing" },
    ],
  },
  {
    title: "Concepts",
    icon: Lightbulb,
    items: [
      { title: "Server-Authoritative Pricing", href: "/concepts/pricing" },
      { title: "Slot Identity", href: "/concepts/slot-identity" },
      { title: "Event Tracking", href: "/concepts/event-tracking" },
    ],
  },
]

export const footerLinks = {
  explore: [
    { label: "Documentation", href: "/" },
    { label: "React SDK", href: "/react/installation" },
    { label: "JavaScript SDK", href: "/js/installation" },
  ],
  resources: [
    { label: "Publisher Guide", href: "/publisher/dashboard" },
    { label: "Advertiser Guide", href: "/advertiser/booking" },
    { label: "Changelog", href: "/changelog" },
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
  Lightbulb,
}
