"use client"

import { useState } from "react"
import { CodePreview } from "@/components/docs/code-preview"
import { Breadcrumbs } from "@/components/docs/breadcrumbs"
import { Callout } from "@/components/docs/callout"
import { ArrowRight } from "lucide-react"

export function QuickstartWordPressPage() {
  const [method, setMethod] = useState<"block" | "functions" | "child">("block")

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-8 py-8 sm:py-16">
      <Breadcrumbs items={[{ label: "Quickstarts", href: "/docs/quickstart" }, { label: "WordPress" }]} className="mb-4 sm:mb-6" />

      <header className="mb-8">
        <h1 className="mb-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">WordPress</h1>
        <p className="text-lg text-muted-foreground">
          Add Adkit to your WordPress site. Choose the method that fits your comfort level — the Custom HTML Block
          approach requires no code editor or developer experience.
        </p>
      </header>

      <Callout variant="note" title="Prerequisites" className="mb-8">
        A WordPress site (self-hosted or WordPress.com Business plan) and an Adkit account.{" "}
        <a href="https://adkit.dev" className="text-primary">
          Sign up at adkit.dev
        </a>{" "}
        to get your site ID.
      </Callout>

      {/* Method selector */}
      <div className="flex flex-wrap gap-0 border-b border-border mb-10">
        <button
          onClick={() => setMethod("block")}
          className={`pb-2 px-1 mr-4 text-sm font-medium border-b-2 transition-colors ${
            method === "block"
              ? "border-primary text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Custom HTML Block
        </button>
        <button
          onClick={() => setMethod("functions")}
          className={`pb-2 px-1 mr-4 text-sm font-medium border-b-2 transition-colors ${
            method === "functions"
              ? "border-primary text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          functions.php
        </button>
        <button
          onClick={() => setMethod("child")}
          className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
            method === "child"
              ? "border-primary text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Child Theme
        </button>
      </div>

      {/* Method: Custom HTML Block */}
      {method === "block" && (
        <div className="space-y-12">
          <Callout variant="tip" title="Recommended for most publishers">
            Everything is done inside the WordPress block editor — no code editor, no FTP, no file access required.
          </Callout>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
                1
              </div>
              <h2 className="text-xl font-semibold m-0">Add the script to your site header</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              The easiest way to add a header script without editing theme files is the free{" "}
              <strong>Insert Headers and Footers</strong> plugin (search for it in the WordPress plugin directory). Once
              installed, go to <strong>Settings → Insert Headers and Footers</strong> and paste the following into the{" "}
              <strong>Scripts in Header</strong> box:
            </p>
            <CodePreview
              language="html"
              filename="header-scripts.html"
              code={`<script src="https://cdn.adkit.dev/v1.js" defer></script>`}
              showLineNumbers={false}
            />
            <p className="text-muted-foreground mt-3 text-sm">
              Save the settings. This adds the script to every page on your site.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
                2
              </div>
              <h2 className="text-xl font-semibold m-0">Place a slot using a Custom HTML block</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Open the page or post where you want the ad. In the block editor, click the <strong>+</strong> button,
              search for <strong>Custom HTML</strong>, and add the block. Paste the following:
            </p>
            <CodePreview
              language="html"
              filename="custom-html-block.html"
              code={`<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
  data-adkit-price="2500"
></div>`}
            />
            <p className="text-muted-foreground mt-3 text-sm">
              Replace <code className="text-xs bg-muted px-1 py-0.5 rounded">your-site-id</code> with your site ID
              from the Adkit dashboard. The slot name can be anything descriptive — keep it consistent across pages.
            </p>
            <Callout variant="warning" title="Price is in cents" className="mt-4">
              <code>data-adkit-price="2500"</code> = $25/day.
            </Callout>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
                3
              </div>
              <h2 className="text-xl font-semibold m-0">Verify it works</h2>
            </div>
            <p className="text-muted-foreground">
              Save and publish your page, then view it in a private or incognito window. You should see a dashed-border
              placeholder with "Rent this spot" and your price.
            </p>
          </section>
        </div>
      )}

      {/* Method: functions.php */}
      {method === "functions" && (
        <div className="space-y-12">
          <Callout variant="tip" title="Recommended for developers">
            Uses WordPress's script enqueue API — the proper way to add third-party scripts in WordPress.
          </Callout>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
                1
              </div>
              <h2 className="text-xl font-semibold m-0">Enqueue the script via functions.php</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Go to <strong>Appearance → Theme File Editor</strong>, open{" "}
              <code className="text-sm bg-muted px-1.5 py-0.5 rounded">functions.php</code>, and add the following at
              the bottom of the file:
            </p>
            <CodePreview
              language="php"
              filename="functions.php"
              code={`function adkit_enqueue_script() {
    wp_enqueue_script(
        'adkit-js',
        'https://cdn.adkit.dev/v1.js',
        array(),
        null,
        true // Load in footer
    );
}
add_action( 'wp_enqueue_scripts', 'adkit_enqueue_script' );`}
            />
            <Callout variant="warning" title="Heads up" className="mt-4">
              Edits to your active theme's <code>functions.php</code> are overwritten when the theme updates. Use the
              Child Theme method for changes that survive updates.
            </Callout>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
                2
              </div>
              <h2 className="text-xl font-semibold m-0">Place a slot using a Custom HTML block</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              In the block editor, add a <strong>Custom HTML</strong> block and paste:
            </p>
            <CodePreview
              language="html"
              filename="custom-html-block.html"
              code={`<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
  data-adkit-price="2500"
></div>`}
            />
            <Callout variant="warning" title="Price is in cents" className="mt-4">
              <code>data-adkit-price="2500"</code> = $25/day.
            </Callout>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
                3
              </div>
              <h2 className="text-xl font-semibold m-0">Verify it works</h2>
            </div>
            <p className="text-muted-foreground">
              View your page in a private or incognito window. You should see the placeholder with "Rent this spot" and
              your price.
            </p>
          </section>
        </div>
      )}

      {/* Method: Child Theme */}
      {method === "child" && (
        <div className="space-y-12">
          <Callout variant="tip" title="Best for long-term use">
            A child theme preserves your customizations when the parent theme updates. Requires FTP or file manager
            access.
          </Callout>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
                1
              </div>
              <h2 className="text-xl font-semibold m-0">Create the child theme directory</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              In <code className="text-sm bg-muted px-1.5 py-0.5 rounded">wp-content/themes/</code>, create a new
              folder (e.g. <code className="text-sm bg-muted px-1.5 py-0.5 rounded">my-theme-child</code>). Add two
              files:
            </p>
            <CodePreview
              language="css"
              filename="wp-content/themes/my-theme-child/style.css"
              code={`/*
 Theme Name:   My Theme Child
 Template:     my-theme
*/`}
            />
            <div className="mt-4">
              <CodePreview
                language="php"
                filename="wp-content/themes/my-theme-child/functions.php"
                code={`<?php
function my_child_enqueue() {
    wp_enqueue_style(
        'parent-style',
        get_template_directory_uri() . '/style.css'
    );

    wp_enqueue_script(
        'adkit-js',
        'https://cdn.adkit.dev/v1.js',
        array(),
        null,
        true
    );
}
add_action( 'wp_enqueue_scripts', 'my_child_enqueue' );`}
              />
            </div>
            <p className="text-muted-foreground mt-3 text-sm">
              Replace <code className="text-xs bg-muted px-1 py-0.5 rounded">my-theme</code> with your actual parent
              theme folder name (e.g.{" "}
              <code className="text-xs bg-muted px-1 py-0.5 rounded">twentytwentyfour</code>).
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
                2
              </div>
              <h2 className="text-xl font-semibold m-0">Activate the child theme</h2>
            </div>
            <p className="text-muted-foreground">
              Go to <strong>Appearance → Themes</strong> and activate your child theme. Your site will look identical
              to before — the child theme inherits all styling from the parent.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
                3
              </div>
              <h2 className="text-xl font-semibold m-0">Place a slot using a Custom HTML block</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              In the block editor, add a <strong>Custom HTML</strong> block and paste:
            </p>
            <CodePreview
              language="html"
              filename="custom-html-block.html"
              code={`<div
  data-adkit-site="your-site-id"
  data-adkit-slot="sidebar"
  data-adkit-aspect-ratio="4:3"
  data-adkit-price="2500"
></div>`}
            />
            <Callout variant="warning" title="Price is in cents" className="mt-4">
              <code>data-adkit-price="2500"</code> = $25/day.
            </Callout>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
                4
              </div>
              <h2 className="text-xl font-semibold m-0">Verify it works</h2>
            </div>
            <p className="text-muted-foreground">
              View your page in a private or incognito window. You should see the dashed-border placeholder with "Rent
              this spot" and your price.
            </p>
          </section>
        </div>
      )}

      {/* Next steps */}
      <section className="pt-8 mt-12 border-t border-border">
        <h2 className="text-xl font-semibold mb-4">Next steps</h2>
        <div className="grid gap-3">
          <a
            href="/docs/js/data-attributes"
            className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors group"
          >
            <div>
              <p className="font-medium text-foreground">Data Attributes</p>
              <p className="text-sm text-muted-foreground">All slot configuration options including theme and size</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
          </a>
          <a
            href="/docs/publisher/dashboard"
            className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors group"
          >
            <div>
              <p className="font-medium text-foreground">Publisher Dashboard</p>
              <p className="text-sm text-muted-foreground">Manage slots, review ad submissions, and track revenue</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
          </a>
        </div>
      </section>
    </article>
  )
}
