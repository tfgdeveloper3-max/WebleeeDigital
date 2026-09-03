import PortfolioHeroSection from "../components/Portfolio/PortfolioHeroSection";
import PortfolioGridSection from "../components/Portfolio/PortfolioGridSection";
import PortfolioCta from "../components/Portfolio/PortfolioCta";

export default function Portfolio() {
    return (
        <main>
            <PortfolioHeroSection />
            <PortfolioGridSection />
            <PortfolioCta />
        </main>
    );
}