---
'@ghs-hazard-pictograms/core': major
'@ghs-hazard-pictograms/react': major
'@ghs-hazard-pictograms/vue': major
'@ghs-hazard-pictograms/elements': major
'@ghs-hazard-pictograms/sprite': major
---

**Breaking:** GHS07 is renamed from "Health Hazard/Hazardous to Ozone Layer" to
"Health Hazard/Hazardous to the Atmospheric System", following the upstream
source. Because ids and component names are derived from the name, this renames:

- id `ghs07-health-hazard-hazardous-to-ozone-layer` →
  `ghs07-health-hazard-hazardous-to-the-atmospheric-system`
- React/Vue `Ghs07HealthHazardHazardousToOzoneLayer` →
  `Ghs07HealthHazardHazardousToTheAtmosphericSystem`
- the matching custom element and sprite id

`getPictogramByCode('GHS07')` is unaffected and is the stable way to reach this
pictogram.
