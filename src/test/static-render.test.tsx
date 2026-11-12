import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { HelmetProvider } from "react-helmet-async";
import { render, routes } from "@/entry-static";
import { seoPages } from "@/content/seo";
import { MAX_PRERENDER_PAGES, pageDocument, writeStaticPages } from "../../scripts/static-html.mjs";
import { indexNowPayload, key } from "../../scripts/indexnow.mjs";

const template = readFileSync("index.html", "utf8");
const originalCanUseDOM = HelmetProvider.canUseDOM;
beforeAll(() => { HelmetProvider.canUseDOM = false; });
afterAll(() => { HelmetProvider.canUseDOM = originalCanUseDOM; });

describe("static route generation", () => {
  it("renders all 15 real routes with their own metadata and content", () => {
    expect(routes).toHaveLength(15);
    for (const route of routes) {
      const result = render(route);
      const document = new DOMParser().parseFromString(pageDocument(template, result), "text/html");
      expect(document.querySelector("#root h1")?.textContent?.length).toBeGreaterThan(0);
      expect(Array.from(document.querySelectorAll("main p")).some(p => (p.textContent?.length ?? 0) > 20)).toBe(true);
      expect(document.title).toBe(seoPages[route].title);
      expect(document.head.querySelectorAll("title")).toHaveLength(1);
      expect(document.querySelectorAll('meta[name="description"]')).toHaveLength(1);
      expect(document.querySelector('meta[name="description"]')?.getAttribute("content")).toBe(seoPages[route].description);
      expect(document.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe(`https://elyxer.co${route}`);
      expect(document.querySelector('meta[property="og:title"]')?.getAttribute("content")).toBe(seoPages[route].title);
      expect(document.querySelector('meta[name="twitter:title"]')?.getAttribute("content")).toBe(seoPages[route].title);
      expect(document.querySelectorAll('meta[property^="og:video"]')).toHaveLength(5);
      expect(document.querySelector('meta[property="og:video"]')?.getAttribute("data-rh")).toBeNull();
      expect(document.querySelector('noscript')?.textContent).toContain("opacity:1!important");
      if (route === "/" || route === "/help") expect(result.head).toContain('application/ld+json');
    }
  });
  it("excludes redirect and unknown routes", () => {
    expect(() => render("/delete-account")).toThrow();
    expect(() => render("/unknown")).toThrow();
  });
  it("writes nested files and isolates a failed route without changing the SPA fallback", async () => {
    const outDir = await mkdtemp(join(tmpdir(), "elyxer-static-test-"));
    try {
      const failures = await writeStaticPages({ template, routes: ["/", "/help/identity", "/privacy"], outDir,
        render: (route: string) => { if (route === "/privacy") throw new Error("test failure"); return render(route); }, warn: () => {} });
      expect(failures).toEqual(["/privacy"]);
      expect(await readFile(join(outDir, "spa.html"), "utf8")).toBe(template);
      expect(await readFile(join(outDir, "privacy/index.html"), "utf8")).toBe(template);
      expect(await readFile(join(outDir, "help/identity/index.html"), "utf8")).toContain(render("/help/identity").html);
      await expect(readFile(join(outDir, "delete-account/index.html"))).rejects.toThrow();
    } finally { await rm(outDir, { recursive: true, force: true }); }
  });
  it("caps generated pages before writing files", async () => {
    await expect(writeStaticPages({ template, routes: Array(MAX_PRERENDER_PAGES + 1).fill("/"), outDir: "/unused", render })).rejects.toThrow("Static page limit exceeded");
  });
});

describe("IndexNow preparation", () => {
  it("uses the exact verification key and all 15 sitemap URLs without submitting", () => {
    expect(readFileSync(`public/${key}.txt`, "utf8")).toBe("c7f80054a4a560538f7e4442b1c908b1");
    expect(indexNowPayload(readFileSync("public/sitemap.xml", "utf8"))).toEqual({
      host: "elyxer.co", key: "c7f80054a4a560538f7e4442b1c908b1",
      keyLocation: "https://elyxer.co/c7f80054a4a560538f7e4442b1c908b1.txt",
      urlList: routes.map(route => `https://elyxer.co${route}`),
    });
  });
});