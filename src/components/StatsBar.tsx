const promoText =
  "Get fast delivery in just 7 days 🕛 and enjoy an exclusive 20% discount on your first order! Don't miss out — order today! 🎉";

const seoContent = (
  <>
    <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
      The Custom Packaging That Builds Your Brand
    </h2>

    <p className="mb-4 text-muted-foreground leading-relaxed">
      <strong>
        Three generations. Thirty years. One family passion for packaging done
        right.
      </strong>
    </p>

    <p className="mb-4 text-muted-foreground leading-relaxed">
      Custom Packaging began as a family trade and evolved into a company built
      on experience, craftsmanship, and a commitment to helping businesses
      succeed. What started with one generation was passed down to the next,
      with each bringing new ideas while preserving the same dedication to
      quality and customer service.
    </p>

    <p className="mb-4 text-muted-foreground leading-relaxed">
      We have always believed that packaging is more than a box. It is often the
      first thing a customer sees and touches. It creates a first impression,
      tells a story, and helps products stand out in a competitive market. That
      belief continues to guide everything we do today.
    </p>

    <p className="mb-4 text-muted-foreground leading-relaxed">
      Over the years, we have partnered with businesses of all sizes, from
      startups introducing their first products to established brands looking to
      elevate their packaging. Every project receives the same level of care,
      attention, and expertise that our family has built its reputation on for
      decades.
    </p>

    <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
      Packaging Made Simple
    </h3>

    <p className="mb-4 text-muted-foreground leading-relaxed">
      Our goal is simple. We make custom packaging straightforward and
      stress-free. From concept to delivery, we provide the support, tools, and
      expertise needed to bring your packaging vision to life.
    </p>

    <ul className="list-disc list-inside mb-4 text-muted-foreground leading-relaxed space-y-1">
      <li>Professional design support tailored to your brand</li>
      <li>
        Free 3D mockups so you can visualize your packaging before production
      </li>
      <li>Transparent pricing with no hidden costs</li>
      <li>Fast production times and reliable delivery</li>
      <li>Flexible order quantities for businesses at every stage of growth</li>
    </ul>

    <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
      Built on Quality and Trust
    </h3>

    <p className="mb-4 text-muted-foreground leading-relaxed">
      Quality remains at the heart of everything we do. Every order is produced
      using durable materials, advanced printing techniques, and careful quality
      control to ensure the finished packaging reflects the standards of the
      brand it represents.
    </p>

    <p className="mb-4 text-muted-foreground leading-relaxed">
      Whether you need custom boxes, luxury rigid packaging, retail packaging,
      flexible packaging, or shipping solutions, our team works closely with you
      to create packaging that protects your products and enhances your customer
      experience.
    </p>

    <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
      More Than a Packaging Supplier
    </h3>

    <p className="mb-4 text-muted-foreground leading-relaxed">
      At Custom Packaging, we see ourselves as more than a manufacturer. We are
      a partner invested in your success. When your products look their best,
      your brand becomes more memorable, your customers become more engaged, and
      your business grows stronger.
    </p>

    <p className="mb-2 text-muted-foreground leading-relaxed font-semibold">
      Three generations later, our mission remains the same: create packaging
      that helps businesses make a lasting impression.
    </p>
  </>
);

const StatsBar = () => (
  <section className="py-20 bg-muted">
    {/* Scrolling marquee bar */}
    {/* <div className="overflow-hidden bg-primary py-3 mb-12">
      <div className="flex animate-marquee whitespace-nowrap gap-16">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-sm font-bold text-primary-foreground tracking-wide"
          >
            {promoText}
          </span>
        ))}
      </div>
    </div> */}

    {/* About Us content — open prose layout */}
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-8">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          About Us
        </span>
        <h2 className="text-3xl md:text-5xl font-black mt-2 text-foreground">
          Your One-Stop Custom Packaging Solution
        </h2>
      </div>

      {/* Product Image Banner */}
      <div className="flex gap-3 mb-8 overflow-hidden rounded-xl">
        {[
          "/images/categories/cosmetic_1.jpg",
          "/images/categories/candle_1.jpg",
          "/images/categories/gift_1.jpg",
          "/images/categories/soap_1.jpg",
          "/images/categories/perfume_1.jpg",
        ].map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Product"
            className="h-28 md:h-36 flex-1 object-cover rounded-lg"
            loading="lazy"
          />
        ))}
      </div>

      <div className="relative">
        <div className="border-l-4 border-primary pl-6 md:pl-10 h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-primary scrollbar-track-muted [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-muted [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full">
          {seoContent}
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-muted to-transparent" />
      </div>
    </div>
  </section>
);

export default StatsBar;
