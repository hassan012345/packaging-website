import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Package, ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";

const displayCategories = categories.slice(0, 11);

const ProductCategories = () => (
  <section id="products" className="py-20 bg-muted">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Products</span>
        <h2 className="text-3xl md:text-5xl font-black mt-2 text-foreground">
          Explore Our 1,200+ Custom Box Packaging Styles
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          From retail to food, cosmetics to cannabis, we serve every industry with packaging that matches your brand's originality.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {displayCategories.map((cat, i) => (
          <Link to={`/product-category/${cat.slug}`} key={cat.slug}>
            <motion.div
              className="group relative bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                {cat.images?.[0] ? (
                  <img
                    src={cat.images[0]}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${cat.gradient} flex items-center justify-center`}>
                    <Package className="h-12 w-12 text-white/60" />
                  </div>
                )}
              </div>

              {/* Label */}
              <div className="p-3 flex items-center justify-between">
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {cat.name}
                </h3>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-primary-foreground text-sm font-bold">Get a Quote</span>
                <ArrowRight className="h-5 w-5 text-primary-foreground mt-1" />
              </div>
            </motion.div>
          </Link>
        ))}

          {/* Custom Packaging catch-all card */}
          <Link to="/custom-boxes">
            <motion.div
              className="group relative rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: 11 * 0.05 }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary to-primary/70 flex flex-col items-center justify-center text-primary-foreground">
                <Package className="h-14 w-14 mb-2 opacity-80" />
                <span className="text-xs font-semibold uppercase tracking-wider opacity-70">Can't find your category?</span>
              </div>
              <div className="p-3 flex items-center justify-between bg-primary text-primary-foreground">
                <h3 className="text-sm font-bold line-clamp-1">Custom Boxes, Any Shape, Any Size</h3>
                <ArrowRight className="h-4 w-4 shrink-0 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </Link>
      </div>
    </div>
  </section>
);

export default ProductCategories;
