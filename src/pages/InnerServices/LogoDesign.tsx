import LogoDesignHeroSection from "../../components/Innerservices/LogoDesign/LogoDesignHeroSection";
import LogoDesignAboutSection from "../../components/Innerservices/LogoDesign/LogoDesignAboutSection";
import LogoDesignProcessSection from "../../components/Innerservices/LogoDesign/LogoDesignProcessSection";
import LogoDesignPortfolioGridSection from "../../components/Innerservices/LogoDesign/LogoDesignPortfolioGridSection";
import ServicesClientsSection from "../../components/Innerservices/WebDevelopment/Servicesclientssection";
import LogoDesignPricingSection from "../../components/Innerservices/LogoDesign/LogoDesignPricingSection";
import LogoTestimonials from "../../components/Innerservices/LogoDesign/LogoTestimonials";
import LogoDesignCta from "../../components/Innerservices/LogoDesign/LogoDesignCta";
import PageMeta from "../../components/PageMeta";
import { PAGE_META } from "../../data/pageMeta";

export default function LogoDesignPage() {
    return (
        <main className="w-full">
            <PageMeta {...PAGE_META["logo-design"]} />
            
            <LogoDesignHeroSection />
            <LogoDesignAboutSection />
            <ServicesClientsSection />
            <LogoDesignProcessSection />
            <LogoDesignPortfolioGridSection />
            <LogoDesignCta />
            <LogoDesignPricingSection />
            <LogoTestimonials />
        </main>
    );
}