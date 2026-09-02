import { motion, type Variants } from "motion/react";

const STATS = [
    { value: "8+", label: "Years In Business" },
    { value: "1,200+", label: "Projects Delivered" },
    { value: "500+", label: "Happy Clients" },
    { value: "45+", label: "Team Members" },
];

const headerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

const headerItem: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
};

const statItem: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function StatsSection() {
    return (
        <section className="sweep-light relative w-full overflow-hidden bg-gradient-to-br from-[#123f24] via-brand to-[#3f9463] bg-[length:200%_200%] py-16 font-atyp animate-gradient-shift md:py-20">
            <motion.div
                className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"
                animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#91CD89]/20 blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1.2, 1, 1.2] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-[1] mx-auto max-w-6xl px-6 text-center md:px-12">
                <motion.div
                    variants={headerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                >
                    <motion.span
                        variants={headerItem}
                        className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-widest text-white/80 backdrop-blur-sm"
                    >
                        By The Numbers
                    </motion.span>

                    <motion.h2 variants={headerItem} className="text-2xl font-light text-white sm:text-3xl">
                        Growth We're{" "}
                        <span className="relative font-extrabold text-white">
                            Proud Of
                            <span className="absolute inset-0 blur-md text-white/70">Proud Of</span>
                        </span>
                    </motion.h2>
                </motion.div>

                <motion.div
                    className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
                >
                    {STATS.map((stat) => (
                        <motion.div key={stat.label} variants={statItem}>
                            <p className="text-4xl font-bold text-white sm:text-5xl">{stat.value}</p>
                            <p className="mt-2 text-sm text-white/75">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style>{`
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient-shift {
                    animation: gradient-shift 10s ease-in-out infinite;
                }
                .sweep-light::before {
                    content: '';
                    position: absolute;
                    top: 0; left: -100%;
                    width: 50%; height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
                    transform: skewX(-20deg);
                    z-index: 1;
                    animation: sweep 6s ease-in-out infinite;
                }
                @keyframes sweep {
                    0% { left: -100%; }
                    100% { left: 200%; }
                }
            `}</style>
        </section>
    );
}