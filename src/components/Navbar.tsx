import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { media } from "@/content/media";
import EarlyAccessButton from "@/components/EarlyAccessButton";
import { Button } from "@/components/ui/button";

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


      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <Link to="/" className="flex items-center gap-3 font-serif font-semibold tracking-wide text-accent text-4xl">
          <img src={onDark ? media.brand.wordmarkDark : media.brand.wordmarkLight} alt="Elyxer" className="h-12 w-auto max-w-[180px] object-contain" />
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
          <EarlyAccessButton className="ml-2 px-5 py-2.5" />

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
      <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border px-6 pb-6 animate-fade-up">
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
            <EarlyAccessButton className="mt-2" />
          </div>
        </div>
      }
    </nav>);

};

export default Navbar;