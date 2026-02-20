import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
{ label: "Home", to: "/" },
{ label: "What We Do", to: "/what-we-do" },
{ label: "Product", to: "/product" },
{ label: "World of Dating", to: "/world-of-dating" },
{ label: "Help & FAQ", to: "/help" }];


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"}`
      }>

      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <Link to="/" className="font-serif font-semibold tracking-wide text-accent text-4xl">
          Elyxer
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <Link
            key={link.to}
            to={link.to}
            className={`text-sm font-sans font-medium tracking-wide transition-colors duration-300 ${
            location.pathname === link.to ?
            "text-primary" :
            "text-muted-foreground hover:text-foreground"}`
            }>

              {link.label}
            </Link>
          )}
          <Link
            to="/early-access"
            className="ml-2 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-sans font-medium text-primary-foreground transition-all duration-300 hover:opacity-90">

            Get Early Access
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu">

          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
            <Link
            to="/early-access"
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-sans font-medium text-primary-foreground">

              Get Early Access
            </Link>
          </div>
        </div>
      }
    </nav>);

};

export default Navbar;