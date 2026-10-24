import { useEffect, useRef } from "react";

/** Decorative drizzle, confined to the mobile photo's own box. */
export default function MobileHeroRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const photo = canvas?.parentElement;
    if (!canvas || !context || !photo) return;

    const mobile = window.matchMedia("(max-width: 767px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const drops = Array.from({ length: 140 }, () => ({
      x: Math.random(), y: Math.random(),
      length: 8 + Math.random() * 16,
      width: 0.7 + Math.random() * 0.5,
      opacity: 0.10 + Math.random() * 0.22,
      speed: 85 + Math.random() * 120,
    }));
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastTime = 0;
    let rainColour = "";
    const slant = Math.tan(10 * Math.PI / 180);

    const draw = (elapsed = 0) => {
      context.clearRect(0, 0, width, height);
      for (const drop of drops) {
        if (elapsed) {
          const distance = drop.speed * elapsed;
          drop.y += distance / height;
          drop.x -= distance * slant / width;
          if (drop.y * height > height + drop.length) {
            drop.y = -drop.length / height;
            drop.x = Math.random();
          }
          if (drop.x * width < -drop.length) drop.x = 1 + drop.length / width;
        }
        context.globalAlpha = drop.opacity;
        context.strokeStyle = rainColour;
        context.lineWidth = drop.width;
        context.beginPath();
        context.moveTo(drop.x * width, drop.y * height);
        context.lineTo(drop.x * width - drop.length * slant, drop.y * height + drop.length);
        context.stroke();
      }
      context.globalAlpha = 1;
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
    };
    const animate = (time: number) => {
      if (!mobile.matches || reducedMotion.matches || document.hidden) {
        stop();
        return;
      }
      draw(lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0);
      lastTime = time;
      frame = requestAnimationFrame(animate);
    };
    const sync = () => {
      stop();
      if (!mobile.matches || !width || !height) return;
      draw();
      if (!reducedMotion.matches && !document.hidden) frame = requestAnimationFrame(animate);
    };
    const resize = () => {
      stop();
      if (!mobile.matches) return;
      const box = photo.getBoundingClientRect();
      width = box.width;
      height = box.height;
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      rainColour = getComputedStyle(canvas).getPropertyValue("--ls-rain-colour").trim();
      sync();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(photo);
    mobile.addEventListener("change", resize);
    reducedMotion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    window.addEventListener("resize", resize);
    resize();
    return () => {
      stop();
      observer.disconnect();
      mobile.removeEventListener("change", resize);
      reducedMotion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="ls-hero-rain hidden" aria-hidden="true" />;
}