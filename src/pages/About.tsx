import AboutHeroSection from "../components/About/AboutHeroSection";
import AboutStorySection from "../components/About/AboutStorySection";
import MissionVisionSection from "../components/About/MissionVisionSection";
import StatsSection from "../components/About/StatsSection";
import ProcessSection from "../components/About/ProcessSection";
import BlindsReveal from "../components/BlindsReveal";
import CtaBannerSection from "../components/Ctabannersection";
import PageMeta from "../components/PageMeta";
import { PAGE_META } from "../data/pageMeta";


export default function About() {
    return (
        <main>
            <PageMeta {...PAGE_META.about} />
            
            <AboutHeroSection />
            <AboutStorySection />

            <BlindsReveal>
                <MissionVisionSection />
            </BlindsReveal>

            <StatsSection />
            <ProcessSection />
            <CtaBannerSection />
        </main>
    );
}