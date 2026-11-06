import MobileAppsHeroSection from "../../components/Innerservices/MobileApps/MobileAppsHeroSection";
import MobileAppsAboutSection from "../../components/Innerservices/MobileApps/MobileAppsAboutSection";
import MobileAppsCapabilitiesSection from "../../components/Innerservices/MobileApps/MobileAppsCapabilitiesSection";
import MobileAppsPortfolioGridSection from "../../components/Innerservices/MobileApps/MobileAppsPortfolioGridSection";
import ServicesClientsSection from "../../components/Innerservices/WebDevelopment/Servicesclientssection";
import MobileAppsPricingSection from "../../components/Innerservices/MobileApps/MobileAppsPricingSection";
import MobileAppCta from "../../components/Innerservices/MobileApps/MobileAppCta";
import MobileAppTestimonials from "../../components/Innerservices/MobileApps/MobileAppTestimonials";
import PageMeta from "../../components/PageMeta";
import { PAGE_META } from "../../data/pageMeta";

export default function MobileAppsPage() {
    return (
        <main className="w-full">
            <PageMeta {...PAGE_META["mobile-apps"]} />
            
            <MobileAppsHeroSection />
            <MobileAppsAboutSection />
            <ServicesClientsSection />
            <MobileAppsCapabilitiesSection />
            <MobileAppsPortfolioGridSection />
            <MobileAppCta />
            <MobileAppsPricingSection />
            <MobileAppTestimonials />
        </main>
    );
}