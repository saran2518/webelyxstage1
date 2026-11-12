import "@/styles/light-and-shadow.css";
import { useLocation } from "react-router-dom";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileStickyCTA from "./MobileStickyCTA";
import { useReveal } from "@/hooks/use-reveal";
import Seo from "./Seo";
import { seoPages } from "@/content/seo";

const Layout = ({ children, structuredData = [] }: { children: ReactNode; structuredData?: object[] }) => {
  useReveal();
  const { pathname } = useLocation();
  const metadata = seoPages[pathname];
  const designPage = ["/", "/product", "/what-we-do", "/world-of-dating", "/help", "/help/change-phone-number", "/help/identity", "/help/name-and-age", "/help/dating-goals", "/help/interested-in", "/contact"].includes(pathname);
  return (
    <div className={`min-h-screen flex flex-col light-shadow-shell ${designPage ? "light-shadow" : ""} ${pathname === "/" ? "ls-home" : ""}`}>
      {metadata && <Seo {...metadata} path={pathname} structuredData={structuredData} />}
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Layout;
