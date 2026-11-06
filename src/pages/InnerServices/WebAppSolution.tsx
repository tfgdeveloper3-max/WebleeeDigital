import WebAppHeroSection from "../../components/Innerservices/WebAppSolution/WebAppHeroSection";
import WebAppAboutSection from "../../components/Innerservices/WebAppSolution/WebAppAboutSection";
import WebAppTechProcessSection from "../../components/Innerservices/WebAppSolution/WebAppTechProcessSection";
import WebAppPortfolioGridSection from "../../components/Innerservices/WebAppSolution/WebAppPortfolioGridSection";
import ServicesClientsSection from "../../components/Innerservices/WebDevelopment/Servicesclientssection";
import CtaBannerSection from "../../components/Innerservices/WebAppSolution/WebAppCta";
import WebAppPricingSection from "../../components/Innerservices/WebAppSolution/WebAppPricingSection";
import TestimonialsSection from "../../components/Innerservices/WebAppSolution/WebAppTestimonials";
import PageMeta from "../../components/PageMeta";
import { PAGE_META } from "../../data/pageMeta";

export default function WebAppSolutionPage() {
    return (
        <main className="w-full">
            <PageMeta {...PAGE_META["web-app-solution"]} />
            
            <WebAppHeroSection />
            <WebAppAboutSection />
            <ServicesClientsSection />
            <WebAppTechProcessSection />
            <WebAppPortfolioGridSection />
            <CtaBannerSection />
            <WebAppPricingSection />
            <TestimonialsSection />
        </main>
    );
}