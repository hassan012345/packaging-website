import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import arrowImg from "@/assets/arrow.png";

const heroImages = [
  "/images/categories/candle_1.jpg",
  "/images/categories/soap_1.jpg",
  "/images/categories/cosmetic_1.jpg",
  "/images/categories/bakery_1.jpg",
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden py-20 md:py-32 text-[#FBF7F4] bg-[#FBF7ED]"
      style={{ fontFamily: "'Roboto', Sans-serif" }}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/30 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-[#3F9472]">
              Custom Packaging your customers will love
            </h1>
            <p className="text-lg md:text-xl text-yellow-400 mb-8 max-w-lg">
              Delivered within 7 days with free shipping in the USA.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => scrollTo("quote")}
              >
                Get a Quote
              </Button>
              <div className="flex items-center gap-3">
                <Button
                  size="lg"
                  className="bg-[#3f9472] text-lg px-8 py-6 border border-white/40 text-white hover:bg-[#2d6b53] hover:text-white"
                  onClick={() => scrollTo("quote")}
                >
                  Contact Sales <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="flex flex-col">
                  <span className="ml-6 mt-4 text-sm hidden sm:block text-[#7A7A7A]">
                    Let's talk about your Project
                  </span>
                  <img
                    src={arrowImg}
                    width={91}
                    height={91}
                    className="-mt-1 -mx-4"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Product image collage */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {heroImages.map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-2xl bg-white/10">
                <img
                  src={img}
                  alt="Custom packaging"
                  className="w-full aspect-[4/3] h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
