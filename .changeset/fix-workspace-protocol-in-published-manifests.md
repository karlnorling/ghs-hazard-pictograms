---
"@ghs-hazard-pictograms/css": patch
"@ghs-hazard-pictograms/elements": patch
"@ghs-hazard-pictograms/react": patch
"@ghs-hazard-pictograms/vue": patch
---

Replace `workspace:*` with real version ranges for the `@ghs-hazard-pictograms/core` dependency.

The npm CLI does not rewrite Yarn's `workspace:` protocol before publishing, so the specifier leaked into published manifests and caused `EUNSUPPORTEDPROTOCOL` errors for npm users (same root cause as karlnorling/iso-safety-signs#9).
