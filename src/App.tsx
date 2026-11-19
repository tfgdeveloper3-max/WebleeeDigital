import { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footersection from "./components/Footersection";
import { innerServiceRoutes } from "./routes/innerServiceRoutes";
import FooterIntroReveal from "./components/FooterIntroReveal";
import { ContactModalProvider } from "./context/ContactModalContext";
import ContactModal from "./components/ContactModal";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import ThankYouPage from "./components/ThankYou";

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

const TAWK_SRC = "https://embed.tawk.to/6afcb6bc0a9f413cbd4631a5/1k7lijke1";

function App() {
  useEffect(() => {
    if (document.querySelector(`script[src="${TAWK_SRC}"]`)) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    window.Tawk_API.onLoad = () => {
      setTimeout(() => {
        window.Tawk_API?.maximize();
      }, 1000);
    };

    window.Tawk_API.onChatMessageAgent = () => {
      window.Tawk_API?.maximize();
    };

    const script = document.createElement("script");
    script.async = true;
    script.src = TAWK_SRC;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <ContactModalProvider>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<div className="py-40 text-center text-neutral-400">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />

            {innerServiceRoutes.map(({ slug, component: Component }) => (
              <Route
                key={slug}
                path={`/services/${slug}`}
                element={<Component />}
              />
            ))}
          </Routes>
        </Suspense>
        <FooterIntroReveal />
        <Footersection />
        <ContactModal />
      </ContactModalProvider>
    </>
  );
}

export default App;