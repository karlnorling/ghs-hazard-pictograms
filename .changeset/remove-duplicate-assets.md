---
'@ghs-hazard-pictograms/assets': major
'@ghs-hazard-pictograms/sprite': major
---

Remove duplicate and legacy asset files (about 2.7 MB).

- Removed the old space-named folders (`ghs04_compressed gas`, `ghs07_health hazard_hazardous to ozone layer`, `ghs08_serious health hazard`, `ghs09_hazardous to the environment`); use the space-free folders, which contain identical files.
- Removed `physical_and_health_hazard_pictograms/ghs05_corrosive`; use `physical_hazards_pictograms/ghs05_corrosive`. The matching `physical-and-health-hazard-pictograms-ghs05-*` symbols are gone from the SVG sprite.
- Removed the legacy `assets/sprites/` folder; use `@ghs-hazard-pictograms/sprite` and `@ghs-hazard-pictograms/css` instead.
