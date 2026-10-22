import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EarlyAccessButton from "@/components/EarlyAccessButton";
import { shouldShowMobileCta } from "./mobile-cta-visibility";

const MobileStickyCTA = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".ls-hero");
    const footer = document.querySelector(".light-shadow-shell > footer");
    const nav = document.querySelector(".light-shadow-shell > nav");
    let heroVisible = Boolean(hero);
    let footerVisible = false;
    const update = () => setVisible(shouldShowMobileCta(heroVisible, footerVisible, nav?.getAttribute("data-menu-open") === "true"));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) heroVisible = entry.isIntersecting;
        if (entry.target === footer) footerVisible = entry.isIntersecting;
      }
      update();
    });
    if (hero) observer.observe(hero);
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