import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = { question: string; answer: string };

// Generic questions used to guarantee a minimum of 4 FAQs on every page.
const fallbackFaqs: FAQItem[] = [
  {
    question: "What is the typical turnaround time?",
    answer:
      "Standard orders are completed in 7-10 business days after design approval. Rush options are available on request.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "Our minimum order starts at just 50 units, making custom packaging accessible for small businesses and startups.",
  },
  {
    question: "Can I fully customize the size and style?",
    answer:
      "Absolutely! Every order is made to your exact specifications, custom dimensions, shapes, materials, and finishes.",
  },
  {
    question: "Do you offer free design support?",
    answer:
      "Yes, our in-house design team provides free professional design assistance and a free 3D mockup for every order.",
  },
];

const ThemedFAQ = ({ faq = [] }: { faq?: FAQItem[] }) => {
  // Ensure at least 4 questions, padding with generic fallbacks (no duplicates).
  const items = [...faq];
  for (const fb of fallbackFaqs) {
    if (items.length >= 4) break;
    if (!items.some((q) => q.question === fb.question)) items.push(fb);
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-primary rounded-2xl shadow-lg p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide">
            Frequently Asked Questions
          </h3>
          <div className="w-16 h-1 bg-[#FFC107] rounded-full mt-3 mb-6" />
          <Accordion type="single" collapsible defaultValue="faq-0">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-white/20 last:border-0"
              >
                <AccordionTrigger className="text-left font-semibold text-white hover:no-underline [&>svg]:text-[#FFC107]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#FFC107] leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ThemedFAQ;
