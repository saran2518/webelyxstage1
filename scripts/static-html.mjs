import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

export const MAX_PRERENDER_PAGES = 100;
export const noScriptReveal = '<noscript><style>[data-reveal],[data-reveal-child]{opacity:1!important;transform:none!important;transition:none!important}</style></noscript>';

export function pageDocument(template, rendered) {
  if (!template.includes('<div id="root"></div>')) throw new Error("Missing empty SPA root");
  // Remove only Helmet-owned fallbacks and the title. Static video tags have no data-rh.
  const cleaned = template.replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace(/<(?:meta|link)\b[^>]*\bdata-rh="true"[^>]*>/gi, "");
  return cleaned.replace("</head>", `${rendered.head}${noScriptReveal}</head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${rendered.html}</div>`);
}

export async function writeStaticPages({ template, routes, render, outDir, warn = console.warn }) {
  if (routes.length > MAX_PRERENDER_PAGES) throw new Error("Static page limit exceeded");
  const failures = [];
  // The unmodified SPA document is retained separately for rewrites and debugging.
  await writeFile(join(outDir, "spa.html"), template);
  for (const route of routes) {
    if (route !== "/" && !/^\/[a-z0-9-]+(?:\/[a-z0-9-]+)*$/.test(route)) {
      throw new Error(`Unsafe static route: ${route}`);
    }
    const directory = join(outDir, route.slice(1));
    await mkdir(directory, { recursive: true });
    let document = template;
    try {
      document = pageDocument(template, render(route));
    } catch (error) {
      failures.push(route);
      warn(`Static rendering fell back to SPA for ${route}: ${error instanceof Error ? error.message : String(error)}`);
    }
    await writeFile(join(directory, "index.html"), document);
  }
  return failures;
}