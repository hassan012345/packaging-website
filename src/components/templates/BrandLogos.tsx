const brands = [
  "Samsung",
  "Bon Bon Candy",
  "Bur Bur",
  "CBD Plus",
  "Best Cream",
  "Bioscience",
  "IT Cosmetics",
  "Naras Cosmetics",
];

const BrandLogos = () => (
  <section className="py-12 bg-muted/20 overflow-hidden">
    <div className="container mx-auto px-4">
      <p className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
        They Believed In Us
      </p>
    </div>
    <div className="flex overflow-hidden">
      <div className="flex shrink-0 items-center gap-8 pr-8 animate-marquee hover:[animation-play-state:paused]">
        {[...brands, ...brands].map((brand, i) => (
          <div
            key={`${brand}-${i}`}
            className="flex h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-muted px-6 text-sm font-semibold text-muted-foreground"
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandLogos;
