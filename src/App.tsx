import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WhatWeDo from "./pages/WhatWeDo";
import Product from "./pages/Product";
import WorldOfDating from "./pages/WorldOfDating";
import HelpFAQ from "./pages/HelpFAQ";
import ChangePhoneNumber from "./pages/help/ChangePhoneNumber";
import ChangeName from "./pages/help/ChangeName";
import ChangeAge from "./pages/help/ChangeAge";
import GenderIdentity from "./pages/help/GenderIdentity";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
import RouteScroll from "./components/RouteScroll";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteScroll />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/product" element={<Product />} />
          <Route path="/world-of-dating" element={<WorldOfDating />} />
          <Route path="/help" element={<HelpFAQ />} />
          <Route path="/help/change-phone-number" element={<ChangePhoneNumber />} />
          <Route path="/help/change-name" element={<ChangeName />} />
          <Route path="/help/change-age" element={<ChangeAge />} />
          <Route path="/help/gender-identity" element={<GenderIdentity />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
