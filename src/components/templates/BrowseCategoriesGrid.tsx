import { Link } from "react-router-dom";
import { Package, ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { useNavigate, useLocation } from "react-router-dom";

const BrowseCategoriesGrid = () => {
  const location = useLocation();
  const customCategoryHidden = location.pathname === "/custom-boxes";
  const navigate = useNavigate();
  const scrollToQuote = () => {
    if (window.location.pathname === "/") {
      document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(
        () =>
          document
            .getElementById("quote")
            ?.scrollIntoView({ behavior: "smooth" }),
        300,
      );
    }
  };

  return (
    <section id="products" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3">
          Browse Our Categories
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Explore our complete range of custom packaging solutions tailored to
          every industry and need.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const thumbImage = cat.images?.[0];
            return (
              <Link
                key={cat.slug}
                to={`/product-category/${cat.slug}`}
                className="group border border-border rounded-2xl overflow-hidden bg-card hover:shadow-xl transition-all"
              >
                <div
                  className={`relative aspect-[4/3] ${
                    thumbImage ? "" : `bg-gradient-to-br ${cat.gradient}`
                  } flex items-center justify-center overflow-hidden`}
                >
                  {thumbImage ? (
                    <img
                      src={thumbImage}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <Icon className="h-16 w-16 text-white/60 group-hover:scale-110 transition-transform" />
                  )}

                  {/* Hover Overlay */}
                  <div
                    className="
                            absolute inset-0
                            bg-[#3F9472]
                            flex items-center justify-center
                            opacity-0
                            group-hover:opacity-95
                            transition-all duration-300
                          "
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToQuote();
                      }}
                      className="
                      px-5 py-2.5
                      bg-white
                      text-green-700
                      font-semibold
                      rounded-full
                      shadow-lg
                      hover:scale-105
                      transition-transform
                    "
                    >
                      Get a Quote
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-xs text-primary mt-1 inline-block">
                    View Products →
                  </span>
                </div>
              </Link>
            );
          })}

          {/* Catch-all card */}
          {customCategoryHidden ? null : (
            <Link
              to="/custom-boxes"
              className="group border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary to-primary/70 flex flex-col items-center justify-center text-primary-foreground">
                <Package className="h-14 w-14 mb-2 opacity-80" />
                <span className="text-xs font-semibold uppercase tracking-wider opacity-70">
                  Can't find your category?
                </span>
              </div>
              <div className="p-4 bg-primary text-primary-foreground flex items-center justify-between">
                <h3 className="font-semibold">
                  Can't find your category — Any Shape, Any Size
                </h3>
                <ArrowRight className="h-4 w-4 shrink-0 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategoriesGrid;
