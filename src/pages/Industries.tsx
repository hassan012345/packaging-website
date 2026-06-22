import { Link } from "react-router-dom";
import { categories } from "@/data/categories";

const Industries = () => (
  <>
    <section className="bg-gradient-to-br from-primary to-primary/80 py-16">
      <div className="container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Custom packaging solutions for every industry. From food to fashion, cosmetics to cannabis, we've got you covered.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.slug}
                to={`/product-category/${cat.slug}`}
                className="group border border-border rounded-2xl p-6 bg-card hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{cat.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{cat.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  </>
);

export default Industries;
