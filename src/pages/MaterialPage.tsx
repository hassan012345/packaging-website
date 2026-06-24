import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getMaterialBySlug } from "@/data/shapes";
import InlineQuoteForm from "@/components/templates/InlineQuoteForm";
import TrustBadges from "@/components/templates/TrustBadges";
import BrandLogos from "@/components/templates/BrandLogos";
import BrowseCategoriesGrid from "@/components/templates/BrowseCategoriesGrid";
import NewPackagingInfoTabs from "@/components/templates/NewPackagingInfoTabs";
import Testimonials from "@/components/Testimonials";
import { ChevronRight } from "lucide-react";

const MaterialPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const material = slug ? getMaterialBySlug(slug) : undefined;
  const images = (material as any)?.images || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isClamped, setIsClamped] = useState(false);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const check = () => {
      setIsClamped(el.scrollHeight > el.clientHeight + 1);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [material?.description]);

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
      {/* Breadcrumb */}
      <div className="bg-muted/40 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              to="/materials"
              className="hover:text-primary transition-colors"
            >
              Materials
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">{material.name}</span>
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
                      alt={`${material.name} - image ${activeIndex + 1}`}
                      className="w-auto h-full  transition-opacity duration-500"
                      key={activeIndex}
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {images.map((img: string, i: number) => (
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
                    {material.name}
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
                  {material.description}
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

              <InlineQuoteForm productType={material.name} />
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
    </>
  );
};

export default MaterialPage;
