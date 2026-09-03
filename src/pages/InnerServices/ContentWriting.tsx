import ContentWritingHeroSection from "../../components/Innerservices/ContentWriting/ContentWritingHeroSection";
import ContentWritingAboutSection from "../../components/Innerservices/ContentWriting/ContentWritingAboutSection";
import ContentWritingTypesSection from "../../components/Innerservices/ContentWriting/ContentWritingTypesSection";
import ContentWritingPortfolioGridSection from "../../components/Innerservices/ContentWriting/ContentWritingPortfolioGridSection";
import ServicesClientsSection from "../../components/Innerservices/WebDevelopment/Servicesclientssection";
import ContentWritingPricingSection from "../../components/Innerservices/ContentWriting/ContentWritingPricingSection";
import ContentCta from "../../components/Innerservices/ContentWriting/ContentCta";
import ContentTestimonials from "../../components/Innerservices/ContentWriting/ContentTestimonials";

export default function ContentWritingPage() {
    return (
        <main className="w-full">
            <ContentWritingHeroSection />
            <ContentWritingAboutSection />
            <ServicesClientsSection />
            <ContentWritingTypesSection />
            <ContentWritingPortfolioGridSection />
            <ContentCta />
            <ContentWritingPricingSection />
            <ContentTestimonials />
        </main>
    );
}