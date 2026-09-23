<!-- stardust:provenance
writtenBy: stardust:replica
writtenAt: 2026-09-23T00:00:00Z
readArtifacts:
  - stardust/current/_crawl-log.json
  - stardust/current/pages/us-owneroperator-default-shtml.json
-->

# Dynamic features — customcritical.fedex.com (us-owneroperator-default-shtml)

Single-page pilot; dynamic surface detected by `extract --dynamics`
(`_crawl-log.json#dynamicSurface`). No forms, no search, no client
hydration, no modals/players/tags-on-new-host beyond standard analytics.

## Listings contract

none — this page is not a listing/index page.

## Features

| # | id | feature | class | reach | disposition | reproducibility | status | pattern | decision / owner | evidence |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | ga4-beacon | Google Analytics 4 collect beacon (`analytics.google.com/g/collect`) | T | 1 page | embed-passthrough | self | done | third-party tag, carried through unchanged at deploy | none — standard analytics, ship as-is | `_crawl-log.json#dynamicSurface.endpoints[0]` |
| 2 | site-telemetry-beacon | Same-site telemetry beacon (`POST /rb_bf52723oqq`) | T | 1 page, 4 hits | embed-passthrough | self | done | first-party analytics beacon; not a data-fed feature, no page content depends on its response | none — no content or interaction depends on it | `_crawl-log.json#dynamicSurface.endpoints[1]` |

## Decision batch

None — both rows are `self`-reproducible passthrough tags with no owner
decision required.

## Register (decided-out)

| feature | reason | production statement |
|---|---|---|
| _(none)_ | — | — |
