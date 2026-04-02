import { getDocPage } from "@/lib/docs/pages"

/** Three suggested next pages per doc article (URL path segments, e.g. quickstart/nextjs). */
export const RELATED_SLUGS: Record<string, readonly [string, string, string]> = {
  quickstart: ["how-it-works", "quickstart/nextjs", "quickstart/javascript"],
  "quickstart/javascript": ["js/data-attributes", "js/theming", "publisher/dashboard"],
  "quickstart/react": ["react/adslot", "react/use-adkit", "react/theming"],
  "quickstart/nextjs": ["react/adslot", "react/provider", "publisher/dashboard"],
  "quickstart/astro": ["js/data-attributes", "quickstart/react", "publisher/dashboard"],
  "quickstart/wordpress": ["js/data-attributes", "publisher/creating-slots", "publisher/dashboard"],
  "quickstart/webflow": ["js/data-attributes", "js/theming", "publisher/dashboard"],

  "how-it-works": ["quickstart", "concepts/pricing", "react/installation"],

  "react/installation": ["react/provider", "react/adslot", "quickstart/nextjs"],
  "react/provider": ["react/adslot", "react/use-adkit", "react/installation"],
  "react/adslot": ["react/booking-modal", "react/theming", "concepts/slot-identity"],
  "react/booking-modal": ["react/adslot", "advertiser/booking", "react/theming"],
  "react/use-adkit": ["react/provider", "react/adslot", "js/api"],
  "react/theming": ["react/custom-styling", "react/adslot", "js/theming"],
  "react/custom-styling": ["react/theming", "react/adslot", "js/custom-styling"],

  "js/installation": ["js/data-attributes", "js/api", "quickstart/javascript"],
  "js/data-attributes": ["js/theming", "js/custom-styling", "concepts/slot-identity"],
  "js/api": ["js/installation", "react/use-adkit", "quickstart/nextjs"],
  "js/theming": ["js/custom-styling", "js/data-attributes", "react/theming"],
  "js/custom-styling": ["js/theming", "js/data-attributes", "react/custom-styling"],

  "publisher/dashboard": ["publisher/creating-slots", "publisher/analytics", "publisher/payouts"],
  "publisher/creating-slots": ["publisher/dashboard", "concepts/slot-identity", "publisher/approvals"],
  "publisher/approvals": ["publisher/dashboard", "advertiser/booking", "publisher/analytics"],
  "publisher/analytics": ["publisher/dashboard", "publisher/payouts", "concepts/event-tracking"],
  "publisher/discounts": ["publisher/settings", "advertiser/booking", "publisher/dashboard"],
  "publisher/payouts": ["publisher/dashboard", "publisher/settings", "concepts/pricing"],
  "publisher/settings": ["publisher/dashboard", "publisher/creating-slots", "publisher/payouts"],

  "advertiser/booking": ["advertiser/campaigns", "advertiser/billing", "how-it-works"],
  "advertiser/campaigns": ["advertiser/billing", "advertiser/booking", "publisher/approvals"],
  "advertiser/billing": ["advertiser/campaigns", "advertiser/booking", "publisher/payouts"],

  "api/serve": ["api/events", "concepts/pricing", "js/data-attributes"],
  "api/events": ["api/serve", "concepts/event-tracking", "publisher/analytics"],

  "concepts/pricing": ["concepts/slot-identity", "publisher/creating-slots", "js/data-attributes"],
  "concepts/slot-identity": ["concepts/pricing", "js/data-attributes", "react/adslot"],
  "concepts/event-tracking": ["api/events", "publisher/analytics", "advertiser/campaigns"],

  changelog: ["quickstart", "how-it-works", "react/installation"],
}

export interface RelatedArticleLink {
  href: string
  title: string
  description: string
}

export function getRelatedArticles(slug: string): RelatedArticleLink[] {
  const triple = RELATED_SLUGS[slug]
  if (!triple) return []

  return triple.map((targetSlug) => {
    const page = getDocPage(targetSlug)
    return {
      href: `/${targetSlug}`,
      title: page?.title ?? targetSlug,
      description: page?.description ?? "",
    }
  })
}
