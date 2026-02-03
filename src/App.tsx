import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import RecruitmentTrainingPage from "./pages/services/RecruitmentTrainingPage";
import ITSoftwarePage from "./pages/services/ITSoftwarePage";
import DigitalMarketingPage from "./pages/services/DigitalMarketingPage";
import DataAnalyticsPage from "./pages/services/DataAnalyticsPage";
import StrategicManagementPage from "./pages/services/StrategicManagementPage";
import BrandManagementPage from "./pages/services/BrandManagementPage";
import NotFound from "./pages/NotFound";
import { Toaster } from "@/ui/toaster";
import { Toaster as Sonner } from "@/ui/sonner";
import { TooltipProvider } from "@/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Primary Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Service Detail Pages */}
          <Route path="/services/recruitment-training" element={<RecruitmentTrainingPage />} />
          <Route path="/services/it-software" element={<ITSoftwarePage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/services/data-analytics" element={<DataAnalyticsPage />} />
          <Route path="/services/strategic-management" element={<StrategicManagementPage />} />
          <Route path="/services/brand-management" element={<BrandManagementPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
