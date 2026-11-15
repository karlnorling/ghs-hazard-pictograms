---
'@ghs-hazard-pictograms/core': minor
'@ghs-hazard-pictograms/react': minor
'@ghs-hazard-pictograms/vue': minor
'@ghs-hazard-pictograms/elements': minor
'@ghs-hazard-pictograms/assets': minor
'@ghs-hazard-pictograms/sprite': minor
'@ghs-hazard-pictograms/css': minor
---

Add the missing UN/ADR transport pictograms.

The **class 9A lithium battery label** (`code: "9A"`), distinct from class 9 and
new in the 2019 ADR revision, joins the `transport` category.

Seven ADR **marks** arrive in a new `transport_marks` category: marine pollutant
(5.2.1.6), fumigation warning (5.5.2.3), limited quantity (3.4.7), package
orientation arrows (5.2.1.10), elevated temperature (5.3.3), orange plate
(5.3.2) and the lithium battery mark (5.2.1.9).

ADR separates labels — the numbered class diamonds — from marks. The Wikipedia
page this registry is built from omits the 9A label and carries none of the
marks, so both are curated in `data/extra-pictograms.json`. Every file is
public domain. Marks carry an empty `code`, because ADR does not number them.

The excepted quantity mark (3.5.4.2) remains absent: it is the only one with no
public-domain artwork available, and a test pins that omission.
