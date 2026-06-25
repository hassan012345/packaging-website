import { Phone, Mail, MapPin, Truck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { categories } from "@/data/categories";
import {
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  LinkedInIcon,
  PinterestIcon,
} from "@/components/icons/social-icons";
import uspsLogo from "@/assets/logos/usps.svg";
import dhlLogo from "@/assets/logos/dhl.svg";
import fedexLogo from "@/assets/logos/fedex.svg";

const VisaIcon = () => (
  <svg viewBox="0 0 48 32" className="h-7 w-12">
    <rect width="48" height="32" rx="4" fill="#1A1F71" />
    <path
      d="M19.5 21h-3l1.9-11.5h3L19.5 21zm8.2-11.2c-.6-.2-1.5-.5-2.7-.5-3 0-5.1 1.6-5.1 3.8 0 1.7 1.5 2.6 2.6 3.1 1.1.6 1.5 1 1.5 1.5 0 .8-1 1.2-1.8 1.2-1.2 0-1.9-.2-2.9-.6l-.4-.2-.4 2.6c.7.3 2 .6 3.4.6 3.2 0 5.2-1.6 5.2-3.9 0-1.3-.8-2.3-2.5-3.1-1-.5-1.7-.9-1.7-1.4 0-.5.5-1 1.7-1 1 0 1.7.2 2.2.4l.3.1.6-2.6zm7.8-.3h-2.3c-.7 0-1.3.2-1.6 1L27.5 21h3.2l.6-1.7h3.9l.4 1.7H38L35.5 9.5zm-3 7.4l1.2-3.3.4-1.1.2 1 .7 3.4h-2.5zM16.3 9.5L13.4 17l-.3-1.6c-.6-1.9-2.3-4-4.3-5l2.7 10.6h3.2l4.8-11.5h-3.2z"
      fill="white"
    />
    <path
      d="M10.5 9.5H5.6l-.1.3c3.8 1 6.3 3.3 7.3 6.1l-1-5.3c-.2-.8-.7-1-1.3-1.1z"
      fill="#F9A533"
    />
  </svg>
);

const MastercardIcon = () => (
  <svg viewBox="0 0 48 32" className="h-7 w-12">
    <rect width="48" height="32" rx="4" fill="#252525" />
    <circle cx="19" cy="16" r="8" fill="#EB001B" />
    <circle cx="29" cy="16" r="8" fill="#F79E1B" />
    <path d="M24 10.3a8 8 0 0 1 0 11.4 8 8 0 0 1 0-11.4z" fill="#FF5F00" />
  </svg>
);

const PaypalIcon = () => (
  <svg viewBox="0 0 48 32" className="h-7 w-12">
    <rect
      width="48"
      height="32"
      rx="4"
      fill="#fff"
      stroke="#e5e5e5"
      strokeWidth="1"
    />
    <path
      d="M19.5 8h5c2.5 0 4.3 1.8 3.8 4.5-.5 3.2-2.8 5-5.5 5h-1.5c-.4 0-.7.3-.8.7L19.8 23h-3.3l3-15z"
      fill="#003087"
    />
    <path
      d="M22 8h5c2.5 0 4.3 1.8 3.8 4.5-.5 3.2-2.8 5-5.5 5h-1.5c-.4 0-.7.3-.8.7L22.3 23H19l3-15z"
      fill="#3086C8"
    />
    <path
      d="M24.5 8h5c2.5 0 4.3 1.8 3.8 4.5-.5 3.2-2.8 5-5.5 5H26c-.4 0-.7.3-.8.7L24.5 23h-3l3-15z"
      fill="#009CDE"
    />
  </svg>
);

const DiscoverIcon = () => (
  <svg viewBox="0 0 48 32" className="h-7 w-12">
    <rect
      width="48"
      height="32"
      rx="4"
      fill="#fff"
      stroke="#e5e5e5"
      strokeWidth="1"
    />
    <circle cx="28" cy="16" r="7" fill="#F76F20" />
    <text
      x="8"
      y="18"
      fontSize="7"
      fontWeight="bold"
      fill="#231F20"
      fontFamily="Arial"
    >
      DISCOVER
    </text>
  </svg>
);

const AmexIcon = () => (
  <svg viewBox="0 0 48 32" className="h-7 w-12">
    <rect width="48" height="32" rx="4" fill="#2E77BC" />
    <text
      x="24"
      y="14"
      textAnchor="middle"
      fontSize="6"
      fontWeight="bold"
      fill="white"
      fontFamily="Arial"
    >
      AMERICAN
    </text>
    <text
      x="24"
      y="22"
      textAnchor="middle"
      fontSize="6"
      fontWeight="bold"
      fill="white"
      fontFamily="Arial"
    >
      EXPRESS
    </text>
  </svg>
);

const Footer = () => {
  const navigate = useNavigate();

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("quote")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="flex justify-center mb-4 py-8 rounded-lg">
        <img
          src="/images/logos/white-logo.png"
          alt="Custom Packaging Line"
          className="h-20 w-auto object-contain"
        />
      </div>
      <hr className="max-w-6xl border-t-2 border-white mb-10 mx-auto" />

      <div className="container mx-auto px-4 pt-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10 mb-10 items-start">
          {/* Column 1 — Payment + Social (2/12) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-white">
              Payment Methods
            </h4>
            <div className="flex items-center gap-2.5 flex-wrap mb-6">
              <div className="bg-white/10 rounded-md p-1.5">
                <VisaIcon />
              </div>
              <div className="bg-white/10 rounded-md p-1.5">
                <MastercardIcon />
              </div>
              <div className="bg-white/10 rounded-md p-1.5">
                <PaypalIcon />
              </div>
              <div className="bg-white/10 rounded-md p-1.5">
                <DiscoverIcon />
              </div>
              <div className="bg-white/10 rounded-md p-1.5">
                <AmexIcon />
              </div>
            </div>

            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-white">
              Connect with Us
            </h4>
            <div className="flex items-center gap-2.5 flex-wrap">
              <a
                href="https://www.facebook.com/profile.php?id=61589609734656"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/custompackagingline/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.youtube.com/@CustomPackagingLine"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/custompackagingline/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.pinterest.com/custompackagingline"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Pinterest"
              >
                <PinterestIcon />
              </a>
            </div>
          </div>

          {/* Column 2 — Information (2/12) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-white">
              Information
            </h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              {[
                { label: "About Us", href: "/about-us" },
                { label: "Contact Us", href: "#quote" },
                { label: "Terms and Conditions", href: "/cpl-policies" },
                {
                  label: "Artwork Approval / Production Policy",
                  href: "/artwork-policy",
                },
                {
                  label: "Payment Methods / Billing Policy",
                  href: "/payment-policy",
                },
                {
                  label: "Refund / Cancellation Policy",
                  href: "/refund-policy",
                },
                { label: "Shipping Policy", href: "/shipping-policy" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "FAQs", href: "/blog" },
              ].map((l) => (
                <li key={l.label} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {l.href.startsWith("#") ? (
                    <a
                      href={l.href}
                      onClick={handleQuoteClick}
                      className="hover:text-primary transition-colors"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      to={l.href}
                      className="hover:text-primary transition-colors"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Packaging Products (5/12) */}
          <div className="lg:col-span-5">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-white">
              Packaging Products
            </h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-secondary-foreground/70">
              {categories.map((cat) => (
                <li key={cat.slug} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <Link
                    to={`/product-category/${cat.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <Link
                  to="/custom-boxes"
                  className="hover:text-primary transition-colors text-secondary-foreground/70"
                >
                  Can not find your category?
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact + Free Shipping (3/12) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-white">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70 mb-6">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                +1 (970) 794-3622
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                orders@custompackagingline.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                3400 N Central Expy Ste #110-227, Richardson, TX 75080
              </li>
            </ul>

            <div>
              <p className="text-2xl font-extrabold uppercase tracking-wide text-white leading-tight">
                100% FREE
              </p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-extrabold uppercase tracking-wide text-yellow-400 leading-tight">
                  SHIPPING
                </p>
                <Truck className="h-7 w-7 text-white" />
              </div>
              <p className="text-sm font-semibold text-white mt-1">
                All Across USA
              </p>
              <img
                src="https://flagcdn.com/w160/us.png"
                alt="USA Flag"
                className="mt-3 w-28 rounded-sm shadow"
              />
            </div>
          </div>
        </div>

        {/* Logistics Partners */}
        <div className="border-t border-secondary-foreground/10 py-8">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-white mb-6">
            Our Logistics Partners
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {[
              { src: uspsLogo, alt: "USPS", href: "https://www.usps.com/" },
              { src: dhlLogo, alt: "DHL", href: "https://www.dhl.com/" },
              { src: fedexLogo, alt: "FedEx", href: "https://www.fedex.com/" },
              {
                src: "/images/logos/ups.svg",
                alt: "UPS",
                href: "https://www.ups.com/",
              },
            ].map((logo) => (
              <a
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={logo.alt}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-32 md:w-40 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 text-center">
          <p className="text-xs text-secondary-foreground/40">
            © {new Date().getFullYear()} Custom Packaging Line. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
