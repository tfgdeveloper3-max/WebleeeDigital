type MetaEntry = {
    title: string;
    description: string;
    path: string;
};

export const PAGE_META: Record<string, MetaEntry> = {
    /* ===================== Main Pages ===================== */

    home: {
        title: "Weblee Digital | Web Design, Development & Digital Solutions",
        description:
            "Weblee Digital builds custom websites, e-commerce stores, apps, branding, and digital marketing campaigns that turn visitors into customers. Get a free consultation today.",
        path: "/",
    },
    about: {
        title: "About Us — Our Story, Mission & Team",
        description:
            "Learn how Weblee Digital started, what drives our mission and vision, and meet the team of designers, developers, and strategists behind every project.",
        path: "/about",
    },
    services: {
        title: "Our Services — Web, App, Branding & Marketing Solutions",
        description:
            "Explore Weblee Digital's full range of services: custom websites, e-commerce, web/app development, branding, video animation, SEO, and digital marketing.",
        path: "/services",
    },
    portfolio: {
        title: "Portfolio — Recent Projects & Client Work",
        description:
            "Browse a selection of websites, apps, branding, and marketing campaigns Weblee Digital has designed and shipped for clients across every industry.",
        path: "/portfolio",
    },
    pricing: {
        title: "Pricing — Transparent Packages For Every Service",
        description:
            "See clear, upfront pricing for custom websites, e-commerce, apps, branding, SEO, and digital marketing packages. Find the plan that fits your budget.",
        path: "/pricing",
    },
    contact: {
        title: "Contact Us — Let's Talk About Your Project",
        description:
            "Get in touch with Weblee Digital to discuss your next website, app, or marketing project. We typically reply within one business day.",
        path: "/contact",
    },

    /* ============= Services: Websites & Apps ============= */

    "custom-website": {
        title: "Custom Website Design & Development",
        description:
            "Bespoke, mobile-responsive websites built around your brand — fast load times, clean code, and design that turns visitors into customers.",
        path: "/services/custom-website",
    },
    "ecommerce-solution": {
        title: "E-Commerce Solutions — Online Stores That Convert",
        description:
            "Custom e-commerce stores with secure checkout, product management, and conversion-focused design built to grow your online sales.",
        path: "/services/ecommerce-solution",
    },
    "web-app-solution": {
        title: "Web & App Solutions — Custom Platforms & Portals",
        description:
            "Scalable web and app platforms, CRM/ERP portals, booking systems, and custom software engineered for performance and growth.",
        path: "/services/web-app-solution",
    },
    "mobile-apps": {
        title: "Mobile App Development — iOS & Android",
        description:
            "Cross-platform and native mobile apps designed for a seamless user experience, from MVP builds to full enterprise applications.",
        path: "/services/mobile-apps",
    },

    /* ============= Services: Design & Media ============= */

    "video-animation": {
        title: "Video Animation & Explainer Videos",
        description:
            "Custom 2D and 3D animated videos, explainer videos, and motion graphics that tell your brand's story and boost engagement.",
        path: "/services/video-animation",
    },
    "branding-design": {
        title: "Branding & Design — Build A Brand People Remember",
        description:
            "Full brand identity design including collateral, packaging, and visual systems that make your business look professional and cohesive.",
        path: "/services/branding-design",
    },
    "logo-design": {
        title: "Logo Design — Custom Logos By Professional Designers",
        description:
            "Unique, memorable logo design packages with unlimited concepts and revisions, delivered in every file format you need.",
        path: "/services/logo-design",
    },

    /* ============= Services: Marketing & Content ============= */

    seo: {
        title: "SEO Optimization — Rank Higher, Get Found",
        description:
            "Technical SEO, keyword research, and on/off-page optimization plans designed to grow your organic search rankings and traffic.",
        path: "/services/seo",
    },
    "content-writing": {
        title: "Content Writing — Copy That Sounds Like You",
        description:
            "Website copy, blog content, and SEO-optimized writing plans built to engage your audience and support your growth goals.",
        path: "/services/content-writing",
    },
    "social-media-marketing": {
        title: "Social Media Management & Marketing",
        description:
            "Social media management, content creation, and paid ad campaigns across Facebook, Instagram, and more to grow your brand's presence.",
        path: "/services/social-media-marketing",
    },
    "digital-marketing-services": {
        title: "Digital Marketing Services — Multi-Channel Growth",
        description:
            "Full-funnel digital marketing plans combining SEO, paid ads, email, and content to drive measurable growth for your business.",
        path: "/services/digital-marketing-services",
    },
};