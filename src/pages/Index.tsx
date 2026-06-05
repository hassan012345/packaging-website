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
          <div className="lg:col-span-5 mt-[120px] rounded-lg p-4">
            <FAQSection />
          </div>
        </div>
      </div>
    </section>

    <Testimonials />
  </>
);

export default Index;
