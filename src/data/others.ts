import {
  CreditCard, Sticker, FileText, DoorOpen, Tag, Droplets,
  AppWindow, Star, Zap, Wine, FolderOpen, Settings
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface OtherItem {
  name: string;
  slug: string;
  icon: LucideIcon;
  description?: string;
  longDescription?: string;
  images?: string[];
  faq?: { question: string; answer: string }[];
}

export const othersItems: OtherItem[] = [
  {
    name: "Business Cards",
    slug: "/others/business-cards",
    icon: CreditCard,
    description: "Premium custom business cards with full-color printing, multiple finishes, and fast turnaround.",
    longDescription: "Make a lasting first impression with our custom business cards. Printed on premium cardstock with options for matte, gloss, soft-touch lamination, foil stamping, and spot UV finishes. Available in standard and custom sizes including rounded corners and die-cut shapes. Perfect for professionals, small businesses, and events.",
    images: [
      "/images/others/business-cards/1.jpg",
      "/images/others/business-cards/2.jpg",
      "/images/others/business-cards/3.jpg",
      "/images/others/business-cards/4.jpg",
    ],
    faq: [
      { question: "What cardstock options are available?", answer: "We offer 14pt, 16pt, and 18pt cardstock with matte, gloss, or soft-touch lamination finishes." },
      { question: "Can I get custom sizes?", answer: "Yes, we offer standard 3.5×2\" cards and fully custom sizes with die-cut and rounded corner options." },
      { question: "What is the minimum order quantity?", answer: "Our minimum order starts at just 100 business cards, making it accessible for individuals and startups." },
      { question: "Do you offer foil stamping on business cards?", answer: "Yes, we offer gold, silver, and holographic foil stamping as well as spot UV coating for a premium look." },
    ],
  },
  {
    name: "Vinyl Stickers",
    slug: "/others/vinyl-stickers",
    icon: Sticker,
    description: "Durable custom vinyl stickers with vibrant full-color printing, waterproof coating, and any shape or size.",
    longDescription: "Our custom vinyl stickers are built to last. Printed on premium vinyl with UV-resistant inks and a waterproof laminate, they stay vivid indoors or outdoors for years. Available in any shape including die-cut, kiss-cut, circle, and square — perfect for branding, product labeling, laptops, water bottles, and promotional giveaways.",
    images: [
      "/images/others/vinyl-stickers/1.jpg",
      "/images/others/vinyl-stickers/2.jpg",
      "/images/others/vinyl-stickers/3.jpg",
      "/images/others/vinyl-stickers/4.jpg",
    ],
    faq: [
      { question: "Are vinyl stickers waterproof?", answer: "Yes, our vinyl stickers feature a waterproof laminate coating that protects against rain, moisture, and UV fading." },
      { question: "What shapes are available?", answer: "We offer die-cut, kiss-cut, circle, square, rectangle, and fully custom shapes to match your design." },
      { question: "What is the minimum order quantity?", answer: "Our minimum order starts at just 50 stickers, making them ideal for small businesses and individuals." },
      { question: "How long do vinyl stickers last outdoors?", answer: "Our outdoor-grade vinyl stickers are rated for 3–5 years of outdoor use without fading or peeling." },
    ],
  },
  {
    name: "Printed Flyers",
    slug: "/others/printed-flyers",
    icon: FileText,
    description: "High-impact custom printed flyers with vibrant full-color printing for promotions, events, and marketing campaigns.",
    longDescription: "Our custom printed flyers are designed to grab attention and deliver your message effectively. Printed on premium paper stock with options for matte, gloss, or silk lamination, they're perfect for retail promotions, events, menus, and direct mail campaigns. Available in a wide range of sizes from A6 to A3 with single or double-sided printing.",
    images: [
      "/images/others/printed-flyers/1.jpg",
      "/images/others/printed-flyers/2.jpg",
      "/images/others/printed-flyers/3.jpg",
    ],
    faq: [
      { question: "What paper stock options are available?", answer: "We offer 100lb, 120lb, and 150lb gloss or matte coated paper stock with optional lamination finishes." },
      { question: "What sizes do you print flyers in?", answer: "We print standard sizes including A6, A5, A4, and A3, as well as custom dimensions to suit your needs." },
      { question: "Can flyers be printed double-sided?", answer: "Yes, we offer single-sided and full double-sided printing at no extra design charge." },
      { question: "What is the minimum order quantity?", answer: "Our minimum order starts at just 100 flyers, ideal for small events and test campaigns." },
    ],
  },
  {
    name: "Door Hangers",
    slug: "/others/door-hangers",
    icon: DoorOpen,
    description: "Custom printed door hangers for hotels, real estate, restaurants, and promotional marketing.",
    longDescription: "Our custom door hangers are an effective and direct way to reach your audience. Printed on heavy 14pt cardstock with a pre-cut hanger hole, they're ideal for hotel room service, real estate open houses, local business promotions, and event marketing. Available in standard and custom sizes with full-color printing on matte or gloss stock.",
    images: [
      "/images/others/door-hangers/1.jpg",
      "/images/others/door-hangers/2.jpg",
      "/images/others/door-hangers/3.jpg",
      "/images/others/door-hangers/4.jpg",
    ],
    faq: [
      { question: "What size are standard door hangers?", answer: "Our standard door hanger size is 3.5×8.5\" with a pre-cut hanger hole, though fully custom sizes are available." },
      { question: "What cardstock is used?", answer: "We print on heavy 14pt cardstock with matte or gloss coating for a durable, professional finish." },
      { question: "Can door hangers be printed double-sided?", answer: "Yes, full double-sided printing is available so you can maximise your messaging on both sides." },
      { question: "What is the minimum order quantity?", answer: "Our minimum order starts at just 100 door hangers, suitable for small local campaigns." },
    ],
  },
  {
    name: "Labels",
    slug: "/others/labels",
    icon: Tag,
    description: "Custom printed labels in any shape and size for products, packaging, shipping, and branding.",
    longDescription: "Our custom labels are printed on premium paper or vinyl stock with options for matte, gloss, or waterproof finishes. Available as sheets or rolls with any die-cut shape — perfect for product labelling, food and beverage packaging, cosmetics, shipping, and promotional use. Full-color printing ensures your design looks sharp and professional every time.",
    images: [
      "/images/others/lables/1.jpg",
      "/images/others/lables/2.jpg",
      "/images/others/lables/3.jpg",
      "/images/others/lables/4.jpg",
    ],
    faq: [
      { question: "What materials are labels printed on?", answer: "We print on paper, vinyl, polyester, and kraft stock with matte, gloss, or waterproof lamination options." },
      { question: "Can I get labels on a roll?", answer: "Yes, we offer labels on rolls or sheets depending on your application and dispensing needs." },
      { question: "Are waterproof labels available?", answer: "Yes, our vinyl labels include a waterproof laminate making them suitable for bottles, jars, and outdoor use." },
      { question: "What is the minimum order quantity?", answer: "Our minimum order starts at just 100 labels, ideal for small businesses and product launches." },
    ],
  },
  { name: "Bumper Stickers", slug: "/custom-boxes", icon: Sticker },
  {
    name: "Waterproof Stickers",
    slug: "/others/waterproof-stickers",
    icon: Droplets,
    description: "Durable waterproof stickers built to withstand water, UV exposure, and harsh outdoor conditions.",
    longDescription: "Our custom waterproof stickers are printed on premium vinyl with UV-resistant inks and a waterproof laminate that keeps them looking vivid in any environment. Ideal for water bottles, outdoor equipment, product packaging, and any application where durability matters. Available in any shape with full-color die-cut printing.",
    images: [
      "/images/others/water-proof-stickers/1.jpg",
      "/images/others/water-proof-stickers/2.jpg",
    ],
    faq: [
      { question: "How waterproof are these stickers?", answer: "Our stickers use a fully sealed vinyl laminate that is 100% waterproof and resistant to submersion, rain, and condensation." },
      { question: "Can they withstand outdoor UV exposure?", answer: "Yes, UV-resistant inks and lamination prevent fading for up to 5 years of outdoor use." },
      { question: "What shapes and sizes are available?", answer: "We offer die-cut, kiss-cut, circle, square, and fully custom shapes in any size." },
      { question: "What is the minimum order quantity?", answer: "Our minimum order starts at just 50 stickers, perfect for small brands and personal use." },
    ],
  },
  { name: "Window Stickers", slug: "/custom-boxes", icon: AppWindow },
  {
    name: "Foil Stickers",
    slug: "/others/foil-stickers",
    icon: Star,
    description: "Premium custom foil stickers with gold, silver, and holographic finishes for a luxurious, eye-catching look.",
    longDescription: "Our custom foil stickers combine stunning metallic finishes with precision die-cutting to create stickers that truly stand out. Available in gold, silver, rose gold, and holographic foil with options for matte or gloss lamination. Perfect for product labels, packaging seals, branding, and premium promotional materials.",
    images: [
      "/images/others/foil-sticker/1.jpg",
      "/images/others/foil-sticker/2.jpg",
      "/images/others/foil-sticker/3.jpg",
      "/images/others/foil-sticker/4.jpg",
    ],
    faq: [
      { question: "What foil colours are available?", answer: "We offer gold, silver, rose gold, copper, and holographic foil finishes to suit any brand aesthetic." },
      { question: "Can foil stickers be die-cut to custom shapes?", answer: "Yes, we offer precision die-cutting to any shape, including logos, icons, and custom outlines." },
      { question: "Are foil stickers waterproof?", answer: "Yes, our foil stickers include a protective laminate layer making them resistant to water and scratching." },
      { question: "What is the minimum order quantity?", answer: "Our minimum order starts at just 50 foil stickers, making them accessible for small brands and individuals." },
    ],
  },
  { name: "Static Clings", slug: "/custom-boxes", icon: Zap },
  { name: "Bottle Neckers", slug: "/custom-boxes", icon: Wine },
  {
    name: "Folders",
    slug: "/others/folders",
    icon: FolderOpen,
    description: "Custom printed presentation folders for proposals, meetings, marketing kits, and corporate branding.",
    longDescription: "Our custom presentation folders make a professional first impression. Printed on heavy cardstock with options for matte, gloss, or soft-touch lamination, they feature die-cut pockets and business card slots to keep your documents organised and on-brand. Perfect for sales teams, corporate events, conferences, and client proposals.",
    images: [
      "/images/others/folders/1.jpg",
      "/images/others/folders/2.jpg",
      "/images/others/folders/3.jpg",
      "/images/others/folders/4.jpg",
    ],
    faq: [
      { question: "What sizes are available for presentation folders?", answer: "We offer standard letter-size (9×12\") and A4 folders as well as custom sizes to fit your documents." },
      { question: "Do folders include a business card slot?", answer: "Yes, our folders can include die-cut business card slits and multiple pocket configurations." },
      { question: "What finishing options are available?", answer: "We offer matte, gloss, and soft-touch lamination as well as foil stamping, embossing, and spot UV for a premium look." },
      { question: "What is the minimum order quantity?", answer: "Our minimum order starts at just 50 folders, suitable for small teams and events." },
    ],
  },
  { name: "Custom", slug: "/custom-boxes", icon: Settings },
];
