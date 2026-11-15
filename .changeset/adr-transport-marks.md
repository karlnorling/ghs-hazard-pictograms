---
'@ghs-hazard-pictograms/core': minor
'@ghs-hazard-pictograms/react': minor
'@ghs-hazard-pictograms/vue': minor
'@ghs-hazard-pictograms/elements': minor
'@ghs-hazard-pictograms/assets': minor
'@ghs-hazard-pictograms/sprite': minor
'@ghs-hazard-pictograms/css': minor
---

Add the four ADR transport marks — marine pollutant (5.2.1.6), fumigation
warning (5.5.2.3), limited quantity (3.4.7) and package orientation arrows
(5.2.1.10) — under a new `transport_marks` category.

ADR separates labels (the numbered class diamonds) from marks, and only the
labels appear on the Wikipedia page this registry is built from, so the marks
are curated in `data/extra-pictograms.json`. All four are public domain. Marks
carry an empty `code` because ADR does not number them.
