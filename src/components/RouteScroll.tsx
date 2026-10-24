import { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/** Leave history traversal to the browser; handle every new navigation entry. */
const RouteScroll = () => {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();
  const previousPathname = useRef(pathname);

  useLayoutEffect(() => {
    const pathnameChanged = previousPathname.current !== pathname;
    previousPathname.current = pathname;
    if (navigationType === "POP") return;

    if (hash) {
      let anchor = hash.slice(1);
      try { anchor = decodeURIComponent(anchor); } catch { /* Keep malformed hashes literal. */ }
      const target = document.getElementById(anchor) ?? document.getElementsByName(anchor)[0];
      target?.scrollIntoView({ behavior: "instant", block: "start" });
    } else if (pathnameChanged) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    }
  }, [pathname, hash, key, navigationType]);

  return null;
};

export default RouteScroll;