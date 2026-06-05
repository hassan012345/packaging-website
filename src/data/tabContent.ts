export interface TabItem {
  name: string;
  description: string;
}

export interface TabContentData {
  types: TabItem[];
  materials: TabItem[];
  coating: TabItem[];
  printInk: TabItem[];
  shipping: TabItem[];
}

export const defaultTabContent: TabContentData = {
  types: [
    { name: "Straight Tuck Boxes", description: "Both flaps tuck in the same direction for a clean closure." },
    { name: "Reverse Tuck Boxes", description: "Flaps tuck in opposite directions for a secure, professional look." },
    { name: "Lock Bottom Boxes", description: "Auto-lock bottom for extra strength and easy assembly." },
    { name: "Holster Boxes", description: "Sleeve-style packaging that slides over an inner tray." },
    { name: "Tuck Top Boxes", description: "Open-top design with a tuck flap for easy access." },
    { name: "Sleeve Boxes", description: "Two-piece design with an outer sleeve and inner tray." },
    { name: "Two-Piece Boxes", description: "Separate lid and base for a premium unboxing experience." },
    { name: "Folding Cartons", description: "Lightweight, flat-shipping boxes that fold into shape." },
    { name: "Rigid Boxes", description: "Thick, non-folding boxes for a luxury feel." },
    { name: "Seal End Boxes", description: "Both ends are sealed for maximum product security." },
    { name: "Display Boxes", description: "Open-face design for retail shelf visibility." },
    { name: "Mailer Boxes", description: "Self-locking design perfect for e-commerce shipping." },
    { name: "Pillow Boxes", description: "Curved, pillow-shaped packaging for small items and gifts." },
    { name: "Gable Boxes", description: "Handled top design for easy carrying." },
    { name: "Window Boxes", description: "Die-cut windows for product visibility without opening." },
  ],
  materials: [
    { name: "Standard White Cardstock", description: "Smooth, bright white SBS board ideal for vibrant full-color printing." },
    { name: "Corrugated Stock", description: "Fluted material for maximum strength and shipping protection." },
    { name: "Kraft", description: "Natural brown kraft for an organic, eco-friendly aesthetic." },
    { name: "Kraft Brown (Ecofriendly)", description: "100% recycled kraft board, fully biodegradable and sustainable." },
    { name: "Rigid / Press Board Card", description: "Thick chipboard (2mm+) wrapped in specialty papers for premium packaging." },
    { name: "Foil Metallic Cardstock", description: "Pre-laminated metallic finish for a shiny, eye-catching look." },
    { name: "Textured / Linen / Neenah Cardstock", description: "Tactile textured papers for a premium, handcrafted feel." },
    { name: "Colored Stock", description: "Pre-dyed cardstock available in a range of vibrant colors." },
    { name: "Holographic Stock", description: "Rainbow-reflective material that creates a prismatic visual effect." },
  ],
  coating: [
    { name: "Gloss Lamination", description: "High-shine finish that makes colors pop and adds protection." },
    { name: "Matte Lamination", description: "Smooth, non-reflective finish for an elegant, sophisticated look." },
    { name: "Soft Touch Lamination", description: "Velvety, tactile finish that creates a luxurious feel." },
    { name: "Spot UV Coating", description: "Selective glossy highlights on specific areas for contrast and depth." },
    { name: "Aqueous Coating", description: "Water-based protective coating that dries quickly and resists fingerprints." },
    { name: "UV Coating", description: "Ultra-glossy, durable finish applied over the entire surface." },
  ],
  printInk: [
    { name: "CMYK (Full Color)", description: "Standard 4-color process printing for photographic and complex designs." },
    { name: "PMS / Pantone Colors", description: "Spot color matching for precise brand color consistency." },
    { name: "Digital Printing", description: "Cost-effective for short runs with fast turnaround times." },
    { name: "Offset Printing", description: "High-quality, consistent results ideal for large production runs." },
    { name: "Flexographic Printing", description: "Fast, efficient printing method for simple designs and large volumes." },
    { name: "Foil Stamping (Hot/Cold)", description: "Metallic or holographic foil applied for premium accents and logos." },
  ],
  shipping: [
    { name: "Free Shipping (USA)", description: "Complimentary shipping on all orders within the continental United States." },
    { name: "Standard Delivery", description: "7-10 business days production plus shipping after design approval." },
    { name: "Express Options", description: "Rush production available for time-sensitive orders (additional fees apply)." },
    { name: "Worldwide Shipping", description: "We ship to over 100 countries with reliable international carriers." },
    { name: "Bulk Order Logistics", description: "Dedicated logistics support for large orders with palletized shipping." },
  ],
};
