import { useState, useEffect } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const onDark = location.pathname === "/" && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "glass-nav" : "bg-transparent"}`
      }>


      <div className="container mx-auto flex items-center justify-between py-6 px-6">
        <Link to="/" aria-label="Elyxer home" className={`flex shrink-0 items-center gap-3 ${onDark ? "hero-logo-shadow" : ""}`}>
          <img src={media.brand.icon} alt="" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
          <Wordmark variant={onDark ? "dark" : "light"} className="h-8 w-auto md:h-10" />
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

        {/* Mobile toggle */}
        <Button variant="ghost" size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${onDark ? "text-primary-foreground" : "text-foreground"}`}
          aria-label="Toggle menu" aria-expanded={mobileOpen}>

          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile nav */}
      {mobileOpen &&
       <div className="navbar-mobile-menu md:hidden bg-background/98 backdrop-blur-md border-t border-border px-6 pb-6 animate-fade-up">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) =>
          <Link
            key={link.to}
            to={link.to}
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