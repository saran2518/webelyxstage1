import { useEffect } from "react";

/**
 * Lightweight scroll-reveal: adds `.is-visible` to any element with
 * `[data-reveal]` when it enters the viewport. Supports staggered children
 * via `[data-reveal-stagger]` on a parent — children fade in sequentially.
 */
export const useReveal = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-child]")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("is-visible");
          if (el.hasAttribute("data-reveal-stagger")) {
            el.querySelectorAll<HTMLElement>("[data-reveal-child]").forEach(
              (child, i) => {
                child.style.transitionDelay = `${i * 90}ms`;
                child.classList.add("is-visible");
              },
            );
          }
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const scan = () => {
      document
        .querySelectorAll<HTMLElement>(
          "[data-reveal]:not(.is-visible), [data-reveal-stagger]:not(.is-visible)",
        )
        .forEach((el) => io.observe(el));
    };
    scan();

    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
};
