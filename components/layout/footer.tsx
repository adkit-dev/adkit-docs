"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { siteConfig, footerLinks } from "@/lib/docs/nav"
import { SiteLogo } from "./site-logo"

export function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const borderColor = mounted
    ? resolvedTheme === "dark"
      ? "rgba(255, 255, 255, 0.07)"
      : "rgba(0, 0, 0, 0.3)"
    : "transparent"

  return (
    <footer className="border-t bg-background" style={{ borderColor }} role="contentinfo">
      {/* Mobile: compact single-column */}
      <div className="md:hidden px-4 py-6">
        <SiteLogo className="mb-4" />
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {[...footerLinks.explore, ...footerLinks.resources, ...footerLinks.company, ...footerLinks.legal].map(
            (link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.title}
              </Link>
            ),
          )}
        </div>
        <p className="mt-4 text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>

      {/* Desktop: full grid */}
      <div className="hidden md:block mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-6 gap-8">
          {/* Logo */}
          <div className="col-span-2">
            <SiteLogo />
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 space-y-3" role="list">
              {footerLinks.explore.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <ul className="mt-4 space-y-3" role="list">
              {footerLinks.resources.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-3" role="list">
              {footerLinks.legal.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
