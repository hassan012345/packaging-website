import HeroSection from "@/components/HeroSection";
import FeaturesRow from "@/components/FeaturesRow";
import StatsBar from "@/components/StatsBar";
import FinishingSection from "@/components/FinishingSection";
import ContentSections from "@/components/ContentSections";
import QuoteForm from "@/components/QuoteForm";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import BrowseCategoriesGrid from "@/components/templates/BrowseCategoriesGrid";

const Index = () => (
  <>
    <HeroSection />
    <FeaturesRow />
    <BrowseCategoriesGrid />
    <StatsBar />
    {/* <FinishingSection /> */}
    <ContentSections />

    {/* Quote + FAQ side by side */}
    <section id="quote" className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 rounded-lg p-4">
            <QuoteForm />
          </div>
          <div className="lg:col-span-5 rounded-lg p-4">
            {/* Invisible spacer mirroring the QuoteForm header so the FAQ card
                lines up with the form card on desktop (lg) where they sit side by side. */}
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

    <Testimonials />
  </>
);

export default Index;
