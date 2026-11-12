export const MAX_PRERENDER_PAGES: number;
export const noScriptReveal: string;

export type RenderedPage = { html: string; head: string };

export function pageDocument(template: string, rendered: RenderedPage): string;

export function writeStaticPages(options: {
  template: string;
  routes: string[];
  render: (route: string) => RenderedPage;
  outDir: string;
  warn?: (message: string) => void;
}): Promise<string[]>;