import {
  Globe,
  DollarSign,
  Cuboid,
  Clock,
  Printer,
  Headphones,
  CreditCard,
  Warehouse,
  Truck,
  Zap,
} from "lucide-react";

const features = [
  // {
  //   icon: Globe,
  //   title: "Global Sourcing",
  //   desc: "Premium materials sourced from trusted suppliers worldwide.",
  // },
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "100% free shipping on every order across the US.",
  },
  {
    icon: DollarSign,
    title: "Price Match Guarantee",
    desc: "We'll match any competitor's price — guaranteed.",
  },
  {
    icon: Cuboid,
    title: "3D Design Services",
    desc: "See your packaging in 3D before production begins.",
  },
  {
    icon: Clock,
    title: "Flexible Lead Times",
    desc: "Rush or standard timelines to fit your schedule.",
  },
  {
    icon: Printer,
    title: "High-Volume Printing",
    desc: "From 50 to 500,000+ boxes per order run.",
  },
  // {
  //   icon: Headphones,
  //   title: "24/7 Support",
  //   desc: "Dedicated support team available around the clock.",
  // },
  // {
  //   icon: CreditCard,
  //   title: "Custom Payment Plans",
  //   desc: "Flexible payment options tailored to your needs.",
  // },
  // {
  //   icon: Warehouse,
  //   title: "Warehousing & Inventory",
  //   desc: "Store your packaging inventory at no extra cost.",
  // },
  // {
  //   icon: Truck,
  //   title: "Free Shipping",
  //   desc: "100% free shipping on every order across the US.",
  // },
  // {
  //   icon: Zap,
  //   title: "7 Days Turnaround",
  //   desc: "Get your boxes in as little as 7 business days.",
  // },
];

const FeaturesRow = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-4xl font-black text-center mb-12 text-foreground">
        Why Brands Choose Us for Premium Custom Packaging
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col items-center text-center p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-3">
              <f.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-sm font-bold mb-1 text-foreground">
              {f.title}
            </h3>
            <p className="text-xs text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesRow;
