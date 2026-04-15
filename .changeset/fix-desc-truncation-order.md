---
'@ghs-hazard-pictograms/react': patch
---

Fix description truncation applied after HTML escaping instead of before.

Previously, the 300-character limit on default description text was applied after HTML-escaping, causing escape sequences like `&amp;` to consume multiple characters of the budget. The truncation now happens before escaping so the limit applies to visible characters.
