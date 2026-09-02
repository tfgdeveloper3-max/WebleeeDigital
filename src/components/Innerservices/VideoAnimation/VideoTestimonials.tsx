import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";

type Testimonial = {
    name: string;
    quote: string;
    featured?: boolean;
};

const TESTIMONIALS: Testimonial[] = [
    {
        name: "Tom William",
        quote:
            "We had a complicated product that was difficult to explain in a sentence, let alone a sales meeting. The animation changed that completely. Suddenly people understood what we did within a minute.",
    },
    {
        name: "Elena Peter",
        quote:
            "I didn’t want another generic corporate video. I wanted something with personality. Weblee actually listened to that and gave us something that feels like our brand rather than an advertisement anyone could have made.",
        featured: true,
    },
    {
        name: "Chris David",
        quote:
            "The final video was the first piece of content we’ve made where people kept asking, ‘Who did this for you?’ That was probably the best compliment we could have received.",
    },
];

function StarIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 20 20" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1.6l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 15l-5.2 2.9 1-5.9L1.5 7.8l5.9-.8L10 1.6Z" />
        </svg>
    );
}

function Stars({ color = "text-amber-400", size = "h-5 w-5" }: { color?: string; size?: string }) {
    return (
        <div className={`flex items-center justify-center gap-1 ${color}`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className={size} />
            ))}
        </div>
    );
}

function getInitials(name: string): string {
    const parts = name.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? "";
    const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
    return (first + last).toUpperCase();
}

const cardVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        rotateY: direction > 0 ? 15 : -15,
        scale: 0.9,
    }),
    center: {
        x: 0,
        opacity: 1,
        rotateY: 0,
        scale: 1,
        transition: {
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
        },
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -300 : 300,
        opacity: 0,
        rotateY: direction > 0 ? -15 : 15,
        scale: 0.9,
        transition: {
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function TestimonialsSection() {
    const [[current, direction], setCurrent] = useState([0, 1]);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [isPaused, current]);

    const paginate = (newDirection: number) => {
        setCurrent([((current + newDirection) + TESTIMONIALS.length) % TESTIMONIALS.length, newDirection]);
    };

    const activeTestimonial = TESTIMONIALS[current];

    return (
        // overflow-x-hidden lagaya hai extra safety ke liye
        <section className="relative w-full overflow-x-hidden bg-[#fdfcf7] px-6 py-20 font-atyp md:px-12 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
                <motion.span
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="mb-6 inline-flex w-fit items-center rounded-full bg-neutral-200/70 px-5 py-2 text-sm text-neutral-700"
                >
                    Reviews
                </motion.span>

                <motion.h2
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-[36px] font-light leading-[1.1] text-neutral-900 sm:text-[44px] lg:text-[52px]"
                >
                    THE BUSINESSES WE'VE <span className="font-semibold text-brand">HELPED</span> MOVE FORWARD
                </motion.h2>

                <motion.p
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-neutral-500"
                >
                    We believe the best proof of our work comes from the people who experience it firsthand. Explore the stories, experiences, and results that have made our clients part of the Weblee journey. 
                </motion.p>
            </div>

            {/* Slider Container - overflow-hidden se horizontal scroll band hoga */}
            <div
                className="relative mx-auto mt-16 max-w-2xl overflow-hidden"
                style={{ perspective: 1200 }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* mode="wait" se pehle wala card poora chala jayega phir naya aayega */}
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={current}
                        custom={direction}
                        variants={cardVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className={`w-full flex flex-col items-center rounded-[24px] px-8 py-12 text-center shadow-2xl md:px-12 md:py-16 ${activeTestimonial.featured
                            ? "bg-emerald-50 shadow-[0_25px_50px_-20px_rgba(16,94,62,0.2)]"
                            : "border border-neutral-200 bg-white"
                            }`}
                    >
                        <div
                            className={`flex items-center justify-center rounded-full border-4 border-white bg-brand font-semibold text-white shadow-lg ${activeTestimonial.featured
                                ? "h-28 w-28 text-2xl"
                                : "h-24 w-24 text-xl"
                                }`}
                        >
                            {getInitials(activeTestimonial.name)}
                        </div>

                        <h3 className="mt-6 text-xl font-bold text-neutral-900">{activeTestimonial.name}</h3>
                        <div className="my-6 h-px w-full max-w-[220px] bg-neutral-200" />

                        <Stars />

                        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-neutral-600">
                            {activeTestimonial.quote}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="mt-10 flex justify-center gap-3">
                {TESTIMONIALS.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => paginate(i === current ? 1 : (i > current ? 1 : -1))}
                        className={`h-3 rounded-full transition-all duration-500 ${current === i ? "w-8 bg-brand" : "w-3 bg-neutral-300 hover:bg-neutral-400"
                            }`}
                        aria-label={`Go to testimonial ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}