import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://docs.example.com"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "ClaudeBot", "anthropic-ai", "Google-Extended", "PerplexityBot"],
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
