import { Link } from "react-router-dom";
import { materials } from "@/data/shapes";

const MaterialsListing = () => (
  <>
    <section className="bg-gradient-to-br from-primary to-primary/80 py-16">
      <div className="container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-4xl font-bold mb-4">Materials</h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Explore our range of premium packaging materials to find the perfect fit for your brand.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {materials.map((mat) => {
            const Icon = mat.icon;
            return (
              <Link
                key={mat.slug}
                to={`/materials/${mat.slug}`}
                className="group border border-border rounded-2xl p-6 bg-card hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{mat.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{mat.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  </>
);

export default MaterialsListing;
