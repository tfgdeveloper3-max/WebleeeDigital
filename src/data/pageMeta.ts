type MetaEntry = {
    title: string;
    description: string;
    keywords: string;
    path: string;
};

export const PAGE_META: Record<string, MetaEntry> = {

    home: {
        title: "Web Design & Digital Marketing Agency | Weblee Digital",
        description:
            "Weblee Digital is a full-service web design and digital marketing agency offering website development, e-commerce, mobile apps, branding and SEO services.",
        keywords:
            "web design agency, website development company, digital marketing agency, web design services, website design company, SEO services, ecommerce website development, mobile app development, branding agency",
        path: "/",
    },
    about: {
        title: "About Us | Web Design & Digital Marketing Agency | Weblee Digital",
        description:
            "Learn about Weblee Digital, a creative web design and digital marketing agency helping businesses grow with custom websites, apps, branding and SEO.",
        keywords:
            "about Weblee Digital, web design agency, digital agency, creative agency, website design company, digital marketing company",
        path: "/about",
    },
    services: {
        title: "Web Design, SEO & Digital Marketing Services | Weblee Digital",
        description:
            "Explore our digital services: website design and development, e-commerce, web and mobile apps, logo and brand design, SEO, content writing and social media.",
        keywords:
            "digital services, web design services, website development services, SEO services, digital marketing services, app development services, branding services",
        path: "/services",
    },
    portfolio: {
        title: "Web Design Portfolio & Case Studies | Weblee Digital",
        description:
            "Browse our portfolio of website design, web development, mobile app, video animation and logo design projects for businesses across industries.",
        keywords:
            "web design portfolio, website design examples, web development portfolio, app development portfolio, logo design portfolio, digital agency portfolio",
        path: "/portfolio",
    },
    pricing: {
        title: "Web Design Packages & Plans | Weblee Digital",
        description:
            "Compare affordable website design, e-commerce, app development, branding, SEO and digital marketing packages. Find the right plan for your business.",
        keywords:
            "web design packages, website design cost, affordable web design, website packages, SEO packages, digital marketing packages, logo design packages",
        path: "/pricing",
    },
    contact: {
        title: "Contact Us | Get a Free Website Consultation | Weblee Digital",
        description:
            "Contact Weblee Digital for a free consultation on web design, app development, branding or digital marketing. Tell us about your project today.",
        keywords:
            "contact web design agency, free website consultation, hire web designer, web development quote, digital marketing consultation",
        path: "/contact",
    },

    /* ============= Services: Websites & Apps ============= */

    "custom-website": {
        title: "Website Design & Development Services | Weblee Digital",
        description:
            "Professional website design and development services. We build custom, responsive, SEO-friendly websites that look great and turn visitors into customers.",
        keywords:
            "website design, web development services, custom website design, responsive web design, website development company, professional web design, WordPress website development",
        path: "/services/web-development",
    },
    "ecommerce-solution": {
        title: "E-Commerce Website Development Services | Weblee Digital",
        description:
            "Custom e-commerce website design and development. We build secure, mobile-friendly online stores with easy checkout to help you sell more online.",
        keywords:
            "ecommerce website development, ecommerce web design, online store design, ecommerce development company, ecommerce solutions, online shop website",
        path: "/services/ecommerce-solution",
    },
    "web-app-solution": {
        title: "Custom Web Application Development | Weblee Digital",
        description:
            "Custom web application development for businesses. We design and build secure, scalable web apps, portals and dashboards tailored to your needs.",
        keywords:
            "web application development, custom web app development, web app development company, SaaS development, custom software development, web portal development",
        path: "/services/web-app-solution",
    },
    "mobile-apps": {
        title: "Mobile App Development Services | Weblee Digital",
        description:
            "Mobile app development services for startups and businesses. We design and build fast, user-friendly apps from concept and UI/UX design to launch.",
        keywords:
            "mobile app development, app development company, mobile app design, iOS app development, Android app development, custom app development",
        path: "/services/mobile-apps",
    },

    /* ============= Services: Design & Media ============= */

    "video-animation": {
        title: "Explainer Video & 2D Animation Services | Weblee Digital",
        description:
            "2D explainer video and animation services for businesses. Script-to-screen videos that explain your product, engage your audience and boost conversions.",
        keywords:
            "explainer video, 2D animation services, animated explainer video, video animation company, motion graphics, promotional video production",
        path: "/services/video-animation",
    },
    "branding-design": {
        title: "Branding & Brand Identity Design Services | Weblee Digital",
        description:
            "Professional branding and brand identity design. We create logos, color palettes, typography and brand guidelines that make your business memorable.",
        keywords:
            "branding agency, brand identity design, branding services, brand design, corporate identity design, brand strategy",
        path: "/services/branding-and-design",
    },
    "logo-design": {
        title: "Custom Logo Design Services | Weblee Digital",
        description:
            "Professional custom logo design services for businesses and startups. Get a unique, memorable logo that represents your brand across web and print.",
        keywords:
            "logo design, custom logo design, logo design services, professional logo design, business logo design, logo designer",
        path: "/services/logo-design",
    },

    /* ============= Services: Marketing & Content ============= */

    seo: {
        title: "SEO Services | Search Engine Optimization | Weblee Digital",
        description:
            "Results-driven SEO services to help you rank higher on Google. Keyword research, on-page and technical SEO, link building and local SEO to grow traffic.",
        keywords:
            "SEO services, search engine optimization, SEO agency, SEO company, local SEO, technical SEO, on-page SEO, Google ranking",
        path: "/services/seo",
    },
    "content-writing": {
        title: "Content Writing Services | Website & SEO Content | Weblee Digital",
        description:
            "Professional content writing services for websites, blogs and marketing. SEO-friendly copy that engages readers, builds trust and ranks on Google.",
        keywords:
            "content writing services, website content writing, SEO content writing, blog writing services, copywriting services, web copywriter",
        path: "/services/content-writing",
    },
    "social-media-marketing": {
        title: "Social Media Management & Marketing Services | Weblee Digital",
        description:
            "Social media management and marketing for Facebook, Instagram, LinkedIn and more. Grow your followers, engagement and leads with a clear strategy.",
        keywords:
            "social media management, social media marketing, social media agency, Instagram marketing, Facebook marketing, social media services",
        path: "/services/social-media-management",
    },
    "digital-marketing-services": {
        title: "Digital Marketing Services & Agency | Weblee Digital",
        description:
            "Full-service digital marketing agency offering SEO, PPC, social media, email and content marketing to grow your traffic, leads and online sales.",
        keywords:
            "digital marketing agency, digital marketing services, online marketing, PPC management, internet marketing, performance marketing",
        path: "/services/digital-marketing",
    },

    /* ===================== Legal Pages ===================== */

    "terms-and-conditions": {
        title: "Terms and Conditions | Web Design Services | Weblee Digital",
        description:
            "Read the terms and conditions that apply when you use the Weblee Digital website or hire us for web design, development and digital marketing services.",
        keywords: "Weblee Digital terms and conditions, terms of service",
        path: "/terms-and-conditions",
    },
    "privacy-policy": {
        title: "Privacy Policy | How We Protect Your Data | Weblee Digital",
        description:
            "Read the Weblee Digital privacy policy to learn what personal information we collect, how we use and protect it, and the choices you have about your data.",
        keywords: "Weblee Digital privacy policy, data protection",
        path: "/privacy-policy",
    },
    "refund-policy": {
        title: "Refund Policy | Service Refund Terms | Weblee Digital",
        description:
            "Read the Weblee Digital refund policy to understand when refunds apply, how to request one, and how we handle web design and digital marketing projects.",
        keywords: "Weblee Digital refund policy, money back policy",
        path: "/refund-policy",
    },
};