---
_provenance:
  writtenBy: stardust:replica
  writtenAt: 2026-09-23T00:00:00Z
  againstInput: https://customcritical.fedex.com/us/owneroperator/default.shtml
  readArtifacts:
    - stardust/current/pages/us-owneroperator-default-shtml.json
    - stardust/current/capture/tokens.json
    - stardust/current/_crawl-log.json
---

# Direction — preserve mode (same-design migration)

Mode: PRESERVE. Flow: `replica` (flowSource: user-phrase — the user invoked
`/stardust:replica <URL>` directly).

**Entry scope: bounded single-page pilot** (`extract --single`), per the
user's explicit choice when asked pilot-vs-full-site. `stardust/current/`
has no `PRODUCT.md`/`DESIGN.md`/`DESIGN.json` (crawl.mjs in single-page mode
skips the descriptive-synthesis phase) — this run takes the **bounded
promotion branch** (`reference/preserve-direction.md` § 1a).

Synthesized (bounded-single): `current/pages/us-owneroperator-default-shtml.json`
+ Phase-3 CSS lift (`current/capture/tokens.json`) → `PRODUCT.md` ·
`DESIGN.md` · `DESIGN.json` (at 2026-09-23T00:00:00Z).

Permitted deltas: ONLY the entries of
`stardust/replica/inconsistency-register.md` (0 entries — pure replica).

Fidelity: ia verbatim · design verbatim · content verbatim.

## Named decision: replicate the 404'd content-CSS defect as-is

During extraction, the captured page showed unstyled body content
(browser-default Times New Roman headings/lists/links) and a literal
`[an error occurred while processing this directive]` SSI error string in
the sidebar. Investigation confirmed root cause: two of the page's own
content stylesheets (`/css/fedexcc_resp.css`, `/css/main-min.css`) return
HTTP 404 on the live origin (checked 2026-09-22), while the shared
chrome stylesheets (`//www.fedex.com/css/t2/master-min.css`,
`//ftn.fedex.com/corp/css/legacy/main.css`) return 200. This is a genuine,
currently-live production defect, not a capture artifact.

Asked the user whether to (a) replicate the live site exactly as it
currently renders (unstyled body, SSI error text included), or (b) register
a fix to restyle the body content and drop the error string. **User chose
(a): replicate as-is.** Rationale recorded here rather than assumed: the
source-fidelity gate measures against the live site as it renders *right
now* — "fixing" the defect would fail that gate by construction. The
inconsistency register therefore stays empty for this defect.

## Named decision: the live site is genuinely non-responsive below the chrome

Initial measurement (a fresh Playwright context at 360px width) showed
`#banner`/`#content` staying fixed at their desktop pixel widths (990px
content column, scrollWidth 998 vs viewport 360) — i.e. no mobile reflow,
just horizontal overflow. A first attempt to author a fluid mobile layout
(shrinking `#content` via `max-width`) was **wrong**: cropping the live
360px capture at pixel level confirmed the paragraph and banner image are
truncated mid-line/mid-image, not wrapped — proving the fixed-width,
non-responsive behavior is real, not a measurement artifact. The prototype
was corrected to use fixed `width` (not `max-width`) on `#banner`/`#content`
at all breakpoints, matching the live site's actual (broken) behavior. The
header/footer chrome, by contrast, load from a separate working stylesheet
and ARE genuinely responsive (hamburger nav + column stacking below
~768px) — reproduced accordingly.

## Dynamic surface

Phase 1 ran `extract --dynamics`. Surfaced in
`stardust/dynamic-features.md` / `stardust/dynamic-features-plan.md`: one
same-site telemetry beacon, Google Analytics, no forms/search/hydration on
this page. Disposition: informational only, no reimplementation required.
