import DigitalMarketingHeroSection from "../../components/Innerservices/DigitalMarketing/DigitalMarketingHeroSection";
import DigitalMarketingAboutSection from "../../components/Innerservices/DigitalMarketing/DigitalMarketingAboutSection";
import DigitalMarketingChannelsSection from "../../components/Innerservices/DigitalMarketing/DigitalMarketingChannelsSection";
import DigitalMarketingPortfolioGridSection from "../../components/Innerservices/DigitalMarketing/DigitalMarketingPortfolioGridSection";
import ServicesClientsSection from "../../components/Innerservices/WebDevelopment/Servicesclientssection";
import DigitalMarketingPricingSection from "../../components/Innerservices/DigitalMarketing/DigitalMarketingPricingSection";
import DigitalCta from "../../components/Innerservices/DigitalMarketing/DigitalCta";
import DigitalTestimonials from "../../components/Innerservices/DigitalMarketing/DigitalTestimonials";

export default function DigitalMarketingPage() {
    return (
        <main className="w-full">
            <DigitalMarketingHeroSection />
            <DigitalMarketingAboutSection />
            <ServicesClientsSection />
            <DigitalMarketingChannelsSection />
            <DigitalMarketingPortfolioGridSection />
            <DigitalCta />
            <DigitalMarketingPricingSection />
            <DigitalTestimonials />
        </main>
    );
}