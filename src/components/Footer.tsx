import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-bronze text-bronze-foreground">
    <div className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        <div>
          <h3 className="font-serif text-2xl font-semibold tracking-wide mb-3">Elyxer</h3>
          <p className="font-sans text-sm opacity-80 max-w-xs leading-relaxed">
            Engineered for alignment. Designed for intention.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest opacity-60 mb-1">Navigate</span>
            <Link to="/" className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity">Home</Link>
            <Link to="/what-we-do" className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity">What We Do</Link>
            <Link to="/product" className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity">Product</Link>
            <Link to="/world-of-dating" className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity">World of Dating</Link>
            <Link to="/help" className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity">Help & FAQ</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest opacity-60 mb-1">Legal</span>
            <Link to="/privacy" className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link to="/terms" className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity">Terms & Conditions</Link>
          </div>
        </div>
      </div>
      <div className="mt-14 pt-6 border-t border-bronze-foreground/20">
        <p className="font-sans text-xs opacity-50 text-center">
          © {new Date().getFullYear()} Elyxer. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
