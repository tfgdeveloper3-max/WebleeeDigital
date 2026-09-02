import { motion, type Variants } from "motion/react";
import {
    Search,
    FileSearch,
    Link2,
    Gauge,
    MapPin,
    LineChart,
} from "lucide-react";

const SEO_INCLUSIONS = [
    {
        icon: Search,
        title: "Keyword Research",
        description: "We uncover the search terms, questions, and intent patterns that reveal what your ideal customers are actively looking for.",
    },
    {
        icon: FileSearch,
        title: "On-Page Optimization",
        description: "We refine your titles, headings, metadata, content, internal linking, and page structure to make every page clearer to both users and search engines.",
    },
    {
        icon: Gauge,
        title: "Technical SEO Audits",
        description: "We identify and resolve the technical barriers affecting crawlability, indexing, site speed, mobile performance, and overall search visibility.",
    },
    {
        icon: Link2,
        title: "Link Building",
        description: "We strengthen your website’s authority through relevant, quality-focused link acquisition built around credibility not shortcuts.",
    },
    {
        icon: MapPin,
        title: "Local SEO",
        description: "We optimize your local search presence so nearby customers can discover, trust, and choose your business when it matters most.",
    },
    {
        icon: LineChart,
        title: "Analytics & Reporting",
        description: "We turn rankings, traffic, conversions, and search performance into clear insights so you always know what’s working and where we’re going next.",
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

export default function SeoStrategySection() {
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
                    What’s Included
                </motion.span>

                <motion.h2
                    variants={headerItem}
                    className="text-[32px] font-light leading-[1.2] text-neutral-900 sm:text-[38px] lg:text-[42px]"
                >
                    THE WORK BEHIND{" "}
                    <span className="font-semibold text-brand">BEING FOUND.</span>
                </motion.h2>

                <motion.p
                    variants={headerItem}
                    className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-500"
                >
                    A strategic SEO system built beyond rankings—combining search intelligence, technical precision, content optimization, authority building, and measurable growth to put your brand in front of the right audience.
                </motion.p>
            </motion.div>

            <motion.div
                className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={container}
            >
                {SEO_INCLUSIONS.map((feature) => {
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