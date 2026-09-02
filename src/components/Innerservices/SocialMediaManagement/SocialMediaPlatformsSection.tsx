import { motion, type Variants } from "motion/react";
import {
    Calendar,
    Users,
    BarChart2,
    Target,
    ImagePlus,
    MessageCircle,
} from "lucide-react";

const SOCIAL_SERVICES = [
    {
        icon: Calendar,
        title: "Content Planning & Scheduling",
        description: "Strategic content calendars built around your brand, audience, campaigns, and the moments that matter published consistently and on time.",
    },
    {
        icon: ImagePlus,
        title: "Graphic & Reel Creation",
        description: "Scroll-stopping visuals, carousels, and short-form videos crafted to capture attention while keeping your brand instantly recognizable.",
    },
    {
        icon: MessageCircle,
        title: "Community Management",
        description: "Thoughtful, timely responses to comments and messages that turn audience interactions into genuine conversations and stronger relationships.",
    },
    {
        icon: Target,
        title: "Paid Social Advertising",
        description: "Targeted social campaigns designed around the right audience, creative, messaging, and objectives to turn attention into measurable action.",
    },
    {
        icon: Users,
        title: "Influencer Collaboration",
        description: "Purposeful creator partnerships selected for brand alignment, audience relevance, authenticity, and meaningful reach not vanity metrics.",
    },
    {
        icon: BarChart2,
        title: "Performance Reporting",
        description: "Clear monthly insights into reach, engagement, audience growth, and campaign performance, so every decision is backed by what the data tells us.",
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

export default function SocialMediaPlatformsSection() {
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
                    What We Handle
                </motion.span>

                <motion.h2
                    variants={headerItem}
                    className="text-[32px] font-light leading-[1.2] text-neutral-900 sm:text-[38px] lg:text-[42px]"
                >
                    From Social Noise To{" "}
                    <span className="font-semibold text-brand">Brand Presence</span>
                </motion.h2>

                <motion.p
                    variants={headerItem}
                    className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-500"
                >
                    We turn your social channels into a living extension of your brand combining strategy, creative, community, and performance to keep your business visible, relevant, and worth following.
                </motion.p>
            </motion.div>

            <motion.div
                className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={container}
            >
                {SOCIAL_SERVICES.map((feature) => {
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