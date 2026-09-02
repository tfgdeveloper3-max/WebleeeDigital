import { motion, type Variants } from "motion/react";
import {
    Shapes,
    Palette,
    Type,
    BookOpenCheck,
    Package,
    Image as ImageIcon,
} from "lucide-react";

const KIT_ITEMS = [
    {
        icon: Shapes,
        title: "Logo Suite",
        description: "Primary, secondary, and icon variations created to give your brand a recognizable presence across every format and application.",
    },
    {
        icon: Palette,
        title: "Color Palette",
        description: "Strategic typefaces, pairings, and hierarchy rules that give your brand a distinctive voice across every piece of communication.",
    },
    {
        icon: Type,
        title: "Typography System",
        description: "Strategic typefaces, pairings, and hierarchy rules that give your brand a distinctive voice across every piece of communication.",
    },
    {
        icon: BookOpenCheck,
        title: "Brand Guidelines",
        description: "A clear, practical guide that defines how your identity should look, feel, and function across every brand touchpoint.",
    },
    {
        icon: Package,
        title: "Packaging & Print Assets",
        description: "Branded stationery, packaging, and print-ready materials designed to carry your identity seamlessly into the physical world.",
    },
    {
        icon: ImageIcon,
        title: "Social Media Kit",
        description: "Ready-to-use templates, profile assets, and visual elements that keep your social presence instantly recognizable and on-brand.",
    },
];

const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const headerItem: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function BrandingKitSection() {
    return (
        <section className="w-full bg-white px-6 py-20 font-atyp md:px-12 lg:py-28">
            <motion.div
                className="mx-auto max-w-3xl text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={container}
            >
                <motion.span
                    variants={headerItem}
                    className="mb-6 inline-flex w-fit items-center rounded-full bg-neutral-200/70 px-5 py-2 text-sm text-neutral-700"
                >
                    What You Get
                </motion.span>

                <motion.h2
                    variants={headerItem}
                    className="text-[32px] font-light leading-[1.2] text-neutral-900 sm:text-[38px] lg:text-[42px]"
                >
                    Let's Scroll What's In Your{" "}
                    <span className="font-semibold text-brand">Brand Kit</span>
                </motion.h2>

                <motion.p
                    variants={headerItem}
                    className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-500"
                >
                    A cohesive brand system built to give your business consistency, recognition, and creative freedom across every place your identity appears.

                </motion.p>
            </motion.div>

            <motion.div
                className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={container}
            >
                {KIT_ITEMS.map((feature) => {
                    const Icon = feature.icon;
                    return (
                        <motion.div
                            key={feature.title}
                            variants={cardItem}
                            className="group rounded-[22px] bg-[#f5f5f4] p-7 transition-colors duration-500 hover:bg-brand"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white transition-colors duration-500 group-hover:bg-white group-hover:text-brand">
                                <Icon className="h-6 w-6" strokeWidth={1.75} />
                            </div>

                            <h3 className="mt-6 text-lg font-semibold text-neutral-900 transition-colors duration-500 group-hover:text-white">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-neutral-500 transition-colors duration-500 group-hover:text-white/85">
                                {feature.description}
                            </p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}