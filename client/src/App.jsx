import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AuthLayout from "./components/admin/components/AuthLayout";
import Navigation from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Corporate from "./pages/Corporate";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Subscribe from "./pages/Subscribe";
import Locations from "./pages/Locations";
import CookiePolicy from "./pages/CookiePolicy";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FruitSplash from "./pages/FruitSplash";

import InquiriesList from "./components/admin/components/InquiriesList";
import AdminLayout from "./components/admin/components/AdminLayout";
import AdminLogin from "./components/admin/components/AdminLogin";
import Dashboard from "./components/admin/components/Dashboard";


const queryClient = new QueryClient();

const MainLayout = () => (
  <div className="min-h-screen flex flex-col">
    <ScrollToTop />
    <Navigation />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          {/* Admin Routes - No Header/Footer */}
          <Route element={<AuthLayout />}>
            <Route path="/admin/login" element={<AdminLogin />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="inquiries" element={<InquiriesList />} />
          </Route>

          {/* Public Routes - With Header/Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/fruit-splash" element={<FruitSplash />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
