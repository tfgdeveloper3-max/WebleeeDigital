import DigitalMarketingHeroSection from "../../components/Innerservices/DigitalMarketing/DigitalMarketingHeroSection";
import DigitalMarketingAboutSection from "../../components/Innerservices/DigitalMarketing/DigitalMarketingAboutSection";
import DigitalMarketingChannelsSection from "../../components/Innerservices/DigitalMarketing/DigitalMarketingChannelsSection";
import DigitalMarketingPortfolioGridSection from "../../components/Innerservices/DigitalMarketing/DigitalMarketingPortfolioGridSection";
import ServicesClientsSection from "../../components/Innerservices/WebDevelopment/Servicesclientssection";
import DigitalMarketingPricingSection from "../../components/Innerservices/DigitalMarketing/DigitalMarketingPricingSection";
import DigitalCta from "../../components/Innerservices/DigitalMarketing/DigitalCta";
import DigitalTestimonials from "../../components/Innerservices/DigitalMarketing/DigitalTestimonials";
import PageMeta from "../../components/PageMeta";
import { PAGE_META } from "../../data/pageMeta";

export default function DigitalMarketingPage() {
    return (
        <main className="w-full">
            <PageMeta {...PAGE_META["digital-marketing-services"]} />

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