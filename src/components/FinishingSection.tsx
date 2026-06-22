import foilStampingImg from "@/assets/finishing/foil_stamping.jpg";
import debossingImg from "@/assets/finishing/debossing.jpg";
import spotUvImg from "@/assets/finishing/spot_uv.jpg";
import embossingImg from "@/assets/finishing/embossing.jpg";
import holographicImg from "@/assets/finishing/holographic_foiling.jpg";
import softTouchImg from "@/assets/finishing/soft_touch_lamination.jpg";

const finishes = [
  { image: foilStampingImg, title: "Foil Stamping", desc: "Add metallic shine to your logos and text for a luxurious feel." },
  { image: debossingImg, title: "Debossing", desc: "Create an indented impression for a subtle, tactile finish." },
  { image: spotUvImg, title: "Spot UV", desc: "Glossy highlights on specific areas for striking contrast." },
  { image: embossingImg, title: "Embossing", desc: "Raised design elements that add depth and sophistication." },
  { image: holographicImg, title: "Holographic Foiling", desc: "Rainbow-shifting effects that catch every eye." },
  { image: softTouchImg, title: "Soft Touch Lamination", desc: "Velvety smooth coating for a premium hand-feel." },
];

const FinishingSection = () => (
  <section className="py-20 bg-muted">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left column — branding + heading */}
        <div className="lg:w-1/3 bg-primary rounded-2xl p-10 flex flex-col justify-center text-primary-foreground">
          <span className="text-sm font-bold uppercase tracking-widest opacity-80">
            Custom Packaging Line
          </span>
          <h2 className="text-3xl md:text-4xl font-black mt-4 leading-tight">
            Finishing Assortments
          </h2>
          <div className="bg-cta w-16 h-1 mt-4 rounded-full" />
          <p className="mt-4 italic opacity-80 leading-relaxed">
            We offer a variety of finishes to make your packaging look extraordinary.
          </p>
        </div>

        {/* Right column — 2x3 grid of cards */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {finishes.map((f) => (
            <div
              key={f.title}
              className="rounded-xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
            >
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FinishingSection;
