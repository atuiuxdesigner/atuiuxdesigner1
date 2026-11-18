import { lazy, Suspense } from "react";
import PageSkeleton from "./components/PageSkeleton";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import CustomCursor from "./components/CustomCursor";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CaseStudyDelivery = lazy(() => import("./pages/CaseStudyDelivery"));
const CaseStudyCustomer = lazy(() => import("./pages/CaseStudyCustomer"));
const CaseStudyVendor = lazy(() => import("./pages/CaseStudyVendor"));
const CaseStudyRevamp = lazy(() => import("./pages/CaseStudyRevamp"));
const CaseStudyManasvi = lazy(() => import("./pages/CaseStudyManasvi"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CustomCursor />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<PageSkeleton />}>
            <Routes>
              <Route path="/" element={<Suspense fallback={<PageSkeleton variant="home" />}><Index /></Suspense>} />
              <Route path="/case-study/delivery" element={<CaseStudyDelivery />} />
              <Route path="/case-study/customer" element={<CaseStudyCustomer />} />
              <Route path="/case-study/vendor" element={<CaseStudyVendor />} />
              <Route path="/case-study/delivery-revamp" element={<CaseStudyRevamp />} />
              <Route path="/case-study/manasvi-facility-services" element={<CaseStudyManasvi />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
