---
"@ghs-hazard-pictograms/react": patch
---

HTML-escape `title` and `description` props before injecting into SVG markup.

Previously, values passed to these props were interpolated directly into an HTML string passed to `dangerouslySetInnerHTML`, allowing consumers to inject arbitrary HTML (XSS). Values are now escaped with `&amp;`, `&lt;`, `&gt;`, and `&quot;` substitutions at render time.
