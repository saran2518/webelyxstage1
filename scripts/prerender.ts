import { build, type Plugin } from "vite";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { writeStaticPages } from "./static-html.mjs";

export function staticPages(): Plugin {
  let root = "";
  let outDir = "";
  return {
    name: "elyxer-static-pages",
    apply: "build",
    configResolved(config) {
      root = config.root;
      outDir = path.resolve(root, config.build.outDir);
    },
    async closeBundle() {
      const temporary = await mkdtemp(path.join(tmpdir(), "elyxer-static-"));
      try {
        // No browser, hosting changes, or second client build. Bundle only the server entry.
        await build({
          root, configFile: false, publicDir: false, logLevel: "warn",
          resolve: { alias: { "@": path.resolve(root, "src") } },
          esbuild: { jsx: "automatic" },
          ssr: { noExternal: true },
          build: {
            ssr: path.resolve(root, "src/entry-static.tsx"), outDir: temporary,
            emptyOutDir: true, copyPublicDir: false,
            rollupOptions: { output: { entryFileNames: "render.mjs", assetFileNames: "assets/[name]-[hash][extname]" } },
          },
        });
        const { render, routes } = await import(pathToFileURL(path.join(temporary, "render.mjs")).href);
        const template = await readFile(path.join(outDir, "index.html"), "utf8");
        const failures = await writeStaticPages({ template, routes, render, outDir, warn: message => this.warn(message) });
        console.log(`Static HTML: ${routes.length - failures.length}/${routes.length} routes rendered; ${failures.length} SPA fallbacks.`);
      } catch (error) {
        // A server-bundling failure must never prevent the unchanged SPA from publishing.
        this.warn(`Static generation unavailable; preserving SPA output: ${error instanceof Error ? error.message : String(error)}`);
      } finally {
        await rm(temporary, { recursive: true, force: true });
      }
    },
  };
}