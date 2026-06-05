const brands = [
  "Brand A", "Brand B", "Brand C", "Brand D", "Brand E",
  "Brand F", "Brand G", "Brand H",
];

const BrandLogos = () => (
  <section className="py-12 bg-muted/20">
    <div className="container mx-auto px-4">
      <p className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
        They Believed In Us
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {brands.map((brand) => (
          <div
            key={brand}
            className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center text-xs font-medium text-muted-foreground"
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandLogos;
