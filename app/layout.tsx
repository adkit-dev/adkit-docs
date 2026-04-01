import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { DocsShell } from "@/components/layout/docs-shell"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"
import { TooltipProvider } from "@/components/ui/tooltip"

export const metadata: Metadata = {
  title: {
    default: "Adkit Docs",
    template: "%s | Adkit Docs",
  },
  description: "Sell ad space directly on your website. Fixed-price slots, publisher-approved placements, two-line integration.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://docs.adkit.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Adkit Docs",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0eef5" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1625" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=JetBrains+Mono:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TooltipProvider>
            <DocsShell>{children}</DocsShell>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html >
  )
}
