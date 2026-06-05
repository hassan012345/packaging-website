import { useState } from "react";
import BrowseCategoriesGrid from "@/components/templates/BrowseCategoriesGrid";
import {
  Award,
  Star,
  TrendingUp,
  Package,
  Users,
  ThumbsUp,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const galleryItems = [
  {
    src: "/images/categories/candle_1.jpg",
    label: "Candle Boxes",
    category: "Candle",
  },
  {
    src: "/images/categories/cosmetic_1.jpg",
    label: "Cosmetic Packaging",
    category: "Cosmetic",
  },
  {
    src: "/images/categories/mailer_1.jpg",
    label: "Mailer Boxes",
    category: "Mailer",
  },
  {
    src: "/images/categories/food_1.jpg",
    label: "Food Packaging",
    category: "Food",
  },
  {
    src: "/images/categories/soap_1.jpg",
    label: "Soap Boxes",
    category: "Soap",
  },
  {
    src: "/images/categories/lipstick_1.jpg",
    label: "Lipstick Boxes",
    category: "Cosmetic",
  },
  {
    src: "/images/categories/chocolate_1.jpg",
    label: "Chocolate Boxes",
    category: "Food",
  },
  {
    src: "/images/categories/candle_2.jpg",
    label: "Luxury Candle Box",
    category: "Candle",
  },
  {
    src: "/images/categories/mailer_3.jpg",
    label: "Custom Mailers",
    category: "Mailer",
  },
  {
    src: "/images/categories/perfume_1.jpg",
    label: "Perfume Packaging",
    category: "Cosmetic",
  },
  {
    src: "/images/categories/bakery_1.jpg",
    label: "Bakery Boxes",
    category: "Food",
  },
  {
    src: "/images/categories/cosmetic_3.jpg",
    label: "Beauty Box",
    category: "Cosmetic",
  },
];

const filterTabs = ["All", "Candle", "Cosmetic", "Food", "Mailer", "Soap"];

const topCategories = [
  {
    name: "Candle Boxes",
    orders: "2,500+",
    img: "/images/categories/candle_3.jpg",
    rating: 4.9,
    popularity: 92,
  },
  {
    name: "Soap Boxes",
    orders: "1,800+",
    img: "/images/categories/soap_2.jpg",
    rating: 4.8,
    popularity: 78,
  },
  {
    name: "Food Packaging",
    orders: "3,200+",
    img: "/images/categories/food_2.jpg",
    rating: 4.9,
    popularity: 96,
  },
  {
    name: "Cosmetic Boxes",
    orders: "2,100+",
    img: "/images/categories/cosmetic_2.jpg",
    rating: 4.7,
    popularity: 85,
  },
  {
    name: "Mailer Boxes",
    orders: "4,500+",
    img: "/images/categories/mailer_2.jpg",
    rating: 4.9,
    popularity: 98,
  },
  {
    name: "Chocolate Boxes",
    orders: "1,600+",
    img: "/images/categories/chocolate_2.jpg",
    rating: 4.8,
    popularity: 74,
  },
];

const testimonials = [
  {
    name: "Jessica R.",
    company: "Luna Candle Co.",
    quote:
      "The candle boxes exceeded our expectations. Beautiful print quality and sturdy construction.",
    rating: 5,
    img: "/images/categories/candle_4.jpg",
  },
  {
    name: "Mark T.",
    company: "FreshBite Foods",
    quote:
      "Our food packaging looks amazing and meets all FDA requirements. Highly recommend!",
    rating: 5,
    img: "/images/categories/food_3.jpg",
  },
  {
    name: "Priya S.",
    company: "Glow Cosmetics",
    quote:
      "Stunning cosmetic boxes that perfectly represent our luxury brand. Fast turnaround too.",
    rating: 5,
    img: "/images/categories/cosmetic_4.jpg",
  },
  {
    name: "David L.",
    company: "BrewBox Co.",
    quote:
      "The mailer boxes are solid and look great. Our customers love the unboxing experience.",
    rating: 4,
    img: "/images/categories/mailer_4.jpg",
  },
];

const experts = [
  {
    name: "Sarah Johnson",
    role: "Packaging Designer",
    exp: "8+ years",
    initials: "SJ",
    gradient: "from-primary to-emerald-400",
  },
  {
    name: "Michael Chen",
    role: "Production Manager",
    exp: "12+ years",
    initials: "MC",
    gradient: "from-cta to-amber-300",
  },
  {
    name: "Emily Davis",
    role: "Brand Consultant",
    exp: "6+ years",
    initials: "ED",
    gradient: "from-teal-400 to-primary",
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredGallery =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-secondary/90 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Our Portfolio</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Thousands of brands trust us for their custom packaging needs.
            Explore our work, top-rated categories, and meet our team.
          </p>
        </div>
      </section>

      {/* Gallery with filters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3 text-foreground">
            Our Work
          </h2>
          <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
            Browse our recent custom packaging projects across categories
          </p>

          {/* Filter bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === tab
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Masonry-ish grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filteredGallery.map((item, i) => (
              <div
                key={item.src + i}
                className="break-inside-avoid group relative rounded-xl overflow-hidden border border-border cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold text-sm">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Rated Categories with images */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
            Top Rated Categories
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCategories.map((cat) => (
              <div
                key={cat.name}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <Award className="h-4 w-4 text-cta" /> {cat.name}
                    </h3>
                    <div className="flex items-center gap-1 text-cta text-sm">
                      <Star className="h-3.5 w-3.5 fill-current" /> {cat.rating}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {cat.orders} orders completed
                  </p>
                  <div className="flex items-center gap-3">
                    <Progress value={cat.popularity} className="h-2 flex-1" />
                    <span className="text-xs text-muted-foreground">
                      {cat.popularity}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrowseCategoriesGrid />

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
            What Our Clients Say
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.company}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 text-cta fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic mb-3">
                    "{t.quote}"
                  </p>
                  <p className="font-semibold text-foreground text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-primary">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
            Meet Your Custom Packaging Experts
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {experts.map((e) => (
              <div
                key={e.name}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all"
              >
                <div
                  className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${e.gradient} text-white text-xl font-bold shadow-lg`}
                >
                  {e.initials}
                </div>
                <h3 className="font-semibold text-foreground">{e.name}</h3>
                <p className="text-sm text-primary">{e.role}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {e.exp} experience
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
