import { Link, useLocation } from "react-router-dom";
import { categories } from "@/data/categories";
import { shapes, materials } from "@/data/shapes";
import { othersItems } from "@/data/others";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q")?.trim() ?? "";
  const normalizedQuery = query.toLowerCase();

  const categoryResults = categories.filter(
    (item) =>
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery) ||
      item.longDescription.toLowerCase().includes(normalizedQuery),
  );

  const shapeResults = shapes.filter(
    (item) =>
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery),
  );

  const materialResults = materials.filter(
    (item) =>
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery),
  );

  const otherResults = othersItems.filter((item) =>
    item.name.toLowerCase().includes(normalizedQuery),
  );

  const hasResults =
    categoryResults.length || shapeResults.length || materialResults.length || otherResults.length;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-primary">Search</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
            {query ? `Results for "${query}"` : "Search Products and Categories"}
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mt-3">
            {query
              ? "Browse matching packaging categories, shapes, materials, and services."
              : "Use the search bar in the header to find packaging categories, shapes, materials, and other products."}
          </p>
        </div>

        {!query ? (
          <div className="rounded-3xl border border-border bg-card p-8 text-center">
            <p className="text-base text-muted-foreground">
              Enter a search term in the header to find packaging products and industry pages.
            </p>
          </div>
        ) : !hasResults ? (
          <div className="rounded-3xl border border-border bg-card p-8 text-center">
            <p className="text-base text-muted-foreground">
              No matches found for "{query}". Try another keyword like "electronics", "candle", or "mailer".
            </p>
          </div>
        ) : (
          <div className="grid gap-8">
            {categoryResults.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Categories</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {categoryResults.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/product-category/${item.slug}`}
                      className="block rounded-3xl border border-border p-6 bg-card hover:border-primary transition-colors"
                    >
                      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2">Category</p>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {shapeResults.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Shapes</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {shapeResults.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/shapes/${item.slug}`}
                      className="block rounded-3xl border border-border p-6 bg-card hover:border-primary transition-colors"
                    >
                      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2">Shape</p>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {materialResults.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Materials</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {materialResults.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/materials/${item.slug}`}
                      className="block rounded-3xl border border-border p-6 bg-card hover:border-primary transition-colors"
                    >
                      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2">Material</p>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {otherResults.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Other Items</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {otherResults.map((item) => (
                    <Link
                      key={item.slug + item.name}
                      to={item.slug}
                      className="block rounded-3xl border border-border p-6 bg-card hover:border-primary transition-colors"
                    >
                      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2">Other</p>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchResults;
