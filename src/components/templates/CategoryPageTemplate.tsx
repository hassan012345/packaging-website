import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import type { Category } from "@/data/categories";
import { products } from "@/data/products";
import InlineQuoteForm from "./InlineQuoteForm";
import BrandLogos from "./BrandLogos";
import NewPackagingInfoTabs from "./NewPackagingInfoTabs";
import BrowseCategoriesGrid from "./BrowseCategoriesGrid";
import TrustBadges from "./TrustBadges";
import Testimonials from "@/components/Testimonials";
import { ChevronRight, Package } from "lucide-react";

interface Props {
  category: Category;
}

import { AnimatePresence, motion } from "framer-motion";

function FAQSection({ faq }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                layout
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border
                  bg-card
                  shadow-sm
                "
              >
                  <button
                  onClick={() => toggle(index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    px-6
                    py-5
                    text-left
                  "
                >
                  <span className="font-semibold text-amber-600">
                    {item.question}
                  </span>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 90 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="h-5 w-5 text-amber-600" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-sm leading-relaxed text-amber-600">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const CategoryPageTemplate = ({ category }: Props) => {
  const Icon = category.icon;
  const images = category.images || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

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
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">{category.name}</span>
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
                      alt={`${category.name} - image ${activeIndex + 1}`}
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
                          className="w-full h-full object-fit"
                        />
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div
                  className={`rounded-2xl bg-gradient-to-br ${category.gradient} aspect-[4/3] flex items-center justify-center`}
                >
                  <Icon className="h-24 w-24 text-white/40" />
                </div>
              )}
            </div>

            {/* Right – Info + Form */}
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                    {category.name}
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
                  {category.longDescription}
                </p>
                {category.longDescription &&
                  category.longDescription.length > 150 && (
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="text-primary text-sm font-medium mt-1 hover:underline"
                    >
                      {expanded ? "Show Less" : "Read More"}
                    </button>
                  )}
              </div>

              <InlineQuoteForm productType={category.name} />
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

      {/* Sub-products grid */}
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
              const product = products.find((p) => p.slug === sub.slug);
              const thumbImage = product?.images?.[0];
              return (
                <Link
                  key={sub.slug}
                  to={`/product/${sub.slug}`}
                  className="group border border-border rounded-2xl overflow-hidden bg-card hover:shadow-xl transition-all"
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

      <NewPackagingInfoTabs />
      <BrowseCategoriesGrid />
      <Testimonials />

      {/* FAQ */}
      {category.faq.length > 0 && <FAQSection faq={category.faq} />}
    </div>
  );
};

export default CategoryPageTemplate;
