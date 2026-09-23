<!-- stardust:provenance
writtenBy: stardust:replica
writtenAt: 2026-09-23T00:00:00Z
mode: bounded-single
synthesizedFrom:
  - stardust/current/pages/us-owneroperator-default-shtml.json
  - stardust/current/capture/tokens.json
againstInput: https://customcritical.fedex.com/us/owneroperator/default.shtml
-->

---
name: FedEx Custom Critical — Owner Operators
description: Captured current-state visual system for one page (bounded-single replica pilot)
colors:
  header-purple: "rgb(77, 20, 140)"
  footer-bg: "rgb(250, 250, 250)"
  footer-text: "rgb(89, 89, 91)"
  body-text: "rgb(0, 0, 0)"
  link: "rgb(0, 0, 238)"
typography:
  chrome-nav:
    fontFamily: "Roboto, sans-serif"
    fontSize: "14px"
    fontWeight: 400
  chrome-footer-link:
    fontFamily: "Roboto, sans-serif"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: "25px"
  body-h1:
    fontFamily: "\"Times New Roman\", Times, serif"
    fontSize: "32px"
    fontWeight: 700
  body-h2:
    fontFamily: "\"Times New Roman\", Times, serif"
    fontSize: "24px"
    fontWeight: 700
  body-text:
    fontFamily: "\"Times New Roman\", Times, serif"
    fontSize: "16px"
    fontWeight: 400
spacing:
  content-width: "990px"
  header-height: "75px"
components:
  button-link:
    textColor: "{colors.link}"
    typography: "{typography.body-text}"
---

# Design System: FedEx Custom Critical — Owner Operators (captured)

## Overview

This is a **captured current-state record**, not a designed system — it
describes what the live page renders today, defects included, per
`stardust/direction.md`'s preserve-mode contract. Two visual registers
coexist on this one page:

1. A branded **chrome layer** (header, footer) — FedEx's shared purple
   (`rgb(77, 20, 140)`) global navigation/footer component, styled with
   Roboto, loaded from a working sitewide stylesheet and genuinely
   responsive (hamburger nav below ~768px).
2. An **unstyled body-content layer** (page title, sidebar TOC, body
   copy) — this page's own content stylesheets 404 on the live origin, so
   the browser's default UA stylesheet renders it: serif (Times New
   Roman), default heading sizes, default blue underlined links, default
   nested list bullets (disc/circle/square), and it does **not** reflow at
   narrow viewports (fixed ~990px, horizontal overflow at mobile widths).

**Key Characteristics:**
- Two unrelated visual registers on one page (branded chrome vs. unstyled
  body), not a single coherent system.
- The body-content register is the *literal absence* of a design system,
  not a minimalist choice — captured and preserved as-is per the replica
  contract.

## Colors

- **Header/footer purple** (`rgb(77, 20, 140)`): header background, footer
  bottom bar background.
- **Footer background** (`rgb(250, 250, 250)`): footer primary/social rows.
- **Footer text** (`rgb(89, 89, 91)`): footer column headings and links.
- **Body text** (`rgb(0, 0, 0)`): all body-content headings and paragraphs
  (browser default).
- **Link blue** (`rgb(0, 0, 238)`): body-content links (browser default
  `:link` color — unvisited).

## Typography

**Chrome font:** Roboto, sans-serif (header nav, footer).
**Body font:** "Times New Roman", Times, serif (browser default — no
page-specific font is declared for headings/body/lists).

### Hierarchy
- **h1** (700, 32px): page title ("Owner Operators").
- **h2** (700, 24px): section headings ("Additional information",
  "Overview / Advantages", "Qualifications", "Contract With Us").
- **Body** (400, 16px): paragraphs, list items.
- **Footer link** (300, 16px, 25px line-height): footer navigation.
- **Chrome nav** (400, 14px): header nav labels.

## Layout

Two independent layout models on one page:
- **Chrome** (header/footer): fluid, full viewport width; footer stacks to
  a single column below ~768px (Bootstrap-style `col-sm-4` grid, from the
  working global stylesheet).
- **Body content** (`#banner`, `#content`): fixed pixel widths — banner
  1424px (image 745×150 flush left), content column 990px, centered at
  desktop widths. **Does not reflow** at mobile widths; the viewport
  simply scrolls horizontally past the fixed-width column. Confirmed by
  cropping the live page's own 360px-wide capture: text and the banner
  image are truncated mid-line/mid-image, not wrapped.

## Elevation & Depth

None observed. Flat throughout — no shadows on either the chrome or body
layer.

## Shapes

None observed. No border-radius, no distinctive corner treatment on either
layer; the footer social icons are square sprite crops.

## Components

### Navigation
Header: logo + 4 text nav labels + search icon at desktop; collapses to a
single hamburger button (`#fxg-mobile-menu-btn`) below ~768px, from the
site's shared framework CSS.

### Links (body content)
Browser-default styling: blue (`rgb(0,0,238)`), underlined, no hover
treatment observed/captured.

### Footer
Three-column layout at desktop ("Our Company", "More from FedEx" ×2
sub-columns, social icons row, purple bottom bar); stacks to one column at
mobile.

## Do's and Don'ts

### Do:
- **Do** leave the body-content region unstyled (browser defaults) — this
  is the verified current state of the live page, not an omission.
- **Do** keep the body-content column at a fixed 990px width; it does not
  reflow on the live site.

### Don't:
- **Don't** apply a design system to the body-content region beyond
  browser defaults — that would diverge from the captured source.
- **Don't** "fix" the 404'ing content stylesheet by inventing plausible
  CSS — no register entry authorizes it (see
  `stardust/replica/inconsistency-register.md`).
