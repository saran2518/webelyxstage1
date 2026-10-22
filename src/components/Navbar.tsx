import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { media, social } from "@/content/media";
import InstagramGlyph from "@/components/InstagramGlyph";
import EarlyAccessButton from "@/components/EarlyAccessButton";
import { Button } from "@/components/ui/button";
import Wordmark from "@/components/Wordmark";

const navLinks = [
{ label: "Home", to: "/" },
{ label: "What we do", to: "/what-we-do" },
{ label: "How it works", to: "/product" },
{ label: "World of dating", to: "/world-of-dating" },
{ label: "Help & FAQ", to: "/help" }];


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnDesktop = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMobileOpen(false); toggleRef.current?.focus(); }
      if (event.key !== "Tab") return;
      const controls = [toggleRef.current, ...Array.from(menuRef.current?.querySelectorAll<HTMLElement>('a[href],button:not([disabled])') ?? [])].filter((item): item is HTMLElement => item !== null);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    window.addEventListener("resize", closeOnDesktop);
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("resize", closeOnDesktop); window.removeEventListener("keydown", onKey); };
  }, [mobileOpen]);

  const onDark = location.pathname === "/" && !scrolled;

  return (
    <nav
      data-menu-open={mobileOpen}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "glass-nav" : "bg-transparent"}`
      }>


      <div className="container mx-auto flex items-center justify-between py-6 px-6">
        <Link to="/" aria-label="Elyxer home" className={`flex shrink-0 items-center gap-3 ${onDark ? "hero-logo-shadow" : ""}`}>
          <img src={media.brand.icon} alt="" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
          <Wordmark variant={onDark || mobileOpen ? "dark" : "light"} className="h-8 w-auto md:h-10" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <Link
            key={link.to}
            to={link.to}
            className={`link-glow text-sm font-sans font-medium tracking-wide ${
            location.pathname === link.to ?
            "text-primary" :
            onDark ? "text-primary-foreground/80 hover:text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`
            }>

              {link.label}
            </Link>
          )}
          <div className="flex shrink-0 items-center gap-5">
            <a href={social.instagram} target="_blank" rel="noopener noreferrer"
              aria-label="Elyxer on Instagram"
              className={`navbar-social ${onDark ? "navbar-social-on-dark" : "navbar-social-on-light"}`}>
              <InstagramGlyph size={20} />
            </a>
            <EarlyAccessButton className="px-5 py-2.5" />
          </div>

        </div>

        {/* Mobile controls: Instagram then menu button, together on the right */}
        <div className="navbar-mobile-controls md:hidden flex items-center gap-1">
          {!mobileOpen &&
           <a href={social.instagram} target="_blank" rel="noopener noreferrer"
             aria-label="Elyxer on Instagram"
             className={`navbar-social ${onDark ? "navbar-social-on-dark" : "navbar-social-on-light"}`}>
             <InstagramGlyph size={20} />
           </a>
          }
          <Button ref={toggleRef} variant="ghost" size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`${onDark ? "text-primary-foreground" : "text-foreground"}`}
            aria-label={mobileOpen ? "Close menu" : "Toggle menu"} aria-expanded={mobileOpen} aria-controls="mobile-navigation">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen &&
       <div ref={menuRef} id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Navigation" className="navbar-mobile-menu md:hidden bg-background/98 backdrop-blur-md border-t border-border px-6 pb-6 animate-fade-up">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) =>
          <Link
            key={link.to}
            to={link.to}
             aria-current={location.pathname === link.to ? "page" : undefined}
            className={`text-base font-sans font-medium py-2 ${
            location.pathname === link.to ?
            "text-primary" :
            "text-muted-foreground"}`
            }>

                {link.label}
              </Link>
          )}
            <a href={social.instagram} target="_blank" rel="noopener noreferrer"
              className="navbar-social navbar-social-on-light flex items-center gap-3 py-2 font-sans text-base font-medium">
              <InstagramGlyph size={20} />
              <span>Instagram @elyxer.dating</span>
            </a>
            <EarlyAccessButton className="mt-2" />
          </div>
        </div>
      }
    </nav>);

};

export default Navbar;