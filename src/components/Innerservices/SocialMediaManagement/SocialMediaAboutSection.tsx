import { motion, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useContactModal } from "../../../context/ContactModalContext";

const FEATURES = [
    {
        title: "What’s Holding Your Social Presence Back?",
        description:
            "Posting more isn’t the same as growing. Inconsistent content, repetitive messaging, weak creative, and chasing likes without a clear strategy can leave your brand buried in the feed even when you have something worth saying.",
    },
    {
        title: "How We Execute",
        description:
            "We make every post earn its place in the feed with platform-specific strategies, create scroll-stopping content, manage real conversations, run targeted campaigns, and study performance to continuously sharpen what works.",
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

const imgVariants: Variants = {
    hidden: { y: 60, opacity: 0, scale: 0.92, filter: "blur(6px)" },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
    },
};

export default function SocialMediaAboutSection() {
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
                        We Turn Your Social Presence Into A{" "}
                        <span className="font-semibold text-brand">Brand People Want To Follow</span>
                    </motion.h2>

                    <motion.p
                        variants={textItem}
                        className="mt-6 max-w-xl text-[15px] leading-relaxed text-neutral-500"
                    >
                        We build and manage social ecosystems where strategy, creative content, community, and paid promotion work together giving your brand a consistent voice and turning everyday interactions into lasting audience relationships.
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

                <motion.div
                    className="relative mx-auto w-full max-w-md md:max-w-none"
                    variants={imgVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <img
                        src="/images/Services/Social-Media-Marketing.png"
                        alt="Online-store-dashboard-and-shopping-cart-representing-e-commerce-shopping-experience"
                        title="Online Store Dashboard"
                        className="w-full object-cover"
                        draggable={false}
                    />
                </motion.div>
            </div>
        </section>
    );
}