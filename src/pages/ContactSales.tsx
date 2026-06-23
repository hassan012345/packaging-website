import { Mail, Phone } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import FAQSection from "@/components/FAQSection";

const EMAIL = "orders@custompackagingline.com";
const PHONE_DISPLAY = "+1 (970) 794-3622";
const PHONE_TEL = "+19707943622";
const WHATSAPP = "19707943622"; // country code + number, no symbols

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const contactMethods = [
  {
    label: "Email Us",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
    external: false,
    hint: "We reply within 15 minutes",
  },
  {
    label: "WhatsApp",
    value: PHONE_DISPLAY,
    href: `https://wa.me/${WHATSAPP}`,
    icon: WhatsAppIcon,
    external: true,
    hint: "Chat with us instantly",
  },
  {
    label: "Call Us",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
    icon: Phone,
    external: false,
    hint: "Mon-Fri, business hours",
  },
];

const ContactSales = () => (
  <div>
    {/* Heading */}
    <section className="bg-primary text-white py-16 text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-black">Contact Our Sales Team</h1>
        <p className="text-white/85 mt-4 text-lg">
          Have a project in mind? Reach out directly or request a free quote,
          we'll get back to you within 15 minutes during business hours.
        </p>
      </div>
    </section>

    {/* Direct contact buttons */}
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid sm:grid-cols-3 gap-6">
          {contactMethods.map((m) => {
            const Icon = m.icon;
            return (
              <a
                key={m.label}
                href={m.href}
                {...(m.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex flex-col items-center text-center bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all"
              >
                <span className="flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="h-7 w-7" />
                </span>
                <span className="mt-4 font-bold text-foreground">{m.label}</span>
                <span className="mt-1 text-sm text-primary font-medium break-all">
                  {m.value}
                </span>
                <span className="mt-1 text-xs text-muted-foreground">{m.hint}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>

    {/* A little about us / why packaging matters */}
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          A Little About Us
        </span>
        <h2 className="text-2xl md:text-3xl font-black mt-2 text-foreground">
          Packaging Done Right, Start to Finish
        </h2>
        <div className="text-muted-foreground mt-5 space-y-4 leading-relaxed text-left">
          <p>
            At Custom Packaging Line, we handle the entire journey, from your
            first idea to the box landing at your doorstep. Design online, get a
            free 3D mockup, approve transparent pricing with no hidden die or
            plate charges, and we take care of production and delivery.
          </p>
          <p>
            Why does packaging matter? It's the very first thing your customer
            touches. Great packaging protects your product in transit, makes your
            brand look premium on the shelf, and turns a simple unboxing into an
            experience people remember and share.
          </p>
          <p>
            Whether you're starting with 50 units or scaling to 50,000, we move
            at your pace, with a fast 7-day turnaround and free shipping across
            the USA.
          </p>
        </div>
      </div>
    </section>

    {/* Quote form + FAQs */}
    <section id="quote" className="py-16 bg-muted">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 rounded-lg p-4">
            <QuoteForm />
          </div>
          <div className="lg:col-span-5 rounded-lg p-4">
            {/* Invisible spacer mirroring the QuoteForm header so the FAQ card
                lines up with the form card on desktop. */}
            <div aria-hidden className="hidden lg:block text-center mb-6 invisible select-none">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Free Quote</span>
              <h2 className="text-3xl md:text-5xl font-black mt-2 text-foreground">
                Get a Quote in 15 Minutes
              </h2>
              <p className="text-muted-foreground mt-2 line-clamp-2">
                Fill out the form below and our team will respond within 15 minutes during business hours.
              </p>
            </div>
            <FAQSection />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ContactSales;
