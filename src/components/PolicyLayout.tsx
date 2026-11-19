import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

export const COMPANY = {
    name: "Weblee Digital",
    website: "https://webleedigital.com/",
    email: "support@webleedigital.com",
    phone: "(626) 740 1517",
    phoneHref: "tel:+16267401517",
    address: "5101 Santa Monica Blvd Ste 8, Los Angeles, CA 90029",
};

export const POLICY_LINKS = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Refund & Cancellation Policy", href: "/refund-policy" },
];

export type ListItem = string | { label: string; text: string };

export type Block =
    | { type: "p"; text: string }
    | { type: "list"; items: ListItem[]; columns?: 1 | 2 }
    | { type: "sub"; title: string; blocks: Block[] }
    | { type: "note"; text: string }
    | { type: "contact"; subject?: string };

export type PolicySection = {
    id: string;
    title: string;
    highlight?: boolean;
    blocks: Block[];
};

export const p = (text: string): Block => ({ type: "p", text });
export const list = (items: ListItem[], columns: 1 | 2 = 1): Block => ({ type: "list", items, columns });
export const sub = (title: string, blocks: Block[]): Block => ({ type: "sub", title, blocks });
export const note = (text: string): Block => ({ type: "note", text });
export const contact = (subject?: string): Block => ({ type: "contact", subject });

const EMAIL_RE = /([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;
const IS_EMAIL = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

function RichText({ text }: { text: string }) {
    const parts = text.split(EMAIL_RE);
    return (
        <>
            {parts.map((part, i) =>
                IS_EMAIL.test(part) ? (
                    <a
                        key={i}
                        href={`mailto:${part}`}
                        className="font-medium text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
                    >
                        {part}
                    </a>
                ) : (
                    <span key={i}>{part}</span>
                ),
            )}
        </>
    );
}

function CheckIcon() {
    return (
        <svg viewBox="0 0 20 20" fill="none" className="mt-[3px] h-4 w-4 shrink-0" aria-hidden="true">
            <circle cx="10" cy="10" r="10" className="fill-brand-tint" />
            <path d="M6 10.5l2.5 2.5L14 7.5" className="stroke-brand" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function ContactCard({ subject }: { subject?: string }) {
    const items = [
        {
            label: "Email",
            value: COMPANY.email,
            href: `mailto:${COMPANY.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`,
            icon: (
                <path d="M4 6h16v12H4z M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
            ),
        },
        {
            label: "Phone / WhatsApp",
            value: COMPANY.phone,
            href: COMPANY.phoneHref,
            icon: (
                <path
                    d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            ),
        },
        {
            label: "Business address",
            value: COMPANY.address,
            href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}`,
            icon: (
                <>
                    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0112 2.5a7 7 0 017 7C19 14.8 12 21 12 21z" strokeLinejoin="round" />
                    <circle cx="12" cy="9.5" r="2.5" />
                </>
            ),
        },
    ];

    return (
        <div className="mt-6 overflow-hidden rounded-2xl border border-brand/15 bg-brand-tint/60">
            <div className="grid gap-px bg-brand/10 sm:grid-cols-3">
                {items.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        target={item.label === "Business address" ? "_blank" : undefined}
                        rel={item.label === "Business address" ? "noreferrer" : undefined}
                        className="group flex flex-col gap-3 bg-white p-5 transition-colors hover:bg-brand-tint focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5" aria-hidden="true">
                                {item.icon}
                            </svg>
                        </span>
                        <span className="text-sm text-gray-500">{item.label}</span>
                        <span className="font-medium leading-snug text-gray-900 group-hover:text-brand">{item.value}</span>
                    </a>
                ))}
            </div>
            <div className="flex flex-col gap-1 px-5 py-4 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
                <span>
                    Company: <span className="font-medium text-gray-900">{COMPANY.name}</span>
                </span>
                <a href={COMPANY.website} className="font-medium text-brand hover:text-brand-dark">
                    webleedigital.com
                </a>
                {subject && (
                    <span>
                        Subject line: <span className="font-medium text-gray-900">{subject}</span>
                    </span>
                )}
            </div>
        </div>
    );
}

function RenderBlocks({ blocks, prefix }: { blocks: Block[]; prefix: string }) {
    let subIndex = 0;
    return (
        <>
            {blocks.map((block, i) => {
                switch (block.type) {
                    case "p":
                        return (
                            <p key={i} className="mt-4 text-[15.5px] leading-[1.75] text-gray-700 first:mt-0">
                                <RichText text={block.text} />
                            </p>
                        );
                    case "note":
                        return (
                            <p key={i} className="mt-5 rounded-xl border-l-4 border-brand bg-brand-tint px-5 py-4 text-[15px] leading-relaxed text-gray-800">
                                <RichText text={block.text} />
                            </p>
                        );
                    case "list":
                        return (
                            <ul
                                key={i}
                                className={`mt-4 grid gap-x-8 gap-y-2.5 ${block.columns === 2 ? "sm:grid-cols-2" : ""}`}
                            >
                                {block.items.map((item, j) => (
                                    <li key={j} className="flex gap-3 text-[15.5px] leading-relaxed text-gray-700">
                                        <CheckIcon />
                                        {typeof item === "string" ? (
                                            <span>
                                                <RichText text={item} />
                                            </span>
                                        ) : (
                                            <span>
                                                <span className="font-medium text-gray-900">{item.label}:</span>{" "}
                                                <RichText text={item.text} />
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        );
                    case "sub": {
                        subIndex += 1;
                        const num = `${prefix}.${subIndex}`;
                        return (
                            <div key={i} className="mt-7">
                                <h3 className="flex items-baseline gap-3 text-lg font-medium text-gray-900">
                                    <span className="text-brand tabular-nums">{num}</span>
                                    <span>{block.title}</span>
                                </h3>
                                <div className="mt-3 border-l border-gray-200 pl-5">
                                    <RenderBlocks blocks={block.blocks} prefix={num} />
                                </div>
                            </div>
                        );
                    }
                    case "contact":
                        return <ContactCard key={i} subject={block.subject} />;
                    default:
                        return null;
                }
            })}
        </>
    );
}

type PolicyLayoutProps = {
    title: string;
    intro: string;
    currentHref: string;
    sections: PolicySection[];
    closing?: ReactNode;
};

export default function PolicyLayout({ title, intro, currentHref, sections, closing }: PolicyLayoutProps) {
    const [active, setActive] = useState(sections[0]?.id ?? "");
    const [showTop, setShowTop] = useState(false);

    const ids = useMemo(() => sections.map((s) => s.id), [sections]);

    /* Scroll-spy for the table of contents */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible[0]) setActive(visible[0].target.id);
            },
            { rootMargin: "-120px 0px -60% 0px", threshold: 0 },
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [ids]);

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 900);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const jumpTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        history.replaceState(null, "", `#${id}`);
    };

    return (
        <main className="font-atyp bg-white text-gray-900">
            {/* ---------------- Hero ---------------- */}
            {/* Light background so the site's Navbar (dark links + logo) stays visible, matching the Home hero */}
            <section className="relative overflow-hidden bg-gradient-to-b from-brand-tint via-white to-white">
                {/* Decorative rings */}
                <svg
                    className="pointer-events-none absolute -right-40 -top-24 h-[560px] w-[560px] text-brand/15 animate-hero-float"
                    viewBox="0 0 520 520"
                    fill="none"
                    aria-hidden="true"
                >
                    <circle cx="260" cy="260" r="259" stroke="currentColor" />
                    <circle cx="260" cy="260" r="190" stroke="currentColor" />
                    <circle cx="260" cy="260" r="120" stroke="currentColor" />
                </svg>
                <svg
                    className="pointer-events-none absolute -bottom-48 -left-40 h-[460px] w-[460px] text-brand/10"
                    viewBox="0 0 520 520"
                    fill="none"
                    aria-hidden="true"
                >
                    <circle cx="260" cy="260" r="259" stroke="currentColor" />
                    <circle cx="260" cy="260" r="180" stroke="currentColor" />
                </svg>

                <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 pb-16 pt-36 text-center sm:px-8 lg:pb-20 lg:pt-48">
                    <nav aria-label="Breadcrumb" className="animate__animated animate__fadeIn text-sm text-gray-500">
                        <Link to="/" className="transition-colors hover:text-brand">
                            Home
                        </Link>
                        <span className="mx-2 text-gray-300">/</span>
                        <span className="font-medium text-brand">{title}</span>
                    </nav>

                    <h1 className="animate__animated animate__fadeInUp mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        {title}
                    </h1>
                    <p className="animate__animated animate__fadeInUp mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg [animation-delay:120ms]">
                        {intro}
                    </p>

                    {/* Switch between policies */}
                    <div className="animate__animated animate__fadeInUp mt-9 flex flex-wrap justify-center gap-2 [animation-delay:220ms]">
                        {POLICY_LINKS.map((link) => {
                            const isCurrent = link.href === currentHref;
                            return (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    aria-current={isCurrent ? "page" : undefined}
                                    className={`rounded-full border px-5 py-2.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${isCurrent
                                            ? "border-brand bg-brand font-medium text-white"
                                            : "border-gray-200 bg-white text-gray-700 hover:border-brand hover:text-brand"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ---------------- Body ---------------- */}
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-20">
                {/* Mobile TOC */}
                <details className="group mb-10 rounded-2xl border border-gray-200 lg:hidden">
                    <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-medium">
                        On this page
                        <svg viewBox="0 0 20 20" className="h-5 w-5 text-brand transition-transform group-open:rotate-180" fill="none" aria-hidden="true">
                            <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </summary>
                    <ol className="max-h-80 space-y-1 overflow-y-auto border-t border-gray-100 px-3 py-3">
                        {sections.map((s, i) => (
                            <li key={s.id}>
                                <button
                                    type="button"
                                    onClick={() => jumpTo(s.id)}
                                    className="flex w-full gap-3 rounded-lg px-2 py-2 text-left text-sm text-gray-700 hover:bg-brand-tint"
                                >
                                    <span className="w-5 shrink-0 text-brand tabular-nums">{i + 1}</span>
                                    {s.title}
                                </button>
                            </li>
                        ))}
                    </ol>
                </details>

                <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
                    {/* Desktop TOC */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-28">
                            <p className="mb-4 text-sm font-medium text-gray-500">On this page</p>
                            <ol className="max-h-[calc(100vh-14rem)] space-y-0.5 overflow-y-auto pr-2">
                                {sections.map((s, i) => {
                                    const isActive = active === s.id;
                                    return (
                                        <li key={s.id}>
                                            <button
                                                type="button"
                                                onClick={() => jumpTo(s.id)}
                                                className={`flex w-full gap-3 rounded-lg px-3 py-2 text-left text-sm leading-snug transition-colors focus-visible:outline-2 focus-visible:outline-brand ${isActive ? "bg-brand-tint font-medium text-brand" : "text-gray-600 hover:text-gray-900"
                                                    }`}
                                            >
                                                <span className={`w-5 shrink-0 tabular-nums ${isActive ? "text-brand" : "text-gray-400"}`}>{i + 1}</span>
                                                {s.title}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ol>

                            <div className="mt-8 rounded-2xl bg-gray-50 p-5">
                                <p className="text-sm font-medium text-gray-900">Questions about this policy?</p>
                                <p className="mt-1 text-sm leading-relaxed text-gray-600">Our support team is happy to help.</p>
                                <a
                                    href={`mailto:${COMPANY.email}`}
                                    className="btn-sweep relative mt-4 inline-flex overflow-hidden rounded-full bg-cta-gradient px-5 py-2.5 text-sm font-medium text-white"
                                >
                                    <span className="relative z-10">Email support</span>
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Content */}
                    <article className="min-w-0 max-w-3xl">
                        {sections.map((section, i) => {
                            const num = String(i + 1);
                            return (
                                <section
                                    key={section.id}
                                    id={section.id}
                                    className={`scroll-mt-28 py-10 ${section.highlight
                                            ? "my-6 -mx-5 rounded-3xl bg-brand-tint/60 px-5 sm:-mx-8 sm:px-8"
                                            : "border-b border-gray-100 first:pt-0 last:border-b-0"
                                        }`}
                                >
                                    <h2 className="flex items-start gap-4 text-2xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-[28px]">
                                        <span className="mt-0.5 flex h-9 min-w-9 items-center justify-center rounded-full bg-brand px-2 text-base font-medium text-white tabular-nums">
                                            {num}
                                        </span>
                                        <span>{section.title}</span>
                                    </h2>
                                    <div className="mt-5">
                                        <RenderBlocks blocks={section.blocks} prefix={num} />
                                    </div>
                                </section>
                            );
                        })}

                        {closing && <div className="mt-6">{closing}</div>}
                    </article>
                </div>
            </div>

            {/* Back to top */}
            <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                className={`fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-all hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
                    }`}
            >
                <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path d="M10 15V5M5 10l5-5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </main>
    );
}