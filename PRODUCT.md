<!-- stardust:provenance
writtenBy: stardust:replica
writtenAt: 2026-09-23T00:00:00Z
mode: bounded-single
synthesizedFrom:
  - stardust/current/pages/us-owneroperator-default-shtml.json
  - stardust/current/capture/tokens.json
againstInput: https://customcritical.fedex.com/us/owneroperator/default.shtml
-->

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Prospective owner-operators (independent contractors who own or plan to own a
straight truck or tractor-trailer) evaluating a contracting relationship with
FedEx Custom Critical's expedited-freight fleet. Secondary audience: existing
owner-operators looking up program details, qualifications, or the shipping
toolkit.

## Product Purpose

Recruit and inform independent-contractor owner-operators for the FedEx
Custom Critical fleet: explain the opportunity, the vehicle qualification
tiers, and the path to contract.

## Positioning

_provenance: inferred — basis: page copy and IA are recruiting-oriented
("Owner Operators", "Contract With Us"), not consumer shipping marketing._

One page inside FedEx's broader corporate site, scoped to the Custom
Critical (expedited/white-glove freight) division's owner-operator
recruiting funnel.

## Capabilities and Constraints

- Single captured page (`/us/owneroperator/default.shtml`); this is a
  bounded single-page pilot, not a site-wide inventory.
- The page's own content stylesheets (`/css/fedexcc_resp.css`,
  `/css/main-min.css`) 404 on the live origin as of capture time — see
  Evidence on Hand. The shared global header/footer (`fxg-*`) load fine
  from a separate, working stylesheet.
- One same-site telemetry beacon (`/rb_bf52723oqq`) and Google Analytics;
  no forms, no search, no client-hydrated content on this page (see
  `stardust/dynamic-features.md`).

## Brand Commitments

_provenance: inferred — basis: shared `fxg-header`/`fxg-footer` chrome._

- Register: **brand** (corporate/recruiting), delivered through FedEx's
  standard purple (`rgb(77, 20, 140)`) global header/footer system, shared
  across FedEx properties.
- Brand personality observed: plain-spoken, informational, no motion or
  visual flourish in the captured page body.

## Evidence on Hand

- `stardust/current/pages/us-owneroperator-default-shtml.json` — captured
  content, headings, CTAs, media inventory.
- `stardust/current/pages/us-owneroperator-default-shtml.html` — settled
  rendered DOM.
- `stardust/current/assets/screenshots/us-owneroperator-default-shtml.png`
  — full-page screenshot, ground truth for recreation.
- `stardust/current/capture/tokens.json` — per-element computed styles at
  1440/360/1920px, lifted from the live page.
- `stardust/current/_crawl-log.json` — crawl + dynamic-surface log.
- Confirmed via direct fetch: `/css/fedexcc_resp.css` → 404,
  `/css/main-min.css` → 404 (both checked at capture time,
  2026-09-22). `//www.fedex.com/css/t2/master-min.css` and
  `//ftn.fedex.com/corp/css/legacy/main.css` → 200 (these style the shared
  header/footer only).

## Product Principles

_provenance: inferred — basis: replicated from the captured state, not
authored._ The captured page is treated as ground truth, including its
current defects (see `stardust/direction.md` and the empty inconsistency
register) — this is a same-design migration, not a redesign.

## Accessibility & Inclusion

Not evaluated in this pass — out of scope for a pixel-fidelity replica
(no accessibility audit was requested).
