import SocialMediaHeroSection from "../../components/Innerservices/SocialMediaManagement/SocialMediaHeroSection";
import SocialMediaAboutSection from "../../components/Innerservices/SocialMediaManagement/SocialMediaAboutSection";
import SocialMediaPlatformsSection from "../../components/Innerservices/SocialMediaManagement/SocialMediaPlatformsSection";
import SocialMediaPortfolioGridSection from "../../components/Innerservices/SocialMediaManagement/SocialMediaPortfolioGridSection";
import ServicesClientsSection from "../../components/Innerservices/WebDevelopment/Servicesclientssection";
import SocialMediaPricingSection from "../../components/Innerservices/SocialMediaManagement/SocialMediaPricingSection";
import SocialTestimonials from "../../components/Innerservices/SocialMediaManagement/SocialTestimonials";
import SocialCta from "../../components/Innerservices/SocialMediaManagement/SocialCta";

export default function SocialMediaManagementPage() {
    return (
        <main className="w-full">
            <SocialMediaHeroSection />
            <SocialMediaAboutSection />
            <ServicesClientsSection />
            <SocialMediaPlatformsSection />
            <SocialMediaPortfolioGridSection />
            <SocialCta />
            <SocialMediaPricingSection />
            <SocialTestimonials />
        </main>
    );
}