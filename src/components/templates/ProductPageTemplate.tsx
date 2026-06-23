import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { products } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import InlineQuoteForm from "./InlineQuoteForm";
import TrustBadges from "./TrustBadges";
import BrandLogos from "./BrandLogos";
import BrowseCategoriesGrid from "./BrowseCategoriesGrid";
import NewPackagingInfoTabs from "./NewPackagingInfoTabs";
import ThemedFAQ from "./ThemedFAQ";
import Testimonials from "@/components/Testimonials";
import { ChevronRight, Package, CheckCircle } from "lucide-react";

interface Props {
  product: Product;
}

const ProductPageTemplate = ({ product }: Props) => {
  const category = getCategoryBySlug(product.categorySlug);
  const images = product.images || [];
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
  }, [product.longDescription]);

  const handleThumbnailClick = useCallback((i: number) => {
    setActiveIndex(i);
  }, []);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length, activeIndex]);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-muted/40 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            {category && (
              <>
                <Link to={`/product-category/${category.slug}`} className="hover:text-primary transition-colors">
                  {category.name}
                </Link>
                <ChevronRight className="h-3.5 w-3.5" />
              </>
            )}
            <span className="text-foreground font-medium">{product.name}</span>
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
                      alt={`${product.name} - image ${activeIndex + 1}`}
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
                          className="w-full h-full object-fit"
                        />
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div
                  className={`rounded-2xl bg-gradient-to-br ${category?.gradient || "from-primary to-primary/70"} aspect-[4/3] flex items-center justify-center`}
                >
                  <Package className="h-24 w-24 text-white/40" />
                </div>
              )}
            </div>

            {/* Right - Info + Form */}
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                    {product.name}
                  </h1>
                  <span className="text-xs min-w-fit font-semibold bg-accent text-accent-foreground px-2.5 py-1 rounded-full">
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
                  {product.longDescription}
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

              {/* Features */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <InlineQuoteForm productType={product.name} />
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

      {/* Related products grid */}
      {category && category.subProducts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-3">
              We Are Your Best Solution
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Explore our full range of {category.name.toLowerCase()} tailored to
              your specific needs.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.subProducts.map((sub) => {
                const sibling = products.find((p) => p.slug === sub.slug);
                const thumbImage = sibling?.images?.[0];
                const isCurrent = sub.slug === product.slug;
                return (
                  <Link
                    key={sub.slug}
                    to={`/product/${sub.slug}`}
                    className={`group border rounded-2xl overflow-hidden bg-card hover:shadow-xl transition-all ${
                      isCurrent ? "border-primary ring-2 ring-primary/30" : "border-border"
                    }`}
                  >
                    <div
                      className={`aspect-[4/3] ${thumbImage ? "" : `bg-gradient-to-br ${category.gradient}`} flex items-center justify-center overflow-hidden`}
                    >
                      {thumbImage ? (
                        <img
                          src={thumbImage}
                          alt={sub.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      ) : (
                        <Package className="h-16 w-16 text-white/60 group-hover:scale-110 transition-transform" />
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {sub.name}
                      </h3>
                      <span className="text-xs text-primary mt-1 inline-block">
                        Get Quote →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <NewPackagingInfoTabs />
      <BrowseCategoriesGrid />
      <Testimonials />

      {/* FAQ */}
      <ThemedFAQ faq={product.faq} />
    </div>
  );
};

export default ProductPageTemplate;
