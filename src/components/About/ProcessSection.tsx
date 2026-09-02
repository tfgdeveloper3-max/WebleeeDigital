import { motion, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useContactModal } from "../../context/ContactModalContext";

const STEPS = [
    {
        number: "01",
        title: "Discover",
        description:
            "We start by understanding your business, your audience, and what success actually looks like for you before a single pixel gets designed.",
        filled: true,
    },
    {
        number: "02",
        title: "Design",
        description:
            "We shape ideas into clear concepts and visuals, refining the direction with you until it feels unmistakably like your brand.",
        filled: false,
    },
    {
        number: "03",
        title: "Develop",
        description:
            "Our developers bring the design to life with clean, scalable code, testing along the way so nothing breaks when it matters.",
        filled: false,
    },
    {
        number: "04",
        title: "Deliver & Support",
        description:
            "We launch, monitor, and stay close after go-live, so your digital presence keeps performing long after the project wraps.",
        filled: false,
    },
];

const headerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25, delayChildren: 0.05 } },
};

const headerItem: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
};

const rowItem: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.85, filter: "blur(6px)" },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function ProcessSection() {
    const { openModal } = useContactModal();

    return (
        <section className="relative w-full overflow-hidden bg-white py-20 font-atyp md:py-28">
            <div className="mx-auto max-w-[1550px] px-6 md:px-12">
                <motion.div
                    className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start"
                    variants={headerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className="lg:col-span-7">
                        <motion.span
                            variants={headerItem}
                            className="mb-6 inline-flex w-fit items-center rounded-full bg-neutral-200/70 px-5 py-2 text-sm text-neutral-700"
                        >
                            How We Work
                        </motion.span>

                        <motion.h2
                            variants={headerItem}
                            className="text-[35px] font-light leading-[1.15] text-neutral-900 sm:text-[40px] lg:text-[47px]"
                        >
                            A Process Built For{" "}
                            <span className="font-bold text-brand">Clarity, Not Chaos</span>
                        </motion.h2>
                    </div>

                    <div className="lg:col-span-5">
                        <motion.p variants={headerItem} className="text-[16px] pt-15 leading-relaxed text-neutral-500">
                            No surprises, no black boxes. Every project moves through the
                            same four stages, so you always know what's happening and why.
                        </motion.p>
                    </div>
                </motion.div>

                <div className="mt-16">
                    {STEPS.map((step, i) => (
                        <motion.div
                            key={step.number}
                            variants={rowItem}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            className={`grid grid-cols-1 items-center gap-6 py-10 md:grid-cols-12 md:gap-8 ${i !== 0 ? "border-t-2 border-neutral-400" : ""
                                }`}
                        >
                            <div className="md:col-span-3">
                                <span className="text-sm font-semibold text-brand">{step.number}</span>
                                <h3 className="mt-2 text-[26px] font-bold leading-tight text-neutral-900 lg:text-[30px]">
                                    {step.title}
                                </h3>
                            </div>

                            <div className="md:col-span-6 md:border-l-2 md:border-neutral-400 md:pl-10">
                                <p className="text-[15px] leading-relaxed text-neutral-500">{step.description}</p>
                            </div>

                            <div className="flex md:col-span-3 md:justify-end">
                                <button
                                    onClick={() => openModal()}
                                    className={`group flex h-36 w-36 shrink-0 flex-col items-center justify-center gap-1 rounded-full text-sm transition-colors duration-300 lg:h-40 lg:w-40 ${step.filled
                                        ? "bg-brand text-white hover:bg-neutral-900"
                                        : "border border-neutral-300 text-neutral-900 hover:border-brand hover:bg-brand hover:text-white"
                                        }`}
                                >
                                    <span className="text-xl transition-transform duration-300 group-hover:rotate-45">
                                        <ArrowUpRight strokeWidth={2.75} />
                                    </span>
                                    <span>Start Here</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}