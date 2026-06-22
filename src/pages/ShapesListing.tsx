import { Link } from "react-router-dom";
import { shapes } from "@/data/shapes";

const ShapesListing = () => (
  <>
    <section className="bg-gradient-to-br from-primary to-primary/80 py-16">
      <div className="container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-4xl font-bold mb-4">Shapes & Styles</h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Choose from a wide range of box shapes and styles to perfectly showcase your products.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {shapes.map((shape) => {
            const Icon = shape.icon;
            return (
              <Link
                key={shape.slug}
                to={`/shapes/${shape.slug}`}
                className="group border border-border rounded-2xl overflow-hidden bg-card hover:shadow-xl transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  {shape.images?.[0] ? (
                    <img
                      src={shape.images[0]}
                      alt={shape.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
                      <Icon className="h-10 w-10" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{shape.name}</h3>
                  <span className="text-xs text-primary mt-1 inline-block">
                    View Products →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  </>
);

export default ShapesListing;
