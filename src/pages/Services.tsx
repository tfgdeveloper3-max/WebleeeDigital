import BlindsReveal from "../components/BlindsReveal";
import PageMeta from "../components/PageMeta";
import ServicesClientsSection from "../components/services/ClientSection";
import OurServices from "../components/services/OurServices";
import PricingFaq from "../components/services/Pricing";
import ServicesHeroSection from "../components/services/ServiceHero";
import ServicesDemo from "../components/services/ServicesDemo";
import ServicesFaq from "../components/services/ServicesFaq";
import ServicesProvide from "../components/services/ServicesProvide";
import ServicesTimeline from "../components/services/ServicesTimeline";
import { PAGE_META } from "../data/pageMeta";



export default function Services() {
    return (
        <>
            <PageMeta {...PAGE_META.services} />

            <ServicesHeroSection />
            <ServicesClientsSection />
            <BlindsReveal>
                <OurServices />
            </BlindsReveal>
            <ServicesTimeline />
            <ServicesProvide />
            <ServicesDemo />
            <PricingFaq />
            <ServicesFaq />
        </>
    );
}