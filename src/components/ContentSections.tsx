import { motion } from "framer-motion";
import { ShoppingCart, Upload, CheckCircle, Factory, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  { step: "01", title: "Place Your Order", description: "Choose your box style, size & quantity", icon: ShoppingCart },
  { step: "02", title: "Share Your Design", description: "Upload your artwork or let us design", icon: Upload },
  { step: "03", title: "Approve the Mockup", description: "Review and approve your 3D proof", icon: CheckCircle },
  { step: "04", title: "Start Production", description: "We print & craft your custom boxes", icon: Factory },
  { step: "05", title: "On-Time Delivery", description: "Fast, free shipping to your door", icon: Truck },
];

const ContentSections = () => (
  <section className="py-20 bg-muted overflow-hidden">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
        <h2 className="text-3xl md:text-5xl font-black mt-2 text-foreground">
          Your Packaging in 5 Simple Steps
        </h2>
      </motion.div>

      {/* Desktop */}
      <div className="hidden md:flex items-start justify-between relative">
        {/* Connector line */}
        <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-primary/15" />

        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.step}
              className="flex flex-col items-center text-center w-36 relative z-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
            >
              <motion.div
                className="w-20 h-20 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-4 shadow-lg relative"
                whileHover={{ scale: 1.12, rotate: 5, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Icon className="w-9 h-9" strokeWidth={1.8} />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background text-primary text-xs font-black flex items-center justify-center border-2 border-primary shadow-sm">
                  {s.step}
                </span>
              </motion.div>
              <h3 className="text-sm font-bold text-foreground leading-tight mb-1">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-snug">{s.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-1">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.step}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center relative shadow-md">
                  <Icon className="w-7 h-7" strokeWidth={1.8} />
                  <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-background text-primary text-[10px] font-black flex items-center justify-center border-2 border-primary">
                    {s.step}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 h-10 bg-primary/20 mt-1" />
                )}
              </div>
              <div className="pt-2">
                <h3 className="text-sm font-bold text-foreground">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ContentSections;
