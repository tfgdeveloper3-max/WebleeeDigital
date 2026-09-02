import SeoHeroSection from "../../components/Innerservices/Seo/SeoHeroSection";
import SeoAboutSection from "../../components/Innerservices/Seo/SeoAboutSection";
import SeoStrategySection from "../../components/Innerservices/Seo/SeoStrategySection";
import SeoPortfolioGridSection from "../../components/Innerservices/Seo/SeoPortfolioGridSection";
import ServicesClientsSection from "../../components/Innerservices/WebDevelopment/Servicesclientssection";
import SeoPricingSection from "../../components/Innerservices/Seo/SeoPricingSection";
import SeoTestimonials from "../../components/Innerservices/Seo/SeoTestimonials";
import SeoCta from "../../components/Innerservices/Seo/SeoCta";

export default function SeoPage() {
    return (
        <main className="w-full">
            <SeoHeroSection />
            <SeoAboutSection />
            <SeoStrategySection />
            <SeoPortfolioGridSection />
            <ServicesClientsSection />
            <SeoCta />
            <SeoPricingSection />
            <SeoTestimonials />
        </main>
    );
}