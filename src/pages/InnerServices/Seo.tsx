import SeoHeroSection from "../../components/Innerservices/Seo/SeoHeroSection";
import SeoAboutSection from "../../components/Innerservices/Seo/SeoAboutSection";
import SeoStrategySection from "../../components/Innerservices/Seo/SeoStrategySection";
import SeoPortfolioGridSection from "../../components/Innerservices/Seo/SeoPortfolioGridSection";
import ServicesClientsSection from "../../components/Innerservices/WebDevelopment/Servicesclientssection";
import SeoPricingSection from "../../components/Innerservices/Seo/SeoPricingSection";
import SeoTestimonials from "../../components/Innerservices/Seo/SeoTestimonials";
import SeoCta from "../../components/Innerservices/Seo/SeoCta";
import PageMeta from "../../components/PageMeta";
import { PAGE_META } from "../../data/pageMeta";

export default function SeoPage() {
    return (
        <main className="w-full">
            <PageMeta {...PAGE_META.seo} />
            
            <SeoHeroSection />
            <SeoAboutSection />
            <ServicesClientsSection />
            <SeoStrategySection />
            <SeoPortfolioGridSection />
            <SeoCta />
            <SeoPricingSection />
            <SeoTestimonials />
        </main>
    );
}