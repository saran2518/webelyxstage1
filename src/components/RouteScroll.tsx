import { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const motion = (): ScrollBehavior =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";

/** Leave history traversal to the browser; handle every new navigation entry and initial hash loads. */
const RouteScroll = () => {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();
  const previousPathname = useRef(pathname);
  const firstRender = useRef(true);

  useLayoutEffect(() => {
    const pathnameChanged = previousPathname.current !== pathname;
    const isFirst = firstRender.current;
    previousPathname.current = pathname;
    firstRender.current = false;
    if (navigationType === "POP" && !(isFirst && hash)) return;

    if (hash) {
      let anchor = hash.slice(1);
      try { anchor = decodeURIComponent(anchor); } catch { /* Keep malformed hashes literal. */ }
      const target = document.getElementById(anchor) ?? document.getElementsByName(anchor)[0];
      target?.scrollIntoView({ behavior: motion(), block: "start" });
    } else if (pathnameChanged) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: motion() });
    }
  }, [pathname, hash, key, navigationType]);

  return null;
};

export default RouteScroll;
