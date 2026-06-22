import { Shirt, Cannabis, Cigarette, Pill, Gift, Cog, ShoppingBag, Cpu } from "lucide-react";
import { CandleIcon, SoapIcon, FoodDomeIcon, CandyIcon, LipstickIcon, CupcakeIcon, LuxuryBoxIcon, RingIcon, MylarBagIcon, OilBottleIcon } from "@/components/icons/category-icons";

export interface SubProduct {
  name: string;
  slug: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  icon: any;
  gradient: string;
  images?: string[];
  subProducts: SubProduct[];
  faq: { question: string; answer: string }[];
}

export const categories: Category[] = [
  {
    slug: "custom-candle-boxes",
    name: "Custom Candle Boxes",
    icon: CandleIcon,
    gradient: "from-amber-500 to-orange-600",
    images: [
      "/images/categories/candle_1.jpg",
      "/images/categories/candle_2.jpg",
      "/images/categories/candle_3.jpg",
      "/images/categories/candle_4.jpg",
      "/images/categories/candle_5.jpg",
    ],
    description: "Premium candle packaging that protects and showcases your candles beautifully.",
    longDescription: "Our candle boxes are designed to complement your brand's aesthetic while ensuring maximum protection for your products. Whether you sell jar candles, pillar candles, or votives, we offer tailored packaging solutions that enhance shelf appeal and create memorable unboxing experiences.",
    subProducts: [
      { name: "Custom 16 Wishes Candle Boxes", slug: "16-wishes-candle-boxes" },
      { name: "Custom Candle Boxes with Inserts", slug: "custom-candle-boxes-with-inserts" },
      { name: "Custom Candle Boxes with Window", slug: "custom-candle-boxes-with-window" },
      { name: "Custom Candle Dust Covers", slug: "candle-dust-covers" },
      { name: "Custom Candle Shipping Boxes", slug: "custom-candle-shipping-boxes" },
      { name: "Custom Jar Candle Boxes", slug: "custom-jar-candle-boxes" },
      { name: "Custom Kraft Candle Boxes", slug: "custom-kraft-candle-boxes" },
      { name: "Custom Luxury Candle Boxes", slug: "custom-luxury-candle-boxes" },
      { name: "Custom Pillar Candle Boxes", slug: "custom-pillar-candle-boxes" },
      { name: "Custom Pyramid Candle Boxes", slug: "custom-pyramid-candle-boxes" },
      { name: "Custom Taper Candle Packaging", slug: "custom-taper-candle-packaging" },
    ],
    faq: [
      { question: "What materials are used for candle boxes?", answer: "We use premium cardstock, kraft, corrugated, and rigid board materials depending on your needs." },
      { question: "Can I get custom inserts for my candle boxes?", answer: "Yes, we offer custom die-cut inserts to securely hold candles of any shape and size." },
      { question: "What is the minimum order quantity?", answer: "Our minimum order quantity starts at just 100 boxes." },
      { question: "How long does production take?", answer: "Standard production takes 8-10 business days after design approval." },
    ],
  },
  {
    slug: "custom-soap-boxes",
    name: "Custom Soap Boxes",
    icon: SoapIcon,
    gradient: "from-teal-400 to-emerald-500",
    images: ["/images/categories/soap_1.jpg", "/images/categories/soap_2.jpg", "/images/categories/soap_3.jpg", "/images/categories/soap_4.jpg", "/images/categories/soap_5.jpg"],
    description: "Eco-friendly soap packaging with stunning designs to elevate your brand.",
    longDescription: "Create the perfect first impression with our soap boxes. Available in kraft, cardboard, and corrugated materials with options for window cut-outs, embossing, and eco-friendly finishes that align with your brand values.",
    subProducts: [
      { name: "Custom Kraft Soap Boxes", slug: "kraft-soap-boxes" },
      { name: "Custom Soap Gift Boxes", slug: "soap-gift-boxes" },
      { name: "Custom Conical Soap Boxes", slug: "conical-soap-boxes" },
      { name: "Custom Soap Sleeve Packaging", slug: "soap-sleeve-packaging" },
      { name: "Custom Window Soap Boxes", slug: "window-soap-boxes" },
    ],
    faq: [
      { question: "Are your soap boxes eco-friendly?", answer: "Yes, we offer 100% recyclable and biodegradable options including kraft and soy-based inks." },
      { question: "Can I add a window to my soap box?", answer: "Absolutely! Window cut-outs with clear PET film are one of our most popular options." },
    ],
  },
  {
    slug: "custom-cannabis-boxes",
    name: "Custom Cannabis Boxes",
    icon: Cannabis,
    gradient: "from-green-600 to-lime-500",
    images: [
      "/images/categories/cannabis_1.jpg",
      "/images/categories/cannabis_2.jpg",
      "/images/categories/cannabis_3.jpg",
      "/images/categories/cannabis_4.jpg",
      "/images/categories/cannabis_5.jpg",
    ],
    description: "Compliant cannabis packaging with child-resistant features and branding.",
    longDescription: "Our cannabis packaging meets all regulatory requirements while looking professional. We offer child-resistant options, smell-proof materials, and compliant labeling for dispensaries and cannabis brands.",
    subProducts: [
      { name: "Custom Concentrate Boxes", slug: "concentrate-boxes" },
      { name: "Custom Edible Boxes", slug: "edible-boxes" },
      { name: "Custom Pre-Roll Boxes", slug: "pre-roll-boxes" },
      { name: "Custom Tincture Packaging", slug: "tincture-packaging" },
    ],
    faq: [
      { question: "Are cannabis boxes child-resistant?", answer: "Yes, we offer child-resistant packaging options that meet state and federal compliance requirements." },
    ],
  },
  {
    slug: "custom-chocolate-boxes",
    name: "Custom Chocolate Boxes",
    icon: CandyIcon,
    gradient: "from-amber-700 to-yellow-800",
    images: [
      "/images/categories/chocolate_1.jpg",
      "/images/categories/chocolate_2.jpg",
      "/images/categories/chocolate_3.jpg",
      "/images/categories/chocolate_4.jpg",
      "/images/categories/chocolate_5.jpg",
    ],
    description: "Elegant chocolate packaging for truffles, bars, and luxury confections.",
    longDescription: "Make your chocolates irresistible with our chocolate boxes. From kraft packaging to luxury rigid boxes, we design packaging that preserves freshness and creates an unforgettable unboxing experience for your customers.",
    subProducts: [
      { name: "Custom Kraft Chocolate Boxes", slug: "kraft-chocolate-boxes" },
      { name: "Custom Luxury Chocolate Boxes", slug: "luxury-chocolate-boxes" },
      { name: "Custom Truffle Boxes", slug: "truffle-boxes" },
    ],
    faq: [
      { question: "Are chocolate boxes food-safe?", answer: "Yes, all our chocolate packaging uses FDA-approved food-grade materials." },
      { question: "Can I get custom inserts for individual chocolates?", answer: "Yes, we offer custom die-cut inserts and trays to hold individual chocolates securely." },
    ],
  },
  {
    slug: "custom-apparel-boxes",
    name: "Custom Apparel Boxes",
    icon: Shirt,
    gradient: "from-stone-500 to-stone-700",
    images: [
      "/images/categories/apparel_1.jpg",
      "/images/categories/apparel_2.jpg",
      "/images/categories/apparel_3.jpg",
      "/images/categories/apparel_4.jpg",
    ],
    description: "Stylish apparel packaging for clothing brands, fashion retailers, and e-commerce.",
    longDescription: "Showcase your clothing line with our apparel boxes. From t-shirt boxes to dress shirt packaging, we create elegant solutions that enhance your brand's unboxing experience and protect garments during shipping.",
    subProducts: [
      { name: "Custom Dress Shirt Boxes", slug: "dress-shirt-boxes" },
      { name: "Custom Tie Boxes", slug: "tie-boxes" },
      { name: "Custom T-Shirt Boxes", slug: "t-shirt-boxes" },
    ],
    faq: [
      { question: "What sizes are available for apparel boxes?", answer: "We offer fully customizable sizes to fit any garment type from accessories to outerwear." },
    ],
  },
  {
    slug: "auto-parts",
    name: "Auto Parts Packaging",
    icon: Cog,
    gradient: "from-slate-500 to-slate-700",
    images: [
      "/images/categories/autoparts1.jpg",
      "/images/categories/autoparts2.jpg",
      "/images/categories/autoparts3.jpg",
      "/images/categories/autoparts4.jpg",
    ],
    description: "Durable packaging designed for automotive parts, replacement components, and aftermarket products.",
    longDescription: "Our auto parts packaging is engineered to protect heavy and irregular components during shipping and storage. We offer corrugated inserts, foam cushioning, and reinforced boxes for gears, filters, tools, and accessories.",
    subProducts: [
      { name: "Custom Auto Parts Boxes", slug: "auto-parts-boxes" },
      { name: "Heavy-Duty Shipping Boxes", slug: "heavy-duty-shipping-boxes" },
      { name: "Corrugated Inserts", slug: "corrugated-inserts" },
    ],
    faq: [
      { question: "Can you package fragile automotive components?", answer: "Yes, we provide foam inserts, custom die-cut trays, and reinforced boxes to protect fragile and precision parts." },
      { question: "Do you offer low minimum orders for auto parts packaging?", answer: "Yes, our solutions are available for both small batches and high-volume production runs." },
    ],
  },
  {
    slug: "electronics",
    name: "Electronics Packaging",
    icon: Cpu,
    gradient: "from-cyan-500 to-blue-600",
    images: [
      "/images/categories/electronics1.jpg",
      "/images/categories/electronics2.jpg",
      "/images/categories/electronics3.jpg",
      "/images/categories/electronics4.jpg",
    ],
    description: "Protective packaging solutions for electronics, gadgets, and sensitive components.",
    longDescription: "Our electronics packaging keeps devices safe from shock, moisture, and static during transit. We offer custom-fit trays, anti-static materials, and premium printed boxes designed for consumer electronics and technical products.",
    subProducts: [
      { name: "Anti-Static Boxes", slug: "anti-static-boxes" },
      { name: "Custom Electronics Trays", slug: "custom-electronics-trays" },
      { name: "Shipping Ready Gadget Boxes", slug: "shipping-ready-gadget-boxes" },
    ],
    faq: [
      { question: "Can you use anti-static materials for electronics packaging?", answer: "Yes, we offer anti-static board and cushioning to protect sensitive electronic components." },
      { question: "Can electronics packaging be branded with my logo?", answer: "Absolutely, we print full-color branding, instructions, and product details on every electronics package." },
    ],
  },
  {
    slug: "bakery-boxes",
    name: "Custom Bakery Boxes",
    icon: CupcakeIcon,
    gradient: "from-orange-400 to-amber-500",
    images: ["/images/categories/bakery_1.jpg", "/images/categories/bakery_2.jpg", "/images/categories/bakery_3.jpg", "/images/categories/bakery_4.jpg", "/images/categories/bakery_5.jpg"],
    description: "Custom bakery packaging for cookies, donuts, pastries, and baked goods.",
    longDescription: "Our bakery boxes are designed with food-grade materials to keep your baked goods fresh and presentable. From cookie boxes with windows to sturdy donut packaging, we provide solutions that enhance your bakery brand and delight customers.",
    subProducts: [
      { name: "Custom Cookie Boxes", slug: "cookie-boxes" },
      { name: "Custom Donut Boxes", slug: "donut-boxes" },
      { name: "Custom Kraft Bakery Boxes", slug: "kraft-bakery-boxes" },
      { name: "Custom Window Bakery Boxes", slug: "window-bakery-boxes" },
    ],
    faq: [
      { question: "Are bakery boxes food-safe?", answer: "Yes, all our bakery packaging uses FDA-approved food-grade materials." },
      { question: "Can I get window cut-outs on bakery boxes?", answer: "Absolutely! Window boxes are one of our most popular options for showcasing baked goods." },
      { question: "What is the minimum order quantity?", answer: "Our minimum order quantity starts at just 100 boxes." },
    ],
  },
  {
    slug: "cosmetic-boxes",
    name: "Custom Cosmetic Boxes",
    icon: LipstickIcon,
    gradient: "from-fuchsia-400 to-pink-500",
    images: [
      "/images/categories/cosmetic_1.jpg",
      "/images/categories/cosmetic_2.jpg",
      "/images/categories/cosmetic_3.jpg",
      "/images/categories/cosmetic_4.jpg",
      "/images/categories/cosmetic_5.jpg",
      "/images/categories/cosmetic_6.jpg",
      "/images/categories/cosmetic_7.jpg",
    ],
    description: "Elegant cosmetic packaging that reflects your beauty brand's premium quality.",
    longDescription: "Our cosmetic boxes are crafted to showcase your beauty products with elegance and sophistication. From foundation boxes to perfume packaging, we offer premium finishes that make your products stand out on shelves.",
    subProducts: [
      { name: "Custom Foundation Boxes", slug: "foundation-boxes" },
      { name: "Custom Lip Gloss Boxes", slug: "lip-gloss-boxes" },
      { name: "Custom Perfume Boxes", slug: "perfume-boxes" },
      { name: "Custom Skincare Boxes", slug: "skincare-boxes" },
    ],
    faq: [
      { question: "Can I get spot UV on cosmetic boxes?", answer: "Yes, spot UV coating is one of our most popular finishing options for cosmetic packaging." },
    ],
  },
  {
    slug: "food-packaging",
    name: "Custom Food Boxes",
    icon: FoodDomeIcon,
    gradient: "from-green-500 to-emerald-600",
    images: ["/images/categories/food_1.jpg", "/images/categories/food_2.jpg", "/images/categories/food_3.jpg", "/images/categories/food_4.jpg", "/images/categories/food_5.jpg"],
    description: "FDA-compliant food packaging solutions for restaurants, bakeries, and food brands.",
    longDescription: "Our food-grade packaging boxes are designed to keep your products fresh and safe. All materials are FDA-compliant, ensuring your food packaging meets the highest quality and safety standards.",
    subProducts: [
      { name: "Custom Burger Boxes", slug: "burger-boxes" },
      { name: "Custom Cereal Boxes", slug: "cereal-boxes" },
      { name: "Custom Food Trays", slug: "custom-food-trays" },
      { name: "Custom Frozen Food Boxes", slug: "frozen-food-boxes" },
    ],
    faq: [
      { question: "Are food boxes FDA compliant?", answer: "Yes, all our food packaging uses FDA-approved food-grade materials." },
    ],
  },
  {
    slug: "gift-boxes",
    name: "Custom Gift Boxes",
    icon: Gift,
    gradient: "from-rose-400 to-red-500",
    images: ["/images/categories/gift_1.jpg", "/images/categories/gift_2.jpg", "/images/categories/gift_3.jpg", "/images/categories/gift_4.jpg", "/images/categories/gift_5.jpg", "/images/categories/gift_6.jpg"],
    description: "Beautiful custom gift boxes for every occasion with premium finishing options.",
    longDescription: "Our gift boxes are crafted to make every present unforgettable. Available in rigid, folding, and magnetic closure styles with premium finishes like foil stamping, embossing, and ribbon closures. Perfect for holidays, weddings, corporate gifting, and special occasions.",
    subProducts: [],
    faq: [
      { question: "What styles of gift boxes are available?", answer: "We offer rigid boxes, magnetic closure boxes, two-piece boxes, and folding gift boxes in various shapes and sizes." },
      { question: "Can I add ribbon or bow closures?", answer: "Yes, we offer ribbon, bow, and elastic band closure options for an elegant finishing touch." },
      { question: "What is the minimum order quantity?", answer: "Our minimum order quantity starts at just 100 boxes." },
    ],
  },
  {
    slug: "jewellery-boxes",
    name: "Custom Jewellery Boxes",
    icon: RingIcon,
    gradient: "from-violet-400 to-purple-600",
    images: ["/images/categories/jewellery_1.jpg", "/images/categories/jewellery_2.jpg", "/images/categories/jewellery_3.jpg", "/images/categories/jewellery_4.jpg"],
    description: "Elegant jewellery packaging for rings, necklaces, bracelets, and luxury accessories.",
    longDescription: "Our jewellery boxes are designed to present your pieces with the elegance they deserve. From velvet-lined ring boxes to display-ready necklace packaging, we offer premium materials and finishes that elevate your jewellery brand and create a luxurious unboxing experience.",
    subProducts: [
      { name: "Custom Bracelet Boxes", slug: "bracelet-boxes" },
      { name: "Custom Jewelry Display Boxes", slug: "jewelry-display-boxes" },
      { name: "Custom Jewellery Subscription Boxes", slug: "jewellery-subscription-boxes" },
      { name: "Custom Kraft Jewellery Boxes", slug: "kraft-jewellery-boxes" },
      { name: "Custom Necklace Packaging", slug: "necklace-packaging" },
    ],
    faq: [
      { question: "Do jewellery boxes come with inserts?", answer: "Yes, we offer velvet, foam, and satin inserts tailored to your jewellery pieces." },
      { question: "Can I get custom sizes?", answer: "Absolutely! All our jewellery boxes are fully customizable in size, shape, and finish." },
    ],
  },
  {
    slug: "luxury-packaging",
    name: "Custom Luxury Packaging",
    icon: LuxuryBoxIcon,
    gradient: "from-yellow-500 to-amber-700",
    images: ["/images/categories/luxury_1.jpg", "/images/categories/luxury_2.jpg", "/images/categories/luxury_3.jpg", "/images/categories/luxury_4.jpg", "/images/categories/luxury_5.jpg", "/images/categories/luxury_6.jpg", "/images/categories/luxury_7.jpg"],
    description: "Premium rigid boxes with foil stamping, embossing, and magnetic closures.",
    longDescription: "Our luxury packaging solutions are crafted for brands that demand the finest presentation. Featuring rigid board construction, soft-touch lamination, foil stamping, embossing, and magnetic closures, these boxes create an unforgettable unboxing experience for high-end products.",
    subProducts: [],
    faq: [
      { question: "What makes luxury packaging different?", answer: "Luxury packaging uses thick rigid board, premium finishes like foil stamping and embossing, soft-touch coatings, and magnetic or ribbon closures." },
      { question: "What products are luxury boxes suitable for?", answer: "Luxury boxes are perfect for high-end cosmetics, jewellery, electronics, fashion accessories, and corporate gifting." },
    ],
  },
  {
    slug: "mylar-bags",
    name: "Custom Mylar Bags",
    icon: MylarBagIcon,
    gradient: "from-zinc-500 to-neutral-700",
    images: ["/images/categories/mylar_1.jpg", "/images/categories/mylar_2.jpg", "/images/categories/mylar_3.jpg", "/images/categories/mylar_4.jpg", "/images/categories/mylar_5.jpg"],
    description: "Durable mylar bags with barrier protection for food, cannabis, and specialty products.",
    longDescription: "Our custom mylar bags offer superior barrier protection against moisture, light, and oxygen. Available in stand-up pouches, flat bags, and side gusset styles with resealable zip locks, hang holes, and custom printing for maximum shelf appeal.",
    subProducts: [
      { name: "Custom Hanging Mylar Bags", slug: "hanging-mylar-bags" },
      { name: "Custom Kraft Mylar Bags", slug: "kraft-mylar-bags" },
      { name: "Custom Resealable Zip Lock Bags", slug: "resealable-zip-lock-bags" },
      { name: "Custom Side Gusset Mylar Bags", slug: "side-gusset-mylar-bags" },
      { name: "Custom Stand Up Mylar Bags", slug: "stand-up-mylar-bags" },
      { name: "Custom Window Mylar Bags", slug: "window-mylar-bags" },
    ],
    faq: [
      { question: "Are mylar bags food-safe?", answer: "Yes, all our mylar bags are made from FDA-approved food-grade materials." },
      { question: "Can mylar bags be resealable?", answer: "Yes, we offer zip lock resealable closures on all mylar bag styles." },
    ],
  },
  {
    slug: "oil-packaging",
    name: "Custom Oil Packaging",
    icon: OilBottleIcon,
    gradient: "from-emerald-500 to-teal-600",
    images: ["/images/categories/oil_1.jpg", "/images/categories/oil_2.jpg", "/images/categories/oil_3.jpg", "/images/categories/oil_4.jpg", "/images/categories/oil_5.jpg"],
    description: "Custom oil packaging boxes for essential oils, CBD oils, and beauty oil products.",
    longDescription: "Our oil packaging is designed to securely hold bottles and protect them during shipping. Available in kraft, cardboard, and corrugated materials with custom inserts, these boxes are perfect for essential oils, CBD oils, cooking oils, and beauty oil brands.",
    subProducts: [
      { name: "Custom Kraft Oil Packaging", slug: "kraft-oil-packaging" },
      { name: "Custom Oil Shipping Boxes", slug: "oil-shipping-boxes" },
    ],
    faq: [
      { question: "Can oil packaging hold glass bottles?", answer: "Yes, we offer custom inserts designed to securely hold glass bottles of any size." },
      { question: "Are oil boxes suitable for shipping?", answer: "Absolutely! Our oil shipping boxes are made from sturdy corrugated material for maximum protection." },
    ],
  },
  {
    slug: "pharma-packaging",
    name: "Custom Pharma Packaging",
    icon: Pill,
    gradient: "from-teal-400 to-emerald-500",
    images: ["/images/categories/pharma_1.jpg", "/images/categories/pharma_2.jpg", "/images/categories/pharma_3.jpg", "/images/categories/pharma_4.jpg", "/images/categories/pharma_5.jpg"],
    description: "FDA-compliant pharmaceutical packaging with tamper-evident features.",
    longDescription: "Our pharmaceutical packaging solutions meet strict FDA and industry compliance standards. We offer tamper-evident closures, serialization options, and child-resistant designs for medications and supplements.",
    subProducts: [
      { name: "Custom Supplement Boxes", slug: "supplement-boxes" },
      { name: "Custom Syringe Boxes", slug: "syringe-boxes" },
    ],
    faq: [
      { question: "Is pharma packaging FDA compliant?", answer: "Yes, all our pharmaceutical packaging materials and processes are FDA compliant." },
    ],
  },
  {
    slug: "retail-boxes",
    name: "Custom Retail Boxes",
    icon: ShoppingBag,
    gradient: "from-blue-500 to-indigo-600",
    images: ["/images/categories/retail_1.jpg", "/images/categories/retail_2.jpg", "/images/categories/retail_3.jpg", "/images/categories/retail_4.jpg", "/images/categories/retail_5.jpg", "/images/categories/retail_6.jpg", "/images/categories/retail_7.jpg"],
    description: "Custom retail packaging for products of all types with eye-catching shelf appeal.",
    longDescription: "Our retail boxes are designed to make your products stand out on store shelves. Available in a wide range of styles, sizes, and finishes with full-color printing, window cut-outs, and premium coatings that attract customers and drive sales.",
    subProducts: [],
    faq: [
      { question: "What types of retail boxes are available?", answer: "We offer tuck-end boxes, reverse tuck, sleeve boxes, display boxes, and custom die-cut retail packaging." },
      { question: "Can retail boxes include window cut-outs?", answer: "Yes, window cut-outs with clear PET film are a popular option for retail display." },
    ],
  },
  // {
  //   slug: "custom-vape-boxes",
  //   name: "Custom Vape Boxes",
  //   icon: Cigarette,
  //   gradient: "from-slate-500 to-gray-600",
  //   images: ["/images/categories/vape_1.jpg", "/images/categories/vape_2.jpg", "/images/categories/vape_3.jpg", "/images/categories/vape_4.jpg", "/images/categories/vape_5.jpg"],
  //   description: "Modern vape packaging with inserts and premium finishing options.",
  //   longDescription: "Our vape boxes are designed to securely hold vape pens, cartridges, and e-liquid bottles. Available with foam or cardboard inserts, window cut-outs, and premium finishes.",
  //   subProducts: [
  //     { name: "Custom Disposable Vape Boxes", slug: "disposable-vape-boxes" },
  //     { name: "Custom E-Liquid Boxes", slug: "e-liquid-boxes" },
  //     { name: "Custom Vape Cartridge Boxes", slug: "vape-cartridge-boxes" },
  //   ],
  //   faq: [
  //     { question: "Can vape boxes include inserts?", answer: "Yes, we offer custom die-cut inserts designed to hold vape products securely." },
  //   ],
  // },
];

export const getCategoryBySlug = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);
