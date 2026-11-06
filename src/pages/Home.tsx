import HeroSection from '../components/Herosection'
import AboutSection from '../components/Aboutsection'
import ClientsSection from '../components/Clientsection'
import ServicesSection from '../components/Servicessection'
import OurprocesSection from '../components/OurprocesSection'
import PortfolioSection from '../components/Portfoliosection'
import PricingSection from '../components/Pricingsection'
import TestimonialsSection from '../components/Testimonialsection'
import CtaBannerSection from '../components/Ctabannersection'
import ContactSection from '../components/Contactsection'
import BlindsReveal from '../components/BlindsReveal'
import { PAGE_META } from '../data/pageMeta'
import PageMeta from '../components/PageMeta'

export default function Home() {
    return (
        <>
            <PageMeta {...PAGE_META["home"]} />

            <HeroSection />
            <BlindsReveal>
                <AboutSection />
            </BlindsReveal>
            <ClientsSection />
            <ServicesSection />
            <OurprocesSection />
            <PortfolioSection />
            <PricingSection />
            <TestimonialsSection />
            <CtaBannerSection />
            <ContactSection />
        </>
    )
}