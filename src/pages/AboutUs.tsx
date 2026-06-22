import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Truck,
  CreditCard,
  Paintbrush,
  Clock,
  Leaf,
  Settings,
  Package,
  Printer,
} from "lucide-react";

const marqueeImages = [
  "/images/categories/cosmetic_1.jpg",
  "/images/categories/mailer_1.jpg",
  "/images/categories/candle_1.jpg",
  "/images/categories/chocolate_1.jpg",
  "/images/categories/jewellery_1.jpg",
  "/images/categories/gift_1.jpg",
  "/images/categories/soap_1.jpg",
  "/images/categories/perfume_1.jpg",
];

const sections = [
  {
    title: "What We Actually Do (And Why It's Easier Than You Think)",
    text: "Custom packaging used to mean chasing designers, going back and forth with suppliers, waiting weeks, and paying more than you planned.\n\nWe changed that.\n\nAt Custom Packaging, the entire journey, from your first idea to the box landing at your doorstep, is handled by us. Here's what that looks like:\n\n• Design your packaging online, no prior experience needed\n• Receive a free 3D mockup, see exactly what your packaging will look like before a single box is made\n• Get transparent pricing upfront, no hidden fees, no die and plate charges, no surprises\n• Approve and go, fast 7-day turnaround, free shipping included\n\nWhether you're starting with 50 units or scaling to 50,000, we move at your pace.",
    image: "/images/categories/mailer_2.jpg",
    reverse: false,
  },
  {
    title: "Everything You Need, Under One Roof",
    text: "We manufacture and deliver a full range of custom packaging solutions:\n\nCustom Boxes\nFrom mailer boxes and retail packaging to corrugated shipping boxes and display stands, built to protect, designed to impress.\n\nRigid & Luxury Boxes\nWhen your product deserves a premium presentation, our rigid boxes, magnetic closure boxes, and tray & sleeve designs deliver that high-end feel from the very first touch.\n\nFlexible Packaging\nMylar bags, resealable pouches, and food-grade packaging, ideal for products that need moisture protection, shelf appeal, and a clean, professional look.\n\nPopular Styles Include:\nTuck boxes · Gable boxes · Pillow boxes · Window boxes · Magnetic closure boxes · Tray & sleeve boxes",
    image: "/images/categories/luxury_1.jpg",
    reverse: true,
  },
  {
    title: "Custom Means Custom, Every Detail, Your Way",
    text: "No two brands are alike, and neither are their boxes. At Custom Packaging, you choose:\n\nPrinting: Offset · Digital · Flexographic\n\nFinishes: Spot UV · Embossing & Debossing · Foil Stamping · Matte & Gloss Lamination · Soft Touch Finish\n\nAdd-ons: Inserts & Dividers · Bubble Wrap Protection · Custom Stickers & Labels\n\nIf you can imagine it, we can print it, cut it, and ship it.",
    image: "/images/categories/cosmetic_1.jpg",
    reverse: false,
  },
];

const perks = [
  {
    icon: Paintbrush,
    title: "Free Design Support",
    desc: "With unlimited revisions",
  },
  { icon: Package, title: "Free 3D Mockups", desc: "Before production" },
  { icon: Truck, title: "Free Shipping", desc: "On every order" },
  {
    icon: Clock,
    title: "7-Day Fast Turnaround",
    desc: "Rush orders available",
  },
  {
    icon: CreditCard,
    title: "No Die & Plate Charges",
    desc: "Saving you hundreds on setup fees",
  },
  { icon: Settings, title: "Low MOQ", desc: "Start small, scale fast" },
  {
    icon: Printer,
    title: "Dedicated Support",
    desc: "At every step of the process",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    desc: "Recyclable and biodegradable packaging",
  },
];

const AboutUs = () => (
  <>
    {/* Hero Banner */}
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      <img
        src="/images/categories/luxury_1.jpg"
        alt="Custom Packaging"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-4">
          About Custom Packaging
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
          Custom Packaging That Builds Brands
        </p>
        <Link to="/custom-boxes">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-cta text-cta-foreground hover:bg-cta-hover"
          >
            Get Your Free Quote
          </Button>
        </Link>
      </div>
    </section>

    {/* Image Marquee */}
    <div className="overflow-hidden bg-muted py-4">
      <div className="flex animate-marquee gap-6">
        {[...marqueeImages, ...marqueeImages].map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Product showcase"
            className="h-24 md:h-32 w-40 md:w-48 object-cover rounded-lg flex-shrink-0"
            loading="lazy"
          />
        ))}
      </div>
    </div>

    {/* Story Section */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
          We've Been in This Business Long Before "Unboxing" Was a Thing
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg mb-4">
          Three generations. Thirty years. One family obsession with packaging
          done right.
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg mb-4">
          Custom Packaging wasn't built in a boardroom, it grew out of a
          deep-rooted family trade, passed down from one generation to the next,
          each one refining the craft, raising the standard, and staying
          committed to one simple belief: packaging should do more than just
          protect a product. It should sell it.
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg mb-4">
          For decades, we built our name on the shop floor, in the smell of
          fresh ink, the precision of die-cut edges, and the satisfaction of
          handing a finished box to a business owner whose face lit up the
          moment they held it. That's still what drives us.
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Now, we're bringing that same legacy online, and making premium,
          custom packaging accessible to brands across Pakistan and around the
          world.
        </p>
      </div>
    </section>

    {/* Alternating Content Sections */}
    {sections.map((s, i) => (
      <section key={i} className="py-12 bg-background even:bg-muted">
        <div
          className={`container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${s.reverse ? "md:direction-rtl" : ""}`}
        >
          <div className={s.reverse ? "md:order-2" : ""}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {s.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
              {s.text}
            </p>
          </div>
          <div className={s.reverse ? "md:order-1" : ""}>
            <img
              src={s.image}
              alt={s.title}
              className="w-full aspect-[4/3] object-cover rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    ))}

    {/* Quality Section */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
          Quality That Speaks for Itself
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg mb-4">
          Every order that leaves our facility goes through the same standard
          that three generations of our family have stood behind, sharp prints,
          accurate cuts, durable materials, and packaging that actually shows up
          looking the way it should.
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg mb-4">
          We work with high-grade materials and industry-leading printing
          techniques to ensure:
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg mb-4">
          • Colors that stay vibrant and consistent across every run
          <br />
          • Structural integrity that holds through shipping and handling
          <br />• Eco-friendly and recyclable options for brands that care about
          sustainability
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg font-semibold">
          We don't chase shortcuts. We chase quality.
        </p>
      </div>
    </section>

    {/* Built for All Sizes */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
          Built for Businesses of Every Size
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          A custom box used to be something only big brands could afford. We
          believe that's wrong. Low minimum order quantities, wholesale pricing
          options, and free design support mean that whether you're launching
          your very first product or managing a multi-SKU catalog, Custom
          Packaging is built to scale with you, not price you out.
        </p>
      </div>
    </section>

    {/* Perks Grid */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-black text-foreground text-center mb-4">
          Why Businesses Choose Custom Packaging
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-10">
          We're not just a supplier you order from and forget. We're the team
          behind your packaging, the ones who make sure every box that carries
          your name looks like it belongs there.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 shadow-sm border border-border text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">
          Ready to Make Your Packaging Unforgettable?
        </h2>
        <p className="text-primary-foreground/90 text-lg mb-4">
          Your product deserves to be presented well. Let's build packaging that
          makes people stop, look, and remember your brand.
        </p>
        <p className="text-primary-foreground/90 text-lg mb-8">
          Get started today and enjoy free design + free shipping on your first
          order.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="tel:+19048999020">
            <Button size="lg" className="text-lg px-8 py-6 bg-cta text-cta-foreground hover:bg-cta-hover">
              📞 (904) 899-9020
            </Button>
          </a>
          <a href="mailto:sales@custompackagingline.com">
            <Button size="lg" className="text-lg px-8 py-6 bg-cta text-cta-foreground hover:bg-cta-hover">
              📧 sales@custompackagingline.com
            </Button>
          </a>
        </div>
        <Link to="/custom-boxes">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-cta text-cta-foreground hover:bg-cta-hover"
          >
            Get Your Free Quote
          </Button>
        </Link>
      </div>
    </section>
  </>
);

export default AboutUs;
