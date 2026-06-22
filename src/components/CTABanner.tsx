import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTABanner = () => (
  <section className="sticky top-0 z-50 py-16 bg-gradient-to-r from-primary to-accent">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">
          Ready to Elevate Your Brand?
        </h2>
        <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-lg font-semibold">
          Get fast delivery in just 7 days 🕛 and enjoy an exclusive 20% discount on your first order! Don't miss out, order today!
        </p>
        <Button asChild size="lg" variant="secondary" className="text-base font-bold px-10">
          <a href="#quote">Get Your Free Quote →</a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
