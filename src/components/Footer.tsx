import { media, social } from "@/content/media";
import { Link } from "react-router-dom";
import Wordmark from "@/components/Wordmark";
import InstagramGlyph from "@/components/InstagramGlyph";
import FacebookGlyph from "@/components/FacebookGlyph";

const Footer = () => (
  <footer className="bg-bronze text-bronze-foreground">
    <div className="container mx-auto px-6 pb-10 pt-16">
      <div className="footer-cols">
        <nav className="footer-col footer-col-left" aria-label="Navigate">
          <h3 className="footer-heading">Navigate</h3>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/what-we-do" className="footer-link">What we do</Link></li>
            <li><Link to="/product" className="footer-link">How it works</Link></li>
            <li><Link to="/world-of-dating" className="footer-link">World of dating</Link></li>
            <li><Link to="/help" className="footer-link">Help &amp; FAQ</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </nav>
        <div className="footer-centre">
          <p className="footer-eyebrow">Built to get you on real dates</p>
          <Link to="/" aria-label="Elyxer home" className="footer-lockup">
            <img src={media.brand.icon} alt="" className="h-[52px] w-[52px] object-contain" />
            <Wordmark variant="dark" className="h-11 w-auto" />
          </Link>
          <p className="footer-taglines">Chosen for who you are.</p>
          <a href="mailto:support@elyxer.co" className="footer-email">support@elyxer.co</a>
          <div className="footer-socials">
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Elyxer on Facebook"
              className="footer-social"
            >
              <FacebookGlyph size={24} brand={false} />
            </a>
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Elyxer on Instagram"
              className="footer-social"
            >
              <InstagramGlyph size={24} />
            </a>
          </div>
        </div>
        <nav className="footer-col footer-col-right" aria-label="Legal">
          <h3 className="footer-heading">Legal</h3>
          <ul className="footer-links">
            <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
            <li><Link to="/terms" className="footer-link">Terms &amp; Conditions</Link></li>
            <li><Link to="/cookie-policy" className="footer-link">Cookie Policy</Link></li>
            <li><Link to="/community-guidelines" className="footer-link">Community Guidelines</Link></li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <p className="text-center font-sans text-xs opacity-50">
          © {new Date().getFullYear()} ProApex Innovations Private Limited. Elyxer is a brand of ProApex Innovations.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
