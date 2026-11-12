import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

export const key = "c7f80054a4a560538f7e4442b1c908b1";
export function indexNowPayload(sitemap) {
  const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
  if (urlList.length !== 15 || new Set(urlList).size !== 15 || urlList.some(url => new URL(url).origin !== "https://elyxer.co")) {
    throw new Error("Expected exactly 15 distinct Elyxer sitemap URLs");
  }
  return { host: "elyxer.co", key, keyLocation: `https://elyxer.co/${key}.txt`, urlList };
}

// Importing this module for tests never sends a notification.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const sitemap = await readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8");
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(indexNowPayload(sitemap)),
      signal: AbortSignal.timeout(30000),
    });
    console.log(`IndexNow HTTP status: ${response.status}`);
    if (!response.ok) process.exitCode = 1;
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  }
}