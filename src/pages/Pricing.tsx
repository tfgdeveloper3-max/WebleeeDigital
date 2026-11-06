import PricingHeroSection from "../components/Pricing/PricingHeroSection";
import Pricingsection from "../components/Pricingsection";
import PricingCta from "../components/Pricing/PricingCta";
import PageMeta from "../components/PageMeta";
import { PAGE_META } from "../data/pageMeta";

export default function Pricing() {
    return (
        <main>
            <PageMeta {...PAGE_META.pricing} />

            <PricingHeroSection />
            <Pricingsection />
            <PricingCta />
        </main>
    );
}