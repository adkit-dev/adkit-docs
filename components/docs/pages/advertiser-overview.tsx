"use client"

import {
  CalendarPlus,
  Layers,
  Receipt,
  Settings2,
} from "lucide-react"
import { DocPageHeader } from "@/components/docs/doc-page-header"
import { FrameworkCard } from "@/components/docs/framework-card"

const sections = [
  {
    title: "Booking an Ad",
    description: "Choose dates, upload your creative, and pay — step by step.",
    href: "/advertiser/booking",
    icon: CalendarPlus,
  },
  {
    title: "Campaign Management",
    description: "Track status, view performance, edit creatives, and manage refunds.",
    href: "/advertiser/campaigns",
    icon: Layers,
  },
  {
    title: "Billing",
    description: "Payment method on file and a full invoice history for all campaigns.",
    href: "/advertiser/billing",
    icon: Receipt,
  },
  {
    title: "Settings",
    description: "Update your company name and manage your account.",
    href: "/advertiser/settings",
    icon: Settings2,
  },
]

export function AdvertiserOverviewPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-8 py-8 sm:py-16">
      <DocPageHeader
        title="Advertiser Guide"
        description="Book ad placements on publisher sites, manage your campaigns, and track performance."
        breadcrumbItems={[{ label: "Advertiser Guide" }]}
        slug="advertiser/overview"
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
