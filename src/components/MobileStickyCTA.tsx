import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EarlyAccessButton from "@/components/EarlyAccessButton";
import { shouldShowMobileCta } from "./mobile-cta-visibility";

const MobileStickyCTA = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Watch whichever hero action is rendered at the current width (mobile or desktop).
    const heroActions = Array.from(document.querySelectorAll<HTMLElement>(
      ".ls-hero-mobile-action .early-access-action, .ls-hero-desktop-action .early-access-action",
    ));
    const activeHeroAction = () => heroActions.find((el) => el.getClientRects().length > 0);
    const footer = document.querySelector(".light-shadow-shell > footer");
    const nav = document.querySelector(".light-shadow-shell > nav");
    let footerVisible = false;
    const heroActionVisible = () => {
      const el = activeHeroAction();
      return el ? el.getBoundingClientRect().bottom > 0 : false;
    };
    const update = () => setVisible(shouldShowMobileCta(heroActionVisible(), footerVisible, nav?.getAttribute("data-menu-open") === "true"));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === footer) footerVisible = entry.isIntersecting;
      }
      update();
    });
    heroActions.forEach((el) => observer.observe(el));
    if (footer) observer.observe(footer);
    const menuObserver = new MutationObserver(update);
    if (nav) menuObserver.observe(nav, { attributes: true, attributeFilter: ["data-menu-open"] });
    window.addEventListener("resize", update);
    update();
    return () => { observer.disconnect(); menuObserver.disconnect(); window.removeEventListener("resize", update); };
  }, [pathname]);

  return <div className={`mobile-sticky-cta ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
    <EarlyAccessButton />
  </div>;
};

export default MobileStickyCTA;
