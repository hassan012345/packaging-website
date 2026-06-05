import { useState, useEffect, useCallback } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getShapeBySlug } from "@/data/shapes";
import InlineQuoteForm from "@/components/templates/InlineQuoteForm";
import TrustBadges from "@/components/templates/TrustBadges";
import BrandLogos from "@/components/templates/BrandLogos";
import BrowseCategoriesGrid from "@/components/templates/BrowseCategoriesGrid";
import NewPackagingInfoTabs from "@/components/templates/NewPackagingInfoTabs";
import Testimonials from "@/components/Testimonials";
import { ChevronRight } from "lucide-react";

const ShapePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const shape = slug ? getShapeBySlug(slug) : undefined;
  const images = shape?.images || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

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

  if (!shape) return <Navigate to="/404" replace />;

  const Icon = shape.icon;

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-muted/40 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">{shape.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero – 2-column layout */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left – Image gallery */}
            <div className="space-y-4">
              {images.length > 0 ? (
                <>
                  <div className="rounded-2xl overflow-hidden border border-border bg-card aspect-[4/3] relative flex items-center justify-center">
                    <img
                      src={images[activeIndex]}
                      alt={`${shape.name} - image ${activeIndex + 1}`}
                      className="w-full h-full object-fit transition-opacity duration-500"
                      key={activeIndex}
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => handleThumbnailClick(i)}
                        className={`rounded-xl overflow-hidden border-2 transition-all w-20 h-20 ${
                          i === activeIndex
                            ? "border-primary shadow-md"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/70 aspect-[4/3] flex items-center justify-center">
                  <Icon className="h-24 w-24 text-white/40" />
                </div>
              )}
            </div>

            {/* Right – Info + Form */}
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                    {shape.name}
                  </h1>
                  <span className="text-xs font-semibold bg-accent text-accent-foreground px-2.5 py-1 rounded-full">
                    In Stock
                  </span>
                </div>
              </div>

              <div>
                <p
                  className={`text-muted-foreground leading-relaxed ${!expanded ? "line-clamp-3" : ""}`}
                >
                  {shape.description}
                </p>
                {shape.description &&
                  shape.description.length > 150 && (
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="text-primary text-sm font-medium mt-1 hover:underline"
                    >
                      {expanded ? "Show Less" : "Read More"}
                    </button>
                  )}
              </div>

              <InlineQuoteForm productType={shape.name} />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4">
          <TrustBadges />
        </div>
      </section>

      <BrandLogos />

      <NewPackagingInfoTabs />
      <BrowseCategoriesGrid />
      <Testimonials />
    </div>
  );
};

export default ShapePage;
