import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EarlyAccessButton from "@/components/EarlyAccessButton";
import { shouldShowMobileCta } from "./mobile-cta-visibility";

const MobileStickyCTA = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroAction = document.querySelector(".ls-hero-mobile-action .early-access-action");
    const footer = document.querySelector(".light-shadow-shell > footer");
    const nav = document.querySelector(".light-shadow-shell > nav");
    let heroActionVisible = Boolean(heroAction);
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