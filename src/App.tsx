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
import { ContactModalProvider } from './context/ContactModalContext'
import ContactModal from './components/ContactModal'
import { LiveChatWidget } from "@livechat/widget-react";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";

function App() {
  useEffect(() => {
    const openChat = () => {
      const livechat = (window as any).LiveChatWidget;

      if (livechat) {
        setTimeout(() => {
          livechat.call("maximize");
        }, 1000);
        livechat.on("new_event", (event: any) => {
          if (
            ["message", "rich_message", "file"].includes(event.type) &&
            event.author?.type !== "customer"
          ) {
            livechat.call("maximize");
          }
        });
      }
    };

    if ((window as any).LiveChatWidget) {
      openChat();
    }

    (window as any).__lc = (window as any).__lc || {};
    (window as any).__lc.asyncInit = () => {
      openChat();
    };
  }, []);

  return (
    <>
      <LiveChatWidget license="19067595" />
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