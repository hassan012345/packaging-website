import { Phone, Mail, Truck } from "lucide-react";
import { FacebookIcon, InstagramIcon, YouTubeIcon, LinkedInIcon, PinterestIcon } from "./icons/social-icons";

const TopBanner = () => (
  <div className="sticky top-0 z-[60]">
    {/* Row: Social + Marquee + Contact */}
    <div className="bg-secondary text-secondary-foreground text-sm border-b border-secondary-foreground/20 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between py-1.5 gap-4">

        {/* Social Icons */}
        <div className="flex items-center gap-1.5 shrink-0">
          <a
            href="https://www.facebook.com/profile.php?id=61589609734656"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FacebookIcon className="w-7 h-7" />
          </a>

          <a
            href="https://www.instagram.com/custompackagingline/"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <InstagramIcon className="w-7 h-7" />
          </a>

          <a
            href="https://www.youtube.com/@CustomPackagingLine"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <YouTubeIcon className="w-7 h-7" />
          </a>

          <a
            href="https://www.linkedin.com/company/custompackagingline/posts/?feedView=all"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <LinkedInIcon className="w-7 h-7" />
          </a>

          <a
            href="https://www.pinterest.com/custompackagingline"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <PinterestIcon className="w-7 h-7" />
          </a>
        </div>

        {/* Marquee Slider (MOVED HERE) */}
        <div className="flex-1 overflow-hidden mx-4">
          <div className="animate-marquee whitespace-nowrap flex gap-16">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-xs font-bold tracking-wide">
                7 days 🕛 and enjoy an exclusive 20% discount on your first order! Don't miss out, order today! 🎉
              </span>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <span className="flex items-center gap-1 text-xs">
            <Truck className="h-3.5 w-3.5 text-primary" />
            Free Shipping
          </span>

          <span className="text-secondary-foreground/30">|</span>

          <span className="flex items-center gap-1 text-xs">
            <Phone className="h-3.5 w-3.5 text-primary" />
            +1 (970) 794-3622
          </span>

          <span className="text-secondary-foreground/30">|</span>

          <span className="flex items-center gap-1 text-xs">
            <Mail className="h-3.5 w-3.5 text-primary" />
            orders@custompackagingline.com
          </span>
        </div>

      </div>
    </div>
  </div>
);

export default TopBanner;
