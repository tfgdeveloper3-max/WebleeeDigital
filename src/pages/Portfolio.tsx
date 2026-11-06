import PageMeta from "../components/PageMeta";
import { PAGE_META } from "../data/pageMeta";

import PortfolioHeroSection from "../components/Portfolio/PortfolioHeroSection";
import PortfolioGridSection from "../components/Portfolio/PortfolioGridSection";
import PortfolioCta from "../components/Portfolio/PortfolioCta";

export default function Portfolio() {
    return (
        <main>
            <PageMeta {...PAGE_META.portfolio} />

            <PortfolioHeroSection />
            <PortfolioGridSection />
            <PortfolioCta />
        </main>
    );
}