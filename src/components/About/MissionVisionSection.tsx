import { motion, type Variants } from "motion/react";
import { Target, Eye, Sparkles } from "lucide-react";
import { useRevealPhase } from "../BlindsReveal";

const ITEMS = [
    {
        icon: <Target size={24} strokeWidth={2.25} />,
        title: "Our Mission",
        subtitle: "Make Digital Matter.",
        text: "Our mission is to turn ambitious ideas into meaningful digital experiences combining creativity, technology, and strategy to create solutions that are beautiful, purposeful, and built around real business goals.",
    },
    {
        icon: <Eye size={24} strokeWidth={2.25} />,
        title: "Our Vision",
        subtitle: "To Shape What’s Next.",
        text: "We envision a digital world where brands are not simply present they are memorable. We aim to set new standards in design, technology, and digital experiences that help businesses evolve and lead.",
    },
    {
        icon: <Sparkles size={24} strokeWidth={2.25} />,
        title: "What Sets Us Apart",
        subtitle: "We Think Beyond the Deliverable.",
        text: "We don’t believe in one-size-fits-all digital solutions. We look at the bigger picture, connect every digital touchpoint, and create experiences that feel distinctly yours from the first idea to long-term growth.",
    },
];

const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const iconStyle: Variants = {
    hidden: (i: number) => ({
        backgroundColor: "#ffffff",
        color: "#147237",
        transition: { duration: 2, ease: [0.16, 1, 0.3, 1], delay: (2 - i) * 0.3 },
    }),
    visible: (i: number) => ({
        backgroundColor: "#147237",
        color: "#ffffff",
        transition: { duration: 2, ease: [0.16, 1, 0.3, 1], delay: 1 + i * 0.4 },
    }),
};

export default function MissionVisionSection() {
    const phase = useRevealPhase();

    return (
        <section className="w-full bg-[#f5f5f4] py-20 font-atyp md:py-28">
            <div className="mx-auto max-w-[1550px] px-6 md:px-12">
                <motion.div
                    className="mx-auto max-w-2xl text-center"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <motion.span
                        variants={item}
                        className="mb-6 inline-flex w-fit items-center rounded-full bg-neutral-200 px-5 py-2 text-sm text-neutral-700"
                    >
                        Why We Do This
                    </motion.span>

                    <motion.h2
                        variants={item}
                        className="text-[32px] font-light leading-[1.2] text-neutral-900 sm:text-[38px] lg:text-[42px]"
                    >
                        The Strategy Behind{" "}
                        <span className="font-semibold text-brand">Weblee</span>
                    </motion.h2>
                </motion.div>

                <motion.div
                    className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {ITEMS.map((it, i) => (
                        <motion.div
                            key={it.title}
                            variants={item}
                            className="flex flex-col rounded-[24px] border border-neutral-200 bg-white p-8"
                        >
                            <motion.div
                                custom={i}
                                variants={iconStyle}
                                initial="hidden"
                                animate={phase}
                                className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#147237]"
                            >
                                {it.icon}
                            </motion.div>

                            <h3 className="mt-6 text-xl font-semibold text-neutral-900">{it.title}</h3>
                            <p className="mt-1 text-[15px] font-semibold text-brand">{it.subtitle}</p>
                            <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">{it.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}