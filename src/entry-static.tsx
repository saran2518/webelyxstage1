import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "@/components/AppRoutes";
import { seoPages } from "@/content/seo";

export const routes = Object.keys(seoPages);

export function render(path: string) {
  if (!seoPages[path]) throw new Error(`Not a public static route: ${path}`);
  const context: { helmet?: HelmetServerState | null } = {};
  const html = renderToString(
    <HelmetProvider context={context}>
      <TooltipProvider>
        <StaticRouter location={path}><AppRoutes /></StaticRouter>
      </TooltipProvider>
    </HelmetProvider>,
  );
  const { helmet } = context;
  if (!helmet) throw new Error(`Missing Helmet metadata: ${path}`);
  return { html, head: helmet.title.toString() + helmet.meta.toString() + helmet.link.toString() + helmet.script.toString() };
}