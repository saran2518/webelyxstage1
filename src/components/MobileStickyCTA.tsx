import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EarlyAccessButton from "@/components/EarlyAccessButton";
import { shouldShowMobileCta } from "./mobile-cta-visibility";

const MobileStickyCTA = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroActions = Array.from(document.querySelectorAll<HTMLElement>(".ls-hero-mobile-action .early-access-action, .ls-hero-desktop-action .early-access-action"));
    const activeHeroAction = () => heroActions.find((el) => el.getClientRects().length > 0);
    const footer = document.querySelector(".light-shadow-shell > footer");
    const nav = document.querySelector(".light-shadow-shell > nav");
    const heroInView = () => { const el = activeHeroAction(); return el ? el.getBoundingClientRect().bottom > 0 : false; };
    let heroActionVisible = heroActions.length > 0 ? heroInView() || !activeHeroAction() && heroActions.length > 0 && false : false;
    if (heroActions.length > 0 && !activeHeroAction()) heroActionVisible = false;
    let footerVisible = false;
    const update = () => setVisible(shouldShowMobileCta(heroActionVisible, footerVisible, nav?.getAttribute("data-menu-open") === "true"));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === heroAction) heroActionVisible = entry.isIntersecting || entry.boundingClientRect.bottom > 0;
        if (entry.target === footer) footerVisible = entry.isIntersecting;
      }
      update();
    });
    if (heroAction) observer.observe(heroAction);
    if (footer) observer.observe(footer);
    const menuObserver = new MutationObserver(update);
    if (nav) menuObserver.observe(nav, { attributes: true, attributeFilter: ["data-menu-open"] });
    update();
    return () => { observer.disconnect(); menuObserver.disconnect(); };
  }, [pathname]);

  return <div className={`mobile-sticky-cta ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
    <EarlyAccessButton />
  </div>;
};

export default MobileStickyCTA;