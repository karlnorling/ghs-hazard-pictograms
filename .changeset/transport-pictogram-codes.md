---
'@ghs-hazard-pictograms/core': minor
---

Populate `code` for all 21 transport pictograms with their ADR label
designation (`"1"`, `"1.4"`, `"2.1"`, `"7A"`, `"9"`, …), and add
`getPictogramByCode()` to look up any pictogram by code.

Transport pictograms previously shipped with `code: ""`, so they could only be
found by slug id or by parsing their name. Pictogram ids are unchanged.
