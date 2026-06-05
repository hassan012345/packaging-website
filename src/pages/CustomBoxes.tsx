import { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import BrowseCategoriesGrid from "@/components/templates/BrowseCategoriesGrid";
import InlineQuoteForm from "@/components/templates/InlineQuoteForm";
import TrustBadges from "@/components/templates/TrustBadges";
import BrandLogos from "@/components/templates/BrandLogos";
import NewPackagingInfoTabs from "@/components/templates/NewPackagingInfoTabs";
import Testimonials from "@/components/Testimonials";
import { categories } from "@/data/categories";
import { shapes } from "@/data/shapes";
import { Package, CheckCircle, Truck, Paintbrush, ChevronRight } from "lucide-react";

const features = [
  { icon: Package, title: "100% Customizable", desc: "Any size, shape, or design to match your brand perfectly." },
  { icon: CheckCircle, title: "Premium Quality", desc: "High-grade materials with flawless print quality." },
  { icon: Truck, title: "Free Shipping", desc: "Free doorstep delivery across the USA." },
  { icon: Paintbrush, title: "Free Design Support", desc: "Our expert designers bring your vision to life at no extra cost." },
];

const CustomBoxes = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  // Collect showcase images from categories and shapes
  const images = useMemo(() => {
    const allImages: string[] = [];
    categories.forEach((c) => { if (c.images) allImages.push(...c.images); });
    shapes.forEach((s) => { if (s.images) allImages.push(...s.images); });
    return allImages.length > 0 ? allImages.slice(0, 12) : [];
  }, []);

  const handleThumbnailClick = useCallback((i: number) => {
    setActiveIndex(i);
  }, []);

  // Auto-rotate images
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const descriptionText = `Premium custom packaging solutions tailored to your exact specifications. Whether you need custom boxes for retail, shipping, or special products, we deliver world-class quality with expert design support included at no extra cost. From small business orders to large-scale production runs, we're your trusted partner for packaging that makes an impact.`;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-muted/40 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">Custom Boxes</span>
          </nav>
        </div>
      </div>

      {/* Hero Section – 2-column layout */}
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
                      alt={`Custom box showcase ${activeIndex + 1}`}
                      className="w-full h-full object-cover transition-opacity duration-500"
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
                  <Package className="h-24 w-24 text-white/40" />
                </div>
              )}
            </div>

            {/* Right – Info + Form */}
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                    Custom Boxes
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
                  {descriptionText}
                </p>
                {descriptionText.length > 150 && (
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-primary text-sm font-medium mt-1 hover:underline"
                  >
                    {expanded ? "Show Less" : "Read More"}
                  </button>
                )}
              </div>

              <InlineQuoteForm productType="Custom Boxes" />
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

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">
            Why Choose Custom Boxes
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Experience the difference with our premium custom packaging solutions
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-card border border-border rounded-2xl p-6 text-center">
                <f.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">
            Explore Our Categories
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Find the perfect packaging solution for your specific needs
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {categories.slice(0, 8).map((category) => {
              const Icon = category.icon;
              const thumbImage = category.images?.[0];
              return (
                <Link
                  key={category.slug}
                  to={`/category/${category.slug}`}
                  className="group border border-border rounded-2xl overflow-hidden bg-card hover:shadow-xl transition-all"
                >
                  <div
                    className={`aspect-[4/3] ${thumbImage ? "" : `bg-gradient-to-br ${category.gradient}`} flex items-center justify-center overflow-hidden`}
                  >
                    {thumbImage ? (
                      <img
                        src={thumbImage}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <Icon className="h-12 w-12 text-white/40 group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {category.name}
                    </h3>
                    <span className="text-xs text-primary mt-1 inline-block">
                      Explore →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <NewPackagingInfoTabs />
      <BrowseCategoriesGrid />
      <Testimonials />
    </>
  );
};

export default CustomBoxes;
