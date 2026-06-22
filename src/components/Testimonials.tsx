import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Jessica M.", role: "Candle Brand Owner", rating: 5, text: "The quality of the custom boxes was incredible. Our customers love the unboxing experience and it has elevated our brand significantly." },
  { name: "David R.", role: "E-commerce Entrepreneur", rating: 5, text: "Fast turnaround, amazing print quality, and the free design service saved us so much time and money. Highly recommended!" },
  { name: "Amanda K.", role: "Cosmetics Startup Founder", rating: 5, text: "We switched to Custom Packaging Line and haven't looked back. The attention to detail and customer service is unmatched." },
  { name: "Marcus T.", role: "Food Brand Manager", rating: 5, text: "From our first order of 100 boxes to now ordering thousands, the consistency and quality have always been top-notch." },
  { name: "Sarah L.", role: "Bakery Owner", rating: 5, text: "Beautiful packaging that keeps our pastries fresh and looking amazing. The window boxes are a hit with our customers!" },
  { name: "Tom W.", role: "CBD Brand Founder", rating: 5, text: "Compliant, professional, and beautifully designed cannabis packaging. They understood our industry needs perfectly." },
];

const Testimonials = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Reviews</span>
        <h2 className="text-3xl md:text-5xl font-black mt-2 text-foreground">
          Trusted by Thousands of Brands
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          See what our customers have to say about their experience with us.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-card border border-border rounded-2xl p-6 relative hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Quote className="h-8 w-8 text-primary/15 absolute top-5 right-5" />

            {/* Stars */}
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.rating }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-5">"{t.text}"</p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
