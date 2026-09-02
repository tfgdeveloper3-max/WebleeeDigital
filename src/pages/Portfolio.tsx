import PortfolioHeroSection from "../components/Portfolio/PortfolioHeroSection";
import PortfolioGridSection from "../components/Portfolio/PortfolioGridSection";
import CtaBannerSection from "../components/Ctabannersection";

export default function Portfolio() {
    return (
        <main>
            <PortfolioHeroSection />
            <PortfolioGridSection />
            <CtaBannerSection />
        </main>
    );
}