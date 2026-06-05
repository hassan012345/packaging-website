import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is the typical turnaround time?", a: "Standard orders are completed in 7-10 business days after design approval. Rush orders can be delivered in as little as 5 days." },
  { q: "How can I contact your team?", a: "You can reach us by phone at +1 (970) 794-3622, email at orders@custompackagingline.com, or through the quote form on our website." },
  { q: "What printing options are available?", a: "We offer CMYK offset printing, digital printing, and flexographic printing. Our team will recommend the best option based on your design and quantity." },
  { q: "What is the ordering process?", a: "Simply submit a quote request, share your design (or let us create one for free), approve the mockup, and we handle production and delivery." },
  { q: "What is the minimum order quantity?", a: "Our minimum order starts at just 50 boxes, making it accessible for small businesses and startups." },
  // { q: "Can I fully customize the size and style?", a: "Absolutely! Every box is made to your exact specifications — custom dimensions, shapes, materials, and finishes." },
  // { q: "Do you offer 3D mockups?", a: "Yes, we provide free 3D digital mockups so you can visualize your packaging before production begins." },
  // { q: "Can I get physical prototypes?", a: "Yes, we offer pre-production physical prototypes so you can feel the material and see the design in person." },
  // { q: "Can you print my logo on the packaging?", a: "Of course! We specialize in custom logo printing with options for foil stamping, embossing, debossing, and spot UV." },
  // { q: "Do you offer double-sided printing?", a: "Yes, we offer both inside and outside printing to maximize your branding real estate." },
  // { q: "Do you provide design assistance?", a: "Yes, our in-house design team provides free professional design support for every order." },
];

const FAQSection = () => (
  <div>
    <h3 className="text-2xl font-black text-foreground mb-6">Frequently Asked Questions</h3>
    <Accordion type="single" collapsible className="space-y-3">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-6 bg-background border-amber-200">
          <AccordionTrigger className="text-left font-semibold text-amber-600 hover:no-underline">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="text-amber-600 leading-relaxed">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default FAQSection;
