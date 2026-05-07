---
'@ghs-hazard-pictograms/assets': patch
'@ghs-hazard-pictograms/core': patch
'@ghs-hazard-pictograms/css': patch
'@ghs-hazard-pictograms/react': patch
'@ghs-hazard-pictograms/sprite': patch
---

Improve npm descriptions and keywords for better discoverability.

All packages now mention ADR/UN transport pictograms in their description
(previously only GHS was mentioned, omitting half the library). Added
high-value keywords across all packages: `chemical-safety`, `clp`,
`dangerous-goods`, `hazmat`, `labeling`, `sds`. Package-specific additions:
`core` gains `ghs-pictogram`, `registry`; `css` gains `css-sprite`, `vanilla`;
`react` gains `accessible`, `jsx`, `react-component`, `tsx`, `typescript`;
`sprite` gains `inline-svg`, `svg-sprite`; `assets` gains `jpg`.
