export interface Product {
  slug: string;
  name: string;
  categorySlug: string;
  description: string;
  longDescription: string;
  features: string[];
  images?: string[];
  faq: { question: string; answer: string }[];
}

export const products: Product[] = [
  // ===== APPAREL =====
  {
    slug: "dress-shirt-boxes",
    name: "Custom Dress Shirt Boxes",
    categorySlug: "custom-apparel-boxes",
    description: "Premium packaging designed specifically for dress shirts with a professional presentation.",
    longDescription: "Our dress shirt boxes are crafted to present dress shirts with elegance. Featuring custom inserts and tissue paper options, these boxes protect garments while creating a luxury unboxing experience.",
    features: ["Custom sizes available", "Tissue paper inserts", "Full-color printing", "Matte or gloss lamination", "Magnetic closure options"],
    images: ["/images/categories/dress_shirt_1.jpg", "/images/categories/dress_shirt_2.jpg", "/images/categories/dress_shirt_3.jpg", "/images/categories/dress_shirt_4.jpg"],
    faq: [
      { question: "What sizes are available?", answer: "We offer fully customizable sizes to fit any dress shirt dimensions." },
    ],
  },
  {
    slug: "tie-boxes",
    name: "Custom Tie Boxes",
    categorySlug: "custom-apparel-boxes",
    description: "Elegant tie packaging with custom inserts for secure and stylish presentation.",
    longDescription: "Our custom tie boxes are designed to showcase neckties beautifully. Available with roll inserts or flat presentation styles, custom printing, and premium finishes.",
    features: ["Roll or flat insert options", "Custom printing", "Premium finishes", "Multiple size options", "Gift-ready packaging"],
    images: ["/images/categories/tie_1.jpg", "/images/categories/tie_2.jpg", "/images/categories/tie_3.jpg", "/images/categories/tie_4.jpg"],
    faq: [
      { question: "Can tie boxes hold multiple ties?", answer: "Yes, we can design boxes to hold 1-6 ties with custom dividers." },
    ],
  },
  {
    slug: "t-shirt-boxes",
    name: "Custom T-Shirt Boxes",
    categorySlug: "custom-apparel-boxes",
    description: "Custom t-shirt packaging for brands, retailers, and e-commerce shipping.",
    longDescription: "Our t-shirt boxes provide the perfect packaging solution for clothing brands. Designed for both retail display and e-commerce shipping with custom branding options.",
    features: ["E-commerce ready", "Custom branding", "Durable construction", "Multiple size options", "Eco-friendly materials available"],
    images: ["/images/categories/tshirt_1.jpg", "/images/categories/tshirt_2.jpg", "/images/categories/tshirt_3.jpg"],
    faq: [
      { question: "Are these suitable for e-commerce?", answer: "Yes, our t-shirt boxes are designed to withstand shipping while maintaining a premium look." },
    ],
  },

  // ===== CANDLE =====
  {
    slug: "16-wishes-candle-boxes",
    name: "Custom 16 Wishes Candle Boxes",
    categorySlug: "custom-candle-boxes",
    description: "Custom 16 wishes candle boxes designed to create a magical birthday celebration with premium packaging.",
    longDescription: "Our 16 Wishes Candle Boxes are designed to make birthday celebrations extra special. Each box is crafted to hold birthday wish candles securely while creating an enchanting unboxing experience. Available in custom sizes, colors, and finishes.",
    features: ["Custom sizes available", "Full-color CMYK printing", "Matte or gloss lamination", "Window cut-out options", "Eco-friendly materials"],
    images: ["/images/categories/16wishes_1.webp", "/images/categories/16wishes_2.webp", "/images/categories/16wishes_3.webp", "/images/categories/16wishes_4.jpg"],
    faq: [
      { question: "What sizes are available?", answer: "We offer fully customizable sizes to fit your specific candle dimensions." },
      { question: "Can I order a sample first?", answer: "Yes, we provide samples before bulk orders to ensure your satisfaction." },
    ],
  },
  {
    slug: "custom-candle-boxes-with-inserts",
    name: "Custom Candle Boxes with Inserts",
    categorySlug: "custom-candle-boxes",
    description: "Premium candle packaging with custom die-cut inserts for secure product placement.",
    longDescription: "Our candle boxes with custom inserts provide the ultimate product protection and presentation. Die-cut inserts are precisely shaped to your candle dimensions, preventing movement and ensuring a premium unboxing experience.",
    features: ["Custom die-cut inserts", "Precise candle fit", "Premium presentation", "Multiple insert materials", "Full-color printing"],
    images: ["/images/categories/candle_inserts_1.jpg", "/images/categories/candle_inserts_2.jpg", "/images/categories/candle_inserts_3.jpg", "/images/categories/candle_inserts_4.jpg", "/images/categories/candle_inserts_5.jpg"],
    faq: [
      { question: "What materials are used for inserts?", answer: "We offer cardboard, foam, velvet, and corrugated insert options." },
    ],
  },
  {
    slug: "custom-candle-boxes-with-window",
    name: "Custom Candle Boxes with Window",
    categorySlug: "custom-candle-boxes",
    description: "Candle boxes featuring die-cut windows to showcase your candles without opening the box.",
    longDescription: "Let your candles speak for themselves with our window candle boxes. Die-cut windows with clear PET film allow customers to see the candle color, texture, and design without opening the box, driving purchase decisions.",
    features: ["Die-cut window", "Clear PET film", "Multiple window shapes", "Product visibility", "Shelf appeal"],
    images: ["/images/categories/candle_window_1.jpg", "/images/categories/candle_window_2.jpg", "/images/categories/candle_window_3.jpg", "/images/categories/candle_window_4.jpg"],
    faq: [
      { question: "What window shapes are available?", answer: "We offer rectangular, round, oval, heart, and custom-shaped windows." },
    ],
  },
  {
    slug: "candle-dust-covers",
    name: "Custom Candle Dust Covers",
    categorySlug: "custom-candle-boxes",
    description: "Custom dust covers for open-top candles to protect from debris and maintain fragrance.",
    longDescription: "Our candle dust covers protect open-top candles from dust and debris while helping to preserve the fragrance. Available in cardboard, acrylic-style, and kraft materials with custom branding options.",
    features: ["Dust and debris protection", "Fragrance preservation", "Custom branding", "Multiple materials", "Precise fit"],
    images: ["/images/categories/candle_dust_1.jpg", "/images/categories/candle_dust_2.jpg", "/images/categories/candle_dust_3.jpg", "/images/categories/candle_dust_4.jpg", "/images/categories/candle_dust_5.jpg"],
    faq: [
      { question: "Do dust covers help preserve candle fragrance?", answer: "Yes, dust covers help seal in the fragrance and prevent the wax from collecting dust." },
    ],
  },
  {
    slug: "custom-candle-shipping-boxes",
    name: "Custom Candle Shipping Boxes",
    categorySlug: "custom-candle-boxes",
    description: "Durable shipping boxes specifically designed to protect candles during transit.",
    longDescription: "Our candle shipping boxes are engineered for maximum protection during transit. Made from sturdy corrugated material with custom inserts to prevent movement and breakage.",
    features: ["Corrugated material", "Custom inserts", "Shock protection", "Branded printing", "Multiple candle configurations"],
    images: ["/images/categories/candle_shipping_1.jpg", "/images/categories/candle_shipping_2.jpg", "/images/categories/candle_shipping_3.jpg", "/images/categories/candle_shipping_4.jpg", "/images/categories/candle_shipping_5.jpg"],
    faq: [
      { question: "How many candles can one shipping box hold?", answer: "We can design boxes to hold anywhere from 1 to 12+ candles with custom divider inserts." },
    ],
  },
  {
    slug: "custom-jar-candle-boxes",
    name: "Custom Jar Candle Boxes",
    categorySlug: "custom-candle-boxes",
    description: "Protective packaging designed specifically for jar candles with custom inserts.",
    longDescription: "Our jar candle boxes are designed with custom die-cut inserts to securely hold glass or ceramic jar candles. The snug fit prevents movement during shipping while the premium exterior printing showcases your brand.",
    features: ["Custom jar inserts", "Glass protection", "Snug fit design", "Premium printing", "Multiple jar size options"],
    images: ["/images/categories/jar_candle_1.jpg", "/images/categories/jar_candle_2.jpg", "/images/categories/jar_candle_3.jpg", "/images/categories/jar_candle_4.jpg"],
    faq: [
      { question: "Can these boxes protect glass jars during shipping?", answer: "Yes, our custom inserts and sturdy construction provide excellent protection for glass jar candles." },
    ],
  },
  {
    slug: "custom-kraft-candle-boxes",
    name: "Custom Kraft Candle Boxes",
    categorySlug: "custom-candle-boxes",
    description: "Eco-friendly kraft candle packaging with a natural, rustic aesthetic.",
    longDescription: "Our kraft candle boxes combine eco-friendliness with aesthetics. Made from 100% recyclable brown kraft material, these boxes appeal to environmentally conscious consumers.",
    features: ["100% recyclable kraft", "Natural rustic look", "Custom printing on kraft", "Window options", "Biodegradable"],
    images: ["/images/categories/kraft_candle_1.jpg", "/images/categories/kraft_candle_2.jpg", "/images/categories/kraft_candle_3.jpg", "/images/categories/kraft_candle_4.jpg"],
    faq: [
      { question: "Can kraft boxes be printed in full color?", answer: "Yes, we can print full-color designs on kraft material." },
    ],
  },
  {
    slug: "custom-luxury-candle-boxes",
    name: "Custom Luxury Candle Boxes",
    categorySlug: "custom-candle-boxes",
    description: "High-end luxury candle packaging with rigid construction, foil stamping, and premium finishes.",
    longDescription: "Our luxury candle boxes are crafted from rigid board with premium finishes including foil stamping, embossing, soft-touch lamination, and magnetic closures.",
    features: ["Rigid board construction", "Foil stamping", "Embossing/debossing", "Soft-touch lamination", "Magnetic closure"],
    images: ["/images/categories/luxury_candle_1.jpg", "/images/categories/luxury_candle_2.jpg", "/images/categories/luxury_candle_3.jpg", "/images/categories/luxury_candle_4.jpg", "/images/categories/luxury_candle_5.jpg"],
    faq: [
      { question: "What makes these boxes 'luxury'?", answer: "Luxury boxes use thick rigid board, premium finishes like foil stamping and embossing, and feature magnetic or ribbon closures." },
    ],
  },
  {
    slug: "custom-pillar-candle-boxes",
    name: "Custom Pillar Candle Boxes",
    categorySlug: "custom-candle-boxes",
    description: "Sturdy pillar candle packaging designed to protect and showcase tall, cylindrical candles.",
    longDescription: "Our pillar candle boxes are specifically engineered to accommodate the height and weight of pillar candles. With reinforced bottoms and custom inserts, your candles arrive safely.",
    features: ["Reinforced bottom", "Custom height options", "Insert options", "Full-color printing", "Protective design"],
    images: ["/images/categories/pillar_candle_1.jpg", "/images/categories/pillar_candle_2.jpg", "/images/categories/pillar_candle_3.jpg", "/images/categories/pillar_candle_4.jpg", "/images/categories/pillar_candle_5.jpg"],
    faq: [
      { question: "Can these boxes hold heavy pillar candles?", answer: "Yes, our pillar candle boxes feature reinforced bottoms designed to support the weight of large pillar candles." },
    ],
  },
  {
    slug: "custom-pyramid-candle-boxes",
    name: "Custom Pyramid Candle Boxes",
    categorySlug: "custom-candle-boxes",
    description: "Unique pyramid-shaped candle packaging that stands out with its distinctive geometric design.",
    longDescription: "Our pyramid candle boxes offer a unique and eye-catching packaging solution. The distinctive geometric shape creates shelf impact and makes your candles memorable.",
    features: ["Pyramid shape die-cut", "Custom printing", "Premium finishes", "Multiple size options", "Sturdy construction"],
    images: ["/images/categories/pyramid_candle_1.jpg", "/images/categories/pyramid_candle_2.jpg", "/images/categories/pyramid_candle_3.jpg"],
    faq: [
      { question: "How sturdy are pyramid boxes?", answer: "Our pyramid boxes are made from thick cardstock ensuring they maintain their shape during shipping and display." },
    ],
  },
  {
    slug: "custom-taper-candle-packaging",
    name: "Custom Taper Candle Packaging",
    categorySlug: "custom-candle-boxes",
    description: "Elongated packaging solutions designed for taper candles with secure holding mechanisms.",
    longDescription: "Our taper candle packaging is specifically designed for long, slender taper candles. With custom inserts and elongated box designs, your taper candles are protected from bending and breakage.",
    features: ["Elongated box design", "Anti-bend protection", "Custom taper inserts", "Elegant presentation", "Multiple candle count options"],
    images: ["/images/categories/taper_candle_1.jpg", "/images/categories/taper_candle_2.jpg", "/images/categories/taper_candle_3.jpg", "/images/categories/taper_candle_4.jpg", "/images/categories/taper_candle_5.jpg"],
    faq: [
      { question: "How many taper candles can one box hold?", answer: "We can design boxes for 2, 4, 6, or 12 taper candles with secure dividers." },
    ],
  },

  // ===== CANNABIS =====
  {
    slug: "concentrate-boxes",
    name: "Custom Concentrate Boxes",
    categorySlug: "custom-cannabis-boxes",
    description: "Child-resistant concentrate packaging for wax, shatter, and oil products.",
    longDescription: "Our concentrate boxes are designed for cannabis concentrates with child-resistant features and compliance labeling. Available in various sizes with custom inserts.",
    features: ["Child-resistant options", "Custom inserts", "Compliance labeling", "Smell-proof materials", "Premium printing"],
    images: ["/images/categories/concentrate_1.jpg", "/images/categories/concentrate_2.jpg", "/images/categories/concentrate_3.jpg", "/images/categories/concentrate_4.jpg"],
    faq: [
      { question: "Are these boxes child-resistant?", answer: "Yes, we offer child-resistant options that meet all regulatory requirements." },
    ],
  },
  {
    slug: "edible-boxes",
    name: "Custom Edible Boxes",
    categorySlug: "custom-cannabis-boxes",
    description: "Food-grade cannabis edible packaging with child-resistant and compliant features.",
    longDescription: "Our edible boxes are made from food-grade materials with child-resistant closures. Designed to keep edibles fresh while meeting all state packaging requirements.",
    features: ["Food-grade materials", "Child-resistant closures", "Freshness protection", "Compliant design", "Custom printing"],
    images: ["/images/categories/edible_1.jpg", "/images/categories/edible_2.jpg", "/images/categories/edible_3.jpg", "/images/categories/edible_4.jpg", "/images/categories/edible_5.jpg"],
    faq: [
      { question: "Are edible boxes food-safe?", answer: "Yes, all our edible packaging uses FDA-approved food-grade materials." },
    ],
  },
  {
    slug: "pre-roll-boxes",
    name: "Custom Pre-Roll Boxes",
    categorySlug: "custom-cannabis-boxes",
    description: "Custom pre-roll packaging with secure inserts and child-resistant options.",
    longDescription: "Our pre-roll boxes are designed to hold pre-rolled joints securely. Available with custom inserts, child-resistant closures, and compliant labeling for dispensaries.",
    features: ["Secure inserts", "Child-resistant options", "Custom sizes", "Compliance labeling", "Premium finishes"],
    images: ["/images/categories/preroll_1.jpg", "/images/categories/preroll_2.jpg", "/images/categories/preroll_3.jpg", "/images/categories/preroll_4.jpg", "/images/categories/preroll_5.jpg"],
    faq: [
      { question: "How many pre-rolls can one box hold?", answer: "We can design boxes for 1, 3, 5, or more pre-rolls with custom inserts." },
    ],
  },
  {
    slug: "tincture-packaging",
    name: "Custom Tincture Packaging",
    categorySlug: "custom-cannabis-boxes",
    description: "Custom tincture bottle packaging with protective inserts and compliant labeling.",
    longDescription: "Our tincture packaging is designed to securely hold tincture bottles with protective inserts. Features child-resistant options and space for compliance labeling.",
    features: ["Bottle inserts", "Child-resistant options", "Compliance labeling", "Custom sizes", "Premium printing"],
    images: ["/images/categories/tincture_1.jpg", "/images/categories/tincture_2.jpg", "/images/categories/tincture_3.jpg", "/images/categories/tincture_4.jpg", "/images/categories/tincture_5.jpg"],
    faq: [
      { question: "Can these boxes hold different bottle sizes?", answer: "Yes, we offer custom inserts designed for various tincture bottle sizes." },
    ],
  },

  // ===== CHOCOLATE =====
  {
    slug: "kraft-chocolate-boxes",
    name: "Custom Kraft Chocolate Boxes",
    categorySlug: "custom-chocolate-boxes",
    description: "Eco-friendly kraft chocolate packaging with a natural, rustic aesthetic.",
    longDescription: "Our kraft chocolate boxes combine sustainability with elegance. Made from 100% recyclable kraft material, perfect for artisan chocolatiers who value eco-friendly packaging.",
    features: ["100% recyclable kraft", "Food-grade materials", "Custom printing", "Window options", "Biodegradable"],
    images: ["/images/categories/kraft_chocolate_1.jpg", "/images/categories/kraft_chocolate_2.jpg", "/images/categories/kraft_chocolate_3.jpg", "/images/categories/kraft_chocolate_4.jpg", "/images/categories/kraft_chocolate_5.jpg"],
    faq: [
      { question: "Are these boxes food-safe?", answer: "Yes, all our chocolate packaging uses FDA-approved food-grade materials." },
    ],
  },
  {
    slug: "luxury-chocolate-boxes",
    name: "Custom Luxury Chocolate Boxes",
    categorySlug: "custom-chocolate-boxes",
    description: "Premium rigid chocolate packaging with foil stamping, inserts, and magnetic closures.",
    longDescription: "Our luxury chocolate boxes are crafted from rigid board with premium finishes. Featuring custom cavity inserts, foil stamping, and magnetic closures for a truly premium gifting experience.",
    features: ["Rigid board construction", "Custom cavity inserts", "Foil stamping", "Magnetic closure", "Soft-touch lamination"],
    images: ["/images/categories/luxury_chocolate_1.jpg", "/images/categories/luxury_chocolate_2.jpg", "/images/categories/luxury_chocolate_3.jpg", "/images/categories/luxury_chocolate_4.jpg", "/images/categories/luxury_chocolate_5.jpg"],
    faq: [
      { question: "Can I get custom cavity inserts?", answer: "Yes, we create custom cavity trays to hold individual chocolates securely." },
    ],
  },
  {
    slug: "truffle-boxes",
    name: "Custom Truffle Boxes",
    categorySlug: "custom-chocolate-boxes",
    description: "Elegant truffle packaging with individual cavities and premium finishes.",
    longDescription: "Our truffle boxes are designed with individual cavities to hold each truffle securely. Available in various sizes with window options and premium finishing.",
    features: ["Individual cavities", "Window options", "Food-grade materials", "Premium finishes", "Multiple sizes"],
    images: ["/images/categories/truffle_1.jpg", "/images/categories/truffle_2.jpg", "/images/categories/truffle_3.jpg", "/images/categories/truffle_4.jpg", "/images/categories/truffle_5.jpg"],
    faq: [
      { question: "How many truffles can one box hold?", answer: "We offer boxes for 4, 6, 9, 12, or 24 truffles with custom cavity trays." },
    ],
  },

  // ===== COSMETIC =====
  {
    slug: "foundation-boxes",
    name: "Custom Foundation Boxes",
    categorySlug: "cosmetic-boxes",
    description: "Custom foundation packaging with secure inserts and premium printing.",
    longDescription: "Our foundation boxes are designed to hold foundation bottles and compacts securely. Available with custom inserts, spot UV, and premium finishes.",
    features: ["Custom inserts", "Spot UV options", "Premium printing", "Multiple sizes", "Protective design"],
    images: ["/images/categories/foundation_1.jpg", "/images/categories/foundation_2.jpg", "/images/categories/foundation_3.jpg", "/images/categories/foundation_4.jpg", "/images/categories/foundation_5.jpg"],
    faq: [
      { question: "Can these hold glass bottles?", answer: "Yes, our custom inserts provide excellent protection for glass foundation bottles." },
    ],
  },
  {
    slug: "lip-gloss-boxes",
    name: "Custom Lip Gloss Boxes",
    categorySlug: "cosmetic-boxes",
    description: "Stylish lip gloss packaging with custom printing and premium finishes.",
    longDescription: "Our lip gloss boxes are crafted to showcase your lip products beautifully. Available in various sizes with spot UV, foil stamping, and window options.",
    features: ["Custom sizes", "Spot UV coating", "Foil stamping", "Window options", "Premium printing"],
    images: ["/images/categories/lipstick_1.jpg", "/images/categories/lipstick_2.jpg", "/images/categories/lipstick_3.jpg", "/images/categories/lipstick_4.jpg", "/images/categories/lipstick_5.jpg"],
    faq: [
      { question: "What finishes are available?", answer: "We offer matte, gloss, spot UV, foil stamping, and soft-touch lamination." },
    ],
  },
  {
    slug: "perfume-boxes",
    name: "Custom Perfume Boxes",
    categorySlug: "cosmetic-boxes",
    description: "Luxury perfume packaging with custom inserts and premium finishing options.",
    longDescription: "Our perfume boxes are designed to create a luxury unboxing experience. Featuring custom inserts for bottle protection, premium finishes, and elegant designs.",
    features: ["Custom bottle inserts", "Foil stamping", "Embossing", "Premium materials", "Magnetic closures"],
    images: ["/images/categories/perfume_1.jpg", "/images/categories/perfume_2.jpg", "/images/categories/perfume_3.jpg", "/images/categories/perfume_4.jpg", "/images/categories/perfume_5.jpg"],
    faq: [
      { question: "Can these protect glass perfume bottles?", answer: "Yes, our custom inserts are designed to securely hold and protect glass perfume bottles." },
    ],
  },
  {
    slug: "skincare-boxes",
    name: "Custom Skincare Boxes",
    categorySlug: "cosmetic-boxes",
    description: "Custom skincare packaging for serums, creams, and beauty products.",
    longDescription: "Our skincare boxes are designed to complement your beauty brand. Available in various sizes with premium finishes, custom inserts, and eco-friendly material options.",
    features: ["Custom sizes", "Eco-friendly options", "Premium finishes", "Custom inserts", "Full-color printing"],
    images: ["/images/categories/skincare_1.jpg", "/images/categories/skincare_2.jpg", "/images/categories/skincare_3.jpg", "/images/categories/skincare_4.jpg", "/images/categories/skincare_5.jpg"],
    faq: [
      { question: "Can I get eco-friendly skincare boxes?", answer: "Yes, we offer kraft, recycled cardboard, and soy-ink options for eco-conscious brands." },
    ],
  },

  // ===== FOOD =====
  {
    slug: "burger-boxes",
    name: "Custom Burger Boxes",
    categorySlug: "food-packaging",
    description: "Food-grade burger boxes with grease-resistant coating and custom branding.",
    longDescription: "Our burger boxes are designed to keep burgers fresh and presentable. Made from food-grade materials with grease-resistant coating and custom printing.",
    features: ["Food-grade materials", "Grease-resistant coating", "Custom printing", "Ventilation options", "Multiple sizes"],
    images: ["/images/categories/burger_1.jpg", "/images/categories/burger_2.jpg", "/images/categories/burger_3.jpg", "/images/categories/burger_4.jpg", "/images/categories/burger_5.jpg"],
    faq: [
      { question: "Are these boxes grease-proof?", answer: "Yes, our burger boxes feature grease-resistant coatings to keep packaging clean." },
    ],
  },
  {
    slug: "cereal-boxes",
    name: "Custom Cereal Boxes",
    categorySlug: "food-packaging",
    description: "Custom cereal packaging with vibrant printing and food-safe materials.",
    longDescription: "Our cereal boxes are made from food-grade cardboard with vibrant full-color printing. Available in standard and custom sizes with options for inner liners.",
    features: ["Food-grade materials", "Full-color printing", "Inner liner options", "Custom sizes", "Shelf-ready design"],
    images: ["/images/categories/cereal_1.jpg", "/images/categories/cereal_2.jpg", "/images/categories/cereal_3.jpg", "/images/categories/cereal_4.jpg"],
    faq: [
      { question: "Can cereal boxes include inner liners?", answer: "Yes, we offer food-safe poly or wax inner liners to maintain freshness." },
    ],
  },
  {
    slug: "custom-food-trays",
    name: "Custom Food Trays",
    categorySlug: "food-packaging",
    description: "Food-grade trays for takeout, catering, and food service applications.",
    longDescription: "Our custom food trays are designed for restaurants, caterers, and food service. Made from food-grade materials with grease-resistant options and custom branding.",
    features: ["Food-grade materials", "Grease-resistant", "Custom branding", "Multiple sizes", "Stackable design"],
    images: ["/images/categories/foodtray_1.jpg", "/images/categories/foodtray_2.jpg", "/images/categories/foodtray_3.jpg", "/images/categories/foodtray_4.jpg"],
    faq: [
      { question: "Are food trays microwave-safe?", answer: "We offer microwave-safe options, please specify your requirements when ordering." },
    ],
  },
  {
    slug: "frozen-food-boxes",
    name: "Custom Frozen Food Boxes",
    categorySlug: "food-packaging",
    description: "Moisture-resistant frozen food packaging designed for cold storage.",
    longDescription: "Our frozen food boxes are engineered to withstand cold temperatures and moisture. Made from coated cardboard that maintains structural integrity in freezer conditions.",
    features: ["Moisture-resistant coating", "Freezer-safe materials", "Custom printing", "Multiple sizes", "FDA compliant"],
    images: ["/images/categories/frozen_1.jpg", "/images/categories/frozen_2.jpg", "/images/categories/frozen_3.jpg", "/images/categories/frozen_4.jpg", "/images/categories/frozen_5.jpg"],
    faq: [
      { question: "Can these boxes withstand freezer temperatures?", answer: "Yes, our frozen food boxes are made with special coatings that maintain integrity at freezer temperatures." },
    ],
  },

  // ===== PHARMA =====
  {
    slug: "supplement-boxes",
    name: "Custom Supplement Boxes",
    categorySlug: "pharma-packaging",
    description: "FDA-compliant supplement packaging with tamper-evident features.",
    longDescription: "Our supplement boxes meet all FDA requirements for dietary supplement packaging. Available with tamper-evident seals, serialization, and custom printing.",
    features: ["FDA compliant", "Tamper-evident seals", "Custom printing", "Serialization options", "Multiple sizes"],
    images: ["/images/categories/supplement_1.jpg", "/images/categories/supplement_2.jpg", "/images/categories/supplement_3.jpg", "/images/categories/supplement_4.jpg", "/images/categories/supplement_5.jpg"],
    faq: [
      { question: "Are these boxes FDA compliant?", answer: "Yes, all our supplement packaging meets FDA compliance standards." },
    ],
  },
  {
    slug: "syringe-boxes",
    name: "Custom Syringe Boxes",
    categorySlug: "pharma-packaging",
    description: "Medical-grade syringe packaging with secure inserts and tamper-evident features.",
    longDescription: "Our syringe boxes are designed with medical-grade materials and custom inserts to securely hold syringes. Features tamper-evident closures and compliance labeling.",
    features: ["Medical-grade materials", "Custom syringe inserts", "Tamper-evident closures", "Compliance labeling", "Sterile packaging options"],
    images: ["/images/categories/syringe_1.jpg", "/images/categories/syringe_2.jpg", "/images/categories/syringe_3.jpg", "/images/categories/syringe_4.jpg", "/images/categories/syringe_5.jpg"],
    faq: [
      { question: "Are these suitable for medical use?", answer: "Yes, our syringe boxes use medical-grade materials suitable for healthcare applications." },
    ],
  },

  // ===== SOAP =====
  {
    slug: "kraft-soap-boxes",
    name: "Custom Kraft Soap Boxes",
    categorySlug: "custom-soap-boxes",
    description: "Eco-friendly kraft soap packaging with a natural, rustic look.",
    longDescription: "Our kraft soap boxes are perfect for handmade and artisan soaps. Made from 100% recyclable kraft material with custom printing and window options.",
    features: ["100% recyclable", "Custom printing", "Window options", "Natural aesthetic", "Biodegradable"],
    images: ["/images/categories/kraftsoap_1.jpg", "/images/categories/kraftsoap_2.jpg", "/images/categories/kraftsoap_3.jpg", "/images/categories/kraftsoap_4.jpg", "/images/categories/kraftsoap_5.jpg"],
    faq: [
      { question: "Are kraft soap boxes eco-friendly?", answer: "Yes, our kraft boxes are 100% recyclable and biodegradable." },
    ],
  },
  {
    slug: "soap-gift-boxes",
    name: "Custom Soap Gift Boxes",
    categorySlug: "custom-soap-boxes",
    description: "Premium soap gift boxes for sets, holiday gifts, and special occasions.",
    longDescription: "Our soap gift boxes are designed for multi-bar soap sets and special occasions. Available with compartment dividers, ribbon closures, and premium finishes.",
    features: ["Compartment dividers", "Ribbon closures", "Premium finishes", "Multiple sizes", "Gift-ready packaging"],
    faq: [
      { question: "Can gift boxes hold multiple soaps?", answer: "Yes, we design boxes with dividers to hold 2-8 bars of soap." },
    ],
    images: ["/images/categories/soapgift_1.jpg", "/images/categories/soapgift_2.jpg", "/images/categories/soapgift_3.jpg", "/images/categories/soapgift_4.jpg"],
  },
  {
    slug: "conical-soap-boxes",
    name: "Custom Conical Soap Boxes",
    categorySlug: "custom-soap-boxes",
    description: "Unique cone-shaped soap packaging for specialty and artisan soap products.",
    longDescription: "Our conical soap boxes are designed for cone-shaped and specialty soaps. Custom die-cut construction ensures a perfect fit with options for custom printing and window displays.",
    features: ["Custom die-cut shape", "Perfect fit for cone soaps", "Window options", "Custom printing", "Sturdy construction"],
    faq: [
      { question: "Can these fit different cone sizes?", answer: "Yes, we offer fully customizable dimensions to fit any cone-shaped soap." },
    ],
  },
  {
    slug: "soap-sleeve-packaging",
    name: "Custom Soap Sleeve Packaging",
    categorySlug: "custom-soap-boxes",
    description: "Minimalist soap sleeve wraps for a clean, modern packaging aesthetic.",
    longDescription: "Our soap sleeve packaging wraps around your bars for a clean, minimalist look. Perfect for brands that want to showcase the soap itself while adding branded elements.",
    features: ["Minimalist design", "Full-color printing", "Custom sizes", "Easy application", "Eco-friendly options"],
    faq: [
      { question: "How are soap sleeves applied?", answer: "Soap sleeves simply wrap around the bar, no glue needed for most designs." },
    ],
    images: ["/images/categories/soapsleeve_1.jpg", "/images/categories/soapsleeve_2.jpg", "/images/categories/soapsleeve_3.jpg", "/images/categories/soapsleeve_4.jpg"],
  },
  {
    slug: "window-soap-boxes",
    name: "Custom Window Soap Boxes",
    categorySlug: "custom-soap-boxes",
    description: "Soap boxes with die-cut windows to showcase your handmade soap products.",
    longDescription: "Our window soap boxes let customers see and smell your soap before purchase. Die-cut windows with optional clear film allow product visibility while maintaining protection.",
    features: ["Die-cut windows", "Optional clear film", "Product visibility", "Custom shapes", "Full-color printing"],
    faq: [
      { question: "Can the window be left open for scent?", answer: "Yes, we offer open windows for scent exposure or film-covered windows for full protection." },
    ],
    images: ["/images/categories/windowsoap_1.jpg", "/images/categories/windowsoap_2.jpg", "/images/categories/windowsoap_3.jpg", "/images/categories/windowsoap_4.jpg"],
  },

  // ===== VAPE =====
  {
    slug: "disposable-vape-boxes",
    name: "Custom Disposable Vape Boxes",
    categorySlug: "custom-vape-boxes",
    description: "Custom packaging for disposable vape devices with secure inserts.",
    longDescription: "Our disposable vape boxes are designed to hold disposable vape pens securely. Available with custom inserts, window options, and premium finishes.",
    features: ["Custom inserts", "Window options", "Premium finishes", "Multiple sizes", "Secure design"],
    faq: [
      { question: "Can these hold different vape sizes?", answer: "Yes, we offer custom inserts for any disposable vape device dimensions." },
    ],
    images: ["/images/categories/dispvape_1.jpg", "/images/categories/dispvape_2.jpg", "/images/categories/dispvape_3.jpg", "/images/categories/dispvape_4.jpg", "/images/categories/dispvape_5.jpg"],
  },
  {
    slug: "e-liquid-boxes",
    name: "Custom E-Liquid Boxes",
    categorySlug: "custom-vape-boxes",
    description: "Custom e-liquid bottle packaging with protective inserts and vibrant printing.",
    longDescription: "Our e-liquid boxes are designed to securely hold e-liquid bottles with protective inserts. Available with child-resistant closures and full-color printing.",
    features: ["Bottle inserts", "Child-resistant options", "Full-color printing", "Multiple bottle sizes", "Premium finishes"],
    faq: [
      { question: "Are e-liquid boxes child-resistant?", answer: "Yes, we offer child-resistant packaging options for e-liquid products." },
    ],
    images: ["/images/categories/eliquid_1.jpg", "/images/categories/eliquid_2.jpg", "/images/categories/eliquid_3.jpg", "/images/categories/eliquid_4.jpg", "/images/categories/eliquid_5.jpg"],
  },
  {
    slug: "vape-cartridge-boxes",
    name: "Custom Vape Cartridge Boxes",
    categorySlug: "custom-vape-boxes",
    description: "Secure vape cartridge packaging with custom inserts and premium branding.",
    longDescription: "Our vape cartridge boxes are designed with precision inserts to hold cartridges securely. Available with window options, premium finishes, and custom branding.",
    features: ["Precision inserts", "Window options", "Premium branding", "Multiple configurations", "Secure design"],
    faq: [
      { question: "Can these hold multiple cartridges?", answer: "Yes, we design boxes for single or multi-pack cartridge configurations." },
    ],
    images: ["/images/categories/vapecart_1.jpg", "/images/categories/vapecart_2.jpg", "/images/categories/vapecart_3.jpg", "/images/categories/vapecart_4.jpg", "/images/categories/vapecart_5.jpg"],
  },

  // ===== BAKERY =====
  {
    slug: "cookie-boxes",
    name: "Custom Cookie Boxes",
    categorySlug: "bakery-boxes",
    description: "Custom cookie packaging with window options to showcase your delicious treats.",
    longDescription: "Our cookie boxes are designed to keep cookies fresh while showcasing them beautifully. Available with window cut-outs, custom inserts, and food-grade materials perfect for bakeries, gift shops, and e-commerce brands.",
    features: ["Food-grade materials", "Window cut-out options", "Custom inserts", "Full-color printing", "Multiple size options"],
    images: ["/images/categories/cookie_1.webp", "/images/categories/cookie_2.webp", "/images/categories/cookie_3.webp", "/images/categories/cookie_4.jpg"],
    faq: [
      { question: "Are cookie boxes food-safe?", answer: "Yes, all our cookie packaging uses FDA-approved food-grade materials." },
    ],
  },
  {
    slug: "donut-boxes",
    name: "Custom Donut Boxes",
    categorySlug: "bakery-boxes",
    description: "Sturdy donut packaging designed to protect and present donuts beautifully.",
    longDescription: "Our donut boxes feature sturdy construction to prevent crushing and keep donuts fresh. Available in single, half-dozen, and dozen configurations with custom branding options.",
    features: ["Sturdy construction", "Multiple configurations", "Window options", "Custom branding", "Grease-resistant coating"],
    images: ["/images/categories/donut_1.jpg", "/images/categories/donut_2.webp", "/images/categories/donut_3.webp", "/images/categories/donut_4.webp"],
    faq: [
      { question: "How many donuts can one box hold?", answer: "We offer boxes for single donuts, half-dozen, and full dozen configurations." },
    ],
  },
  {
    slug: "kraft-bakery-boxes",
    name: "Custom Kraft Bakery Boxes",
    categorySlug: "bakery-boxes",
    description: "Eco-friendly kraft bakery packaging with a natural, rustic aesthetic.",
    longDescription: "Our kraft bakery boxes combine eco-friendliness with functionality. Made from 100% recyclable brown kraft material, these food-grade boxes are perfect for artisan bakeries and eco-conscious brands.",
    features: ["100% recyclable kraft", "Food-grade materials", "Custom printing on kraft", "Window options", "Biodegradable"],
    images: ["/images/categories/kraft_bakery_1.jpg", "/images/categories/kraft_bakery_2.jpg", "/images/categories/kraft_bakery_3.jpg", "/images/categories/kraft_bakery_4.jpg", "/images/categories/kraft_bakery_5.jpg"],
    faq: [
      { question: "Can kraft bakery boxes be printed in full color?", answer: "Yes, we can print full-color designs on kraft material." },
    ],
  },
  {
    slug: "window-bakery-boxes",
    name: "Custom Window Bakery Boxes",
    categorySlug: "bakery-boxes",
    description: "Bakery boxes with clear windows to showcase your baked goods without opening.",
    longDescription: "Our window bakery boxes let your baked goods sell themselves. Die-cut windows with food-safe clear film allow customers to see your products without opening the box, driving purchase decisions.",
    features: ["Die-cut window", "Food-safe clear film", "Multiple window shapes", "Product visibility", "Custom sizes"],
    images: ["/images/categories/window_bakery_1.jpg", "/images/categories/window_bakery_2.jpg", "/images/categories/window_bakery_3.jpg", "/images/categories/window_bakery_4.jpg"],
    faq: [
      { question: "What window shapes are available?", answer: "We offer rectangular, round, oval, and custom-shaped windows." },
    ],
  },

  // ===== JEWELLERY =====
  {
    slug: "bracelet-boxes",
    name: "Custom Bracelet Boxes",
    categorySlug: "jewellery-boxes",
    description: "Elegant bracelet packaging with cushioned inserts for secure presentation.",
    longDescription: "Our bracelet boxes are designed with cushioned inserts to hold bracelets securely and present them beautifully. Available in velvet-lined, kraft, and rigid styles with custom branding.",
    features: ["Cushioned inserts", "Velvet lining options", "Custom branding", "Multiple materials", "Premium finishes"],
    images: ["/images/categories/bracelet_1.webp", "/images/categories/bracelet_2.webp", "/images/categories/bracelet_3.webp"],
    faq: [
      { question: "Do bracelet boxes come with inserts?", answer: "Yes, all our bracelet boxes include cushioned inserts to hold bracelets securely." },
    ],
  },
  {
    slug: "jewelry-display-boxes",
    name: "Custom Jewelry Display Boxes",
    categorySlug: "jewellery-boxes",
    description: "Display-ready jewellery boxes designed for retail showcasing and gifting.",
    longDescription: "Our jewelry display boxes are crafted for retail environments and gift presentation. Featuring clear lids, velvet trays, and multi-compartment designs that showcase your pieces beautifully.",
    features: ["Clear lid options", "Velvet trays", "Multi-compartment designs", "Retail-ready presentation", "Custom sizes"],
    images: ["/images/categories/jewdisplay_1.webp", "/images/categories/jewdisplay_2.webp", "/images/categories/jewdisplay_3.webp", "/images/categories/jewdisplay_4.webp"],
    faq: [
      { question: "Can display boxes hold multiple pieces?", answer: "Yes, we offer multi-compartment designs for rings, earrings, necklaces, and bracelets." },
    ],
  },
  {
    slug: "jewellery-subscription-boxes",
    name: "Custom Jewellery Subscription Boxes",
    categorySlug: "jewellery-boxes",
    description: "Monthly subscription jewellery packaging designed for recurring shipments.",
    longDescription: "Our jewellery subscription boxes are designed for the growing subscription box market. Featuring branded exterior printing, protective inserts, and a premium unboxing experience that keeps subscribers excited month after month.",
    features: ["Branded exterior", "Protective inserts", "Mailer-ready design", "Premium unboxing", "Consistent sizing"],
    images: ["/images/categories/jewsub_1.webp", "/images/categories/jewsub_2.webp", "/images/categories/jewsub_3.webp", "/images/categories/jewsub_4.webp"],
    faq: [
      { question: "Are these boxes suitable for shipping?", answer: "Yes, our subscription boxes are designed to be shipped directly to customers without additional packaging." },
    ],
  },
  {
    slug: "kraft-jewellery-boxes",
    name: "Custom Kraft Jewellery Boxes",
    categorySlug: "jewellery-boxes",
    description: "Eco-friendly kraft jewellery boxes with a natural, artisan aesthetic.",
    longDescription: "Our kraft jewellery boxes offer an eco-friendly packaging solution with a charming rustic appeal. Made from recyclable kraft material with cotton-fill inserts, perfect for handmade jewellery brands.",
    features: ["Recyclable kraft material", "Cotton-fill inserts", "Custom stamping", "Eco-friendly", "Natural aesthetic"],
    images: ["/images/categories/kraft_jew_1.webp", "/images/categories/kraft_jew_2.webp", "/images/categories/kraft_jew_3.webp", "/images/categories/kraft_jew_4.webp"],
    faq: [
      { question: "Can kraft jewellery boxes be customized?", answer: "Yes, we offer custom stamping, printing, and sizing on all kraft jewellery boxes." },
    ],
  },
  {
    slug: "necklace-packaging",
    name: "Custom Necklace Packaging",
    categorySlug: "jewellery-boxes",
    description: "Custom necklace packaging with hooks and inserts for tangle-free presentation.",
    longDescription: "Our necklace packaging features specially designed hooks, slots, and inserts to keep necklaces tangle-free and beautifully displayed. Available in gift box, folding, and rigid styles.",
    features: ["Tangle-free hooks", "Custom inserts", "Multiple styles", "Premium presentation", "Gift-ready packaging"],
    images: ["/images/categories/necklace_1.webp", "/images/categories/necklace_2.webp", "/images/categories/necklace_3.webp", "/images/categories/necklace_4.webp"],
    faq: [
      { question: "How do necklace boxes prevent tangling?", answer: "Our boxes feature hooks and slots designed to keep necklaces separated and tangle-free." },
    ],
  },

  // ===== MYLAR BAGS =====
  {
    slug: "hanging-mylar-bags",
    name: "Custom Hanging Mylar Bags",
    categorySlug: "mylar-bags",
    description: "Mylar bags with hang holes for retail display on hooks and pegboards.",
    longDescription: "Our hanging mylar bags feature reinforced hang holes for easy retail display on hooks and pegboards. Available with resealable closures and full-color custom printing for maximum shelf impact.",
    features: ["Reinforced hang holes", "Resealable closures", "Full-color printing", "Barrier protection", "Retail-ready"],
    images: ["/images/categories/hanging_mylar_1.jpg", "/images/categories/hanging_mylar_2.jpg", "/images/categories/hanging_mylar_3.jpg", "/images/categories/hanging_mylar_4.jpg"],
    faq: [
      { question: "Are hang holes reinforced?", answer: "Yes, all our hanging mylar bags feature reinforced hang holes to prevent tearing." },
    ],
  },
  {
    slug: "kraft-mylar-bags",
    name: "Custom Kraft Mylar Bags",
    categorySlug: "mylar-bags",
    description: "Kraft-front mylar bags combining natural aesthetics with barrier protection.",
    longDescription: "Our kraft mylar bags feature a natural kraft front with a foil-lined back for superior barrier protection. Perfect for organic, natural, and artisan products that need shelf appeal with product freshness.",
    features: ["Kraft front / foil back", "Barrier protection", "Resealable zip lock", "Window options", "Eco-friendly appearance"],
    images: ["/images/categories/kraft_mylar_1.jpg", "/images/categories/kraft_mylar_2.jpg", "/images/categories/kraft_mylar_3.jpg", "/images/categories/kraft_mylar_4.jpg", "/images/categories/kraft_mylar_5.jpg"],
    faq: [
      { question: "Do kraft mylar bags offer the same protection as regular mylar?", answer: "Yes, the foil-lined back provides the same moisture, light, and oxygen barrier protection." },
    ],
  },
  {
    slug: "resealable-zip-lock-bags",
    name: "Custom Resealable Zip Lock Bags",
    categorySlug: "mylar-bags",
    description: "Resealable mylar bags with zip lock closures for easy open-and-close convenience.",
    longDescription: "Our resealable zip lock mylar bags offer convenience and freshness. Customers can easily open and reseal the bag multiple times while maintaining product freshness and barrier protection.",
    features: ["Zip lock closure", "Multiple reseal uses", "Barrier protection", "Custom printing", "Multiple sizes"],
    images: ["/images/categories/resealable_zip_1.jpg", "/images/categories/resealable_zip_2.jpg", "/images/categories/resealable_zip_3.jpg", "/images/categories/resealable_zip_4.jpg"],
    faq: [
      { question: "How many times can bags be resealed?", answer: "Our zip lock closures are designed for hundreds of open-and-close cycles." },
    ],
  },
  {
    slug: "side-gusset-mylar-bags",
    name: "Custom Side Gusset Mylar Bags",
    categorySlug: "mylar-bags",
    description: "Side gusset mylar bags with extra volume for bulkier products.",
    longDescription: "Our side gusset mylar bags expand to accommodate bulkier products while maintaining a slim profile on shelves. Ideal for coffee, tea, snacks, and other products that need extra volume.",
    features: ["Expandable side gussets", "Extra volume capacity", "Barrier protection", "Custom printing", "Shelf-stable profile"],
    images: ["/images/categories/side_gusset_1.jpg", "/images/categories/side_gusset_2.jpg", "/images/categories/side_gusset_3.jpg", "/images/categories/side_gusset_4.jpg", "/images/categories/side_gusset_5.jpg"],
    faq: [
      { question: "What products are side gusset bags best for?", answer: "Side gusset bags are ideal for coffee, tea, granola, pet food, and other bulky items." },
    ],
  },
  {
    slug: "stand-up-mylar-bags",
    name: "Custom Stand Up Mylar Bags",
    categorySlug: "mylar-bags",
    description: "Stand-up pouches with bottom gussets for self-standing retail display.",
    longDescription: "Our stand-up mylar bags feature a bottom gusset that allows them to stand upright on shelves for maximum retail visibility. Available with resealable closures, tear notches, and full-color printing.",
    features: ["Self-standing design", "Bottom gusset", "Resealable closures", "Tear notches", "Full-color printing"],
    images: ["/images/categories/standup_mylar_1.jpg", "/images/categories/standup_mylar_2.jpg", "/images/categories/standup_mylar_3.jpg", "/images/categories/standup_mylar_4.jpg"],
    faq: [
      { question: "Do stand-up bags stay upright when partially full?", answer: "Yes, the bottom gusset design keeps bags standing upright even when partially full." },
    ],
  },
  {
    slug: "window-mylar-bags",
    name: "Custom Window Mylar Bags",
    categorySlug: "mylar-bags",
    description: "Mylar bags with clear windows to showcase product contents.",
    longDescription: "Our window mylar bags feature clear window panels that let customers see the product inside while maintaining barrier protection. Perfect for snacks, dried fruits, candy, and any product that sells visually.",
    features: ["Clear window panel", "Barrier protection maintained", "Product visibility", "Custom window shapes", "Resealable options"],
    images: ["/images/categories/window_mylar_1.jpg", "/images/categories/window_mylar_2.jpg", "/images/categories/window_mylar_3.jpg", "/images/categories/window_mylar_4.jpg"],
    faq: [
      { question: "Does the window affect barrier protection?", answer: "Our windows are made from food-grade clear film that maintains barrier protection while allowing product visibility." },
    ],
  },

  // ===== OIL PACKAGING =====
  {
    slug: "kraft-oil-packaging",
    name: "Custom Kraft Oil Packaging",
    categorySlug: "oil-packaging",
    description: "Eco-friendly kraft oil boxes with custom inserts for bottle protection.",
    longDescription: "Our kraft oil packaging combines natural aesthetics with functional protection. Made from recyclable kraft material with custom die-cut inserts to securely hold bottles during shipping and retail display.",
    features: ["Recyclable kraft material", "Custom bottle inserts", "Eco-friendly", "Custom printing", "Multiple bottle sizes"],
    images: ["/images/categories/kraft_oil_1.jpg", "/images/categories/kraft_oil_2.jpg", "/images/categories/kraft_oil_3.jpg", "/images/categories/kraft_oil_4.jpg"],
    faq: [
      { question: "Can kraft oil boxes hold glass bottles?", answer: "Yes, our custom inserts are designed to securely hold glass bottles of various sizes." },
    ],
  },
  {
    slug: "oil-shipping-boxes",
    name: "Custom Oil Shipping Boxes",
    categorySlug: "oil-packaging",
    description: "Sturdy corrugated shipping boxes designed for safe oil bottle transit.",
    longDescription: "Our oil shipping boxes are engineered for maximum protection during transit. Made from sturdy corrugated material with custom inserts and dividers to prevent bottle movement and breakage.",
    features: ["Corrugated construction", "Custom bottle inserts", "Divider options", "Shock protection", "Multiple bottle configurations"],
    images: ["/images/categories/oil_ship_1.jpg", "/images/categories/oil_ship_2.jpg", "/images/categories/oil_ship_3.jpg", "/images/categories/oil_ship_4.jpg"],
    faq: [
      { question: "How many bottles can one shipping box hold?", answer: "We design boxes for single bottles up to 12+ bottle configurations with custom dividers." },
    ],
  },

  // ===== AUTO PARTS =====
  {
    slug: "auto-parts-boxes",
    name: "Custom Auto Parts Boxes",
    categorySlug: "auto-parts",
    description: "Heavy-duty custom boxes designed to protect automotive parts during shipping and storage.",
    longDescription: "Our auto parts boxes are engineered for durability and protection. Built from premium corrugated and rigid board materials with custom foam or die-cut inserts, they securely hold gears, filters, sensors, and other automotive components of any shape or size.",
    features: ["Heavy-duty corrugated construction", "Custom foam or die-cut inserts", "Full-color branding", "Multiple size options", "Stackable design"],
    images: ["/images/categories/autoparts1.jpg", "/images/categories/autoparts2.jpg", "/images/categories/autoparts3.jpg", "/images/categories/autoparts4.jpg"],
    faq: [
      { question: "What materials are used for auto parts boxes?", answer: "We use heavy-duty corrugated and rigid board materials engineered to handle the weight of automotive components." },
      { question: "Can these boxes hold irregularly shaped parts?", answer: "Yes, we offer custom die-cut and foam inserts tailored to the exact shape of your parts." },
    ],
  },
  {
    slug: "heavy-duty-shipping-boxes",
    name: "Heavy-Duty Shipping Boxes",
    categorySlug: "auto-parts",
    description: "Reinforced shipping boxes built to withstand the rigors of heavy automotive component transit.",
    longDescription: "Our heavy-duty shipping boxes are constructed from multi-wall corrugated board to handle heavy loads and rough handling during transit. Ideal for large automotive parts, tools, and equipment that require extra strength and impact resistance.",
    features: ["Multi-wall corrugated board", "High weight capacity", "Reinforced corners", "Custom sizing", "Moisture-resistant options"],
    images: ["/images/categories/autoparts2.jpg", "/images/categories/autoparts3.jpg", "/images/categories/autoparts4.jpg", "/images/categories/autoparts5.jpg"],
    faq: [
      { question: "How much weight can heavy-duty boxes hold?", answer: "Our heavy-duty boxes are rated for loads up to 150 lbs depending on the wall configuration selected." },
      { question: "Are these boxes moisture-resistant?", answer: "Yes, we offer moisture-resistant coatings to protect parts from humidity during shipping." },
    ],
  },
  {
    slug: "corrugated-inserts",
    name: "Corrugated Inserts",
    categorySlug: "auto-parts",
    description: "Custom corrugated inserts and dividers to securely hold and separate automotive parts inside shipping boxes.",
    longDescription: "Our corrugated inserts are precision die-cut to fit your specific parts, preventing movement and damage during transit. Available as full-height dividers, cell packs, or custom-shaped cradles for delicate and precision automotive components.",
    features: ["Precision die-cut design", "Cell pack and divider options", "Custom cradle shapes", "Recyclable corrugated material", "Fits any box dimension"],
    images: ["/images/categories/auto_lock_1.jpg", "/images/categories/auto_lock_2.jpg", "/images/categories/auto_lock_3.jpg", "/images/categories/auto_lock_4.jpg"],
    faq: [
      { question: "Can inserts be made for fragile components?", answer: "Absolutely — we design custom foam and corrugated cradles specifically for fragile and precision parts." },
      { question: "Do you offer inserts for multiple parts per box?", answer: "Yes, we produce multi-cell divider inserts that hold multiple parts separately in one box." },
    ],
  },

  // ===== WINDOW BOXES =====
  {
    slug: "front-window-boxes",
    name: "Custom Front Window Boxes",
    categorySlug: "window-boxes",
    description: "Window boxes with a front-facing die-cut window for maximum product visibility on retail shelves.",
    longDescription: "Our front window boxes feature a prominent die-cut window on the front panel, giving customers a clear view of your product. Perfect for retail display, gift packaging, and food products. Available with clear PET film and custom window shapes to match your branding.",
    features: ["Front-facing window cut-out", "Clear PET film", "Custom window shapes", "Full-color printing", "Multiple material options"],
    images: ["/images/categories/front_window_1.jpg", "/images/categories/front_window_2.jpg", "/images/categories/front_window_3.jpg", "/images/categories/front_window_4.jpg"],
    faq: [
      { question: "Can I customize the window shape?", answer: "Yes, we offer custom die-cut window shapes including oval, rectangular, and unique brand-specific designs." },
      { question: "Is the window film food-safe?", answer: "Yes, our clear PET window film is FDA-approved and food-safe." },
    ],
  },
  {
    slug: "top-window-boxes",
    name: "Custom Top Window Boxes",
    categorySlug: "window-boxes",
    description: "Window boxes with a top-facing die-cut window, ideal for bakery, confectionery, and gift packaging.",
    longDescription: "Our top window boxes feature a die-cut window on the top panel, perfect for showcasing baked goods, confections, and gift items from above. The top window design allows easy product visibility while keeping items secure and fresh.",
    features: ["Top-facing window cut-out", "Clear PET film", "Food-grade materials", "Custom sizes", "Stackable design"],
    images: ["/images/categories/top_window_1.jpg", "/images/categories/top_window_2.jpg", "/images/categories/top_window_3.jpg", "/images/categories/top_window_4.jpg"],
    faq: [
      { question: "Are top window boxes suitable for bakery items?", answer: "Absolutely! Our top window boxes are a popular choice for cookies, pastries, donuts, and other baked goods." },
      { question: "Can these boxes be stacked?", answer: "Yes, our top window boxes are designed with a sturdy structure that allows safe stacking." },
    ],
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (categorySlug: string): Product[] =>
  products.filter((p) => p.categorySlug === categorySlug);
