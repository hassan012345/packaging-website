import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingQuotePopup from "@/components/FloatingQuotePopup";
import WhatsAppButton from "@/components/WhatsAppButton";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background">
    <ScrollToTop />
    <TopBanner />
    <Header />
    <main>{children}</main>
    <Footer />
    <FloatingQuotePopup />
    <WhatsAppButton />
  </div>
);

export default PageLayout;
