import VideoAnimationHeroSection from "../../components/Innerservices/VideoAnimation/VideoAnimationHeroSection";
import VideoAnimationAboutSection from "../../components/Innerservices/VideoAnimation/VideoAnimationAboutSection";
import VideoAnimationStylesSection from "../../components/Innerservices/VideoAnimation/VideoAnimationStylesSection";
import VideoAnimationPortfolioGridSection from "../../components/Innerservices/VideoAnimation/VideoAnimationPortfolioGridSection";
import ServicesClientsSection from "../../components/Innerservices/WebDevelopment/Servicesclientssection";
import VideoAnimationPricingSection from "../../components/Innerservices/VideoAnimation/VideoAnimationPricingSection";
import VideoCta from "../../components/Innerservices/VideoAnimation/VideoCta";
import VideoTestimonials from "../../components/Innerservices/VideoAnimation/VideoTestimonials";
import PageMeta from "../../components/PageMeta";
import { PAGE_META } from "../../data/pageMeta";

export default function VideoAnimationPage() {
    return (
        <main className="w-full">
            <PageMeta {...PAGE_META["video-animation"]} />
            
            <VideoAnimationHeroSection />
            <VideoAnimationAboutSection />
            <ServicesClientsSection />
            <VideoAnimationStylesSection />
            <VideoAnimationPortfolioGridSection />
            <VideoCta />
            <VideoAnimationPricingSection />
            <VideoTestimonials />
        </main>
    );
}