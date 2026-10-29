import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import WhatWeDo from "./pages/WhatWeDo";
import Product from "./pages/Product";
import WorldOfDating from "./pages/WorldOfDating";
import HelpFAQ from "./pages/HelpFAQ";
import ChangePhoneNumber from "./pages/help/ChangePhoneNumber";
import Identity from "./pages/help/Identity";
import NameAndAge from "./pages/help/NameAndAge";
import DatingGoals from "./pages/help/DatingGoals";
import InterestedIn from "./pages/help/InterestedIn";
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
          <Route path="/help/change-name" element={<Navigate to="/help/name-and-age#name" replace />} />
          <Route path="/help/change-age" element={<Navigate to="/help/name-and-age#age" replace />} />
          <Route path="/help/gender-identity" element={<Navigate to="/help/identity#gender" replace />} />
          <Route path="/help/pronouns" element={<Navigate to="/help/identity#pronouns" replace />} />
          <Route path="/help/sexual-orientation" element={<Navigate to="/help/identity#sexual-orientation" replace />} />
          <Route path="/help/identity" element={<Identity />} />
          <Route path="/help/name-and-age" element={<NameAndAge />} />
          <Route path="/help/dating-goals" element={<DatingGoals />} />
          <Route path="/help/interested-in" element={<InterestedIn />} />
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
