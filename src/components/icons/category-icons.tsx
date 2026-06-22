import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number | string };

const defaultSize = 24;

const makeIcon = (
  name: string,
  paths: React.ReactNode
) => {
  const Component = React.forwardRef<SVGSVGElement, IconProps>(
    ({ size = defaultSize, className, ...props }, ref) => (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
      >
        {paths}
      </svg>
    )
  );
  Component.displayName = name;
  return Component;
};

/** Candle with flame — replaces Flame */
export const CandleIcon = makeIcon(
  "CandleIcon",
  <>
    {/* candle body */}
    <rect x="8" y="10" width="8" height="12" rx="1" />
    {/* wick */}
    <line x1="12" y1="10" x2="12" y2="7" />
    {/* flame */}
    <path d="M12 2c-1.5 2-2 3.5-2 4.5a2 2 0 0 0 4 0C14 5.5 13.5 4 12 2z" fill="currentColor" strokeWidth="0" />
  </>
);

/** Soap bar with bubbles — replaces Droplets */
export const SoapIcon = makeIcon(
  "SoapIcon",
  <>
    {/* soap bar */}
    <rect x="3" y="12" width="14" height="8" rx="2" />
    {/* soap line */}
    <line x1="6" y1="16" x2="14" y2="16" />
    {/* bubbles */}
    <circle cx="19" cy="8" r="2" />
    <circle cx="16" cy="5" r="1.5" />
    <circle cx="20" cy="4" r="1" />
  </>
);

/** Food dome / cloche — replaces UtensilsCrossed */
export const FoodDomeIcon = makeIcon(
  "FoodDomeIcon",
  <>
    {/* plate */}
    <line x1="2" y1="16" x2="22" y2="16" />
    {/* dome */}
    <path d="M4 16c0-5.5 3.5-10 8-10s8 4.5 8 10" />
    {/* handle */}
    <line x1="12" y1="6" x2="12" y2="4" />
    <circle cx="12" cy="3.5" r="0.5" fill="currentColor" strokeWidth="0" />
    {/* plate base */}
    <path d="M5 16v1.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V16" />
  </>
);

/** Candy wrapper — replaces Cookie for Chocolate */
export const CandyIcon = makeIcon(
  "CandyIcon",
  <>
    {/* wrapper body */}
    <rect x="7" y="8" width="10" height="8" rx="2" />
    {/* left twist */}
    <path d="M7 10L3 8" />
    <path d="M7 14L3 16" />
    <path d="M3 8v8" />
    {/* right twist */}
    <path d="M17 10l4-2" />
    <path d="M17 14l4 2" />
    <path d="M21 8v8" />
  </>
);

/** Lipstick tube — replaces Sparkles for Cosmetics */
export const LipstickIcon = makeIcon(
  "LipstickIcon",
  <>
    {/* tube body */}
    <rect x="8" y="11" width="8" height="10" rx="1" />
    {/* cap */}
    <rect x="9" y="3" width="6" height="8" rx="1" />
    {/* lipstick tip */}
    <path d="M9 6l3-3 3 3" />
    {/* line separator */}
    <line x1="8" y1="15" x2="16" y2="15" />
  </>
);

/** Cupcake — replaces CakeSlice for Bakery */
export const CupcakeIcon = makeIcon(
  "CupcakeIcon",
  <>
    {/* cupcake base/cup */}
    <path d="M6 14h12l-1.5 8H7.5L6 14z" />
    {/* frosting swirl */}
    <path d="M5 14c0-2 1.5-3 3.5-3s2.5 1.5 3.5 1.5 1.5-1.5 3.5-1.5 3.5 1 3.5 3" />
    {/* cherry */}
    <circle cx="12" cy="9" r="1.5" />
    <line x1="12" y1="7.5" x2="12.5" y2="6" />
  </>
);

/** Crown / gift box with ribbon — replaces Crown for Luxury */
export const LuxuryBoxIcon = makeIcon(
  "LuxuryBoxIcon",
  <>
    {/* box body */}
    <rect x="3" y="10" width="18" height="11" rx="1" />
    {/* lid */}
    <rect x="2" y="7" width="20" height="3" rx="1" />
    {/* ribbon vertical */}
    <line x1="12" y1="7" x2="12" y2="21" />
    {/* bow */}
    <path d="M12 7c-2-3-5-3-5-1s3 1 5 1" />
    <path d="M12 7c2-3 5-3 5-1s-3 1-5 1" />
  </>
);

/** Ring — replaces Gem for Jewellery */
export const RingIcon = makeIcon(
  "RingIcon",
  <>
    {/* ring band */}
    <ellipse cx="12" cy="16" rx="6" ry="4" />
    {/* diamond setting */}
    <path d="M9 12l3-5 3 5" />
    <path d="M9 12h6" />
    {/* diamond facets */}
    <line x1="12" y1="7" x2="10.5" y2="12" />
    <line x1="12" y1="7" x2="13.5" y2="12" />
  </>
);

/** Mailer box (open) — replaces Mail for shapes */
export const MailerBoxIcon = makeIcon(
  "MailerBoxIcon",
  <>
    {/* box body */}
    <path d="M4 10h16v10H4z" />
    {/* open lid flap */}
    <path d="M4 10l3-6h10l3 6" />
    {/* inner flap line */}
    <line x1="7" y1="4" x2="7" y2="10" />
    <line x1="17" y1="4" x2="17" y2="10" />
    {/* bottom fold */}
    <line x1="4" y1="15" x2="20" y2="15" />
  </>
);

/** Stand-up pouch / mylar bag — replaces generic Package */
export const MylarBagIcon = makeIcon(
  "MylarBagIcon",
  <>
    {/* crimped top seal */}
    <path d="M7.5 3h9v3h-9z" />
    <line x1="9.5" y1="3" x2="9.5" y2="6" />
    <line x1="12" y1="3" x2="12" y2="6" />
    <line x1="14.5" y1="3" x2="14.5" y2="6" />
    {/* pouch body (tapered, gusseted) */}
    <path d="M7 6h10l-.6 13a2 2 0 0 1-2 1.9H9.6a2 2 0 0 1-2-1.9L7 6z" />
  </>
);

/** Dropper / oil bottle — replaces FlaskConical */
export const OilBottleIcon = makeIcon(
  "OilBottleIcon",
  <>
    {/* cap */}
    <rect x="9.5" y="2" width="5" height="3" rx="0.5" />
    {/* neck */}
    <rect x="10.5" y="5" width="3" height="2" />
    {/* bottle body */}
    <rect x="8" y="7" width="8" height="14" rx="2" />
    {/* oil drop */}
    <path d="M12 11c-1.2 1.5-1.8 2.4-1.8 3.2a1.8 1.8 0 0 0 3.6 0c0-.8-.6-1.7-1.8-3.2z" fill="currentColor" strokeWidth="0" />
  </>
);

/** Box with window cutout — replaces ScanEye */
export const WindowBoxIcon = makeIcon(
  "WindowBoxIcon",
  <>
    {/* box */}
    <rect x="4" y="3" width="16" height="18" rx="1" />
    {/* window cutout */}
    <rect x="7" y="6" width="10" height="7" rx="1" strokeDasharray="2 1" />
    {/* flap line */}
    <line x1="4" y1="17" x2="20" y2="17" />
  </>
);
