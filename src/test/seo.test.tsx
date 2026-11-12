import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { Link } from "react-router-dom";
import { seoPages, shareImage } from "@/content/seo";
import { homeStructuredData } from "@/components/Seo";
import { faqSchema } from "@/lib/faq-schema";

describe("technical SEO rules", () => {
  it("includes exactly the 15 real public routes, excluding redirects", () => {
    expect(Object.keys(seoPages)).toHaveLength(15);
    expect(seoPages["/delete-account"]).toBeUndefined();
    expect(seoPages["/help/change-name"]).toBeUndefined();
    expect(seoPages["/"].title).toBe("Elyxer · Built to get you on real dates | Chosen for who you are");
    expect(new Set(Object.values(seoPages).map(page => page.title)).size).toBe(15);
  });
  it("keeps every description between 140 and 160 characters without forbidden words", () => {
    for (const { description } of Object.values(seoPages)) {
      expect(description.length).toBeGreaterThanOrEqual(140);
      expect(description.length).toBeLessThanOrEqual(160);
      expect(description).not.toMatch(/\b(match|matching|like|swipe)\b|—/i);
    }
  });
  it("publishes a sitemap for every real route without invented lastmod dates", () => {
    const xml = readFileSync("public/sitemap.xml", "utf8");
    const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(value => value[1]);
    expect(urls).toEqual(Object.keys(seoPages).map(path => `https://elyxer.co${path}`));
    expect(xml).not.toContain("<lastmod>");
    expect(readFileSync("public/robots.txt", "utf8")).toContain("Sitemap: https://elyxer.co/sitemap.xml");
  });
  it("uses the requested share URL and free INR mobile application offer", () => {
    expect(shareImage).toBe("https://elyxer.co/og-image.jpg");
    const app = homeStructuredData.find(schema => schema["@type"] === "MobileApplication");
    expect(app?.offers).toEqual({ "@type": "Offer", price: 0, priceCurrency: "INR" });
    expect(app?.operatingSystem).toBe("Android, iOS");
  });
  it("derives FAQ answers from the actual answer nodes rather than separate text", () => {
    const schema = faqSchema([{ items: [{ q: "Question?", a: <>Answer. <Link to="/help">Read more</Link></> }] }]);
    expect(schema.mainEntity).toEqual([{ "@type": "Question", name: "Question?", acceptedAnswer: { "@type": "Answer", text: "Answer. Read more" } }]);
  });
});