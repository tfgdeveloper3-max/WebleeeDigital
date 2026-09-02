import { motion, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useContactModal } from "../../../context/ContactModalContext";

const FEATURES = [
    {
        title: "What’s Your Story Missing?",
        description:
            "A strong idea can still get lost when the message is too complex, the visuals feel generic, or the story fails to hold attention. Without the right pacing and visual direction, even valuable content can become easy to skip.",
    },
    {
        title: "How We Solve It",
        description:
            "We give your message a visual rhythm and a reason to keep watching. Through purposeful scripting, thoughtful storyboarding, precise animation, and carefully crafted sound and motion, we turn your ideas into clear, engaging experiences that connect.",
    },
];

const textContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const textItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

const img1Variants: Variants = {
    hidden: { x: 120, y: -60, opacity: 0, scale: 0.85, filter: "blur(6px)" },
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
    },
};

const img2Variants: Variants = {
    hidden: { x: -120, y: 60, opacity: 0, scale: 0.85, filter: "blur(6px)" },
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 },
    },
};

export default function VideoAnimationAboutSection() {
    const { openModal } = useContactModal();

    return (
        <section className="relative w-full bg-[#fdfcf7] px-6 py-20 font-atyp md:px-12 lg:py-28">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
                <motion.div
                    variants={textContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <motion.span
                        variants={textItem}
                        className="mb-6 inline-flex w-fit items-center rounded-full bg-neutral-200/70 px-5 py-2 text-sm text-neutral-700"
                    >
                        What We Do
                    </motion.span>

                    <motion.h2
                        variants={textItem}
                        className="text-[32px] font-light leading-[1.2] text-neutral-900 sm:text-[38px] lg:text-[42px]"
                    >
                        We Turn Ideas Into{" "}
                        <span className="font-semibold text-brand">Stories</span>{" "}
                        People Can See
                    </motion.h2>

                    <motion.p
                        variants={textItem}
                        className="mt-6 max-w-xl text-[15px] leading-relaxed text-neutral-500"
                    >
                        We script, storyboard, design, and animate custom videos that make your message easier to understand and harder to forget whether you’re explaining a product, introducing a brand, or capturing attention on social media.
                    </motion.p>

                    <motion.div variants={textItem} className="mt-8 flex items-center gap-2">
                        <button onClick={() => openModal()} className="btn-sweep relative overflow-hidden rounded-full bg-cta-gradient px-6 py-3 text-sm font-medium text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-lg hover:shadow-pink-500/40">
                            <span className="relative z-10">Get In Touch</span>
                        </button>

                        <button
                            onClick={() => openModal()}
                            aria-label="Go"
                            className="btn-sweep relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-cta-gradient text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:rotate-45 hover:shadow-lg hover:shadow-orange-500/40"
                        >
                            <span className="relative z-10">
                                <ArrowUpRight strokeWidth={2.75} />
                            </span>
                        </button>
                    </motion.div>

                    <motion.div variants={textItem} className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
                        {FEATURES.map((f) => (
                            <div key={f.title}>
                                <h3 className="font-semibold text-neutral-900">{f.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                                    {f.description}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <div className="relative mx-auto aspect-[4/5] w-full max-w-md md:max-w-none">
                    <motion.img
                        src="/images/VideoAnimation1.png"
                        alt="Motion graphics and animation frame on screen"
                        variants={img1Variants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="absolute right-0 top-0 w-[72%] rounded-[20px] border-4 border-white object-cover shadow-2xl"
                        draggable={false}
                    />
                    <motion.img
                        src="/images/VideoAnimation2.png"
                        alt="Animator storyboarding on a tablet"
                        variants={img2Variants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="absolute bottom-0 left-0 z-10 w-[55%] rounded-[20px] border-4 border-white object-cover shadow-2xl"
                        draggable={false}
                    />
                </div>
            </div>
        </section>
    );
}