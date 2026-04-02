import type React from "react"
import {
  Rocket,
  LayoutDashboard,
  ShoppingCart,
  Server,
  Lightbulb,
  BookOpen,
  FastForward,
} from "lucide-react"
import {
  JavaScriptIcon,
  ReactIcon,
  NextJSIcon,
  AstroIcon,
  WordPressIcon,
  WebflowIcon,
} from "@/components/icons/sdk-icons"

export const siteConfig = {
  name: "AdKit Docs",
  description: "Sell ad space directly on your website. Fixed-price slots, publisher-approved placements, two-line integration.",
  url: "https://docs.adkit.dev",
  links: {
    github: "https://github.com/adkit-dev",
  },
}

export const topNavigation = [
  { title: "Documentation", href: "/" },
  { title: "Guides", href: "/quickstart" },
  { title: "API Reference", href: "/api/serve" },
  { title: "Changelog", href: "/changelog" },
]

export const footerLinks = {
  explore: [
    { title: "Documentation", href: "/" },
    { title: "React SDK", href: "/react/installation" },
    { title: "JavaScript SDK", href: "/js/installation" },
  ],
  resources: [
    { title: "Publisher Guide", href: "/publisher/dashboard" },
    { title: "Advertiser Guide", href: "/advertiser/booking" },
    { title: "API Reference", href: "/api/serve" },
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

type NavIcon = React.ComponentType<{ className?: string }>

export const navigation: NavSection[] = [
  {
    title: "Getting started",
    icon: Rocket,
    collapsible: true,
    defaultOpen: true,
    items: [
      { title: "Introduction", href: "/" },
      { title: "How It Works", href: "/how-it-works" },
    ],
  },
  {
    title: "Quickstarts",
    icon: FastForward,
    collapsible: true,
    defaultOpen: true,
    items: [
      { title: "JavaScript", href: "/quickstart/javascript", icon: JavaScriptIcon },
      { title: "React", href: "/quickstart/react", icon: ReactIcon },
      { title: "Next.js", href: "/quickstart/nextjs", icon: NextJSIcon },
      { title: "Astro", href: "/quickstart/astro", icon: AstroIcon },
      { title: "WordPress", href: "/quickstart/wordpress", icon: WordPressIcon },
      { title: "Webflow", href: "/quickstart/webflow", icon: WebflowIcon },
    ],
  },
  {
    title: "React SDK",
    collapsible: true,
    defaultOpen: true,
    items: [
      { title: "Installation", href: "/react/installation" },
      { title: "<AdkitProvider />", href: "/react/provider", isCode: true },
      { title: "<AdSlot />", href: "/react/adslot", isCode: true },
      { title: "<BookingModal />", href: "/react/booking-modal", isCode: true },
      { title: "useAdkit()", href: "/react/use-adkit", isCode: true },
      { title: "Theming", href: "/react/theming" },
      { title: "Custom Styling", href: "/react/custom-styling" },
    ],
  },
  {
    title: "JavaScript SDK",
    collapsible: true,
    defaultOpen: true,
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
    collapsible: true,
    defaultOpen: true,
    items: [
      { title: "Dashboard Overview", href: "/publisher/dashboard" },
      { title: "Creating Slots", href: "/publisher/creating-slots" },
      { title: "Approving Ads", href: "/publisher/approvals" },
      { title: "Analytics", href: "/publisher/analytics" },
      { title: "Discounts", href: "/publisher/discounts" },
      { title: "Payouts", href: "/publisher/payouts" },
      { title: "Settings", href: "/publisher/settings" },
    ],
  },
  {
    title: "Advertiser Guide",
    icon: ShoppingCart,
    collapsible: true,
    defaultOpen: true,
    items: [
      { title: "Booking an Ad", href: "/advertiser/booking" },
      { title: "Campaign Management", href: "/advertiser/campaigns" },
      { title: "Billing", href: "/advertiser/billing" },
    ],
  },
  {
    title: "Concepts",
    icon: Lightbulb,
    collapsible: true,
    defaultOpen: true,
    items: [
      { title: "Pricing Model", href: "/concepts/pricing" },
      { title: "Slot Identity", href: "/concepts/slot-identity" },
      { title: "Event Tracking", href: "/concepts/event-tracking" },
    ],
  },
  {
    title: "API Reference",
    icon: Server,
    collapsible: true,
    defaultOpen: true,
    items: [
      { title: "Serve API", href: "/api/serve" },
      { title: "Events API", href: "/api/events" },
    ],
  },
  {
    title: "Changelog",
    icon: BookOpen,
    collapsible: true,
    defaultOpen: true,
    items: [
      { title: "Changelog", href: "/changelog" },
    ],
  },
]

export function getNavSectionIcon(title: string): NavIcon | undefined {
  if (title === "React SDK") {
    return ReactIcon
  }

  if (title === "JavaScript SDK") {
    return JavaScriptIcon
  }

  return navigation.find((section) => section.title === title)?.icon
}

export function getDocIcon(slug: string): NavIcon | undefined {
  const href = slug ? `/${slug}` : "/"

  for (const section of navigation) {
    const item = section.items.find((entry) => entry.href === href)

    if (item) {
      return item.icon ?? getNavSectionIcon(section.title)
    }
  }

  return undefined
}
