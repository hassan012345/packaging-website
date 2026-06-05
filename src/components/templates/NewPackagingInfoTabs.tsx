import { useState } from "react";

const tabs = [
  {
    label: "Coating and Laminations",
    items: [
      {
        title: "Gloss Coating",
        description: "Shiny and vibrant finish that makes colors pop.",
        image: "/images/customization/glass-coating.webp",
      },
      {
        title: "Matte Coating",
        description: "Smooth, non-glossy look for an elegant feel.",
        image: "/images/customization/matte coating.webp",
      },
      {
        title: "Soft-Touch Coating",
        description: "Velvety texture that feels premium and smooth.",
        image: "/images/customization/Soft-Touch Coating.webp",
      },
      {
        title: "UV Coating (Spot or Full)",
        description:
          "Glossy layer that highlights specific areas or the whole box.",
        image: "/images/customization/UV Coating (Spot or Full).webp",
      },
      {
        title: "Aqueous Coating",
        description: "Eco-friendly, water-based protection with a soft sheen.",
        image: "/images/customization/Aqueous Coating.webp",
      },
      {
        title: "Varnish Coating",
        description:
          "Adds a protective layer with mild shine or matte effects.",
        image: "/images/customization/Varnish Coating.webp",
      },
      {
        title: "Gloss Lamination",
        description: "Plastic film for extra shine and durability.",
        image: "/images/customization/Gloss Lamination.webp",
      },
      {
        title: "Matte Lamination",
        description: "Plastic film with a flat, smooth appearance.",
        image: "/images/customization/Matte Lamination.webp",
      },
    ],
  },
  {
    label: "Printing Options",
    items: [
      {
        title: "Offset Printing",
        description: "High-quality, detailed printing for large runs.",
        image: "/images/customization/Offset Printing.webp",
      },
      {
        title: "Digital Printing",
        description: "Cost-effective and fast option for short runs.",
        image: "/images/customization/Digital Printing.webp",
      },
      {
        title: "Flexographic Printing",
        description: "Ideal for bulk packaging, great for simple designs.",
        image: "/images/customization/Flexographic Printing.webp",
      },
      {
        title: "Screen Printing",
        description: "Bold, vibrant prints on various surfaces.",
        image: "/images/customization/Screen Printing.webp",
      },
      {
        title: "Gravure Printing",
        description: "Premium quality for high-volume, consistent prints.",
        image: "/images/customization/Gravure Printing.webp",
      },
      {
        title: "UV Printing",
        description: "Instant-dry prints with vivid, durable colors.",
        image: "/images/customization/UV Printing.webp",
      },
      {
        title: "Pantone (PMS) Printing",
        description: "Exact color matching for brand consistency.",
        image: "/images/customization/Pantone (PMS) Printing.webp",
      },
      {
        title: "CMYK Printing",
        description: "Full-color printing using four ink process.",
        image: "/images/customization/CMYK Printing.webp",
      },
    ],
  },
  {
    label: "Premium Finishes",
    items: [
      {
        title: "Embossing",
        description: "Raises parts of the design for a 3D textured effect.",
        image: "/images/customization/Embossing.webp",
      },
      {
        title: "Debossing",
        description: "Presses the design into the surface for a recessed look.",
        image: "/images/customization/Debossing.webp",
      },
      {
        title: "Foil Stamping",
        description:
          "Adds metallic or colored foil for a shiny, luxurious finish.",
        image: "/images/customization/Foil Stamping.webp",
      },
      {
        title: "Raised Ink Printing",
        description: "Creates a slightly lifted texture to printed elements.",
        image: "/images/customization/Raised Ink Printing.webp",
      },
      {
        title: "Die Cutting",
        description: "Creates custom shapes, windows, or patterns on boxes.",
        image: "/images/customization/Die Cutting.webp",
      },
      {
        title: "Spot UV",
        description: "Applies glossy UV coating to highlight specific areas.",
        image: "/images/customization/Spot UV.webp",
      },
      {
        title: "Window Patching",
        description: "Adds a clear window to display the product inside.",
        image: "/images/customization/Window Patching.webp",
      },
      {
        title: "Perforation",
        description: "Makes easy-tear or fold lines on packaging.",
        image: "/images/customization/Perforation.webp",
      },
      {
        title: "Edge Painting",
        description: "Colors the edges of boxes for a unique premium look.",
        image: "/images/customization/Edge Painting.webp",
      },
      {
        title: "Holographic Finish",
        description:
          "Adds a rainbow-like, reflective effect for an eye-catching design.",
        image: "/images/customization/Holographic Finish.webp",
      },
    ],
  },
  {
    label: "Material",
    items: [
      {
        title: "Cardboard",
        description: "Lightweight and versatile material for retail packaging.",
        image: "/images/customization/Cardboard.png",
      },
      {
        title: "Corrugated Board",
        description: "Durable, multi-layer material used for shipping boxes.",
        image: "/images/customization/Corrugated Board.webp",
      },
      {
        title: "Kraft Paper",
        description: "Eco-friendly brown paper with a natural, organic look.",
        image: "/images/customization/Kraft Paper.webp",
      },
      {
        title: "Rigid Board",
        description:
          "Thick and sturdy material ideal for luxury or gift boxes.",
        image: "/images/customization/Rigid Board.webp",
      },
      {
        title: "Paperboard",
        description:
          "Smooth and printable material used for most retail boxes.",
        image: "/images/customization/Paperboard.webp",
      },
      {
        title: "Recycled Material",
        description:
          "Made from reused paper fibers, sustainable and cost-effective.",
        image: "/images/customization/Recycled Material.webp",
      },
      {
        title: "Plastic (PET / PVC)",
        description:
          "Transparent or colored material for window or display boxes.",
        image: "/images/customization/Plastic.webp",
      },
      {
        title: "Metallic Paper",
        description: "Shiny, reflective material for premium packaging.",
        image: "/images/customization/Metallic Paper.webp",
      },
      {
        title: "Textured Paper",
        description: "Special surface finish that adds a unique tactile feel.",
        image: "/images/customization/Textured Paper.webp",
      },
      {
        title: "Eco-Friendly / Biodegradable Material",
        description: "Environmentally safe and compostable option.",
        image: "/images/customization/Eco-Friendly-Biodegradable Material.webp",
      },
      {
        title: "White Card (C1S / C2S)",
        description:
          "Smooth, high-quality white surface coated on one or both sides.",
        image: "/images/customization/White Card.webp",
      },
      {
        title: "Kraft Paperboard",
        description: "Eco-friendly brown board with a natural, rustic look.",
        image: "/images/customization/Kraft Paperboard.webp",
      },
      {
        title: "Rigid Board (Chipboard)",
        description: "Thick, durable board used for luxury or gift boxes.",
        image: "/images/customization/Rigid Board (Chipboard).webp",
      },
      {
        title: "Art Paper",
        description: "Smooth and glossy paper suitable for premium printing.",
        image: "/images/customization/Art Paper.webp",
      },
      {
        title: "Duplex Board",
        description: "White front and grey back, affordable and sturdy option.",
        image: "/images/customization/Duplex Board.webp",
      },
      {
        title: "SBS (Solid Bleached Sulfate)",
        description:
          "Bright white, high-end paperboard with great print quality.",
        image: "/images/customization/SBS (Solid Bleached Sulfate).webp",
      },
      {
        title: "FBB (Folding Box Board)",
        description:
          "Lightweight yet strong board perfect for retail packaging.",
        image: "/images/customization/FBB (Folding Box Board).webp",
      },
      {
        title: "Recycled Paperboard",
        description: "Made from post-consumer waste, an eco-conscious choice.",
        image: "/images/customization/Recycled Paperboard.webp",
      },
      {
        title: "Metallic Paperboard",
        description: "Shiny or reflective surface for a premium appearance.",
        image: "/images/customization/Metallic Paperboard.webp",
      },
    ],
  },
  {
    label: "Corrugated",
    items: [
      {
        title: "Single Wall (3-Ply)",
        description: "Most common choice for shipping and retail boxes.",
        image: "/images/customization/Single Wall (3-Ply).webp",
      },
      {
        title: "Double Wall (5-Ply)",
        description: "Stronger option for heavy or fragile items.",
        image: "/images/customization/Double Wall (5-Ply).webp",
      },
      {
        title: "C-Flute",
        description:
          "Standard flute with good strength and print quality balance.",
        image: "/images/customization/C-Flute.webp",
      },
      {
        title: "E-Flute",
        description:
          "Thin and smooth surface ideal for custom printed retail boxes.",
        image: "/images/customization/E-Flute.png",
      },
      {
        title: "B-Flute",
        description: "Compact flute great for die-cut and smaller packaging.",
        image: "/images/customization/B-Flute.webp",
      },
    ],
  },
  {
    label: "Ink Options",
    items: [
      {
        title: "CMYK Ink",
        description: "Standard full-color printing for vibrant designs.",
        image: "/images/customization/CMYK Ink.webp",
      },
      {
        title: "Pantone (PMS) Ink",
        description: "Ensures exact and consistent brand colors.",
        image: "/images/customization/Pantone (PMS) Ink.webp",
      },
      {
        title: "UV Ink",
        description: "Produces sharp, glossy, and durable prints.",
        image: "/images/customization/UV Ink.webp",
      },
      {
        title: "Soy-Based Ink",
        description: "Eco-friendly option with rich, vivid colors.",
        image: "/images/customization/Soy-Based Ink.webp",
      },
      {
        title: "Water-Based Ink",
        description: "Safe, sustainable, and great for eco packaging.",
        image: "/images/customization/Water-Based Ink.webp",
      },
    ],
  },
];

interface NewPackagingInfoTabsProps {
  title?: string;
}

const NewPackagingInfoTabs = ({
  title = "Customization Options For Cardboard Boxes",
}: NewPackagingInfoTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1a9a6c] mb-8">
          {title}
        </h2>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                activeTab === index
                  ? "bg-[#1a9a6c] text-white border-[#1a9a6c]"
                  : "bg-white text-gray-500 border-gray-300 hover:border-[#1a9a6c] hover:text-[#1a9a6c]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        {tabs[activeTab].items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tabs[activeTab].items.map((item) => (
              <div
                key={item.title}
                className="text-center border-2 border-gray-200 rounded-2xl p-3 pb-4 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-gray-300 transition-all duration-300 ease-in-out"
              >
                <div className="rounded-xl overflow-hidden mb-3 aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-sm text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed px-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-sm">Coming soon...</p>
        )}
      </div>
    </section>
  );
};

export default NewPackagingInfoTabs;
