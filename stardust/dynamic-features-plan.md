<!-- stardust:provenance
writtenBy: stardust:replica
writtenAt: 2026-09-23T00:00:00Z
readArtifacts:
  - stardust/dynamic-features.md
-->

# Dynamic features plan — customcritical.fedex.com (us-owneroperator-default-shtml)

Both detected features (GA4 beacon, first-party telemetry beacon) are
`embed-passthrough` / `self` / `done` — no phased work required. The static
recreation (Phase 3/4 of replica) already ships without them; carry both
tag snippets through unchanged when this page moves through `deploy`
(Phase 5), scoped to the migrated page's `<head>`/scripts per the standard
deploy tag-carry-through step.

No credential, capture, backend, or business-owner decisions are pending.
