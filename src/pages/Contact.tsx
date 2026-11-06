import ContactHeroSection from "../components/Contact/ContactHero";
import Contactsection from "../components/Contactsection";
import PageMeta from "../components/PageMeta";
import { PAGE_META } from "../data/pageMeta";

export default function Contact() {
    return (
        <main>
            <PageMeta {...PAGE_META.contact} />

            <ContactHeroSection />
            <Contactsection />
        </main>
    );
}