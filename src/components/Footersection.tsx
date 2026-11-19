import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, type Variants } from "motion/react";
import $ from "../lib/jquery-setup";
import "jquery-ui-dist/jquery-ui";
import { Link } from "react-router-dom";

const HEADLINE = "Curious to See What Your Brand Could Become?";
const BRAND_NAME = "Weblee";

const QUICK_LINKS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/work" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
    { label: "Web Development", href: "/services/web-development" },
    { label: "UX/UI Design", href: "/services/ux-ui-design" },
    { label: "Brand Identity", href: "/services/brand-identity" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
];

const SOCIALS = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/WebleeDigital",
        hoverClass: "hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white",
        icon: (
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/webleedigital/",
        hoverClass:
            "hover:border-transparent hover:bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)] hover:text-white",
        icon: (
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4.4" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" />
            </svg>
        ),
    },
];

function ArrowIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

const wordmarkContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } },
};

const letterVariants: Variants = {
    hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
};

function BrandWordmark() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [scaleX, setScaleX] = useState(1);

    useLayoutEffect(() => {
        const measure = () => {
            if (!containerRef.current || !textRef.current) return;
            const containerWidth = containerRef.current.offsetWidth;
            textRef.current.style.transform = "scaleX(1)";
            const textWidth = textRef.current.scrollWidth;
            if (textWidth > 0) {
                setScaleX(containerWidth / textWidth);
            }
        };

        measure();

        const ro = new ResizeObserver(measure);
        if (containerRef.current) ro.observe(containerRef.current);
        window.addEventListener("resize", measure);

        return () => {
            ro.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, []);

    return (
        <motion.div
            ref={containerRef}
            className="pointer-events-none relative mt-4 flex w-full justify-center overflow-hidden select-none"
            style={{ height: "clamp(60px, 14vw, 150px)" }}
            variants={wordmarkContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
        >
            <div
                ref={textRef}
                className="flex leading-none tracking-tight whitespace-nowrap"
                style={{
                    fontSize: "clamp(70px, 16vw, 220px)",
                    fontWeight: 800,
                    backgroundImage:
                        "linear-gradient(90deg, #1f9048 0%, #e7f3ec 35%, #ffffff 55%, #e7f3ec 75%, #147237 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    filter: "drop-shadow(0 18px 22px rgba(0,0,0,0.55))",
                    transform: `scaleX(${scaleX})`,
                    transformOrigin: "center",
                }}
            >
                {BRAND_NAME.split("").map((char, i) => (
                    <motion.span key={i} variants={letterVariants} className="inline-block">
                        {char}
                    </motion.span>
                ))}
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-950 to-transparent" />
        </motion.div>
    );
}

export default function FooterSection() {
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const revealRefs = useRef<(HTMLElement | null)[]>([]);
    const subscribeRef = useRef<HTMLDivElement>(null);
    const socialRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        const el = headlineRef.current;
        if (!el) return;

        const words = el.querySelectorAll<HTMLSpanElement>("[data-word]");
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    words.forEach((word, i) => {
                        setTimeout(() => {
                            $(word).removeClass("opacity-0 translate-y-6").addClass("animate__animated animate__fadeInUp");
                        }, i * 70);
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        revealRefs.current.forEach((el) => {
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        $(el)
                            .removeClass("opacity-0")
                            .addClass("animate__animated animate__fadeInUp");
                        observer.disconnect();
                    }
                },
                { threshold: 0.2 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    useEffect(() => {
        if (!subscribeRef.current) return;
        const $el = $(subscribeRef.current);
        $el.tooltip({ position: { my: "center bottom-10", at: "center top" } });
        return () => {
            if ($el.data("ui-tooltip")) $el.tooltip("destroy");
        };
    }, []);

    useEffect(() => {
        const el = socialRefs.current[0]?.parentElement;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    socialRefs.current.forEach((a, i) => {
                        if (!a) return;
                        setTimeout(() => $(a).effect("bounce", { times: 2, distance: 6 }, 400), i * 90);
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <footer className="relative w-full overflow-hidden bg-neutral-950 pb-10 pt-20 font-atyp text-neutral-300 lg:pt-28">
            <div className="mx-auto max-w-6xl px-6 md:px-12">
                {/* Big scroll-revealed headline */}
                <h2
                    ref={headlineRef}
                    className="max-w-4xl text-[34px] font-light leading-[1.15] text-white sm:text-[46px] lg:text-[56px]"
                >
                    {HEADLINE.split(" ").map((word, i) => (
                        <span key={i} className="mr-3 inline-block overflow-hidden">
                            <span
                                data-word
                                className="inline-block translate-y-6 opacity-0"
                                style={{ animationDuration: "0.6s" }}
                            >
                                {word}
                            </span>
                        </span>
                    ))}
                </h2>

                <div
                    ref={(el) => { revealRefs.current[0] = el; }}
                    className="opacity-0 animate__delay-1s mt-8"
                >
                    <a
                        href="mailto:hello@yourbrand.com"
                        className="btn-sweep relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-cta-gradient px-7 py-4 text-sm font-medium text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-lg hover:shadow-pink-500/40"
                    >
                        <span className="relative z-10">Unlock what’s possible</span>
                        <span className="relative z-10">
                            <ArrowIcon />
                        </span>
                    </a>
                </div>

                {/* Columns */}
                <div className="mt-20 grid grid-cols-1 gap-12 border-t border-white/10 pt-14 md:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
                    <div
                        ref={(el) => { revealRefs.current[1] = el; }}
                        className="opacity-0"
                    >
                        <Link to="/" className="flex items-center">
                            <img
                                src="/images/Footerlogo.png"
                                alt="Weblee Digital"
                                title="Weblee Digital"
                                className="h-10 w-auto object-contain md:h-26"
                                draggable={false}
                            />
                        </Link>
                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-400">
                            The digital world is full of noise. We help ambitious brands create something worth noticing. Weblee exists for brands that see beyond the ordinary.

                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            {SOCIALS.map((s, i) => (
                                <a
                                    key={s.label}
                                    ref={(el) => { socialRefs.current[i] = el; }}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={s.label}
                                    title={s.label}
                                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-neutral-300 transition-all duration-300 hover:-translate-y-0.5 ${s.hoverClass}`}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div
                        ref={(el) => { revealRefs.current[2] = el; }}
                        className="opacity-0 animate__delay-1s"
                    >
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
                        <ul className="mt-5 flex flex-col gap-3">
                            {QUICK_LINKS.map((l) => (
                                <li key={l.label}>
                                    <a
                                        href={l.href}
                                        className="group inline-flex items-center gap-1 text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
                                    >
                                        {l.label}
                                        <span className="max-w-0 overflow-hidden text-brand transition-all duration-300 group-hover:max-w-[16px]">
                                            <ArrowIcon />
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        ref={(el) => { revealRefs.current[3] = el; }}
                        className="opacity-0 animate__delay-1s"
                    >
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
                        <ul className="mt-5 flex flex-col gap-3">
                            {SERVICE_LINKS.map((l) => (
                                <li key={l.label}>
                                    <a
                                        href={l.href}
                                        className="group inline-flex items-center gap-1 text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
                                    >
                                        {l.label}
                                        <span className="max-w-0 overflow-hidden text-brand transition-all duration-300 group-hover:max-w-[16px]">
                                            <ArrowIcon />
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div >

                    <div
                        ref={(el) => { revealRefs.current[4] = el; }}
                        className="opacity-0 animate__delay-2s"
                    >
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Stay In The Loop </h4>
                        <p className="mt-5 text-sm leading-relaxed text-neutral-400">
                            Be the first to discover our latest work, creative ideas, and digital experiments.
                        </p>

                        <div
                            ref={subscribeRef}
                            title="We'll never share your email"
                            className="mt-5 flex cursor-help items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 pl-5"
                        >
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
                            />
                            <button
                                type="button"
                                className="btn-sweep relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-cta-gradient text-white transition-transform duration-300 hover:scale-110"
                                aria-label="Subscribe"
                            >
                                <span className="relative z-10">
                                    <ArrowIcon />
                                </span>
                            </button>
                        </div>

                        <div className="mt-8 space-y-1 text-sm text-neutral-400">
                            <a href="mailto:support@webleedigital.com" className="block transition-colors hover:text-white">
                                support@webleedigital.com
                            </a>
                            <a href="tel:+16267401517" className="block transition-colors hover:text-white">
                                (626) 740 1517
                            </a>
                        </div>
                    </div>
                </div >

                {/* Bottom bar */}
                < div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-neutral-500 sm:flex-row" >
                    <p>© {new Date().getFullYear()} Weblee. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <Link to="/terms-and-conditions" className="transition-colors hover:text-white">Terms</Link>
                        <Link to="/privacy-policy" className="transition-colors hover:text-white">Privacy</Link>
                        <Link to="/refund-policy" className="transition-colors hover:text-white">Refund Policy</Link>
                    </div>

                    <p className="text-neutral-500">24/7 Support</p>
                </div >
            </div >

            < BrandWordmark />
        </footer >
    );
}