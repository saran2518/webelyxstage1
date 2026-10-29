import "@/styles/light-and-shadow.css";
import { useLocation } from "react-router-dom";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileStickyCTA from "./MobileStickyCTA";
import { useReveal } from "@/hooks/use-reveal";

const Layout = ({ children }: { children: ReactNode }) => {
  useReveal();
  const { pathname } = useLocation();
  const designPage = ["/", "/product", "/what-we-do", "/world-of-dating", "/help", "/help/change-phone-number", "/help/change-name", "/help/change-age", "/help/gender-identity", "/contact"].includes(pathname);
  return (
    <div className={`min-h-screen flex flex-col light-shadow-shell ${designPage ? "light-shadow" : ""} ${pathname === "/" ? "ls-home" : ""}`}>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Layout;
