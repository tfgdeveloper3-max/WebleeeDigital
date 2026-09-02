"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useContactModal } from "../../../context/ContactModalContext";

interface Plan {
    name: string;
    price: string;
    bestSeller: boolean;
    features: string[];
}

function BrushIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
    return (
        <svg viewBox="0 0 24 24" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.5 3.5c1.5-1 3.5-1 4.9.4 1.4 1.4 1.4 3.4.4 4.9L11.5 17.1l-5.6 1.4 1.4-5.6L14.5 3.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <path d="M5.9 18.5c-.6 1.2-1.6 2-2.9 2.1 1-1.3 1-2.6.2-3.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
    );
}

// Same data as the official Services page → "Logo Design" tab
const PLANS: Plan[] = [
    { name: "Revamp Logo Package", price: "$34", bestSeller: false, features: ["2 Custom Logo Concepts", "By 2 Designers", "2 Revisions", "48-72 Hours TAT", "100% Money Back Guarantee"] },
    { name: "Startup Logo Package", price: "$64", bestSeller: false, features: ["4 Custom Logo Concepts", "By 2 Designers", "Unlimited Revisions", "48-72 Hours TAT", "100% Satisfaction Guarantee"] },
    { name: "Professional Logo Package", price: "$114", bestSeller: true, features: ["Unlimited Logo Concepts", "By 4 Industry Designers", "Free Custom Stationery Design", "Free File Formats (EPS, AI, PSD)", "Unlimited Revisions"] },
    { name: "Identity Logo Package", price: "$164", bestSeller: false, features: ["Unlimited Concepts By 8 Designers", "Free Icon Design", "1 Stationery Design Set", "2-3 Business Days TAT", "Free Unlimited Revisions"] },
    { name: "Corporate Logo Package", price: "$214", bestSeller: false, features: ["Unlimited Concepts By 6 Designers", "Free Custom Stationery Design", "Double Side Flyer / Brochure", "Email Signature Design", "24-48 Hours TAT"] },
    { name: "Elite Logo Package", price: "$414", bestSeller: false, features: ["Unlimited Concepts By 8 Designers", "2 Stationery Design Sets", "3 Page Custom Website Included", "Mobile Responsive", "All Final File Formats"] },
];

function PricingCard({
    plan,
    isActive,
    onHover,
    onLeave,
    onGetStarted,
}: {
    plan: Plan;
    isActive: boolean;
    onHover: () => void;
    onLeave: () => void;
    onGetStarted: () => void;
}) {
    return (
        <motion.div
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            animate={{
                backgroundColor: isActive ? "#3B8C4E" : "#FFFFFF",
                scale: isActive ? 1.05 : 1,
                y: isActive ? -10 : 0,
            }}
            className="relative flex w-[280px] shrink-0 flex-col rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] md:w-[300px]"
            style={{ transition: "background-color 400ms ease, transform 400ms ease" }}
        >
            {/* Best Seller Badge */}
            {plan.bestSeller && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                    <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-[#F2530F] via-[#DB1B3F] to-[#B23FC9] px-4 py-1 text-[10px] font-bold tracking-wider text-white shadow-lg">
                        BEST SELLER
                    </span>
                </div>
            )}

            {/* Icon */}
            <motion.div
                animate={{ backgroundColor: isActive ? "#FFFFFF" : "#3B8C4E" }}
                transition={{ duration: 0.4 }}
                className="flex h-10 w-10 items-center justify-center rounded-full"
            >
                <BrushIcon
                    className="h-5 w-5 transition-colors duration-300"
                    style={{ color: isActive ? "#3B8C4E" : "#FFFFFF" }}
                />
            </motion.div>

            {/* Plan Name */}
            <h3
                className="mt-4 text-lg font-bold transition-colors duration-300"
                style={{ color: isActive ? "#FFFFFF" : "#111111" }}
            >
                {plan.name}
            </h3>

            {/* Price */}
            <div className="mt-2 flex items-baseline gap-1">
                <span
                    className="text-2xl font-extrabold transition-colors duration-300"
                    style={{ color: isActive ? "#FFFFFF" : "#111111" }}
                >
                    {plan.price}
                </span>
            </div>

            {/* Features Box */}
            <div
                className="mt-5 flex flex-1 flex-col gap-2.5 rounded-2xl p-4 transition-colors duration-300"
                style={{ backgroundColor: isActive ? "#FFFFFF" : "#DCEBE1" }}
            >
                {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                        <span
                            className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full"
                            style={{ backgroundColor: "#3B8C4E" }}
                        >
                            <Check className="h-2 w-2 text-white" strokeWidth={3} />
                        </span>
                        <span
                            className="text-[13px] leading-snug transition-colors duration-300"
                            style={{ color: isActive ? "#374151" : "#6B7280" }}
                        >
                            {feature}
                        </span>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <button
                onClick={onGetStarted}
                className="mt-5 flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105"
                style={{
                    background: isActive
                        ? "#3B8C4E"
                        : "linear-gradient(90deg, #F2530F 0%, #DB1B3F 55%, #B23FC9 100%)",
                }}
            >
                Get Started
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </button>
        </motion.div>
    );
}

/* ============================= SECTION ============================= */

export default function LogoDesignPricingSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { openModal } = useContactModal();

    const sliderRef = useRef<HTMLDivElement>(null);

    const defaultActive = PLANS.findIndex((p) => p.bestSeller);
    const activeIndex = hoveredIndex ?? (defaultActive >= 0 ? defaultActive : 0);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
    }, []);

    const scrollSlider = (dir: "left" | "right") => {
        if (!sliderRef.current) return;
        const card = sliderRef.current.children[0] as HTMLElement | undefined;
        const width = card ? card.offsetWidth + 20 : 320;
        sliderRef.current.scrollBy({
            left: dir === "left" ? -width : width,
            behavior: "smooth",
        });
    };

    const handleGetStarted = (plan: Plan) => {
        openModal(
            `Interested in the "${plan.name}" package (Logo Design) — ${plan.price}.`
        );
    };

    return (
        <section id="pricing" className="w-full bg-[#F6F6F6] py-16 font-atyp md:py-20">
            <div className="mx-auto max-w-6xl px-6 md:px-12">
                {/* Header */}
                <div className="text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block rounded-full bg-[#B8C1BD] px-5 py-1.5 text-sm font-medium text-neutral-700"
                    >
                        Pricing
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-4 text-3xl font-light text-neutral-900 md:text-4xl"
                    >
                        CHOOSE THE <span className="font-bold text-brand">INVESTMENT</span> THAT FIT YOUR AMBITION
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mx-auto mt-3 max-w-xl text-[1rem] text-neutral-500"
                    >
                        Choose a package designed around your priorities, with the flexibility to scale as your brand grows.
                    </motion.p>
                </div>

                {/* ===== Slider ===== */}
                <div className="relative mt-10">
                    {/* Edge Fades */}
                    <div className="pointer-events-none absolute left-0 top-0 z-[5] h-full w-10 bg-gradient-to-r from-[#F6F6F6] to-transparent md:w-16" />
                    <div className="pointer-events-none absolute right-0 top-0 z-[5] h-full w-10 bg-gradient-to-l from-[#F6F6F6] to-transparent md:w-16" />

                    {/* Left Arrow */}
                    <button
                        onClick={() => scrollSlider("left")}
                        className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gray-200 bg-white/90 p-2 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:shadow-xl"
                    >
                        <ChevronLeft className="h-5 w-5 text-neutral-700" />
                    </button>

                    {/* Cards Track */}
                    <div className="overflow-hidden">
                        <div
                            ref={sliderRef}
                            className="scrollbar-hide flex gap-5 overflow-x-auto scroll-smooth px-10 py-6 md:px-14"
                        >
                            <AnimatePresence mode="wait">
                                {PLANS.map((plan, i) => (
                                    <motion.div
                                        key={plan.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: i * 0.06,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                    >
                                        <PricingCard
                                            plan={plan}
                                            isActive={activeIndex === i}
                                            onHover={() => setHoveredIndex(i)}
                                            onLeave={() => setHoveredIndex(null)}
                                            onGetStarted={() => handleGetStarted(plan)}
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scrollSlider("right")}
                        className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gray-200 bg-white/90 p-2 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:shadow-xl"
                    >
                        <ChevronRight className="h-5 w-5 text-neutral-700" />
                    </button>
                </div>
            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
}