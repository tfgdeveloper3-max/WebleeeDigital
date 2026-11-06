import ServicesClientsSection from "../../components/Innerservices/WebDevelopment/Servicesclientssection";
import TestimonialsSection from "../../components/Innerservices/EcommerceSolution/EcommerceTestimonials";
import CtaBannerSection from "../../components/Innerservices/EcommerceSolution/EcommerceCta";
import EcommercePricingSection from "../../components/Innerservices/EcommerceSolution/EcommercePricingSection";
import EcommercePortfolioGridSection from "../../components/Innerservices/EcommerceSolution/EcommercePortfolioGridSection";
import EcommerceFeaturesSection from "../../components/Innerservices/EcommerceSolution/EcommerceFeaturesSection";
import EcommerceHeroSection from "../../components/Innerservices/EcommerceSolution/EcommerceHeroSection";
import EcommerceAboutSection from "../../components/Innerservices/EcommerceSolution/EcommerceAboutSection";
import { PAGE_META } from "../../data/pageMeta";
import PageMeta from "../../components/PageMeta";

export default function EcommerceSolutionPage() {
    return (
        <main className="w-full">
            <PageMeta {...PAGE_META["ecommerce-solution"]} />

            <EcommerceHeroSection />
            <EcommerceAboutSection />
            <ServicesClientsSection />
            <EcommerceFeaturesSection />
            <EcommercePortfolioGridSection />
            <CtaBannerSection />
            <EcommercePricingSection />
            <TestimonialsSection />
        </main>
    );
}