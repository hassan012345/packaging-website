import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLayout from "./components/layout/PageLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const Industries = lazy(() => import("./pages/Industries"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blog = lazy(() => import("./pages/Blog"));
const Policies = lazy(() => import("./pages/Policies"));
const SearchResults = lazy(() => import("./pages/SearchResults"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const ShapePage = lazy(() => import("./pages/ShapePage"));
const MaterialPage = lazy(() => import("./pages/MaterialPage"));
const CustomBoxes = lazy(() => import("./pages/CustomBoxes"));
const ShapesListing = lazy(() => import("./pages/ShapesListing"));
const MaterialsListing = lazy(() => import("./pages/MaterialsListing"));
const OthersListing = lazy(() => import("./pages/OthersListing"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactSales = lazy(() => import("./pages/ContactSales"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const ArtworkPolicy = lazy(() => import("./pages/ArtworkPolicy"));
const PaymentPolicy = lazy(() => import("./pages/PaymentPolicy"));
const ShippingPolicy = lazy(() => import("./pages/ShippingPolicy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageLayout>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/cpl-policies" element={<Policies />} />
              <Route
                path="/product-category/:slug"
                element={<CategoryPage />}
              />
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/shapes/:slug" element={<ShapePage />} />
              <Route path="/materials/:slug" element={<MaterialPage />} />
              <Route path="/custom-boxes" element={<CustomBoxes />} />
              <Route path="/shapes" element={<ShapesListing />} />
              <Route path="/materials" element={<MaterialsListing />} />
              <Route path="/others" element={<OthersListing />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-sales" element={<ContactSales />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/artwork-policy" element={<ArtworkPolicy />} />
              <Route path="/payment-policy" element={<PaymentPolicy />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
