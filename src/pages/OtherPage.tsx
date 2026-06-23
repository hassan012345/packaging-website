import { useState, useEffect, useCallback, useRef, useLayoutEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { othersItems } from "@/data/others";
import InlineQuoteForm from "@/components/templates/InlineQuoteForm";
import TrustBadges from "@/components/templates/TrustBadges";
import BrandLogos from "@/components/templates/BrandLogos";
import BrowseCategoriesGrid from "@/components/templates/BrowseCategoriesGrid";
import NewPackagingInfoTabs from "@/components/templates/NewPackagingInfoTabs";
import Testimonials from "@/components/Testimonials";
import ThemedFAQ from "@/components/templates/ThemedFAQ";
import { ChevronRight } from "lucide-react";

const OtherPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = othersItems.find((i) => i.slug === `/others/${slug}`);
  const images = item?.images || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isClamped, setIsClamped] = useState(false);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const check = () => setIsClamped(el.scrollHeight > el.clientHeight + 1);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [item?.longDescription]);

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

  if (!item) return <Navigate to="/404" replace />;

  const Icon = item.icon;

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
            <Link to="/others" className="hover:text-primary transition-colors">
              Other Products
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">{item.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero - 2-column layout */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left - Image gallery */}
            <div className="space-y-4">
              {images.length > 0 ? (
                <>
                  <div className="rounded-2xl overflow-hidden border border-border bg-card aspect-[4/3] relative flex items-center justify-center">
                    <img
                      src={images[activeIndex]}
                      alt={`${item.name} - image ${activeIndex + 1}`}
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
                  <Icon className="h-24 w-24 text-white/40" />
                </div>
              )}
            </div>

            {/* Right - Info + Form */}
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                    {item.name}
                  </h1>
                  <span className="text-xs font-semibold bg-accent text-accent-foreground px-2.5 py-1 rounded-full">
                    In Stock
                  </span>
                </div>
              </div>

              <div>
                <p
                  ref={textRef}
                  className="text-muted-foreground leading-relaxed transition-all"
                  style={
                    !expanded
                      ? {
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }
                      : undefined
                  }
                >
                  {item.longDescription || item.description}
                </p>
                {(isClamped || expanded) && (
                  <button
                    onClick={() => setExpanded((v) => !v)}
                    className="text-primary text-sm font-medium mt-1 hover:underline"
                  >
                    {expanded ? "Show Less" : "Read More"}
                  </button>
                )}
              </div>

              <InlineQuoteForm productType={item.name} />
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

      <ThemedFAQ faq={item.faq} />
    </div>
  );
};

export default OtherPage;
