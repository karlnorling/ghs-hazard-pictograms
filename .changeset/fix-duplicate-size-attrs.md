---
"@ghs-hazard-pictograms/react": patch
---

Fix duplicate `width`/`height` attributes on the `<svg>` element when `width` or `height` props are passed.

Previously the original SVG dimensions were included in the static attribute string, and consumer-supplied values were appended, producing invalid HTML with duplicate attributes. Width and height are now always emitted once, falling back to the original SVG dimensions when no prop is supplied.
