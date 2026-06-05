import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  ChevronRight,
  Package,
} from "lucide-react";
import { categories } from "@/data/categories";
import { shapes, materials } from "@/data/shapes";
import { othersItems } from "@/data/others";
import type { LucideIcon } from "lucide-react";
import logoImg from "@/assets/logo.png";

const categoryFallback = {
  name: "Can't Find Your Category?",
  slug: "/custom-boxes",
  icon: Package as LucideIcon,
};
const shapeFallback = {
  name: "Can't Find Your Shape?",
  slug: "/custom-boxes",
  icon: Package as LucideIcon,
};

const navItems = [
  {
    label: "Industries",
    href: "/industries",
    children: [
      ...categories.map((c) => ({
        name: c.name,
        slug: `/product-category/${c.slug}`,
        icon: c.icon as LucideIcon,
      })),
      categoryFallback,
    ],
  },
  {
    label: "Shapes & Styles",
    href: "/shapes",
    children: [
      ...shapes.map((s) => ({
        name: s.name,
        slug: `/shapes/${s.slug}`,
        icon: s.icon as LucideIcon,
      })),
      shapeFallback,
    ],
  },
  {
    label: "Materials",
    href: "/materials",
    children: materials.map((m) => ({
      name: m.name,
      slug: `/materials/${m.slug}`,
      icon: m.icon as LucideIcon,
    })),
  },
  {
    label: "Others",
    href: "/others",
    children: othersItems.map((o) => ({
      name: o.name,
      slug: o.slug,
      icon: o.icon as LucideIcon,
    })),
  },
  { label: "Blog", href: "/blog" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  const scrollToQuote = () => {
    if (window.location.pathname === "/") {
      document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(
        () =>
          document
            .getElementById("quote")
            ?.scrollIntoView({ behavior: "smooth" }),
        300,
      );
    }
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  return (
    <header className="sticky top-[41px] z-50 bg-background shadow-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-8 py-2">
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0 object-contain"
        >
          <img
            src={logoImg}
            alt="Custom Packaging Lane"
            className="h-8 md:h-8 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={() => item.children && handleMouseLeave()}
            >
              {item.children ? (
                <Link
                  to={(item as any).href || "#"}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors rounded-md"
                  onClick={(e) => {
                    if (!(item as any).href) e.preventDefault();
                  }}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                  />
                </Link>
              ) : (
                <Link
                  to={(item as any).href || "/"}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors rounded-md"
                >
                  {item.label}
                </Link>
              )}

              {item.children && openDropdown === item.label && (
                <div
                  className="absolute top-full left-0 mt-1 bg-popover border border-border rounded-xl shadow-xl z-50 p-4 min-w-[600px] animate-fade-in"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-3 gap-1">
                    {item.children.map((child) => {
                      const ChildIcon = child.icon;
                      return (
                        <Link
                          key={child.slug + child.name}
                          to={child.slug}
                          onClick={() => setOpenDropdown(null)}
                          className="flex items-center gap-2.5 px-3 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                        >
                          <ChildIcon className="h-5 w-5 text-primary shrink-0" />
                          {child.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              className="w-48 h-9 text-sm pl-8 border-foreground/30"
            />
          </div>
          <Button
            onClick={scrollToQuote}
            size="default"
            className="font-bold text-sm px-6 animate-pulse-glow"
          >
            Get Quote
          </Button>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4 max-h-[80vh] overflow-y-auto">
          <div className="py-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-9 h-9 text-sm border-foreground/30"
              />
            </div>
          </div>
          {navItems.map((item) => (
            <div
              key={item.label}
              className="border-b border-border/50 last:border-0"
            >
              {item.children ? (
                <>
                  <div className="flex items-center justify-between w-full py-3">
                    <Link
                      to={(item as any).href || "#"}
                      onClick={(e) => {
                        if (!(item as any).href) e.preventDefault();
                        else setMobileOpen(false);
                      }}
                      className="text-sm font-semibold text-foreground hover:text-primary"
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === item.label ? null : item.label,
                        )
                      }
                    >
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${mobileExpanded === item.label ? "rotate-90" : ""}`}
                      />
                    </button>
                  </div>
                  {mobileExpanded === item.label && (
                    <div className="pl-4 pb-3 space-y-1">
                      {item.children.map((child) => {
                        const ChildIcon = child.icon;
                        return (
                          <Link
                            key={child.slug + child.name}
                            to={child.slug}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-primary"
                          >
                            <ChildIcon className="h-5 w-5 text-primary shrink-0" />
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={(item as any).href || "/"}
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-left py-3 text-sm font-semibold text-foreground hover:text-primary"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Button
            onClick={() => {
              scrollToQuote();
              setMobileOpen(false);
            }}
            className="w-full mt-3 font-bold animate-pulse-glow"
          >
            Get Quote
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
