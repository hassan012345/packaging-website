import { useState, useEffect, useCallback } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getMaterialBySlug } from "@/data/shapes";
import InlineQuoteForm from "@/components/templates/InlineQuoteForm";
import TrustBadges from "@/components/templates/TrustBadges";
import BrandLogos from "@/components/templates/BrandLogos";
import BrowseCategoriesGrid from "@/components/templates/BrowseCategoriesGrid";
import NewPackagingInfoTabs from "@/components/templates/NewPackagingInfoTabs";
import Testimonials from "@/components/Testimonials";
import { ChevronRight, CheckCircle } from "lucide-react";

const MaterialPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const material = slug ? getMaterialBySlug(slug) : undefined;
  const images = (material as any)?.images || [];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length, activeIndex]);

  const handleThumbnailClick = useCallback((i: number) => {
    setActiveIndex(i);
  }, []);

  if (!material) return <Navigate to="/404" replace />;

  const Icon = material.icon;

  return (
    <>
      <div className="bg-muted/40 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/materials" className="hover:text-primary transition-colors">Materials</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">{material.name}</span>
          </nav>
        </div>
      </div>

      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-border bg-card aspect-[4/3] relative flex items-center justify-center">
                {images.length > 0 ? (
                  <img src={images[activeIndex]} alt={`${material.name} - image ${activeIndex + 1}`} className="w-full h-full object-contain transition-opacity duration-500" key={activeIndex} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-primary/70">
                    <Icon className="h-32 w-32 text-white/40" />
                  </div>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 flex-wrap">
                  {images.map((img: string, i: number) => (
                    <button key={i} onClick={() => handleThumbnailClick(i)} className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${i === activeIndex ? "border-primary ring-2 ring-primary/30" : "border-border hover:border-primary/50"}`}>
                      <img src={img} alt={`${material.name} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">{material.name}</h1>
                <span className="text-xs font-semibold bg-accent text-accent-foreground px-2.5 py-1 rounded-full">
                  In Stock
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{material.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {["Custom sizes available", "Full-color CMYK printing", "Free shipping across USA", "No die & plate charges", "Fast turnaround time", "Eco-friendly options"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />{f}</li>
                ))}
              </ul>
              <div className="pt-2"><InlineQuoteForm productType={material.name} /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4">
          <TrustBadges />
        </div>
      </section>

      <BrandLogos />

      <NewPackagingInfoTabs />
      <BrowseCategoriesGrid />
      <Testimonials />
    </>
  );
};

export default MaterialPage;
