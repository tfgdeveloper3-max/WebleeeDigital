import BrandingHeroSection from "../../components/Innerservices/BrandingAndDesign/BrandingHeroSection";
import BrandingAboutSection from "../../components/Innerservices/BrandingAndDesign/BrandingAboutSection";
import BrandingKitSection from "../../components/Innerservices/BrandingAndDesign/BrandingKitSection";
import BrandingPortfolioGridSection from "../../components/Innerservices/BrandingAndDesign/BrandingPortfolioGridSection";
import ServicesClientsSection from "../../components/Innerservices/WebDevelopment/Servicesclientssection";
import CtaBannerSection from "../../components/Innerservices/BrandingAndDesign/BrandingCta";
import BrandingPricingSection from "../../components/Innerservices/BrandingAndDesign/BrandingPricingSection";
import TestimonialsSection from "../../components/Innerservices/BrandingAndDesign/BrandingTestimonials";
import PageMeta from "../../components/PageMeta";
import { PAGE_META } from "../../data/pageMeta";

export default function BrandingAndDesignPage() {
    return (
        <main className="w-full">
            <PageMeta {...PAGE_META["branding-design"]} />
            
            <BrandingHeroSection />
            <BrandingAboutSection />
            <ServicesClientsSection />
            <BrandingKitSection />
            <BrandingPortfolioGridSection />
            <CtaBannerSection />
            <BrandingPricingSection />
            <TestimonialsSection />
        </main>
    );
}