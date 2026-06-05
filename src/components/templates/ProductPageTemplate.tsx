import { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import InlineQuoteForm from "./InlineQuoteForm";
import TrustBadges from "./TrustBadges";
import BrandLogos from "./BrandLogos";
import BrowseCategoriesGrid from "./BrowseCategoriesGrid";
import NewPackagingInfoTabs from "./NewPackagingInfoTabs";
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

  const descriptionLimit = 200;
  const isLong = product.longDescription.length > descriptionLimit;
  const displayDesc = expanded || !isLong
    ? product.longDescription
    : product.longDescription.slice(0, descriptionLimit) + "…";

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

      {/* Product hero */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left – Image gallery */}
            <div className="space-y-4">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden border border-border bg-card aspect-[4/3] relative flex items-center justify-center">
                {images.length > 0 ? (
                  <img
                    src={images[activeIndex]}
                    alt={`${product.name} - image ${activeIndex + 1}`}
                    className="w-full h-full object-contain transition-opacity duration-500"
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${category?.gradient || "from-primary to-primary/70"}`}>
                    <Package className="h-32 w-32 text-white/40" />
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 flex-wrap">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                        i === activeIndex
                          ? "border-primary ring-2 ring-primary/30"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right – Product info + form */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">{product.name}</h1>
                <span className="text-xs min-w-fit font-semibold bg-accent text-accent-foreground px-2.5 py-1 rounded-full">
                  In Stock
                </span>
              </div>

              {/* Description */}
              <div>
                <p className="text-muted-foreground leading-relaxed">{displayDesc}</p>
                {isLong && (
                  <button
                    onClick={() => setExpanded(!expanded)}
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

              {/* Quote form */}
              <div className="pt-2">
                <InlineQuoteForm productType={product.name} />
              </div>
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

      {/* FAQ */}
      {product.faq.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {product.faq.map((item, i) => (
                <details key={i} className="bg-card border border-border rounded-xl p-5 group">
                  <summary className="font-semibold cursor-pointer list-none flex items-center justify-between text-amber-600">
                    {item.question}
                    <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-amber-600 text-sm leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPageTemplate;
