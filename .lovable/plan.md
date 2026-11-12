# Indexing improvements

## Changes
- Share the existing route tree between the browser and a server-render entry, preserving all page copy, design, client createRoot behaviour and classic Vite hosting.
- Add a capped Vite closeBundle step that renders the 15 public routes using renderToString, StaticRouter and Helmet context. Replace each route's head tags, retain static video tags and assets, and write nested index.html files. Preserve an untouched SPA fallback; report any route-specific rendering failure.
- Add no-JavaScript reveal styles only to generated HTML so crawler-visible text is not hidden.
- Prepare the exact IndexNow key file and submission script using sitemap URLs. Do not submit before publishing.
- Keep sitemap lastmod omitted: today's generation date is not an authoritative page-specific significant-content timestamp, and no visible content is changing.

## Verification and limitations
- Run all tests, including server rendering of all routes and metadata/video/fallback checks. Inspect generated home, product, help and privacy HTML.
- Compare current and generated pages' visible text/screenshots and check client navigation and console errors where production output is accessible.
- The environment runs builds automatically; do not invoke a manual production build. Check automatic build results and inspect dist if exposed.
- Nested HTML serving on Lovable hosting is unverified. The normal SPA remains a safe fallback; no hosting configuration changes.

## Technical details
Use a temporary Vite SSR bundle during closeBundle, outside the client asset graph, then remove it after rendering. Browser-only accesses currently occur in effects or event handlers and do not execute during server rendering. Cap generation at 100 pages.
