"use client"

import {
  LayoutDashboard,
  PlusCircle,
  ShieldCheck,
  BarChart3,
  Tag,
  Banknote,
  Settings2,
} from "lucide-react"
import { DocPageHeader } from "@/components/docs/doc-page-header"
import { FrameworkCard } from "@/components/docs/framework-card"

const sections = [
  {
    title: "Dashboard",
    description: "KPI bar, revenue chart, suggested items, and live activity feed.",
    href: "/publisher/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Creating Slots",
    description: "Define placements, set daily pricing, and manage slot status.",
    href: "/publisher/creating-slots",
    icon: PlusCircle,
  },
  {
    title: "Approving Ads",
    description: "Review creatives, approve or reject bookings, configure auto-approval.",
    href: "/publisher/approvals",
    icon: ShieldCheck,
  },
  {
    title: "Analytics",
    description: "Revenue, impressions, CTR, RPM, fill rate, device breakdown, and top pages.",
    href: "/publisher/analytics",
    icon: BarChart3,
  },
  {
    title: "Discounts",
    description: "Multi-day discounts, promo codes, and advertiser loyalty rewards.",
    href: "/publisher/discounts",
    icon: Tag,
  },
  {
    title: "Payouts",
    description: "Connect Stripe, track earnings, and understand the 85/15 revenue share.",
    href: "/publisher/payouts",
    icon: Banknote,
  },
  {
    title: "Settings",
    description: "Site identity, booking rules, and danger zone actions.",
    href: "/publisher/settings",
    icon: Settings2,
  },
]

export function PublisherOverviewPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Publisher Guide"
        description="Everything you need to sell ad space on your site — from setting up placements to getting paid."
        breadcrumbItems={[{ label: "Publisher Guide" }]}
        slug="publisher/overview"
        headerClassName="mb-10"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sections.map((section) => (
          <FrameworkCard
            key={section.href}
            title={section.title}
            description={section.description}
            iconComponent={section.icon}
            href={section.href}
            showQuickstartLabel={false}
          />
        ))}
      </div>
    </article>
  )
}
