import { media } from "@/content/media";
import { Link } from "react-router-dom";
import Wordmark from "@/components/Wordmark";

const Footer = () => (
  <footer className="bg-bronze text-bronze-foreground">
    <div className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        <div>
          <Link to="/" aria-label="Elyxer home" className="mb-3 flex w-fit items-center gap-3">
            <img src={media.brand.icon} alt="" className="h-[52px] w-[52px] object-contain" />
            <Wordmark variant="dark" className="h-11 w-auto" />
          </Link>
          <p className="font-sans text-sm opacity-80 max-w-xs leading-relaxed">
            Chosen for who you are.<br />Built to get you on real dates.
          </p>
          <a href="mailto:support@elyxer.com" className="mt-4 inline-block font-sans text-sm opacity-80 hover:opacity-100">support@elyxer.com</a>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xs font-normal uppercase tracking-[0.01em] opacity-60 mb-1">Navigate</h3>
            <Link to="/" className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity">Home</Link>
            <Link to="/what-we-do" className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity">What we do</Link>
            <Link to="/product" className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity">How it works</Link>
            <Link to="/world-of-dating" className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity">World of dating</Link>
            <Link to="/help" className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity">Help & FAQ</Link>
            <a href="mailto:support@elyxer.com" className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity">Contact us</a>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-xs font-normal uppercase tracking-[0.01em] opacity-60 mb-1">Legal</h3>
            <Link to="/privacy" className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link to="/terms" className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity">Terms & Conditions</Link>
            <Link to="/cookie-policy" className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity">Cookie Policy</Link>
            <Link to="/community-guidelines" className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity">Community Guidelines</Link>
          </div>
        </div>
      </div>
      <div className="mt-14 pt-6 border-t border-bronze-foreground/20">
        <p className="font-sans text-xs opacity-50 text-center">
          © {new Date().getFullYear()} ProApex Innovations Private Limited. Elyxer is a brand of ProApex Innovations.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
